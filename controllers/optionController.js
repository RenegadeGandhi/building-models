/* GET optionpage. */
exports.option_get = [
  function(req, res, next) {
  res.render('option', { title: 'Options page' });
}
];
