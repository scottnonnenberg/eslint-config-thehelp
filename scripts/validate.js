/* eslint-disable security/detect-non-literal-require */

'use strict';

// eslint-disable-next-line import/no-internal-modules
const validator = require('../node_modules/eslint/lib/shared/config-validator');

function validate(name) {
  console.log(`validating ${name}`);
  // eslint-disable-next-line import/no-dynamic-require
  const config = require(`../${name}`);
  validator.validate(config, name);
}

validate('core');
validate('functional');
validate('react');
validate('typescript');

validate('prettier');
validate('prettierReact');
validate('prettierTypescript');

validate('scripts');
validate('test');
validate('testTypescript');

validate('test/combined');
validate('test/prettierCombined');
validate('test/scriptCombined');
validate('test/testCombined');
