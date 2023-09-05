const { Router } = require("express")
const { authUser } = require("../controllers")

const router = Router()

router.post("/auth/login", authUser)

module.exports = router