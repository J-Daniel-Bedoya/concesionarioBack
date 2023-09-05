const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userGet, userPost, userPath, userDelete } = require("../controllers");



router.get("/users", userGet);
router.get("/users/:id", authenticate, userGet);
router.post("/users", userPost);
router.patch("/users", userPath);
router.delete("/users", userDelete);

module.exports = router;