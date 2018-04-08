const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.redirect('/hello/anonymous');
});

app.get('/hello/:who', (req, res) => {
  res.end(`Hello, ${req.params.who}.`);
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404!');
});

http.createServer(app).listen(3000);
