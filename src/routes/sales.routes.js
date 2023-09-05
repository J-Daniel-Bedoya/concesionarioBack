const express = require("express");
const router = express.Router();
const { getSales, getSale, updateSale, deleteSale } = require("../controllers");



router.get("/sales", getSales);
router.get("/sales/:id", getSale);
router.patch("/sales/:id", updateSale);
router.delete("/sales/:id", deleteSale);

module.exports = router;