const { Vehicles } = require("../models");

class VehiclesServices {
    static async getVehicles(){
        try {
            const result = await Vehicles.findAll();
            return result;
        } catch (error) {
            throw(error);
        };
    }
}

module.exports = VehiclesServices