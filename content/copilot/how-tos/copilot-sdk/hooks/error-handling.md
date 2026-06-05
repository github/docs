---
title: Error handling hook
shortTitle: Error Handling
intro: >-
  The `onErrorOccurred` hook is called when errors occur during session
  execution. Use it to:
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/error-handling
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

* Implement custom error logging
* Track error patterns
* Provide user-friendly error messages
* Trigger alerts for critical errors

## Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
import type { ErrorOccurredHookInput, HookInvocation, ErrorOccurredHookOutput } from "@github/copilot-sdk";
type ErrorOccurredHandler = (
  input: ErrorOccurredHookInput,
  invocation: HookInvocation
) => Promise<ErrorOccurredHookOutput | null | undefined>;
```

```typescript
type ErrorOccurredHandler = (
  input: ErrorOccurredHookInput,
  invocation: HookInvocation
) => Promise<ErrorOccurredHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import ErrorOccurredHookInput, ErrorOccurredHookOutput
from typing import Callable, Awaitable

ErrorOccurredHandler = Callable[
    [ErrorOccurredHookInput, dict[str, str]],
    Awaitable[ErrorOccurredHookOutput | None]
]
```

```python
ErrorOccurredHandler = Callable[
    [ErrorOccurredHookInput, dict[str, str]],
    Awaitable[ErrorOccurredHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type ErrorOccurredHandler func(
    input copilot.ErrorOccurredHookInput,
    invocation copilot.HookInvocation,
) (*copilot.ErrorOccurredHookOutput, error)

func main() {}
```

```golang
type ErrorOccurredHandler func(
    input ErrorOccurredHookInput,
    invocation HookInvocation,
) (*ErrorOccurredHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public delegate Task<ErrorOccurredHookOutput?> ErrorOccurredHandler(
    ErrorOccurredHookInput input,
    HookInvocation invocation);
```

```csharp
public delegate Task<ErrorOccurredHookOutput?> ErrorOccurredHandler(
    ErrorOccurredHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
// Note: Java SDK does not have an onErrorOccurred hook.
// Use EventErrorPolicy and EventErrorHandler instead:
//
// session.setEventErrorPolicy(EventErrorPolicy.SUPPRESS_AND_LOG_ERRORS);
// session.setEventErrorHandler((event, ex) -> {
//     System.err.println("Error in " + event.getType() + ": " + ex.getMessage());
// });
//
// See the "Basic Error Logging" example below for a complete snippet.
```

{% endcodetab %}
{% endcodetabs %}

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the error occurred |
| `cwd` | string | Current working directory |
| `error` | string | Error message |
| `errorContext` | string | Where the error occurred: `"model_call"`, `"tool_execution"`, `"system"`, or `"user_input"` |
| `recoverable` | boolean | Whether the error can potentially be recovered from |

## Output

Return `null` or `undefined` to use default error handling. Otherwise, return an object with:

| Field | Type | Description |
|-------|------|-------------|
| `suppressOutput` | boolean | If true, don't show error output to user |
| `errorHandling` | string | How to handle: `"retry"`, `"skip"`, or `"abort"` |
| `retryCount` | number | Number of times to retry (if errorHandling is `"retry"`) |
| `userNotification` | string | Custom message to show the user |

## Examples

### Basic error logging

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input, invocation) => {
      console.error(`[${invocation.sessionId}] Error: ${input.error}`);
      console.error(`  Context: ${input.errorContext}`);
      console.error(`  Recoverable: ${input.recoverable}`);
      return null;
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

async def on_error_occurred(input_data, invocation):
    print(f"[{invocation['session_id']}] Error: {input_data['error']}")
    print(f"  Context: {input_data['errorContext']}")
    print(f"  Recoverable: {input_data['recoverable']}")
    return None

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={"on_error_occurred": on_error_occurred})
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
			OnErrorOccurred: func(input copilot.ErrorOccurredHookInput, inv copilot.HookInvocation) (*copilot.ErrorOccurredHookOutput, error) {
				fmt.Printf("[%s] Error: %s\n", inv.SessionID, input.Error)
				fmt.Printf("  Context: %s\n", input.ErrorContext)
				fmt.Printf("  Recoverable: %v\n", input.Recoverable)
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
        OnErrorOccurred: func(input copilot.ErrorOccurredHookInput, inv copilot.HookInvocation) (*copilot.ErrorOccurredHookOutput, error) {
            fmt.Printf("[%s] Error: %s\n", inv.SessionID, input.Error)
            fmt.Printf("  Context: %s\n", input.ErrorContext)
            fmt.Printf("  Recoverable: %v\n", input.Recoverable)
            return nil, nil
        },
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class ErrorHandlingExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();
        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnErrorOccurred = (input, invocation) =>
                {
                    Console.Error.WriteLine($"[{invocation.SessionId}] Error: {input.Error}");
                    Console.Error.WriteLine($"  Context: {input.ErrorContext}");
                    Console.Error.WriteLine($"  Recoverable: {input.Recoverable}");
                    return Task.FromResult<ErrorOccurredHookOutput?>(null);
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
        OnErrorOccurred = (input, invocation) =>
        {
            Console.Error.WriteLine($"[{invocation.SessionId}] Error: {input.Error}");
            Console.Error.WriteLine($"  Context: {input.ErrorContext}");
            Console.Error.WriteLine($"  Recoverable: {input.Recoverable}");
            return Task.FromResult<ErrorOccurredHookOutput?>(null);
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

// Note: Java SDK does not have an onErrorOccurred hook.
// Use EventErrorPolicy and EventErrorHandler instead:

var session = client.createSession(
    new SessionConfig()
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

session.setEventErrorPolicy(EventErrorPolicy.SUPPRESS_AND_LOG_ERRORS);
session.setEventErrorHandler((event, ex) -> {
    System.err.println("[" + session.getSessionId() + "] Error: " + ex.getMessage());
    System.err.println("  Event: " + event.getType());
});
```

{% endcodetab %}
{% endcodetabs %}

### Send errors to monitoring service

```typescript
import { captureException } from "@sentry/node"; // or your monitoring service

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input, invocation) => {
      captureException(new Error(input.error), {
        tags: {
          sessionId: invocation.sessionId,
          errorContext: input.errorContext,
        },
        extra: {
          error: input.error,
          recoverable: input.recoverable,
          cwd: input.cwd,
        },
      });
      
      return null;
    },
  },
});
```

### User-friendly error messages

```typescript
const ERROR_MESSAGES: Record<string, string> = {
  "model_call": "There was an issue communicating with the AI model. Please try again.",
  "tool_execution": "A tool failed to execute. Please check your inputs and try again.",
  "system": "A system error occurred. Please try again later.",
  "user_input": "There was an issue with your input. Please check and try again.",
};

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      const friendlyMessage = ERROR_MESSAGES[input.errorContext];
      
      if (friendlyMessage) {
        return {
          userNotification: friendlyMessage,
        };
      }
      
      return null;
    },
  },
});
```

### Suppress non-critical errors

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      // Suppress tool execution errors that are recoverable
      if (input.errorContext === "tool_execution" && input.recoverable) {
        console.log(`Suppressed recoverable error: ${input.error}`);
        return { suppressOutput: true };
      }
      return null;
    },
  },
});
```

### Add recovery context

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      if (input.errorContext === "tool_execution") {
        return {
          userNotification: `
