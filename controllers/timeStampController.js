var timeStampController = function (timeStamp) {
  get = function (req, res) {
    if (req.params.date) {
      res.status(201);
      res.send(processDates(req.params.date));
    }
    else {
      res.render('../index.html');
    }

    function processDates(dateString) {
      var timeStamp = {
        'unix': null,
        'natural': null
      };

      if (isDate(dateString)) {
        timeStamp.unix = new Date(dateString).valueOf(); 
        timeStamp.natural = buildNaturalTime(timeStamp.unix);
      } else if (isNormalInteger(dateString)) {
        timeStamp.unix = new Date(parseInt(dateString)).valueOf(); 
        timeStamp.natural = buildNaturalTime(timeStamp.unix);
      }
      return timeStamp;
    }

    function buildNaturalTime(dateString) {
      var month = getMonth(new Date(dateString).getMonth());
      var day = new Date(dateString).getDate();
      var year = new Date(dateString).getFullYear();
      return month + ' ' + day + ', ' + year;
    }

    function getMonth(monthNum) {
      var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[monthNum];
    }

    function isDate(val) {
      var d = new Date(val);
      return !isNaN(d.valueOf());
    }

    function isNormalInteger(str) {
      return /^\+?(0|[1-9]\d*)$/.test(str);
    }
  }
  return {
    get: get
  }
}

module.exports = timeStampController;
