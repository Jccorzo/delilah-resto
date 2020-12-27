const { validateAdmin, validateUser } = require('../middlewares/validation');

module.exports = (app) => {

    app.post('/order', (req, res) => {

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

    app.put('/order', validateAdmin, (req, res) => {

    })

    app.delete('/order', validateAdmin, (req, res) => {

    })
}