const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProducts);

module.exports = router;