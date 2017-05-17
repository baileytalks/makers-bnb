const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Set up the express app
const app = express();
var session = require('express-session');
var sess;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//adds css fucntionality
app.use(express.static(__dirname + '/public'));

//----------------------------------------------------------------

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

//----------------------------------------------------------------

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("home");
});

app.get('/signup', function(req, res) {
  res.render("signup");
});

app.get('/login', function(req, res) {
  res.render("login");
});

app.post('/confirmation', function(req, res) {
  sess = req.session;
  sess.name = req.body.name;
  res.render("confirmation", {
    name: sess.name
  });
});

//----------------------------------------------------------------

module.exports = app;
