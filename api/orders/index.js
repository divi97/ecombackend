const express = require('express');
const router = express.Router();

//Controllers
const { createOrder } = require('./controllers/createOrder');
const { editOrder } = require('./controllers/editOrder');
const { getOrder } = require('./controllers/getOrder');
const { deleteOrder } = require('./controllers/deleteOrder');
const specific = require('./controllers/specific');


// Operations
// router.get('/');
router.post('/', createOrder);
router.get('/:id', getOrder);
router.put('/:id', editOrder);
router.delete('/:id', deleteOrder);
router.post('/:product_id', specific.specificProduct);
router.post('/:customer_id', specific.specificCustomer);
router.post('/distinct', specific.mostPurchased);

module.exports = router;