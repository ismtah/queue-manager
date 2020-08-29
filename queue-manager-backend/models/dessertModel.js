const { Model, DataTypes } = require("sequelize");
let sequelize = require('./db');

class Dessert extends Model { }

Dessert.init({
    name: {
        type: DataTypes.STRING
    }
}, { sequelize })

Dessert.sync()

module.exports = Dessert;