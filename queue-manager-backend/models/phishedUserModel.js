
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.js');

class PhishedUser extends Model {

}

PhishedUser.init({
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, { sequelize })


PhishedUser.sync();



module.exports = PhishedUser;