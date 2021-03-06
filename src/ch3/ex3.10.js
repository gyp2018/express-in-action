const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.end('Welcome to my homepage!');
});

app.get('/about', (req, res) => {
  res.end('Welcome to the abouc homepage!');
});

app.get('/weather', (req, res) => {
  res.end('The current weather is NICE.');
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404!');
});

http.createServer(app).listen(3000);
