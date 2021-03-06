var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// GET
app.get('/lions', function(req, res){
  res.json(lions);
});

// GET with id
app.get('/lions/:id', function(req, res){
  var lion = _.find(lions, {id: req.params.id});
  res.json(lion || {});
});

// POST
app.post('/lions', function(req, res) {
  var lion = req.body;
  id++;
  lion.id = id + '';

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

// DELETE
app.delete('/lions/:id', function(req, res) {
  var lion = _.findIndex(lions, {id: req.params.id});

  if (!lions[lion]) {
    res.send();
  } else {
    var deletedLion = lions[lion];
    lions.splice(lion,1);
    res.json(deletedLion);
  }
});

app.listen(3000);
console.log('on port 3000');
