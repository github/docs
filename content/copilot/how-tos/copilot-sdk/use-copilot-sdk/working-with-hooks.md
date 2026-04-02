---
title: Working with hooks
shortTitle: Working with hooks
intro: Use hooks to customize the behavior of your {% data variables.copilot.copilot_sdk_short %} sessions.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Hooks let you plug custom logic into every stage of a {% data variables.copilot.copilot_sdk_short %} session—from the moment it starts, through each user prompt and tool call, to the moment it ends. You can use hooks to implement permissions, auditing, notifications, and more without modifying the core agent behavior.

## Overview

A hook is a callback you register once when creating a session. The SDK invokes it at a well-defined point in the conversation lifecycle, passes contextual input, and optionally accepts output that modifies the session's behavior. For a detailed sequence diagram of the session flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#overview).

| Hook | When it fires | What you can do |
|------|---------------|-----------------|
| `onSessionStart` | Session begins (new or resumed) | Inject context, load preferences |
| `onUserPromptSubmitted` | User sends a message | Rewrite prompts, add context, filter input |
| `onPreToolUse` | Before a tool executes | Allow, deny, or modify the call |
| `onPostToolUse` | After a tool returns | Transform results, redact secrets, audit |
| `onSessionEnd` | Session ends | Clean up, record metrics |
| `onErrorOccurred` | An error is raised | Custom logging, retry logic, alerts |

All hooks are **optional**—register only the ones you need. Returning `null` (or the language equivalent) from any hook tells the SDK to continue with default behavior.

## Registering hooks

