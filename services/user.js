const { insert, get } = require('../database/methods');
const { newUser, savedUser } = require('../database/queries');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";

module.exports.createUser = async (user) => {
    try {
        const securePass = crypto.createHash('md5').update(user.contrasena).digest('hex');
        await insert(newUser, { ...user, contrasena: securePass, administrador: false })
        delete (user.contrasena)
        const userToken = jwt.sign({
            usuario: user.usuario,
            administrador: false
        }, jwtClave, {
            algorithm: "HS512",
            expiresIn: 300 // tiempo de expiracion en segundos
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
                    administrador: false
                }, jwtClave, {
                    algorithm: "HS512",
                    expiresIn: 300 // tiempo de expiracion en segundos
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
