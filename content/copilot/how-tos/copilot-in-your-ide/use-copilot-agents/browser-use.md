---
title: Using GitHub Copilot in your IDE to interact with your browser
shortTitle: Browser use
intro: 'Test web applications and complete browser-based tasks from your IDE with {% data variables.product.prodname_copilot_short %}.'
defaultTool: vscode
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

Browser use is available in {% data variables.product.prodname_vscode %} and JetBrains IDEs. The setup steps differ by editor, so click the tabs above for instructions for your IDE.

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and turn on browser use in your IDE settings.

In Chrome or Microsoft Edge, install the **{% data variables.product.prodname_copilot %}** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).

<!-- --------------------- -->
<!-- VS Code -->
<!-- --------------------- -->

{% vscode %}

## Enabling browser use

1. Open **Settings** and search for `browser use`.
1. Enable the **Browser Use: Enabled** setting.

In the browser extension's settings, manage permissions and experimental features.

## Browser use

{% data reusables.copilot.browser-use-using %}

After you enable browser use in {% data variables.product.prodname_vscode %}, ask {% data variables.product.prodname_copilot_short %} to open a website in your browser. For example:

```text copy
Open github.com in my browser.
```

Review the agent's activity and the result.

{% endvscode %}

<!-- --------------------- -->
<!-- JetBrains -->
<!-- --------------------- -->

{% jetbrains %}

## Enabling browser use

1. Open **Settings**.
1. Select **{% data variables.product.prodname_copilot %}**, then **Chat**.
1. Turn on **Enable Browser Use**.
1. Start a new chat session.

In the browser extension's settings, manage permissions and experimental features.

## Browser use

{% data reusables.copilot.browser-use-using %}

After you enable browser use in your {% data variables.product.prodname_jetbrains_ide %}, ask {% data variables.product.prodname_copilot_short %} to open a website in your browser. For example:

```text copy
Open github.com in my browser.
```

Review the agent's activity and the result.

{% endjetbrains %}
