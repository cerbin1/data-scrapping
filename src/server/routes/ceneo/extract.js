const extract = require("../../routes/utils/extract");
const db = require("../../../database/database");

module.exports = async function (req, res) {
    const phrase = req.query.phrase;
    const pagesToSearch = req.query.pagesToSearch;
    const dbConnector = await db.getConnection();

    const rowsAffected = await extractedReviewsCount(dbConnector, phrase, pagesToSearch);
    console.log(rowsAffected)
    return res.json(rowsAffected);
};

async function getReviews(dbConnector) {
    return dbConnector.one("SELECT COUNT(*) FROM reviews_extract")
        .then(result => {
            return result.count;
        })
        .catch(() => console.log("Error while selecting date from reviews_extract"))
}

async function getProducts(dbConnector) {
    return dbConnector.one("SELECT COUNT(*) FROM products_temp")
            .then(result => {
                return result.count;
            })
            .catch(() => console.log("Error while selecting date from products_temp"))
}


async function extractedReviewsCount(dbConnector, phrase, pagesToSearch) {
    await extractStep(dbConnector, phrase, pagesToSearch);

    const reviews = await getReviews(dbConnector);
    const products = await getProducts(dbConnector)
    
    return stats = {
        reviews: reviews,
        products: products
    } 
}

async function clearTables(dbConnector) {
    dbConnector.none('DELETE FROM reviews_extract')
        .then(() => console.log("Delete reviews_extract"))
        .catch(() => console.log("Error while deleting from table reviews_extract"));
    dbConnector.none('DELETE FROM products_temp')
        .then(() => console.log("Delete products_temp"))
        .catch(() => console.log("Error while deleting from table products_temp"));
}

async function extractStep(dbConnector, phrase, pagesToSearch) {
    await clearTables(dbConnector);
    const scrappedProducts = await extract(phrase, pagesToSearch);
    // const scrappedProducts = getTestProductWithOpinions();

    scrappedProducts.forEach(product => {
        dbConnector.none('INSERT INTO products_temp(id, name, description, rating, price) ' +
            'VALUES(${id}, ${name}, ${description}, ${rating}, ${price})', {
            id: product.id,
            name: product.name,
            description: product.description,
            rating: product.rating,
            price: product.price
        }).catch(function () {
            console.log("Error while inserting into products_temp");
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
}
