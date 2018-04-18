const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, './ssl/privatekey.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './ssl/request.pem'))
};

https.createServer(httpsOptions, app).listen(3000);
