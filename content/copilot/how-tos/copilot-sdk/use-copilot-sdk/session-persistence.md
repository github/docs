---
title: Session persistence in the Copilot SDK
shortTitle: Session persistence
intro: Pause, resume, and manage {% data variables.copilot.copilot_sdk_short %} sessions across restarts and deployments.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

When you create a session, {% data variables.copilot.copilot_sdk_short %} maintains conversation history, tool state, and planning context. By default, this state lives in memory and disappears when the session ends. With persistence enabled, you can resume sessions across restarts, container migrations, or even different client instances. For a visual overview of the session state lifecycle, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#how-sessions-work).

| State | What happens |
|-------|--------------|
| **Create** | `sessionId` assigned |
| **Active** | Send prompts, tool calls, responses |
| **Paused** | State saved to disk |
| **Resume** | State loaded from disk |

## Quick start: creating a resumable session

The key to resumable sessions is providing your own `sessionId` (other SDKs may use `session_id`). Without one, the SDK generates a random ID and the session can't be resumed later.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();

// Create a session with a meaningful ID
const session = await client.createSession({
  sessionId: "user-123-task-456",
  model: "gpt-5.2-codex",
});

// Do some work...
await session.sendAndWait({ prompt: "Analyze my codebase" });

// Session state is automatically persisted
// You can safely close the client
```

For examples in Python, Go, and C#, see the `github/copilot-sdk` [repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#quick-start-creating-a-resumable-session).

## Resuming a session

You can resume a session from where it ended (minutes, hours, or even days later). For a visual overview of cross-client session resumption, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#resuming-a-session).

```typescript
// Resume from a different client instance (or after restart)
const session = await client.resumeSession("user-123-task-456");

// Continue where you left off
await session.sendAndWait({ prompt: "What did we discuss earlier?" });
```

For examples in Python, Go, and C#, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#resuming-a-session).

## Resume options

When resuming a session, you can optionally reconfigure many settings. This is useful when you need to change the model, update tool configurations, or modify behavior.

| Option | Description |
|--------|-------------|
| `model` | Change the model for the resumed session |
| `systemMessage` | Override or extend the system prompt |
| `availableTools` | Restrict which tools are available |
| `excludedTools` | Disable specific tools |
| `provider` | Re-provide BYOK credentials (required for BYOK sessions) |
| `reasoningEffort` | Adjust reasoning effort level |
| `streaming` | Enable/disable streaming responses |
| `workingDirectory` | Change the working directory |
| `configDir` | Override configuration directory |
| `mcpServers` | Configure MCP servers |
| `customAgents` | Configure custom agents |
| `agent` | Pre-select a custom agent by name |
| `skillDirectories` | Directories to load skills from |
| `disabledSkills` | Skills to disable |
| `infiniteSessions` | Configure infinite session behavior |

### Example: Changing model on resume

```typescript
// Resume with a different model
const session = await client.resumeSession("user-123-task-456", {
  model: "claude-sonnet-4",  // Switch to a different model
  reasoningEffort: "high",   // Increase reasoning effort
});
```

## Using BYOK with resumed sessions

When using your own API keys, you must re-provide the provider configuration when resuming. API keys are never persisted to disk for security reasons.

```typescript
// Original session with BYOK
const session = await client.createSession({
  sessionId: "user-123-task-456",
  model: "gpt-5.2-codex",
  provider: {
    type: "azure",
    endpoint: "https://my-resource.openai.azure.com",
    apiKey: process.env.AZURE_OPENAI_KEY,
    deploymentId: "my-gpt-deployment",
  },
});

// When resuming, you MUST re-provide the provider config
const resumed = await client.resumeSession("user-123-task-456", {
  provider: {
    type: "azure",
    endpoint: "https://my-resource.openai.azure.com",
    apiKey: process.env.AZURE_OPENAI_KEY,  // Required again
    deploymentId: "my-gpt-deployment",
  },
});
```

## What gets persisted

Session state is saved to `~/.copilot/session-state/{sessionId}/`:

```text
~/.copilot/session-state/
└── user-123-task-456/
    ├── checkpoints/           # Conversation history snapshots
    │   ├── 001.json          # Initial state
    │   ├── 002.json          # After first interaction
    │   └── ...               # Incremental checkpoints
    ├── plan.md               # Agent's planning state (if any)
    └── files/                # Session artifacts
        ├── analysis.md       # Files the agent created
        └── notes.txt         # Working documents
