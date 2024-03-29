'use strict';

module.exports = {
  env: { mocha: true },

  plugins: [
    'bdd',
    'chai-expect',
  ],

  rules: {
    'max-nested-callbacks': 'off',
    'no-magic-numbers': 'off',
    'no-unused-expressions': 'off',

    'bdd/focus': 'error',
    'bdd/exclude': 'error',

    'chai-expect/missing-assertion': 'error',
    'chai-expect/no-inner-compare': 'error',
    'chai-expect/no-inner-literal': 'error',
    'chai-expect/terminating-properties': 'error',

    'import/no-extraneous-dependencies': 'off',

    'security/detect-non-literal-fs-filename': 'off',
  },
};
