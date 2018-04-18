const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
const userUploadsPath = path.resolve(__dirname, 'user_uploads');

app.use('/public', express.static(publicPath));
app.use('/uploads', express.static(userUploadsPath));

app.use(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Looks like you didn\'t find a static file.');
});

app.listen(3000);
