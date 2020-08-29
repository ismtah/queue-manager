const { Model, DataTypes } = require("sequelize");
let sequelize = require('./db')

class Plat extends Model {

}

Plat.init({
    name: {
        type: DataTypes.STRING
    }
}, { sequelize })

Plat.sync();

module.exports = Plat;