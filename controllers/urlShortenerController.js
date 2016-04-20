var urlShortenerController = function (timeStamp) {
  get = function (req, res) {
    if (req.params.date) {
      res.status(201);
      res.send('yeah');
    } else {
      res.render('../index.html');
    }
  };
  return {
    get: get
  };
};

module.exports = urlShortenerController;
