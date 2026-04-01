---
title: SDK and CLI compatibility
shortTitle: SDK and CLI compatibility
intro: Compare which {% data variables.product.prodname_copilot_short %} CLI features are available through {% data variables.copilot.copilot_sdk_short %}, identify CLI-only features, and find programmatic workarounds.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

> [!NOTE]
> {% data reusables.copilot.copilot-sdk.technical-preview-note %}

{% data variables.copilot.copilot_sdk %} communicates with {% data variables.copilot.copilot_cli %} via JSON-RPC protocol. Features must be explicitly exposed through this protocol to be available in the SDK. Many interactive CLI features are terminal-specific and not available programmatically.

## Feature comparison

### Available in SDK

| Feature | SDK method | Notes |
|---------|------------|-------|
| **Session Management** | | |
| Create session | `createSession()` | Full config support |
| Resume session | `resumeSession()` | With infinite session workspaces |
| Disconnect session | `disconnect()` | Release in-memory resources |
| Destroy session | `destroy()` | Use `disconnect()` instead |
| Delete session | `deleteSession()` | Remove from storage |
| List sessions | `listSessions()` | All stored sessions |
| Get last session | `getLastSessionId()` | For quick resume |
| Get foreground session | `getForegroundSessionId()` | Multi-session coordination |
| Set foreground session | `setForegroundSessionId()` | Multi-session coordination |
| **Messaging** | | |
| Send message | `send()` | With attachments |
| Send and wait | `sendAndWait()` | Blocks until complete |
| Steering (immediate mode) | `send({ mode: "immediate" })` | Inject mid-turn without aborting |
| Queueing (enqueue mode) | `send({ mode: "enqueue" })` | Buffer for sequential processing (default) |
| File attachments | `send({ attachments: [{ type: "file", path }] })` | Images auto-encoded and resized |
| Directory attachments | `send({ attachments: [{ type: "directory", path }] })` | Attach directory context |
| Get history | `getMessages()` | All session events |
| Abort | `abort()` | Cancel in-flight request |
| **Tools** | | |
| Register custom tools | `registerTools()` | Full JSON Schema support |
| Tool permission control | `onPreToolUse` hook | Allow/deny/ask |
| Tool result modification | `onPostToolUse` hook | Transform results |
| Available/excluded tools | `availableTools`, `excludedTools` config | Filter tools |
| **Models** | | |
| List models | `listModels()` | With capabilities, billing, policy |
| Set model (at creation) | `model` in session config | Per-session |
| Switch model (mid-session) | `session.setModel()` | Also via `session.rpc.model.switchTo()` |
| Get current model | `session.rpc.model.getCurrent()` | Query active model |
| Reasoning effort | `reasoningEffort` config | For supported models |
| **Agent Mode** | | |
| Get current mode | `session.rpc.mode.get()` | Returns current mode |
| Set mode | `session.rpc.mode.set()` | Switch between modes |
| **Plan Management** | | |
| Read plan | `session.rpc.plan.read()` | Get plan.md content and path |
| Update plan | `session.rpc.plan.update()` | Write plan.md content |
| Delete plan | `session.rpc.plan.delete()` | Remove plan.md |
| **Workspace Files** | | |
| List workspace files | `session.rpc.workspace.listFiles()` | Files in session workspace |
| Read workspace file | `session.rpc.workspace.readFile()` | Read file content |
| Create workspace file | `session.rpc.workspace.createFile()` | Create file in workspace |
| **Authentication** | | |
| Get auth status | `getAuthStatus()` | Check login state |
| Use token | `githubToken` option | Programmatic auth |
| **Connectivity** | | |
| Ping | `client.ping()` | Health check with server timestamp |
| Get server status | `client.getStatus()` | Protocol version and server info |
| **MCP Servers** | | |
| Local/stdio servers | `mcpServers` config | Spawn processes |
| Remote HTTP/SSE | `mcpServers` config | Connect to services |
| **Hooks** | | |
| Pre-tool use | `onPreToolUse` | Permission, modify args |
| Post-tool use | `onPostToolUse` | Modify results |
| User prompt | `onUserPromptSubmitted` | Modify prompts |
| Session start/end | `onSessionStart`, `onSessionEnd` | Lifecycle with source/reason |
| Error handling | `onErrorOccurred` | Custom handling |
| **Events** | | |
| All session events | `on()`, `once()` | 40+ event types |
| Streaming | `streaming: true` | Delta events |
| **Session Config** | | |
| Custom agents | `customAgents` config | Define specialized agents |
| System message | `systemMessage` config | Append or replace |
| Custom provider | `provider` config | BYOK support |
| Infinite sessions | `infiniteSessions` config | Auto-compaction |
| Permission handler | `onPermissionRequest` | Approve/deny requests |
| User input handler | `onUserInputRequest` | Handle ask_user |
| Skills | `skillDirectories` config | Custom skills |
| Disabled skills | `disabledSkills` config | Disable specific skills |
| Config directory | `configDir` config | Override default config location |
| Client name | `clientName` config | Identify app in User-Agent |
| Working directory | `workingDirectory` config | Set session cwd |
| **Experimental** | | |
| Agent management | `session.rpc.agent.*` | List, select, deselect, get current agent |
| Fleet mode | `session.rpc.fleet.start()` | Parallel sub-agent execution |
| Manual compaction | `session.rpc.compaction.compact()` | Trigger compaction on demand |

