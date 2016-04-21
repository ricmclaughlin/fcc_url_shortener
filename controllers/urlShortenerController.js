var urlShortenerController = function (timeStamp) {
  function get(req, res) {
    if (req.params.url) {
      res.status(201);
      res.send(makeid(3));
    } else {
      res.render('../index.html');
    }
  }

  function makeid(lengthOfString) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < lengthOfString; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  return {
    get: get
  };
};

module.exports = urlShortenerController;
