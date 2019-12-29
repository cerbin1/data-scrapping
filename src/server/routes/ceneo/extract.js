const extract = require("../../routes/utils/extract");
const db = require("../../../database/database");

module.exports = async function (req, res) {
    const phrase = req.query.phrase;
    const pagesToSearch = req.query.pagesToSearch;
    const dbConnector = await db.getConnection();

    const rowsAffected = await extractedReviewsCount(dbConnector, phrase, pagesToSearch);
    return res.json(rowsAffected);
};

async function extractedReviewsCount(dbConnector, phrase, pagesToSearch) {
    const done = await extractStep(dbConnector, phrase, pagesToSearch);
    if (done) {
        return dbConnector.one("SELECT COUNT(*) FROM reviews_extract")
            .then(result => {
                console.log(result);
                return result.count;
            });
    }
}

async function clearTables(dbConnector) {
    dbConnector.none('DELETE FROM reviews_extract;')
        .then(() => console.log("Delete reviews_extract"))
        .catch(() => console.log("Error while deleting from table reviews_extract"));
}

async function extractStep(dbConnector, phrase, pagesToSearch) {
    await clearTables(dbConnector);
    const scrappedProducts = await extract(phrase, pagesToSearch);
    // const scrappedProducts = getTestProductWithOpinions();

    scrappedProducts.forEach(product => {
        dbConnector.none('INSERT INTO products(id, name, description, rating, price) ' +
            'VALUES(${id}, ${name}, ${description}, ${rating}, ${price})', {
            id: product.id,
            name: product.name,
            description: product.description,
            rating: product.rating,
            price: product.price
        }).catch(function () {
            console.log("Error while inserting into products");
        });

        product.reviews.forEach(review => {
            dbConnector.none('INSERT INTO reviews_extract(id, avatar, username, rating, upvotes, downvotes, date, reviewedAfter, content, reviewerBoughtProduct, productId) ' +
                'VALUES(${id}, ${avatar}, ${username}, ${rating}, ${upvotes}, ${downvotes}, ${date}, ${reviewedAfter}, ${content}, ${reviewerBoughtProduct}, ${productId})', {
                id: review.reviewId,
                avatar: review.reviewer.avatar,
                username: review.reviewer.username,
                rating: review.rating,
                upvotes: review.usefulness.upvotes,
                downvotes: review.usefulness.downvotes,
                date: review.date,
                reviewedAfter: review.reviewedAfter,
                content: review.text,
                reviewerBoughtProduct: review.didUserBuyTheProduct,
                productId: product.id
            }).catch(function () {
                console.log("Error while inserting into reviews_extract");
            });
        });
    });
    return true;
}
