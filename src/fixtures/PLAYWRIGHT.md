# Headless tests with Playwright

There are currently 3 general automated tests:

1. `vitest` tests against real English content (and some code)
1. `vitest` tests against fixture content
1. `playwright` tests against fixture content (What this document is about!)

## Quickstart

Just like with regular `vitest` tests, if you haven't already done so...

```shell
npm run build
```

Now, to run all the tests:

```shell
npm run playwright-test -- playwright-rendering
```

The first argument, `playwright-rendering` here, is because we have multiple
test suites for headless testing. Some that test local dev, some that
test for accessibility, and some that test on fixtures.

That command will automatically start a server (on `localhost:4000`) for
the duration of test suite. It then finds all `tests/**/*.spec.ts`
files and run them by using `Google Chrome` as the underlying browser.

If you have [set up a local Elasticsearch server](../search/elasticsearch-locally.md) (`localhost:9200`) the
headless tests will test doing site-searches if you've set up
an `ELASTICSEARCH_URL` environment variable.

## Introduction

The best documentation is <https://playwright.dev/> and this documentation
here is merely an introduction to it.

Refer to it when writing tests and trying to figure out how to use certain
[locators](https://playwright.dev/docs/locators) which is important
things, like `page.getByAltText()`, which you'll need for tying the browsing
to your assertions.

### What to test

Beyond some basic happy path tests, **only test what `vitest` can't test**.
In particular this means client-side JavaScript interactions. For example,
`vitest` can fetch the HTML over HTTP and assert against the `cheerio` parsed
HTML, but it can't test what happens when you click a client-side routing
link that triggers some sort of user agent interaction.

`vitest` is always faster. Playwright tests can test things like displaying
different things depending on cookies or `localStorage`. Playwright tests
can test the visual presence of something. For example, if something
like `<div style="display:none">Text here</div>` is in the DOM only
Playwright can understand that it's not actually present in the page since
`vitest` and Cheerio can't understand CSS.

Think of your headless tests as "What would a human QA person do?"
The imaginary QA person can be you. If there's something you find yourself
doing to make sure your functionality doesn't regress as it's changing,
consider that to be motivation enough to write a headless test.

## VSCode

["Playwright Test for VSCode"](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
is a great extension for people who use VSCode. Once installed, open the
file `playwright-rendering.spec.ts` and start the command
palette (`Cmd`+`Shift`+`p`) and type "Testing: Focus
on Playwright View" which will display the "TESTING" sidebar. It finds
all the file's tests as a tree and for each test there's a Play button.
You can either play a specific single test or you can make it run all
tests.

Note, that failure is often the result of the Playwright test waiting
very patiently for something to be present but it can't be found. I.e.
failures are often the same thing as Playwright reaching a waiting timeout.
This can make it feel like nothing's happening.

Near the bottom of the "TESTING" sidebar is an extra menu specifically for
Playwright. One very useful option is the "[ ] Show browser" which means a
browser window will appear when tests run.

## CLI

The most basic command is:

```shell
npm run playwright-test -- --help
```

This will guide you to all the options possible. For example,

```shell
npm run playwright-test -- --headed
```

...will open a browser flickering through the tests.

```shell
npm run playwright-test -- playwright-rendering.spec.ts
```

...will only run the tests in a file by that name.

```shell
npm run playwright-test -- playwright-rendering.spec.ts:16
```

...will run that specific `test('description here', async ({ page }))` on
line 16.

```shell
npm run playwright-test -- -g "view home page"
```

...will only run tests whose description contains that text.

## Updating browser binaries

When we upgrade the `@playwright/test` version, if you haven't already
done it yourself, you might get an error from within Playwright that the
browsers aren't up-to-date.

In VSCode you might get this error:

```shell
Browser was not installed. Invoke 'Install Playwright Browsers' action to install missing browsers.
```

On the CLI you might get this:

```shell
  Error: browserType.launch: Executable doesn't exist at /Users/peterbe/Library/Caches/ms-playwright/webkit-1848/pw_run.sh
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Looks like Playwright Test or Playwright was just installed or updated. ║
  ║ Please run the following command to download new browsers:              ║
  ║                                                                         ║
  ║     npx playwright install                                              ║
  ║                                                                         ║
  ║ <3 Playwright Team                                                      ║
  ╚═════════════════════════════════════════════════════════════════════════╝
```

All you have to do is run:

```shell
npx playwright install
```

## Debugging

Writing tests can be difficult until all the locators feel like
second nature. You might be struggling with finding something in the
page which you're not sure is there or you don't know exactly
how to refer to it.

The first thing to do is familiarize yourself with how to run the CLI
that only opens the one specific test you're debugging. Then, you
run the CLI with `--debug --headed`. For example:

```shell
npm run playwright-test -- -g "view home page" --debug --headed
```

Now, it should open an additional debugger window next to a browser
window and you can press the play button there. When it gets stuck you can
use the browser window to do things like right-clicking and "Inspect..."
to understand what's in the DOM.

Another thing that can help debugging is to open the browser just like
the script does. Run:

```shell
npm run start-for-playwright
```

and open your regular browser window on <http://localhost:4000>.
When you're done, don't forgot to stop the server otherwise
the `npm run playwright-test` command won't work.

## Codegen

Codegen is when Playwright starts a browser and a debugger window. In the
debugger window it generates TypeScript code which you can copy-and-paste
into your editor/IDE when you're done. To use codegen you need to
first manually start the server. In the **first terminal**:

```shell
npm run build && npm run start-for-playwright
```

In a **second terminal**:

```shell
npx playwright codegen
```

Now type in `localhost:4000` in the browser window and click around.
Note how the TypeScript code gets written. It's definitely not perfect
but it can save you a lot of time writing selectors.

Note that the codegen code will not have any assertions other than
sheer presence. It might also contain things like
`await page.goto('http://localhost:4000')` which you can later
correct to `await page.goto('/')`.

When you have pasted over the TypeScript code from the debugger window,
you can click into that second terminal and press `Ctrl`+`C` to stop
the codegen debugger.

## More browsers

At the moment (March 2023) we don't test more browsers in Actions.
The primary use case at the moment is testing that client-side
interactions work at all. Actual cross-browser testing is not a priority
at the current time.

## Tips on writing tests

- What would a human be able to assert? If you find yourself testing things
that you expect in the DOM that a human wouldn't be able to test, the
test might not be a good test. For example, to make an assertion that
a certain div has `class="blabla"` if you click on a certain thing. Either
test something visual or perhaps don't bother testing it with Playwright.

- *Combine* codegen tests and manual editing is a great combination.
Use the codegen output but familiarize yourself with the Playwright
documentation how to do things like locators and/or assertions.

- When you use the codegen, it's clever in that it can attach to `data-testid`
nodes in your DOM. That's a good thing. If it's unable to do that,
consider going into the React code and add some more.

## Slow tests and patience

By default the timeouts for running tests and for assertions are set up
to be quite short. In CI, they're by default quite long. The reason for
a lesser patience is for rapid development and the fact that if something
times out, in local dev, it's usually not because of a slow computer but
because of an incorrect test or assertion.

To increase the patience consider setting, for example:

```sh
export PLAYWRIGHT_TIMEOUT=20000  # 20 seconds
export PLAYWRIGHT_EXPECT_TIMEOUT=4000 # 4 seconds
```

You can also get the default patience settings as is used in CI by running
as if it was run in CI:

```sh
CI=1 npm run playwright-test -- playwright-rendering
```

Note, that with `CI` set to a truthy value, it will also default to
using exactly 1 worker. To counter that, you can use:

```sh
PLAYWRIGHT_WORKERS=4 CI=1 npm run playwright-test -- playwright-rendering
```
