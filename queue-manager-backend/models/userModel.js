
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.js');
const Commande = require('./commandeModel');

class User extends Model {

}

User.init({
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
}, { sequelize })

User.hasMany(Commande);
Commande.belongsTo(User)
User.sync().then(() => {
    Commande.sync();
})



module.exports = User;