const {Buyers} = require('./buyers.controllers');
const {Price} = require('./price.controllers');
const {Seles} = require('./seles.controllers');
const {Users} = require('./users.controllers');
const {vehicleGet, vehiclePost, vehiclePath, vehicleDelete} = require('./vehicle.controllers');

module.exports = {
    vehicleGet, 
    vehiclePost, 
    vehiclePath, 
    vehicleDelete
}