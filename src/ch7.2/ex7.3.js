const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index', {
    appTitle: 'EJS Demo',
    appName: 'EJS example',
    currentUser: {
      name: '리사 Lisa',
      bio: 'BlackPink member',
      profilePicture: 'http://img.vogue.co.kr/vogue/2018/01/style_5a65b65614463-683x1024.jpg'
    }
  });
});

app.get('/tony', function(req, res) {
  res.render('tony', {
    name: 'Tony Hawk',
    birthyear: 1968,
    career: 'Skateboarding',
    bio: '<b>Tony Hawk</b> is the coolest skateboarder around'
  });
});

app.listen(3000);
