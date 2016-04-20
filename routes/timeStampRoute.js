var express = require('express');
var routes = function (timeStamp) {
  var timeStampRouter = express.Router();
  var timeStampController = require('../controllers/timeStampController')(timeStamp)

  timeStampRouter.route('/:date')
    .get(timeStampController.get);
    
  return timeStampRouter;
};

module.exports = routes;
