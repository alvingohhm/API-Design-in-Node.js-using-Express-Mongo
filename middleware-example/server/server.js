var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('  ');

var lions = [];
var id = 0;

// Route middleware for the ids
var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

// Middleware
app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Error Middleware
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.param('id', function(req, res, next, id) {
  var lion = _.find(lions, {id: id});

  if (lion) {
    req.lion = lion;
    next();
  } else {
    res.send();
  }
});

// GET
app.get('/lions', function(req, res){
  res.json(lions);
});


// GET with id
app.get('/lions/:id', function(req, res){
  var lion = req.lion;
  res.json(lion || {});
});


// POST
app.post('/lions', updateId, function(req, res) {
  var lion = req.body;

  lions.push(lion);

  res.json(lion);
});


// PUT with id
app.put('/lions/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

app.listen(3000);
console.log('on port 3000');