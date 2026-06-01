---
title: Session hooks
shortTitle: Hooks Overview
intro: >-
  Hooks allow you to intercept and customize the behavior of Copilot sessions at
  key points in the conversation lifecycle. Use hooks to:
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/quickstart
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

* **Control tool execution** - approve, deny, or modify tool calls
* **Transform results** - modify tool outputs before they're processed
* **Add context** - inject additional information at session start
* **Handle errors** - implement custom error handling
* **Audit and log** - track all interactions for compliance

## Available hooks

| Hook | Trigger | Use Case |
|------|---------|----------|
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use) | Before a tool executes | Permission control, argument validation |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use) | After a tool executes (success only) | Result transformation, logging |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use#failure-variant) | After a tool execution whose result was a failure | Inject retry guidance, log failures |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/user-prompt-submitted) | When user sends a message | Prompt modification, filtering |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle#session-start) | Session begins | Add context, configure session |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle#session-end) | Session ends | Cleanup, analytics |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling) | Error happens | Custom error handling |

## Quick start

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      console.log(`Tool called: ${input.toolName}`);
      // Allow all tools
      return { permissionDecision: "allow" };
    },
    onPostToolUse: async (input) => {
      console.log(`Tool result: ${JSON.stringify(input.toolResult)}`);
      return null; // No modifications
    },
    onSessionStart: async (input) => {
      return { additionalContext: "User prefers concise answers." };
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.session import PermissionHandler

async def main():
    client = CopilotClient()
    await client.start()

    async def on_pre_tool_use(input_data, invocation):
        print(f"Tool called: {input_data['toolName']}")
        return {"permissionDecision": "allow"}

    async def on_post_tool_use(input_data, invocation):
        print(f"Tool result: {input_data['toolResult']}")
        return None

    async def on_session_start(input_data, invocation):
        return {"additionalContext": "User prefers concise answers."}

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={
            "on_pre_tool_use": on_pre_tool_use,
            "on_post_tool_use": on_post_tool_use,
            "on_session_start": on_session_start,
        })
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
    "context"
    "fmt"
    copilot "github.com/github/copilot-sdk/go"
)

func main() {
    client := copilot.NewClient(nil)

    session, _ := client.CreateSession(context.Background(), &copilot.SessionConfig{
        Hooks: &copilot.SessionHooks{
            OnPreToolUse: func(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
                fmt.Printf("Tool called: %s\n", input.ToolName)
                return &copilot.PreToolUseHookOutput{
                    PermissionDecision: "allow",
                }, nil
            },
            OnPostToolUse: func(input copilot.PostToolUseHookInput, inv copilot.HookInvocation) (*copilot.PostToolUseHookOutput, error) {
                fmt.Printf("Tool result: %v\n", input.ToolResult)
                return nil, nil
            },
            OnSessionStart: func(input copilot.SessionStartHookInput, inv copilot.HookInvocation) (*copilot.SessionStartHookOutput, error) {
                return &copilot.SessionStartHookOutput{
                    AdditionalContext: "User prefers concise answers.",
                }, nil
            },
        },
    })
    _ = session
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

var client = new CopilotClient();

var session = await client.CreateSessionAsync(new SessionConfig
{
    Hooks = new SessionHooks
    {
        OnPreToolUse = (input, invocation) =>
        {
            Console.WriteLine($"Tool called: {input.ToolName}");
            return Task.FromResult<PreToolUseHookOutput?>(
                new PreToolUseHookOutput { PermissionDecision = "allow" }
            );
        },
        OnPostToolUse = (input, invocation) =>
        {
            Console.WriteLine($"Tool result: {input.ToolResult}");
            return Task.FromResult<PostToolUseHookOutput?>(null);
        },
        OnSessionStart = (input, invocation) =>
        {
            return Task.FromResult<SessionStartHookOutput?>(
                new SessionStartHookOutput { AdditionalContext = "User prefers concise answers." }
            );
        },
    },
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.*;
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

try (var client = new CopilotClient()) {
    client.start().get();

    var hooks = new SessionHooks()
        .setOnPreToolUse((input, invocation) -> {
            System.out.println("Tool called: " + input.getToolName());
            return CompletableFuture.completedFuture(PreToolUseHookOutput.allow());
        })
        .setOnPostToolUse((input, invocation) -> {
            System.out.println("Tool result: " + input.getToolResult());
            return CompletableFuture.completedFuture(null);
        })
        .setOnSessionStart((input, invocation) -> {
            return CompletableFuture.completedFuture(
                new SessionStartHookOutput("User prefers concise answers.", null)
            );
        });

    var session = client.createSession(
        new SessionConfig()
            .setHooks(hooks)
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();
}
```

{% endcodetab %}
{% endcodetabs %}

## Hook invocation context

Every hook receives an `invocation` parameter with context about the current session:

| Field | Type | Description |
|-------|------|-------------|
| `sessionId` | string | The ID of the current session |

This allows hooks to maintain state or perform session-specific logic.

## Common patterns

### Logging all tool calls

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      console.log(`[${new Date().toISOString()}] Tool: ${input.toolName}, Args: ${JSON.stringify(input.toolArgs)}`);
      return { permissionDecision: "allow" };
    },
    onPostToolUse: async (input) => {
      console.log(`[${new Date().toISOString()}] Result: ${JSON.stringify(input.toolResult)}`);
      return null;
    },
  },
});
```

### Blocking dangerous tools

```typescript
const BLOCKED_TOOLS = ["shell", "bash", "exec"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (BLOCKED_TOOLS.includes(input.toolName)) {
        return {
          permissionDecision: "deny",
          permissionDecisionReason: "Shell access is not permitted",
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Adding user context

```typescript
const session = await client.createSession({
  hooks: {
    onSessionStart: async () => {
      const userPrefs = await loadUserPreferences();
      return {
        additionalContext: `User preferences: ${JSON.stringify(userPrefs)}`,
      };
    },
  },
});
```

## Hook guides

* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use)** - Control tool execution permissions
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use)** - Transform tool results
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/user-prompt-submitted)** - Modify user prompts
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle)** - Session start and end
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling)** - Custom error handling

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started#step-4-add-a-custom-tool)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging)
