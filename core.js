/* eslint-disable no-inline-comments */

'use strict';

module.exports = {
  env: {
    commonjs: true,
    node: true,
    es2020: true,
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.json$',
      '\\.(scss|less|css)$',
    ],
  },

  plugins: [
    'filenames',
    'import',
    'security',
    '@scottnonnenberg/eslint-plugin-thehelp',
  ],

  reportUnusedDisableDirectives: true,

  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': ['error', { max: 20 }],
    'computed-property-spacing': 'error',
    'consistent-return': 'error', // NOTE: this does conflict with notate/breadcrumbs
    'consistent-this': ['error', '_this'],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'], // Disappointing: 'never' wants no space between async and () for arrow functions.
    'func-name-matching': ['error', 'always'],
    'func-names': 'error',
    'func-style': ['error', 'declaration'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': 'error',
    'getter-return': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': ['error', 'err', 'e'],
    'id-length': ['error', { exceptionPatterns: ['[_i-kx-z]'], properties: 'never', min: 3 }],
    'id-match': 'off', // project-specific
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'init-declarations': 'off', // exceptions are too common
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off', // variation happens
    'linebreak-style': 'error',
    'lines-around-comment': 'off', // too restricting; conflicts with eslint-disable
    'lines-between-class-members': 'off', // we want conceptual groups
    'max-classes-per-file': 'off',
    'max-depth': ['error', { max: 3 }],
    'max-len': ['error', 90, 2, { ignoreUrls: true, ignoreComments: true }],
    'max-lines': 'off',
    'max-lines-per-function': ['off', { max: 100 }],
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-params': 'error',
    'max-statements': 'off', // complexity rule is enough
    'max-statements-per-line': 'error',
    'multiline-comment-style': ['off', 'separate-lines'],
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error', // For scripts this is okay, but most code shouldn't do this
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off', // Sometimes you need it!
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
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
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
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
    'no-loss-of-precision': 'error',
    'no-magic-numbers': ['error', { ignore: [-2, -1, 0, 1, 2], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false }],
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // project-specific
    'no-restricted-globals': 'off', // project-specific
    'no-restricted-imports': 'off', // project-specific
    'no-restricted-properties': 'off', // project-specific
    'no-restricted-syntax': ['error', 'DebuggerStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off', // I do use it, but I try not to do it often
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off', // Typescript pushes you very strongly towards undefined
    'no-underscore-dangle': 'off', // sometimes I'll export internals prefixed with _
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off', // I use function declaration hoisting for readability
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': ['error', { terms: ['todo'], location: 'start' }],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off', // we always want curlies!
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off', // wish there was a limit of two keys
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off', // project-specific
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { AssignmentExpression: { array: false, object: false } }],
    'prefer-exponentiation-operator': 'off', // this syntax is still a bit new
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': 'off', // there are too many situations where we want semantic ordering
    'sort-vars': 'off', // relying on the import plugin for imports ordering
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'strict': 'off', // Modern environments no longer need this directive
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'off', // yes, var scope can be confusing, but this is too limiting
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',

    'filenames/match-exported': 'error',
    'filenames/match-regex': ['error', /^[a-zA-Z0-9_\-.]+$/],
    'filenames/no-index': 'off',

    'import/default': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/exports-last': 'off', // I like to export at the top of the file!
    'import/extensions': ['error', { json: 'always', js: 'never' }],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': ['error', { max: 20, ignoreTypeImports: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'off', // breaks for require() https://github.com/benmosher/eslint-plugin-import/pull/326
    'import/no-absolute-path': 'off',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    'import/no-import-module-exports': 'off',
    'import/no-internal-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off', // We're always exporting named things
    'import/no-namespace': 'off', // throws error: "Cannot read properties of undefined (reading 'node')"
    'import/no-nodejs-modules': 'off', // project-specific
    'import/no-relative-packages': 'off', // specific to lerna multirepo structures
    'import/no-relative-parent-imports': 'off', // we've got absolute-or-current-dir
    'import/no-restricted-paths': 'off', // project-specific
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-unused-modules': 'error', // can turn this off in projects importing css
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error', // configuration should be in webpack config
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }], // documented default is not correct, specifying manually
    'import/prefer-default-export': 'off', // Even in single-export modules, we export a named thing
    'import/unambiguous': 'error',

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

    '@scottnonnenberg/thehelp/absolute-or-current-dir': 'off',
    '@scottnonnenberg/thehelp/no-array-mutation': 'off',
    '@scottnonnenberg/thehelp/no-mutation': 'off',
  },
};
