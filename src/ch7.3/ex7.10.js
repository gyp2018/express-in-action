const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'views'));


app.get('/', function(req, res) {
  res.render('index', {
    currentUser: {
      name: '리사 Lisa',
      bio: 'BlackPink member',
      profilePicture: 'http://img.vogue.co.kr/vogue/2018/01/style_5a65b65614463-683x1024.jpg'
    }
  });
});

app.get('/animals', function(req, res) {
  res.render('animals');
});

app.get('/another', function(req, res) {
  res.render('another');
});

app.listen(3000);
