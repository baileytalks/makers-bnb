var Sequelize = require(‘sequelize’);

var connection = new Sequelize(‘makers_bnb_development’, ‘postgres’, ‘password’, {
  dialect: ‘postgres’
});

var User = connection.define (‘user’, {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

connection.sync().then(function() {
  User.create({
    name: “Will”,
    email: “fwjaifwjaiawf”,
    password: “awgjigwa”,
  })
});
