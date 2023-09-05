const {Sales, Vehicles} = require('../models');



class SalesServices {

    static async salesGet() {
        try {
            const vehiclesData = await Vehicles.findAll();
            const result = await Sales.findAll({
                attributes: {
                    exclude: ["buyer_id", "vihicle_id"]
                },
                include: {
                    model: vehiclesData,
                    // as: "vehicleId",
                    // attributes: {
                    //     exclude: Vehicles.tipo === "carro" && ["cilindraje", "numVelocidades"]
                    // }
                }
            });
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async saleGet(id) {
        try {
            const result = await Sales.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw(error);
        };
    };

    static async salePost (newsale) {
        try {
            const result = await Sales.create(newsale);
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async salePatch (id, body) {
        try {
            const sale = await Sales.findOne({where: {id}});
            const result = await sale.update({...body});
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async saleDelete (id) {
        try {
            const sale = await Sales.findOne({where: {id}});
            const result = await sale.destroy();
            return result;
        } catch (error) {
            throw(error);
        };
    };
};

module.exports = SalesServices;