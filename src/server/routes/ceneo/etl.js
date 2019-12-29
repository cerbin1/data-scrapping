const db = require("../../../database/database");
const extract = require("../../routes/utils/extract");

module.exports = async function (req, res) {
    const phrase = req.query.phrase;
    const pagesToSearch = req.query.pagesToSearch;


    const data = await extract(phrase, pagesToSearch);
    await wholeProcess(res, data);
};


async function wholeProcess(res, products) {
    let dbConnector = await db.getConnection();

    let numberOfRecords = 0;
    // E - products
    products.forEach(product => {
        // T
        const transformedReviews = transform(product.reviews);

        dbConnector.none('INSERT INTO products(id, name, description, rating, price) ' +
            'VALUES(${id}, ${name}, ${description}, ${rating}, ${price})', {
            id: product.id,
            name: product.name,
            description: product.description,
            rating: product.rating,
            price: product.price
        }).catch(function () {
                console.log("Error while insert into products");
            }
        );

        // L
        dbConnector.any("SELECT * FROM reviews where productId = ${productId}", {productId: product.id})
            .then(function (existingReviews) {
                let existingReviewsIds = existingReviews.map(review => review.id);
                let filteredReviews = transformedReviews.filter(function (review) {
                    return !existingReviewsIds.includes(review.reviewId.toString()) // TODO: id enough?
                });
                numberOfRecords += filteredReviews.length; // TODO fix calculating

                filteredReviews.forEach(review => {
                    dbConnector.none('INSERT INTO reviews(id, reviewerUsername, rating, upvotes, downvotes, date, reviewedAfter, content, reviewerBoughtProduct, productId) ' +
                        'VALUES(${id}, ${reviewerUsername}, ${rating}, ${upvotes}, ${downvotes}, ${date}, ${reviewedAfter}, ${content}, ${reviewerBoughtProduct}, ${productId})', {
                        id: review.reviewId,
                        reviewerUsername: review.reviewer.username,
                        rating: review.rating,
                        upvotes: review.usefulness.upvotes,
                        downvotes: review.usefulness.downvotes,
                        date: review.date,
                        reviewedAfter: review.reviewedAfter,
                        content: review.text,
                        reviewerBoughtProduct: review.didUserBuyTheProduct,
                        productId: product.id
                    });
                });
            })
            .catch(function () {
                    return res.json("Error");
                }
            );
    });
    return res.json(numberOfRecords);
}

function transformRating(rating) {
    let parsedRating = parseFloat(
        rating
            .replace(",", ".")
            .replace("/5", ""));
    return Number.isNaN(parsedRating) ? null : parsedRating;
}

function transformReviewedAfter(reviewedAfterInMillis) {
    if (reviewedAfterInMillis !== undefined && reviewedAfterInMillis !== null) {
        return Math.floor(Number(reviewedAfterInMillis) / 86400000);
    }
    return reviewedAfterInMillis;
}

function transform(reviews) {
    let transformedReviews = [];
    reviews.forEach(review => {
        let transformedReview = {
            reviewId: review.reviewId,
            reviewer: {avatar: review.reviewer.avatar, username: review.reviewer.username.trim()},
            rating: transformRating(review.rating),
            usefulness: {upvotes: review.usefulness.upvotes, downvotes: review.usefulness.downvotes},
            date: review.date,
            reviewedAfter: transformReviewedAfter(review.reviewedAfter),
            text: review.text,
            didUserBuyTheProduct: review.didUserBuyTheProduct
        };
        transformedReviews.push(transformedReview);
    });
    return transformedReviews;
}
