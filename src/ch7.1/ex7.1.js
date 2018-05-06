const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index', {
    greeting: 'Hello, World'
  });
});

app.listen(3000);
