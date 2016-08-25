//'use strict';

var express = require('express');
var app = express();
var pets = require('./pets.json')

app.listen(3000, function () {
  console.log('Listening...');
});

app.get('/pets', function (req, res, next) {
  res.contentType('application/json')
  res.send(JSON.stringify(pets));

});

app.get('/pets/:id', function (req, res, next) {
  console.log(req.params);
  if (req.params.id >= 0 && req.params.id < pets.length) {
    res.contentType('application/json')
    res.send(pets[req.params.id])
  } else {
    res.contentType('text/plain')
    res.status(404).send('Not found');
  }
})
