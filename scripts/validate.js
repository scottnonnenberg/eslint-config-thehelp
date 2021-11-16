/* eslint-disable global-require, security/detect-non-literal-require */

'use strict';

var validator = require('../node_modules/eslint/lib/shared/config-validator');

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

validate('test/index_combined');
validate('test/react_combined');
validate('test/test_combined');
