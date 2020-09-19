let { Sequelize } = require('sequelize');

let sequelize = new Sequelize({
    host: 'sql313.unaux.com',
    database: 'unaux_26746306_mysql',
    password: '99h8b69w',
    username: 'unaux_26746306',
    dialect: "mysql",
    /* host: 'mysql',
    database: "queu_manager", */
    //database: "queu-manager",
    /* username: "root",
    password: "TRACETOUTA",
    port: 3306,
    dialect: "mysql", */
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
