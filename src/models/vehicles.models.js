const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Price = require("./price.models");
const Sales = require("./sales.models");


const Vehicles = db.define('vehicles', {
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
  fechaRegistro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  esNuevo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'URL o ruta de la imagen',
  },
  kilometraje: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: 'El kilometraje debe ser mayor o igual a 0.',
      },
    },
    comment: 'Valor mayor o igual a 0',
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
      }
    },
  },
  cilindraje: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: [0],
        msg: 'El cilindraje debe ser mayor o igual a 0.',
      },
      max: {
        args: [450],
        msg: 'El cilindraje máximo es 450.',
      },
    },
    comment: 'Capacidad de cilindraje de la moto (máximo 450)',
  },

  numVelocidades: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: [0],
        msg: 'El número de velocidades debe ser mayor o igual a 0.',
      },
      max: {
        args: [6],
        msg: 'El número máximo de velocidades es 6.',
      },
    },
    comment: 'Número de velocidades de la moto (máximo 6)',
  },
}, {
  timestamps: false,
})


module.exports = Vehicles
