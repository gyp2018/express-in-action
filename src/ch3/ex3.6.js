const express = require('express');
const http = require('http');

const app = express();

app.use((request, response, next) => {
  console.log(`In comes a ${request.method} to ${request.url}`);
  next();
});

app.use((request, response) => {
  response.writeHead(200, { 'Content-Tyep': 'text/plain' });
  response.end('Hello, world!');
});

http.createServer(app).listen(3000);
