---
title: Customizing the GitHub Copilot app
shortTitle: Customize the GitHub Copilot app
intro: 'Customize the {% data variables.copilot.github_copilot_app %} so it works the way you and your team do.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-customize-app-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
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

## Setting global and repository instructions

You can set global instructions in the app settings under **General**. 

You can set repository-specific instructions in the app settings, under the repository name in the "Projects" section.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. You can also add and manage skills in the app settings under **Skills**.

For more information about agent skills, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

## Configuring MCP servers

MCP servers connect the agent to external tools and data sources. Any MCP servers configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. You can also add and manage additional MCP servers in the app settings under **MCP Servers**. The app includes a catalog of popular servers, or you can add a custom server.

For more information about MCP, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Using custom agents

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_cloud_agent %} that you can tailor to specific tasks and workflows.

In a session, type `/agent` to choose and invoke a {% data variables.copilot.copilot_custom_agent_short %}.

For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, and {% data variables.copilot.custom_agents_short %}, extending {% data variables.copilot.github_copilot_app %}'s functionality.

To browse and install plugins, open app settings, then click **Plugins**.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-plugins).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for team or personal workflows. In a session, use `/create-canvas` to scaffold a canvas extension, then iterate on the canvas with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).
