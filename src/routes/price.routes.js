const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require("../controllers");

/**
 * @openapi
 * /api/v1/price:
 *   get:
 *     summary: Llama todos los elementos de price
 *     tags: [Price]
 *     requestBody:
 *       description: TMuestra todo lo que contiene price
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

router.get("/price",  authenticate, getPrices);
router.get("/price/:id", authenticate, getPrice);
router.post("/price", authenticate, createPrice);
router.patch("/price/:id", authenticate, updatePrice);
router.delete("/price/:id", authenticate, deletePrice);

module.exports = router;