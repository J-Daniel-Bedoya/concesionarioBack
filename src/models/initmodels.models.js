const { Buyers, Price, Sales, Users, Vehicles } = require("./index");

const initModels = () => {
    // Sales.belongsTo(Vehicles, {as: "sales", foreignKey: "vehicles_id"})
    // Vehicles.hasMany(Sales, {as: "vehicles", foreignKey: "vehicles_id"})

    Seles.belongsTo(Vehicles, {as: "sales", foreignKey: "vehicles_id"})
    Vehicle.hasMany(Seles, {as: "vehicles", foreignKey: "vehicles_id"})

    Seles.belongsTo(Buyers, {as: "buyer", foreignKey: "saleMade_id"})
    Buyers.hasMany(Sales, {as: "saleMade", foreignKey: "saleMade_id"})

    Vehicle.belongsTo(Price, {as: "vehicle", foreignKey: "vehicle_id"})
    Price.hasMany(Vehicles, {as: "price", foreignKey: "vehicle_id"})


};

module.exports = initModels;
