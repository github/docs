---
title: Using the GitHub Copilot app to interact with your browser
shortTitle: Browser use
intro: 'Test web applications and complete browser-based tasks from the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> {% data reusables.copilot.browser-use-preview-note %}

## About browser use

{% data reusables.copilot.browser-use-description %}

Computer use lets {% data variables.product.prodname_copilot_short %} interact with other desktop applications. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/computer-use).

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and turn on browser use in the app settings.

1. In Chrome or Microsoft Edge, install the **{% data variables.product.prodname_copilot %}** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).
1. Open the app settings.
1. In the sidebar, select **Computer Use**.
1. Turn on the **Enable Browser Use** toggle.
   * Computer use must be enabled to enable browser use. If **Enable Computer Use** is off, turn it on first.

> [!NOTE]
> On macOS 27, the **GitHub Copilot browser extension** card under
> **Prerequisites** on the **Computer Use** app settings page may show
> **Not installed** even when the extension is installed. Browser use
> still works. To update the status, start a session and send a
> message. The extension connects within a few seconds, and the card
> then shows the correct status.

In the browser extension's settings, you can manage permissions and experimental features.

## Browser use

{% data reusables.copilot.browser-use-using %}

For example, ask {% data variables.product.prodname_copilot_short %} to open a website:

```text copy
Open github.com in my browser.
```

For more detailed tasks, specify the site, the outcome you want, and any constraints. For example:

```text copy
Open MY_TEST_APP_URL and check that the sign-in form
shows a validation message when the fields are empty.
Do not submit real credentials or change any data.
Summarize what you find.
```

Replace `MY_TEST_APP_URL` with the URL of a test application you can access. Review the agent's activity and the result.

