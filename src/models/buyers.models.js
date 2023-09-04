const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Buyers = db.define('Buyers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
});

module.exports = Buyers;
    