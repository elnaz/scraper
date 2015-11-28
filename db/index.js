'use strict';

var Bluebird = require('Bluebird');
var Mongo = Bluebird.promisifyAll(require('mongodb'));
var Client = Bluebird.promisifyAll(Mongo.MongoClient);

var Config = require('../config');

exports.saveEvents = function (people) {
  return Client.connectAsync(Config.DATABASE_URL)
  .then(function (db) {
    return db.collection('people').insertMany(people);
  })
  .catch(function (err) {
    throw err;
  });
};
