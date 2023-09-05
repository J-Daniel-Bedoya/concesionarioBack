const express = require("express");
const router = express.Router();
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require("../controllers");



router.get("/price", getPrices);
router.get("/price/:id", getPrice);
router.post("/price", createPrice);
router.patch("/price/:id", updatePrice);
router.delete("/price/:id", deletePrice);

module.exports = router;