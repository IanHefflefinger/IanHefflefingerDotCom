var express = require('express');
var router = express.Router();

/* GET 404 error page. */
router.get('/*', function(req, res, next) {
  res.render('lost');
});

module.exports = router;
