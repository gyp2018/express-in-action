const express = require('express');
const app = express();

app.get('/search', function(req, res) {
  const q = req.query.q;

  res.send(`q: ${q}`);
});

app.use(function(req, res) {
  res.status(404).send('Page not found!');
});

app.listen(3000);
