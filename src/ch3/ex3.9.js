const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.use((request, response) => {
  response.writeHead(200, { 'Content-Tyep': 'text/plain' });
  response.end('Looks like you did\'t find a static file.');
});

http.createServer(app).listen(3000);
