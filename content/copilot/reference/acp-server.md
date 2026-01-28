---
title: "Copilot CLI ACP server"
shortTitle: ACP server
intro: "Learn about {% data variables.copilot.copilot_cli %}'s Agent Client Protocol server."
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
contentType: reference
---


## Overview

Agent Client Protocol (ACP) is a standardized protocol that enables external clients, such as IDEs, editors, and other tools, to communicate with the {% data variables.product.prodname_copilot_short %} agent runtime. It provides a structured way to create and manage agent sessions, send prompts, receive streaming responses, and handle permission requests.

## Architecture

```text
┌─────────────────┐         ┌─────────────────────┐
│   IDE / Editor  │  ACP    │  Copilot Agent      │
│   (ACP Client)  │◄───────►│  Runtime            │
│                 │  stdio/ │  (ACP Server)       │
│                 │  TCP    │                     │
└─────────────────┘         └─────────────────────┘
```

The ACP server runs as part of {% data variables.copilot.copilot_cli %} and exposes the agent's capabilities through a well-defined protocol.

## Starting the ACP server

### Stdio Mode (Recommended for IDE Integration)

```bash
copilot --acp --stdio
```

Communication happens over stdin/stdout using newline-delimited JSON (NDJSON).

### TCP Mode

```bash
copilot --acp --port 3000
```

Communication happens over a TCP socket on the specified port.

## Protocol flow

### 1. Initialize connection

```typescript
// Client sends initialize request
const response = await connection.initialize({
    clientInfo: {
        name: "MyIDE",
        version: "1.0"
    }
});

// Server responds with capabilities
// {
//     serverInfo: { name: "copilot-agent-runtime", version: "x.x.x" },
//     capabilities: { ... }
// }
```

### 2. Create a session

```typescript
const session = await connection.newSession({
    cwd: "/path/to/project"
});

// Returns: { sessionId: "uuid-..." }
```

### 3. Send prompts

```typescript
await connection.prompt({
    sessionId: session.sessionId,
    prompt: [
        { type: "text", text: "Fix the authentication bug in login.ts" }
    ]
});
```

### 4. Receive session updates

The client receives real-time updates via the `sessionUpdate` callback:

```typescript
const client: acp.Client = {
    async sessionUpdate(params) {
        // params.state: "idle" | "working"
        // params.lastUpdateId: number
        // params.updates: Array of content updates

        for (const update of params.updates) {
            switch (update.type) {
                case "text":
                    console.log("Agent says:", update.text);
                    break;
                case "tool":
                    console.log("Tool execution:", update.name, update.status);
                    break;
            }
        }
    }
};
```

### 5. Handle permission requests

The agent requests permission for sensitive operations:

```typescript
const client: acp.Client = {
    async requestPermission(params) {
        // params.request contains details about what permission is needed
        // e.g., tool execution, file access, URL fetch

        // Display dialog to user and return their choice
        return {
            outcome: {
                outcome: "selected",
                optionId: "allow_once"  // or "allow_always" or "reject_once"
            }
        };
    }
};
```

## Content types

### Text content

```typescript
{
    type: "text",
    text: "Your message here"
}
```

### Image content

```typescript
{
    type: "image",
    data: "<base64-encoded-image>",
    mimeType: "image/png"  // or "image/jpeg", "image/gif", "image/webp"
}
```

### Embedded resources

```typescript
{
    type: "resource",
    resource: {
        uri: "file:///path/to/file.txt",
        text: "file contents",
        mimeType: "text/plain"
    }
}
```

### Blob data

```typescript
{
    type: "blob",
    data: "<base64-encoded-data>",
    mimeType: "application/octet-stream"
}
```

## Tool execution updates

When the agent executes tools, clients receive detailed updates:

```typescript
{
    type: "tool",
    id: "tool-execution-id",
    name: "edit",           // Tool name
    status: "running",      // "running" | "completed"
    kind: "edit",           // Tool category
    input: { ... },         // Tool parameters
    output: { ... },        // Tool result (when completed)
    diff: "..."             // Diff content for edit operations
}
```

### Tool kinds

| Kind | Description |
|------|-------------|
| `execute` | Command execution (bash) |
| `read` | File reading operations |
| `edit` | File modifications |
| `delete` | File deletions |
| `create` | File creation |
| `search` | Code search (grep, glob) |
| `fetch` | Web fetching |
| `agent` | Sub-agent invocation |
| `github` | GitHub API operations |
| `other` | Other tool types |

