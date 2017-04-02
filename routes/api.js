var express = require('express');
var router = express.Router();
var controller = require('../controllers/changes.controller');

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
    return controller.getAllChanges(req, res, next);
});

router.post('/save', function (req, res, next) {
    var change = {};
    change.title = req.body.title;
    change.description = req.body.description;
    change.start = req.body.start;
    change.end = req.body.end;

    console.log(change);
    return controller.saveChange(req, res, next, change);
})

module.exports = router;
