const { Model, DataTypes } = require("sequelize");
let sequelize = require('./db');
class Ingredient extends Model {

}

Ingredient.init({
    name: {
        type: DataTypes.STRING
    }
}, { sequelize })

module.exports = Ingredient;