var express = require('express');
var router = express.Router();

// Require product controller.
var productController = require('../controllers/productController');



router.get('/product', productController.product_get);

module.exports = router;