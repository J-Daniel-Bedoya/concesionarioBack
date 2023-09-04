const db = require("../utils/database");
const { DataTypes } = require("sequelize");


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
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_completo"
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroDocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "numero_documento"
    },

  }, {
    timestamps: false,
  }
);

module.exports = Buyers;