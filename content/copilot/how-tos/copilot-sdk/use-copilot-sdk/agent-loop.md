---
title: Understanding the agent loop
shortTitle: Agent loop
intro: 'Learn how {% data variables.copilot.copilot_cli_short %} processes a user message end-to-end, from prompt to `session.idle`.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

## Architecture

![Diagram showing the flow from your app to the SDK session, to the Copilot CLI, to the LLM, and back.](/assets/images/help/copilot/copilot-sdk/agent-loop-architecture.png)

The **{% data variables.copilot.copilot_sdk_short %}** is a transport layer—it sends your prompt to **{% data variables.copilot.copilot_cli_short %}** over JSON-RPC and surfaces events back to your app. The **CLI** is the orchestrator that runs the agentic tool-use loop, making one or more LLM API calls until the task is done.

## The tool-use loop

When you call `session.send({ prompt })`, {% data variables.copilot.copilot_cli_short %} enters a loop:

![Diagram of the tool-use loop: prompt to LLM call, tool execution if requested, otherwise session.idle.](/assets/images/help/copilot/copilot-sdk/agent-loop-tool-use-loop.png)

The model sees the **full conversation history** on each call—system prompt, user message, and all prior tool calls and results.

Each iteration of this loop is exactly one LLM API call, visible as one `assistant.turn_start` / `assistant.turn_end` pair in the event log. There are no hidden calls.

## Turns

A **turn** is a single LLM API call and its consequences:

1. {% data variables.copilot.copilot_cli_short %} sends the conversation history to the LLM
1. The LLM responds (possibly with tool requests)
1. If tools were requested, {% data variables.copilot.copilot_cli_short %} executes them
1. `assistant.turn_end` is emitted

A single user message typically results in **multiple turns**. For example, a question like "how does X work in this codebase?" might produce:

| Turn | What the model does | toolRequests? |
|------|-------------------|---------------|
| 1 | Calls `grep` and `glob` to search the codebase | Yes |
| 2 | Reads specific files based on search results | Yes |
| 3 | Reads more files for deeper context | Yes |
| 4 | Produces the final text answer | No (loop ends) |

The model decides on each turn whether to request more tools or produce a final answer. Each call sees the **full accumulated context** (all prior tool calls and results), so it can make an informed decision about whether it has enough information.

## Event flow for a multi-turn interaction

![Diagram of three turns in an agent interaction, each with start, message, tool, and end events, ending in session.idle.](/assets/images/help/copilot/copilot-sdk/agent-loop-event-flow.png)

## Who triggers each turn

| Actor | Responsibility |
|-------|---------------|
| **Your app** | Sends the initial prompt via `session.send()` |
| **{% data variables.copilot.copilot_cli_short %}** | Runs the tool-use loop—executes tools and feeds results back to the LLM for the next turn |
| **LLM** | Decides whether to request tools (continue looping) or produce a final response (stop) |
| **{% data variables.copilot.copilot_sdk_short %}** | Passes events through; does not control the loop |

{% data variables.copilot.copilot_cli_short %} is purely mechanical: "model asked for tools → execute → call model again." The **model** is the decision-maker for when to stop.

## `session.idle` vs `session.task_complete`

These are two different completion signals with very different guarantees.

### `session.idle`

* **Always emitted** when the tool-use loop ends
* **Ephemeral**: not persisted to disk, not replayed on session resume
* **Means:** "the agent has stopped processing and is ready for the next message"
* **Use this** as your reliable "done" signal

The {% data variables.copilot.copilot_sdk_short %}'s `sendAndWait()` method waits for this event:

```typescript
// Blocks until session.idle fires
const response = await session.sendAndWait({ prompt: "Fix the bug" });
```

### `session.task_complete`

* **Optionally emitted**: requires the model to explicitly signal it
* **Persisted**: saved to the session event log on disk
* **Means:** "the agent considers the overall task fulfilled"
* Carries an optional `summary` field

```typescript
session.on("session.task_complete", (event) => {
    console.log("Task done:", event.data.summary);
});
```

### Autopilot mode

In **autopilot mode** (headless or autonomous operation), {% data variables.copilot.copilot_cli_short %} actively tracks whether the model has called `task_complete`. If the tool-use loop ends without it, {% data variables.copilot.copilot_cli_short %} injects a synthetic user message nudging the model to continue working.

This creates a **two-level completion mechanism** in autopilot:

1. The model calls `task_complete` with a summary → {% data variables.copilot.copilot_cli_short %} emits `session.task_complete` → done
1. The model stops without calling it → {% data variables.copilot.copilot_cli_short %} nudges → model continues or calls `task_complete`

### Why `task_complete` might not appear

In **interactive mode** (normal chat), {% data variables.copilot.copilot_cli_short %} does not nudge for `task_complete`. The model may skip it entirely. Common reasons:

* **Conversational Q&A**: the model answers a question and simply stops—there's no discrete "task" to complete
* **Model discretion**: the model produces a final text response without calling the task-complete signal
* **Interrupted sessions**: the session ends before the model reaches a completion point

{% data variables.copilot.copilot_cli_short %} emits `session.idle` regardless, because it's a mechanical signal (the loop ended), not a semantic one (the model thinks it's done).

### Which signal to use

| Use case | Signal |
|----------|--------|
| Wait for the agent to finish processing | `session.idle` |
| Know when a coding task is done | `session.task_complete` (best-effort) |
| Timeout and error handling | `session.idle` + `session.error` |

## Counting LLM calls

The number of `assistant.turn_start` / `assistant.turn_end` pairs in the event log equals the total number of LLM API calls made. There are no hidden calls for planning, evaluation, or completion checking.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/streaming-events)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/session-persistence)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/working-with-hooks)
