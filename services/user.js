const { insert, get } = require('../database/methods');
const { newUser, user } = require('../database/queries');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";

module.exports.createUser = async (user) => {
    try {
        const securePass = crypto.createHash('md5').update(user.contrasena).digest('hex');
        await insert(newUser, { ...user, contrasena: securePass, administrador: false })
        delete (user.contrasena)
        const userToken = jwt.sign({
            ...user,
            administrador: false
        }, jwtClave, {
            algorithm: "HS512",
            expiresIn: 120 // tiempo de expiracion en segundos
        });
        return { user, mensaje: 'Usuario creado correctamente', token: userToken }
    } catch (e) {
        if (e.parent.sqlMessage) {
            throw new Error(e.parent.sqlMessage)
        } else {
            throw new Error('Ocurrió un error')
        }
    }
}

module.exports.getUser = async (user) => {
    try {
        const foundUser = await get(user)
        return foundUser
        /* delete (user.contrasena)
        const userToken = jwt.sign({
            ...user,
            administrador: false
        }, jwtClave, {
            algorithm: "HS512",
            expiresIn: 120 // tiempo de expiracion en segundos
        }); */
    } catch (e) {  
        console.log(e)
        throw new Error(e)
    }
}
