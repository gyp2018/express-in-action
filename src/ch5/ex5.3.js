const express = require('express');
const app = express();

app.get('/olivia', function(req, res) {
  res.send('Welcome to Olivia\'s homepage!');
});

app.get(/^\/users\/(\d+)$/, function(req, res) {
  const userId = parseInt(req.params[0], 10);
  console.log(userId);
});

app.use(function(req, res) {
  res.status(404).send('Page not found!');
});

app.listen(3000);
