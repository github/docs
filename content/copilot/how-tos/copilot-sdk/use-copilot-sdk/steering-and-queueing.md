---
title: Steering and queueing messages in the Copilot SDK
shortTitle: Steering and queueing
intro: Send messages to an active {% data variables.copilot.copilot_sdk_short %} session to redirect it mid-turn or queue follow-up tasks.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Two interaction patterns let users send messages while the agent is already working: **steering** redirects the agent mid-turn, and **queueing** buffers messages for sequential (first-in-first-out (FIFO)) processing after the current turn completes.

When a session is actively processing a turn, incoming messages can be delivered in one of two modes via the `mode` field on `MessageOptions`:

| Mode | Behavior | Use case |
|------|----------|----------|
| `"immediate"` (steering) | Injected into the **current** LLM turn | "Actually, don't create that file—use a different approach" |
| `"enqueue"` (queueing) | Queued and processed **after** the current turn finishes | "After this, also fix the tests" |

For a sequence diagram of the steering and queueing flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/steering-and-queueing.md#overview).

## Steering (immediate mode)

Steering sends a message that is injected directly into the agent's current turn. The agent sees the message in real time and adjusts its response accordingly—useful for course-correcting without aborting the turn.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
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

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/steering-and-queueing.md#steering-immediate-mode).

### How steering works internally

1. The message is added to the runtime's `ImmediatePromptProcessor` queue.
1. Before the next LLM request within the current turn, the processor injects the message into the conversation.
1. The agent sees the steering message as a new user message and adjusts its response.
1. If the turn completes before the steering message is processed, it is automatically moved to the regular queue for the next turn.

> [!NOTE]
> Steering messages are best-effort within the current turn. If the agent has already committed to a tool call, the steering takes effect after that call completes but still within the same turn.

## Queueing (enqueue mode)

Queueing buffers messages to be processed sequentially after the current turn finishes. Each queued message starts its own full turn. This is the default mode—if you omit `mode`, the SDK uses `"enqueue"`.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
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

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/steering-and-queueing.md#queueing-enqueue-mode).

### How queueing works internally

1. The message is added to the session's `itemQueue` as a `QueuedItem`.
1. When the current turn completes and the session becomes idle, `processQueuedItems()` runs.
1. Items are dequeued in FIFO order—each message triggers a full agentic turn.
1. If a steering message was pending when the turn ended, it is moved to the front of the queue.
1. Processing continues until the queue is empty, then the session emits an idle event.

## Combining steering and queueing

You can use both patterns together in a single session. Steering affects the current turn while queued messages wait for their own turns:

```typescript
const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
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

For an example in Python, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/steering-and-queueing.md#combining-steering-and-queueing).

## Choosing between steering and queueing

| Scenario | Pattern | Why |
|----------|---------|-----|
| Agent is going down the wrong path | Steering | Redirects the current turn without losing progress |
| You thought of something the agent should also do | Queueing | Doesn't disrupt current work; runs next |
| Agent is about to make a mistake | Steering | Intervenes before the mistake is committed |
| You want to chain multiple tasks | Queueing | FIFO ordering ensures predictable execution |
| You want to add context to the current task | Steering | Agent incorporates it into its current reasoning |
| You want to batch unrelated requests | Queueing | Each gets its own full turn with clean context |

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

You can use the {% data variables.copilot.copilot_sdk_short %} session API to steer and queue sessions.

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

* **Default to queueing**—Use `"enqueue"` (or omit `mode`) for most messages. It's predictable and doesn't risk disrupting in-progress work.
* **Reserve steering for corrections**—Use `"immediate"` when the agent is actively doing the wrong thing and you need to redirect it before it goes further.
* **Keep steering messages concise**—The agent needs to quickly understand the course correction. Long, complex steering messages may confuse the current context.
* **Don't over-steer**—Multiple rapid steering messages can degrade turn quality. If you need to change direction significantly, consider aborting the turn and starting fresh.
* **Show queue state in your UI**—Display the number of queued messages so users know what's pending. Listen for idle events to clear the display.
* **Handle the steering-to-queue fallback**—If a steering message arrives after the turn completes, it's automatically moved to the queue. Design your UI to reflect this transition.
