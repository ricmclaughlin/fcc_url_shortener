var express = require('express');
var bodyParser = require('body-parser');
var redirect = require('./core');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var redir = new redirect.Redirect();

var urlShortenerRouter = require('./routes/urlShortenerRoute')(redir);
app.use(express.static(__dirname + '/public'));
app.use('/', urlShortenerRouter);

app.listen(PORT, function () {
  console.log('Running on PORT: ' + PORT);
});

module.exports = app;
