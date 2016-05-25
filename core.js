'use strict';

/* eslint-disable no-inline-comments, no-magic-numbers */

module.exports = {
  env: {
    commonjs: true,
    node: true,
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.json$',
      '\\.(scss|less|css)$',
    ],
  },

  plugins: [
    'import',
    'security',
  ],

  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    'callback-return': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': ['error', { max: 8 }],
    'computed-property-spacing': 'error',
    'consistent-return': 'error', // NOTE: this does conflict with notate/breadcrumbs
    'consistent-this': ['error', '_this'],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'func-names': 'off', // ES5
    'func-style': ['error', 'declaration'],
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'id-blacklist': 'off', // http://eslint.org/docs/rules/id-blacklist
    'id-length': 'off', // http://eslint.org/docs/rules/id-length
    'id-match': 'off', // http://eslint.org/docs/rules/id-match
    'indent': ['error', 2, { SwitchCase: 1 }],
    'init-declarations': 'off', // a bad option; doesn't catch dynamic variable updates
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'off', // too restricting; conflicts with eslint-disable
    'max-depth': ['error', { max: 3 }],
    'max-len': ['error', 90, 2, {
      ignoreUrls: true,
      ignoreComments: true,
    }],
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-params': 'error',
    'max-statements': ['error', { max: 12 }],
    'max-statements-per-line': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off', // I'm not consistent enough on this
    'newline-before-return': 'off', // Also not consistent enough here
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off', // this space already covered by eqeqeq
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignore: [-2, -1, 0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off', // no, I like breaking out of functions early
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off', // options = options || {} is useful
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off', // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-imports': 'off', // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-modules': 'off', // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error', {
      allow: ['err'],
    }],
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'error',
    'no-ternary': 'off', // I do use it, but I try not to do it often
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off', // sometimes I'll export internals prefixed with _
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { vars: 'local' }],
    'no-use-before-define': 'off', // I use function declaration hoisting for readability
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-var': 'off', // ES5
    'no-void': 'error',
    'no-warning-comments': ['error', {
      terms: ['todo'],
      location: 'start',
    }],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off', // wish there was a limit of two keys
    'object-shorthand': 'off', // ES5
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'after',
      },
    }],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'off', // ES6
    'prefer-const': 'error',
    'prefer-reflect': 'off', // don't think we want to move to these new methods yet
    'prefer-rest-params': 'off', // ES5
    'prefer-spread': 'off', // ES5
    'prefer-template': 'off', // ES5
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    'radix': 'error',
    'require-jsdoc': 'off', // when I decide how to do docs
    'require-yield': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'sort-imports': 'off',
    'sort-vars': 'off', // relying on the import plugin for imports ordering
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'strict': 'error',
    'template-curly-spacing': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error', // when I decide how to do docs
    'valid-typeof': 'error',
    'vars-on-top': 'off', // yes, var scope can be confusing, but this is too limiting
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',

    'import/default': 'error',
    'import/no-commonjs': 'off', // ES5
    'import/export': 'error',
    'import/extensions': ['error', {
      json: 'always',
      js: 'never',
    }],
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'off', // breaks for require() https://github.com/benmosher/eslint-plugin-import/pull/326
    'import/no-amd': 'error',
    // I don't use jsdoc right now, and this rule still under active development
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off', // We're definitely using the builtins
    'import/no-unresolved': ['error', { commonjs: true }],
    // documented default is not correct, specifying manually
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#options
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
    'import/prefer-default-export': 'error',

    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error',
  },
};
