# @scottnonnenberg/eslint-config-thehelp

Because the tools can help us write better code. Use this package directly, or fork it and make it your own! :0)

Blog post announcing this project: https://blog.scottnonnenberg.com/eslint-part-1-exploration/

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

1. `@scottnonnenberg/thehelp` - Basic good, modern javascript practices. Node.js and CommonJS.
2. `@scottnonnenberg/thehelp/functional` - Eliminating mutation of data and all loops, in favor of functional design.
3. `@scottnonnenberg/thehelp/react` - rules for JSX and React component structure, as well as accessibility.
4. `@scottnonnenberg/thehelp/scripts` - a looser configuration appropriate for your project's `scripts/` directory. For example, allows use of `devDependencies`.
5. `@scottnonnenberg/thehelp/test` - a configuration appropriate for your projects `test/` directory, bringing in two new plugins, the `mocha` env, and allowing use of `devDependencies`.

[Typescript](https://www.typescriptlang.org/)-specific configuration:
1. `@scottnonnenberg/typescript` - Because Typescript is what you should be writing, not plain Javascript!
2. `@scottnonnenberg/testTypescript` - Some rules disabled in `/test` are duplicated by typescript plugin.

[Prettier](https://prettier.io/)-specific configuration, turning off formatting rules that prettier takes care of for you.
1. `@scottnonnenberg/thehelp/prettier`
2. `@scottnonnenberg/thehelp/prettierReact`
3. `@scottnonnenberg/thehelp/prettierTypescript`

## Peer Dependencies

Take a look at [`package.json`](https://github.com/scottnonnenberg/eslint-config-thehelp/blob/main/package.json) for its `peerDependencies` list.

Five dependencies are required.

Optional peer dependencies will need to be installed if you use additional configurations beyond the default:
- `/react` requires the `react` and `jsx-a11y` plugins.
- `/test` requires the `bdd` and `chai-expect` plugins
- `/typescript` requires `typescript`, and `@typescript-eslint` plugin and parser modules.
- `/functional` requires `immutable` and `no-loops` plugins.

## Key configuration

I've left `@scottnonnenberg/thehelp/absolute-or-current-dir` disabled by default, but I do recommend it! If you enabled it you'll also need to disable 'import/no-internal-modules'. And, to allow `eslint-plugin-import` to do its magic, you will need to tell it where to find your modules. I use this in my project's root directory:

```javascript
{
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
      // If using typescript
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
}
```

If using `react` config, you can get more precise deprecation warnings by setting your React version:

```javascript
{
  react: {
    version: '17.0.2',
  },
}
```

If using `/typescript` config, the rules enabled need type information. You need to point it to your `tsconfig.json`:

```javascript
{
  parserOptions: {
    project: ['./tsconfig.json'],
  },
}
```

ESLint can also get really slow when you use typescript linting, because some of the rules need to gather full type information. I would recommend using ESLint's caching option:

```json
{
  "scripts": {
    "lint": "eslint . --cache --max-warnings 0 --ext .ts,.tsx",
    "clean": "rm .eslintcache",
  }
}
```

## My principles for rules

I want rules to specify the 98% case. `/* eslint-disable [rules] */` and `// eslint-disable-line` will cover the rest. I can periodically search for those exceptions and reconsider their justification. __Note:__ this configuration enables `reportUnusedDisableDirectives`, which means that your `eslint-disable` clauses will result in warnings if no error was actually prevented.

Next, I believe strongly that all style mandates for a project should have automated tools which verify them. I’ve spent way, way too long talking about style in pull request reviews. Yes, some things can't be verified very easily in an automated fashion. Get creative to implement new verification schemes (write an ESLint plugin!). If you still can't do that, then make as few as possible of these kinds of manual requirements.

Details for this project:

- All rules from all plugins must be included. This is easy with `npm` scripts using `eslint-find-rules`.
- Rules are in alphabetical order: first core `eslint` rules, then plugins sorted by name.
- Always use 'error' or 'off' instead of 0 and 2. Numbers are for real config values.
- No warnings. either disallow it completely, or don't worry about it.
- All 'off' rules must have a reason mentioned.
- Configuration should be nothing but 'error' if it matches the default settings for the rule.

## Contributing

This project uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to release new versions, automatically updating the version number and [changelog](https://github.com/scottnonnenberg/eslint-config-thehelp/blob/master/CHANGELOG.md) based on commit messages in [standard format](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md). [`husky`](https://github.com/typicode/husky) and [`validate-commit-msg`](https://github.com/kentcdodds/validate-commit-msg) are used to ensure all commit messages match the expected format (see [package.json](https://github.com/scottnonnenberg/eslint-config-thehelp/blob/master/package.json) for the configuration details).

It takes some getting used to, but this configuration is absolutely worthwhile. A changelog is way easier to understand than the chaos of a raw commit stream, especially with `standard-version` providing direct links to bugs, commits and [commit ranges](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.6.0...v0.6.1).

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
