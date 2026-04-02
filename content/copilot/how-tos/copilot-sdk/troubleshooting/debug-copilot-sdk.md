---
title: Debugging Copilot SDK
shortTitle: Debug Copilot SDK
intro: Enable debug logging and resolve common connection, authentication, and tool execution issues in {% data variables.copilot.copilot_sdk_short %}.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

> [!NOTE]
> {% data reusables.copilot.copilot-sdk.technical-preview-note %}

## Enable debug logging

To begin troubleshooting, enable verbose logging to gain visibility into the underlying processes.

```typescript copy
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
  logLevel: "debug",  // Options: "none", "error", "warning", "info", "debug", "all"
});
```

For examples in Python, Go, and .NET, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

### Log directory

The CLI writes logs to the ABC directory by default. You can specify a different location using the `--log-dir` argument:

```typescript copy
const client = new CopilotClient({
  cliArgs: ["--log-dir", "/path/to/logs"],
});
```

For Python and Go, which do not currently support passing extra CLI arguments, run the CLI manually with `--log-dir` and connect via the `cliUrl` option. For more information, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

## Common issues

### "CLI not found" or "copilot: command not found"

**Cause:** {% data variables.copilot.copilot_cli %} is not installed or not in PATH.

**Solution:**

1. Install the CLI. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/install-copilot-cli).

1. Verify installation:

   ```bash copy
   copilot --version
   ```

1. Or specify the full path:

   ```typescript copy
   const client = new CopilotClient({
     cliPath: "/usr/local/bin/copilot",
   });
   ```

   For examples in Python, Go, and .NET, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

### "Not authenticated"

**Cause:** The CLI is not authenticated with {% data variables.product.github %}.

**Solution:**

1. Authenticate the CLI:

   ```bash copy
   copilot auth login
   ```

1. Or provide a token programmatically:

   ```typescript copy
   const client = new CopilotClient({
     githubToken: process.env.GITHUB_TOKEN,
   });
   ```

   For examples in Python, Go, and .NET, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

### "Session not found"

**Cause:** Attempting to use a session that was destroyed or doesn't exist.

**Solution:**

1. Ensure you're not calling methods after `disconnect()`:

   ```typescript copy
   await session.disconnect();
   // Don't use session after this!
   ```

1. For resuming sessions, verify the session ID exists:

   ```typescript copy
   const sessions = await client.listSessions();
   console.log("Available sessions:", sessions);
   ```

### "Connection refused" or "ECONNREFUSED"

**Cause:** The CLI server process crashed or failed to start.

**Solution:**

1. Check if the CLI runs correctly standalone:

   ```bash copy
   copilot --server --stdio
   ```

1. Check for port conflicts if using TCP mode:

   ```typescript copy
   const client = new CopilotClient({
     useStdio: false,
     port: 0,  // Use random available port
   });
   ```

## MCP server debugging

MCP (Model Context Protocol) servers can be tricky to debug. For comprehensive MCP debugging guidance, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debug-mcp-servers).

### Quick MCP checklist

* [ ] MCP server executable exists and runs independently
* [ ] Command path is correct (use absolute paths)
* [ ] Tools are enabled: `tools: ["*"]`
* [ ] Server responds to `initialize` request correctly
* [ ] Working directory (`cwd`) is set if needed

### Test your MCP server

Before integrating with the SDK, verify your MCP server works:

```bash copy
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | /path/to/your/mcp-server
```

For detailed troubleshooting, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debug-mcp-servers).

## Connection issues

### Stdio vs TCP mode

The SDK supports two transport modes:

| Mode | Description | Use case |
|------|-------------|----------|
| **Stdio** (default) | CLI runs as subprocess, communicates via pipes | Local development, single process |
| **TCP** | CLI runs separately, communicates via TCP socket | Multiple clients, remote CLI |

**Stdio mode (default):**

```typescript copy
const client = new CopilotClient({
  useStdio: true,  // This is the default
});
```

**TCP mode:**

```typescript copy
const client = new CopilotClient({
  useStdio: false,
  port: 8080,  // Or 0 for random port
});
```

**Connect to existing server:**

```typescript copy
const client = new CopilotClient({
  cliUrl: "localhost:8080",  // Connect to running server
});
```

### Diagnosing connection failures

1. Check client state:

   ```typescript copy
   console.log("Connection state:", client.getState());
   // Should be "connected" after start()
   ```

1. Listen for state changes:

   ```typescript copy
   client.on("stateChange", (state) => {
     console.log("State changed to:", state);
   });
   ```

1. Verify the CLI process is running:

   ```bash copy
   # Check for copilot processes
   ps aux | grep copilot
   ```

## Tool execution issues

### Custom tool not being called

1. Verify tool registration:

   ```typescript copy
   const session = await client.createSession({
     tools: [myTool],
   });

   // Check registered tools
   console.log("Registered tools:", session.getTools?.());
   ```

1. Check the tool schema is valid JSON Schema:

   ```typescript copy
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

1. Ensure the handler returns a valid result:

   ```typescript copy
   handler: async (args) => {
     // Must return something JSON-serializable
     return { success: true, data: "result" };

     // Don't return undefined or non-serializable objects
   }
   ```

### Tool errors not surfacing

Subscribe to error events:

```typescript copy
session.on("tool.execution_error", (event) => {
  console.error("Tool error:", event.data);
});

session.on("error", (event) => {
  console.error("Session error:", event.data);
});
```

## Platform-specific issues

### Windows

1. **Path separators:** Use raw strings or forward slashes. For .NET-specific examples, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

1. **Console encoding:** Ensure UTF-8 for proper JSON handling. For .NET-specific examples, see [Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/debugging.md) in the `github/copilot-sdk` repository.

### macOS

1. **Gatekeeper issues:** If CLI is blocked:

   ```bash copy
   xattr -d com.apple.quarantine /path/to/copilot
   ```

1. **PATH issues in GUI apps:** GUI applications may not inherit shell PATH:

   ```typescript copy
   const client = new CopilotClient({
     cliPath: "/opt/homebrew/bin/copilot",  // Full path
   });
   ```

### Linux

1. **Permission issues:**

   ```bash copy
   chmod +x /path/to/copilot
   ```

1. **Missing libraries:** Check for required shared libraries:

   ```bash copy
   ldd /path/to/copilot
   ```

## Getting help

If you're still stuck, collect the following debug information before opening an issue:

* SDK version
* CLI version (`copilot --version`)
* Operating system
* Debug logs
* Minimal reproduction code

Search for existing issues or open a new issue in the [github/copilot-sdk](https://github.com/github/copilot-sdk/issues) repository.
