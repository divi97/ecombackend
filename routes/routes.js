const express = require('express');
const router = express.Router();

module.exports = function (app) {
    app.use('/api/customers', require('../api/customers'));
    app.use('/api/products', require('../api/products'));
    app.use('/api/orders', require('../api/orders'));
};