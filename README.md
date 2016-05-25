# eslint-config-thehelp

Because the tools can help us write better code. :0)

## My principles for rules

I want rules to specify the 98% case. `eslint-disable` will cover the rest. I can periodically search for those exceptions and reconsider their justification.

## Compatibility

**This project is compatible with `npm` version 3 only.** The goal is to make this a one-stop install for `eslint` and its plugins, but plugin name resolution for `eslint` is hardcoded to the top-level. Installing this with `npm` 3.x will ensure that. `npm` version 2, however, puts this project's dependences underneath it in the directory streucture, making them invisible to the larger project.

_Note: if you have `eslint` or any eslint plugins installed yourself, they will supercede the plugins installed with this project. Check this if you're getting errors, like 'unknown rule.'_

## Configurations in this project

1. `core` - Basic good javascript practices. Node.js and CommonJS.
2. `es2015` - Preferring ES2015 constructs over ES5 constructs. `import`/`export` instead of `module.exports`. Babel required.
3. `functional` - Eliminating mutation of data and all loops, in favor of functional design.
4. **default** - the previous three combined into one configuration. Suitable for any node module or server project.
5. `react` - rules for JSX and React component structure, as well as accessibility.
6. `scripts` - a looser configuration appropriate for your project's `scripts/` directory. For example, allows use of `devDependencies`.
7. `test` - a configuration appropriate for your projects `test/` directory, bringing in two new plugins, the `mocha` env, and relaxing a few rules. For example, turns off `immutable/no-let` to allow test setup in `before`/`beforeEach`.

## Key configuration

To allow `eslint-plugin-import` to do its magic, you may need to tell it where to find your modules. I use this in my project's root directory:

```javascript
{
  settings:
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
}
```

## Conflicts

Sadly, not all the rules in this project work well together.

- `functional` + `react` - the `immutable/no-this` rule conflicts with traditional React component structure, pushing you to stateless components. However, the `react/prop-types` rule will conflict with the `immutable/no-mutation` rule since you have to modify the stateless component to add the `propTypes` key. I've filed a bug: https://github.com/jhusain/eslint-plugin-immutable/issues/14
- `core` + `funtional` (without `es2015`) - you'll get an error for every modification of `module.exports`, even though that's the only way to export in CommonJS. This change will help: https://github.com/jhusain/eslint-plugin-immutable/pull/7
- `core` + `test` (without `functional`) - `test` turns off `immutable/no-let`, and it won't be present in

## My guidelines for this project:

- All rules from all plugins must be included. This is easy with `npm` scripts using `eslint-find-rules`.
- Rules are in alphabetical order: first core eslint rules, then plugins sorted by name.
- Always use 'error' or 'off' instead of 0 and 2. Numbers are for real config values.
- No warnings. either disallow it completely, or don't worry about it.
- All 'off' rules must have a reason mentioned.
- Configuration should be nothing but 'error' if it matches the default settings for the rule.


