const { Router } = require("express")
const { authUser } = require("../controllers")
const router = Router()

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Iniciar seción
 *     tags: [Login]
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createLogin"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/login"
 */



router.post("/auth/login", authUser)

module.exports = router