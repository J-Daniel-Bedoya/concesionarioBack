const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getSales, getSale, createSale, updateSale, deleteSale } = require("../controllers");



router.get("/sales", authenticate, getSales);
router.get("/sales/:id", authenticate, getSale);
router.post("/sales", authenticate, createSale);
router.patch("/sales/:id", authenticate, updateSale);
router.delete("/sales/:id", authenticate, deleteSale);

module.exports = router;