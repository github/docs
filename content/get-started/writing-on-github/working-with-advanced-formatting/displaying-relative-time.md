---
title: Displaying relative time
intro: You can use the `<relative-time>` element to display timestamps that are localized to the reader and automatically update over time.
product: '{% data reusables.gated-features.markdown-ui %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Relative time
category:
  - Write and format content
---

## About relative time

The `<relative-time>` element formats an ISO 8601 timestamp as a localized string or as relative text that auto-updates in the reader's browser. The displayed time is adjusted to each reader's timezone, locale, and preferences.

## Adding a relative timestamp

Add a `<relative-time>` element to your Markdown. The element must have a `datetime` attribute set to a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp, and should include human-readable fallback text as its content.

```html
<relative-time datetime="2014-04-01T16:30:00Z">April 1, 2014</relative-time>
```

A reader may see "3 days ago," "on Apr 1, 2014," or "1 Apr 2014," depending on when they view it and their browser settings. If JavaScript is disabled, the reader sees the fallback text between the tags (`April 1, 2014` in this example).

> [!NOTE]
> Always include meaningful fallback text. The fallback is displayed when JavaScript is unavailable, and is used by screen readers and search engines.

## How the timestamp displays

Depending on when the timestamp is viewed, the element's text may be replaced with a format such as:

* next month
* in 2 weeks
* in 5 days
* tomorrow
* in 4 hours
* in 7 minutes
* now
* 1 minute ago
* 30 minutes ago
* 1 hour ago
* 20 hours ago
* yesterday
* 6 days ago
* 2 weeks ago
* on Apr 1, 2014

A relative date phrase is used for up to a month and then the actual date is shown. Formatting follows the browser's [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) implementation, so exact phrasing follows the reader's locale.

## Suggesting a language

Add a [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute with a language tag to suggest formatting in that language.

```html
<relative-time datetime="2019-08-12T20:50:00Z" lang="zh">2019年8月12日</relative-time>
```

## Further reading

* [`relative-time-element` usage documentation](https://github.com/github/relative-time-element#usage)
* [Relative time component in Primer](https://primer.style/product/components/relative-time/)
* [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
* [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
