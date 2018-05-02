const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('you just sent a GET request, friend');
});

app.post('/', function(req, res) {
  res.send('you just sent a POST request, friend');
});

app.put('/', function(req, res) {
  res.send('you just sent a PUT request, friend');
});

app.delete('/', function(req, res) {
  res.send('you just sent a DELETE request, friend');
});

app.listen(3000, function() {
  console.log('App on port 3000');
});
