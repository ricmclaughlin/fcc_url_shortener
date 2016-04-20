var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var timeStamp = {
  "unixTime": null,
  "naturalTime": null
};
var timeStampRouter = require('./routes/timeStampRoute')(timeStamp);
app.use(express.static(__dirname + '/public'));
app.use('/', timeStampRouter);

app.listen(PORT, function () {
  console.log('Running on PORT: ' + PORT);
});

module.exports = app;
