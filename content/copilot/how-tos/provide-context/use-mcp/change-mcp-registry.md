---
title: Changing your MCP registry in your IDE
allowTitleToDifferFromFilename: true
shortTitle: Change MCP registry
intro: 'Customize the MCP registry you can use with {% data variables.copilot.copilot_chat_short %}.'
versions:
  feature: copilot
defaultTool: jetbrains
contentType: how-tos
category:
  - Configure Copilot
---

MCP registries for {% data variables.product.prodname_copilot_short %} in your IDE streamline the process of discovering and setting up MCP servers. By default, {% data variables.product.prodname_copilot_short %} uses the {% data variables.product.github %} MCP Registry, but you can configure your own MCP registry to customize the list of servers available in your environment.

{% jetbrains %}

>[!NOTE] MCP registry availability in {% data variables.product.prodname_copilot_short %} is currently in {% data variables.release-phases.public_preview %}, and requires the [latest nightly build](http://aka.ms/copilot-jb-mcpreg-allowlist-preview?ref_product=copilot&ref_type=engagement&ref_style=text) of {% data variables.product.prodname_copilot_short %} for JetBrains IDEs.

1. In your JetBrains IDE, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the **MCP** icon.
1. In the MCP Registry window, click the **settings {% octicon "gear" aria-label="The Settings gear" %}** icon.
1. In the settings, next to **MCP Registry URL**, enter the URL of the MCP registry you want to use.
1. Click **Apply** to save your changes, and then click **OK** to close the settings window.
1. In the MCP Registry window, you should now see the updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with {% data variables.copilot.copilot_chat_short %}.

{% endjetbrains %}

{% xcode %}

>[!NOTE] MCP registry availability in {% data variables.product.prodname_copilot_short %} is currently in {% data variables.release-phases.public_preview %}, and requires the [latest pre-release version](https://github.com/github/CopilotForXcode/releases?ref_product=copilot&ref_type=engagement&ref_style=text) of {% data variables.product.prodname_copilot_short %} for Xcode.

1. In Xcode, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the {% octicon "gear" aria-label="The Settings gear" %} icon to open settings.
1. In the settings window, select the **Tools** tab.
1. Next to **MCP Registry URL (Optional)**, click **Edit URL**.
1. In the dialog that appears, enter the URL of the MCP registry you want to use and press <kbd>Return</kbd>.
1. Click **Browse MCP Servers** to view the updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with {% data variables.copilot.copilot_chat_short %}.

{% endxcode %}

{% eclipse %}

>[!NOTE] MCP registry availability in {% data variables.product.prodname_copilot_short %} is currently in {% data variables.release-phases.public_preview %}, and requires the [latest pre-release version](https://aka.ms/copilot-ecl-mcpreg-allowlist-preview?ref_product=copilot&ref_type=engagement&ref_style=text) of {% data variables.product.prodname_copilot_short %} for Eclipse.

1. In Eclipse, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the **MCP** icon.
1. In the MCP Registry window, click **{% octicon "gear" aria-label="The Settings gear" %} Configure Registry URL**.
1. In the "Preferences" window, under "MCP Registry URL (Optional)", enter the URL of the MCP registry you want to use.
1. Click **Apply and Close** to save your changes and close the preferences window.
1. In the MCP Registry window, you should now see an updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with {% data variables.copilot.copilot_chat_short %}.

{% endeclipse %}
