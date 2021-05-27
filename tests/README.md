## Tests

It's not strictly necessary to run tests locally while developing: You can
always open a pull request and rely on the CI service to run tests for you,
but sometimes it's helpful to run tests locally before pushing your changes to
GitHub.

Test are written using [jest](https://ghub.io/jest), a framework maintained
by Facebook and used by many teams at GitHub. Jest is convenient in that it
provides everything: a test runner, an assertion library, code coverage analysis,
custom reporters for different types of test output, etc.

### Install optional dependencies

We typically rely on CI to run our tests, so we consider some large test-only
dependencies **optional** (for example, puppeteer). In order to run the tests locally you'll
need to make sure optional dependencies are installed by running:

```sh
npm ci --include=optional
```

### Running all the tests

Once you've followed the development instructions above, you can run the entire
test suite locally:

```sh
script/test # or `npm test`
```

### Watching all the tests

You can also run a script that will continually watch for changes and
re-run the tests any time a change is made. This command will notify you
when tests change to and from a passing or failing state, and will also print
out a test coverage report, so you can see what files are in need of tests.

```sh
npm run test-watch
```

### Testing individual files

If you're making changes to a specific file and don't want to run the entire
test suite, you can pass an argument to the `jest` testing tool:

```sh
jest __tests__/page.js
```

The argument doesn't have to be a fully qualified file path. It can also be a
portion of a filename:

```sh
jest page # runs tests on __tests__/page.js and __tests__/pages.js
```

### Linting

To validate all your JavaScript code (and auto-format some easily reparable mistakes),
run the linter:

```sh
npm run lint
```

### Broken link test

This test checks all internal links and image references in the English site. To run it locally (takes about 60 seconds):

```sh
npx jest links-and-images
```

It checks images, anchors, and links for every **version** of every **page**.

It reports five types of problems:

1. **Broken image references**
   - Example: `/assets/images/foo.png` where `foo.png` doesn't exist.
2. **Broken same-page anchors**
   - Example: `#foo` where the page does not have a heading `Foo`.
3. **Broken links due to page not found**
   - Example: `/github/using-git/foo` where there is no `foo.md` file at that path.
4. **Broken links due to versioning**
   - Example: an unversioned link to a Dotcom-only article in a page that has Enterprise versions.
5. **Broken anchors on links**
   - Example: `/some/valid/link#bar` where the linked page can be found but it does not have a heading `Bar`.
