const extract = require("../../routes/utils/extract");
const db = require("../../../database/database");

module.exports = async function (req, res) {
    const phrase = req.query.phrase;
    const pagesToSearch = req.query.pagesToSearch;
    const dbConnector = await db.getConnection();

    const stats = await wholeProcess(phrase, pagesToSearch, dbConnector);
    return res.json(stats);
};

async function wholeProcess(phrase, pagesToSearch, dbConnector) {
    await extractionStep(phrase, pagesToSearch, dbConnector)
    await TransformationStep(dbConnector)
    const stats = await loadStep(dbConnector)

    return stats;
}

async function loadStep(dbConnector) {


    const existingReviews = await getExistingReviews(dbConnector);
    const existingProducts = await getExistingProducts(dbConnector);


    const addProducts = await dbConnector.any("SELECT * FROM products_temp")
    .then(function (transformedProducts) {
        let filteredProducts = [];
        if (existingProducts === undefined || existingProducts === null || existingProducts.length === 0) {
            filteredProducts = transformedProducts;
        } else {
            let existingProductsIds = [];
            existingProducts.forEach(product=> {
                existingProductsIds.push(product.id)
            });
            filteredProducts = transformedProducts.filter(function (product) {
                return !existingProductsIds.includes(product.id.toString())
            });
        }
        filteredProducts.forEach(product => {
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
        });

        return filteredProducts.length;
    })
    .catch(function (error) {
            console.log("Error while selecting from prodcuts_temp");
        }
    );

    const addReviews = await dbConnector.any("SELECT * FROM reviews_transform")
    .then(function (transformedReviews) {
        let filteredReviews = [];
        if (existingReviews === undefined || existingReviews === null || existingReviews.length === 0) {
            filteredReviews = transformedReviews;
        } else {
            let existingReviewsIds = [];
            existingReviews.forEach(review => {
                existingReviewsIds.push(review.id)
            });
            filteredReviews = transformedReviews.filter(function (review) {
                return !existingReviewsIds.includes(review.id.toString())
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
            .then(() => console.log('DELETE reviews_transform'))
            .catch(() => console.log("Error while deleting from reviews_transform"));
        dbConnector.none('DELETE FROM products_temp')
            .then(() => console.log("Delete products_temp"))
            .catch(() => console.log("Error while deleting from table products_temp"));
        return filteredReviews.length;
    })
    .catch(function (error) {
            console.log("Error while selecting from reviews_transform");
        }
    );

    return stats = {
            products: addProducts,
            reviews: addReviews
        };
}

async function getExistingReviews(dbConnector) {
    return dbConnector.any("SELECT * FROM reviews")
        .then(function (reviews) {
            return reviews;
        }).catch(function () {
            console.log("Error while selecting from reviews");
        });
}

async function getExistingProducts(dbConnector) {
    return dbConnector.any("SELECT * FROM products")
        .then(function (products) {
            return products;
        }).catch(function () {
            console.log("Error while selecting from products");
        });
}

async function TransformationStep(dbConnector) {
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
            console.log(reviews.length);
        })
        .catch(function () {
                console.log("Error while selecting from reviews_extract");
            }
        );
}

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

async function extractionStep(phrase, pagesToSearch, dbConnector) {
    const rowsAffected = await extractedReviewsCount(dbConnector, phrase, pagesToSearch);
    console.log(rowsAffected)
}

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
    dbConnector.none('DELETE FROM reviews_transform')
        .then(() => console.log("Delete reviews_transform"))
        .catch(() => console.log("Error while deleting from table reviews_transform"));
}

async function extractStep(dbConnector, phrase, pagesToSearch) {
    await clearTables(dbConnector);
    const scrappedProducts = await extract(phrase, pagesToSearch);

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
