const app = require("express")();
const routes = require("./routes/routes.js");

const config = {
    port: 3000
};

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!

const server = app.listen(config.port, function (err) {
    if (err) throw Error(err);
    console.log("server online at port " + config.port);
});

