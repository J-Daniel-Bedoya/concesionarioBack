const { getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer } = require('./buyers.controllers');
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require('./price.controllers');
const { getSales, getSale, registerSale } = require('./sales.controllers');
const { userLogin, userRegister } = require('./users.controllers');
const { getVehicles,getVehicle, createVehicle, editVehicles, deleteVehicle } = require("./vehicles.controllers");


module.exports = {
    getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer,
    getPrices, getPrice , createPrice, updatePrice, deletePrice,
    getSales, getSale, registerSale,
    userLogin, userRegister,
    getVehicles,getVehicle, createVehicle, editVehicles, deleteVehicle,
}