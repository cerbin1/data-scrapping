const db = require("../../../database/database");

module.exports = async function (req, res) {
    const dbConnector = await db.getConnection();
    dbConnector.any("SELECT * FROM reviews_extract")
        .then(function (reviews) {
            const transformedReviews = transformSingleStep(reviews);
            transformedReviews.forEach(review => {
                dbConnector.none('INSERT INTO reviews_transform(id, avatar, username, rating, upvotes, downvotes, date, reviewedAfter, content, reviewerBoughtProduct, productId) ' +
                    'VALUES(${id}, ${avatar}, ${username}, ${rating}, ${upvotes}, ${downvotes}, ${date}, ${reviewedAfter}, ${content}, ${reviewerBoughtProduct}, ${productId})', {
                    id: review.id,
                    avatar: review.avatar,
                    username: review.username,
                    rating: review.rating,
                    upvotes: review.upvotes,
                    downvotes: review.downvotes,
                    date: review.date,
                    reviewedAfter: review.reviewedAfter,
                    content: review.content,
                    reviewerBoughtProduct: review.reviewerBoughtProduct,
                    productId: review.productId
                }).catch(function () {
                    console.log("Error while inserting into reviews_transform");
                });
            });

            dbConnector.none('DELETE FROM reviews_extract')
                .then(() => console.log('DELETE FROM reviews_extract'))
                .catch(() => console.log("Error while deleting from reviews_extract"));
            return res.json(reviews.length);
        })
        .catch(function () {
                console.log("Error while selecting from reviews_extract");
            }
        );
};

function transformReviewedAfter(reviewedAfterInMillis) {
    if (reviewedAfterInMillis !== undefined && reviewedAfterInMillis !== null) {
        return Math.floor(Number(reviewedAfterInMillis) / 86400000);
    }
    return reviewedAfterInMillis;
}

function transformSingleStep(reviews) {
    let transformedReviews = [];
    reviews.forEach(review => {
        let transformedReview = {
            id: review.id,
            avatar: review.avatar,
            username: review.username.trim(),
            rating: transformRating(review.rating),
            upvotes: review.upvotes,
            downvotes: review.downvotes,
            date: review.date,
            reviewedAfter: transformReviewedAfter(review.reviewedafter),
            content: review.content,
            reviewerBoughtProduct: review.reviewerboughtproduct,
            productId: review.productid
        };
        transformedReviews.push(transformedReview);
    });
    return transformedReviews;
}

function transformRating(rating) {
    let parsedRating = parseFloat(
        rating
            .replace(",", ".")
            .replace("/5", ""));
    return Number.isNaN(parsedRating) ? null : parsedRating;
}
