const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport')

const setUpPassport = require('./setuppassport');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb://localhost:27017/test');
setUpPassport();

app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'sdjflkjsoj5i43j3kl4j6546#$%43oij35',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(app.get('port'), function() {
  console.log(`Server started on port ${app.get('port')}`);
});
