var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var url = {
  'long_url': null,
  'short_url': null,
  'redirects': null
};
var urlShortenerRouter = require('./routes/urlShortenerRoute')(url);
app.use(express.static(__dirname + '/public'));
app.use('/', urlShortenerRouter);

app.listen(PORT, function () {
  console.log('Running on PORT: ' + PORT);
});

module.exports = app;
