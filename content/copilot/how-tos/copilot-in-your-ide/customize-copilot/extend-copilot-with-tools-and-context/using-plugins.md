---
title: Using plugins in {% data variables.product.prodname_vscode %}
shortTitle: Use plugins in {% data variables.product.prodname_vscode %}
allowTitleToDifferFromFilename: true
intro: Add reusable capabilities to {% data variables.product.prodname_vscode %} by installing plugins from a marketplace or a local source.
versions:
  feature: copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
contentType: how-tos
---

Plugins package related customizations so you can install them together. For an overview, see [AUTOTITLE](/copilot/concepts/customizations/plugins).

To browse and install plugins in {% data variables.product.prodname_vscode %}:

1. Open **Customize** from the Chat side panel or Agents window.
1. On the **Browse** page, search for a plugin, then select **Install**.

You can also [open Browse in {% data variables.product.prodname_vscode %}](vscode://chat-customizations/open?page=discover). <!-- markdownlint-disable-line GHD003 -->

To add a marketplace and browse its plugins:

1. Run **Chat: Manage Plugin Marketplaces** from the Command Palette.
1. Select **Add Marketplace...**, then enter the marketplace source.
1. Open **Customize**, search for a plugin from the marketplace, then select **Install**.

For instructions on creating and publishing a {% data variables.product.github %}-hosted marketplace, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces).

## Install a plugin from a source

You can install a plugin directly from a Git repository or local folder without adding its marketplace.

1. Run **Chat: Install Plugin from Source** from the Command Palette.
1. Enter the repository or local folder path.

## Turn off a plugin

You can turn off an installed plugin, including one enabled by repository defaults.

1. Open **Customize** from the Chat side panel or Agents window.
1. Select **Plugins**.
1. In the list of installed plugins, turn off the toggle next to the plugin. To turn the plugin back on, turn on the toggle.

If the toggle is unavailable, enterprise managed settings require or block the plugin, and it appears as managed by policy. You cannot change it.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [Agent Plugins reference](https://code.visualstudio.com/docs/agents/reference/agent-plugin-reference)
