const express = require("express");
const router = express.Router();
// const authenticate = require("../middlewares/auth.middleware");
const { userLogin, userRegister} = require("../controllers");

router.get("/users/:id", /*authenticate*/ userLogin);
router.post("/users", userRegister);

module.exports = router;