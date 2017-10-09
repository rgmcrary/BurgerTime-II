module.exports = function(sequelize, DataTypes) {
  var Sqlburgers = sequelize.define('Sqlburgers', {
    burgers: {
      type: DataTypes.STRING,
      notNull: true
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    devourer: DataTypes.STRING
  });
  return Sqlburgers;
};
