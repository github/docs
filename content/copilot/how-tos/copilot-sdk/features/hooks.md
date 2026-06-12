---
title: Working with hooks
shortTitle: Hooks
intro: >-
  Hooks let you plug custom logic into every stage of a Copilot session—from the
  moment it starts, through each user prompt and tool call, to the moment it
  ends. This guide walks through practical use cases so you can ship
  permissions, auditing, notifications, and more without modifying the core
  agent behavior.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-copilot-sdk/working-with-hooks
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Overview

A hook is a callback you register once when creating a session. The SDK invokes it at a well-defined point in the conversation lifecycle, passes contextual input, and optionally accepts output that modifies the session's behavior.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/features-hooks-diagram-0.png)

| Hook                                                                | When it fires                       | What you can do                            |
| ------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------ |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle#session-start)     | Session begins (new or resumed)     | Inject context, load preferences           |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/user-prompt-submitted)        | User sends a message                | Rewrite prompts, add context, filter input |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use)                          | Before a tool executes              | Allow / deny / modify the call             |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use)                        | After a tool returns (success only) | Transform results, redact secrets, audit   |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use#failure-variant) | After a tool returns a failure      | Inject retry guidance, log failures        |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle#session-end)         | Session ends                        | Clean up, record metrics                   |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling)                     | An error is raised                  | Custom logging, retry logic, alerts        |

All hooks are **optional**—register only the ones you need. Returning `null` (or the language equivalent) from any hook tells the SDK to continue with default behavior.

## Registering hooks

Pass a `hooks` object when you create (or resume) a session. Every example below follows this pattern.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      /* ... */
    },
    onPreToolUse: async (input, invocation) => {
      /* ... */
    },
    onPostToolUse: async (input, invocation) => {
      /* ... */
    },
    // ... add only the hooks you need
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, PermissionDecisionApproveOnce

client = CopilotClient()
await client.start()

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    hooks={
        "on_session_start": on_session_start,
        "on_pre_tool_use":  on_pre_tool_use,
        "on_post_tool_use": on_post_tool_use,
        # ... add only the hooks you need
    },
)
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	copilot "github.com/github/copilot-sdk/go"
	"github.com/github/copilot-sdk/go/rpc"
)

func onSessionStart(input copilot.SessionStartHookInput, inv copilot.HookInvocation) (*copilot.SessionStartHookOutput, error) {
	return nil, nil
}

func onPreToolUse(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
	return nil, nil
}

func onPostToolUse(input copilot.PostToolUseHookInput, inv copilot.HookInvocation) (*copilot.PostToolUseHookOutput, error) {
	return nil, nil
}

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)

	session, err := client.CreateSession(ctx, &copilot.SessionConfig{
		Hooks: &copilot.SessionHooks{
			OnSessionStart: onSessionStart,
			OnPreToolUse:   onPreToolUse,
			OnPostToolUse:  onPostToolUse,
		},
		OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
			return &rpc.PermissionDecisionApproveOnce{}, nil
		},
	})
	_ = session
	_ = err
}
```


```golang
client := copilot.NewClient(nil)

session, err := client.CreateSession(ctx, &copilot.SessionConfig{
    Hooks: &copilot.SessionHooks{
        OnSessionStart: onSessionStart,
        OnPreToolUse:   onPreToolUse,
        OnPostToolUse:  onPostToolUse,
        // ... add only the hooks you need
    },
    OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
        return &rpc.PermissionDecisionApproveOnce{}, nil
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;
using GitHub.Copilot.Rpc;

public static class HooksExample
{
    static Task<SessionStartHookOutput?> onSessionStart(SessionStartHookInput input, HookInvocation invocation) =>
        Task.FromResult<SessionStartHookOutput?>(null);
    static Task<PreToolUseHookOutput?> onPreToolUse(PreToolUseHookInput input, HookInvocation invocation) =>
        Task.FromResult<PreToolUseHookOutput?>(null);
    static Task<PostToolUseHookOutput?> onPostToolUse(PostToolUseHookInput input, HookInvocation invocation) =>
        Task.FromResult<PostToolUseHookOutput?>(null);

    public static async Task Main()
    {
        var client = new CopilotClient();

        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnSessionStart = onSessionStart,
                OnPreToolUse   = onPreToolUse,
                OnPostToolUse  = onPostToolUse,
            },
            OnPermissionRequest = (req, inv) =>
                Task.FromResult(PermissionDecision.ApproveOnce()),
        });
    }
}
```


```csharp
var client = new CopilotClient();

