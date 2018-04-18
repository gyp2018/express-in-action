const express = require('express');
const app = express();

app.get('/olivia', function(req, res) {
  res.send('Welcome to Olivia\'s homepage!');
});

app.get('/users/:userid', function(req, res) {
  const userId = parseInt(req.params.userid, 10);
  console.log(userId);
});

app.use(function(req, res) {
  res.status(404).send('Page not found!');
});

app.listen(3000);
