const express = require('express');
const router = express.Router();

module.exports = function (app) {
    app.use('/api/customers', require('../api/customers'));
    app.use('/api/customers', require('../api/customers'));
    app.use('/api/customers', require('../api/customers'));
};