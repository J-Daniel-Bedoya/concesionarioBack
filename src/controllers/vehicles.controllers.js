const { VehiclesServices } = require("../services");

const getVehicles = async (req, res, next) => {
    try {
        const result = await VehiclesServices.getAll();
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const getVehicle = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await VehiclesServices.get(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const createVehicle = async (req, res, next) => {
    try {
        const data = req.body
        const result = await VehiclesServices.create(data);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const editVehicle = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const result = await VehiclesServices.edit(id, body);
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
  getVehicle,
  createVehicle,
  editVehicle
};