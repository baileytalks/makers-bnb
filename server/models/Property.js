'use strict';
module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define('Property', {
    title: DataTypes.STRING
    description: DataTypes.TEXT
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Property;
};
