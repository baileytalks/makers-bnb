const User = require('../models').User;

module.exports = {
  create(name, email, password) {
    return User
    .create({
      name: name,
      email: email,
      password: password,
    })
  },
};
