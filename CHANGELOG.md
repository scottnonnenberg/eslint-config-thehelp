# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.9.0](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.8.0...v0.9.0) (2021-11-26)


### ⚠ BREAKING CHANGES

* **typescript:** Remove es2015 sub-configuration, remove functional from
core configuration, enable reportUnusedDisableDirectives, add 'es2020'
to env.
* **deps:** Needed dependencies are no longer installed 
automatically with this package. This package expresses its needs with
peerDependencies now.

### Features

* **deps:** Move dependencies to peerDependencies ([29b2dec](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/29b2dec089f7e1a43fc3dce3ee041cae50b0fd84))
* **deps:** Use peerDependenciesMeta to mark all non-core deps optional ([aa7b07e](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/aa7b07e1bcc87a0ce4a83e77824cac8c2d75130d))
* **prettier:** Two new configs - prettier and prettierReact ([2b4d7db](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/2b4d7db3576c7e618d09bb0e3b5f78c9ab5db2a2))
* **rules:** A few changes to rules; match export rule now enabled ([656c8d8](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/656c8d8e5d468be1473a4df7093ee992165c1055))
* **rules:** Add missing rules from all plugins, fix new lint errors ([af4567c](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/af4567cb84f24e864959bc8538d158c3937a7ffa))
* **rules:** New scripts to find deprecated rules ([7503d14](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/7503d143bc391e1952f85ab808dfaf11774be1c8))
* **rules:** Remove deprecated rules ([b9a385a](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/b9a385af358772fb78e2bd93b8ab47aae7b69ad8))
* **rules:** Update to latest @scottnonnenberg/eslint-plugin-thehelp ([2f58adc](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/2f58adcf77bb08670431b0f514aa57f5edc1a2fd))
* **typescript:** A new set of typescript-specific rules ([fc3959e](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/fc3959e73a230d66ef1ae67cd60e42c392a70145))


### Bug Fixes

* **deps:** Fix peerDependencies - need to add stuff to devDependencies ([a16dc01](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/a16dc017392840d5ebc1612d871583abb192a562))
* **rules:** Fix references to rules from my package ([ede36f0](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/ede36f0f7a89d9c690cf736422061c754e150e6b))

<a name="0.8.0"></a>
# [0.8.0](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.7.0...v0.8.0) (2017-02-17)


### Features

* **scripts:** Allow the usage of `process.env` with scripts preset ([e27c2f2](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/e27c2f2))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.6.1...v0.7.0) (2017-01-20)


### Features

* **core:** Allow ++ and -- inside loops. Fixes [#3](https://github.com/scottnonnenberg/eslint-config-thehelp/issues/3) ([248d13d](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/248d13d))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/scottnonnenberg/eslint-config-thehelp/compare/v0.6.0...v0.6.1) (2016-06-13)


### Bug Fixes

* **default:** Properly reference new scoped name in default config ([4673cba](https://github.com/scottnonnenberg/eslint-config-thehelp/commit/4673cba))



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
