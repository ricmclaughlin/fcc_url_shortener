var express = require('express');
var bodyParser = require('body-parser');
var redirect = require('./core/core');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var urlShortenerRouter = require('./routes/urlShortenerRoute')();
app.use(express.static(__dirname + '/public'));
app.use('/', urlShortenerRouter);

app.listen(PORT, function () {
  console.log('Running on PORT: ' + PORT);
});

module.exports = app;
