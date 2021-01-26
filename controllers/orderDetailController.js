/* GET orderdetailpage. */
exports.orderdetail_get = [
  function(req, res, next) {
  res.render('orderdetail', { title: 'Order Details page' });
}
];
