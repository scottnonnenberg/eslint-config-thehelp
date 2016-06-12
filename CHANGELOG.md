# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.0"></a>
# [0.6.0](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.5.0...v0.6.0) (2016-06-12)


### Bug Fixes

* **eslint-find-rules:** update to version that handles scoped plugins ([d9d6d1e](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/d9d6d1e))


### Features

* **license:** Officially open-source this project under MIT license ([13a12fd](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/13a12fd))
* **package.json:** Update keywords, author, repository ([26968ff](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/26968ff))


<a name="0.5.0"></a>
# 0.5.0 (2016-06-07)

* Add `eslint-plugin-filenames` to project, turn on `match-regex` for `snake_case.js` filenames, keep the other two rules off for now.


<a name="0.4.2"></a>
## 0.4.2 (2016-06-03)

* Turn off `enforceConst` for `no-magic-numbers` rule in `core` config, re-enable in `es2015` config


<a name="0.4.1"></a>
## 0.4.1 (2016-06-03)

* update to `thehelp` 0.3.2. It properly handles `{ object: 'this' }` exceptions now.


<a name="0.4.0"></a>
# 0.4.0 (2016-06-02)

* `thehelp/no-mutation` and `thehelp/no-array-mutation` both added for `functional` configuration, and `immutable/no-mutation` is turned off
* `thehelp/absolute-or-current-dir` is off by default
* add `thehelp` plugin, with three new rules
* update to `eslint` 2.11.1, re-enable `max-statements-per-line`
* remove React version setting from `react` configuration
* update to `jsx-a11y` 1.2.3


<a name="0.3.2"></a>
## 0.3.2 (2016-05-28)

* Revert `import` plugin to 1.8.0 due to outstanding issue: https://github.com/benmosher/eslint-plugin-import/issues/358


<a name="0.3.1"></a>
## 0.3.1 (2016-05-28)

* Turn off `max-statements-per-line` due to bug with `export` statements: https://github.com/eslint/eslint/issues/6264
* Turn off `no-useless-rename` because it doesn't seem to work at all! :0( https://github.com/eslint/eslint/issues/6266


<a name="0.3.0"></a>
# 0.3.0 (2016-05-28)

* removed `babel-eslint` from project, `es2015` config now configures default parser for ES7 language features. The only thing missing with this setup is `static propTypes = {}` in `class`-based React components.
* `no-empty-function` turned off for `core`, same configuration moved to `es2015`. With no arrow function release valve, this rule was too much.
* `no-undefined` turned off for `tests` config. Sometimes you gotta use `undefined` in your tests!
* update to `eslint` 2.11.0, turned on three new rules: `no-prototype-builtins`, `no-useless-rename`, `unicode-bom`
* update to `jsx-a11y` 1.1.2
* update to `import` 1.8.1


<a name="0.2.0"></a>
# 0.2.0 (2016-05-25)

* `combined` no longer done manually, now rely on `eslint` to combine for us. `lodash` is now just a dev dependency.
* trimmed down npm package


<a name="0.1.0"></a>
# 0.1.0 (2016-05-25)

* First take as a separate project: `combined`, `core`, `es2015`, `functional`, `react`, `scripts`, and `tests` configs available
* Default is `combined`: `core`, `es2015` and `functional`
