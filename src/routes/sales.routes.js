const express = require("express");
const router = express.Router();
const { getSales, getSale, createSale, updateSale, deleteSale } = require("../controllers");



router.get("/sales", getSales);
router.get("/sales/:id", getSale);
router.post("/sales", createSale);
router.patch("/sales/:id", updateSale);
router.delete("/sales/:id", deleteSale);

module.exports = router;