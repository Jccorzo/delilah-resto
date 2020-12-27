const { validateAdmin } = require('../middlewares/validation');

module.exports = (app) => {

    app.post('/order', (req, res) => {

    })

    app.get('/order', validateAdmin, (req, res) => {
        try {
            res.json({ mensaje: 'ordennn' })

        } catch (e) {
            res.status(400).json()
        }
    })

    app.get('/order/:id', (req, res) => {

    })

    app.put('/order', (req, res) => {

    })

    app.delete('/order', (req, res) => {

    })
}