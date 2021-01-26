/* GET customerpage. */
exports.customer_get = [
  function(req, res, next) {
  res.render('customer', { title: 'Customers page' });
}
];
