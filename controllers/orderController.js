/* GET orderpage. */
exports.order_get = [
  function(req, res, next) {
  res.render('order', { title: 'Orders page' });
}
];
