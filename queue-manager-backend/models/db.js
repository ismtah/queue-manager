let { Sequelize } = require('sequelize');

let sequelize = new Sequelize({
    host: 'mysql',
    database: "queu_manager",
    username: "root",
    password: "TRACETOUTA",
    port: 3306,
    dialect: "mysql"
    /* dialectOptions: {
        timezone: 'Etc/GMT0'
    } */
})

sequelize.authenticate().then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log('error connecting database : ', err);
})

module.exports = sequelize;
