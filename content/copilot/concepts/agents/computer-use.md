---
title: About computer use in GitHub Copilot
shortTitle: Computer use
intro: '{% data variables.product.prodname_copilot_short %} can interact with desktop applications to automate tasks that cannot be completed with a more direct tool.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE]
> {% data reusables.copilot.computer-use-preview-note %}

## About computer use

{% data variables.product.prodname_copilot_short %} can interact with desktop applications on your behalf by reading accessible application content and visual context, clicking controls, entering and editing text, pressing keys, scrolling, dragging, and navigating workflows across applications.

Computer use is available in {% data variables.copilot.copilot_cli %} and {% data variables.copilot.github_copilot_app %} on macOS and Windows.

Computer use expands the tasks {% data variables.product.prodname_copilot_short %} can help automate, including workflows in legacy and GUI-only software that do not provide an API, command-line interface, or MCP integration.

Computer use can help you complete tasks such as:

* Reviewing and summarizing information in a legacy desktop application.
* Updating content in a presentation.
* Entering or updating information in GUI-only software.
* Moving information between applications as part of a multi-step workflow.

> [!TIP]
> Computer use is designed for tasks that require interaction with a visual interface. If an API, MCP server, terminal command, filesystem tool, or dedicated browser tool can complete the task directly, that tool typically provides more structured information and predictable results.

## Capabilities

When enabled, computer use allows {% data variables.product.prodname_copilot_short %} to:

* Read accessible application content and visual context through your operating system's accessibility tree or screenshots when visual context is needed.
* Click controls.
* Enter and edit text.
* Press keys, scroll, and drag items.
* Navigate workflows across applications.

The agent selects these tools as it works through your prompt. You can review tool activity in the session.

## Controlling access for computer use

Computer use is disabled by default. You must enable it before an agent can use its tools.

Computer use follows the tool permission settings for the {% data variables.product.prodname_copilot_short %} surface where your session is running. These settings determine whether {% data variables.product.prodname_copilot_short %} asks for approval before controlling a desktop application. You can change the tool permission settings for each surface. If prompted to approve access to an application, you can grant access for the current session, save the approval for future sessions, or deny access.

If you choose **Always allow** for a specific application, {% data variables.product.prodname_copilot_short %} stores the decision locally. The decision applies to both {% data variables.copilot.copilot_cli %} and {% data variables.copilot.github_copilot_app %} on the same computer. In the app, you can review the list of always allowed applications and remove individual approvals. Removing an application deletes its saved approval for future sessions in both the app and CLI. It does not revoke access already granted in a running session.

Permission rules that deny a tool take precedence over automatic or saved approvals.

Enterprise administrators can disable computer use through managed settings. Enabling computer use locally does not override an enterprise policy. For configuration details, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#featurescomputeruse).

You can interrupt an active operation if computer use starts acting unexpectedly. In {% data variables.copilot.copilot_cli %}, press <kbd>Esc</kbd> twice. In {% data variables.copilot.github_copilot_app %}, click **Stop** or press <kbd>Esc</kbd>.

On macOS, computer use guides you through granting:

* **Accessibility** permission to interact with application controls.
* **Screen Recording** permission to inspect application windows when visual context is needed.

## Limitations and risks

Computer use interprets interfaces that can change between application versions, operating systems, and window states. It can select the wrong control, enter text in the wrong location, or have difficulty with non-standard or dynamic controls and complex workflows. Changes in timing or window state can produce different results, cause computer use to repeat an action, or prevent it from continuing.

> [!WARNING]
> Computer use can automate interactions across desktop applications, but it also introduces security risks. Ambiguous instructions or unexpected on-screen content may cause unintended actions that affect your device, data, or connected accounts, including access to personal, financial, or enterprise systems. Computer use is not a substitute for human judgment. Review the target application, requested permissions, and result, particularly before allowing actions that modify data or affect other people.

Application windows may display sensitive information, including information about other people. Only use computer use with applications and tasks whose visible content you are comfortable providing as context to {% data variables.product.prodname_copilot_short %}.

If you choose **Always allow** for an application, later computer-use actions can control it without asking again. Avoid choosing **Always allow** for applications that contain sensitive information or support high-impact actions.

For comprehensive information about responsible use, see [AUTOTITLE](/copilot/responsible-use/agents).

## Next steps

To enable and use computer use, see:

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/computer-use)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use)