var session = await client.CreateSessionAsync(new SessionConfig
{
    Hooks = new SessionHooks
    {
        OnSessionStart = onSessionStart,
        OnPreToolUse   = onPreToolUse,
        OnPostToolUse  = onPostToolUse,
        // ... add only the hooks you need
    },
    OnPermissionRequest = (req, inv) =>
        Task.FromResult(PermissionDecision.ApproveOnce()),
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

try (var client = new CopilotClient()) {
    client.start().get();

    var hooks = new SessionHooks()
        .setOnSessionStart((input, inv) -> CompletableFuture.completedFuture(null))
        .setOnPreToolUse((input, inv) -> CompletableFuture.completedFuture(null))
        .setOnPostToolUse((input, inv) -> CompletableFuture.completedFuture(null));
        // ... add only the hooks you need

    var session = client.createSession(
        new SessionConfig()
            .setHooks(hooks)
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();
}
```

{% endcodetab %}
{% endcodetabs %}

> [!TIP]
> Every hook handler receives an `invocation` parameter containing the `sessionId`, which is useful for correlating logs and maintaining per-session state.

## Use case: permission control

Use `onPreToolUse` to build a permission layer that decides which tools the agent may run, what arguments are allowed, and whether the user should be prompted before execution.

### Allow-list a safe set of tools

{% codetabs %}
{% codetab typescript %}

```typescript
const READ_ONLY_TOOLS = ["read_file", "glob", "grep", "view"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (!READ_ONLY_TOOLS.includes(input.toolName)) {
        return {
          permissionDecision: "deny",
          permissionDecisionReason: `Only read-only tools are allowed. "${input.toolName}" was blocked.`,
        };
      }
      return { permissionDecision: "allow" };
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import PermissionDecisionApproveOnce

READ_ONLY_TOOLS = ["read_file", "glob", "grep", "view"]

async def on_pre_tool_use(input_data, invocation):
    if input_data["toolName"] not in READ_ONLY_TOOLS:
        return {
            "permissionDecision": "deny",
            "permissionDecisionReason":
                f'Only read-only tools are allowed. "{input_data["toolName"]}" was blocked.',
        }
    return {"permissionDecision": "allow"}

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    hooks={"on_pre_tool_use": on_pre_tool_use},
)
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	"fmt"
	copilot "github.com/github/copilot-sdk/go"
	"github.com/github/copilot-sdk/go/rpc"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)

	readOnlyTools := map[string]bool{"read_file": true, "glob": true, "grep": true, "view": true}

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
		Hooks: &copilot.SessionHooks{
			OnPreToolUse: func(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
				if !readOnlyTools[input.ToolName] {
					return &copilot.PreToolUseHookOutput{
						PermissionDecision:       "deny",
						PermissionDecisionReason: fmt.Sprintf("Only read-only tools are allowed. %q was blocked.", input.ToolName),
					}, nil
				}
				return &copilot.PreToolUseHookOutput{PermissionDecision: "allow"}, nil
			},
		},
		OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
			return &rpc.PermissionDecisionApproveOnce{}, nil
		},
	})
	_ = session
}
```


```golang
readOnlyTools := map[string]bool{"read_file": true, "glob": true, "grep": true, "view": true}

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    Hooks: &copilot.SessionHooks{
        OnPreToolUse: func(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
            if !readOnlyTools[input.ToolName] {
                return &copilot.PreToolUseHookOutput{
                    PermissionDecision:       "deny",
                    PermissionDecisionReason: fmt.Sprintf("Only read-only tools are allowed. %q was blocked.", input.ToolName),
                }, nil
            }
            return &copilot.PreToolUseHookOutput{PermissionDecision: "allow"}, nil
        },
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;
using GitHub.Copilot.Rpc;

public static class PermissionControlExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();

        var readOnlyTools = new HashSet<string> { "read_file", "glob", "grep", "view" };

        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnPreToolUse = (input, invocation) =>
                {
                    if (!readOnlyTools.Contains(input.ToolName))
                    {
                        return Task.FromResult<PreToolUseHookOutput?>(new PreToolUseHookOutput
                        {
                            PermissionDecision = "deny",
                            PermissionDecisionReason = $"Only read-only tools are allowed. \"{input.ToolName}\" was blocked.",
                        });
                    }
                    return Task.FromResult<PreToolUseHookOutput?>(
                        new PreToolUseHookOutput { PermissionDecision = "allow" });
                },
            },
            OnPermissionRequest = (req, inv) =>
                Task.FromResult(PermissionDecision.ApproveOnce()),
        });
    }
}
```


```csharp
var readOnlyTools = new HashSet<string> { "read_file", "glob", "grep", "view" };

