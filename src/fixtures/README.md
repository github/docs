# Fixture content

Fixture content is content (and data) that is meant to look very similar
to the real content, but exists for the benefit of testing functionality.

In its simplest form, code and content is intricately linked, and oftentimes
to be able to have automated testing of functionality, you need some content
to exercise that functionality.

Our fixture content exists so we can write and run end-to-end tests against
content that is specifically tied to making sure the functionality
sustainably works when we're changing any code, but without having to
worry about the real English content breaking the tests.

**Note!** We also don't want the writers of the real English content to
have to worry about breaking tests of functionality.

## How to write fixtured based rendering tests

The content is in `src/fixtures/fixtures/content/` (and `src/fixtures/fixtures/data/`)
is a cut down version of the real `content/` (and `data/`) at the root.
It doesn't have nearly as many pages and if you look closely you'll see
references and mentions to unrealistic things like "foo" or "HubGit"
which are whimsical but also importantly *different*. If it works
with any silly name, the code is modular and good.

### Quickstart

Navigate around in `src/fixtures/fixtures/content/` and familiarize yourself
with the directory structure. The only things that are "identical" to the
real content is the top-level product names which match the real content.
Deeper than the product level, the names and directories can be whatever
you want it to be.

Once you've found a place to put some fixture content, before writing
a `vitest` test, you can preview your changes using:

```shell
npm run fixture-dev
```

and navigate to <http://localhost:4000> to see your fixture content in
action.

### Write the tests

Feel free to create sub-directories or new files. For example, if it's
about end-to-end testing a new custom Liquid tag called
`lib/liquid-tags/snacks.js` you create a new test called
`src/fixtures/tests/snack.js`. (And equally, you might want to create
`src/fixtures/fixtures/content/get-started/foo/snacking.md`)

To run the tests use:

```shell
ROOT=src/fixtures/fixtures vitest src/fixtures/tests
```

### Exceptions

The top-level product names in the fixture content needs to be a perfect
subset of the product names in the real content. That's because they
get compiled in to the Next rewrite functionality so we can support
URLs that actually are `free-pro-team@latest` without mentioning it in
the URL.

Another exception is some data files that straddle real content and
support functionality. For example, `data/ui.yml` is part of the
functionality (e.g. React components) but lives in the `data/` directory
so its translation repos copies can be translated.

There's a script you can always run that makes sure all and any of these
files are up to do:

```shell
./src/tests/scripts/copy-fixture-data.js
```

It's safe to run any time. And it might be necessary to run so that
the fixture data gets a fresh copy.

### Tip! Own it

The advantage with fixture content for testing is that you can control it.
It's less likely now that your tests break because of some other change.
Similar to unit testing strategies, try to keep things in small units that
worries about *one thing at a time*.

Don't be afraid to write a `vitest` test that is very specific about what it
tests. It might seem strange when someone is only reading the tests directly.
But the fixtures are part of the tests. It's just in different files.

## Running a fixture test locally

When running fixtures tests locally, you must override the default `ROOT` and `TRANSLATIONS_FIXTURE_ROOT` environment variables to point to fixture directories:

```shell
ROOT=src/fixtures/fixtures TRANSLATIONS_FIXTURE_ROOT=src/fixtures/fixtures/translations vitest src/fixtures/tests
```

Optionally, also set `DEBUG_MIDDLEWARE_TESTS` variable to get stacktraces for `500` internal server errors:

```shell
DEBUG_MIDDLEWARE_TESTS=true ROOT=src/fixtures/fixtures TRANSLATIONS_FIXTURE_ROOT=src/fixtures/fixtures/translations vitest src/fixtures/tests
```
