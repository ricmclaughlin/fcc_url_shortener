var redirect = require('../core/core');

var urlShortenerController = function (url) {
  function get(req, res) {
    if (!req.url) {
      res.render('index.html');
    } else if (req.originalUrl.length === 6) {
      res.redirect(redirect.getRedirect(req.originalUrl.slice(1)));
    }
  }

  function post(req, res) {
    res.status(201);
    var newRedirect = JSON.parse(JSON.stringify(redirect.createRedirect(req.url.slice(5))));
    newRedirect.shortURL = req.protocol + '://' + req.get('host') + '/' + newRedirect.shortURL;
    res.send(newRedirect);
  }

  return {
    get: get,
    post: post
  };
};

module.exports = urlShortenerController;
