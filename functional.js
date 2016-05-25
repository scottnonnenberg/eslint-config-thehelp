'use strict';

module.exports = {
  plugins: [
    'immutable',
    'no-loops',
  ],

  rules: {
    'no-param-reassign': 'error',

    'immutable/no-let': 'error',
    'immutable/no-mutation': 'error',
    'immutable/no-this': 'error',

    'no-loops/no-loops': 'error',
  },
};
