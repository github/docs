---
title: MCP server usage in your company
shortTitle: MCP management
intro: 'You can manage MCP server usage to provide your developers with valuable tools while maintaining security and compliance.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Manage Copilot for a team
---

You can manage Model Context Protocol (MCP) server usage in your organization or enterprise by configuring a series of MCP policies on {% data variables.product.prodname_dotcom_the_website %}. Through these policies, you can allow or block MCP server usage entirely, or restrict access to a list of servers that you define in an MCP registry. These policies apply to supported IDEs and {% data variables.copilot.copilot_cli_short %}.

## MCP registries

An MCP registry is a directory of MCP servers that acts like a catalog for IDEs and {% data variables.product.prodname_copilot_short %}. Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that server provides.

After you create your MCP registry, you can make it available to your company, allowing you to:
* Curate a catalog of MCP servers your developers can discover and use without context switching
* Restrict access to unapproved servers for increased security and compliance
* Provide clarity to developers when a server is blocked by policy

## Agent finder

Agent finder is a discovery service that helps {% data variables.product.prodname_copilot %} find the right capabilities—such as MCP servers, tools, agents, and skills—for a task at runtime, instead of requiring every capability to be configured in advance. Like an MCP registry, it searches a catalog of capabilities and returns ranked matches that {% data variables.product.prodname_copilot %} can use on demand. Agent finder implements the open Agentic Resource Discovery (ARD) specification.

To use agent finder, download the [agent finder skill](https://github.com/ards-project/connectors/blob/main/skills/github-copilot/SKILL.md) and add it to your `~/.copilot/skills` directory. For more information about agent skills, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills). To browse the catalog, see [GitHub Agent Finder](https://github.com/agentfinder).

## MCP policy settings

The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise:

* **MCP servers in {% data variables.product.prodname_copilot_short %}**: Manage the use of MCP servers for all users with {% data variables.product.prodname_copilot_short %} seats in your organization or enterprise.
* **MCP Registry URL**: Specify the URL of your MCP registry, allowing your developers to discover and use approved MCP servers in supported surfaces.
* **Restrict MCP access to registry servers**: Choose whether to allow all MCP servers or restrict access to only those listed in your configured registry.

## Supported surfaces

MCP management features are supported as follows:

| Surface | Registry display | Allowlist enforcement |
|---|:---:|:---:|
| {% data variables.copilot.copilot_cli_short %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_cloud_agent %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Eclipse | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| JetBrains | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.product.prodname_vs %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.product.prodname_vscode_shortname %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.product.prodname_vscode_shortname %} Insiders | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Xcode | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

> [!NOTE]
> For Eclipse, JetBrains, and Xcode, MCP management features are supported in the pre-release versions of {% data variables.product.prodname_copilot_short %}.

## Next steps

To create your own MCP registry, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).
