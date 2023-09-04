const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Vehicle = db.define(
  "vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    kilometraje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    esNuevo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      field: "es_nuevo"
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cilindraje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numVelocidades: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "num_velocidades",
    },
  }, {
    timestamps: false,
  }
);

module.exports = Vehicle;