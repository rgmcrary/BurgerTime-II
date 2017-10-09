module.exports = function(sequelize, DataTypes) {
  var Sqlburgers = sequelize.define('Sqlburgers', {
    burger: {
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
