var express = require('express');
var routes = function (url) {
  var urlShortenerRouter = express.Router();
  var urlShortenerController = require('../controllers/urlShortenerController')(url);

  urlShortenerRouter.route('/:url')
    .get(urlShortenerController.get);

  return urlShortenerRouter;
};

module.exports = routes;
