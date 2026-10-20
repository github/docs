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

### Inspect configuration and lifecycle

`session.rpc.mcp.listConfigured()` is a parameterless, passive inventory read.
It does not start or restart servers, authenticate, apply sandbox policy, or
wait for server startup. Configuration discovery and policy filtering determine
which servers appear and their `enabled` values.

This experimental RPC requires an aligned SDK/runtime release. Its earlier
prerelease response allowed `live` to be omitted; SDKs using the required
lifecycle contract do not support that older response shape. When supplying
an external runtime, update it alongside the SDK. The overall protocol version
is unchanged and does not identify this experimental contract revision.

Every entry includes `live.status`. A configured server with no materialized
runtime server reports the existing `not_configured` status, even when
`enabled` is `true`. A runtime server that was explicitly stopped reports
`stopped`. Materialized servers report their actual lifecycle, including
`pending`, `connected`, `needs-auth`, and `failed`; failures include `live.error`
when available.

Configuration and lifecycle describe different facts. If a server's URL,
authentication, or configuration source changes while an old connection remains
alive, inventory still reports that connection's actual lifecycle. A
`connected` status does not mean the latest configuration has been applied.
The runtime owns this observation; clients must not substitute cached state
based only on the server name.

Inventory retries concurrent graph replacement a bounded number of times and
returns an error if it cannot obtain a consistent snapshot. It never omits
`live` to hide a graph race.

A name-only `startServer` or `restartServer` resolves and initializes only the
requested server after a cold session resume without first calling `list`.
This includes user and plugin configurations and the built-in GitHub server
configured through `githubMcpToolConfig`. It does not start other configured
servers or override disabled state, authentication requirements, sandbox policy,
or configuration-source precedence.

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
                Tools:   []string{"*"},
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

## Disabling configured servers per session

Set `disabledMcpServers` to exact MCP server names that must not run in a session.
The setting is scoped to the individual create or resume request; it does not
modify global MCP settings or the server configuration.

```typescript
const session = await client.createSession({
    mcpServers: {
        filesystem: { type: "local", command: "npx", args: ["-y", "@modelcontextprotocol/server-filesystem", "."] },
        github: { type: "http", url: "https://api.githubcopilot.com/mcp/" },
    },
    disabledMcpServers: ["github"],
});
```

| SDK | Configuration property |
| --- | --- |
| Node.js | `disabledMcpServers` |
| Python | `disabled_mcp_servers` |
| Go | `DisabledMCPServers` |
| .NET | `DisabledMcpServers` |
| Java | `setDisabledMcpServers(...)` |
| Rust | `with_disabled_mcp_servers(...)` |

On session creation and a **cold** resume, disabled servers are not started and
the runtime does not initiate their authentication. A resident resume cannot
undo a server that the runtime has already spawned. Names are matched exactly.

## Listing and retrieving prompts

The experimental generated MCP namespace exposes the wire JSON-RPC methods
`session.mcp.prompts.list` and `session.mcp.prompts.get`. Use the language-specific
SDK accessors below to call them. These methods target one connected server in the
current session; they do not combine results from multiple servers.

| SDK | List prompts | Get a prompt |
| --- | --- | --- |
| Node.js | `session.rpc.mcp.prompts.list(...)` | `session.rpc.mcp.prompts.get(...)` |
| Python | `session.rpc.mcp.prompts.list(...)` | `session.rpc.mcp.prompts.get(...)` |
| Go | `session.RPC.MCP.Prompts().List(...)` | `session.RPC.MCP.Prompts().Get(...)` |
| .NET | `session.Rpc.Mcp.Prompts.ListAsync(...)` | `session.Rpc.Mcp.Prompts.GetAsync(...)` |
| Java | `session.getRpc().mcp.prompts.list(...)` | `session.getRpc().mcp.prompts.get(...)` |
| Rust | `session.rpc().mcp().prompts().list(...)` | `session.rpc().mcp().prompts().get(...)` |

Listing requires `serverName` and accepts an optional opaque `cursor`. Each
call returns one page of typed prompt definitions and an optional `nextCursor`.
Pass that cursor in another list call to request the next page. Definitions
include names, optional titles and descriptions, and argument definitions.
An omitted argument `required` flag remains distinct from `false`.

