'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User)
      // this.belongsTo(models.Order)
      // define association here
    }
  }
  Trip.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    price: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    hour: DataTypes.INTEGER,
    status: DataTypes.STRING,
    carName: DataTypes.STRING,
    carImg: DataTypes.STRING,
    date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};