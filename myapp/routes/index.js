var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

// FIXME: add 404 stuff to everything but this route (this is a SPA)
