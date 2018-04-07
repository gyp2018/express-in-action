const fs = require('fs');

const option = { encoding: 'utf-8' };
fs.readFile('./src/ch2/myfile.txt', option, function(err, data) {
  if (err) {
    console.error('Error reading file!');
    return;
  }
  console.log(data.match(/x/gi).length + ' letter X\'s');
});

console.log('Hello world!');
