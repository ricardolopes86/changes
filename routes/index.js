var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/calendar', function(req, res, next) {
    res.render('calendar');
});

router.get('/change/add', function(req, res, next) {
    res.render('addchange');
});

module.exports = router;