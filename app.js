const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//----------------------------------------------------------------

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("home",{Error:"none"});
});

app.post('/confirmation', function(req, res) {
  res.render("confirmation", {Error:"none"});
});

//----------------------------------------------------------------

module.exports = app;
