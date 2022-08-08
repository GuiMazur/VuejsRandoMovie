const express = require('express');

const getMovies = require('./index.js');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.route('/').get((req, res) => getMovies(0).then(r => res.send(r)));

app.listen(3000, console.log('Ouvindo'));