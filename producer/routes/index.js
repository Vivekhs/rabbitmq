var express = require('express');
var router = express.Router();
var debug = require('debug')('dev:logs');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug(req.app.get('test'));
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
