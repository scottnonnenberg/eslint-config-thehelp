'use strict';

var _ = require('lodash');

var test = require('../test');
var start = require('./_default');


var combined = _.merge({}, start, test);
var plugins = start.plugins.concat(test.plugins);

var pluginsFixed = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = pluginsFixed;
