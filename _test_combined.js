'use strict';

var _ = require('lodash');

var start = require('./combined');
var test = require('./test');


var combined = _.merge({}, start, test);
var plugins = start.plugins.concat(test.plugins);

var pluginsFixed = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = pluginsFixed;
