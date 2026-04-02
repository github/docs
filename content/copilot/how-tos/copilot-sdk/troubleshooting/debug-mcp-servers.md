---
title: Debugging MCP servers in Copilot SDK
shortTitle: Debug MCP servers
intro: Diagnose and fix issues with MCP servers integrated with {% data variables.copilot.copilot_sdk_short %}, including server startup failures, tool discovery problems, and protocol errors.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

> [!NOTE]
> {% data reusables.copilot.copilot-sdk.technical-preview-note %}

## Quick diagnostics

### Checklist

Before diving deep, verify these basics:

* [ ] MCP server executable exists and is runnable
* [ ] Command path is correct (use absolute paths when in doubt)
* [ ] Tools are enabled (`tools: ["*"]` or specific tool names)
* [ ] Server implements MCP protocol correctly (responds to `initialize`)
* [ ] No firewall or antivirus is blocking the process (Windows)

### Enable MCP debug logging

Add environment variables to your MCP server config:

```typescript copy
mcpServers: {
  "my-server": {
    type: "local",
    command: "/path/to/server",
    args: [],
    env: {
      MCP_DEBUG: "1",
      DEBUG: "*",
      NODE_DEBUG: "mcp",  // For Node.js MCP servers
    },
  },
}
```

## Testing MCP servers independently

Always test your MCP server outside the SDK first.

### Manual protocol test

Send an `initialize` request via stdin:

```bash copy
# Unix/macOS
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | /path/to/your/mcp-server
```

**Expected response:**

```json
{"jsonrpc":"2.0","id":1,"result":{"protocolVersion":"2024-11-05","capabilities":{"tools":{}},"serverInfo":{"name":"your-server","version":"1.0"}}}
```

For a Windows PowerShell example, see [MCP Server Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/mcp-debugging.md) in the `github/copilot-sdk` repository.

### Test tool listing

After initialization, request the tools list:

```bash copy
echo '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}' | /path/to/your/mcp-server
```

**Expected response:**

```json
{"jsonrpc":"2.0","id":2,"result":{"tools":[{"name":"my_tool","description":"Does something","inputSchema":{...}}]}}
```

### Interactive testing script

Create a test script to interactively debug your MCP server:

```bash copy
#!/bin/bash
# test-mcp.sh

SERVER="$1"

# Initialize
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}'

# Send initialized notification
echo '{"jsonrpc":"2.0","method":"notifications/initialized"}'

# List tools
echo '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'

# Keep stdin open
cat
```

Usage:

```bash copy
./test-mcp.sh | /path/to/mcp-server
```

## Common issues

### Server not starting

**Symptoms:** No tools appear, no errors in logs.

| Cause | Solution |
|-------|----------|
| Wrong command path | Use absolute path: `/usr/local/bin/server` |
| Missing executable permission | Run `chmod +x /path/to/server` |
| Missing dependencies | Check with `ldd` (Linux) or run manually |
| Working directory issues | Set `cwd` in config |

Debug by running manually:

```bash copy
# Run exactly what the SDK would run
cd /expected/working/dir
/path/to/command arg1 arg2
```

### Server starts but tools don't appear

**Symptoms:** Server process runs but no tools are available.

1. **Tools not enabled in config:**

   ```typescript copy
   mcpServers: {
     "server": {
       // ...
       tools: ["*"],  // Must be "*" or list of tool names
     },
   }
   ```

1. **Server doesn't expose tools:** Test with a `tools/list` request manually. Check that the server implements the `tools/list` method.

1. **Initialization handshake fails:** The server must respond to `initialize` correctly and handle `notifications/initialized`.

### Tools listed but never called

**Symptoms:** Tools appear in debug logs but the model doesn't use them.

1. **Prompt doesn't clearly need the tool:**

   ```typescript copy
   // Too vague
   await session.sendAndWait({ prompt: "What's the weather?" });

   // Better—explicitly mentions capability
   await session.sendAndWait({
     prompt: "Use the weather tool to get the current temperature in Seattle"
   });
   ```

1. **Tool description unclear:**

   ```typescript copy
   // Bad—model doesn't know when to use it
   { name: "do_thing", description: "Does a thing" }

   // Good—clear purpose
   { name: "get_weather", description: "Get current weather conditions for a city. Returns temperature, humidity, and conditions." }
   ```

