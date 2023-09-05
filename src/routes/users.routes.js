const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister} = require("../controllers");

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user in the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username, email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/users"
 */


router.post("/users", userRegister); 

module.exports = router;