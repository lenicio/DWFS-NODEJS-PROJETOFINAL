require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiProductsRoutes = require('./routes/api/v1/productsRoutes');

app.use(express.json());
app.use('/api/v1/products', apiProductsRoutes);

app.listen(port);