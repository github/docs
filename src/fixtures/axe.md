# Axe test suite
We're using Playwright with the Axe Accessibility Engine to automatically flag accessibility issues with our site. This document summarizes some of the behavior we're enabling, and provides you with techniques and supporting documentation for working with this tooling.

**Please note**: accessibility testing requires both automated and manual testing. The results from this tool are not comprehensive, and they need to be validated against best practices and our own accessibility standards. Furthermore, at the time of this writing, we're not testing every single page or interactive element on our site, so there are plenty of opportunities to improve upon this implementation and we've got lots of room to mature.

## What we test
In this first iteration of these tests, we're testing some [high-usage pages, layouts, and elements](https://github.com/github/docs-internal/blob/30ff2bd725d3dfc326da3ed2f90fe8e87a065c93/tests/rendering-fixtures/playwright-a11y.spec.ts#L5-L21) that are at risk of becoming accessibility concerns. We understand the risk relatively well because we've fixed these types of accessibility issues in the past, but the test suite attempts to avoid making the same mistakes.

The Axe tests aren't comprehensive; for example, when elements are hidden in the DOM they may be missed. Over time, we should create more fine-grained tests that manipulate interactive elements we know can result in accessibility issues.

## How to interpret test results
A results from the Axe test suite will be verbose. We've highlighted some fields you'll find in the results below.

```shell
# Example 1
    +     "description": "Ensures table headers have discernible text",
    +     "help": "Table header text should not be empty",
    +     "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/empty-table-header?application=playwright",
    +     "id": "empty-table-header",
    +     "impact": "minor",

# Example 2
    +     "description": "Ensures that lists are structured correctly",
    +     "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
    +     "helpUrl": "https://dequeuniversity.com/rules/axe/4.7/list?application=playwright",
    +     "id": "list",
    +     "impact": "serious",
```
- `description`: explains the rule that returned an error
- `help`: explains the expected result from the rule
- `helpUrl`: links to a short page on Deque University (the makers of Axe) which will usually contain examples of both valid and invalid markup. Note that Deque University will link a lot of premium content from this page that will not be accessible without paying, so you may need to use this information as a jumping off point in doing your own research
- `id`: an identifier for the rule, can usually be cross-referenced with [Axe's HTML rules](https://dequeuniversity.com/rules/axe/4.7)
- `impact`: the impact on a user

```shell
# Example 3
	+             "message": "Element does not have text that is visible to screen readers",
    +         "failureSummary": "Fix any of the following:
    +   Element does not have text that is visible to screen readers",
    +         "html": "<th scope=\"col\"></th>",
    +         "impact": "minor",

# Example 4
    +         "failureSummary": "Fix all of the following:
    +   List element has direct children that are not allowed: hr",
    +         "html": "<ul class=\"List__ListBox-sc-1x7olzq-0 hgjakc\">",
    +         "impact": "serious",
```
-  `message`: more specific information that'll help you troubleshoot the failure
- `failureSummary`: a hint on how you could fix the problem

```shell
# Example 5
    +         "target": Array [
    +           ".ghd-tool > table > thead > tr > th[scope=\"col\"]:nth-child(1)",
		    + ]
	+     "tags": Array [
    +       "cat.name-role-value",
    +       "best-practice",
    +     ],

# Example 6
    +         "target": Array [
    +           ".List__ListBox-sc-1x7olzq-0",
    +         ],
    +     "tags": Array [
    +       "cat.structure",
    +       "wcag2a",
    +       "wcag131",
    +     ],
```
- `target`:  selector for the elements containing a failure
- `tags`: information about the severity or identifiers for the [WCAG success criteria](https://www.w3.org/TR/WCAG21/)

## Why we're doing this
We'd like our site to as accessible as possible.

Until recently, we've reacted to accessibility audits. In an audit, third-party auditors manually test specific pages from our site following a list of scenarios we provide them. Findings are reported through audit issues which require us to fix them within a designated timeframe. This process taught us a lot about our shortcomings and we now have the opportunity to be proactive.

[Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) is a tool that our auditors use for a majority -- not all -- of their testing. We can run the same engine with Playwright, which we already use. So we now have the ability to flag and fix potential accessibility issues *before* they're found in an audit.

## Supporting documentation
- [Accessibility testing](https://playwright.dev/docs/accessibility-testing) on Playwright Docs
- [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/blob/764ad64102d7b6b5186c5a4e1d79fff190991740/packages/playwright/README.md) NPM package, API documentation on GitHub
