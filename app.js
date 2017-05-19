const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Set up the express app
const app = express();
var session = require('express-session');
var sess;

var Sequelize = require('sequelize');

var connection = new Sequelize('makers_bnb_development', 'postgres', 'password', {
  dialect: 'postgres'
});

var User = connection.define ('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

var Property = connection.define ('property', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
});

function userCreate() {
  connection.sync().then(function() {
  User.create({
    name: sess.name,
    email: sess.email,
    password: sess.password,
  })
});
}

module.exports = userCreate;
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
  res.render("signup", {
    error: ""
  });

});

app.get('/login', function(req, res) {
  res.render("login");
});

app.post('/confirmation', function(req, res) {
  sess = req.session;
  sess.name = req.body.name;
  sess.email = req.body.email;
  sess.password = req.body.password;
  sess.passwordConfirmation = req.body.passwordConfirmation;

  userCreate(sess.name, sess.email, sess.password);

 passwordConfirmation(res);

 res.render("confirmation", {
    name: sess.name
  })
})

app.get('/property', function(req, res) {
  res.render("newProperty");
});

app.post('/newProperty', function(req, res) {
  sess = req.session;
  sess.title = req.body.title;
  sess.description = req.body.description;
  sess.price = req.body.price;

  connection.sync().then(function() {
    Property.create({
      title: sess.title,
      description: sess.description,
      price: sess.price,
    })
  })

  res.redirect("/propertyList");
})

// app.get('/propertyList', function(req, res) {
//   connection.sync().then(function() {
//     (Property.findAll().then( function(users) {users = users})
//
//   })
//
//   res.render('propertyList', {
//     users: users
//   })
// })

//----------------------------------------------------------------

function passwordConfirmation(res) {
  if ( sess.password != sess.passwordConfirmation ) {
    res.render("signup", {
      error: 'Passwords do not match!'
    })
  }
}

module.exports = app;
