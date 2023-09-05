const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Price = db.define(
  "price",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    timestamps: false,
  }
);

module.exports = Price;