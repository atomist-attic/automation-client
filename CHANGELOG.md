# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/atomist/automation-seed-ts/compare/0.12.0...HEAD)

### Added

-   Add test coverage using [istanbul](https://github.com/istanbuljs/nyc) for [TypeScript](https://istanbul.js.org/docs/tutorials/typescript/)
-   Add TSLint rules that reduce coding errors.

### Changed

-   Replace use of deprecated items. [#6](https://github.com/atomist/automation-seed-ts/issues/6)
-   Improve [TypeScript input file selection](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
-   Improve [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
-   Set TypeScript compiler target to ES2016.

### Removed

-   Remove HelloAutomation.
-   Remove TypeScript `rootDir` compiler option, it is only useful with `outDir`.

## [0.12.0](https://github.com/atomist/automation-seed-ts/compare/0.11.0...0.12.0) - 2018-08-19

### Changed

-   Reduced Kubernetes termination grace period.
-   Update @atomist/automation-client and use its bin scripts in

### Fixed

-   Corrected watch of autostart package script.

## [0.11.0](https://github.com/atomist/automation-seed-ts/compare/0.10.0...0.11.0) - 2018-08-17

### Added

-   Provide Kubernetes deployment patch suitable for use by k8-automation.

### Changed

-   Better layer Docker build to allow preserving unchanged dependencies.
-   Reorganize package to have more standard Node.js layout.
-   Update dependencies.
-   Update TypeScript packages and configuration.
-   Use automation-client scripts in package scripts.
-   Relocate Kubernetes assets.

## [0.10.0](https://github.com/atomist/automation-seed-ts/compare/0.9.0...0.10.0) - 2018-04-13

### Changed

-   Update to use new GraphQL client interfaces

## [0.9.0](https://github.com/atomist/automation-seed-ts/compare/0.8.0...0.9.0) - 2018-04-10

### Added

-   HelloAutomation command handler

## [0.8.0](https://github.com/atomist/automation-seed-ts/compare/0.7.0...0.8.0) - 2018-03-19

### Changed

-   Remove generated types when cleaning
-   Update @atomist/automation-client
-   Only install production dependencies in Docker build
-   Move sample Kubernetes deployment spec to assets/kube

### Removed

-   atomist.config.ts, it is no longer necessary

## [0.7.0](https://github.com/atomist/automation-seed-ts/compare/0.6.0...0.7.0) - 2018-02-06

### Added

-   Kubernetes deployment specification and instructions

### Fixed

-   Docker CMD

## [0.6.0](https://github.com/atomist/automation-seed-ts/compare/0.5.0...0.6.0) - 2018-02-05

### Added

-   Docker build and push

### Changed

-   Moved GraphQL files under src

### Fixed

-   Fix autotest package script

## [0.5.0](https://github.com/atomist/automation-seed-ts/compare/0.4.0...0.5.0) - 2018-01-31

### Added

-   Travis CI build script can link Docker images to commits in
-   Travis CI build script can publish to S3 buckets

### Changed

-   Travis CI build script sets local git config
-   Change autostart package script to avoid zombie processes
-   Travis CI build script does not npm publish by default, set

## [0.4.0](https://github.com/atomist/automation-seed-ts/compare/0.3.0...0.4.0) - 2018-01-17

### Changed

-   Improve Docker handling in Travis CI build script
-   Update package scripts to use `atomist gql-gen` to generate

## [0.3.0](https://github.com/atomist/automation-seed-ts/compare/0.2.0...0.3.0) - 2018-01-08

### Changed

-   Add no-install and no-compile options to `atomist start`
-   Use handler discovery rather than listing in atomist.config.ts
-   Updated TypeDoc generation
-   Make package scripts more standardized and portable

## [0.2.0](https://github.com/atomist/automation-seed-ts/compare/0.1.0...0.2.0) - 2017-11-22

### Changed

-   Updated to @atomist/automation-client@0.2.0
-   Improve package scripts
-   Update test script to avoid mocha deprecated --compilers option
-   Cleaned up tests to use `.then(done, done)`
-   Updated to @atomist/automation-client 0.3.4

## [0.1.0](https://github.com/atomist/automation-seed-ts/tree/0.1.0) - 2017-10-12

### Added

-   HelloWorld command handler
-   NotifyOnPush event handler
