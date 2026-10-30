---
title: Model Context Protocol (MCP)
allowTitleToDifferFromFilename: true
shortTitle: MCP
intro: 'Connect {% data variables.product.prodname_copilot_short %} to external tools and data through Model Context Protocol (MCP) servers.'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/context/mcp
  - /copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
  - /copilot/concepts/agents/coding-agent/mcp-and-coding-agent
  - /copilot/concepts/coding-agent/mcp-and-coding-agent
  - /copilot/concepts/about-mcp
  - /copilot/concepts/extensions/agents
  - /copilot/concepts/extensions/build-extensions
  - /copilot/concepts/extensions/skillsets
  - /copilot/concepts/extensions/openid-connect
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent/use-copilots-llm
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension/create-github-app
  - /copilot/how-tos/use-copilot-extensions/build-copilot-skillsets
  - /copilot/how-tos/use-copilot-extensions/debug-copilot-extension
  - /copilot/how-tos/use-copilot-extensions/manage-extension-availability
  - /copilot/how-tos/use-copilot-extensions/set-up-oidc
  - /copilot/how-tos/provide-context/install-copilot-extensions
  - /copilot/concepts/extensions
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension
  - /copilot/how-tos/use-copilot-extensions
  - /copilot/concepts/context/copilot-extensions
  - /copilot/reference/extensions-glossary
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent
  - /copilot/building-copilot-extensions/about-building-copilot-extensions
  - /copilot/customizing-copilot/extending-the-capabilities-of-github-copilot-in-your-organization
  - /copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat
category:
  - Learn about Copilot
  - Integrate Copilot with your tools
---

## Overview of Model Context Protocol (MCP)

{% data reusables.copilot.mcp.intro %}

You can use MCP to extend the capabilities of {% data variables.product.prodname_copilot %} by integrating it with a wide range of existing tools and services. MCP works across all major {% data variables.product.prodname_copilot_short %} surfaces—whether you're working in an IDE, using {% data variables.copilot.copilot_cli %}, working in the {% data variables.copilot.github_copilot_app %}, or delegating tasks to an agent on {% data variables.product.prodname_dotcom_the_website %}. You can also use MCP to create new tools and services that work with {% data variables.product.prodname_copilot_short %}, allowing you to customize and enhance your experience.

For example, you can connect an issue tracker so {% data variables.product.prodname_copilot_short %} can look up a bug while working on a fix, without asking you to copy the issue into chat.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For a curated list of MCP servers from partners and the community, see the [{% data variables.product.github %} MCP Registry](https://github.com/mcp).

{% data reusables.copilot.mcp.mcp-policy %}

MCP complements the context you provide through prompts, files, and instructions. It adds connections to tools and data, rather than replacing guidance about how the agent should work. For guidance about prompting and managing context, see [AUTOTITLE](/copilot/concepts/prompting-and-context).

Connect a service once through {% data variables.product.github %}-verified MCP servers (connectors), then use the connection across supported {% data variables.product.prodname_copilot_short %} surfaces without repeating setup or signing in separately in each one. These connections also work in {% data variables.product.prodname_copilot_short %} sessions running in a cloud sandbox, but not in sessions running on {% data variables.product.prodname_actions %}. See [AUTOTITLE](/copilot/concepts/customizations/copilot-connectors).

## Where you can use MCP

MCP setup depends on where you use {% data variables.product.prodname_copilot_short %}:

* **The {% data variables.copilot.github_copilot_app %}**: You can use MCP servers configured for your repository or in your local {% data variables.product.prodname_copilot_short %} configuration. You can also discover and install additional MCP servers from the **Customize** tab.
* **{% data variables.copilot.copilot_cli_short %}**: {% data variables.copilot.copilot_cli %} supports both local and remote MCP servers. The {% data variables.product.github %} MCP server is built in and available without additional configuration.
* **{% data variables.copilot.copilot_cloud_agent %} (including {% data variables.copilot.copilot_automations %}) and {% data variables.copilot.copilot_code-review_short %}**: {% data variables.product.prodname_dotcom_the_website %} supports MCP servers configured at the repository level. The configuration applies to {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_automations %} and {% data variables.copilot.copilot_code-review_short %}. The {% data variables.product.github %} MCP server and Playwright MCP server are configured by default.
* **IDEs**: MCP servers are supported in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.jetbrains.prodname_jetbrains_ides %}, Xcode, and Eclipse. Connection and authentication options depend on the IDE. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).

Chat on {% data variables.product.prodname_dotcom_the_website %} has preconfigured tools, such as tools for creating branches and searching code. This is separate from the repository MCP settings for {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %}. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github).

## MCP for {% data variables.copilot.copilot_cloud_agent %}

