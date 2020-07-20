let { Sequelize } = require('sequelize');

let sequelize = new Sequelize({
    database: "queu-manager",
    username: "root",
    password: "TRACETOUTA",
    port: 3306,
    dialect: "mariadb",
    dialectOptions: {
        timezone: 'Etc/GMT0'
    }
})

sequelize.authenticate().then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log('error ', err);
})

module.exports = sequelize;
