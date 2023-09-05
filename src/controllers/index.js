const { getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer } = require('./buyers.controllers');
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require('./price.controllers');
const { getSales, getSale, registerSale } = require('./sales.controllers');
const { userRegister } = require('./users.controllers');
const { authUser } = require('./auth.controllers');
const { getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle } = require("./vehicles.controllers");


module.exports = {
    getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer,
    getPrices, getPrice , createPrice, updatePrice, deletePrice,
    getSales, getSale, registerSale,
    userRegister,
    authUser,
    getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle,
}