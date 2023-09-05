
const { Buyers, Price, Sales, Users, Vehicles } = require("./index");

const initModels = () => {
console.log("hola");
    // Sales.belongsTo(Vehicles, {as: "sales", foreignKey: "vehicles_id"})
    // Vehicles.hasMany(Sales, {as: "vehicles", foreignKey: "vehicles_id"})

    // Sales.belongsTo(Buyers, {as: "buyer", foreignKey: "saleMade_id"})
    // Buyers.hasMany(Sales, {as: "saleMade", foreignKey: "saleMade_id"})

    // Vehicles.belongsTo(Price, {as: "vehicle", foreignKey: "vehicles_id"})
    // Price.hasMany(Vehicles, {as: "price", foreignKey: "vehicles_id"})

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
