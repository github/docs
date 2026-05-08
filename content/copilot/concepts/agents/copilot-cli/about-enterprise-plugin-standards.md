---
title: About enterprise-managed plugin standards for {% data variables.copilot.copilot_cli_short %}
shortTitle: Enterprise plugin standards
allowTitleToDifferFromFilename: true
intro: 'Enterprise administrators can centrally define plugin policies for {% data variables.copilot.copilot_cli_short %}, ensuring consistent plugin availability across their enterprise.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Enterprise-managed plugin standards allow administrators to **define and enforce policies for plugin availability** in {% data variables.copilot.copilot_cli_short %} across their enterprise. By configuring a `settings.json` file in the enterprise's `.github-private` repository, administrators can specify which plugin marketplaces are available to users and which plugins are automatically installed for all enterprise users.

## How plugin standards work

Enterprise plugin standards use a configuration file stored in your enterprise's `.github-private` repository. The configuration is defined in a `settings.json` file at the following path: `.github/copilot/settings.json`.

For plugin standards, the file can define:

* **Known marketplaces**. Plugin marketplaces that are available to users for browsing and installing plugins.
* **Default-enabled plugins**. Specific plugins that are automatically installed for all enterprise users when they authenticate with the CLI.

When a user signs in to {% data variables.copilot.copilot_cli_short %}, the client queries an API endpoint that reads the `settings.json` from the enterprise's `.github-private` repository. The policies defined in the file are then applied to the user's CLI session.

## Why use enterprise-managed plugin standards

Enterprise-managed plugin standards help administrators address several common challenges:

* **Consistency across clients**. Ensure that all developers using {% data variables.copilot.copilot_cli_short %} with an enterprise-assigned {% data variables.product.prodname_copilot_short %} license have access to the same plugins and marketplaces.
* **Centralized governance**. Manage plugin availability from a single configuration file, rather than relying on individual developers to install the correct plugins.
* **Version-controlled policies**. Because the configuration lives in a Git repository, all changes to plugin standards are tracked, auditable, and reviewable through pull requests.
* **Reduced onboarding friction**. New developers automatically receive the enterprise's standard plugins when they authenticate, without any manual setup.

## Next step

To configure enterprise plugin standards for {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards).