```

| Data | Persisted? | Notes |
|------|------------|-------|
| Conversation history | ✅ Yes | Full message thread |
| Tool call results | ✅ Yes | Cached for context |
| Agent planning state | ✅ Yes | `plan.md` file |
| Session artifacts | ✅ Yes | In `files/` directory |
| Provider/API keys | ❌ No | Security: must re-provide |
| In-memory tool state | ❌ No | Tools should be stateless |

## Session ID best practices

Choose session IDs that encode ownership and purpose. This makes auditing and cleanup much easier.

| Pattern | Example | Use case |
|---------|---------|----------|
| ❌ `abc123` | Random IDs | Hard to audit, no ownership info |
| ✅ `user-{userId}-{taskId}` | `user-alice-pr-review-42` | Multi-user apps |
| ✅ `tenant-{tenantId}-{workflow}` | `tenant-acme-onboarding` | Multi-tenant SaaS |
| ✅ `{userId}-{taskId}-{timestamp}` | `alice-deploy-1706932800` | Time-based cleanup |

Benefits of structured IDs:
* Easy to audit: "Show all sessions for user alice"
* Easy to clean up: "Delete all sessions older than X"
* Natural access control: Parse user ID from session ID

### Example: Generating session IDs

```typescript
function createSessionId(userId: string, taskType: string): string {
  const timestamp = Date.now();
  return `${userId}-${taskType}-${timestamp}`;
}

const sessionId = createSessionId("alice", "code-review");
// → "alice-code-review-1706932800000"
```

For an example in Python, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#example-generating-session-ids).

## Managing session lifecycle

### Listing active sessions

```typescript
// List all sessions
const sessions = await client.listSessions();
console.log(`Found ${sessions.length} sessions`);

for (const session of sessions) {
  console.log(`- ${session.sessionId} (created: ${session.createdAt})`);
}

// Filter sessions by repository
const repoSessions = await client.listSessions({ repository: "owner/repo" });
```

### Cleaning up old sessions

```typescript
async function cleanupExpiredSessions(maxAgeMs: number) {
  const sessions = await client.listSessions();
  const now = Date.now();
  
  for (const session of sessions) {
    const age = now - new Date(session.createdAt).getTime();
    if (age > maxAgeMs) {
      await client.deleteSession(session.sessionId);
      console.log(`Deleted expired session: ${session.sessionId}`);
    }
  }
}

// Clean up sessions older than 24 hours
await cleanupExpiredSessions(24 * 60 * 60 * 1000);
```

### Disconnecting from a session

When a task completes, disconnect from the session explicitly rather than waiting for timeouts. This releases in-memory resources but **preserves session data on disk**, so the session can still be resumed later:

```typescript
try {
  // Do work...
  await session.sendAndWait({ prompt: "Complete the task" });
  
  // Task complete — release in-memory resources (session can be resumed later)
  await session.disconnect();
} catch (error) {
  // Clean up even on error
  await session.disconnect();
  throw error;
}
```

Each SDK provides idiomatic automatic cleanup patterns:

| Language | Pattern | Example |
|----------|---------|---------|
| **TypeScript** | `Symbol.asyncDispose` | `await using session = await client.createSession(config);` |
| **Python** | `async with` context manager | `async with await client.create_session(config) as session:` |
| **C#** | `IAsyncDisposable` | `await using var session = await client.CreateSessionAsync(config);` |
| **Go** | `defer` | `defer session.Disconnect()` |

> [!NOTE]
> `destroy()` has been replaced by `disconnect()` and will be removed in a future release. Existing code using `destroy()` will continue to work but should be migrated.

### Permanently deleting a session

To permanently remove a session and all its data from disk (conversation history, planning state, artifacts), use `deleteSession`. This is irreversible—the session **cannot** be resumed after deletion:

```typescript
// Permanently remove session data
await client.deleteSession("user-123-task-456");
```

> [!TIP]
> `disconnect()` releases in-memory resources but keeps session data on disk for later resumption. `deleteSession()` permanently removes everything, including files on disk.

## Automatic cleanup: idle timeout

The SDK has a built-in 30-minute idle timeout. Sessions without activity are automatically cleaned up. For a visual overview of the idle timeout flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#automatic-cleanup-idle-timeout).

Listen for idle events to know when work completes:

```typescript
session.on("session.idle", (event) => {
  console.log(`Session idle for ${event.idleDurationMs}ms`);
});
```

## Deployment patterns

### Pattern 1: One CLI server per user (recommended)

Best for: strong isolation, multi-tenant environments, Azure Dynamic Sessions. For a visual diagram, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#pattern-1-one-cli-server-per-user-recommended).

Benefits: 
* Complete isolation
* Simple security
* Easy scaling

### Pattern 2: Shared CLI server (resource efficient)

Best for: internal tools, trusted environments, resource-constrained setups. For a visual diagram, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#pattern-2-shared-cli-server-resource-efficient).

Requirements:
* Unique session IDs per user
* Application-level access control
* Session ID validation before operations

```typescript
// Application-level access control for shared CLI
async function resumeSessionWithAuth(
  client: CopilotClient,
  sessionId: string,
  currentUserId: string
): Promise<Session> {
  // Parse user from session ID
  const [sessionUserId] = sessionId.split("-");
  
  if (sessionUserId !== currentUserId) {
    throw new Error("Access denied: session belongs to another user");
  }
  
  return client.resumeSession(sessionId);
}
```

## Azure Dynamic Sessions

For serverless/container deployments where containers can restart or migrate, the session state directory must be mounted to persistent storage:

```yaml
# Azure Container Instance example
containers:
  - name: copilot-agent
    image: my-agent:latest
    volumeMounts:
      - name: session-storage
        mountPath: /home/app/.copilot/session-state

