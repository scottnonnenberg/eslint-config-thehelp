/* eslint-disable global-require, security/detect-non-literal-require */

'use strict';

// eslint-disable-next-line import/no-internal-modules
var validator = require('../node_modules/eslint/lib/shared/config-validator');

function validate(name) {
  console.log('validating ' + name + '...');
  // eslint-disable-next-line import/no-dynamic-require
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

validate('prettier');
validate('prettierReact');

validate('test/indexCombined');
validate('test/reactCombined');
validate('test/testCombined');
