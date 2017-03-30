var express = require('express');
var router = express.Router();
var controller = require('../controllers/changes_controller');

router.get('/', function(req, res, next) {
    res.json();
});

router.get('/allevents', function(req, res, next) {
    var eventos = [
        {
            title  : 'CM1234',
            start  : '2017-03-01'
        },
        {
            title  : 'CM4321',
            start  : '2017-03-05',
            end    : '2017-03-07'
        },
        {
            title  : 'CM1423',
            start  : '2017-03-09T12:30:00',
            allDay : false // will make the time show
        }
    ];
    res.json(eventos);
});

module.exports = router;
