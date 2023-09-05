const db = require("../utils/database");
const { DataTypes } = require("sequelize");
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
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    esNuevo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    },
    fechaRegistro: {
      type: DataTypes.STRING,
      allowNull: false
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