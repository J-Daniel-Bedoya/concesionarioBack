const { Buyers, Price, Sales, Users, Vehicles } = require("./index");

const initModels = () => {
console.log("hola");
    Vehicles.hasOne(Buyers, {through: "sales"});
    Buyers.hasOne(Vehicles, {through: "sales"});
    // Sales.belongsTo(Vehicles, {as: "sales", foreignKey: "vehicles_id"})
    // Vehicles.hasMany(Sales, {as: "vehicles", foreignKey: "vehicles_id"})


    // Seles.belongsTo(Vehicle, {as: "seles", foreignKey: "vehicles_id"})
    // Vehicle.hasMany(Seles, {as: "vehicles", foreignKey: "vehicles_id"})

    // Seles.belongsTo(Buyers, {as: "buyer", foreignKey: "seleMade_id"})
    // Buyers.hasMany(Seles, {as: "seleMade", foreignKey: "seleMade_id"})

    // Vehicle.belongsTo(Price, {as: "vehicle", foreignKey: "vihicle_id"})
    // Price.hasMany(Vehicle, {as: "price", foreignKey: "vihicle_id"})

  // U:M

//   Products.belongsTo(Users, { as: "user", foreignKey: "user_id" });
//   Users.hasMany(Products, { as: "products", foreignKey: "user_id" });
  
//   //U:M
  
//   Products.belongsTo(Categories, { as: "category", foreignKey: "category_id" });
//   Categories.hasMany(Products, { as: "categorie", foreignKey: "category_id" });

//   // U:U

//   Cart.belongsTo(Users, { as: "carritos", foreignKey: "user_id" });
//   Users.hasOne(Cart, { as: "propietario", foreignKey: "user_id" });

//   //U:M 

//   Orders.belongsTo(Users, { as: "compra", foreignKey: "user_id" });
//   Users.hasMany(Orders, { as: "purchased", foreignKey: "user_id" });

//   // M:M

//   ProductsInOrder.belongsTo(Orders, { foreignKey: "order_id" });
//   Orders.hasMany(ProductsInOrder, { as: "orders", foreignKey: "order_id" });

//   ProductsInOrder.belongsTo(Products, { as: "produ", foreignKey: "product_id" });
//   Products.hasMany(ProductsInOrder, { as: "prod", foreignKey: "product_id" });

//   // M:M

//   ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });
//   Cart.hasMany(ProductInCart, { as: "products", foreignKey: "cart_id" });

//   ProductInCart.belongsTo(Products, { foreignKey: "product_id" });
//   Products.hasMany(ProductInCart, {  as: "product", foreignKey: "product_id" });

};

module.exports = initModels;
