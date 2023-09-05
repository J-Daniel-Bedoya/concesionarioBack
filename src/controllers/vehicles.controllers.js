const { VehiclesServices } = require("../services");

const getVehicles = async (req, res, next) => {
    try {
        const result = await VehiclesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}

module.exports = {
  getVehicles,
};