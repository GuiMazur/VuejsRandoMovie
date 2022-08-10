const express = require('express');

const getMovies = require('./getMovies.js');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.route('/').get((req, res) => getMovies().then(r => res.json(r)));

app.listen(3000, console.log('Ouvindo'));