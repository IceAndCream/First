const express = require('express');
const fs = require('fs');

const app = express();

app.engine('html', require('express-art-template'))
app.get('/', (req, res) => {
  fs.readFile('./language.json', 'utf8', (err, data) => {
    if(err) return res.status(500).send('server internal error');

    res.render('index.html', { "language": JSON.parse(data)});
  });
});

exports.init = () => {
  app.listen(3000, () => {
    console.log('running 3000 ...')
  })
}