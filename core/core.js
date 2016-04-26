var redirects = (function () {
  var redirects = [];

  activate();

  function activate() {
    if (redirects.length === 0) {
      redirects.push({
        originalURL: 'http://freecodecamp.com/news',
        shortURL: '12345'
      });
    }
  }

  function confirmUniqueness(candidate) {
    return redirects.filter(function (el) {
      return el.shortURL === candidate.toString();
    })[0] ? false : true;
  }

  function confirmValidURL(candidate) {
    var webUrl = new RegExp(
      '^' +
      // protocol identifier
      '(?:(?:https?|ftp)://)' +
      // user:pass authentication
      '(?:\\S+(?::\\S*)?@)?' +
      '(?:' +
      // IP address exclusion
      // private & local networks
      '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
      '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
      '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
      '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
      '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
      '|' +
      // host name
      '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
      // domain name
      '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
      // TLD identifier
      '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
      // TLD may end with dot
      '\\.?' +
      ')' +
      // port number
      '(?::\\d{2,5})?' +
      // resource path
      '(?:[/?#]\\S*)?' +
      '$', 'i'
    );
    return webUrl.test(candidate);
  }

  function makeid(lengthOfString) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < lengthOfString; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  function createRedirect(longURL) {
    if (confirmValidURL(longURL)) {
      var newRedirect = {
        originalURL: longURL,
        shortURL: makeid(5)
      };
      redirects.push(newRedirect);
      return newRedirect;
    } else {
      return false;
    }
  }

  function getRedirect(shortenedURL) {
    // need to find the right redirect...
    var result2 = redirects.filter(function (el) {
      return el.shortURL.toString() === shortenedURL.toString();
    });
    return result2.length !== 0 ? result2[0].originalURL : false;
  }

  return {
    createRedirect: createRedirect,
    getRedirect: getRedirect
  };

})();

module.exports = redirects;
