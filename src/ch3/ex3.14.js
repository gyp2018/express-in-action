const express = require('express');

const app = express();
// const EVIL_IP= '123.45.67.89';
const EVIL_IP= '127.0.0.1';

app.use((req, res, next) => {
  console.log(req.ip);
  if (req.ip === EVIL_IP) {
    res.status(401).send('Not allowed!');
  } else {
    next();
  }
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404!');
});

app.listen(3000, () => {
  console.log('Express app started on port 3000.');
});
