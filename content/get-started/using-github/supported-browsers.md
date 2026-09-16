---
title: Supported browsers
redirect_from:
  - /articles/why-doesn-t-graphs-work-with-ie-8
  - /articles/why-don-t-graphs-work-with-ie8
  - /articles/supported-browsers
  - /github/getting-started-with-github/supported-browsers
  - /github/getting-started-with-github/using-github/supported-browsers
intro: 'For the best experience with {% data variables.product.github %}, we recommend using the latest version of [Chrome](https://google.com/chrome), [Edge](https://www.microsoft.com/en-us/edge), [Firefox](https://mozilla.org/firefox), or [Safari](https://apple.com/safari).'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Set up your account on GitHub
---

## About web browser support

We design {% data variables.product.github %} with the latest web browsers in mind. We recommend that you use the latest version of one of the following browsers.

* [Apple Safari](https://apple.com/safari)
* [Google Chrome](https://google.com/chrome)
* [Microsoft Edge](https://www.microsoft.com/en-us/edge)
* [Mozilla Firefox](https://mozilla.org/firefox)

If you do not use the latest version of a recommended browser, or if you use a browser that is not listed above, {% data variables.product.github %} or some features may not work as you expect, or at all.

For more information about how we maintain browser compatibility for {% data variables.product.company_short %}'s products, see the [`github/browser-support`](https://github.com/github/browser-support) repository.

## Extended support for recommended web browsers

Some browser vendors provide extended support releases. We do our best to ensure that {% data variables.product.github %} functions properly in the latest extended support release for:

* Chrome's [extended stable channel](https://support.google.com/chrome/a/answer/9027636)
* Edge's [Extended Stable Channel](https://docs.microsoft.com/en-gb/deployedge/microsoft-edge-channels#extended-stable-channel)
* Firefox's [Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR)

In earlier extended support releases, {% data variables.product.github %} may not work as you expect, and some features may not be available.

## {% data variables.release-phases.public_preview_caps %} and developer builds

You may encounter unexpected bugs in {% data variables.release-phases.public_preview %} and developer builds of our supported browsers. If you encounter a bug on {% data variables.product.github %} in one of these unreleased builds, please verify that it also exists in the stable version of the same browser. If the bug only exists in the unstable version, consider reporting the bug to the browser developer.

## Troubleshooting browser behavior

Even when you use a supported browser, software or settings on your device or your network configuration can change how {% data variables.product.github %} behaves. If you experience unexpected behavior, try the following steps to identify possible causes.

* **Disable browser extensions and plug-ins.** Content blockers, ad blockers, and other third-party extensions can alter or block expected functionality. Disable them, or test in a private or incognito window with extensions turned off.
* **Check for a proxy, firewall, or content filter.** Network devices such as proxies, firewalls, or content filters, including any that inspect Transport Layer Security (TLS) traffic, can modify or block requests to {% data variables.product.github %}. If possible, retest on a network without these devices.
* **Disconnect from your virtual private network (VPN).** A VPN can route your traffic through proxies, firewalls, or inspection services that alter or block requests. If possible, disconnect from the VPN and retest.
* **Check your antivirus or endpoint security software.** Web protection, HTTPS scanning, or similar features in antivirus and endpoint security software can alter page behavior. Temporarily disable these features if your organization's policies allow, and retest.
* **Clear your cache and cookies.** Stale or cached assets from a previous session can cause unexpected behavior. Alternatively, test in a fresh private or incognito window.
* **Retest in a different supported browser.** This helps you determine whether the issue is specific to one browser or environment.
* **Try a different device or network.** Testing from another device, or from a different network such as a mobile connection, helps you determine whether the issue is specific to your device or network.

If the behavior continues after you rule out these factors, your network or system administrators may be able to provide further assistance, as they manage settings such as proxies, firewalls, and content filters. If the issue persists, contact {% data variables.contact.contact_support %}.
