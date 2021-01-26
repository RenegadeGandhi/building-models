/* GET productpage. */
exports.product_get = [
  function(req, res, next) {
  res.render('product', { title: 'Products page' });
}
];
