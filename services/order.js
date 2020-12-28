const { insert, update, get, remove } = require('../database/methods')
const { deleteOrder, newOrder, newOrderProducts, orderById, updateOrder, allOrders } = require('../database/queries')
const product = require('../routes/product')

module.exports.createNewOrder = async (order) => {
    const hora = Date.now()
    const pago = order.products.map(product => product.precio * product.cantidad).reduce((acumulator, current) => acumulator + current)
    const descripcion = order.products.map(product => `x${product.cantidad} ${product.nombre} `).reduce((acumulator, current) => acumulator + ', ' + current)
    const orderToSave = { hora, pago, estado: 'Confirmado', descripcion, usuario: order.usuario }
    try {
        const savedOrder = await insert(newOrder, orderToSave)
        await Promise.all(order.products.map(async (product) => {
            await insert(newOrderProducts, { id: product.id, numero: savedOrder[0] })
        }))
        return 'Orden creada correctamente'
    } catch (e) {
        throw new Error('Ocurrió un error creando el pedido')
    }
}

module.exports.updateOrder = async (order) => {
    try {
        await update(updateOrder, order)
        return 'Pedido actualizado correctamente'
    } catch (e) {
        throw new Error('Ocurrió un error actualizando el registro')
    }
}

module.exports.getAllOrders = async () => {
    try {
        const orders = get(allOrders, {})
        return orders
    } catch (e) {
        throw new Error('Ocurrió un error consultando las ordenes')
    }
}

module.exports.removeOrder = async (orderId) => {
    try {
        await remove(deleteOrder, { numero: orderId })
        return 'Orden eliminada correctamente'
    } catch (e) {
        console.log("ERROR: ", e)
        throw new Error('Ocurrió un error eliminando la orden')
    }
}