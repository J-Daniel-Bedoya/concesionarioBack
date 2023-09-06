const { Buyers, Price, Sales, Vehicles } = require("./index");

const initModels = () => {
    Buyers.hasMany(Sales,  {as: 'buyer', foreignKey:'buyer_id'})
    Sales.hasOne(Buyers, {as: 'sell', foreignKey:'sale_id'})

    Price,
    Sales, 
    Vehicles
};

module.exports = initModels;