## Permission types

### Tool permissions

Requested when the agent wants to execute a tool:

```typescript
{
    type: "tool",
    toolName: "bash",
    input: { command: "npm install" }
}
```

### Path permissions

Requested for file system access:

```typescript
{
    type: "path",
    path: "/path/to/sensitive/file",
    operation: "write"  // or "read"
}
```

### URL permissions

Requested for network access:

```typescript
{
    type: "url",
    url: "https://api.example.com/data",
    operation: "fetch"
}
```

## Session lifecycle

```text
┌─────────────┐
│   Created   │
└──────┬──────┘
       │ prompt()
       ▼
┌─────────────┐
│   Working   │◄───┐
└──────┬──────┘    │
       │           │ prompt()
       ▼           │
┌─────────────┐    │
│    Idle     │────┘
└──────┬──────┘
       │ destroy()
       ▼
┌─────────────┐
│  Destroyed  │
└─────────────┘
```

## Error handling

Errors are communicated through the protocol's standard error response format:

```typescript
{
    error: {
        code: -32600,
        message: "Invalid request",
        data: { ... }
    }
}
```

## Example: Full Client Implementation

```typescript
import * as acp from '@anthropic/acp-sdk';
import { spawn } from 'child_process';

async function main() {
    // Start the ACP server
    const process = spawn('copilot', ['--acp', '--stdio'], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    // Create transport stream
    const stream = acp.ndJsonStream(process.stdin, process.stdout);

    // Define client handlers
    const client: acp.Client = {
        async requestPermission(params) {
            console.log('Permission requested:', params.request);
            // Auto-approve for this example
            return {
                outcome: { outcome: "selected", optionId: "allow_once" }
            };
        },

        async sessionUpdate(params) {
            console.log(`Session ${params.sessionId} state: ${params.state}`);
            for (const update of params.updates) {
                if (update.type === 'text') {
                    process.stdout.write(update.text);
                } else if (update.type === 'tool') {
                    console.log(`Tool: ${update.name} - ${update.status}`);
                }
            }
        }
    };

    // Establish connection
    const connection = new acp.ClientSideConnection(client, stream);

    // Initialize
    await connection.initialize({
        clientInfo: { name: "example-client", version: "1.0.0" }
    });

    // Create session
    const session = await connection.newSession({
        cwd: process.cwd()
    });

    // Send prompt
    await connection.prompt({
        sessionId: session.sessionId,
        prompt: [
            { type: "text", text: "List the files in the current directory" }
        ]
    });

    // Wait for completion (in real app, handle via sessionUpdate)
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Cleanup
    process.kill();
}

main().catch(console.error);
```

## Configuration

### Runtime settings

The ACP server inherits settings from the {% data variables.product.prodname_copilot_short %} runtime:

* **Model selection**: Configured via environment or runtime settings
* **Tool permissions**: Managed through the permission service
* **Logging**: Configurable log level and directory

### Environment variables

| Variable | Description |
|----------|-------------|
| `COPILOT_LOG_LEVEL` | Log verbosity (debug, info, warn, error) |
| `COPILOT_LOG_DIR` | Directory for log files |

## Best practices

1. **Use Stdio Mode for IDEs**: More reliable than TCP for local integrations
1. **Handle Permissions Gracefully**: Always implement the `requestPermission` callback
1. **Process Updates Incrementally**: Don't wait for completion to show progress
1. **Clean Up Sessions**: Call destroy when done to free resources
1. **Handle Reconnection**: Implement retry logic for network transports

## Source files

| File | Description |
|------|-------------|
| `src/cli/acp/server.ts` | Main ACP server implementation |
| `src/cli/acp/mapping.ts` | Event transformation layer |
| `src/cli/acp/permissionHandlers.ts` | Permission request handlers |
| `src/cli/acp/permissionMapping.ts` | Permission mapping utilities |

## Testing

ACP has end-to-end tests that can be run with:

```bash
CI=true npm run test:cli-e2e -- test/cli/e2e/acp.test.ts
```

Test captures are available in `test/cli/e2e/captures/acp/` showing various content type handling scenarios.
