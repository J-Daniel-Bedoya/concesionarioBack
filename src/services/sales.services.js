const { Sales } = require("../models");

class SalesServices {
    
    static async create (sale) {
        try {
            const result = await Sales.create(sale);
            return result;
        } catch (error) {
            throw(error);
        };
    };
}

module.exports = SalesServices