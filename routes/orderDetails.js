var express = require('express');
var router = express.Router();

// Require orderdetail controller.
var orderDetailController = require('../controllers/orderDetailController');



router.get('/orderdetail', orderDetailController.orderdetail_get);

module.exports = router;