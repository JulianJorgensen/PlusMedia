require('dotenv').config();
let express = require('express');
let app = module.exports = express();
let bodyParser = require('body-parser');
let logger = require('morgan');
let expressStaticGzip = require("express-static-gzip");

// routes
let email = require('./routes/email');
let contentful = require('./routes/contentful');

const NODE_ENV = (process.env.NODE_ENV || 'development');
const IS_PRODUCTION = (NODE_ENV === 'production');

console.log('running node on ', NODE_ENV);

const PUBLIC_PATH = 'public';

// Set port
app.set('port', (process.env.PORT || 3000));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Email route
app.use('/email', email);

// Contenful route
app.use('/contentful', contentful);

// Serve Gzip
app.use("/", expressStaticGzip(PUBLIC_PATH));

// Catch all other paths and serve the index file
app.all('*', function (request, response) {
  response.sendFile(PUBLIC_PATH + '/index.html');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