The tool failed. Here are some recovery suggestions:
- Check if required dependencies are installed
- Verify file paths are correct
- Try a simpler approach
          `.trim(),
        };
      }
      
      if (input.errorContext === "model_call" && input.error.includes("rate")) {
        return {
          errorHandling: "retry",
          retryCount: 3,
          userNotification: "Rate limit hit. Retrying...",
        };
      }
      
      return null;
    },
  },
});
```

### Track error patterns

```typescript
interface ErrorStats {
  count: number;
  lastOccurred: number;
  contexts: string[];
}

const errorStats = new Map<string, ErrorStats>();

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input, invocation) => {
      const key = `${input.errorContext}:${input.error.substring(0, 50)}`;
      
      const existing = errorStats.get(key) || {
        count: 0,
        lastOccurred: 0,
        contexts: [],
      };
      
      existing.count++;
      existing.lastOccurred = input.timestamp;
      existing.contexts.push(invocation.sessionId);
      
      errorStats.set(key, existing);
      
      // Alert if error is recurring
      if (existing.count >= 5) {
        console.warn(`Recurring error detected: ${key} (${existing.count} times)`);
      }
      
      return null;
    },
  },
});
```

### Alert on critical errors

```typescript
const CRITICAL_CONTEXTS = ["system", "model_call"];

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input, invocation) => {
      if (CRITICAL_CONTEXTS.includes(input.errorContext) && !input.recoverable) {
        await sendAlert({
          level: "critical",
          message: `Critical error in session ${invocation.sessionId}`,
          error: input.error,
          context: input.errorContext,
          timestamp: new Date(input.timestamp).toISOString(),
        });
      }
      
      return null;
    },
  },
});
```

### Combine with other hooks for context

```typescript
const sessionContext = new Map<string, { lastTool?: string; lastPrompt?: string }>();

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input, invocation) => {
      const ctx = sessionContext.get(invocation.sessionId) || {};
      ctx.lastTool = input.toolName;
      sessionContext.set(invocation.sessionId, ctx);
      return { permissionDecision: "allow" };
    },
    
    onUserPromptSubmitted: async (input, invocation) => {
      const ctx = sessionContext.get(invocation.sessionId) || {};
      ctx.lastPrompt = input.prompt.substring(0, 100);
      sessionContext.set(invocation.sessionId, ctx);
      return null;
    },
    
    onErrorOccurred: async (input, invocation) => {
      const ctx = sessionContext.get(invocation.sessionId);
      
      console.error(`Error in session ${invocation.sessionId}:`);
      console.error(`  Error: ${input.error}`);
      console.error(`  Context: ${input.errorContext}`);
      if (ctx?.lastTool) {
        console.error(`  Last tool: ${ctx.lastTool}`);
      }
      if (ctx?.lastPrompt) {
        console.error(`  Last prompt: ${ctx.lastPrompt}...`);
      }
      
      return null;
    },
  },
});
```

## Best practices

1. **Always log errors** - Even if you suppress them from users, keep logs for debugging.

1. **Categorize errors** - Use `errorType` to handle different errors appropriately.

1. **Don't swallow critical errors** - Only suppress errors you're certain are non-critical.

1. **Keep hooks fast** - Error handling shouldn't slow down recovery.

1. **Provide helpful context** - When errors occur, `additionalContext` can help the model recover.

1. **Monitor error patterns** - Track recurring errors to identify systemic issues.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging)
