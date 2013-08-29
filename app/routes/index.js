
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('form', { title: 'Express' });
};
exports.presentation = function(req, res) {
    res.render('presentation', { title: 'Presentation'});
};