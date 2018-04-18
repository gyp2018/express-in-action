const express = require('express');
const path = require('path');

const app = express();

app.get('/users/:userid/profile_photo', function(req, res) {
  res.sendFile(path.resolve(__dirname, `./girl/${req.params.userid}.jpg`));
})

app.use(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Looks like you didn\'t find a static file.');
});

app.listen(3000);
