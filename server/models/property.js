// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var Property = sequelize.define('Property', {
//     title: DataTypes.STRING
//     description: DataTypes.TEXT
//     price: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return Property;
// };

module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    }, {
    classMethods: {
      associate: (models) => {
        Property.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Property;
};
