var redirect = require('../core/core');

var urlShortenerController = function (url) {
  function get(req, res) {
    if (req.originalUrl.length === 6) {
      // error if original URL not found
      var redirectURL = redirect.getRedirect(req.originalUrl.slice(1));
      if (!redirectURL) {
        res.send('Redirect not found');
      } else {
        res.redirect(redirectURL);
      }

    } else {
      res.redirect('index.html');
    }
  }

  function post(req, res) {

    var newRedirect = JSON.parse(JSON.stringify(redirect.createRedirect(req.url.slice(5))));
    // check if go error and return it
    if (newRedirect) {
      newRedirect.shortURL = req.protocol + '://' + req.get('host') + '/' + newRedirect.shortURL;
      res.status(201);
    } else {
      res.status(201);
      newRedirect = 'Error - Please check the format of the provided URL; it most be in the form http://www.somedomain.com/etc';
    }

    res.send(newRedirect);
  }

  return {
    get: get,
    post: post
  };
};

module.exports = urlShortenerController;
