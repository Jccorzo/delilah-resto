// Users
module.exports.newUser = 'INSERT INTO Usuarios (usuario, nombre_completo, correo, telefono, direccion, contrasena, administrador) values (:usuario, :nombre_completo, :correo, :telefono, :direccion, :contrasena, false)';
module.exports.user = 'Select * FROM Usuarios WHERE usuario = :usuario';

// orders
module.exports.allDeliveries = 'SELECT * FROM Ordenes';
module.exports.orderById = 'SELECT * FROM Ordenes where numero = :numero';
module.exports.newOrder = 'INSERT INTO Ordenes (estado,hora,descripcion,pago,usuario) values (:estado,:hora,:descripcion,:pago,:usuario)';
module.exports.newOrderProducts = 'INSERT INTO ProductosOrdenes (numero,id) values (:numero,:id)';
module.exports.updateOrder = 'UPDATE Ordenes SET estado = :estado WHERE numero = :numero';
module.exports.deleteOrder = 'DELETE FROM Ordenes SET ¿¿¿¿¿¿¿ deliveries where delivery_id = ?';

// Products
module.exports.allProducts = 'SELECT * FROM Productos';
module.exports.productById = 'SELECT * FROM Productos WHERE id = :id';
module.exports.newProduct = 'INSERT INTO Productos (nombre, precio, imagen) values (:nombre, :precio, :imagen)';
module.exports.updateProduct = 'UPDATE Productos SET nombre = :nombre, precio = :precio, imagen = :imagen WHERE id = :id';
module.exports.deleteProduct = 'DELETE FROM Productos WHERE id = :id';
