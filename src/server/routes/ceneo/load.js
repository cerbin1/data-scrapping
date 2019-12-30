const db = require("../../../database/database");

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

module.exports = async function (req, res) {
    const dbConnector = await db.getConnection();

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

    return res.json(stats = {
            products: addProducts,
            reviews: addReviews
        });
 
};
