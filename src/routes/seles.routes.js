const express = require("express");
const router = express.Router();
const { seleGet, selePost, selePath, seleDelete } = require("../controllers");



router.get("/seles", seleGet);
router.get("/seles/:id", seleGet);
router.post("/seles", selePost);
router.patch("/seles", selePath);
router.delete("/seles", seleDelete);

module.exports = router;