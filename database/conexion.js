const mysql = require('mysql2/promise');
const SeqLibrary = require("sequelize");
const config = require('./config');
const path = "mysql://root:secret@localhost:3306/delilah";

/* mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
}).then(res => {
    res.query("CREATE DATABASE IF NOT EXISTS delilah")
}).catch(err => console.log("ERROR: ", err)) */

const sequelize = new SeqLibrary(path);
sequelize.authenticate()
    .then(() => {
        console.log("conectado a la base de datos");
    }).catch(err => {
        console.error("error de conexion" + err);
    })

module.exports = sequelize;