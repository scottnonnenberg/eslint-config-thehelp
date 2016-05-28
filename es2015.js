'use strict';

module.exports = {
  env: {
    es6: true,
  },

  parser: 'babel-eslint',

  rules: {
    'func-names': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
    }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'import/no-commonjs': 'error',
  },
};
