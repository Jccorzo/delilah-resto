const { insert, get } = require('../database/methods');
const { newUser, savedUser } = require('../database/queries');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.createUser = async (user) => {
    try {
        const securePass = crypto.createHash('md5').update(user.contrasena).digest('hex');
        await insert(newUser, { ...user, contrasena: securePass, administrador: false })
        delete (user.contrasena)
        const userToken = jwt.sign({
            usuario: user.usuario,
            administrador: false
        }, config.jwt, {
            algorithm: "HS512",
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
        const foundUser = await get(savedUser, user)
        if (Array.isArray(foundUser) && foundUser.length > 0) {
            const securePass = crypto.createHash('md5').update(user.contrasena).digest('hex');
            if (securePass === foundUser[0].contrasena) {
                delete (foundUser[0].contrasena)
                const userToken = jwt.sign({
                    usuario: user.usuario,
                    administrador: foundUser[0].administrador
                }, config.jwt, {
                    algorithm: "HS512",
                });
                return { ...foundUser[0], token: userToken }
            } else {
                throw new Error('Contraseña incorrecta')
            } 
        } else {
            throw new Error('El usuario no existe')
        }
    } catch (e) {
        throw new Error(e.message)
    }
}
