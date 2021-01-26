/* GET categorypage. */
exports.category_get = [
  function(req, res, next) {
  res.render('category', { title: 'Catgory page' });
}
];
