# @scottnonnenberg/eslint-config-thehelp

Because the tools can help us write better code. Use this package directly, or fork it and make it your own! :0)

Blog post announcing this project: https://blog.scottnonnenberg.com/eslint-part-1-exploration/

## My principles for rules

I want rules to specify the 98% case. `/* eslint-disable [rules] */` and `// eslint-disable-line` will cover the rest. I can periodically search for those exceptions and reconsider their justification.

Next, I believe strongly that all style mandates for a project should have automated tools which verify them. I’ve spent way, way too long talking about style in pull request reviews. Yes, some things can't be verified very easily in an automated fashion. Get creative to implement new verification schemes (write an ESLint plugin!). If you still can't do that, then make as few as possible of these kinds of manual requirements.

Details for this project:

- All rules from all plugins must be included. This is easy with `npm` scripts using `eslint-find-rules`.
- Rules are in alphabetical order: first core `eslint` rules, then plugins sorted by name.
- Always use 'error' or 'off' instead of 0 and 2. Numbers are for real config values.
- No warnings. either disallow it completely, or don't worry about it.
- All 'off' rules must have a reason mentioned.
- Configuration should be nothing but 'error' if it matches the default settings for the rule.

## Quickstart

```bash
npm install @scottnonnenberg/eslint-config-thehelp --save-dev
```

In your [ESLint](http://eslint.org/) config (I prever `.eslintrc.js`), extend this project's default configuration:

```javascript
module.exports = {
  extends: [
    '@scottnonnenberg/thehelp',
  ],
};
```

As always, you can override any settings provided in this package in your configuration's `rules` object.

## Configurations in this project

1. `@scottnonnenberg/thehelp/core` - Basic good javascript practices. Node.js and CommonJS. _Note: does not prevent the use of ES2015 constructs._
2. `@scottnonnenberg/thehelp/es2015` - Preferring ES2015 constructs over ES5 constructs. `import`/`export` instead of `module.exports`. Will run on on Node.js 6.x without a separate compile step if `export`/`import` are not used (turn off `import/no-commonjs`). Otherwise Babel is required. You'll definitely need Babel for the browser.
3. `@scottnonnenberg/thehelp/functional` - Eliminating mutation of data and all loops, in favor of functional design.
4. `@scottnonnenberg/thehelp` (**default**) - the previous three combined into one configuration. Suitable for any node module or server project.
5. `@scottnonnenberg/thehelp/react` - rules for JSX and React component structure, as well as accessibility.
6. `@scottnonnenberg/thehelp/scripts` - a looser configuration appropriate for your project's `scripts/` directory. For example, allows use of `devDependencies`.
7. `@scottnonnenberg/thehelp/test` - a configuration appropriate for your projects `test/` directory, bringing in two new plugins, the `mocha` env, and relaxing a few rules. For example, turns off `immutable/no-let` to allow test setup in `before`/`beforeEach`.

## Key configuration

To allow `eslint-plugin-import` to do its magic, you will need to tell it where to find your modules. I use this in my project's root directory:

```javascript
{
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
}
```

If using `react` config, you can get more precise deprecation warnings by setting your React version:

```javascript
{
  react: {
    version: '15.0',
  },
}
```

## Compatibility

**This project is compatible with `npm` version 3 only.** The goal is to make this a one-stop install for `eslint` and its plugins, but plugin name resolution for `eslint` is hardcoded to the top-level. Installing this with `npm` 3.x will ensure that. `npm` version 2, however, puts this project's dependences underneath it in the directory streucture, making them invisible to the larger project.

This may change if there is progress on this issue: https://github.com/eslint/eslint/issues/3458

_Note: if you have ESLint or any ESLint plugins installed yourself, they will supercede the plugins installed with this project. Check this if you're getting errors, like 'unknown rule.'_

## Other notes:

- `consistent-return` rule is incompatible with [`@scottnonnenberg/notate`](https://github.com/scottnonnenberg/notate) and [`thehelp-core`](https://github.com/thehelp/core)'s breadcrumbs
- I've left `thehelp/absolute-or-current-dir` for you to configure; it is off by default but I do recommend it.

## Contributing

This project uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to release new versions, automatically updating the version number and [changelog](https://github.com/scottnonnenberg/eslint-config-thehelp/blob/master/CHANGELOG.md) based on commit messages in [standard format](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md). [`ghooks`](https://github.com/gtramontina/ghooks) and [`validate-commit-msg`](https://github.com/kentcdodds/validate-commit-msg) are used to ensure all commit messages match the expected format (see [package.json](https://github.com/scottnonnenberg/eslint-config-thehelp/blob/master/package.json) for the configuration details).

It takes some getting used to, but this configuration is absolutely worthwhile. A changelog is way easier to understand than the chaos of a raw commit stream, especially with `standard-version` providing direct links to bugs, commits and [commit ranges](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.6.0...v0.6.1).

## TODO:

- Re-enable `no-useless-rename` when https://github.com/eslint/eslint/issues/6266 is fixed for `babel-eslint`
- Turn on `filenames/match-exports` as soon as a build is released with this PR: https://github.com/selaux/eslint-plugin-filenames/pull/9
- Update to new `imports` plugin when released, has fix for `prefer-default-export` bug: https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md
- new `pure` configuration?
  - `pure/pure` - https://github.com/purely-functional/eslint-plugin-pure
  - new rule(s): check for lodash mutating functions
  - new rule: check for `assign()` with something other than `{}` first parameter
  - `better/no-delete` - https://github.com/idmitriev/eslint-plugin-better
- `thehelp/no-array-mutation` fires for `reverse()` in lodash chain context. Though, to be fair, `_.reverse()` does mutate the underlying array. Also interesting that `router.push()` fires it.

## License

(The MIT license)

Copyright (c) 2016 Scott Nonnenberg <scott@nonnenberg.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
