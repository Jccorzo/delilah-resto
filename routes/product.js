const { getAllProducts, createNewProduct } = require('../services/product');
const { validateAdmin } = require('../middlewares/validation');

module.exports = (app) => {

    app.get('/product', async (_, res) => {
        try {
            const products = await getAllProducts()
            res.json({ data: products })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.post('/product', validateAdmin, async (req, res) => {
        const product = req.body
        try {
            res.json({mensaje: 'Producto creado correctamente'})
        } catch (e) {
            res.status(400).json({ mensaje: 'Ocurrió un error creando el producto' })
        }
    })

    app.get('/product/:id', validateAdmin, (req, res) => {

    })

    app.put('/product', validateAdmin, (req, res) => {

    })

    app.delete('/product', validateAdmin, (req, res) => {

    })
}