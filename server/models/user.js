module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
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
