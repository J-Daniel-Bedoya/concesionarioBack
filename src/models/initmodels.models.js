const { Buyers, Price, Seles, Users, Vehicle } = require("./index");

const initModels = () => {
console.log("hola");
    Vehicles.hasOne(Buyers, {through: "Sales"});
    Buyers.belongsTo(Vehicles, {through: "Sales"});
    // Sales.belongsTo(Vehicles, {as: "sales", foreignKey: "vehicles_id"})
    // Vehicles.hasMany(Sales, {as: "vehicles", foreignKey: "vehicles_id"})


    // Seles.belongsTo(Vehicle, {as: "seles", foreignKey: "vehicles_id"})
    // Vehicle.hasMany(Seles, {as: "vehicles", foreignKey: "vehicles_id"})

    // Seles.belongsTo(Buyers, {as: "buyer", foreignKey: "seleMade_id"})
    // Buyers.hasMany(Seles, {as: "seleMade", foreignKey: "seleMade_id"})

    // Vehicle.belongsTo(Price, {as: "vehicle", foreignKey: "vihicle_id"})
    // Price.hasMany(Vehicle, {as: "price", foreignKey: "vihicle_id"})


};

module.exports = initModels;
