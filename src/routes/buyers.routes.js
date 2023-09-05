const express = require("express");
const router = express.Router();
const { buyerGet, buyerPost, buyerPath, buyerDelete } = require("../controllers");



router.get("/buyers", buyerGet);
router.get("/buyers/:id", buyerGet);
router.post("/buyers", buyerPost);
router.patch("/buyers", buyerPath);
router.delete("/buyers", buyerDelete);

module.exports = router;