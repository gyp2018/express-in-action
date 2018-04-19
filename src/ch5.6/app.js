const path = require('path');
const express = require('express');
const ForecastIo = require('forecastio');

const app = express();
const weather = new ForecastIo('ea15476e0eb73f21d4382fa4a7d20258');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/forecast', function(req, res, next) {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  if (!latitude || !longitude) {
    next();
    return;
  }

  weather.forecast(latitude, longitude, function(err, data) {
    if (err) {
      next();
      return;
    }

    res.json({
      latitude,
      longitude,
      temperature: data.currently.temperature,
    });
  });
});

app.use(function(req, res) {
  res.status(404).render('404');
});

app.listen(3000);


