'use strict';

var Request = require('request-promise');
var Cheerio = require('cheerio');

exports.get = function (uri) {
  return Request({
    method: 'GET',
    uri: uri,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Firefox/38.0'
    },
    jar: false,
    transform: function (body) {
      return Cheerio.load(body);
    }
  });
};
