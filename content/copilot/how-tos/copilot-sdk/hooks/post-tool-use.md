---
title: Post-tool use hook
shortTitle: Post Tool Use
intro: >-
  The `onPostToolUse` hook is called **after** a tool executes **successfully**.
  Use it to:
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/post-tool-use
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

- Transform or filter tool results
- Log tool execution for auditing
- Add context based on results
- Suppress results from the conversation

> **Failure variant** — `onPostToolUse` only fires for successful tool executions. To observe **failed** tool calls, register `onPostToolUseFailure` (`on_post_tool_use_failure` in Python, `OnPostToolUseFailure` in Go/.NET, `on_post_tool_use_failure` in Rust). The handler receives `{ sessionId, toolName, toolArgs, error, timestamp, workingDirectory }` — the `error` field is a string extracted from the tool's failure result — and may return `{ additionalContext: string }` to inject extra guidance for the model (e.g. retry hints). See the [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/hooks-overview) for the full list.
> <a id="failure-variant"></a>

## Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
import type {
  PostToolUseHookInput,
  HookInvocation,
  PostToolUseHookOutput,
} from "@github/copilot-sdk";
type PostToolUseHandler = (
  input: PostToolUseHookInput,
  invocation: HookInvocation,
) => Promise<PostToolUseHookOutput | null | undefined>;
```


```typescript
type PostToolUseHandler = (
  input: PostToolUseHookInput,
  invocation: HookInvocation,
) => Promise<PostToolUseHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PostToolUseHookInput, PostToolUseHookOutput
from typing import Callable, Awaitable

PostToolUseHandler = Callable[
    [PostToolUseHookInput, dict[str, str]],
    Awaitable[PostToolUseHookOutput | None]
]
```


```python
PostToolUseHandler = Callable[
    [PostToolUseHookInput, dict[str, str]],
    Awaitable[PostToolUseHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type PostToolUseHandler func(
    input copilot.PostToolUseHookInput,
    invocation copilot.HookInvocation,
) (*copilot.PostToolUseHookOutput, error)

func main() {}
```


```golang
type PostToolUseHandler func(
    input PostToolUseHookInput,
    invocation HookInvocation,
) (*PostToolUseHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public delegate Task<PostToolUseHookOutput?> PostToolUseHandler(
    PostToolUseHookInput input,
    HookInvocation invocation);
```


```csharp
public delegate Task<PostToolUseHookOutput?> PostToolUseHandler(
    PostToolUseHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

public class PostToolUseSignature {
    PostToolUseHandler handler = (PostToolUseHookInput input, HookInvocation invocation) ->
        CompletableFuture.completedFuture(null);
    public static void main(String[] args) {}
}
```

```java
@FunctionalInterface
public interface PostToolUseHandler {
    CompletableFuture<PostToolUseHookOutput> handle(
        PostToolUseHookInput input,
        HookInvocation invocation);
}
```

{% endcodetab %}
{% endcodetabs %}

## Input

| Field              | Type               | Description                            |
| ------------------ | ------------------ | -------------------------------------- |
| `timestamp`        | SDK timestamp type | When the hook was triggered            |
| `workingDirectory` | string             | Current working directory              |
| `toolName`         | string             | Name of the tool that was called       |
| `toolArgs`         | object             | Arguments that were passed to the tool |
| `toolResult`       | object             | Result returned by the tool            |

## Output

Return `null` or `undefined` to pass through the result unchanged. Otherwise, return an object with any of these fields:

| Field               | Type    | Description                                  |
| ------------------- | ------- | -------------------------------------------- |
| `modifiedResult`    | object  | Modified result to use instead of original   |
| `additionalContext` | string  | Extra context injected into the conversation |
| `suppressOutput`    | boolean | If true, result won't appear in conversation |

## Examples

### Log all tool results

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input, invocation) => {
      console.log(`[${invocation.sessionId}] Tool: ${input.toolName}`);
      console.log(`  Args: ${JSON.stringify(input.toolArgs)}`);
      console.log(`  Result: ${JSON.stringify(input.toolResult)}`);
      return null; // Pass through unchanged
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

async def on_post_tool_use(input_data, invocation):
    print(f"[{invocation['session_id']}] Tool: {input_data['toolName']}")
    print(f"  Args: {input_data['toolArgs']}")
    print(f"  Result: {input_data['toolResult']}")
    return None  # Pass through unchanged

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={"on_post_tool_use": on_post_tool_use})
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
			OnPostToolUse: func(input copilot.PostToolUseHookInput, inv copilot.HookInvocation) (*copilot.PostToolUseHookOutput, error) {
				fmt.Printf("[%s] Tool: %s\n", inv.SessionID, input.ToolName)
				fmt.Printf("  Args: %v\n", input.ToolArgs)
				fmt.Printf("  Result: %v\n", input.ToolResult)
				return nil, nil
			},
		},
	})
	_ = session
}
```


```golang
session, _ := client.CreateSession(context.Background(), &copilot.SessionConfig{
    Hooks: &copilot.SessionHooks{
        OnPostToolUse: func(input copilot.PostToolUseHookInput, inv copilot.HookInvocation) (*copilot.PostToolUseHookOutput, error) {
            fmt.Printf("[%s] Tool: %s\n", inv.SessionID, input.ToolName)
            fmt.Printf("  Args: %v\n", input.ToolArgs)
            fmt.Printf("  Result: %v\n", input.ToolResult)
            return nil, nil
        },
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class PostToolUseExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();
        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnPostToolUse = (input, invocation) =>
                {
                    Console.WriteLine($"[{invocation.SessionId}] Tool: {input.ToolName}");
                    Console.WriteLine($"  Args: {input.ToolArgs}");
                    Console.WriteLine($"  Result: {input.ToolResult}");
                    return Task.FromResult<PostToolUseHookOutput?>(null);
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
        OnPostToolUse = (input, invocation) =>
        {
            Console.WriteLine($"[{invocation.SessionId}] Tool: {input.ToolName}");
            Console.WriteLine($"  Args: {input.ToolArgs}");
            Console.WriteLine($"  Result: {input.ToolResult}");
            return Task.FromResult<PostToolUseHookOutput?>(null);
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
    .setOnPostToolUse((input, invocation) -> {
        System.out.println("[" + invocation.getSessionId() + "] Tool: " + input.getToolName());
        System.out.println("  Args: " + input.getToolArgs());
        System.out.println("  Result: " + input.getToolResult());
        return CompletableFuture.completedFuture(null);
    });

var session = client.createSession(
    new SessionConfig()
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
        .setHooks(hooks)
).get();
```

{% endcodetab %}
{% endcodetabs %}

### Redact sensitive data

```typescript
const SENSITIVE_PATTERNS = [
  /api[_-]?key["\s:=]+["']?[\w-]+["']?/gi,
  /password["\s:=]+["']?[\w-]+["']?/gi,
  /secret["\s:=]+["']?[\w-]+["']?/gi,
];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (typeof input.toolResult === "string") {
        let redacted = input.toolResult;
        for (const pattern of SENSITIVE_PATTERNS) {
          redacted = redacted.replace(pattern, "[REDACTED]");
        }

        if (redacted !== input.toolResult) {
          return { modifiedResult: redacted };
        }
      }
      return null;
    },
  },
});
```

### Truncate large results

```typescript
const MAX_RESULT_LENGTH = 10000;

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      const resultStr = JSON.stringify(input.toolResult);

      if (resultStr.length > MAX_RESULT_LENGTH) {
        return {
          modifiedResult: {
            truncated: true,
            originalLength: resultStr.length,
            content: resultStr.substring(0, MAX_RESULT_LENGTH) + "...",
          },
          additionalContext: `Note: Result was truncated from ${resultStr.length} to ${MAX_RESULT_LENGTH} characters.`,
        };
      }
      return null;
    },
  },
});
```

### Add context based on results

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      // If a file read returned an error, add helpful context
      if (input.toolName === "read_file" && input.toolResult?.error) {
        return {
          additionalContext:
            "Tip: If the file doesn't exist, consider creating it or checking the path.",
        };
      }

      // If shell command failed, add debugging hint
      if (input.toolName === "shell" && input.toolResult?.exitCode !== 0) {
        return {
          additionalContext:
            "The command failed. Check if required dependencies are installed.",
        };
      }

      return null;
    },
  },
});
```

### Filter error stack traces

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (input.toolResult?.error && input.toolResult?.stack) {
        // Remove internal stack trace details
        return {
          modifiedResult: {
            error: input.toolResult.error,
            // Keep only first 3 lines of stack
            stack: input.toolResult.stack.split("\n").slice(0, 3).join("\n"),
          },
        };
      }
      return null;
    },
  },
});
```

