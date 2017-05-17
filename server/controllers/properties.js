const Property = require('../models').Property;

module.exports = {
  create(req, res) {
    return Property
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      })
      .then(property => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
