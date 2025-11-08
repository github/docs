---
title: Model Context Protocol (MCP) and GitHub Copilot coding agent
shortTitle: MCP and {% data variables.copilot.copilot_coding_agent_short %}
allowTitleToDifferFromFilename: true
intro: Find out about using the Model Context Protocol (MCP) with {% data variables.copilot.copilot_coding_agent %}.
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/coding-agent/mcp-and-coding-agent
category: 
  - Integrate Copilot with your tools
---

## Overview

{% data reusables.copilot.coding-agent.mcp-brief-intro %}

The agent can use tools provided by local and remote MCP servers. Some MCP servers are configured by default to provide the best experience for getting started.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on some of the currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

{% data reusables.copilot.mcp.coding-agent-limitations %}

## Default MCP servers

The following MCP servers are configured automatically for {% data variables.copilot.copilot_coding_agent %}:

* **{% data variables.product.github %}**: The {% data variables.product.github %} MCP server gives {% data variables.product.prodname_copilot_short %} access to {% data variables.product.github %} data like issues and pull requests. To learn more, see [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server).
  * By default, the {% data variables.product.github %} MCP server connects to {% data variables.product.github %} using a specially scoped token that only has read-only access to the current repository. You can customize it to use a different token with broader access. For more details, see [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp#customizing-the-built-in-github-mcp-server).

* **Playwright**: The [Playwright MCP server](https://github.com/microsoft/playwright-mcp) gives {% data variables.product.prodname_copilot_short %} access to web pages, including the ability to read, interact and take screenshots.
  * By default, the Playwright MCP server is only able to access web resources hosted within {% data variables.product.prodname_copilot_short %}'s own environment, accessible on `localhost` or `127.0.0.1`.

## Setting up MCP servers in a repository

Repository administrators can configure MCP servers for use within that repository. This is done via a JSON-formatted configuration that specifies the details of the MCP servers that {% data variables.copilot.copilot_coding_agent %} can use.

Once MCP servers are configured for use within a repository, the tools specified in the configuration will be available to {% data variables.copilot.copilot_coding_agent %} during each assigned task.

{% data variables.product.prodname_copilot_short %} will use available tools autonomously, and will not ask for approval before use.

For details of how to set up MCP servers for {% data variables.copilot.copilot_coding_agent %} in a repository, see [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp).

## MCP servers for {% data variables.copilot.custom_agents_short %}

Organization and enterprise administrators can also configure MCP servers as part of {% data variables.copilot.custom_agents_short %}.

MCP servers configured in {% data variables.copilot.custom_agents_short %} are available only to that specific agent and follow the same processing order as other MCP configurations, with {% data variables.copilot.copilot_custom_agent_short %} MCP settings processed after default servers but before repository-level configurations.

For more information on configuring MCP servers for {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).

## Best practices

* Enabling third-party MCP servers for use may impact the performance of the agent and the quality of the outputs. Review the third-party MCP server thoroughly and ensure that it meets your organization’s requirements.

* By default, {% data variables.copilot.copilot_coding_agent %} does not have access to write MCP server tools. However, some MCP servers do contain such tools. Be sure to review the tools available in the MCP server you want to use. Update the `tools` field in the MCP configuration with only the necessary tooling.

* Carefully review the configured MCP servers prior to saving the configuration to ensure the correct servers are configured for use.
