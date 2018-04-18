const express = require('express');
const app = express();

const horribleRegexp = /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;

app.get(horribleRegexp, function(req, res) {
  const uuid = req.params[0];
  console.log(uuid);

  res.send(`uuid: ${uuid}`);
});

app.use(function(req, res) {
  res.status(404).send('Page not found!');
});

app.listen(3000);
