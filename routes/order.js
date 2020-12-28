const jwt = require('jsonwebtoken');
const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";
const { validateAdmin, validateUser } = require('../middlewares/validation');
const { createNewOrder, updateOrder } = require('../services/order');

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

    app.get('/order', validateAdmin, (req, res) => {
        try {
            res.json({ mensaje: 'ordennn' })

        } catch (e) {
            res.status(400).json()
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

    app.delete('/order', validateAdmin, (req, res) => {
        const orderId = req.params.orderId
    })
}