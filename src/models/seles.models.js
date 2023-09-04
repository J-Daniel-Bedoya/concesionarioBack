const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Seles = db.define(
  "seles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    compradorId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "comprador_id"
    },
    vehicleId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "vehicle_id"
    },
    fechaCompra: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  }, {
    timestamps: false,
  }
);

module.exports = Seles;