### Audit trail for compliance

```typescript
interface AuditEntry {
  timestamp: Date;
  sessionId: string;
  toolName: string;
  args: unknown;
  result: unknown;
  success: boolean;
}

const auditLog: AuditEntry[] = [];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input, invocation) => {
      auditLog.push({
        timestamp: input.timestamp,
        sessionId: invocation.sessionId,
        toolName: input.toolName,
        args: input.toolArgs,
        result: input.toolResult,
        success: !input.toolResult?.error,
      });

      // Optionally persist to database/file
      await saveAuditLog(auditLog);

      return null;
    },
  },
});
```

### Suppress noisy results

```typescript
const NOISY_TOOLS = ["list_directory", "search_codebase"];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (NOISY_TOOLS.includes(input.toolName)) {
        // Summarize instead of showing full result
        const items = Array.isArray(input.toolResult)
          ? input.toolResult
          : input.toolResult?.items || [];

        return {
          modifiedResult: {
            summary: `Found ${items.length} items`,
            firstFew: items.slice(0, 5),
          },
        };
      }
      return null;
    },
  },
});
```

## Best practices

1. **Return `null` when no changes needed** - This is more efficient than returning an empty object or the same result.

1. **Be careful with result modification** - Changing results can affect how the model interprets tool output. Only modify when necessary.

1. **Use `additionalContext` for hints** - Instead of modifying results, add context to help the model interpret them.

1. **Consider privacy when logging** - Tool results may contain sensitive data. Apply redaction before logging.

1. **Keep hooks fast** - Post-tool hooks run synchronously. Heavy processing should be done asynchronously or batched.

## See also

- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use)
- [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling)
