---
title: Configuring toolsets for the GitHub MCP Server
intro: 'Learn how to configure toolsets and tools for the {% data variables.product.github %} MCP server for fine-grained control and optimized performance.'
shortTitle: Configure toolsets
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
redirect_from:
  - /copilot/how-tos/context/use-mcp/configure-toolsets
contentType: how-tos
category:
  - Configure Copilot
---

The {% data variables.product.github %} MCP server includes default toolsets (`repos`, `issues`, and `pull_requests`) that are enabled automatically. You can customize toolset configuration by:

* **Enabling individual toolsets** such as `actions`, `code_security`, or `secret_protection`
* **Using special keywords** like `all` to enable every available toolset, or [`default`](https://github.com/github/github-mcp-server?tab=readme-ov-file#default-toolset) to include the standard set alongside others (for example, `default,stargazers`)
* **Accessing remote-only toolsets** such as `copilot` (for {% data variables.copilot.copilot_coding_agent %}) and `github_support_docs_search`, which are only available on the remote MCP server
* **Selecting specific tools** for granular control when you want to exclude specific tools or combine toolsets with individual tools

For a complete list of available toolsets, see [Tools](https://github.com/github/github-mcp-server/blob/main/README.md#tools) in the `github/github-mcp-server` repository. For configuration examples, see [Server configuration](https://github.com/github/github-mcp-server/blob/main/docs/server-configuration.md). For a full introduction to the {% data variables.product.github %} MCP server and an overview of MCP, see [AUTOTITLE](/copilot/concepts/context/mcp).

## Configuring toolsets for the remote MCP server

You can configure toolsets for the remote {% data variables.product.github %} MCP server using:

* **URL path parameters** when enabling a single toolset
* **HTTP headers** when enabling multiple toolsets

For detailed setup instructions, see [Remote {% data variables.product.github %} MCP server](https://github.com/github/github-mcp-server?tab=readme-ov-file#remote-github-mcp-server) and [Remote server configuration](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) in the `github/github-mcp-server` repository.

## Configuring toolsets for the local MCP server

You can configure toolsets for the local {% data variables.product.github %} MCP server using:

* **Command-line flags**
* **Environment variables** (these take precedence over command-line flags)

For detailed setup instructions, see [Local {% data variables.product.github %} MCP server](https://github.com/github/github-mcp-server?tab=readme-ov-file#local-github-mcp-server) and [Tool configuration](https://github.com/github/github-mcp-server?tab=readme-ov-file#tool-configuration) in the `github/github-mcp-server` repository.

## Further reading

* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server)
* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server)
