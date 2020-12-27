const jwt = require('jsonwebtoken');
const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";

module.exports.validateLogin = (req, res, next) => {
    if (req.baseUrl === '/login' || req.baseUrl === '/signUp') return next()
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verificarToken = jwt.verify(token, jwtClave)
        if (verificarToken) {
            req.usuario = verificarToken;
            return next()
        }
    } catch (e) {
        res.status(401).json({ mensaje: 'error de autenticacion' })
    }
}

module.exports.validateAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const verificarAdmin = jwt.decode(token, jwtClave)
    if (verificarAdmin.administrador) {
        return next()
    } else res.status(401).json({ mensaje: 'falta de permisos' })
}

module.exports.validateUser = (req, res, next) => {
    const queriedUser = req.query.usuario;
    const token = req.headers.authorization.split(' ')[1];
    const verificarUsuario = jwt.decode(token, jwtClave)
    if (verificarUsuario.usuario === queriedUser) return next()
    else res.status(401).json({ mensaje: 'no puedes consultar información de otros usuarios' })
}