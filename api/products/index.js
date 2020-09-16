const express = require('express');
const router = express.Router();

//Controllers
const getProducts = require('./controllers/getProducts');
const { createProduct } = require('./controllers/newProduct');
const { editProduct } = require('./controllers/editProduct');
const { deleteProduct } = require('./controllers/deleteProduct');


// Operations
router.get('/', getProducts.getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProducts.getProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

module.exports = router;