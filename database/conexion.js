const SeqLibrary = require("sequelize");
const path = "mysql://root:secret@localhost:3306/delilah";
const sequelize = new SeqLibrary(path);

sequelize.authenticate()
    .then(() => {
        console.log("conectado a la base de datos");
    }).catch(err => {
        console.error("error de conexion" + err);
    })

module.exports = sequelize;