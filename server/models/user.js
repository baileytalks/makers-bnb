// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     e - mail: DataTypes.STRING,
//     password: DataTypes.TEXT
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return User;
// };

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT
    },
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Property, {
          foreignKey: 'userId',
          as: 'property',
        });
      },
    },
  });
  return User;
};