var session = await client.CreateSessionAsync(new SessionConfig
{
    Hooks = new SessionHooks
    {
        OnPreToolUse = (input, invocation) =>
        {
            if (!readOnlyTools.Contains(input.ToolName))
            {
                return Task.FromResult<PreToolUseHookOutput?>(new PreToolUseHookOutput
                {
                    PermissionDecision = "deny",
                    PermissionDecisionReason = $"Only read-only tools are allowed. \"{input.ToolName}\" was blocked.",
                });
            }
            return Task.FromResult<PreToolUseHookOutput?>(
                new PreToolUseHookOutput { PermissionDecision = "allow" });
        },
    },
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import java.util.Set;
import java.util.concurrent.CompletableFuture;

import com.github.copilot.rpc.PermissionHandler;
import com.github.copilot.rpc.SessionConfig;
import com.github.copilot.rpc.SessionHooks;
import com.github.copilot.rpc.PreToolUseHookOutput;
var readOnlyTools = Set.of("read_file", "glob", "grep", "view");

var hooks = new SessionHooks()
    .setOnPreToolUse((input, invocation) -> {
        if (!readOnlyTools.contains(input.getToolName())) {
            return CompletableFuture.completedFuture(
                PreToolUseHookOutput.deny(
                    "Only read-only tools are allowed. \"" + input.getToolName() + "\" was blocked.")
            );
        }
        return CompletableFuture.completedFuture(PreToolUseHookOutput.allow());
    });

var session = client.createSession(
    new SessionConfig()
        .setHooks(hooks)
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();
```

{% endcodetab %}
{% endcodetabs %}

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
            permissionDecisionReason: `Access to "${filePath}" is outside the allowed directories.`,
          };
        }
      }
      return { permissionDecision: "allow" };
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

Returning `"ask"` delegates the decision to the user at runtime—useful for destructive actions where you want a human in the loop.

## Use case: auditing and compliance

Combine `onPreToolUse`, `onPostToolUse`, and the session lifecycle hooks to build a complete audit trail that records every action the agent takes.

### Structured audit log

{% codetabs %}
{% codetab typescript %}

```typescript
interface AuditEntry {
  timestamp: Date;
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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
import json, aiofiles
from copilot import PermissionDecisionApproveOnce

audit_log = []

async def on_session_start(input_data, invocation):
    audit_log.append({
        "timestamp": input_data["timestamp"].isoformat(),
        "session_id": invocation["session_id"],
        "event": "session_start",
    })
    return None

async def on_user_prompt_submitted(input_data, invocation):
    audit_log.append({
        "timestamp": input_data["timestamp"].isoformat(),
        "session_id": invocation["session_id"],
        "event": "user_prompt",
        "prompt": input_data["prompt"],
    })
    return None

async def on_pre_tool_use(input_data, invocation):
    audit_log.append({
        "timestamp": input_data["timestamp"].isoformat(),
        "session_id": invocation["session_id"],
        "event": "tool_call",
        "tool_name": input_data["toolName"],
        "tool_args": input_data["toolArgs"],
    })
    return {"permissionDecision": "allow"}

async def on_post_tool_use(input_data, invocation):
    audit_log.append({
        "timestamp": input_data["timestamp"].isoformat(),
        "session_id": invocation["session_id"],
        "event": "tool_result",
        "tool_name": input_data["toolName"],
        "tool_result": input_data["toolResult"],
    })
    return None

async def on_session_end(input_data, invocation):
    audit_log.append({
        "timestamp": input_data["timestamp"].isoformat(),
        "session_id": invocation["session_id"],
        "event": "session_end",
    })
    async with aiofiles.open(f"audit-{invocation['session_id']}.json", "w") as f:
        await f.write(json.dumps(audit_log, indent=2))
    return None

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    hooks={
        "on_session_start": on_session_start,
        "on_user_prompt_submitted": on_user_prompt_submitted,
        "on_pre_tool_use": on_pre_tool_use,
        "on_post_tool_use": on_post_tool_use,
        "on_session_end": on_session_end,
    },
)
```

{% endcodetab %}
{% endcodetabs %}

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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

## Use case: notifications and sounds

Hooks fire in your application's process, so you can trigger any side-effect—desktop notifications, sounds, Slack messages, or webhook calls.

### Desktop notification on session events

{% codetabs %}
{% codetab typescript %}

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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

```python
import subprocess
from copilot import PermissionDecisionApproveOnce

async def on_session_end(input_data, invocation):
    sid = invocation["session_id"][:8]
    reason = input_data["reason"]
    subprocess.Popen([
        "notify-send", "Copilot Session Complete",
        f"Session {sid} finished ({reason}).",
    ])
    return None

async def on_error_occurred(input_data, invocation):
    subprocess.Popen([
        "notify-send", "Copilot Error",
        input_data["error"][:200],
    ])
    return None

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    hooks={
        "on_session_end": on_session_end,
        "on_error_occurred": on_error_occurred,
    },
)
```

{% endcodetab %}
{% endcodetabs %}

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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

## Use case: prompt enrichment

Use `onSessionStart` and `onUserPromptSubmitted` to automatically inject context so users don't have to repeat themselves.

### Inject project metadata at session start

```typescript
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
          `Working directory: ${input.workingDirectory}`,
        ].join("\n"),
      };
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

