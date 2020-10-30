---
title: Supported browsers
redirect_from:
  - /articles/why-doesn-t-graphs-work-with-ie-8/
  - /articles/why-don-t-graphs-work-with-ie8/
  - /articles/supported-browsers
intro: 'We design {% data variables.product.product_name %} to support the latest web browsers. We support the current versions of [Chrome](https://www.google.com/chrome/), [Firefox](http://www.mozilla.org/firefox/), [Safari](http://www.apple.com/safari/), {% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.16" %}Internet Explorer 11, {% endif %}and [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Firefox Extended Support Release

We do our best to support Firefox's latest [Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR). Older versions of Firefox may disable some features on {% data variables.product.product_name %} and require the latest version of Firefox.

### Beta and developer builds

You may encounter unexpected bugs in beta and developer builds of our supported browsers. If you encounter a bug on {% data variables.product.product_name %} in one of these unreleased builds, please verify that it also exists in the stable version of the same browser. If the bug only exists in the unstable version, consider reporting the bug to the browser developer.
