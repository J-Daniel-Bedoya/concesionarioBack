const express = require("express");
const router = express.Router();
const { getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer} = require("../controllers");


router.get("/buyers", getBuyers);
router.get("/buyers/:id", getBuyer);
router.post("/buyers", createBuyer);
router.patch("/buyers/:id", updateBuyer);
router.delete("/buyers/:id", deleteBuyer);

module.exports = router;