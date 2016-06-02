/* eslint-disable no-inline-comments */

'use strict';

module.exports = {
  plugins: [
    'immutable',
    'no-loops',
  ],

  rules: {
    'no-param-reassign': 'error',

    'immutable/no-let': 'error',
    'immutable/no-mutation': 'off', // relying on thehelp/no-mutation until PR is accepted
    'immutable/no-this': 'error',

    'no-loops/no-loops': 'error',

    'thehelp/no-array-mutation': 'error',
    'thehelp/no-mutation': ['error', {
      exceptions: [{
        object: 'module',
        property: 'exports',
      }, {
        property: 'propTypes',
      }, {
        object: 'this',
      }],
    }],
  },
};
