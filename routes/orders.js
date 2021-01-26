var express = require('express');
var router = express.Router();

// Require order controller.
var orderController = require('../controllers/orderController');



router.get('/order', orderController.order_get);

module.exports = router;