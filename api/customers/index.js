const express = require('express');
const router = express.Router();

//Controllers
const getCustomers = require('./controllers/getCustomers');
const { createCustomer } = require('./controllers/newCustomer');
const { editCustomer } = require('./controllers/editCustomer');
const { deleteCustomer } = require('./controllers/deleteCustomer');
const { removeAllCustomers } = require('./controllers/removeAllCustomers');


// Operations
router.get('/', getCustomers.getAllCustomers);
router.post('/', createCustomer);
router.delete('/', removeAllCustomers);
router.get('/:id', getCustomers.getCustomer);
router.put('/:id', editCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;