const { Model, DataTypes } = require("sequelize");
let sequelize = require('./db');
class Entree extends Model {

}

Entree.init({
    name: {
        type: DataTypes.STRING,
        unique: true
    }
}, { sequelize });

Entree.sync();

module.exports = Entree;