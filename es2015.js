'use strict';

module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },

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
