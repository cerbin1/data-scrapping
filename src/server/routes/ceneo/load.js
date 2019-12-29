const db = require("../../../database/database");

async function getExistingReviews(dbConnector) {
    dbConnector.any("SELECT * FROM reviews")
        .then(function (reviews) {
            return reviews;
        }).catch(function () {
        console.log("Error while selecting from reviews");
    });
}

module.exports = async function (req, res) {
    const dbConnector = await db.getConnection();

    const existingReviews = await getExistingReviews(dbConnector);

    dbConnector.any("SELECT * FROM reviews_transform")
        .then(function (transformedReviews) {
            let filteredReviews;
            if (existingReviews === undefined || existingReviews === null) {
                filteredReviews = transformedReviews;
            } else {
                let existingReviewsIds = existingReviews.map(review => review.id);
                filteredReviews = transformedReviews.filter(function (review) {
                    return !existingReviewsIds.includes(review.reviewId.toString())
                });
            }
            filteredReviews.forEach(review => {
                dbConnector.none('INSERT INTO reviews(id, reviewerUsername, rating, upvotes, downvotes, date, reviewedAfter, content, reviewerBoughtProduct, productId) ' +
                    'VALUES(${id}, ${reviewerUsername}, ${rating}, ${upvotes}, ${downvotes}, ${date}, ${reviewedAfter}, ${content}, ${reviewerBoughtProduct}, ${productId})', {
                    id: review.id,
                    reviewerUsername: review.username,
                    rating: review.rating,
                    upvotes: review.upvotes,
                    downvotes: review.downvotes,
                    date: review.date,
                    reviewedAfter: review.reviewedafter,
                    content: review.content,
                    reviewerBoughtProduct: review.reviewerboughtproduct,
                    productId: review.productid
                }).catch(() => console.log("Error while inserting into reviews"));
            });
            dbConnector.none('DELETE FROM reviews_transform')
                .then(() => console.log('DELETE FROM reviews_transform'))
                .catch(() => console.log("Error while deleting from reviews_transform"));
            return res.json(filteredReviews.length);
        })
        .catch(function () {
                console.log("Error while selecting from reviews_transform");
            }
        );
};
