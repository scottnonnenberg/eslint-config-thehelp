'use strict';

var _ = require('lodash');

var start = require('./combined');
var react = require('./react');


var combined = _.merge({}, start, react);
var plugins = start.plugins.concat(react.plugins);

var pluginsFixed = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = pluginsFixed;
