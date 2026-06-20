---
title: Using MCP servers with the GitHub Copilot SDK
shortTitle: MCP
intro: >-
  The Copilot SDK can integrate with **MCP servers** (Model Context Protocol) to
  extend the assistant's capabilities with external tools. MCP servers run as
  separate processes and expose tools (functions) that Copilot can invoke during
  conversations.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-copilot-sdk/mcp-servers
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

> [!NOTE]
> This is an evolving feature. See [issue #36](https://github.com/github/copilot-sdk/issues/36) for ongoing discussion.

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open standard for connecting AI assistants to external tools and data sources. MCP servers can:

* Execute code or scripts
* Query databases
* Access file systems
* Call external APIs
* And much more

## Server types

The SDK supports two types of MCP servers:

| Type | Description | Use Case |
|------|-------------|----------|
| **Local/Stdio** | Runs as a subprocess, communicates via stdin/stdout | Local tools, file access, custom scripts |
| **HTTP/SSE** | Remote server accessed via HTTP | Shared services, cloud-hosted tools |

## Configuration

### Node.js / TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-5",
    mcpServers: {
        // Local MCP server (stdio)
        "my-local-server": {
            type: "local",
            command: "node",
            args: ["./mcp-server.js"],
            env: { DEBUG: "true" },
            cwd: "./servers",
            tools: ["*"],  // "*" = all tools, [] = none, or list specific tools
            timeout: 30000,
        },
        // Remote MCP server (HTTP)
        "github": {
            type: "http",
            url: "https://api.githubcopilot.com/mcp/",
            headers: { "Authorization": "Bearer ${TOKEN}" },
            tools: ["*"],
        },
    },
});
```

### Python

```python
import asyncio
from copilot import CopilotClient
from copilot.session import PermissionHandler

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-5", mcp_servers={
        # Local MCP server (stdio)
        "my-local-server": {
            "type": "local",
            "command": "python",
            "args": ["./mcp_server.py"],
            "env": {"DEBUG": "true"},
            "cwd": "./servers",
            "tools": ["*"],
            "timeout": 30000,
        },
        # Remote MCP server (HTTP)
        "github": {
            "type": "http",
            "url": "https://api.githubcopilot.com/mcp/",
            "headers": {"Authorization": "Bearer ${TOKEN}"},
            "tools": ["*"],
        },
    })

    response = await session.send_and_wait("List my recent GitHub notifications")
    print(response.data.content)

    await client.stop()

asyncio.run(main())
```

### Go

```golang
package main

import (
    "context"
    "log"
    copilot "github.com/github/copilot-sdk/go"
)

func main() {
    ctx := context.Background()
    client := copilot.NewClient(nil)
    if err := client.Start(ctx); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()

    session, err := client.CreateSession(ctx, &copilot.SessionConfig{
        Model: "gpt-5",
        MCPServers: map[string]copilot.MCPServerConfig{
            "my-local-server": copilot.MCPStdioServerConfig{
                Command: "node",
                Args:    []string{"./mcp-server.js"},
                Tools:   &[]string{"*"},
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    defer session.Disconnect()

    // Use the session...
}
```

### .NET

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-5",
    McpServers = new Dictionary<string, McpServerConfig>
    {
        ["my-local-server"] = new McpStdioServerConfig
        {
            Command = "node",
            Args = new List<string> { "./mcp-server.js" },
            Tools = new List<string> { "*" },
        },
    },
});
```

## Tool configuration

You can control which tools are available to an MCP server using the `tools` field.

### Allow all tools

Use `"*"` to enable all tools provided by the MCP server:

```typescript
tools: ["*"]
```

### Allow specific tools

Provide a list of tool names to restrict access:

```typescript
tools: ["bash", "edit"]
```

Only the listed tools will be available to the agent.

### Disable all tools

Use an empty array to disable all tools:

```typescript
tools: []
```

### Notes

* The `tools` field defines which tools are allowed.
* There is no separate `allow` or `disallow` configuration—tool access is controlled directly through this list.

## Quick start: filesystem MCP server

Here's a complete working example using the official [`@modelcontextprotocol/server-filesystem`](https://www.npmjs.com/package/@modelcontextprotocol/server-filesystem) MCP server:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

async function main() {
    const client = new CopilotClient();

    // Create session with filesystem MCP server
    const session = await client.createSession({
        mcpServers: {
            filesystem: {
                type: "local",
                command: "npx",
                args: ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
                tools: ["*"],
            },
        },
    });

    console.log("Session created:", session.sessionId);

    // The model can now use filesystem tools
    const result = await session.sendAndWait({
        prompt: "List the files in the allowed directory",
    });

    console.log("Response:", result?.data?.content);

    await session.disconnect();
    await client.stop();
}

main();
```

**Output:**

```text
Session created: 18b3482b-bcba-40ba-9f02-ad2ac949a59a
Response: The allowed directory is `/tmp`, which contains various files
and subdirectories including temporary system files, log files, and
directories for different applications.
```

> [!TIP]
> You can use any MCP server from the [MCP Servers Directory](https://github.com/modelcontextprotocol/servers). Popular options include `@modelcontextprotocol/server-github`, `@modelcontextprotocol/server-sqlite`, and `@modelcontextprotocol/server-puppeteer`.

## Configuration options

### Local/stdio server

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `"local"` or `"stdio"` | No | Server type (defaults to local) |
| `command` | `string` | Yes | Command to execute |
| `args` | `string[]` | Yes | Command arguments |
| `env` | `object` | No | Environment variables |
| `cwd` | `string` | No | Working directory |
| `tools` | `string[]` | No | Tools to enable (`["*"]` for all, `[]` for none) |
| `timeout` | `number` | No | Timeout in milliseconds |

### Remote server (HTTP/SSE)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `"http"` or `"sse"` | Yes | Server type |
| `url` | `string` | Yes | Server URL |
| `headers` | `object` | No | HTTP headers (e.g., for auth) |
| `tools` | `string[]` | No | Tools to enable |
| `timeout` | `number` | No | Timeout in milliseconds |

## Troubleshooting

### Tools not showing up or not being invoked

1. **Verify the MCP server starts correctly**
   * Check that the command and args are correct
   * Ensure the server process doesn't crash on startup
   * Look for error output in stderr

1. **Check tool configuration**
   * Make sure `tools` is set to `["*"]` or lists the specific tools you need
   * An empty array `[]` means no tools are enabled

1. **Verify connectivity for remote servers**
   * Ensure the URL is accessible
   * Check that authentication headers are correct

### Common issues

| Issue | Solution |
|-------|----------|
| "MCP server not found" | Verify the command path is correct and executable |
| "Connection refused" (HTTP) | Check the URL and ensure the server is running |
| "Timeout" errors | Increase the `timeout` value or check server performance |
| Tools work but aren't called | Ensure your prompt clearly requires the tool's functionality |

For detailed debugging guidance, see the **[AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging)**.

## Related resources

* [Model Context Protocol Specification](https://modelcontextprotocol.io/)
* [MCP Servers Directory](https://github.com/modelcontextprotocol/servers) - Community MCP servers
* [GitHub MCP Server](https://github.com/github/github-mcp-server) - Official GitHub MCP server
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started) - SDK basics and custom tools
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging) - SDK-wide debugging

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging) - Detailed MCP troubleshooting
* [Issue #9](https://github.com/github/copilot-sdk/issues/9) - Original MCP tools usage question
* [Issue #36](https://github.com/github/copilot-sdk/issues/36) - MCP documentation tracking issue
