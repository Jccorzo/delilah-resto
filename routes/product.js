const { getAllProducts, createNewProduct, deleteProduct, updateProduct } = require('../services/product');
const { validateAdmin } = require('../middlewares/validation');

module.exports = (app) => {

    app.get('/product', async (_, res) => {
        try {
            const products = await getAllProducts()
            res.json({ products })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.post('/product', validateAdmin, async (req, res) => {
        const product = req.body
        try {
            const respuesta = await createNewProduct(product)
            res.json({ mensaje: respuesta })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.put('/product', validateAdmin, async (req, res) => {
        const product = req.body
        try {
            const respuesta = await updateProduct(product)
            res.json({ mensaje: respuesta })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })

    app.delete('/product', validateAdmin, async (req, res) => {
        const productId = req.query.productId;
        try {
            const respuesta = await deleteProduct(productId)
            res.json({ mensaje: respuesta })
        } catch (e) {
            res.status(400).json({ mensaje: e.message })
        }
    })
}