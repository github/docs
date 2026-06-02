---
title: Customizing the GitHub Copilot app
shortTitle: Customize the GitHub Copilot app
intro: 'Customize the {% data variables.copilot.github_copilot_app %} so it works the way you and your team do.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/customize-github-app
category:
  - Author and optimize with Copilot
  - Configure Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}, {% data variables.copilot.copilot_pro_short %}, and {% data variables.copilot.copilot_pro_plus_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-customize&utm_medium=docs&utm_campaign=msbuild-2026). For {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, your organization or enterprise must enable preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_free_short %} users and users without a {% data variables.product.prodname_copilot_short %} plan** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-customize&utm_medium=docs&utm_campaign=msbuild-2026).

Tailor the {% data variables.copilot.github_copilot_app %} to your workflows so your agents follow your conventions, use your preferred tools, and apply the right expertise to every task.

## Setting global instructions

You can set instructions that apply to every session across all projects in the app settings under **General**.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. You can also add and manage skills in the app settings under **Skills**.

For more information about agent skills, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

## Configuring MCP servers

MCP servers connect the agent to external tools and data sources. Any MCP servers configured for your repositories or {% data variables.product.prodname_copilot_short %} CLI are automatically available in the {% data variables.copilot.github_copilot_app %}. You can also add and manage additional MCP servers in the app settings under **MCP Servers**. The app includes a catalog of popular servers, or you can add a custom server.

For more information about MCP, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for team or personal workflows. In a session, use `/create-canvas` to scaffold a canvas extension, then iterate on the canvas with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).
