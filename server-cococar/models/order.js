"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Trip);
      // define association here
    }
  }
  Order.init(
    {
      orderStatus: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      TripId: DataTypes.INTEGER,
      OrderId: DataTypes.INTEGER,
      amount:DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
