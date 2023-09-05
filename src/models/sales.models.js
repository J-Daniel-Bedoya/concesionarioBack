const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Vehicles = require("./vehicles.models");


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
      type: DataTypes.STRING,
      allowNull: false,
      field: "vehicle_id",
      references:{
        model: Vehicles
      }
    },
    buyerId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "buyer_id",
      references:{
        model: Vehicles
      }
    },
    fechaCompra: {
      type: DataTypes.JSON,
      allowNull: true,
    },

  }, {
    timestamps: false,
  }
);

module.exports = Sales;