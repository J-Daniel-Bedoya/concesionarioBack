const express = require("express");
const router = express.Router();
const { priceGet, pricePost, pricePath, priceDelete } = require("../controllers");



router.get("/price", priceGet);
router.get("/price/:id", priceGet);
router.post("/price", pricePost);
router.patch("/price", pricePath);
router.delete("/price", priceDelete);

module.exports = router;