const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle } = require("../controllers");



router.get("/vehicles", authenticate, getVehicles);
router.get("/vehicles/:id", authenticate, getVehicle);
router.post("/vehicles", authenticate, createVehicle);
router.patch("/vehicles/:id", authenticate, editVehicle);
router.delete("/vehicles/:id", authenticate, deleteVehicle);

module.exports = router;