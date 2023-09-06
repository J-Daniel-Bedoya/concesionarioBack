const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     buyers:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         nombreCompleto:
 *           type: string
 *           example: "2024 HR-V"
 *         documento:
 *           type: int
 *           example: 234000
 *         numDocumento:
 *           type: int
 *           example: 234000
 *     createBuyers:
 *       type: object
 *       properties:
 *         nombreCompleto:
 *           type: string
 *           example: "2024 HR-V"
 *         documento:
 *           type: int
 *           example: 234000
 *         numDocumento:
 *           type: int
 *           example: 234000
 */
    
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
    numeDocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "numero_documento"
    },
  }, {
    timestamps: false,
  }
);

module.exports = Buyers;
