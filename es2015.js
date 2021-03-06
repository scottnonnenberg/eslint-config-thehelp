/* eslint-disable no-inline-comments */

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
    'no-magic-numbers': ['error', { // this matches up with config in core
      ignore: [-2, -1, 0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
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
