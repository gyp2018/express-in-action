const express = require('express');
const path = require('path');

const app = express();

const photoPath = path.resolve(__dirname, 'offensive-photo-folder');
app.use('/offensive', express.static(photoPath));

app.use(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Looks like you didn\'t find a static file.');
});

app.listen(3000);
