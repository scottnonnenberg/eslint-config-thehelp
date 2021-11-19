'use strict';

module.exports = {
  extends: [
    './core',
    './functional',
    './react',
    './test',

    './scripts',
    './prettier',
    './prettierReact',
  ],

  settings: {
    react: {
      version: '16.13.1',
    },
  },
};
