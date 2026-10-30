---
title: Viewing and fixing security alerts in the GitHub Copilot app
shortTitle: View and fix security alerts
allowTitleToDifferFromFilename: true
intro: 'Work through {% data variables.product.prodname_code_scanning %} alerts alongside your code using the {% data variables.product.github %} security extension for the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Find and fix code vulnerabilities
  - Author and optimize with Copilot
---

> [!NOTE]
> {% data reusables.copilot.security-extension-preview %}

## About the {% data variables.product.github %} security extension

The {% data variables.product.github %} security extension lets you find, understand, and fix {% data variables.product.prodname_code_scanning %} alerts without leaving the {% data variables.copilot.github_copilot_app %}. You can also review your local changes for new vulnerabilities before opening a pull request.

You install the extension as part of the `github-security` plugin. The extension provides a canvas labeled **Security**, where you can work with existing alerts and run local security reviews alongside your session.

## Prerequisites

To use the {% data variables.product.github %} security extension, you need:

* A {% data variables.product.prodname_copilot_short %} plan and the {% data variables.copilot.github_copilot_app %}, signed in to your {% data variables.product.github %} account. See [AUTOTITLE](/copilot/get-started/quickstart-copilot-app).
* Permission to install the `github-security` plugin under your enterprise's managed settings, if configured.

If you use {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, the {% data variables.copilot.github_copilot_app %} policy must be enabled. If access to the app or plugin is blocked, contact your administrator.

To view existing {% data variables.product.prodname_code_scanning %} alerts for a repository in the Security canvas, you also need access to the alerts for the repository, with {% data variables.product.prodname_code_scanning %} enabled. Private repositories require {% data variables.product.prodname_GH_code_security %}. See [AUTOTITLE](/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

The extension supports repositories on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_cloud %} with data residency. {% data variables.product.prodname_ghe_server %} is not supported.

You do not need {% data variables.product.prodname_code_scanning %} enabled or a {% data variables.product.prodname_GH_code_security %} license to run a local security review.

## Installing the {% data variables.product.github %} security extension

To install the plugin from the terminal using {% data variables.copilot.copilot_cli_short %}, enter:

```shell copy
copilot plugin install github-security@awesome-copilot
```

Alternatively, install the plugin in the {% data variables.copilot.github_copilot_app %}:

1. In the app sidebar, click **Customize**.
1. In the search bar, search for `github-security`.
1. Under **Plugins**, next to "github-security," click **+ Install**.

After installation, the plugin and its extension are automatically enabled.


## Viewing code scanning alerts in the Security canvas

Use the extension to view open {% data variables.product.prodname_code_scanning %} alerts in your repository, ordered by severity. {% data variables.product.prodname_code_scanning_caps %} must be enabled for the repository, and you must have access to its alerts.

1. Start a new session for the repository you want to work on.
1. If the Security canvas isn't already open, click {% octicon "plus" aria-label="Open in panel" %}, hover over **Canvas**, then click **Security**.
1. On the extension's Security canvas home page, click **{% data variables.product.prodname_code_scanning_caps %} findings**.
1. To narrow the list, in the upper-right corner of the canvas, click {% octicon "filter" aria-label="Show filters" %} to show the search and filter controls.
1. Click an alert's title to view its description, severity, and affected code in the canvas.

Check the alert's linked pull requests to see whether someone is already working on a fix. To open the full alert page on {% data variables.product.github %}, hover over the alert's row, click {% octicon "kebab-horizontal" aria-label="More actions" %}, then click **Open in browser**.

The extension shows {% data variables.product.prodname_code_scanning %} alerts, not {% data variables.product.prodname_dependabot %} or {% data variables.product.prodname_secret_scanning %} alerts.

## Understanding and fixing alerts

The **Explain** and **Fix** buttons ask the {% data variables.product.prodname_copilot_short %} agent in your session to act on the selected {% data variables.product.prodname_code_scanning %} alerts:

* **Explain** asks the agent to explain the alerts so you can understand the vulnerabilities before deciding how to address them.
* **Fix** asks the agent to change your code to address the alerts.

1. To work on a single alert, click on it to open its details or hover over it in the findings list to reveal the **Explain** and **Fix** buttons. To work on multiple alerts, select the checkboxes next to them.
1. Click the **Explain** or **Fix** button.
1. Review the agent's response in the session. If you requested a fix, review the diff and run the relevant tests for your project.
1. Continue the conversation to adjust the fix as needed.

When you click **Fix**, {% data variables.product.prodname_copilot_short %} changes your local working copy only. It does not commit changes, push them, or open a pull request. When you are satisfied with the changes, commit and push them through your normal review process.

A local fix does not close a {% data variables.product.prodname_code_scanning %} alert. After the fix reaches the affected branch and {% data variables.product.prodname_code_scanning %} runs again, it determines whether the alert is resolved. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts).

You can also ask {% data variables.product.prodname_copilot_short %} about your alerts directly in chat. For example:

```copilot copy
Explain the highest-severity open code scanning alert in this
repository and suggest how I could fix it. Do not change any files.
```

The security extension's tools follow the app's tool permissions settings. When approval is required, {% data variables.product.prodname_copilot_short %} asks before using them, in the same way as other tools.

## Dismissing alerts

Dismiss an alert when you have determined that you do not need to fix it, for example, because it is a false positive. You need permission to dismiss {% data variables.product.prodname_code_scanning %} alerts in the repository.

Unlike fixing code locally, dismissing an alert updates it on {% data variables.product.github %}.

1. Click {% octicon "kebab-horizontal" aria-label="More actions" %} at the top of the alert's details page or, in the findings list, hover over the alert's row and click the same icon.
1. Click **Dismiss**.
1. Select a reason and add a comment explaining your decision.
1. Click **Dismiss finding** or, if approval is required, **Submit request**.

If delegated alert dismissal requires approval for your role in the repository, the extension submits a dismissal request instead of closing the alert. The alert remains open until an authorized reviewer approves the request. Dismissal requests are reviewed on {% data variables.product.github %}, not in the extension.

## Reviewing local changes for new vulnerabilities

From the Security canvas for a session, you can ask the {% data variables.product.prodname_copilot_short %} agent to check the session's current changes for vulnerabilities before opening a pull request. You can also start the review with the `/security-review` slash command. This is a focused review of your changes, not a full repository security audit or a replacement for {% data variables.product.prodname_code_scanning %}.

1. Open an active session with in-progress code changes.
1. If the Security canvas isn't already open, click {% octicon "plus" aria-label="Open in panel" %}, hover over **Canvas**, then click **Security**.
1. On the extension's Security canvas home page, under "Security review," click **Start review**. Alternatively, in the session's prompt box, type `/security-review` and press <kbd>Enter</kbd>.
1. Review the local findings in the canvas. Select findings, then click the **Explain** or **Fix** button to ask the agent to explain the findings or change your code to address them.
1. After changing your code, run the review again. The canvas indicates when your code has changed since the last review.

To return to findings from a previous local review, click **Last review results** on the extension's Security canvas home page.

Local review findings are separate from {% data variables.product.prodname_code_scanning %} alerts on {% data variables.product.github %}. Running a local review does not enable {% data variables.product.prodname_code_scanning %}.

## AI usage

When you click the **Explain** or **Fix** button, or start a security review, the {% data variables.product.prodname_copilot_short %} agent uses the model selected in the app and consumes {% data variables.product.prodname_ai_credits_short %} like other prompts. Browsing and dismissing alerts in the canvas do not use AI.
