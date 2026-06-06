---
title: User prompt submitted hook
shortTitle: User Prompt Submitted
intro: >-
  The `onUserPromptSubmitted` hook is called when a user submits a message. Use
  it to:
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/user-prompt-submitted
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

* Modify or enhance user prompts
* Add context before processing
* Filter or validate user input
* Implement prompt templates

## Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
import type { UserPromptSubmittedHookInput, HookInvocation, UserPromptSubmittedHookOutput } from "@github/copilot-sdk";
type UserPromptSubmittedHandler = (
  input: UserPromptSubmittedHookInput,
  invocation: HookInvocation
) => Promise<UserPromptSubmittedHookOutput | null | undefined>;
```

```typescript
type UserPromptSubmittedHandler = (
  input: UserPromptSubmittedHookInput,
  invocation: HookInvocation
) => Promise<UserPromptSubmittedHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import UserPromptSubmittedHookInput, UserPromptSubmittedHookOutput
from typing import Callable, Awaitable

UserPromptSubmittedHandler = Callable[
    [UserPromptSubmittedHookInput, dict[str, str]],
    Awaitable[UserPromptSubmittedHookOutput | None]
]
```

```python
UserPromptSubmittedHandler = Callable[
    [UserPromptSubmittedHookInput, dict[str, str]],
    Awaitable[UserPromptSubmittedHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type UserPromptSubmittedHandler func(
    input copilot.UserPromptSubmittedHookInput,
    invocation copilot.HookInvocation,
) (*copilot.UserPromptSubmittedHookOutput, error)

func main() {}
```

```golang
type UserPromptSubmittedHandler func(
    input UserPromptSubmittedHookInput,
    invocation HookInvocation,
) (*UserPromptSubmittedHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public delegate Task<UserPromptSubmittedHookOutput?> UserPromptSubmittedHandler(
    UserPromptSubmittedHookInput input,
    HookInvocation invocation);
```

```csharp
public delegate Task<UserPromptSubmittedHookOutput?> UserPromptSubmittedHandler(
    UserPromptSubmittedHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

public class UserPromptSubmittedSignature {
    UserPromptSubmittedHandler handler = (UserPromptSubmittedHookInput input, HookInvocation invocation) ->
        CompletableFuture.completedFuture(null);
    public static void main(String[] args) {}
}
```

```java
@FunctionalInterface
public interface UserPromptSubmittedHandler {
    CompletableFuture<UserPromptSubmittedHookOutput> handle(
        UserPromptSubmittedHookInput input,
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
| `prompt` | string | The user's submitted prompt |

## Output

Return `null` or `undefined` to use the prompt unchanged. Otherwise, return an object with any of these fields:

| Field | Type | Description |
|-------|------|-------------|
| `modifiedPrompt` | string | Modified prompt to use instead of original |
| `additionalContext` | string | Extra context added to the conversation |
| `suppressOutput` | boolean | If true, suppress the assistant's response output |

## Examples

### Log all user prompts

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input, invocation) => {
      console.log(`[${invocation.sessionId}] User: ${input.prompt}`);
      return null; // Pass through unchanged
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

async def on_user_prompt_submitted(input_data, invocation):
    print(f"[{invocation['session_id']}] User: {input_data['prompt']}")
    return None

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={"on_user_prompt_submitted": on_user_prompt_submitted})
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
			OnUserPromptSubmitted: func(input copilot.UserPromptSubmittedHookInput, inv copilot.HookInvocation) (*copilot.UserPromptSubmittedHookOutput, error) {
				fmt.Printf("[%s] User: %s\n", inv.SessionID, input.Prompt)
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
        OnUserPromptSubmitted: func(input copilot.UserPromptSubmittedHookInput, inv copilot.HookInvocation) (*copilot.UserPromptSubmittedHookOutput, error) {
            fmt.Printf("[%s] User: %s\n", inv.SessionID, input.Prompt)
            return nil, nil
        },
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class UserPromptSubmittedExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();
        var session = await client.CreateSessionAsync(new SessionConfig
        {
            Hooks = new SessionHooks
            {
                OnUserPromptSubmitted = (input, invocation) =>
                {
                    Console.WriteLine($"[{invocation.SessionId}] User: {input.Prompt}");
                    return Task.FromResult<UserPromptSubmittedHookOutput?>(null);
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
        OnUserPromptSubmitted = (input, invocation) =>
        {
            Console.WriteLine($"[{invocation.SessionId}] User: {input.Prompt}");
            return Task.FromResult<UserPromptSubmittedHookOutput?>(null);
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
    .setOnUserPromptSubmitted((input, invocation) -> {
        System.out.println("[" + invocation.getSessionId() + "] User: " + input.prompt());
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

### Add project context

```typescript
const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const projectInfo = await getProjectInfo();
      
      return {
        additionalContext: `
Project: ${projectInfo.name}
Language: ${projectInfo.language}
Framework: ${projectInfo.framework}
        `.trim(),
      };
    },
  },
});
```

### Expand shorthand commands

```typescript
const SHORTCUTS: Record<string, string> = {
  "/fix": "Please fix the errors in the code",
  "/explain": "Please explain this code in detail",
  "/test": "Please write unit tests for this code",
  "/refactor": "Please refactor this code to improve readability and maintainability",
};

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const [shortcut, expansion] of Object.entries(SHORTCUTS)) {
        if (input.prompt.startsWith(shortcut)) {
          const rest = input.prompt.slice(shortcut.length).trim();
          return {
            modifiedPrompt: `${expansion}${rest ? `: ${rest}` : ""}`,
          };
        }
      }
      return null;
    },
  },
});
```

### Content filtering

```typescript
const BLOCKED_PATTERNS = [
  /password\s*[:=]/i,
  /api[_-]?key\s*[:=]/i,
  /secret\s*[:=]/i,
];

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const pattern of BLOCKED_PATTERNS) {
        if (pattern.test(input.prompt)) {
          // Replace the prompt with a warning message
          return {
            modifiedPrompt: "[Content blocked: Please don't include sensitive credentials in your prompts. Use environment variables instead.]",
            suppressOutput: true,
          };
        }
      }
      return null;
    },
  },
});
```

### Enforce prompt length limits

```typescript
const MAX_PROMPT_LENGTH = 10000;

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      if (input.prompt.length > MAX_PROMPT_LENGTH) {
        // Truncate the prompt and add context
        return {
          modifiedPrompt: input.prompt.substring(0, MAX_PROMPT_LENGTH),
          additionalContext: `Note: The original prompt was ${input.prompt.length} characters and was truncated to ${MAX_PROMPT_LENGTH} characters.`,
        };
      }
      return null;
    },
  },
});
```

### Add user preferences

```typescript
interface UserPreferences {
  codeStyle: "concise" | "verbose";
  preferredLanguage: string;
  experienceLevel: "beginner" | "intermediate" | "expert";
}

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const prefs: UserPreferences = await loadUserPreferences();
      
      const contextParts = [];
      
      if (prefs.codeStyle === "concise") {
        contextParts.push("User prefers concise code with minimal comments.");
      } else {
        contextParts.push("User prefers verbose code with detailed comments.");
      }
      
      if (prefs.experienceLevel === "beginner") {
        contextParts.push("Explain concepts in simple terms.");
      }
      
      return {
        additionalContext: contextParts.join(" "),
      };
    },
  },
});
```

### Rate limiting

```typescript
const promptTimestamps: number[] = [];
const RATE_LIMIT = 10; // prompts
const RATE_WINDOW = 60000; // 1 minute

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const now = Date.now();
      
      // Remove timestamps outside the window
      while (promptTimestamps.length > 0 && promptTimestamps[0] < now - RATE_WINDOW) {
        promptTimestamps.shift();
      }
      
      if (promptTimestamps.length >= RATE_LIMIT) {
        return {
          reject: true,
          rejectReason: `Rate limit exceeded. Please wait before sending more prompts.`,
        };
      }
      
      promptTimestamps.push(now);
      return null;
    },
  },
});
```

### Prompt templates

```typescript
const TEMPLATES: Record<string, (args: string) => string> = {
  "bug:": (desc) => `I found a bug: ${desc}

Please help me:
1. Understand why this is happening
2. Suggest a fix
3. Explain how to prevent similar bugs`,

  "feature:": (desc) => `I want to implement this feature: ${desc}

Please:
1. Outline the implementation approach
2. Identify potential challenges
3. Provide sample code`,
};

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const [prefix, template] of Object.entries(TEMPLATES)) {
        if (input.prompt.toLowerCase().startsWith(prefix)) {
          const args = input.prompt.slice(prefix.length).trim();
          return {
            modifiedPrompt: template(args),
          };
        }
      }
      return null;
    },
  },
});
```

## Best practices

1. **Preserve user intent** - When modifying prompts, ensure the core intent remains clear.

1. **Be transparent about modifications** - If you significantly change a prompt, consider logging or notifying the user.

1. **Use `additionalContext` over `modifiedPrompt`** - Adding context is less intrusive than rewriting the prompt.

1. **Provide clear rejection reasons** - When rejecting prompts, explain why and how to fix it.

1. **Keep processing fast** - This hook runs on every user message. Avoid slow operations.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/pre-tool-use)
