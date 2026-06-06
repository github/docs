---
title: Pre-tool use hook
shortTitle: Pre Tool Use
intro: 'The `onPreToolUse` hook is called **before** a tool executes. Use it to:'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/pre-tool-use
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

* Approve or deny tool execution
* Modify tool arguments
* Add context for the tool
* Suppress tool output from the conversation

## Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
import type { PreToolUseHookInput, HookInvocation, PreToolUseHookOutput } from "@github/copilot-sdk";
type PreToolUseHandler = (
  input: PreToolUseHookInput,
  invocation: HookInvocation
) => Promise<PreToolUseHookOutput | null | undefined>;
```

```typescript
type PreToolUseHandler = (
  input: PreToolUseHookInput,
  invocation: HookInvocation
) => Promise<PreToolUseHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PreToolUseHookInput, PreToolUseHookOutput
from typing import Callable, Awaitable

PreToolUseHandler = Callable[
    [PreToolUseHookInput, dict[str, str]],
    Awaitable[PreToolUseHookOutput | None]
]
```

```python
PreToolUseHandler = Callable[
    [PreToolUseHookInput, dict[str, str]],
    Awaitable[PreToolUseHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type PreToolUseHandler func(
    input copilot.PreToolUseHookInput,
    invocation copilot.HookInvocation,
) (*copilot.PreToolUseHookOutput, error)

func main() {}
```

```golang
type PreToolUseHandler func(
    input PreToolUseHookInput,
    invocation HookInvocation,
) (*PreToolUseHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public delegate Task<PreToolUseHookOutput?> PreToolUseHandler(
    PreToolUseHookInput input,
    HookInvocation invocation);
```

```csharp
public delegate Task<PreToolUseHookOutput?> PreToolUseHandler(
    PreToolUseHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

public class PreToolUseSignature {
    PreToolUseHandler handler = (PreToolUseHookInput input, HookInvocation invocation) ->
        CompletableFuture.completedFuture(PreToolUseHookOutput.allow());
    public static void main(String[] args) {}
}
```

```java
@FunctionalInterface
public interface PreToolUseHandler {
    CompletableFuture<PreToolUseHookOutput> handle(
        PreToolUseHookInput input,
        HookInvocation invocation);
}
```

{% endcodetab %}
{% endcodetabs %}

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `toolName` | string | Name of the tool being called |
| `toolArgs` | object | Arguments passed to the tool |

## Output

Return `null` or `undefined` to allow the tool to execute with no changes. Otherwise, return an object with any of these fields:

| Field | Type | Description |
|-------|------|-------------|
| `permissionDecision` | `"allow"` \| `"deny"` \| `"ask"` | Whether to allow the tool call |
| `permissionDecisionReason` | string | Explanation shown to user (for deny/ask) |
| `modifiedArgs` | object | Modified arguments to pass to the tool |
| `additionalContext` | string | Extra context injected into the conversation |
| `suppressOutput` | boolean | If true, tool output won't appear in conversation |

### Permission decisions

| Decision | Behavior |
|----------|----------|
| `"allow"` | Tool executes normally |
| `"deny"` | Tool is blocked, reason shown to user |
| `"ask"` | User is prompted to approve (interactive mode) |

### Skipping permission prompts for trusted custom tools

If you define a custom tool that is safe to run without prompting, set `skipPermission: true` on the tool definition. Use this for trusted, app-owned tools whose inputs are already constrained by your application; use `onPreToolUse` when you need per-call policy checks or argument validation.

```typescript
const getWeather = defineTool("get_weather", {
  description: "Get weather for a location.",
  parameters: {
    type: "object",
    properties: { location: { type: "string" } },
    required: ["location"],
  },
  skipPermission: true,
  handler: async ({ location }) => ({ forecast: `Sunny in ${location}` }),
});
```

## Examples

### Allow all tools (logging only)

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input, invocation) => {
      console.log(`[${invocation.sessionId}] Calling ${input.toolName}`);
      console.log(`  Args: ${JSON.stringify(input.toolArgs)}`);
      return { permissionDecision: "allow" };
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

async def on_pre_tool_use(input_data, invocation):
    print(f"[{invocation['session_id']}] Calling {input_data['toolName']}")
    print(f"  Args: {input_data['toolArgs']}")
    return {"permissionDecision": "allow"}

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={"on_pre_tool_use": on_pre_tool_use})
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
		OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
		Hooks: &copilot.SessionHooks{
			OnPreToolUse: func(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
				fmt.Printf("[%s] Calling %s\n", inv.SessionID, input.ToolName)
				fmt.Printf("  Args: %v\n", input.ToolArgs)
				return &copilot.PreToolUseHookOutput{
					PermissionDecision: "allow",
				}, nil
			},
		},
	})
	_ = session
}
```

```golang
session, _ := client.CreateSession(context.Background(), &copilot.SessionConfig{
    Hooks: &copilot.SessionHooks{
        OnPreToolUse: func(input copilot.PreToolUseHookInput, inv copilot.HookInvocation) (*copilot.PreToolUseHookOutput, error) {
            fmt.Printf("[%s] Calling %s\n", inv.SessionID, input.ToolName)
            fmt.Printf("  Args: %v\n", input.ToolArgs)
            return &copilot.PreToolUseHookOutput{
                PermissionDecision: "allow",
            }, nil
        },
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class PreToolUseExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();
        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnPreToolUse = (input, invocation) =>
                {
                    Console.WriteLine($"[{invocation.SessionId}] Calling {input.ToolName}");
                    Console.WriteLine($"  Args: {input.ToolArgs}");
                    return Task.FromResult<PreToolUseHookOutput?>(
                        new PreToolUseHookOutput { PermissionDecision = "allow" }
                    );
                },
            },
        });
    }
}
```

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    Hooks = new SessionHooks
    {
        OnPreToolUse = (input, invocation) =>
        {
            Console.WriteLine($"[{invocation.SessionId}] Calling {input.ToolName}");
            Console.WriteLine($"  Args: {input.ToolArgs}");
            return Task.FromResult<PreToolUseHookOutput?>(
                new PreToolUseHookOutput { PermissionDecision = "allow" }
            );
        },
    },
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.*;
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

var hooks = new SessionHooks()
    .setOnPreToolUse((input, invocation) -> {
        System.out.println("[" + invocation.getSessionId() + "] Calling " + input.getToolName());
        System.out.println("  Args: " + input.getToolArgs());
        return CompletableFuture.completedFuture(PreToolUseHookOutput.allow());
    });

var session = client.createSession(
    new SessionConfig()
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
        .setHooks(hooks)
).get();
```

{% endcodetab %}
{% endcodetabs %}

### Block specific tools

```typescript
const BLOCKED_TOOLS = ["shell", "bash", "write_file", "delete_file"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (BLOCKED_TOOLS.includes(input.toolName)) {
        return {
          permissionDecision: "deny",
          permissionDecisionReason: `Tool '${input.toolName}' is not permitted in this environment`,
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Modify tool arguments

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      // Add a default timeout to all shell commands
      if (input.toolName === "shell" && input.toolArgs) {
        const args = input.toolArgs as { command: string; timeout?: number };
        return {
          permissionDecision: "allow",
          modifiedArgs: {
            ...args,
            timeout: args.timeout ?? 30000, // Default 30s timeout
          },
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Restrict file access to specific directories

```typescript
const ALLOWED_DIRECTORIES = ["/home/user/projects", "/tmp"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (input.toolName === "read_file" || input.toolName === "write_file") {
        const args = input.toolArgs as { path: string };
        const isAllowed = ALLOWED_DIRECTORIES.some(dir => 
          args.path.startsWith(dir)
        );
        
        if (!isAllowed) {
          return {
            permissionDecision: "deny",
            permissionDecisionReason: `Access to '${args.path}' is not permitted. Allowed directories: ${ALLOWED_DIRECTORIES.join(", ")}`,
          };
        }
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Suppress verbose tool output

```typescript
const VERBOSE_TOOLS = ["list_directory", "search_files"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      return {
        permissionDecision: "allow",
        suppressOutput: VERBOSE_TOOLS.includes(input.toolName),
      };
    },
  },
});
```

### Add context based on tool

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (input.toolName === "query_database") {
        return {
          permissionDecision: "allow",
          additionalContext: "Remember: This database uses PostgreSQL syntax. Always use parameterized queries.",
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

## Best practices

1. **Always return a decision** - Returning `null` allows the tool, but being explicit with `{ permissionDecision: "allow" }` is clearer.

1. **Provide helpful denial reasons** - When denying, explain why so users understand:

   ```typescript
   return {
     permissionDecision: "deny",
     permissionDecisionReason: "Shell commands require approval. Please describe what you want to accomplish.",
   };
   ```

1. **Be careful with argument modification** - Ensure modified args maintain the expected schema for the tool.

1. **Consider performance** - Pre-tool hooks run synchronously before each tool call. Keep them fast.

1. **Use `suppressOutput` judiciously** - Suppressing output means the model won't see the result, which may affect conversation quality.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/post-tool-use)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging)
