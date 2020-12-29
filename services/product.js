const { insert, get, update, remove } = require('../database/methods');
const { newProduct, deleteProduct, updateProduct, allProducts } = require('../database/queries');

module.exports.getAllProducts = async () => {
    try {
        const products = await get(allProducts, {})
        return products
    } catch (e) {
        throw new Error('Ocurrió un error consultando los productos')
    }
}
module.exports.createNewProduct = async (product) => {
    try {
        await insert(newProduct, product)
        return 'Producto creado correctamente';
    } catch (e) {
        throw new Error('Ocurrió un error creando el producto')
    }
}

module.exports.updateProduct = async (product) => {
    try {
        await update(updateProduct, product)
        return 'Producto actualizado correctamente';
    } catch (e) {
        throw new Error('Ocurrió un error actualizando el producto')
    }
}

module.exports.deleteProduct = async (productId) => {
    try {
        await remove(deleteProduct, { id: productId })
        return 'Producto eliminado correctamente';
    } catch (e) {
        throw new Error('Ocurrió un error eliminando el producto')
    }
}
