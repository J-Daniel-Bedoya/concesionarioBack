const { getBuyers, getBuyer, ingressBuyer } = require('./buyers.controllers');
const { getPrices, getPrice , createPrice } = require('./price.controllers');
const { getSales, getSale, registerSale } = require('./sales.controllers');
const { userRegister } = require('./users.controllers');
const { authUser } = require('./auth.controllers');
const { getVehicles,getVehicle, createVehicle, editVehicles, deleteVehicle } = require("./vehicles.controllers");


module.exports = {
    getBuyers, getBuyer, ingressBuyer,
    getPrices, getPrice , createPrice,
    getSales, getSale, registerSale,
    userRegister,
    authUser,
    getVehicles,getVehicle, createVehicle, editVehicles, deleteVehicle,
}