const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const middlewares = require('./middlewares/validation');

app.use('*', middlewares.validateLogin)
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

userRoutes(app);
orderRoutes(app);
productRoutes(app);

app.listen(3000, () => {
    console.log("App started")
})