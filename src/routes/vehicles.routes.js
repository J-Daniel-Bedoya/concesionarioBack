const express = require("express");
const router = express.Router();
const { 
    getVehicles, 
    getVehicle, 
    createVehicle, 
    editVehicle, 
    deleteVehicle, 
    sellVehicle,
    sumVehicles,
} = require("../controllers");



router.get("/vehicles", getVehicles);
router.get("/vehicles/:id", getVehicle);
router.post("/vehicles", createVehicle);
router.patch("/vehicles/:id", editVehicle);
router.delete("/vehicles/:id", deleteVehicle);
router.post("/vehicles/:id/sale", sellVehicle);
router.post("/vehicles/sum", sumVehicles);

module.exports = router;