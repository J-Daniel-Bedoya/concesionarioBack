const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Price = db.define(
  "price",
  {
    preciosID: {
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
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: 'El precio debe ser mayor o igual a 0.',
        },
        max:{
          args: [250000000]
        },
    }},
  }, {
    timestamps: false,
  }
);

module.exports = Price;