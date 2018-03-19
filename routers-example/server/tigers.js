var _ = require('lodash');
var tigerRouter = require('express').Router();

var tigers = [];
var id = 0;

// Route middleware for the ids
var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

tigerRouter.param('id', function(req, res, next, id) {
  var tiger = _.find(tigers, {id: id})

  if (tiger) {
    req.tiger = tiger;
    next();
  } else {
    res.send();
  }
});

// GET
tigerRouter.get('/', function(req, res){
  res.json(tigers);
});

// GET with id
tigerRouter.get('/:id', function(req, res){
  var tiger = req.tiger;
  res.json(tiger || {});
});

// POST
tigerRouter.post('/', updateId, function(req, res) {
  var tiger = req.body;

  tigers.push(tiger);

  res.json(tiger);
});


// DELETE with id
tigerRouter.delete('/:id', function(req, res) {
  var tiger = _.findIndex(tigers, {id: req.params.id});
  tigers.splice(tiger, 1);

  res.json(req.tiger);
});


// PUT with id
tigerRouter.put('/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var tiger = _.findIndex(tigers, {id: req.params.id});
  if (!tigers[tiger]) {
    res.send();
  } else {
    var updatedtiger = _.assign(tigers[tiger], update);
    res.json(updatedtiger);
  }
});

module.exports = tigerRouter;