Getting a prompt requires `serverName` and `promptName`, with an optional
`arguments` dictionary whose values are strings. Omitting `arguments` leaves the
MCP request's arguments absent; passing `{}` sends an explicitly empty dictionary.
The runtime preserves this distinction for the server. The result contains an optional
description and ordered messages with typed roles and opaque JSON `content`.
Inspect each content block's `type` before interpreting it; content is not
flattened into text. Nested resources, annotations, metadata, unfamiliar content
types, and additional content fields retain their JSON structure. Server
extensions on typed descriptors, messages, and result envelopes are available under
`additionalProperties`. A server extension itself named `additionalProperties`
is preserved as an entry inside that map, not merged into it.
The protocol's top-level `resultType: "complete"` discriminator is consumed by
the runtime; it is not returned as an SDK field or a server extension.
Requests fail explicitly if the runtime cannot preserve the raw response,
including stdio response frames exceeding the 1 MiB capture limit.

The returned prompt messages are not automatically sent to the model or used to
execute tools or fetch referenced resources. Your application decides how to
use the result.
While generating that result, an MCP server can request sampling or elicitation
through multi round-trip continuations. These requests use the same configured
host responders as other MCP operations; prompt retrieval does not grant
additional permission or bypass the host's decision. A missing responder or
responder error fails the request, and an elicitation decline is returned to the
server unchanged. State-only continuations do not invoke either responder.

After an existing `mcp.prompts.list_changed` session event, list the named
server's prompts again to refresh your application's view.

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
| `oauthClientId` | `string` | No | Non-empty client ID for a statically configured OAuth client |
| `oauthScopes` | `string[]` | No | Non-empty array of valid RFC 6749 scope tokens. Requires `oauthClientId`; used when the server challenge omits scope or provides an empty scope, before protected-resource metadata fallback |
| `oauthPublicClient` | `boolean` | No | Whether the configured OAuth client is public and does not require a client secret |
| `oauthGrantType` | `string` | No | OAuth grant type for the configured client, such as `client_credentials` |
| `tools` | `string[]` | No | Tools to enable |
| `timeout` | `number` | No | Timeout in milliseconds |

## OAuth ownership for remote servers

Choose one OAuth ownership model for each authentication attempt:

1. **Runtime-managed loopback**: Call `session.mcp.oauth.login` without a
   redirect URI. The runtime opens a local callback listener and owns discovery,
   PKCE, state validation, token exchange, persistence, refresh, and reconnect.
1. **Runtime-managed hosted callback**: Call `session.mcp.oauth.login` with a
   trusted public HTTPS redirect URI. Your host receives the callback, but the
   runtime continues to own the OAuth protocol and credentials.
1. **Host-managed OAuth**: Use the SDK's MCP authentication request handler and
   return a host-acquired access token. Your host owns authorization and refresh.

Do not register a host-managed OAuth handler for an authentication attempt that
uses a runtime-managed hosted callback. Wait until the remote server enters the
`needs-auth` state, then call the generated `session.rpc.mcp.oauth.login` method
directly with the server name and callback URI:

```jsonc
{
    "serverName": "remote-mcp",
    "redirectUri": "https://agent.example.com/oauth/callback"
}
```

The selected static, CIMD, or dynamically registered OAuth client must advertise
that exact URI. The URI must use HTTPS and must not contain a query or fragment.
When browser interaction is required, the result contains `authorizationUrl`
and `authorizationId`. Open `authorizationUrl` in the user's browser and retain
`authorizationId` with the target session.

After the authorization server redirects to your endpoint, call the generated
`session.rpc.mcp.oauth.complete` method:

```jsonc
{
    "authorizationId": "<opaque-state>",
    "callbackUrl": "https://agent.example.com/oauth/callback?code=...&state=..."
}
```

Construct `callbackUrl` from the configured public redirect origin and path plus
the callback's original query. Do not pass an internal service URL or trust
client-supplied `Forwarded` or `X-Forwarded-*` headers. The runtime validates the
origin, port, path, state, and OAuth response before accepting delivery. Token
exchange, persistence, and MCP reconnect then continue asynchronously.

### Handing a rejected access token back to the runtime

For a host OAuth request with `reason: "refresh"` and
`runtimeRefreshSupported: true`, your handler can return
`{ "kind": "runtimeRefresh" }` instead of acquiring a replacement access token.
The runtime performs noninteractive renewal using its existing saved grant
inside the original authorization operation. It does not start a new consent
flow or call the independent `authenticationStateChanged` refresh RPC.
The replacement retains its saved-grant provenance, so later scoped stored-token
adoption remains available. A token supplied directly by a host is not marked as
a stored token and cannot be overwritten by that adoption path.