volumes:
  - name: session-storage
    azureFile:
      shareName: copilot-sessions
      storageAccountName: myaccount
```

For a visual diagram of container restart persistence, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md#azure-dynamic-sessions).

## Infinite sessions for long-running workflows

For workflows that might exceed context limits, enable infinite sessions with automatic compaction:

```typescript
const session = await client.createSession({
  sessionId: "long-workflow-123",
  infiniteSessions: {
    enabled: true,
    backgroundCompactionThreshold: 0.80,  // Start compaction at 80% context
    bufferExhaustionThreshold: 0.95,      // Block at 95% if needed
  },
});
```

> [!NOTE]
> Thresholds are context utilization ratios (0.0–1.0), not absolute token counts.

## Limitations and considerations

| Limitation | Description | Mitigation |
|------------|-------------|------------|
| **BYOK re-authentication** | API keys aren't persisted | Store keys in your secret manager; provide on resume |
| **Writable storage** | `~/.copilot/session-state/` must be writable | Mount persistent volume in containers |
| **No session locking** | Concurrent access to same session is undefined | Implement application-level locking or queue |
| **Tool state not persisted** | In-memory tool state is lost | Design tools to be stateless or persist their own state |

### Handling concurrent access

The SDK doesn't provide built-in session locking. If multiple clients might access the same session, you should ensure each session is locked to prevent hijacking:

```typescript
// Option 1: Application-level locking with Redis
import Redis from "ioredis";

const redis = new Redis();

async function withSessionLock<T>(
  sessionId: string,
  fn: () => Promise<T>
): Promise<T> {
  const lockKey = `session-lock:${sessionId}`;
  const acquired = await redis.set(lockKey, "locked", "NX", "EX", 300);
  
  if (!acquired) {
    throw new Error("Session is in use by another client");
  }
  
  try {
    return await fn();
  } finally {
    await redis.del(lockKey);
  }
}

// Usage
await withSessionLock("user-123-task-456", async () => {
  const session = await client.resumeSession("user-123-task-456");
  await session.sendAndWait({ prompt: "Continue the task" });
});
```

## Summary

| Feature | How to use |
|---------|------------|
| **Create resumable session** | Provide your own `sessionId` |
| **Resume session** | `client.resumeSession(sessionId)` |
| **BYOK resume** | Re-provide `provider` config |
| **List sessions** | `client.listSessions(filter?)` |
| **Disconnect from active session** | `session.disconnect()`—releases in-memory resources; session data on disk is preserved for resumption |
| **Delete session permanently** | `client.deleteSession(sessionId)`—permanently removes all session data from disk; cannot be resumed |
| **Containerized deployment** | Mount `~/.copilot/session-state/` to persistent storage |
