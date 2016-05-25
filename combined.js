'use strict';

var _ = require('lodash');

var core = require('./core');
var es2015 = require('./es2015');
var functional = require('./functional');


var combined = _.merge({}, core, es2015, functional);
var plugins = core.plugins.concat(functional.plugins);

var pluginsFixed = _.assign({}, combined, {
  plugins: plugins,
});

module.exports = pluginsFixed;
