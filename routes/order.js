const jwt = require('jsonwebtoken');
const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";
const { validateAdmin, validateUser } = require('../middlewares/validation');
const { createNewOrder, updateOrder, getAllOrders, removeOrder } = require('../services/order');

module.exports = (app) => {

    app.post('/order', async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const usuario = jwt.decode(token, jwtClave).usuario
        const order = req.body;
        try {
            const response = await createNewOrder({ ...order, usuario })
            res.json({ mensaje: response })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.get('/order/:usuario', validateUser, (req, res) => {

    })

    app.get('/order/:usuario/:id', validateUser, (req, res) => {

    })

    app.get('/order/:id', validateAdmin, (req, res) => {

    })

    app.get('/order', validateAdmin, async (req, res) => {
        try {
            const response = await getAllOrders()
            res.json({ data: response })
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
        console.log("ORDEEED: ", orderId)
        try {
            const response = await removeOrder(orderId)
            res.json({ mensaje: response })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })
}