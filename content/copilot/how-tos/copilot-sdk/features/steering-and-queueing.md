---
title: Steering and queueing
shortTitle: Steering And Queueing
intro: >-
  Two interaction patterns let users send messages while the agent is already
  working: **steering** redirects the agent mid-turn, and **queueing** buffers
  messages for sequential processing after the current turn completes.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-copilot-sdk/steering-and-queueing
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Overview

When a session is actively processing a turn, incoming messages can be delivered in one of two modes via the `mode` field on `MessageOptions`:

| Mode | Behavior | Use case |
|------|----------|----------|
| `"immediate"` (steering) | Injected into the **current** LLM turn | "Actually, don't create that file—use a different approach" |
| `"enqueue"` (queueing) | Queued and processed **after** the current turn finishes | "After this, also fix the tests" |

![Diagram: Sequence diagram showing the described process.](/assets/images/help/copilot/copilot-sdk/features-steering-and-queueing-diagram-0.png)

## Steering (immediate mode)

Steering sends a message that is injected directly into the agent's current turn. The agent sees the message in real time and adjusts its response accordingly—useful for course-correcting without aborting the turn.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});

// Start a long-running task
const msgId = await session.send({
    prompt: "Refactor the authentication module to use sessions",
});

// While the agent is working, steer it
await session.send({
    prompt: "Actually, use JWT tokens instead of sessions",
    mode: "immediate",
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, PermissionDecisionApproveOnce

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(
        on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
        model="gpt-4.1",
    )

    # Start a long-running task
    msg_id = await session.send(
        "Refactor the authentication module to use sessions",
    )

    # While the agent is working, steer it
    await session.send(
        "Actually, use JWT tokens instead of sessions",
        mode="immediate",
    )

    await client.stop()
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
    "context"
    "log"
    copilot "github.com/github/copilot-sdk/go"
    "github.com/github/copilot-sdk/go/rpc"
)

func main() {
    ctx := context.Background()
    client := copilot.NewClient(nil)
    if err := client.Start(ctx); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()

    session, err := client.CreateSession(ctx, &copilot.SessionConfig{
        Model: "gpt-4.1",
        OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
            return &rpc.PermissionDecisionApproveOnce{}, nil
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    // Start a long-running task
    _, err = session.Send(ctx, copilot.MessageOptions{
        Prompt: "Refactor the authentication module to use sessions",
    })
    if err != nil {
        log.Fatal(err)
    }

    // While the agent is working, steer it
    _, err = session.Send(ctx, copilot.MessageOptions{
        Prompt: "Actually, use JWT tokens instead of sessions",
        Mode:   "immediate",
    })
    if err != nil {
        log.Fatal(err)
    }
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;
using GitHub.Copilot.Rpc;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-4.1",
    OnPermissionRequest = (req, inv) =>
        Task.FromResult(PermissionDecision.ApproveOnce()),
});

// Start a long-running task
var msgId = await session.SendAsync(new MessageOptions
{
    Prompt = "Refactor the authentication module to use sessions"
});

// While the agent is working, steer it
await session.SendAsync(new MessageOptions
{
    Prompt = "Actually, use JWT tokens instead of sessions",
    Mode = "immediate"
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

try (var client = new CopilotClient()) {
    client.start().get();

    var session = client.createSession(
        new SessionConfig()
            .setModel("gpt-4.1")
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();

    // Start a long-running task
    session.send(new MessageOptions()
        .setPrompt("Refactor the authentication module to use sessions")
    ).get();

    // While the agent is working, steer it
    session.send(new MessageOptions()
        .setPrompt("Actually, use JWT tokens instead of sessions")
        .setMode("immediate")
    ).get();
}
```

{% endcodetab %}
{% endcodetabs %}

### How steering works internally

1. The message is added to the runtime's `ImmediatePromptProcessor` queue
1. Before the next LLM request within the current turn, the processor injects the message into the conversation
1. The agent sees the steering message as a new user message and adjusts its response
1. If the turn completes before the steering message is processed, it is automatically moved to the regular queue for the next turn

> [!NOTE]
> Steering messages are best-effort within the current turn. If the agent has already committed to a tool call, the steering takes effect after that call completes but still within the same turn.

## Queueing (enqueue mode)

Queueing buffers messages to be processed sequentially after the current turn finishes. Each queued message starts its own full turn. This is the default mode—if you omit `mode`, the SDK uses `"enqueue"`.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});

// Send an initial task
await session.send({ prompt: "Set up the project structure" });

// Queue follow-up tasks while the agent is busy
await session.send({
    prompt: "Add unit tests for the auth module",
    mode: "enqueue",
});

await session.send({
    prompt: "Update the README with setup instructions",
    mode: "enqueue",
});

// Messages are processed in FIFO order after each turn completes
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, PermissionDecisionApproveOnce

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(
        on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
        model="gpt-4.1",
    )

    # Send an initial task
    await session.send("Set up the project structure")

    # Queue follow-up tasks while the agent is busy
    await session.send(
        "Add unit tests for the auth module",
        mode="enqueue",
    )

    await session.send(
        "Update the README with setup instructions",
        mode="enqueue",
    )

    # Messages are processed in FIFO order after each turn completes
    await client.stop()
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

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)
	client.Start(ctx)

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
		Model: "gpt-4.1",
		OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
			return &rpc.PermissionDecisionApproveOnce{}, nil
		},
	})

	session.Send(ctx, copilot.MessageOptions{
		Prompt: "Set up the project structure",
	})

	session.Send(ctx, copilot.MessageOptions{
		Prompt: "Add unit tests for the auth module",
		Mode:   "enqueue",
	})

	session.Send(ctx, copilot.MessageOptions{
		Prompt: "Update the README with setup instructions",
		Mode:   "enqueue",
	})
}
```

```golang
// Send an initial task
session.Send(ctx, copilot.MessageOptions{
    Prompt: "Set up the project structure",
})

// Queue follow-up tasks while the agent is busy
session.Send(ctx, copilot.MessageOptions{
    Prompt: "Add unit tests for the auth module",
    Mode:   "enqueue",
})

session.Send(ctx, copilot.MessageOptions{
    Prompt: "Update the README with setup instructions",
    Mode:   "enqueue",
})

// Messages are processed in FIFO order after each turn completes
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;
using GitHub.Copilot.Rpc;

public static class QueueingExample
{
    public static async Task Main()
    {
        await using var client = new CopilotClient();
        await using var session = await client.CreateSessionAsync(new SessionConfig
        {
            Model = "gpt-4.1",
            OnPermissionRequest = (req, inv) =>
                Task.FromResult(PermissionDecision.ApproveOnce()),
        });

        await session.SendAsync(new MessageOptions
        {
            Prompt = "Set up the project structure"
        });

        await session.SendAsync(new MessageOptions
        {
            Prompt = "Add unit tests for the auth module",
            Mode = "enqueue"
        });

        await session.SendAsync(new MessageOptions
        {
            Prompt = "Update the README with setup instructions",
            Mode = "enqueue"
        });
    }
}
```

```csharp
// Send an initial task
await session.SendAsync(new MessageOptions
{
    Prompt = "Set up the project structure"
});

// Queue follow-up tasks while the agent is busy
await session.SendAsync(new MessageOptions
{
    Prompt = "Add unit tests for the auth module",
    Mode = "enqueue"
});

await session.SendAsync(new MessageOptions
{
    Prompt = "Update the README with setup instructions",
    Mode = "enqueue"
});

// Messages are processed in FIFO order after each turn completes
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

try (var client = new CopilotClient()) {
    client.start().get();

    var session = client.createSession(
        new SessionConfig()
            .setModel("gpt-4.1")
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();

    // Send an initial task
    session.send(new MessageOptions().setPrompt("Set up the project structure")).get();

    // Queue follow-up tasks while the agent is busy
    session.send(new MessageOptions()
        .setPrompt("Add unit tests for the auth module")
        .setMode("enqueue")
    ).get();

    session.send(new MessageOptions()
        .setPrompt("Update the README with setup instructions")
        .setMode("enqueue")
    ).get();

    // Messages are processed in FIFO order after each turn completes
}
```

{% endcodetab %}
{% endcodetabs %}

### How queueing works internally

1. The message is added to the session's `itemQueue` as a `QueuedItem`
1. When the current turn completes and the session becomes idle, `processQueuedItems()` runs
1. Items are dequeued in FIFO order—each message triggers a full agentic turn
1. If a steering message was pending when the turn ended, it is moved to the front of the queue
1. Processing continues until the queue is empty, then the session emits an idle event

## Combining steering and queueing

You can use both patterns together in a single session. Steering affects the current turn while queued messages wait for their own turns:

{% codetabs %}
{% codetab typescript %}

```typescript
const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});

// Start a task
await session.send({ prompt: "Refactor the database layer" });

// Steer the current work
await session.send({
    prompt: "Make sure to keep backwards compatibility with the v1 API",
    mode: "immediate",
});

// Queue a follow-up for after this turn
await session.send({
    prompt: "Now add migration scripts for the schema changes",
    mode: "enqueue",
});
```

{% endcodetab %}
{% codetab python %}

```python
session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    model="gpt-4.1",
)

# Start a task
await session.send("Refactor the database layer")

# Steer the current work
await session.send(
    "Make sure to keep backwards compatibility with the v1 API",
    mode="immediate",
)

# Queue a follow-up for after this turn
await session.send(
    "Now add migration scripts for the schema changes",
    mode="enqueue",
)
```

{% endcodetab %}
{% endcodetabs %}

## Choosing between steering and queueing

| Scenario | Pattern | Why |
|----------|---------|-----|
| Agent is going down the wrong path | **Steering** | Redirects the current turn without losing progress |
| You thought of something the agent should also do | **Queueing** | Doesn't disrupt current work; runs next |
| Agent is about to make a mistake | **Steering** | Intervenes before the mistake is committed |
| You want to chain multiple tasks | **Queueing** | FIFO ordering ensures predictable execution |
| You want to add context to the current task | **Steering** | Agent incorporates it into its current reasoning |
| You want to batch unrelated requests | **Queueing** | Each gets its own full turn with clean context |

## Building a UI with steering and queueing

Here's a pattern for building an interactive UI that supports both modes:

```typescript
import { CopilotClient, CopilotSession } from "@github/copilot-sdk";

interface PendingMessage {
    prompt: string;
    mode: "immediate" | "enqueue";
    sentAt: Date;
}

class InteractiveChat {
    private session: CopilotSession;
    private isProcessing = false;
    private pendingMessages: PendingMessage[] = [];

    constructor(session: CopilotSession) {
        this.session = session;

        session.on((event) => {
            if (event.type === "session.idle") {
                this.isProcessing = false;
                this.onIdle();
            }
            if (event.type === "assistant.message") {
                this.renderMessage(event);
            }
        });
    }

    async sendMessage(prompt: string): Promise<void> {
        if (!this.isProcessing) {
            this.isProcessing = true;
            await this.session.send({ prompt });
            return;
        }

        // Session is busy — let the user choose how to deliver
        // Your UI would present this choice (e.g., buttons, keyboard shortcuts)
    }

    async steer(prompt: string): Promise<void> {
        this.pendingMessages.push({
            prompt,
            mode: "immediate",
            sentAt: new Date(),
        });
        await this.session.send({ prompt, mode: "immediate" });
    }

    async enqueue(prompt: string): Promise<void> {
        this.pendingMessages.push({
            prompt,
            mode: "enqueue",
            sentAt: new Date(),
        });
        await this.session.send({ prompt, mode: "enqueue" });
    }

    private onIdle(): void {
        this.pendingMessages = [];
        // Update UI to show session is ready for new input
    }

    private renderMessage(event: unknown): void {
        // Render assistant message in your UI
    }
}
```

## API reference

### MessageOptions

| Language | Field | Type | Default | Description |
|----------|-------|------|---------|-------------|
| Node.js | `mode` | `"enqueue" \| "immediate"` | `"enqueue"` | Message delivery mode |
| Python | `mode` | `Literal["enqueue", "immediate"]` | `"enqueue"` | Message delivery mode |
| Go | `Mode` | `string` | `"enqueue"` | Message delivery mode |
| .NET | `Mode` | `string?` | `"enqueue"` | Message delivery mode |

### Delivery modes

| Mode | Effect | During active turn | During idle |
|------|--------|-------------------|-------------|
| `"enqueue"` | Queue for next turn | Waits in FIFO queue | Starts a new turn immediately |
| `"immediate"` | Inject into current turn | Injected before next LLM call | Starts a new turn immediately |

> [!NOTE]
> When the session is idle (not processing), both modes behave identically—the message starts a new turn immediately.

## Best practices

1. **Default to queueing**—Use `"enqueue"` (or omit `mode`) for most messages. It's predictable and doesn't risk disrupting in-progress work.

1. **Reserve steering for corrections**—Use `"immediate"` when the agent is actively doing the wrong thing and you need to redirect it before it goes further.

1. **Keep steering messages concise**—The agent needs to quickly understand the course correction. Long, complex steering messages may confuse the current context.

1. **Don't over-steer**—Multiple rapid steering messages can degrade turn quality. If you need to change direction significantly, consider aborting the turn and starting fresh.

1. **Show queue state in your UI**—Display the number of queued messages so users know what's pending. Listen for idle events to clear the display.

1. **Handle the steering-to-queue fallback**—If a steering message arrives after the turn completes, it's automatically moved to the queue. Design your UI to reflect this transition.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started): Set up a session and send messages
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents): Define specialized agents with scoped tools
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/hooks-overview): React to session lifecycle events
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/session-persistence): Resume sessions across restarts
