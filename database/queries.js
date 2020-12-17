// Users
module.exports.newUser = 'INSERT INTO users (username,pass, name, phone, email, address)';
module.exports.updateUser = 'UPDATE users SET name = ?, phone = ?, email = ?, address = ? WHERE username_id = ?'

// Deliveries
module.exports.allDeliveries = 'SELECT * FROM deliveries';
module.exports.deliveryById = 'SELECT * FROM deliveries where delivery_id = ?';
module.exports.updateDelivery = 'UPDATE deliveries SET ¿¿¿¿¿¿¿ deliveries where delivery_id = ?';
module.exports.deleteDelivery = 'DELETE FROM deliveries SET ¿¿¿¿¿¿¿ deliveries where delivery_id = ?';

// Products
module.exports.allProducts = 'SELECT * FROM products';
module.exports.newProduct = 'INSERT INTO products (name, price)';
module.exports.updateProduct = 'UPDATE products SET name = ?, price = ? WHERE product_id = ?'
module.exports.deleteProduct = 'DELETE FROM products WHERE product_id = ?'
