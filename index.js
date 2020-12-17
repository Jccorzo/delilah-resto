const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwtClave = "bnkj4nUGY5tyDuyg6guyb76t64hIYVH9";

userRoutes(app);
orderRoutes(app);
productRoutes(app);

app.listen(3000, () => {
    console.log("App started")
})