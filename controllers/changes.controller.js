var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost:27017/changes', ['changes']);

exports.getAllChanges = function (req, res, next) {
    db.changes.find(function (err, changes) {
        if (err){
            req.send(err);
        }else{
           res.json(changes);
        }
    });
};

exports.saveChange = function (req, res, next, change) {
    if (!change.title){
        res.status(400);
        res.json({"error":"Bad data"});
    }else{
        db.changes.save(change, function (err, change) {
            if(err){
                res.send(err);
            }
            res.redirect('/change/add');
        });
    }
};