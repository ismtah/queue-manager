const { Model, DataTypes } = require("sequelize");
const sequelize = require('./db.js');

class Commande extends Model {

}

Commande.init({
    date: {
        type: DataTypes.DATE
    }
}, {
    sequelize
})

module.exports = Commande;