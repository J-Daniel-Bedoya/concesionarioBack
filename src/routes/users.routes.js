const express = require("express");
const router = express.Router();
// const authenticate = require("../middlewares/auth.middleware");
const { userRegister} = require("../controllers");

router.post("/users", userRegister);

module.exports = router;