var redirect = require('../core');

var urlShortenerController = function (timeStamp) {
  function get(req, res) {
    if (!req.url) {
      res.render('index.html');
    } else if (req.originalUrl.length === 6) {
      res.redirect(redirect.getRedirect(req.params.url));
    } else {
      res.status(201);
      //console.log(redirect.createRedirect(req.params.url.slice(1)));
      res.send(req.params.url);
    }
  }

  return {
    get: get
  };
};

module.exports = urlShortenerController;
