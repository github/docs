---
title: Customizing the GitHub Copilot app
shortTitle: Customize the GitHub Copilot app
intro: 'Customize the {% data variables.copilot.github_copilot_app %} so it works the way you and your team do.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
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

Global instructions apply to every session across all projects.

1. Open the app settings.
1. Click **Sessions**.
1. Under "Instructions," edit "App instructions."

### Setting repository-specific instructions

Repository-specific instructions apply to every session for the selected repository.

1. Open the app settings.
1. Under "Projects," click the repository.
1. Edit the "Instructions" field.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. To add or manage skills, click **Customize** in the app sidebar, then click **Skills**.

For more information about agent skills, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

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


## Using custom agents

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_cloud_agent %} that you can tailor to specific tasks and workflows.

Use the agent picker dropdown in the prompt box to select a {% data variables.copilot.copilot_custom_agent_short %} before or during a session.

Alternatively, type `/agent` in the prompt box to choose and invoke a {% data variables.copilot.copilot_custom_agent_short %}.

For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, {% data variables.copilot.custom_agents_short %}, MCP servers, and canvas extensions, extending the functionality of the {% data variables.copilot.github_copilot_app %}.

The **Plugins** view shows plugins from the marketplaces configured in the app. You can filter the list by marketplace or add a custom marketplace.

To browse and install a plugin:

1. Click **Customize** in the app sidebar, then click **Plugins**.
1. Optionally, use the marketplace dropdown to filter the available plugins.
1. Find the plugin you want to use, then click **Install**.

To add a custom marketplace:

1. In the **Plugins** view, click the {% octicon "gear" aria-label="The marketplace settings icon" %} icon next to the marketplace dropdown.
1. Follow the prompts to add the {% data variables.product.github %} repository or Git URL that hosts the marketplace.

For more information, see [AUTOTITLE](/copilot/concepts/agents/about-plugins).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for team or personal workflows. You can find canvases under **Canvas** in **Customize**, or use `/create-canvas` in a session to create your own. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

## Organization and enterprise management

Enterprise and organization owners can set policies to govern how {% data variables.product.prodname_copilot_short %} is used across surfaces. For the major policies supported by the {% data variables.copilot.github_copilot_app %}, see [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies).

Enterprises can also define a `{% data variables.copilot.managed_setting_file %}` file to control which actions users can take in supported {% data variables.product.prodname_copilot_short %} clients, such as which plugins users can install and whether "YOLO-style" commands are permitted. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).
