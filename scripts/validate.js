/* eslint-disable global-require, security/detect-non-literal-require */

'use strict';

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

validate('default');

validate('test/_default');
validate('test/_react_combined');
validate('test/_test_combined');
