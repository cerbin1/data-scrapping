const app = require("express")();
const routes = require("./routes/routes.js");

const config = {
  port: 3000
}

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `localhost/:${config.port}`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!

const server = app.listen(config.port, function(err) {
  if (err) throw Error(err);
  console.log("server online at port " + config.port);
});

