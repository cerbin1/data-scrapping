const db = require("../../../database/database");

module.exports = async function (req, res) {
    const dbConnector = await db.getConnection();
    dbConnector.any("SELECT * FROM reviews LEFT JOIN products ON productId = products.id")
        .then(function (allReviews) {
            let exported_csv = '\"Nazwa użytkownika\",Ocena,\"Ilość łapek w górę\",\"Ilość łapek w dół\",\"Data oceny\",\"Oceniono po dniach\",\"Treść oceny\",\"Czy użytkownik kupił opinie\",\"Nazwa produktu\"\n';
            allReviews.forEach(function (review) {
                exported_csv = exported_csv + "\"" + review.reviewerusername.replace(/"/g, '\'') + "\"" + ","
                    + "\"" + review.rating + "\"" + ","
                    + "\"" + review.upvotes + "\"" + ","
                    + "\"" + review.downvotes + "\"" + ","
                    + "\"" + review.date + "\"" + ","
                    + "\"" + review.reviewedafter + "\"" + ","
                    + "\"" + review.content.replace(/"/g, '\'') + "\"" + ","
                    + review.reviewerboughtproduct + ","
                    + "\"" + review.name.replace(/"/g, '\'') + "\"" + "\n";
            });
            console.log("Generating CSV file");
            return res.send(Buffer.from(exported_csv));
        })
        .catch(function () {
                console.log("Error while selecting from reviews");
            }
        );
};
