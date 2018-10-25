import db from '../../../../db/db';

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
    res.status(200).send({
        success: 'true',
        message: 'TestGet - Resource retrived successfully',
        db: db
  });
});

// define the about route
router.get('/about', function(req, res) {
  res.send({
    success: 'true',
    message: 'TestGet/about - Resource retrived successfully',
    section: 'Test Get /testabout working fine'});
});

module.exports = router;