Only return this response when the pending request advertises support. A missing
capability is false and retains the legacy token/cancellation contract. If a
handler returns the handoff for a request without the capability, the SDK sends
`cancelled` instead, so the pending request does not remain open. A supplied
token takes precedence over the handoff, and a cancellation stays a cancellation.

| SDK | Capability | Handoff result |
| --- | --- | --- |
| Node.js | `request.runtimeRefreshSupported` | `{ kind: "runtimeRefresh" }` |
| Python | `request["runtimeRefreshSupported"]` | `{"kind": "runtimeRefresh"}` |
| Go | `MCPAuthRuntimeRefreshHandler` capability argument | `MCPAuthResultRuntimeRefresh()` |
| .NET | `McpAuthContext.RuntimeRefreshSupported` | `McpAuthResult.RefreshInRuntime()` |
| Java | `McpAuthHandler.handleWithRuntimeRefresh` capability argument | `McpAuthResponse.runtimeRefresh()` |
| Rust | `McpAuthHandler::handle_with_runtime_refresh` | `McpAuthResponse::RuntimeRefresh` |

Response acceptance acknowledges the handoff, not refresh, reconnect, or tool
completion. For an accepted handoff, `mcp.oauth_completed` is emitted once, when
the original authorization reservation reaches its terminal outcome. Its
`outcome` uses only the existing values: `token` when recovery succeeded, and
`cancelled` when it was cancelled or failed. The persisted
`mcp.oauth_recovery_completed` event carries the same `requestId` and
`serverName` and distinguishes the terminal outcome, including reconnect:
`succeeded`, `cancelled`, or `failed`. SDK versions that predate this event
receive it as an unknown event type.

Until the runtime accepts a `runtimeRefresh` response, existing replies keep
their earlier meaning. A host `{ kind: "cancelled" }` reply declines the
request; for a `refresh` request, the runtime can then request reauthorization.
If no host replies, the runtime falls back to its ordinary local OAuth handling,
including cached credentials, and emits no `mcp.oauth_recovery_completed` event.
This change does not reclassify a host `cancelled` reply as Stop. The original
invocation is preserved only through an accepted `runtimeRefresh` handoff.

After acceptance, the original
invocation can retry after credential installation and reconnect pass the
existing session, configuration, policy, and permission fences. Stopping the
main turn or ending the session cancels the original authorization reservation;
the stopped invocation cannot later retry or publish a result. An already-issued
rotating-grant exchange can finish persisting its replacement after cancellation,
but cannot install stale credentials, reconnect, or resume the canceled
invocation.

An unavailable saved grant or failed refresh terminates the original invocation
without requesting interactive reauthorization. A failed reconnect also
terminates the invocation; successfully obtaining a token is not a successful
tool result.

Concurrent invocations join the exact in-flight authorization attempt and receive
its terminal result. A connected server, a retained access token, or a later
successful attempt is not evidence that their attempt succeeded. Each surviving
invocation still rechecks its own catalog and tool permission before retrying;
joined failure does not start another interactive authorization.

OAuth HTTP deadlines apply to individual requests, not the complete handoff or
grant-storage settlement. Cancellation can return before an issued exchange
settles, and session disposal waits for tracked settlement workers. There is no
overall settlement deadline, so hosts must not treat cancellation, handoff
acceptance, or an HTTP timeout as proof that all storage work has finished.

## Session-scoped MCP diagnostics

Set `diagnostics: { sources: { mcp: { level: "debug" } } }` when you create or
resume a session to opt in to MCP diagnostics. Every source defaults to `off`.
The enabled levels are `error`, `warning`, `info`, `debug`, and `trace`. This
setting is separate from the client's process-level `logLevel`.

> [!WARNING]
> Diagnostic entries can contain user-provided or server-provided content at
> every enabled level: `warning` and above can include server stderr, while
> `debug` and `trace` can additionally include MCP payloads, tool arguments,
> and paths. Treat every entry as sensitive. Do not automatically upload entries
> as telemetry or export them without deliberate host action.

