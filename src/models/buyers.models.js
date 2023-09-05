const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Sales = require("./sales.models");

    
const Buyers = db.define(
  "buyers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "nombre_completo"
    },
    documento: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    numeroDocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "numero_documento"
    },
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "sale_id",
      references: {
        model: Sales
      }
    }
  }, {
    timestamps: false,
  }
);

module.exports = Buyers;
