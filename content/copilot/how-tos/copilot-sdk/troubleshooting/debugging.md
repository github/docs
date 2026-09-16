---
title: Debugging guide
shortTitle: Debugging
intro: >-
  This guide covers common issues and debugging techniques for the Copilot SDK
  across all supported languages.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/troubleshooting/debug-copilot-sdk
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Table of contents

* [Enable Debug Logging](#enable-debug-logging)
* [Common Issues](#common-issues)
* [MCP Server Debugging](#mcp-server-debugging)
* [Connection Issues](#connection-issues)
* [Tool Execution Issues](#tool-execution-issues)
* [Platform-Specific Issues](#platform-specific-issues)

## Enable debug logging

The first step in debugging is enabling verbose logging to see what's happening under the hood.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
  logLevel: "debug",  // Options: "none", "error", "warning", "info", "debug", "all"
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

client = CopilotClient(log_level="debug")
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
	client := copilot.NewClient(&copilot.ClientOptions{
		LogLevel: "debug",
	})
	_ = client
}
```

```golang
import copilot "github.com/github/copilot-sdk/go"

client := copilot.NewClient(&copilot.ClientOptions{
    LogLevel: "debug",
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
using Microsoft.Extensions.Logging;

// Using ILogger
var loggerFactory = LoggerFactory.Create(builder =>
{
    builder.SetMinimumLevel(LogLevel.Debug);
    builder.AddConsole();
});

var client = new CopilotClient(new CopilotClientOptions
{
    LogLevel = "debug",
    Logger = loggerFactory.CreateLogger<CopilotClient>()
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(new CopilotClientOptions()
    .setLogLevel("debug")
);
```

{% endcodetab %}
{% endcodetabs %}

### Log directory

The CLI writes logs to a directory. You can specify a custom location:

{% codetabs %}
{% codetab typescript %}

```typescript
const client = new CopilotClient({
  cliArgs: ["--log-dir", "/path/to/logs"],
});
```

{% endcodetab %}
{% codetab python %}

```python
# The Python SDK does not currently support passing extra CLI arguments.
# Logs are written to the default location or can be configured via
# the CLI when running in server mode.
```

> [!NOTE]
> Python SDK logging configuration is limited. For advanced logging, run the CLI manually with `--log-dir` and connect via `RuntimeConnection.for_uri(...)`.

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
	client := copilot.NewClient(&copilot.ClientOptions{
		Connection: copilot.StdioConnection{
			Args: []string{"--log-dir", "/path/to/logs"},
		},
	})
	_ = client
}
```

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    Connection: copilot.StdioConnection{
        Args: []string{"--log-dir", "/path/to/logs"},
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForStdio(args: new[] { "--log-dir", "/path/to/logs" })
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
// The Java SDK does not currently support passing extra CLI arguments.
// For custom log directories, run the CLI manually with --log-dir
// and connect via cliUrl.
```

{% endcodetab %}
{% endcodetabs %}

## Common issues

### "CLI not found" / "Copilot: command not found"

**Cause:** The Copilot CLI is not installed or not in PATH.

**Solution:**

1. Install the CLI: [Installation guide](/copilot/how-tos/set-up/install-copilot-cli)

1. Verify installation:

   ```bash
   copilot --version
   ```

1. Or specify the full path:

{% codetabs %}
{% codetab javascript %}

   ```typescript
   const client = new CopilotClient({
     cliPath: "/usr/local/bin/copilot",
   });
   ```

{% endcodetab %}
{% codetab python %}

   ```python
   client = CopilotClient({"cli_path": "/usr/local/bin/copilot"})
   ```

{% endcodetab %}
{% codetab go %}

   ```golang
   client := copilot.NewClient(&copilot.ClientOptions{
       Connection: copilot.StdioConnection{Path: "/usr/local/bin/copilot"},
   })
   ```

{% endcodetab %}
{% codetab dotnet %}

   ```csharp
   var client = new CopilotClient(new CopilotClientOptions
   {
       CliPath = "/usr/local/bin/copilot"
   });
   ```

{% endcodetab %}
{% codetab java %}

   ```java
   var client = new CopilotClient(new CopilotClientOptions()
       .setCliPath("/usr/local/bin/copilot")
   );
   ```

{% endcodetab %}
{% endcodetabs %}

### "Not authenticated"

**Cause:** The CLI is not authenticated with GitHub.

**Solution:**

1. Authenticate the CLI:

   ```bash
   copilot auth login
   ```

1. Or provide a token programmatically:

{% codetabs %}
{% codetab javascript %}

   ```typescript
   const client = new CopilotClient({
     gitHubToken: process.env.GITHUB_TOKEN,
   });
   ```

{% endcodetab %}
{% codetab python %}

   ```python
   import os
   client = CopilotClient({"github_token": os.environ.get("GITHUB_TOKEN")})
   ```

{% endcodetab %}
{% codetab go %}

   ```golang
   client := copilot.NewClient(&copilot.ClientOptions{
       GitHubToken: os.Getenv("GITHUB_TOKEN"),
   })
   ```

{% endcodetab %}
{% codetab dotnet %}

   ```csharp
   var client = new CopilotClient(new CopilotClientOptions
   {
       GitHubToken = Environment.GetEnvironmentVariable("GITHUB_TOKEN")
   });
   ```

{% endcodetab %}
{% codetab java %}

   ```java
   var client = new CopilotClient(new CopilotClientOptions()
       .setGitHubToken(System.getenv("GITHUB_TOKEN"))
   );
   ```

{% endcodetab %}
{% endcodetabs %}

### "Session not found"

**Cause:** Attempting to use a session that was destroyed or doesn't exist.

**Solution:**

1. Ensure you're not calling methods after `disconnect()`:

   ```typescript
   await session.disconnect();
   // Don't use session after this!
   ```

1. For resuming sessions, verify the session ID exists:

   ```typescript
   const sessions = await client.listSessions();
   console.log("Available sessions:", sessions);
   ```

### "Connection refused" / "ECONNREFUSED"

**Cause:** The CLI server process crashed or failed to start.

**Solution:**

1. Check if the CLI runs correctly standalone:

   ```bash
   copilot --server --stdio
   ```

1. Check for port conflicts if using TCP mode:

   ```typescript
   const client = new CopilotClient({
     useStdio: false,
     port: 0,  // Use random available port
   });
   ```

## MCP server debugging

MCP (Model Context Protocol) servers can be tricky to debug. For comprehensive MCP debugging guidance, see the dedicated **[AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging)**.

### Quick MCP checklist

* [ ] MCP server executable exists and runs independently
* [ ] Command path is correct (use absolute paths)
* [ ] Tools are enabled: `tools: ["*"]`
* [ ] Server responds to `initialize` request correctly
* [ ] Working directory (`cwd`) is set if needed

### Test your MCP server

Before integrating with the SDK, verify your MCP server works:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | /path/to/your/mcp-server
```

See [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging) for detailed troubleshooting.

## Connection issues

### stdio vs TCP mode

The SDK supports two transport modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| **Stdio** (default) | CLI runs as subprocess, communicates via pipes | Local development, single process |
| **TCP** | CLI runs separately, communicates via TCP socket | Multiple clients, remote CLI |

**Stdio mode (default):**

```typescript
const client = new CopilotClient({
  useStdio: true,  // This is the default
});
```

**TCP mode:**

```typescript
const client = new CopilotClient({
  useStdio: false,
  port: 8080,  // Or 0 for random port
});
```

**Connect to existing server:**

```typescript
const client = new CopilotClient({
  cliUrl: "localhost:8080",  // Connect to running server
});
```

### Diagnosing connection failures

1. **Check client state:**

   ```typescript
   console.log("Connection state:", client.getState());
   // Should be "connected" after start()
   ```

1. **Listen for state changes:**

   ```typescript
   client.on("stateChange", (state) => {
     console.log("State changed to:", state);
   });
   ```

1. **Verify CLI process is running:**

   ```bash
   # Check for copilot processes
   ps aux | grep copilot
   ```

## Tool execution issues

### Custom tool not being called

1. **Verify tool registration:**

   ```typescript
   const session = await client.createSession({
     tools: [myTool],
   });
   
   // Check registered tools
   console.log("Registered tools:", session.getTools?.());
   ```

1. **Check tool schema is valid JSON Schema:**

   ```typescript
   const myTool = {
     name: "get_weather",
     description: "Get weather for a location",
     parameters: {
       type: "object",
       properties: {
         location: { type: "string", description: "City name" },
       },
       required: ["location"],
     },
     handler: async (args) => {
       return { temperature: 72 };
     },
   };
   ```

1. **Ensure handler returns valid result:**

   ```typescript
   handler: async (args) => {
     // Must return something JSON-serializable
     return { success: true, data: "result" };
     
     // Don't return undefined or non-serializable objects
   }
   ```

### Tool errors not surfacing

Subscribe to error events:

```typescript
session.on("tool.execution_error", (event) => {
  console.error("Tool error:", event.data);
});

session.on("error", (event) => {
  console.error("Session error:", event.data);
});
```

## Platform-specific issues

### Windows

1. **Path separators:** Use raw strings or forward slashes:

   ```csharp
   CliPath = @"C:\Program Files\GitHub\copilot.exe"
   // or
   CliPath = "C:/Program Files/GitHub/copilot.exe"
   ```

1. **PATHEXT resolution:** The SDK handles this automatically, but if issues persist:

   ```csharp
   // Explicitly specify .exe
   Command = "myserver.exe"  // Not just "myserver"
   ```

1. **Console encoding:** Ensure UTF-8 for proper JSON handling:

   ```csharp
   Console.OutputEncoding = System.Text.Encoding.UTF8;
   ```

### macOS

1. **Gatekeeper issues:** If CLI is blocked:

   ```bash
   xattr -d com.apple.quarantine /path/to/copilot
   ```

1. **PATH issues in GUI apps:** GUI applications may not inherit shell PATH:

   ```typescript
   const client = new CopilotClient({
     cliPath: "/opt/homebrew/bin/copilot",  // Full path
   });
   ```

### Linux

1. **Permission issues:**

   ```bash
   chmod +x /path/to/copilot
   ```

1. **Missing libraries:** Check for required shared libraries:

   ```bash
   ldd /path/to/copilot
   ```

## Getting help

If you're still stuck:

1. **Collect debug information:**
   * SDK version
   * CLI version (`copilot --version`)
   * Operating system
   * Debug logs
   * Minimal reproduction code

1. **Search existing issues:** [GitHub Issues](https://github.com/github/copilot-sdk/issues)

1. **Open a new issue** with the collected information

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp) - MCP configuration and setup
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging) - Detailed MCP troubleshooting
* [API Reference](https://github.com/github/copilot-sdk)
