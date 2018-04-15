const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, 'static', 'girl.jp');

app.use(function(req, res, next) {
  // res.sendFile(filePath, function(err) {
  //   if (err) {
  //     console.error('File failed to send.');
  //   } else {
  //     console.log('File send!');
  //   }
  // });

  res.sendFile(filePath, function(err) {
    if (err) {
      next(new Error('Error sending file!'));
    }
  });
});

app.use(function(err, req, res, next) {
  console.error(err);
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send('Internal server error.');
});

app.listen(3000, function() {
  console.log('App started on port 3000.');
});
