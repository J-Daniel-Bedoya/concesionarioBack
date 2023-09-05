const express = require("express");
const router = express.Router();
const { getVehicles,getVehicle, createVehicle, editVehicles, deleteVehicle } = require("../controllers");



router.get("/vehicle", getVehicles);
router.get("/vehicle/:id", getVehicle);
router.post("/vehicle", createVehicle);
router.patch("/vehicle/:id", editVehicles);
router.delete("/vehicle/:id", deleteVehicle);

module.exports = router;