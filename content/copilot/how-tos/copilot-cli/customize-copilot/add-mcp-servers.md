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

You can add MCP servers in the following ways:
* [Using the `/mcp add` command](#using-the-mcp-add-command)
* [Using the `copilot mcp add` subcommand](#using-the-copilot-mcp-add-subcommand)
* [Editing the configuration file](#editing-the-configuration-file)
* [Searching and installing from the registry (experimental)](#searching-and-installing-from-the-registry)

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

### Using the `copilot mcp add` subcommand

You can add MCP servers from the terminal using the `copilot mcp add` subcommand, without entering interactive mode. The server is added to the user configuration at `~/.copilot/mcp-config.json`.

For local (stdio) servers, provide the command after `--`:

```shell copy
copilot mcp add SERVER-NAME -- COMMAND [ARGS...]
```

For remote (HTTP/SSE) servers, specify the transport and provide the URL:

```shell copy
copilot mcp add --transport http SERVER-NAME URL
```

You can also pass additional options:

* `--env KEY=VALUE`: Set environment variables for the server. Repeat for multiple variables.
* `--header "HEADER: VALUE"`: Set HTTP headers for remote servers. Repeat for multiple headers.
* `--transport TRANSPORT`: Set the transport type (`stdio`, `http`, or `sse`). The default is `stdio`.
* `--tools TOOLS`: Specify which tools to enable. Use `*` for all tools (default), a comma-separated list, or `""` for none.
* `--timeout MS`: Set a timeout in milliseconds.

#### Examples

Add a local stdio server:

```shell copy
copilot mcp add context7 -- npx -y @upstash/context7-mcp
```

Add a local server with environment variables:

```shell copy
copilot mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_GITHUB_PAT -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server
```

Add a remote HTTP server:

```shell copy
copilot mcp add --transport http notion \
  https://mcp.notion.com/mcp
```

Add a remote server with an authorization header:

```shell copy
copilot mcp add --transport http \
  --header "Authorization: Bearer YOUR-TOKEN" \
  stripe https://mcp.stripe.com
```

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

### Searching and installing from the registry

> [!NOTE]
> The `/mcp search` command is currently an experimental feature. To use it, start {% data variables.copilot.copilot_cli_short %} with the `--experimental` command line option, or enter `/experimental on` during a session.

You can discover and install MCP servers directly from the [{% data variables.product.github %} MCP Registry](https://github.com/mcp) using the `/mcp search` command in interactive mode. This lets you browse available servers, view their details, and install them without manually filling out the configuration form.

If your organization has configured a custom MCP registry URL, `/mcp search` connects to that registry instead of the default {% data variables.product.github %} registry.

1. In interactive mode, enter `/mcp search` to browse top servers by stars, or `/mcp search QUERY` to search for a specific server. For example:

   ```text
   /mcp search context7
   ```

1. A keyboard-navigable list of matching servers is displayed. Use the arrow keys to browse the results.
1. Select a server to open its configuration form. The form is pre-populated with the server's configuration from the registry. Fill in any required fields, such as API keys or tokens.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save. The server is added to your `mcp-config.json` and started immediately.


## Managing MCP servers

You can manage your configured MCP servers using the `/mcp` commands in interactive mode or the `copilot mcp` subcommands from the terminal.

### Using `/mcp` commands in interactive mode

* **List configured MCP servers:** Use the command `/mcp show`. This displays all configured MCP servers and their current status.

* **View details about a specific server:** Use the command `/mcp show SERVER-NAME`. This displays the status of the specified server and the list of tools it provides.

* **Edit a server's configuration:** Use the command `/mcp edit SERVER-NAME`.

* **Delete a server:** Use the command `/mcp delete SERVER-NAME`.

* **Disable a server:** Use the command `/mcp disable SERVER-NAME`. A disabled server remains configured but is not used by {% data variables.product.prodname_copilot_short %} for the current session.

* **Enable a previously disabled server:** Use the command `/mcp enable SERVER-NAME`.

### Using `copilot mcp` subcommands from the terminal

You can also manage MCP servers from the terminal without entering interactive mode.

* **List all configured servers:**

  ```shell copy
  copilot mcp list
  ```

  Lists servers from all configuration sources (user, workspace, and plugin). Add `--json` for JSON output.

* **View server details:**

  ```shell copy
  copilot mcp get SERVER-NAME
  ```

  Shows a server's type, status, and available tools. Add `--json` for JSON output.

* **Remove a server:**

  ```shell copy
  copilot mcp remove SERVER-NAME
  ```

  Removes the server from the user configuration.

## Using MCP servers

Once you have added an MCP server, {% data variables.product.prodname_copilot_short %} can automatically use the tools it provides when relevant to your prompt. You can also directly reference an MCP server and specific tools in a prompt to ensure they are used.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-mcp)
* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp)
