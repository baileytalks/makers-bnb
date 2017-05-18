const User = require('../models').User;

// module.exports = {
//   create(req, res) {
//     return User
//     .create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     })
//     .then(user => res.status(201).send(user))
//     .catch(error => res.status(400).send(error));
//   },
// };

module.exports = {
  create(name, email, password) {
    return User
    .create({
      name: name,
      email: email,
      password: password,
    })
    // .then(user => res.status(201).send(user))
    // .catch(error => res.status(400).send(error));
  },
};


// create function is designed to be a route handler
// req parameter is the incoming request from client
// res parameter is the response to client request
// next passes request to next route handler (when theres multiple handlers)
