const express = require('express');
const app = express();

app.get('/olivia', function(req, res) {
  res.send('Welcome to Olivia\'s homepage!');
});

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {
  const startId = parseInt(req.params[0], 10);
  const endId = parseInt(req.params[1], 10);
  console.log(startId);
  console.log(endId);

  res.send(`startId: ${startId}, endId: ${endId}`);
});

app.use(function(req, res) {
  res.status(404).send('Page not found!');
});

app.listen(3000);
