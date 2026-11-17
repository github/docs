---
title: Using GitHub Copilot CLI to interact with your browser
shortTitle: Browser use
intro: 'Test web applications and complete browser-based tasks from {% data variables.copilot.copilot_cli %}.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

> [!NOTE]
> {% data reusables.copilot.browser-use-preview-note %}

## About browser use

{% data reusables.copilot.browser-use-description %}

Computer use lets {% data variables.product.prodname_copilot_short %} interact with other desktop applications. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use).

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and enable the `browser-use` plugin.

1. In Chrome or Microsoft Edge, install the **{% data variables.product.prodname_copilot %}** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).
1. Start an interactive {% data variables.copilot.copilot_cli_short %} session.
1. Enter `/plugin`, find the `browser-use` plugin, and enable it.
1. Start a new {% data variables.copilot.copilot_cli_short %} session.
1. Optionally, click the browser extension icon and check that its status is **Connected**.

In the browser extension's settings, manage permissions and experimental features.

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

## Troubleshooting

If browser use does not work, confirm that the `browser-use` plugin is enabled and that the browser extension shows **Connected**.

Run `/browser-use:doctor` and follow its guidance to check your setup.
