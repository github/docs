---
title: Using the GitHub Copilot app to interact with desktop applications
shortTitle: Computer use
intro: 'With computer use, allow {% data variables.product.prodname_copilot_short %} to interact with local desktop applications from the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> {% data reusables.copilot.computer-use-preview-note %}

## About computer use

{% data variables.product.prodname_copilot_short %} can interact with desktop applications on your behalf by reading accessible application content and visual context, clicking controls, entering and editing text, pressing keys, scrolling, dragging, and navigating workflows across applications.

This capability is useful for workflows in legacy and GUI-only software that do not provide an API, command-line interface, or MCP integration. It is available for local sessions on macOS and Windows.

For information about its capabilities, controls, and limitations, see [AUTOTITLE](/copilot/concepts/agents/computer-use).

## Enabling computer use

1. Open the settings for {% data variables.copilot.github_copilot_app %}.
1. In the sidebar, select **Computer Use**.
1. Under **Enable Computer Use**, turn on **Enable Computer Use**.
1. On macOS, under **Prerequisites**, grant both required permissions:
   * Grant **Accessibility** permission to allow computer use to interact with application controls.
   * Grant **Screen Recording** permission to allow computer use to inspect application windows when visual context is needed.
1. On macOS, if a permission change is not detected, click **Check again**.

You can also use the `/computer on` command in a session. To check the current plugin and MCP status, use `/computer show`.

## Using computer use

Computer use works best when you describe the outcome you want, the applications involved, and any important constraints.

For example:

```text copy
Open APP_NAME and summarize the status information shown in the
main window. Do not change any values or submit any forms.
```

Replace `APP_NAME` with the name of an application installed on your computer.

Computer use follows the app's **Tool Permissions** setting. This setting determines whether {% data variables.product.prodname_copilot_short %} asks for approval before controlling an application. To review or change the setting, open the app settings and select **Sessions**. When approval is required, check that the requested application and action match your prompt. Then choose **Allow** to grant access for the current computer-use session, **Always allow** to save the approval for future sessions, or decline or cancel the request.

To interrupt an active operation, click **Stop** or press <kbd>Esc</kbd>.

## Reviewing always allowed applications

If you choose **Always allow** in {% data variables.copilot.github_copilot_app %} or {% data variables.copilot.copilot_cli %}, the approval is saved and applies to both surfaces on the same computer.

1. Open the settings for {% data variables.copilot.github_copilot_app %}.
1. In the sidebar, select **Computer Use**.
1. Under **Always allowed apps**, click the delete icon next to the application.

Removing an application deletes its saved approval for future sessions in both the app and CLI. It does not revoke access already granted in a running session. Click **Stop** or press <kbd>Esc</kbd> to stop the current operation. End the session to revoke application access granted to that session.

## Disabling computer use

Open the settings for {% data variables.copilot.github_copilot_app %}. In the sidebar, select **Computer Use**, then turn off **Enable Computer Use**.

You can also use `/computer off` in a session.

## Troubleshooting computer use

* If the **Computer Use** settings page is not available, confirm that the feature is available for your account and operating system.
* On macOS, if computer use cannot interact with applications, confirm that both **Accessibility** and **Screen Recording** show **Granted** under **Prerequisites**.
