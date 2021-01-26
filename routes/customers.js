var express = require('express');
var router = express.Router();

// Require customer controller.
var customerController = require('../controllers/customerController');



router.get('/customer', customerController.customer_get);

module.exports = router;

