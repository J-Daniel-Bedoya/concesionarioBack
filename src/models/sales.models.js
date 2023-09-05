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
    vehiclesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "vehicles_id",
      references:{
        model: Vehicles
      }
    },
    buyersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "buyers_id",
      references: {
        model: Buyers
      }
    },
  }, {
    timestamps: true,
  }
);

module.exports = Sales;