### Not available in SDK (CLI-only)

| Feature | CLI command/option | Reason |
|---------|-------------------|--------|
| **Session Export** | | |
| Export to file | `--share`, `/share` | Not in protocol |
| Export to gist | `--share-gist`, `/share gist` | Not in protocol |
| **Interactive UI** | | |
| Slash commands | `/help`, `/clear`, `/exit`, etc. | Terminal UI (TUI)-only |
| Agent picker dialog | `/agent` | Interactive UI |
| Diff mode dialog | `/diff` | Interactive UI |
| Feedback dialog | `/feedback` | Interactive UI |
| Theme picker | `/theme` | Terminal UI |
| Model picker | `/model` | Interactive UI (use SDK `setModel()` instead) |
| Copy to clipboard | `/copy` | Terminal-specific |
| Context management | `/context` | Interactive UI |
| **Research & History** | | |
| Deep research | `/research` | TUI workflow with web search |
| Session history tools | `/chronicle` | Standup, tips, improve, reindex |
| **Terminal Features** | | |
| Color output | `--no-color` | Terminal-specific |
| Screen reader mode | `--screen-reader` | Accessibility |
| Rich diff rendering | `--plain-diff` | Terminal rendering |
| Startup banner | `--banner` | Visual element |
| Streamer mode | `/streamer-mode` | TUI display mode |
| Alternate screen buffer | `--alt-screen`, `--no-alt-screen` | Terminal rendering |
| Mouse support | `--mouse`, `--no-mouse` | Terminal input |
| **Path/Permission Shortcuts** | | |
| Allow all paths | `--allow-all-paths` | Use permission handler |
| Allow all URLs | `--allow-all-urls` | Use permission handler |
| Allow all permissions | `--yolo`, `--allow-all`, `/allow-all` | Use permission handler |
| Granular tool permissions | `--allow-tool`, `--deny-tool` | Use `onPreToolUse` hook |
| URL access control | `--allow-url`, `--deny-url` | Use permission handler |
| Reset allowed tools | `/reset-allowed-tools` | TUI command |
| **Directory Management** | | |
| Add directory | `/add-dir`, `--add-dir` | Configure in session |
| List directories | `/list-dirs` | TUI command |
| Change directory | `/cwd` | TUI command |
| **Plugin/MCP Management** | | |
| Plugin commands | `/plugin` | Interactive management |
| MCP server management | `/mcp` | Interactive UI |
| **Account Management** | | |
| Login flow | `/login`, `copilot auth login` | OAuth device flow |
| Logout | `/logout`, `copilot auth logout` | Direct CLI |
| User info | `/user` | TUI command |
| **Session Operations** | | |
| Clear conversation | `/clear` | TUI-only |
| Plan view | `/plan` | TUI-only (use SDK `session.rpc.plan.*` instead) |
| Session management | `/session`, `/resume`, `/rename` | TUI workflow |
| Fleet mode (interactive) | `/fleet` | TUI-only (use SDK `session.rpc.fleet.start()` instead) |
| **Skills Management** | | |
| Manage skills | `/skills` | Interactive UI |
| **Task Management** | | |
| View background tasks | `/tasks` | TUI command |
| **Usage & Stats** | | |
| Token usage | `/usage` | Subscribe to usage events |
| **Code Review** | | |
| Review changes | `/review` | TUI command |
| **Delegation** | | |
| Delegate to PR | `/delegate` | TUI workflow |
| **Terminal Setup** | | |
| Shell integration | `/terminal-setup` | Shell-specific |
| **Development** | | |
| Toggle experimental | `/experimental`, `--experimental` | Runtime flag |
| Custom instructions control | `--no-custom-instructions` | CLI flag |
| Diagnose session | `/diagnose` | TUI command |
| View/manage instructions | `/instructions` | TUI command |
| Collect debug logs | `/collect-debug-logs` | Diagnostic tool |
| Reindex workspace | `/reindex` | TUI command |
| IDE integration | `/ide` | IDE-specific workflow |
| **Non-interactive Mode** | | |
| Prompt mode | `-p`, `--prompt` | Single-shot execution |
| Interactive prompt | `-i`, `--interactive` | Auto-execute then interactive |
| Silent output | `-s`, `--silent` | Script-friendly |
| Continue session | `--continue` | Resume most recent |
| Agent selection | `--agent <agent>` | CLI flag |

