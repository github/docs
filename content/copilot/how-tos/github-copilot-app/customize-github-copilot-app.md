---
title: Customizing the GitHub Copilot app
shortTitle: Customize the GitHub Copilot app
intro: 'Customize the {% data variables.copilot.github_copilot_app %} for your workflows.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/customize-github-app
category:
  - Author and optimize with Copilot
  - Configure Copilot
---

Tailor the {% data variables.copilot.github_copilot_app %} to your workflows so your agents follow your conventions, use your preferred tools, and apply the right expertise to every task.

The **Customize** tab in the app sidebar allows you to discover and manage MCP servers, plugins, skills, and canvases in one place. From this tab, you can:

* Explore featured customizations as a starting point if you do not already know which customization you need.
* Browse by customization type.
* Find MCP servers by viewing trending options or browsing by category.
* Review customizations already available for you to use in the **Installed** view.

## Setting global and repository instructions

You can add instructions that apply globally or only to a specific repository.

### Setting global instructions

Global instructions apply to every session across all repositories and local folders.

1. Open the app settings.
1. Click **Sessions**.
1. Under "Instructions," edit "App instructions."

### Setting repository-specific instructions

Repository-specific instructions apply to every session for the selected repository.

1. Open the app settings.
1. Under "Repositories," click the repository.
1. Edit the "Instructions" field.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. To add or manage skills, click **Customize** in the app sidebar, then click **Skills**.

For more information about agent skills, see [AUTOTITLE](/copilot/concepts/customizations/agent-skills).

For a {% data variables.product.github %}-provided built-in skills reference, see [AUTOTITLE](/copilot/reference/github-copilot-app-reference/built-in-skills).

## Configuring MCP servers

MCP servers connect the agent to external tools and data sources. Any MCP servers configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}.

To discover and install an MCP server:

1. Click **Customize** in the app sidebar.
1. Click **MCP**.
1. Explore featured or trending servers, browse by category, or add a custom server.
1. Select a server and follow the prompts to install it.

To view or manage MCP servers that are already installed, click **Installed**.

For more information about MCP, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Connecting services

> [!NOTE]
> {% data reusables.copilot.connectors-public-preview %}

Connect an external service in the {% data variables.copilot.github_copilot_app %} to give {% data variables.product.prodname_copilot_short %} access to its tools and context. You can then use the connector across supported {% data variables.product.prodname_copilot_short %} surfaces without repeating setup. {% data variables.product.github %} handles MCP server configuration and authentication for you.

If your organization or enterprise provides your {% data variables.product.prodname_copilot_short %} subscription, an administrator may need to update its policies to allow these connections. See [AUTOTITLE](/copilot/concepts/customizations/copilot-connectors).

To connect a service:

1. Click **Customize** in the app sidebar.
1. Select **MCP** from the dropdown next to the search field.
1. Select the **{% data variables.product.github %} verified** filter. {% data variables.product.github %}-verified MCP servers (connectors) are marked with a Mona badge that shows **Verified** when you hover over it.
1. Next to the service you want to connect, click **Connect**. **Connect** only appears for services that have a {% data variables.product.github %}-verified MCP server. Other services are listed as standard MCP servers, which you install instead. See [Configuring MCP servers](#configuring-mcp-servers).
1. Follow the prompts to sign in to the service and approve access.

## Using custom agents

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.product.prodname_copilot_short %} that you can tailor to specific tasks and workflows.

Use the agent picker dropdown in the prompt box to select a {% data variables.copilot.copilot_custom_agent_short %} before or during a session.

Alternatively, type `/agent` in the prompt box to choose and invoke a {% data variables.copilot.copilot_custom_agent_short %}.

For more information, see [AUTOTITLE](/copilot/concepts/customizations/custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, {% data variables.copilot.custom_agents_short %}, MCP servers, and canvas extensions, extending the functionality of the {% data variables.copilot.github_copilot_app %}.

The **Customize** page shows plugins and other customizations from the sources configured in the app. Use its search field to find a plugin.

Repository defaults are a project-specific option in clients that read `.github/copilot/settings.json`. Members can turn off these defaults. Enterprise managed settings always win: required plugins cannot be turned off, and blocked plugins cannot be turned on. For an overview of plugin behavior, see [AUTOTITLE](/copilot/concepts/customizations/plugins).

### Install a plugin

1. Click **Customize** in the app sidebar.
1. Search the Browse page for the plugin you want to use, then click **Install**.

To test a plugin in the app, add the marketplace that contains it, then find and install the plugin from **Customize**.

### Manage installed plugins

1. Click **Customize** in the app sidebar.
1. Click **Installed**.
1. Turn on or off the toggle next to the plugin.

## Adding a plugin marketplace

To add a custom marketplace in the {% data variables.copilot.github_copilot_app %}:

1. On the **Customize** page, select the marketplace settings control next to the marketplace dropdown.
1. Follow the prompts to add the {% data variables.product.github %} repository or Git URL that hosts the marketplace.

To create and share a marketplace, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for collaborative or personal workflows. You can find canvases under **Canvas** in **Customize**, or use `/create-canvas` in a session to create your own. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

To work through {% data variables.product.prodname_code_scanning %} alerts alongside your code, install the `github-security` plugin. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts).

## Organization and enterprise management

Enterprise and organization owners can set policies to govern how {% data variables.product.prodname_copilot_short %} is used across surfaces. For the major policies supported by the {% data variables.copilot.github_copilot_app %}, see [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies).

Enterprises can also define a `{% data variables.copilot.managed_setting_file %}` file to control which actions users can take in supported {% data variables.product.prodname_copilot_short %} clients, such as which plugins users can install and whether "YOLO-style" commands are permitted. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).
