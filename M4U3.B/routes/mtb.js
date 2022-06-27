var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mtb', { title: 'Mountain Bikes' });
});

module.exports = router;
