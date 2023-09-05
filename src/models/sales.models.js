const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Vehicles = require("./vehicles.models");
const Buyers = require("./buyers.models");


const Sales = db.define(
  "sales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "buyer_id",
      references: {
        model: Buyers
      }
    },
  }, {
    timestamps: true,
  }
);

module.exports = Sales;