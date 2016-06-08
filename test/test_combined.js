'use strict';

var _ = require('lodash');

var test = require('../test');
var start = require('./index_combined');


var combined = _.merge({}, start, test);
var plugins = start.plugins.concat(test.plugins);

var testCombined = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = testCombined;
