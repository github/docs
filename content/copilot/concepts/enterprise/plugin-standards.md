---
title: About enterprise-managed plugin standards
shortTitle: Plugin standards
allowTitleToDifferFromFilename: true
intro: Enterprise administrators can centrally define plugin policies for users, ensuring consistent plugin availability.
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
docsTeamMetrics:
  - copilot-cli
redirect_from:
  - /copilot/concepts/agents/copilot-cli/about-enterprise-plugin-standards
  - /copilot/concepts/agents/about-enterprise-plugin-standards
---

Enterprise-managed plugin standards allow administrators to define plugin marketplace availability and require or block specific plugins in a `{% data variables.copilot.managed_setting_file %}` file.

## Where plugin standards apply

Plugin standards apply to all users on the enterprise's {% data variables.product.prodname_copilot_short %} plan, across supported clients. See [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

Users must upgrade to a supported client version for these standards to be applied.

## How plugin standards work

For plugin standards, the `{% data variables.copilot.managed_setting_file %}` file can define:

* **Known marketplaces**. Plugin marketplaces that are available to users for browsing and installing plugins.
* **Required or blocked plugins**. Specific plugins that are required to be enabled or disabled.

When a user authenticates to {% data variables.product.prodname_copilot_short %} in a supported client, the client queries the `{% data variables.copilot.managed_setting_file %}` file. The policies defined in the file are then applied to the user's session.

Repositories can enable plugins by default, but managed plugin requirements and marketplace restrictions always win. Repository defaults cannot enable a blocked plugin or bypass a marketplace restriction.

## Why use enterprise-managed plugin standards

Enterprise-managed plugin standards help administrators address several common challenges:

* **Consistency across clients**. Ensure that all developers have access to the same plugins and marketplaces.
* **Centralized governance**. Manage plugin availability from a single configuration file, rather than relying on individual developers to install the correct plugins.
* **Version-controlled policies**. Because the configuration lives in a Git repository, all changes to plugin standards are tracked, auditable, and reviewable through pull requests.
* **Reduced onboarding friction**. Developers can access approved plugin marketplaces without registering each one themselves.

## Next step

To configure enterprise plugin standards, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins).
