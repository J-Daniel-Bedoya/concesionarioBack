const { Buyers, Price, Sales, Vehicles } = require("./index");

const initModels = () => {
//   Sales.belongsTo(Vehicles, { as: "sales", foreignKey: "vehicles_id" });
//   Vehicles.hasMany(Sales, { as: "vehicles", foreignKey: "vehicles_id" });

//   Sales.belongsTo(Buyers, { as: "buyer", foreignKey: "saleMade_id" });
//   Buyers.hasMany(Sales, { as: "saleMade", foreignKey: "saleMade_id" });

//   Vehicles.belongsTo(Price, { as: "price", foreignKey: "vehicle_id" });
//   Price.hasMany(Vehicles, { as: "price", foreignKey: "vehicle_id" }); 
};

module.exports = initModels;
