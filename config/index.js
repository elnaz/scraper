'use strict';

var config = {
  local: require('./local'),
  production: require('./production')
};

module.exports = config[process.env.NODE_ENV || 'local'];
