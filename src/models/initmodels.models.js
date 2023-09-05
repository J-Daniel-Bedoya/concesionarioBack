const { Buyers, Price, Sales, Vehicles } = require("./index");

const initModels = () => {
    Buyers.hasMany(Sales,  {as: 'buyer', foreignKey:'buyer_id'})
    Vehicles.hasOne(Sales, {as: 'sell', foreignKey:'vehicle_id'})
};

module.exports = initModels;
