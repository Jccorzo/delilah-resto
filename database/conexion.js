const SeqLibrary = require("sequelize");
const config = require('../config');
const sequelize = new SeqLibrary(config.DB,config.USER,config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect
});

sequelize.authenticate()
    .then(() => {
        console.log("conectado a la base de datos");
    }).catch(err => {
        console.error("error de conexion" + err);
    })

module.exports = sequelize;