Pass a `hooks` object when you create (or resume) a session. Every example below follows this pattern.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    hooks: {
        onSessionStart: async (input, invocation) => { /* ... */ },
        onPreToolUse:   async (input, invocation) => { /* ... */ },
        onPostToolUse:  async (input, invocation) => { /* ... */ },
        // ... add only the hooks you need
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#registering-hooks). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

> [!TIP]
> Every hook handler receives an `invocation` parameter containing the `sessionId`, which is useful for correlating logs and maintaining per-session state.

## Permission control

Use `onPreToolUse` to build a permission layer that decides which tools the agent may run, what arguments are allowed, and whether the user should be prompted before execution.

### Allow-list a safe set of tools

```typescript
const READ_ONLY_TOOLS = ["read_file", "glob", "grep", "view"];

const session = await client.createSession({
    hooks: {
        onPreToolUse: async (input) => {
            if (!READ_ONLY_TOOLS.includes(input.toolName)) {
                return {
                    permissionDecision: "deny",
                    permissionDecisionReason:
                        `Only read-only tools are allowed. "${input.toolName}" was blocked.`,
                };
            }
            return { permissionDecision: "allow" };
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#allow-list-a-safe-set-of-tools). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

### Restrict file access to specific directories

```typescript
const ALLOWED_DIRS = ["/home/user/projects", "/tmp"];

const session = await client.createSession({
    hooks: {
        onPreToolUse: async (input) => {
            if (["read_file", "write_file", "edit"].includes(input.toolName)) {
                const filePath = (input.toolArgs as { path: string }).path;
                const allowed = ALLOWED_DIRS.some((dir) => filePath.startsWith(dir));

                if (!allowed) {
                    return {
                        permissionDecision: "deny",
                        permissionDecisionReason:
                            `Access to "${filePath}" is outside the allowed directories.`,
                    };
                }
            }
            return { permissionDecision: "allow" };
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

### Ask the user before destructive operations

```typescript
const DESTRUCTIVE_TOOLS = ["delete_file", "shell", "bash"];

const session = await client.createSession({
    hooks: {
        onPreToolUse: async (input) => {
            if (DESTRUCTIVE_TOOLS.includes(input.toolName)) {
                return { permissionDecision: "ask" };
            }
            return { permissionDecision: "allow" };
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

Returning `"ask"` delegates the decision to the user at runtime—useful for destructive actions where you want a human in the loop.

## Auditing and compliance

Combine `onPreToolUse`, `onPostToolUse`, and the session lifecycle hooks to build a complete audit trail that records every action the agent takes.

### Structured audit log

```typescript
interface AuditEntry {
    timestamp: number;
    sessionId: string;
    event: string;
    toolName?: string;
    toolArgs?: unknown;
    toolResult?: unknown;
    prompt?: string;
}

const auditLog: AuditEntry[] = [];

const session = await client.createSession({
    hooks: {
        onSessionStart: async (input, invocation) => {
            auditLog.push({
                timestamp: input.timestamp,
                sessionId: invocation.sessionId,
                event: "session_start",
            });
            return null;
        },
        onUserPromptSubmitted: async (input, invocation) => {
            auditLog.push({
                timestamp: input.timestamp,
                sessionId: invocation.sessionId,
                event: "user_prompt",
                prompt: input.prompt,
            });
            return null;
        },
        onPreToolUse: async (input, invocation) => {
            auditLog.push({
                timestamp: input.timestamp,
                sessionId: invocation.sessionId,
                event: "tool_call",
                toolName: input.toolName,
                toolArgs: input.toolArgs,
            });
            return { permissionDecision: "allow" };
        },
        onPostToolUse: async (input, invocation) => {
            auditLog.push({
                timestamp: input.timestamp,
                sessionId: invocation.sessionId,
                event: "tool_result",
                toolName: input.toolName,
                toolResult: input.toolResult,
            });
            return null;
        },
        onSessionEnd: async (input, invocation) => {
            auditLog.push({
                timestamp: input.timestamp,
                sessionId: invocation.sessionId,
                event: "session_end",
            });

            // Persist the log — swap this with your own storage backend
            await fs.promises.writeFile(
                `audit-${invocation.sessionId}.json`,
                JSON.stringify(auditLog, null, 2),
            );
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For an example in Python, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#structured-audit-log). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

### Redact secrets from tool results

```typescript
const SECRET_PATTERNS = [
    /(?:api[_-]?key|token|secret|password)\s*[:=]\s*["']?[\w\-\.]+["']?/gi,
];

const session = await client.createSession({
    hooks: {
        onPostToolUse: async (input) => {
            if (typeof input.toolResult !== "string") return null;

            let redacted = input.toolResult;
            for (const pattern of SECRET_PATTERNS) {
                redacted = redacted.replace(pattern, "[REDACTED]");
            }

            return redacted !== input.toolResult
                ? { modifiedResult: redacted }
                : null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Notifications

Hooks fire in your application's process, so you can trigger any side-effect such as desktop notifications, sounds, Slack messages, or webhook calls.

### Desktop notification on session events

```typescript
import notifier from "node-notifier"; // npm install node-notifier

const session = await client.createSession({
    hooks: {
        onSessionEnd: async (input, invocation) => {
            notifier.notify({
                title: "Copilot Session Complete",
                message: `Session ${invocation.sessionId.slice(0, 8)} finished (${input.reason}).`,
            });
            return null;
        },
        onErrorOccurred: async (input) => {
            notifier.notify({
                title: "Copilot Error",
                message: input.error.slice(0, 200),
            });
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For an example in Python, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#desktop-notification-on-session-events). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

### Play a sound when a tool finishes

```typescript
import { exec } from "node:child_process";

const session = await client.createSession({
    hooks: {
        onPostToolUse: async (input) => {
            // macOS: play a system sound after every tool call
            exec("afplay /System/Library/Sounds/Pop.aiff");
            return null;
        },
        onErrorOccurred: async () => {
            exec("afplay /System/Library/Sounds/Basso.aiff");
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

### Post to Slack on errors

```typescript
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL!;

const session = await client.createSession({
    hooks: {
        onErrorOccurred: async (input, invocation) => {
            if (!input.recoverable) {
                await fetch(SLACK_WEBHOOK_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        text: `🚨 Unrecoverable error in session \`${invocation.sessionId.slice(0, 8)}\`:\n\`\`\`${input.error}\`\`\``,
                    }),
                });
            }
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Prompt enrichment

Use `onSessionStart` and `onUserPromptSubmitted` to automatically inject context so users don't have to repeat themselves.

### Inject project metadata at session start

```typescript
import * as fs from "node:fs";

const session = await client.createSession({
    hooks: {
        onSessionStart: async (input) => {
            const pkg = JSON.parse(
                await fs.promises.readFile("package.json", "utf-8"),
            );
            return {
                additionalContext: [
                    `Project: ${pkg.name} v${pkg.version}`,
                    `Node: ${process.version}`,
                    `CWD: ${input.cwd}`,
                ].join("\n"),
            };
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

### Expand shorthand commands in prompts

```typescript
const SHORTCUTS: Record<string, string> = {
    "/fix":      "Find and fix all errors in the current file",
    "/test":     "Write comprehensive unit tests for this code",
    "/explain":  "Explain this code in detail",
    "/refactor": "Refactor this code to improve readability",
};

const session = await client.createSession({
    hooks: {
        onUserPromptSubmitted: async (input) => {
            for (const [shortcut, expansion] of Object.entries(SHORTCUTS)) {
                if (input.prompt.startsWith(shortcut)) {
                    const rest = input.prompt.slice(shortcut.length).trim();
                    return { modifiedPrompt: rest ? `${expansion}: ${rest}` : expansion };
                }
            }
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Error handling and recovery

The `onErrorOccurred` hook gives you a chance to react to failures—whether that means retrying, notifying a human, or gracefully shutting down.

### Retry transient model errors

```typescript
const session = await client.createSession({
    hooks: {
        onErrorOccurred: async (input) => {
            if (input.errorContext === "model_call" && input.recoverable) {
                return {
                    errorHandling: "retry",
                    retryCount: 3,
                    userNotification: "Temporary model issue—retrying…",
                };
            }
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

### Friendly error messages

```typescript
const FRIENDLY_MESSAGES: Record<string, string> = {
    model_call:      "The AI model is temporarily unavailable. Please try again.",
    tool_execution:  "A tool encountered an error. Check inputs and try again.",
    system:          "A system error occurred. Please try again later.",
};

const session = await client.createSession({
    hooks: {
        onErrorOccurred: async (input) => {
            return {
                userNotification: FRIENDLY_MESSAGES[input.errorContext] ?? input.error,
            };
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Session metrics

Track how long sessions run, how many tools are invoked, and why sessions end—useful for dashboards and cost monitoring.

```typescript
const metrics = new Map<string, { start: number; toolCalls: number; prompts: number }>();

const session = await client.createSession({
    hooks: {
        onSessionStart: async (input, invocation) => {
            metrics.set(invocation.sessionId, {
                start: input.timestamp,
                toolCalls: 0,
                prompts: 0,
            });
            return null;
        },
        onUserPromptSubmitted: async (_input, invocation) => {
            metrics.get(invocation.sessionId)!.prompts++;
            return null;
        },
        onPreToolUse: async (_input, invocation) => {
            metrics.get(invocation.sessionId)!.toolCalls++;
            return { permissionDecision: "allow" };
        },
        onSessionEnd: async (input, invocation) => {
            const m = metrics.get(invocation.sessionId)!;
            const durationSec = (input.timestamp - m.start) / 1000;

            console.log(
                `Session ${invocation.sessionId.slice(0, 8)}: ` +
                `${durationSec.toFixed(1)}s, ${m.prompts} prompts, ` +
                `${m.toolCalls} tool calls, ended: ${input.reason}`,
            );

            metrics.delete(invocation.sessionId);
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For an example in Python, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/hooks.md#session-metrics). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Combining hooks

Hooks compose naturally. A single `hooks` object can handle permissions, auditing, and notifications—each hook does its own job.

```typescript
const session = await client.createSession({
    hooks: {
        onSessionStart: async (input) => {
            console.log(`[audit] session started in ${input.cwd}`);
            return { additionalContext: "Project uses TypeScript and Vitest." };
        },
        onPreToolUse: async (input) => {
            console.log(`[audit] tool requested: ${input.toolName}`);
            if (input.toolName === "shell") {
                return { permissionDecision: "ask" };
            }
            return { permissionDecision: "allow" };
        },
        onPostToolUse: async (input) => {
            console.log(`[audit] tool completed: ${input.toolName}`);
            return null;
        },
        onErrorOccurred: async (input) => {
            console.error(`[alert] ${input.errorContext}: ${input.error}`);
            return null;
        },
        onSessionEnd: async (input, invocation) => {
            console.log(`[audit] session ${invocation.sessionId.slice(0, 8)} ended: ${input.reason}`);
            return null;
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Best practices

* **Keep hooks fast.** Every hook runs inline—slow hooks delay the conversation. Offload heavy work (database writes, HTTP calls) to a background queue when possible.
* **Return `null` when you have nothing to change.** This tells the SDK to proceed with defaults and avoids unnecessary object allocation.
* **Be explicit with permission decisions.** Returning `{ permissionDecision: "allow" }` is clearer than returning `null`, even though both allow the tool.
* **Don't swallow critical errors.** It's fine to suppress recoverable tool errors, but always log or alert on unrecoverable ones.
* **Use `additionalContext` instead of `modifiedPrompt` when possible.** Appending context preserves the user's original intent while still guiding the model.
* **Scope state by session ID.** If you track per-session data, key it on `invocation.sessionId` and clean up in `onSessionEnd`.

## Further reading

For more information, see the [Hooks reference](https://github.com/github/copilot-sdk/blob/main/docs/hooks/index.md) in the `github/copilot-sdk` repository.
