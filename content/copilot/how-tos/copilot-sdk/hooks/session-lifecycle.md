---
title: Session lifecycle hooks
shortTitle: Session Lifecycle
intro: >-
  Session lifecycle hooks let you respond to session start and end events. Use
  them to:
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-hooks/session-lifecycle
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

* Initialize context when sessions begin
* Clean up resources when sessions end
* Track session metrics and analytics
* Configure session behavior dynamically

## Session start hook {#session-start}

The `onSessionStart` hook is called when a session begins (new or resumed).

### Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
import type { SessionStartHookInput, HookInvocation, SessionStartHookOutput } from "@github/copilot-sdk";
type SessionStartHandler = (
  input: SessionStartHookInput,
  invocation: HookInvocation
) => Promise<SessionStartHookOutput | null | undefined>;
```

```typescript
type SessionStartHandler = (
  input: SessionStartHookInput,
  invocation: HookInvocation
) => Promise<SessionStartHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import SessionStartHookInput, SessionStartHookOutput
from typing import Callable, Awaitable

SessionStartHandler = Callable[
    [SessionStartHookInput, dict[str, str]],
    Awaitable[SessionStartHookOutput | None]
]
```

```python
SessionStartHandler = Callable[
    [SessionStartHookInput, dict[str, str]],
    Awaitable[SessionStartHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type SessionStartHandler func(
    input copilot.SessionStartHookInput,
    invocation copilot.HookInvocation,
) (*copilot.SessionStartHookOutput, error)

func main() {}
```

```golang
type SessionStartHandler func(
    input SessionStartHookInput,
    invocation HookInvocation,
) (*SessionStartHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public delegate Task<SessionStartHookOutput?> SessionStartHandler(
    SessionStartHookInput input,
    HookInvocation invocation);
```

```csharp
public delegate Task<SessionStartHookOutput?> SessionStartHandler(
    SessionStartHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

public class SessionStartSignature {
    SessionStartHandler handler = (SessionStartHookInput input, HookInvocation invocation) ->
        CompletableFuture.completedFuture(null);
    public static void main(String[] args) {}
}
```

```java
@FunctionalInterface
public interface SessionStartHandler {
    CompletableFuture<SessionStartHookOutput> handle(
        SessionStartHookInput input,
        HookInvocation invocation);
}
```

{% endcodetab %}
{% endcodetabs %}

### Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `source` | `"startup"` \| `"resume"` \| `"new"` | How the session was started |
| `initialPrompt` | string \| undefined | The initial prompt if provided |

### Output

| Field | Type | Description |
|-------|------|-------------|
| `additionalContext` | string | Context to add at session start |
| `modifiedConfig` | object | Override session configuration |

### Examples

#### Add project context at start

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      console.log(`Session ${invocation.sessionId} started (${input.source})`);
      
      const projectInfo = await detectProjectType(input.cwd);
      
      return {
        additionalContext: `
This is a ${projectInfo.type} project.
Main language: ${projectInfo.language}
Package manager: ${projectInfo.packageManager}
        `.trim(),
      };
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

async def on_session_start(input_data, invocation):
    print(f"Session {invocation['session_id']} started ({input_data['source']})")
    
    project_info = await detect_project_type(input_data["cwd"])
    
    return {
        "additionalContext": f"""
This is a {project_info['type']} project.
Main language: {project_info['language']}
Package manager: {project_info['packageManager']}
        """.strip()
    }

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={"on_session_start": on_session_start})
```

{% endcodetab %}
{% endcodetabs %}

#### Handle session resume

```typescript
const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      if (input.source === "resume") {
        // Load previous session state
        const previousState = await loadSessionState(invocation.sessionId);
        
        return {
          additionalContext: `
Session resumed. Previous context:
- Last topic: ${previousState.lastTopic}
- Open files: ${previousState.openFiles.join(", ")}
          `.trim(),
        };
      }
      return null;
    },
  },
});
```

#### Load user preferences

```typescript
const session = await client.createSession({
  hooks: {
    onSessionStart: async () => {
      const preferences = await loadUserPreferences();
      
      const contextParts = [];
      
      if (preferences.language) {
        contextParts.push(`Preferred language: ${preferences.language}`);
      }
      if (preferences.codeStyle) {
        contextParts.push(`Code style: ${preferences.codeStyle}`);
      }
      if (preferences.verbosity === "concise") {
        contextParts.push("Keep responses brief and to the point.");
      }
      
      return {
        additionalContext: contextParts.join("\n"),
      };
    },
  },
});
```

## Session end hook {#session-end}

The `onSessionEnd` hook is called when a session ends.

### Hook signature

{% codetabs %}
{% codetab typescript %}

```typescript
type SessionEndHandler = (
  input: SessionEndHookInput,
  invocation: HookInvocation
) => Promise<SessionEndHookOutput | null | undefined>;
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import SessionEndHookInput
from typing import Callable, Awaitable

SessionEndHandler = Callable[
    [SessionEndHookInput, dict[str, str]],
    Awaitable[None]
]
```

```python
SessionEndHandler = Callable[
    [SessionEndHookInput, dict[str, str]],
    Awaitable[SessionEndHookOutput | None]
]
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

type SessionEndHandler func(
    input copilot.SessionEndHookInput,
    invocation copilot.HookInvocation,
) error

func main() {}
```

```golang
type SessionEndHandler func(
    input SessionEndHookInput,
    invocation HookInvocation,
) (*SessionEndHookOutput, error)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
public delegate Task<SessionEndHookOutput?> SessionEndHandler(
    SessionEndHookInput input,
    HookInvocation invocation);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

public class SessionEndSignature {
    SessionEndHandler handler = (SessionEndHookInput input, HookInvocation invocation) ->
        CompletableFuture.completedFuture(null);
    public static void main(String[] args) {}
}
```

```java
@FunctionalInterface
public interface SessionEndHandler {
    CompletableFuture<SessionEndHookOutput> handle(
        SessionEndHookInput input,
        HookInvocation invocation);
}
```

{% endcodetab %}
{% endcodetabs %}

### Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `reason` | string | Why the session ended (see below) |
| `finalMessage` | string \| undefined | The last message from the session |
| `error` | string \| undefined | Error message if session ended due to error |

#### End reasons

| Reason | Description |
|--------|-------------|
| `"complete"` | Session completed normally |
| `"error"` | Session ended due to an error |
| `"abort"` | Session was aborted by user or code |
| `"timeout"` | Session timed out |
| `"user_exit"` | User explicitly ended the session |

### Output

| Field | Type | Description |
|-------|------|-------------|
| `suppressOutput` | boolean | Suppress the final session output |
| `cleanupActions` | string[] | List of cleanup actions to perform |
| `sessionSummary` | string | Summary of the session for logging/analytics |

### Examples

#### Track session metrics

{% codetabs %}
{% codetab typescript %}

```typescript
const sessionStartTimes = new Map<string, number>();

const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      sessionStartTimes.set(invocation.sessionId, input.timestamp);
      return null;
    },
    onSessionEnd: async (input, invocation) => {
      const startTime = sessionStartTimes.get(invocation.sessionId);
      const duration = startTime ? input.timestamp - startTime : 0;
      
      await recordMetrics({
        sessionId: invocation.sessionId,
        duration,
        endReason: input.reason,
      });
      
      sessionStartTimes.delete(invocation.sessionId);
      return null;
    },
  },
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.session import PermissionHandler

session_start_times = {}

async def on_session_start(input_data, invocation):
    session_start_times[invocation["session_id"]] = input_data["timestamp"]
    return None

async def on_session_end(input_data, invocation):
    start_time = session_start_times.get(invocation["session_id"])
    duration = input_data["timestamp"] - start_time if start_time else 0
    
    await record_metrics({
        "session_id": invocation["session_id"],
        "duration": duration,
        "end_reason": input_data["reason"],
    })
    
    session_start_times.pop(invocation["session_id"], None)
    return None

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, hooks={
        "on_session_start": on_session_start,
        "on_session_end": on_session_end,
    })
```

{% endcodetab %}
{% endcodetabs %}

#### Clean up resources

```typescript
const sessionResources = new Map<string, { tempFiles: string[] }>();

const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      sessionResources.set(invocation.sessionId, { tempFiles: [] });
      return null;
    },
    onSessionEnd: async (input, invocation) => {
      const resources = sessionResources.get(invocation.sessionId);
      
      if (resources) {
        // Clean up temp files
        for (const file of resources.tempFiles) {
          await fs.unlink(file).catch(() => {});
        }
        sessionResources.delete(invocation.sessionId);
      }
      
      console.log(`Session ${invocation.sessionId} ended: ${input.reason}`);
      return null;
    },
  },
});
```

#### Save session state for resume

```typescript
const session = await client.createSession({
  hooks: {
    onSessionEnd: async (input, invocation) => {
      if (input.reason !== "error") {
        // Save state for potential resume
        await saveSessionState(invocation.sessionId, {
          endTime: input.timestamp,
          cwd: input.cwd,
          reason: input.reason,
        });
      }
      return null;
    },
  },
});
```

#### Log session summary

```typescript
const sessionData: Record<string, { prompts: number; tools: number; startTime: number }> = {};

const session = await client.createSession({
  hooks: {
    onSessionStart: async (input, invocation) => {
      sessionData[invocation.sessionId] = { 
        prompts: 0, 
        tools: 0, 
        startTime: input.timestamp 
      };
      return null;
    },
    onUserPromptSubmitted: async (_, invocation) => {
      sessionData[invocation.sessionId].prompts++;
      return null;
    },
    onPreToolUse: async (_, invocation) => {
      sessionData[invocation.sessionId].tools++;
      return { permissionDecision: "allow" };
    },
    onSessionEnd: async (input, invocation) => {
      const data = sessionData[invocation.sessionId];
      console.log(`
Session Summary:
  ID: ${invocation.sessionId}
  Duration: ${(input.timestamp - data.startTime) / 1000}s
  Prompts: ${data.prompts}
  Tool calls: ${data.tools}
  End reason: ${input.reason}
      `.trim());
      
      delete sessionData[invocation.sessionId];
      return null;
    },
  },
});
```

## Best practices

1. **Keep `onSessionStart` fast** - Users are waiting for the session to be ready.

1. **Handle all end reasons** - Don't assume sessions end cleanly; handle errors and aborts.

1. **Clean up resources** - Use `onSessionEnd` to free any resources allocated during the session.

1. **Store minimal state** - If tracking session data, keep it lightweight.

1. **Make cleanup idempotent** - `onSessionEnd` might not be called if the process crashes.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/error-handling)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/debugging)
