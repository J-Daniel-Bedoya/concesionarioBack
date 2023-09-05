const db = require("../utils/database");
const { DataTypes } = require("sequelize");


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
      type: DataTypes.STRING,
      allowNull: false,
      field: "vehicles_id"
    },
    buyersId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "buyers_id"
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