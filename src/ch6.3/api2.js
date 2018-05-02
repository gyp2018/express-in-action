const express = require('express');

const api = express.Router();

api.get('/timezone', function(req, res) {
  res.send('v2 timezone');
});

api.get('/all_timezone', function(req, res) {
  res.send('v2 all timezone');
});

module.exports = api;
