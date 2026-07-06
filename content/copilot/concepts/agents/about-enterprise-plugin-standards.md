---
title: About enterprise-managed plugin standards
shortTitle: Enterprise plugin standards
allowTitleToDifferFromFilename: true
intro: Enterprise administrators can centrally define plugin policies for users, ensuring consistent plugin availability.
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Learn about Copilot CLI
docsTeamMetrics:
  - copilot-cli
redirect_from:
  - /copilot/concepts/agents/copilot-cli/about-enterprise-plugin-standards
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Enterprise-managed plugin standards allow administrators to **define and enforce policies for plugin availability**. By configuring a `{% data variables.copilot.managed_setting_file %}` file in the enterprise's `.github-private` repository, administrators can specify which plugin marketplaces are available to users and which plugins are installed automatically.

## Where plugin standards apply

Plugin standards apply to all users on the enterprise's {% data variables.product.prodname_copilot_short %} plan, across the following clients:

* **{% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}**: see [AUTOTITLE](/copilot/concepts/agents/about-plugins)
* **{% data variables.product.prodname_vscode_shortname %}** (version 1.122 and later): see [Agent plugins in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/agent-customization/agent-plugins) in the {% data variables.product.prodname_vscode_shortname %} documentation

Users must upgrade to a supported client version for these standards to be applied.

## How plugin standards work

Enterprise plugin standards use a configuration file stored in your enterprise's `.github-private` repository. The configuration is defined in a `{% data variables.copilot.managed_setting_file %}` file at the following path: `copilot/{% data variables.copilot.managed_setting_file %}`. The legacy file path of `.github/copilot/settings.json` is also supported.

For plugin standards, the file can define:

* **Known marketplaces**. Plugin marketplaces that are available to users for browsing and installing plugins.
* **Default-enabled plugins**. Specific plugins that are automatically installed when users authenticate.

When a user authenticates to {% data variables.product.prodname_copilot_short %} in a supported client, the client queries an API endpoint that reads the `{% data variables.copilot.managed_setting_file %}` file. The policies defined in the file are then applied to the user's session.

## Why use enterprise-managed plugin standards

Enterprise-managed plugin standards help administrators address several common challenges:

* **Consistency across clients**. Ensure that all developers have access to the same plugins and marketplaces.
* **Centralized governance**. Manage plugin availability from a single configuration file, rather than relying on individual developers to install the correct plugins.
* **Version-controlled policies**. Because the configuration lives in a Git repository, all changes to plugin standards are tracked, auditable, and reviewable through pull requests.
* **Reduced onboarding friction**. New developers automatically receive the enterprise's standard plugins when they authenticate, without any manual setup.

## Next step

To configure enterprise plugin standards, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards).