## Workarounds

### Session export

The `--share` option is not available via SDK. To work around this:

* **Collect events manually:** Subscribe to session events and build your own export:

  ```typescript copy
  const events: SessionEvent[] = [];
  session.on((event) => events.push(event));
  // ... after conversation ...
  const messages = await session.getMessages();
  // Format as markdown yourself
  ```

* **Use the CLI directly** for one-off exports.

### Permission control

The SDK uses a deny-by-default permission model. All permission requests (file writes, shell commands, URL fetches, and others) are denied unless your app provides an `onPermissionRequest` handler.

Instead of `--allow-all-paths` or `--yolo`, use the permission handler:

```typescript copy
const session = await client.createSession({
  onPermissionRequest: approveAll,
});
```

### Token usage tracking

Instead of `/usage`, subscribe to usage events:

```typescript copy
session.on("assistant.usage", (event) => {
  console.log("Tokens used:", {
    input: event.data.inputTokens,
    output: event.data.outputTokens,
  });
});
```

### Context compaction

Instead of `/compact`, configure automatic compaction or trigger it manually:

```typescript copy
// Automatic compaction via config
const session = await client.createSession({
  infiniteSessions: {
    enabled: true,
    backgroundCompactionThreshold: 0.80,  // Start background compaction at 80% context utilization
    bufferExhaustionThreshold: 0.95,      // Block and compact at 95% context utilization
  },
});

// Manual compaction (experimental)
const result = await session.rpc.compaction.compact();
console.log(`Removed ${result.tokensRemoved} tokens, ${result.messagesRemoved} messages`);
```

> [!NOTE]
> Thresholds are context utilization ratios (0.0-1.0), not absolute token counts.

### Plan management

Read and write session plans programmatically:

```typescript copy
// Read the current plan
const plan = await session.rpc.plan.read();
if (plan.exists) {
  console.log(plan.content);
}

// Update the plan
await session.rpc.plan.update({ content: "# My Plan\n- Step 1\n- Step 2" });

// Delete the plan
await session.rpc.plan.delete();
```

### Message steering

Inject a message into the current LLM turn without aborting:

```typescript copy
// Steer the agent mid-turn
await session.send({ prompt: "Focus on error handling first", mode: "immediate" });

// Default: enqueue for next turn
await session.send({ prompt: "Next, add tests" });
```

## Protocol limitations

The SDK can only access features exposed through the CLI's JSON-RPC protocol. If you need a CLI feature that's not available:

* **Check for alternatives:** Many features have SDK equivalents (see [Workarounds](#workarounds) above).
* **Use the CLI directly:** For one-off operations, invoke the CLI.
* **Request the feature:** Open an issue in the [github/copilot-sdk](https://github.com/github/copilot-sdk/issues) repository to request protocol support.

## Version compatibility

| SDK protocol range | CLI protocol version | Compatibility |
|--------------------|---------------------|---------------|
| v2-v3 | v3 | Full support |
| v2-v3 | v2 | Supported with automatic v2 adapters |

The SDK negotiates protocol versions with the CLI at startup. The SDK supports protocol versions 2 through 3. When connecting to a v2 CLI server, the SDK automatically adapts `tool.call` and `permission.request` messages to the v3 event model—no code changes required.

You can check versions at runtime:

```typescript copy
const status = await client.getStatus();
console.log("Protocol version:", status.protocolVersion);
```