### Expand shorthand commands in prompts

```typescript
const SHORTCUTS: Record<string, string> = {
  "/fix": "Find and fix all errors in the current file",
  "/test": "Write comprehensive unit tests for this code",
  "/explain": "Explain this code in detail",
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
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

## Use case: error handling and recovery

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
          userNotification: "Temporary model issue — retrying…",
        };
      }
      return null;
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

### Friendly error messages

```typescript
const FRIENDLY_MESSAGES: Record<string, string> = {
  model_call: "The AI model is temporarily unavailable. Please try again.",
  tool_execution: "A tool encountered an error. Check inputs and try again.",
  system: "A system error occurred. Please try again later.",
};

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      return {
        userNotification: FRIENDLY_MESSAGES[input.errorContext] ?? input.error,
      };
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

## Use case: session metrics

Track how long sessions run, how many tools are invoked, and why sessions end—useful for dashboards and cost monitoring.

{% codetabs %}
{% codetab typescript %}

```typescript
const metrics = new Map<
  string,
  { start: Date; toolCalls: number; prompts: number }
>();

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
      const durationSec =
        (input.timestamp.getTime() - m.start.getTime()) / 1000;

      console.log(
        `Session ${invocation.sessionId.slice(0, 8)}: ` +
          `${durationSec.toFixed(1)}s, ${m.prompts} prompts, ` +
          `${m.toolCalls} tool calls, ended: ${input.reason}`,
      );

      metrics.delete(invocation.sessionId);
      return null;
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import PermissionDecisionApproveOnce

session_metrics = {}

async def on_session_start(input_data, invocation):
    session_metrics[invocation["session_id"]] = {
        "start": input_data["timestamp"],
        "tool_calls": 0,
        "prompts": 0,
    }
    return None

async def on_user_prompt_submitted(input_data, invocation):
    session_metrics[invocation["session_id"]]["prompts"] += 1
    return None

async def on_pre_tool_use(input_data, invocation):
    session_metrics[invocation["session_id"]]["tool_calls"] += 1
    return {"permissionDecision": "allow"}

async def on_session_end(input_data, invocation):
    m = session_metrics.pop(invocation["session_id"])
    duration = (input_data["timestamp"] - m["start"]).total_seconds()
    sid = invocation["session_id"][:8]
    print(
        f"Session {sid}: {duration:.1f}s, {m['prompts']} prompts, "
        f"{m['tool_calls']} tool calls, ended: {input_data['reason']}"
    )
    return None

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    hooks={
        "on_session_start": on_session_start,
        "on_user_prompt_submitted": on_user_prompt_submitted,
        "on_pre_tool_use": on_pre_tool_use,
        "on_session_end": on_session_end,
    },
)
```

{% endcodetab %}
{% endcodetabs %}

## Combining hooks

Hooks compose naturally. A single `hooks` object can handle permissions **and** auditing **and** notifications—each hook does its own job.

```typescript
const session = await client.createSession({
  hooks: {
    onSessionStart: async (input) => {
      console.log(`[audit] session started in ${input.workingDirectory}`);
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
      console.log(
        `[audit] session ${invocation.sessionId.slice(0, 8)} ended: ${input.reason}`,
      );
      return null;
    },
  },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

## Best practices

1. **Keep hooks fast.** Every hook runs inline—slow hooks delay the conversation. Offload heavy work (database writes, HTTP calls) to a background queue when possible.

1. **Return `null` when you have nothing to change.** This tells the SDK to proceed with defaults and avoids unnecessary object allocation.

1. **Be explicit with permission decisions.** Returning `{ permissionDecision: "allow" }` is clearer than returning `null`, even though both allow the tool.

1. **Don't swallow critical errors.** It's fine to suppress recoverable tool errors, but always log or alert on unrecoverable ones.

1. **Use `additionalContext` instead of `modifiedPrompt` when possible.** Appending context preserves the user's original intent while still guiding the model.

1. **Scope state by session ID.** If you track per-session data, key it on `invocation.sessionId` and clean up in `onSessionEnd`.

## Reference

For full type definitions, input/output field tables, and additional examples for every hook, see the API reference:

- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/hooks-overview)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/user-prompt-submitted)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling)

## See also

- [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging)
