const express = require('express');

const ALLOWED_IPS = [
  '::ffff:127.0.0.1',
  '123.456.7.89'
];

const api = express.Router();

api.use(function(req, res, next) {
  console.log(req.ip)
  const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
  if (!userIsAllowed) {
    res.status(401).send('Not authorized!');
  } else {
    next();
  }
});

api.get('/users', function(req, res) {
  res.send(['Tom', 'Sua']);
});

api.post('/users', function(req, res) {

});

api.get('/message', function(req, res) {
  res.send(['Hi', 'Hello']);
});

api.post('/message', function(req, res) {

});

module.exports = api;
