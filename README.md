# eslint-config-thehelp

Because the tools can help us write better code. :0)

## My principles for rules

I want rules to specify the 98% case. `eslint-disable` will cover the rest. I can periodically search for those exceptions and reconsider their justification.

## Compatibility

**This project is compatible with `npm` version 3 only.** The goal is to make this a one-stop install for `eslint` and its plugins, but plugin name resolution for `eslint` is hardcoded to the top-level. Installing this with `npm` 3.x will ensure that. `npm` version 2, however, puts this project's dependences underneath it in the directory streucture, making them invisible to the larger project.

This may change if there is progress on this issue: https://github.com/eslint/eslint/issues/3458

_Note: if you have `eslint` or any eslint plugins installed yourself, they will supercede the plugins installed with this project. Check this if you're getting errors, like 'unknown rule.'_

## Configurations in this project

1. `thehelp/core` - Basic good javascript practices. Node.js and CommonJS.
2. `thehelp/es2015` - Preferring ES2015 constructs over ES5 constructs. `import`/`export` instead of `module.exports`. Babel required.
3. `thehelp/functional` - Eliminating mutation of data and all loops, in favor of functional design.
4. `thehelp` (**default**) - the previous three combined into one configuration. Suitable for any node module or server project.
5. `thehelp/react` - rules for JSX and React component structure, as well as accessibility.
6. `thehelp/scripts` - a looser configuration appropriate for your project's `scripts/` directory. For example, allows use of `devDependencies`.
7. `thehelp/test` - a configuration appropriate for your projects `test/` directory, bringing in two new plugins, the `mocha` env, and relaxing a few rules. For example, turns off `immutable/no-let` to allow test setup in `before`/`beforeEach`.

## Key configuration

To allow `eslint-plugin-import` to do its magic, you may need to tell it where to find your modules. I use this in my project's root directory:

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

## My guidelines for this project:

- All rules from all plugins must be included. This is easy with `npm` scripts using `eslint-find-rules`.
- Rules are in alphabetical order: first core eslint rules, then plugins sorted by name.
- Always use 'error' or 'off' instead of 0 and 2. Numbers are for real config values.
- No warnings. either disallow it completely, or don't worry about it.
- All 'off' rules must have a reason mentioned.
- Configuration should be nothing but 'error' if it matches the default settings for the rule.

## Notes:

- `consistent-return` rule is incompatible with [thehelp-core](https://github.com/thehelp/core)'s breadcrumbs
- I've left `thehelp/absolute-or-current-dir` for you to configure; it is off by default

## TODO:

- Re-enable `no-useless-rename` when https://github.com/eslint/eslint/issues/6266 is fixed for `babel-eslint`
- Update to new `imports` plugin when released, has fix for `prefer-default-export` bug: https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md
- new `pure` configuration?
  - `pure/pure` - https://github.com/purely-functional/eslint-plugin-pure
  - new rule(s): check for lodash mutating functions
  - new rule: check for `assign()` with something other than `{}` first parameter
  - `better/no-delete` - https://github.com/idmitriev/eslint-plugin-better
