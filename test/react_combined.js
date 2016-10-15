'use strict';

var _ = require('lodash');

var react = require('../react');

var start = require('./index_combined');


var combined = _.merge({}, start, react);
var plugins = start.plugins.concat(react.plugins);

var reactCombined = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = reactCombined;
