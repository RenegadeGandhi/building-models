var express = require('express');
var router = express.Router();

// Require category controller.
var categoryController = require('../controllers/categoryController');


// when users visit /category go to category controller
router.get('/category', categoryController.category_get);

module.exports = router;

