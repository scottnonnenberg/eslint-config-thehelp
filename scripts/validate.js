'use strict';

/* eslint-disable global-require, security/detect-non-literal-require */

var validator = require('eslint/lib/config/config-validator');

function validate(name) {
  console.log('validating ' + name + '...');
  var config = require('../' + name);
  validator.validate(config, name);
}

validate('scripts');
validate('test');

validate('react');
validate('es2015');
validate('functional');
validate('core');

validate('combined');
validate('_react_combined');
validate('_test_combined');
