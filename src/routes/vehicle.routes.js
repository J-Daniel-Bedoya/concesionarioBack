const express = require("express");
const router = express.Router();
const { vehicleGet, vehiclePost, vehiclePath, vehicleDelete } = require("../controllers");



router.get("/vehicle", vehicleGet);
router.get("/vehicle/:id", vehicleGet);
router.post("/vihicle", vehiclePost);
router.patch("/vehicle:id", vehiclePath);
router.delete("/vehicle:id", vehicleDelete);

module.exports = router;