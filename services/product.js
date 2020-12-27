const { insert, get, update, remove } = require('../database/methods');
const { newProduct, deleteProduct, productById, updateProduct, allProducts } = require('../database/queries');

module.exports.createNewProduct = () => {

}

module.exports.updateProduct = () => {

}

module.exports.getAllProducts = async () => {
    try {
        const products = await get(allProducts, {})
        return products
    } catch (e) {
        throw new Error('Ocurrió un error consultando los productos')
    }
}

module.exports.deleteProduct = () => {

}