1. **Tool schema issues:** Ensure `inputSchema` is valid JSON Schema. Required fields must be listed in the `required` array.

### Timeout errors

**Symptoms:** `MCP tool call timed out` errors.

1. Increase the timeout:

   ```typescript copy
   mcpServers: {
     "slow-server": {
       // ...
       timeout: 300000,  // 5 minutes
     },
   }
   ```

1. Optimize server performance by adding progress logging to identify the bottleneck, considering async operations, and checking for blocking I/O.

1. For long-running tools, consider streaming responses if supported.

### JSON-RPC errors

**Symptoms:** Parse errors, invalid request errors.

Common causes:

1. **Server writes to stdout incorrectly:** Debug output going to stdout instead of stderr, or extra newlines or whitespace:

   ```typescript copy
   // Wrong—pollutes stdout
   console.log("Debug info");

   // Correct—use stderr for debug
   console.error("Debug info");
   ```

1. **Encoding issues:** Ensure UTF-8 encoding with no BOM (Byte Order Mark).

1. **Message framing:** Each message must be a complete JSON object, newline-delimited (one message per line).

## Platform-specific issues

### Windows

On Windows, antivirus or firewall software may block new executables or processes communicating via stdin/stdout. Add exclusions for your MCP server executable if needed.

For Windows-specific configuration examples for .NET console apps and NPX commands, see [MCP Server Debugging Guide](https://github.com/github/copilot-sdk/blob/main/docs/troubleshooting/mcp-debugging.md) in the `github/copilot-sdk` repository.

**Path issues:**

* Use raw strings (`@"C:\path"`) or forward slashes (`"C:/path"`).
* Avoid spaces in paths when possible.
* If spaces are required, ensure proper quoting.

### macOS

1. **Gatekeeper blocking:** If the server is blocked:

   ```bash copy
   xattr -d com.apple.quarantine /path/to/mcp-server
   ```

1. **Homebrew paths:** GUI apps may not have `/opt/homebrew` in PATH. Use the full path:

   ```typescript copy
   mcpServers: {
     "my-server": {
       command: "/opt/homebrew/bin/node",  // Full path
       args: ["/path/to/server.js"],
     },
   }
   ```

### Linux

1. **Permission issues:**

   ```bash copy
   chmod +x /path/to/mcp-server
   ```

1. **Missing shared libraries:**

   ```bash copy
   # Check dependencies
   ldd /path/to/mcp-server

   # Install missing libraries
   apt install libfoo  # Debian/Ubuntu
   yum install libfoo  # RHEL/CentOS
   ```

## Advanced debugging

### Capture all MCP traffic

Create a wrapper script to log all communication:

```bash copy
#!/bin/bash
# mcp-debug-wrapper.sh

LOG="/tmp/mcp-debug-$(date +%s).log"
ACTUAL_SERVER="$1"
shift

echo "=== MCP Debug Session ===" >> "$LOG"
echo "Server: $ACTUAL_SERVER" >> "$LOG"
echo "Args: $@" >> "$LOG"
echo "=========================" >> "$LOG"

# Tee stdin/stdout to log file
tee -a "$LOG" | "$ACTUAL_SERVER" "$@" 2>> "$LOG" | tee -a "$LOG"
```

Use it:

```typescript copy
mcpServers: {
  "debug-server": {
    command: "/path/to/mcp-debug-wrapper.sh",
    args: ["/actual/server/path", "arg1", "arg2"],
  },
}
```

### Inspect with MCP Inspector

Use the official MCP Inspector tool:

```bash copy
npx @modelcontextprotocol/inspector /path/to/your/mcp-server
```

This provides a web UI to send test requests, view responses, and inspect tool schemas.

### Protocol version mismatches

Check your server supports the protocol version the SDK uses:

```json
// In initialize response, check protocolVersion
{"result":{"protocolVersion":"2024-11-05",...}}
```

If versions don't match, update your MCP server library.

## Debugging checklist

When opening an issue or asking for help on [GitHub Issues](https://github.com/github/copilot-sdk/issues), collect:

* [ ] SDK language and version
* [ ] CLI version (`copilot --version`)
* [ ] MCP server type (Node.js, Python, .NET, Go, and so on)
* [ ] Full MCP server configuration (redact secrets)
* [ ] Result of manual `initialize` test
* [ ] Result of manual `tools/list` test
* [ ] Debug logs from SDK
* [ ] Any error messages
