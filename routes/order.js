const jwt = require('jsonwebtoken');
const config = require('../config');
const { validateAdmin, validateUser } = require('../middlewares/validation');
const { createNewOrder, updateOrder, getAllOrders, removeOrder, getOrderByUser } = require('../services/order');

module.exports = (app) => {

    app.post('/order', async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const usuario = jwt.decode(token, config.jwt).usuario
        const order = req.body;
        try {
            const response = await createNewOrder({ ...order, usuario })
            res.json({ mensaje: response })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.get('/order/:usuario', validateUser, async (req, res) => {
        const user = req.params.usuario;
        try {
            const orders = await getOrderByUser(user)
            res.json({ orders: orders })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.get('/order', validateAdmin, async (_, res) => {
        try {
            const orders = await getAllOrders()
            res.json({ orders })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.put('/order', validateAdmin, async (req, res) => {
        const order = req.body
        try {
            const respuesta = await updateOrder(order)
            res.json({ mensaje: respuesta })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.delete('/order', validateAdmin, async (req, res) => {
        const orderId = req.query.orderId
        try {
            const response = await removeOrder(orderId)
            res.json({ mensaje: response })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })
}