The generated `session.rpc.diagnostics` API lets hosts configure and read
session-scoped, bounded in-memory diagnostics. MCP is the first and currently
only supported source. Explicitly select it with `sources: ["mcp"]` when reading;
reading does not enable capture. Use one stoppable read loop
per output surface and retain its cursor. A read loop owns its cursor and
presentation; the runtime owns capture, filtering, retention, cursor expiry,
and wakeups.

```typescript
import { approveAll, CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const stop = new AbortController();
const appendLine = (line: string) => console.log(line);

await client.start();
const session = await client.createSession({
    onPermissionRequest: approveAll,
    diagnostics: { sources: { mcp: { level: "debug" } } },
});

try {
    let cursor: string | undefined;
    while (!stop.signal.aborted) {
        const page = await session.rpc.diagnostics.read({
            sources: ["mcp"],
            cursor,
            max: 100,
            waitMs: 30_000,
        });
        if (page.cursorStatus === "expired") {
            appendLine("MCP diagnostic entries were dropped.");
        }
        for (const entry of page.entries) {
            const detail = entry.details.data ? ` ${entry.details.data}` : "";
            appendLine(
                `${entry.timestamp} [${entry.level}] [${entry.source}:${entry.details.serverName}] ${entry.message}${detail}`,
            );
        }
        cursor = page.cursor;
    }
} finally {
    await session.disconnect();
    await client.stop();
}
```

The abort signal stops the loop after its current bounded read completes; it is
not passed to the RPC call. Disabling capture wakes an outstanding read.

MCP startup is lazy: enabling or reading diagnostics does not start a server.
Configure `mcpServers` on session creation, then either use the session normally
or call `session.rpc.mcp.startServer({ serverName })` for an installed server
to troubleshoot initialization without making a model request.

Each record has `source: "mcp"`, timestamp, severity, message, and optional
`agentId` for non-root agents. Its typed `details` contains the lifecycle,
protocol, HTTP, or stderr category, server name, a fresh `connectionId` for each
connection attempt, and optional protocol direction and diagnostic data.
MCP retention is capped at 1,024 records and 4 MiB per session. Individual encoded
records are capped at 16 KiB and carry `truncated` when shortened. Reads default
to 100 records, accept a maximum of 500, and do not consume other readers' data.
Use `droppedCount`, when present on an expired cursor, to show the known loss.
Every successful read returns a cursor and cursor status, including empty
reads. Keep the returned cursor even when no records arrive. A cursor belongs
to its source selection; start without a cursor when changing that selection.
Missing, empty, duplicate, or unsupported sources are rejected, as are malformed
cursors and invalid numeric bounds. Neither records nor capture settings are
saved in session history.

Call `session.rpc.diagnostics.configure({ sources: { mcp: { level: "off" } } })`
to disable MCP capture and clear its retained buffer. Configuration updates only
the explicitly named sources and returns the effective source levels. Empty or
unknown source configuration is rejected; adding another supported source in
the future will not implicitly opt an existing caller into it.

Stop the host's read loop too; reads while logging
is off return immediately rather than waiting. An outstanding long poll wakes
when logging is disabled. Omitting `diagnostics` during a resident resume
preserves its current configuration; a cold-loaded session requires a new opt-in.
Enabling diagnostics from the initial `off` state can begin capture for an
already-live MCP connection. After diagnostics have been disabled with
`configure({ sources: { mcp: { level: "off" } } })`, re-enabling can resume capture for the same
live connection and its existing connection ID. Records that were already in
flight when diagnostics were disabled are discarded.

The runtime removes configured and structurally recognized credentials from HTTP
diagnostics before entries reach this API, but this is not a guarantee that
arbitrary server-provided secrets are absent. It does not expose request or
response header maps. Only selected metadata, such as `Content-Type`, `Accept`,
and `MCP-Protocol-Version`, is eligible for capture, but its values are still
untrusted and can contain sensitive content. Authentication headers, cookies,
session IDs, query values, URL userinfo, and fragments are omitted. URL paths
are retained for troubleshooting, so do not place credentials in path segments.
Protocol payloads and stderr can also contain user content or arbitrary
server-provided secrets.

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
* [AUTOTITLE](/copilot/get-started/sdk-quickstart) - SDK basics and custom tools
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging) - SDK-wide debugging

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/mcp-debugging) - Detailed MCP troubleshooting
* [Issue #9](https://github.com/github/copilot-sdk/issues/9) - Original MCP tools usage question
* [Issue #36](https://github.com/github/copilot-sdk/issues/36) - MCP documentation tracking issue
