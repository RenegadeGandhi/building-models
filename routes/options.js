var express = require('express');
var router = express.Router();

// Require option controller.
var optionController = require('../controllers/optionController');



router.get('/option', optionController.option_get);

module.exports = router;