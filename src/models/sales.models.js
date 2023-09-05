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
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "vehicle_id",
      references:{
        model: Vehicles
      }
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