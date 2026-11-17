---
title: About browser use in GitHub Copilot
shortTitle: Browser use
intro: '{% data variables.product.prodname_copilot_short %} can interact with your browser to help you test web applications and complete browser-based tasks.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE]
> {% data reusables.copilot.browser-use-preview-note %}

## About browser use

Browser use lets {% data variables.product.prodname_copilot_short %} interact with websites in your browser as part of a task. For example, you can ask {% data variables.product.prodname_copilot_short %} to test a web application, fill in a form, or retrieve information from a webpage. For tasks that involve desktop applications, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/computer-use).

Browser use works with a browser extension and your Copilot surface. To use it, install the **{% data variables.product.prodname_copilot %}** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe) and enable browser use in your Copilot surface.

## Where you can use browser use

Browser use is available in these Copilot surfaces:

* {% data variables.copilot.copilot_cli %}
* The {% data variables.copilot.github_copilot_app %}
* {% data variables.product.prodname_vscode %}
* JetBrains IDEs

The browser extension is available for these browsers:

* Google Chrome
* Microsoft Edge (Google Chrome must also be installed)

## Capabilities

When enabled, browser use allows {% data variables.product.prodname_copilot_short %} to interact with websites in your browser. You can ask {% data variables.product.prodname_copilot_short %} to:

* Test a web application.
* Fill out a form.
* Navigate to a webpage and retrieve information.

For example, you can ask {% data variables.product.prodname_copilot_short %} to test a website, record results and confirmed issues in an online spreadsheet, and draft an email summary for stakeholders. Ask {% data variables.product.prodname_copilot_short %} to show you the email before sending it.

## Controlling access for browser use

Browser use is disabled by default. You must install the browser extension and enable browser use in your Copilot surface before an agent can use it.

In the {% data variables.copilot.github_copilot_app %}, computer use must be enabled to enable browser use.

Browser use can interact with websites where you are already signed in. Give the agent clear instructions about the site and task, and review its activity and results, especially when a task could change data or affect other people.

Enterprise administrators can control whether users can enable browser use with the `features.browserUse` key in managed settings. Set the key to `false` to prevent users from enabling browser use. Set it to `true`, or omit the key, to let users control browser use in their Copilot surface. For more information, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#featuresbrowseruse).

## Limitations and risks

Web interfaces can change, and browser use can select the wrong control, enter text in the wrong location, or have difficulty with dynamic pages and complex workflows. Changes in page state or timing can produce different results or prevent a task from completing.

> [!WARNING]
> Ambiguous instructions or unexpected webpage content can cause unintended actions that affect your data or connected accounts. Review the websites, requested actions, and results, particularly before allowing changes to data or actions that affect other people.

Webpages may display sensitive information, including information about other people. Only use browser use with websites and tasks whose visible content you are comfortable providing as context to {% data variables.product.prodname_copilot_short %}. Avoid asking {% data variables.product.prodname_copilot_short %} to submit real credentials or make changes you have not reviewed. For more information about responsible use, see [AUTOTITLE](/copilot/responsible-use/agents).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/browser-use)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/browser-use)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/browser-use)
