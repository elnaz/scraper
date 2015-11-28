'use strict';

var _ = require('lodash');
var Bluebird = require('bluebird');

var Db = require('../db');
var Request = require('./request');

var SOURCES = [
  require('./sources/example')
];

return Bluebird.resolve(SOURCES)
.map(function (source) {
  return Request.get(source.URL)
  .then(source.parsePeople)
  .tap(function (res) {
    console.log('%s people parsed from %s', res.length, source.URL);
  })
  .catch(console.log);
})
.then(_.flatten)
.then(Db.savePeople);
