const express = require("express");
const router = express.Router();
const { getBuyers, getBuyer, ingressBuyer, updateBuyer, deleteBuyer} = require("../controllers");


router.get("/buyers", getBuyers);
router.get("/buyers/:id", getBuyer);
router.post("/buyers", ingressBuyer);
router.patch("/buyers/:id", updateBuyer);
router.delete("/buyers/:id", deleteBuyer);

module.exports = router;