The following sections describe MCP defaults and configuration for {% data variables.copilot.copilot_cloud_agent %}, including {% data variables.copilot.copilot_automations %}. Repository-level MCP settings also apply to {% data variables.copilot.copilot_code-review_short %}, as noted below. For other surfaces, use the setup guides in [Next steps](#next-steps).

### Default MCP servers

{% data variables.copilot.copilot_cloud_agent %} starts with two MCP servers configured:

* **{% data variables.product.github %}** provides access to repository data such as issues and pull requests. By default, it uses a specially scoped token with read-only access to the current repository. Access outside that repository requires explicitly configuring credentials with broader access.
* **Playwright** provides tools to read, interact with, and take screenshots of web pages. By default, it can only access web resources in the agent's own environment through `localhost` or `127.0.0.1`.

These defaults are specific to the cloud environment. For example, {% data variables.copilot.copilot_cli_short %} includes the {% data variables.product.github %} MCP server without additional configuration, but you configure other servers separately.

### Personal MCP servers

Personal MCP servers connect {% data variables.product.prodname_copilot_short %} to tools and data for your own workflow. Configure a server once to make it available in every cloud session you start. These servers are available only to you and do not affect other users working in the same repository.

Before configuring a personal MCP server, check if the service you need is covered by {% data variables.product.github %}-verified MCP servers (connectors). {% data variables.product.github %}-verified MCP servers are available in both cloud and local sessions, and {% data variables.product.github %} handles MCP server configuration and authentication for you. By contrast, personal MCP servers only support key-based authentication and are only available in cloud sandboxes. See [AUTOTITLE](/copilot/concepts/customizations/copilot-connectors).

Use personal MCP servers for connections you want across repositories or that require your own credentials. To provide a shared configuration for collaborators working in a particular repository, use [repository-level configuration](#repository-level-configuration) instead.

1. Navigate to your {% data variables.product.prodname_copilot_short %} {% octicon "home" aria-label="The home icon" %} home page at [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=customization-concept-doc-home&utm_medium=docs&utm_campaign=universe-2026).
1. In the left menu, click the **{% octicon "tools" aria-label="The tools icon" %} Customize** menu.
1. Check whether the service you need is covered by a {% data variables.product.github %}-verified MCP server.
1. If a {% data variables.product.github %}-verified MCP server doesn't cover your needs and you want to configure your own MCP server, select the **{% octicon "plus" aria-label="The plus icon" %} Add** dropdown menu, then click **{% octicon "server" aria-label="The server icon" %} MCP server**.
1. Enter the server name, transport type, URL or startup command, and other required configuration.
1. If authentication is required, create secrets in [Personal MCP server secrets](https://github.com/settings/copilot/agent-secrets?utm_source=customization-concept-doc-agent-secrets&utm_medium=docs&utm_campaign=universe-2026) with names prefixed with `COPILOT_MCP_`, such as `COPILOT_MCP_API_KEY`, and reference them in the server configuration.
1. Click **Add server**.

By default, personal MCP server secrets are available in sessions scoped to your personal account. You can also allow their use in selected organizations to use your authenticated servers there.

#### Limitations

* Personal MCP servers are available in every cloud session. You cannot currently choose which servers to enable for an individual session.
* Custom HTTP and SSE MCP servers do not support query parameters in their URLs. Pass these values as request headers instead.
* If a server is unavailable, check its configuration and confirm that any required secrets exist and are available to the account or organization where the session runs.
* You can use up to 50 MCP servers in total across personal and repository-level configurations.

### Repository-level configuration

Repository-level MCP servers connect {% data variables.product.prodname_copilot_short %} to tools and data for work in a specific repository. Repository administrators configure these servers in repository settings on {% data variables.product.prodname_dotcom_the_website %}, and the configuration is available to anyone with write access to the repository. These settings apply to both {% data variables.copilot.copilot_in_the_cloud_short %} (including {% data variables.copilot.copilot_automations %}) and {% data variables.copilot.copilot_code-review_short %}. You can disable MCP tool use for code review separately.

Use repository-level configuration when collaborators need the same tools, such as a shared issue tracker or documentation service. For servers that require authentication, use a service account for {% data variables.product.prodname_copilot_short %} rather than personal credentials. Repository-level servers cannot reference personal MCP server secrets.

You can use personal and repository-level servers together. If both configurations define a server with the same name, the repository-level configuration takes precedence.

This repository setting is distinct from project MCP configuration files used by {% data variables.copilot.copilot_cli_short %}. Use the setup guide for your surface rather than assuming that the same configuration location applies everywhere.

{% data variables.copilot.copilot_automations_cap %} can use tools from these MCP servers, but only the tools you select for each {% data variables.copilot.copilot_automation %}. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#tools-and-actions).

> [!WARNING]
> When you delegate work to {% data variables.product.prodname_copilot_short %} by @mentioning it or assigning it an issue or pull request, {% data variables.product.prodname_copilot_short %} uses configured MCP tools autonomously and does not ask for approval before calling them. For these workflows, review each server and allow only the tools and access needed for your tasks.

{% data reusables.copilot.mcp.repo-mcp-limitations %}

{% data variables.copilot.copilot_code-review_short %} additionally requires tools to declare `annotations.readOnlyHint: true`. Tools with this annotation missing or set to `false` are excluded.

For configuration, authentication, and validation procedures, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### MCP servers for custom agents

For {% data variables.copilot.copilot_cloud_agent %}, an agent profile can define MCP servers for that custom agent, rather than making them available to every agent working in the repository. The `mcp-servers` profile property is not used by custom agents running directly in IDEs.

For {% data variables.copilot.copilot_cloud_agent %}, default server configurations are processed first, then custom agent configurations, then repository settings. Later configurations can override earlier settings. This order does not describe project-file precedence in {% data variables.copilot.copilot_cli_short %}.

For the profile format, supported properties, and processing rules, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).

## Best practices

* Review third-party servers before enabling them. Check their tools, authentication requirements, and data access against your organization's requirements.
* Enable only the tools a task needs. In repository settings, use the `tools` field to allowlist specific tools, preferably read-only tools, rather than enabling every tool. In {% data variables.copilot.copilot_automations %}, pick the specific tools you need.
* Keep credentials scoped to the required resources. Do not broaden the default token's access for {% data variables.copilot.copilot_cloud_agent %} unless the task needs it.
* Validate configuration before relying on it. Confirm which servers and tools are available in your agent session. For setup instructions for your environment, see [Next steps](#next-steps).

## About the {% data variables.product.github %} MCP server

The {% data variables.product.github %} MCP server is a Model Context Protocol (MCP) server provided and maintained by {% data variables.product.github %}.

{% data variables.product.github %} MCP server can be used to:

* Automate and streamline code-related tasks.
* Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage {% data variables.product.github %}’s context and AI capabilities.
* Enable cloud-based workflows that work from any device, without local setup.
* Invoke {% data variables.product.github %} tools, such as {% data variables.copilot.copilot_cloud_agent %} (requires {% data variables.product.prodname_copilot %} subscription) and {% data variables.product.prodname_code_scanning %} (requires {% data variables.product.prodname_GHAS %} subscription), to assist with code generation and security analysis.

To learn how to use the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

To find out whether your editor supports the {% data variables.product.github %} MCP server, and which connection and authentication methods are available, see [Support by host application](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/README.md#support-by-host-application) in the `github/github-mcp-server` repository.

### Remote access

You can access the {% data variables.product.github %} MCP server remotely through {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %} without any local setup. The remote server has access to additional toolsets only available in the remote {% data variables.product.github %} MCP server. For a list of such tools, see [Additional toolsets](https://github.com/github/github-mcp-server?tab=readme-ov-file#additional-toolsets-in-remote-github-mcp-server) in the `github/github-mcp-server` repository.

The {% data variables.product.github %} MCP server can also run locally in any MCP-compatible editor, if necessary.

### Toolset customization

> [!IMPORTANT]
> Always review the {% data variables.product.github %} MCP server repository at [github/github-mcp-server](https://github.com/github/github-mcp-server) for the latest toolsets and authoritative configuration guidance.

The {% data variables.product.github %} MCP server supports enabling or disabling specific groups of functionalities via toolsets. Toolsets allow you to control which {% data variables.product.github %} API capabilities are available to your AI tools.

Enabling only the toolsets you need improves your AI assistant's performance and security. Fewer tools means better tool selection accuracy and fewer errors. Disabling unused toolsets also frees up tokens in the AI's context window.

Toolsets do not only include tools, but also relevant MCP resources and prompts where applicable.

To learn how to configure toolsets for the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/configure-toolsets).

### Security

For all public repositories, and private repositories covered by {% data variables.product.prodname_GHAS %}, interactions with the {% data variables.product.github %} MCP server are secured by push protection, which blocks secrets in AI-generated responses and prevents them from being included in actions taken on your behalf. You can also proactively scan your code for exposed secrets from within your AI coding agent. For more information, see [AUTOTITLE](/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server).

## About the {% data variables.product.github %} MCP Registry

The {% data variables.product.github %} MCP Registry is a curated list of MCP servers from partners and the community. You can use the registry to discover new MCP servers and find ones that meet your specific needs.

> [!NOTE]
> The {% data variables.product.github %} MCP Registry is currently in {% data variables.release-phases.public_preview %} and subject to change.

## Agent finder

Agent finder is a discovery service that helps {% data variables.product.prodname_copilot %} find the right capabilities—such as MCP servers, tools, agents, and skills—for a task at runtime, instead of requiring every capability to be configured in advance. Like an MCP registry, it searches a catalog of capabilities and returns ranked matches that {% data variables.product.prodname_copilot %} can use on demand. Agent finder implements the open Agentic Resource Discovery (ARD) specification.

For {% data variables.copilot.copilot_cli_short %} setup, see [Using agent finder](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers#using-agent-finder). The {% data variables.copilot.github_copilot_app %} provides an `af` built-in skill. See [AUTOTITLE](/copilot/reference/github-copilot-app-reference/built-in-skills). To browse the catalog, see [GitHub Agent Finder](https://github.com/agentfinder).

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)—Add MCP servers to {% data variables.copilot.copilot_cli_short %}
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app)—Manage MCP servers in the {% data variables.copilot.github_copilot_app %}
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers)—Configure repository MCP servers for {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %}
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp)—Add MCP servers to {% data variables.copilot.copilot_chat_short %} in your IDE
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server)—Set up the {% data variables.product.github %} MCP server
