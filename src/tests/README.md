# Tests

This directory contains utilities to support our automated testing efforts.

**This directory should not include test suites.** Please use the best subject folder available.

It's not strictly necessary to run tests locally while developing. You can
always open a pull request and rely on the CI service to run tests for you,
but it's helpful to run tests locally before pushing your changes to
GitHub.

Tests are written using [vitest](https://vitest.dev/).

`vitest` runs tests and handles assertions.

## Install optional dependencies

We typically rely on CI to run our tests, so some large test-only
dependencies are considered **optional**. To run the tests locally, you'll
need to make sure optional dependencies are installed by running:

```shell
npm ci --include=optional
```

## Running all the tests

Once you've followed the development instructions above, you can run the entire
test suite locally:

```shell
npm test
```

## Watching all the tests

You can run a script that continually watches for changes and
re-runs the tests whenever a change is made. This command notifies you
when tests change to and from a passing or failing state, and it prints
out a test coverage report so you can see what files need testing.

```shell
npm run test-watch
```

## Running individual tests

You can run specific tests in two ways:

```shell
# The TEST_NAME can be a filename, partial filename, or path to a file or directory
npm test -- <TEST_NAME>

vitest path/to/tests/directory
```

## Failed Local Tests

If the tests fail locally with an error like this:

`Could not find a production build in the '/Users/username/repos/docs-internal/.next' directory.`

You may need to run this before every test run:

```shell
npx next build
```

## Linting

To validate all your JavaScript code (and auto-format some easily reparable mistakes),
run the linter:

```shell
npm run lint
```

## Keeping the server running

When you run `vitest` tests that depend on making real HTTP requests
to `localhost:4000`, the `vitest` tests have a hook that starts the
server before running all/any tests and stops the server when done.

You can disable this, which might make it easier when debugging tests
since the server won't need to start and stop every time you run tests.

In one terminal, type:

```shell
NODE_ENV=test PORT=4000 tsx src/frame/server.ts
```

In another terminal, type:

```shell
START_VITEST_SERVER=false vitests src/versions/tests
```

Or whatever the testing command you use is.

The `START_VITEST_SERVER` environment variable needs to be set to `false`,
or else `vitest` will try to start a server on `:4000` too.

## Debugging middleware errors

By default, errors handled by the middleware are dealt with just like
any error in production. It's common to have end-to-end tests that expect
a page to throw a 500 Internal Server Error response.

If you don't expect that and you might struggle to see exactly where the
error is happening, set `$DEBUG_MIDDLEWARE_TESTS` to `true`. For example:

```shell
export DEBUG_MIDDLEWARE_TESTS=true
vitest src/shielding/tests -b
```

## Fixture based testing

See [Fixture content](src/fixtures/README.md).

## Headless tests with Playwright

See [Headless tests with Playwright](src/fixtures/PLAYWRIGHT.md)
