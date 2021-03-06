// Users
module.exports.newUser = 'INSERT INTO Usuarios (usuario, nombre_completo, correo, telefono, direccion, contrasena, administrador) values (:usuario, :nombreCompleto, :correo, :telefono, :direccion, :contrasena, :administrador)';
module.exports.savedUser = 'Select * FROM Usuarios WHERE usuario = :usuario';

// orders
module.exports.productsByOrder = 'select po.id, po.numero, po.cantidad, pr.precio, pr.nombre, pr.imagen from ProductosOrdenes as po left join Productos as pr on po.id = pr.id where po.numero = :numero';
module.exports.allOrders = 'SELECT * FROM Ordenes';
module.exports.orderByUser = 'SELECT * FROM Ordenes WHERE usuario = :usuario';
module.exports.newOrder = 'INSERT INTO Ordenes (estado,hora,descripcion,pago,usuario) values (:estado,:hora,:descripcion,:pago,:usuario)';
module.exports.newOrderProducts = 'INSERT INTO ProductosOrdenes (numero,id,cantidad) values (:numero,:id,:cantidad)';
module.exports.updateOrder = 'UPDATE Ordenes SET estado = :estado WHERE numero = :numero';
module.exports.deleteOrder = 'DELETE FROM Ordenes WHERE numero = :numero';

// Products
module.exports.allProducts = 'SELECT * FROM Productos';
module.exports.newProduct = 'INSERT INTO Productos (nombre, precio, imagen) values (:nombre, :precio, :imagen)';
module.exports.updateProduct = 'UPDATE Productos SET nombre = :nombre, precio = :precio, imagen = :imagen WHERE id = :id';
module.exports.deleteProduct = 'DELETE FROM Productos WHERE id = :id';
