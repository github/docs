---
title: Adding MCP servers for {% data variables.copilot.copilot_cli %}
shortTitle: Add MCP servers
allowTitleToDifferFromFilename: true
intro: 'Extend {% data variables.product.prodname_copilot_short %}''s capabilities by connecting Model Context Protocol (MCP) servers to provide additional tools and context.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot CLI # Copilot CLI bespoke page
  - Author and optimize with Copilot # Copilot discovery page
docsTeamMetrics:
  - copilot-cli
---

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). You can connect MCP servers to {% data variables.copilot.copilot_cli %} to give {% data variables.product.prodname_copilot_short %} access to external tools, data sources, and services. For an overview of MCP, see [AUTOTITLE](/copilot/concepts/about-mcp).

## Adding an MCP server

> [!NOTE]
> The {% data variables.product.github %} MCP server is built into {% data variables.copilot.copilot_cli_short %} and is already available without any additional configuration. The steps below are for adding other MCP servers.

If your organization or enterprise has configured a registry URL and allowlist policy, those settings apply to {% data variables.copilot.copilot_cli_short %}. The configured registry URL will appear as a discovery source, and only servers permitted by the allowlist policy can run.

You can add MCP servers using the interactive `/mcp add` command within the CLI, or by editing the configuration file directly.

For installation instructions, available tools, and URLs for specific MCP servers, see the [{% data variables.product.github %} MCP Registry](https://github.com/mcp).

### Using the `/mcp add` command

1. In interactive mode, enter `/mcp add`. A configuration form is displayed. Use <kbd>Tab</kbd> to navigate between fields.
1. Next to **Server Name**, enter a unique name for the MCP server. This is the name you will use to refer to the server.
1. Next to **Server Type**, select a type by pressing the corresponding number. The following types are available:

   * **Local** or **STDIO**: starts a local process and communicates over standard input/output (`stdin`/`stdout`). Both options work the same way. **STDIO** is the standard MCP protocol type name, so choose this if you want your configuration to be compatible with {% data variables.product.prodname_vscode_shortname %}, the {% data variables.copilot.copilot_cloud_agent %}, and other MCP clients.
   * **HTTP** or **SSE**: connects to a remote MCP server. **HTTP** uses the Streamable HTTP transport. **SSE** uses the legacy HTTP with Server-Sent Events transport, which is deprecated in the MCP specification but still supported for backwards compatibility. <!-- markdownlint-disable-line GHD046 -->

1. The remaining fields depend on the server type you selected:

   * If you chose **Local** or **STDIO**:

     * Next to **Command**, enter the command to start the server, including any arguments. For example, `npx @playwright/mcp@latest`. This corresponds to both the `command` and `args` properties in the JSON configuration file.
     * Next to **Environment Variables**, optionally specify environment variables the server needs, such as API keys or tokens, as JSON key-value pairs. For example, `{"API_KEY": "YOUR-API-KEY"}`. The `PATH` variable is automatically inherited from your environment. All other environment variables must be configured here.

   * If you chose **HTTP** or **SSE**:

     * Next to **URL**, paste the remote server URL. For example, `https://mcp.context7.com/mcp`.
     * Next to **HTTP Headers**, optionally specify HTTP headers as JSON. For example, `{"CONTEXT7_API_KEY": "YOUR-API-KEY"}`.

1. Next to **Tools**, specify which tools from the server should be available. Enter `*` to include all tools, or provide a comma-separated list of tool names (no quotes needed). The default is `*`.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the configuration. The MCP server is added and available immediately without restarting the CLI.

### Editing the configuration file

You can also add MCP servers by editing the configuration file at `~/.copilot/mcp-config.json`. This is useful if you want to share configurations or add multiple servers at once.

The following example shows a configuration file with a local server and a remote HTTP server:

```json copy
{
  "mcpServers": {
    "playwright": {
      "type": "local",
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {},
      "tools": ["*"]
    },
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "YOUR-API-KEY"
      },
      "tools": ["*"]
    }
  }
}
```

For more information on MCP server configuration, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp#writing-a-json-configuration-for-mcp-servers).

### Adding per-repository MCP servers

You can configure MCP servers for a specific project by adding a JSON file to the repository. This is useful when you want servers to be available only when working in that project, or when you want to share an MCP setup with collaborators by committing it to the repository.

{% data variables.copilot.copilot_cli_short %} reads project-level configuration from two locations:

| Path | Recommended use |
|------|-----------------|
| `.mcp.json` at the project root | Local or per-checkout configuration |
| `.github/mcp.json` | Shared configuration that is committed to the repository |

When you start {% data variables.copilot.copilot_cli_short %} inside a Git repository, the CLI walks from your current working directory up to the repository root, loading every `.mcp.json` it finds along the way. When server names conflict, definitions in files closer to your working directory take precedence. Project-level definitions also take precedence over those in `~/.copilot/mcp-config.json`. For more information on relative trust, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#mcp-server-trust-levels).

The file format is the same as `~/.copilot/mcp-config.json`. For example:

```json copy
{
  "mcpServers": {
    "playwright": {
      "type": "local",
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

> [!NOTE]
> * Project-level MCP servers are loaded only after you confirm folder trust on first launch. They are silently skipped in untrusted directories. For more information on folder trust, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli#trusted-directories).
> * In prompt mode (`copilot -p`), project-level MCP servers are not loaded by default. To enable them, set the `GITHUB_COPILOT_PROMPT_MODE_WORKSPACE_MCP` environment variable to `true`. For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#environment-variables).
> * VS Code's `.vscode/mcp.json` is not read by {% data variables.copilot.copilot_cli_short %}. It uses a different top-level key (`servers` rather than `mcpServers`). To migrate an existing `.vscode/mcp.json` to a format the CLI accepts, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#migrating-from-vscodemcpjson).

## Managing MCP servers

You can manage your configured MCP servers using the following `/mcp` commands in {% data variables.copilot.copilot_cli_short %}.

* **List configured MCP servers:** Use the command `/mcp show`. This displays all configured MCP servers and their current status.

* **View details about a specific server:** Use the command `/mcp show SERVER-NAME`. This displays the status of the specified server and the list of tools it provides.

* **Edit a server's configuration:** Use the command `/mcp edit SERVER-NAME`.

* **Delete a server:** Use the command `/mcp delete SERVER-NAME`.

* **Disable a server:** Use the command `/mcp disable SERVER-NAME`. A disabled server remains configured but is not used by {% data variables.product.prodname_copilot_short %} for the current session.

* **Enable a previously disabled server:** Use the command `/mcp enable SERVER-NAME`.

## Using MCP servers

Once you have added an MCP server, {% data variables.product.prodname_copilot_short %} can automatically use the tools it provides when relevant to your prompt. You can also directly reference an MCP server and specific tools in a prompt to ensure they are used.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-mcp)
* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp)
