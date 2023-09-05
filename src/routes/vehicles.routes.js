const express = require("express");
const router = express.Router();
const { getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle } = require("../controllers");



router.get("/vehicles", getVehicles);
router.get("/vehicles/:id", getVehicle);
router.post("/vehicles", createVehicle);
router.patch("/vehicles/:id", editVehicle);
// router.delete("/vehicle/:id", deleteVehicle);

module.exports = router;