---
title: Streaming events in the Copilot SDK
shortTitle: Streaming events
intro: Reference session events emitted by the {% data variables.copilot.copilot_sdk_short %} and the data fields each event contains.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Every action the {% data variables.product.prodname_copilot_short %} agent takes—thinking, writing code, running tools—is emitted as a **session event** you can subscribe to. This article is a field-level reference for each event type so you know exactly what data to expect.

When `streaming: true` is set on a session, the SDK emits **ephemeral** events in real time (deltas, progress updates) alongside **persisted** events (complete messages, tool results). All events share a common envelope and carry a `data` payload whose shape depends on the event `type`. For a sequence diagram of the full event flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/streaming-events.md#overview).

| Concept | Description |
|---------|-------------|
| **Ephemeral event** | Transient; streamed in real time but **not** persisted to the session log. Not replayed on session resume. |
| **Persisted event** | Saved to the session event log on disk. Replayed when resuming a session. |
| **Delta event** | An ephemeral streaming chunk (text or reasoning). Accumulate deltas to build the complete content. |
| **`parentId` chain** | Each event's `parentId` points to the previous event, forming a linked list you can walk. |

## Event envelope

Every session event, regardless of type, includes these fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` (UUID v4) | Unique event identifier |
| `timestamp` | `string` (ISO 8601) | When the event was created |
| `parentId` | `string \| null` | ID of the previous event in the chain; `null` for the first event |
| `ephemeral` | `boolean?` | `true` for transient events; absent or `false` for persisted events |
| `type` | `string` | Event type discriminator (see tables below) |
| `data` | `object` | Event-specific payload |

## Subscribing to events

```typescript
// All events
session.on((event) => {
    console.log(event.type, event.data);
});

// Specific event type — data is narrowed automatically
session.on("assistant.message_delta", (event) => {
    process.stdout.write(event.data.deltaContent);
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/streaming-events.md#subscribing-to-events).

> [!TIP]
> **Python / Go:** These SDKs use a single `Data` class/struct with all possible fields as optional/nullable. Only the fields listed in the tables below are populated for each event type—the rest will be `None` / `nil`.
>
> **.NET:** The .NET SDK uses separate, strongly-typed data classes per event (for example, `AssistantMessageDeltaData`), so only the relevant fields exist on each type.
>
> **TypeScript:** The TypeScript SDK uses a discriminated union—when you match on `event.type`, the `data` payload is automatically narrowed to the correct shape.

## Assistant events

These events track the agent's response lifecycle—from turn start through streaming chunks to the final message.

### `assistant.turn_start`

Emitted when the agent begins processing a turn.

| Data field | Type | Required | Description                                           |
|------------|------|----------|-------------------------------------------------------|
| `turnId` | `string` | ✅ | Turn identifier (typically a stringified turn number) |
| `interactionId` | `string` | | Interaction identifier for telemetry correlation      |

### `assistant.intent`

Ephemeral. Short description of what the agent is currently doing, updated as it works.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `intent` | `string` | ✅ | Human-readable intent (for example, "Exploring codebase") |

### `assistant.reasoning`

Complete extended thinking block from the model. Emitted after reasoning is finished.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `reasoningId` | `string` | ✅ | Unique identifier for this reasoning block |
| `content` | `string` | ✅ | The complete extended thinking text |

### `assistant.reasoning_delta`

Ephemeral. Incremental chunk of the model's extended thinking, streamed in real time.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `reasoningId` | `string` | ✅ | Matches the corresponding `assistant.reasoning` event |
| `deltaContent` | `string` | ✅ | Text chunk to append to reasoning content |

### `assistant.message`

The assistant's complete response for this LLM call. May include tool invocation requests.

| Data field | Type | Required | Description                                                   |
|------------|------|----------|---------------------------------------------------------------|
| `messageId` | `string` | ✅ | Unique identifier for this message                            |
| `content` | `string` | ✅ | The assistant's text response                                 |
| `toolRequests` | `ToolRequest[]` | | Tool calls the assistant wants to make (see below)            |
| `reasoningOpaque` | `string` | | Encrypted extended thinking (Anthropic models); session-bound |
| `reasoningText` | `string` | | Readable reasoning text from extended thinking                |
| `encryptedContent` | `string` | | Encrypted reasoning content (OpenAI models); session-bound    |
| `phase` | `string` | | Generation phase (for example, `"thinking"` vs `"response"`)  |
| `outputTokens` | `number` | | Actual output token count from the API response               |
| `interactionId` | `string` | | Interaction identifier for telemetry                          |
| `parentToolCallId` | `string` | | Set when this message originates from a sub-agent             |

**`ToolRequest` fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Unique ID for this tool call |
| `name` | `string` | ✅ | Tool name (for example, `"bash"`, `"edit"`, `"grep"`) |
| `arguments` | `object` | | Parsed arguments for the tool |
| `type` | `"function" \| "custom"` | | Call type; defaults to `"function"` when absent |

### `assistant.message_delta`

Ephemeral. Incremental chunk of the assistant's text response, streamed in real time.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `messageId` | `string` | ✅ | Matches the corresponding `assistant.message` event |
| `deltaContent` | `string` | ✅ | Text chunk to append to the message |
| `parentToolCallId` | `string` | | Set when originating from a sub-agent |

### `assistant.turn_end`

Emitted when the agent finishes a turn (all tool executions complete, final response delivered).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `turnId` | `string` | ✅ | Matches the corresponding `assistant.turn_start` event |

### `assistant.usage`

Ephemeral. Token usage and cost information for an individual API call.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `model` | `string` | ✅ | Model identifier (for example, `"gpt-4.1"`) |
| `inputTokens` | `number` | | Input tokens consumed |
| `outputTokens` | `number` | | Output tokens produced |
| `cacheReadTokens` | `number` | | Tokens read from prompt cache |
| `cacheWriteTokens` | `number` | | Tokens written to prompt cache |
| `cost` | `number` | | Model multiplier cost for billing |
| `duration` | `number` | | API call duration in milliseconds |
| `initiator` | `string` | | What triggered this call (for example, `"sub-agent"`); absent for user-initiated |
| `apiCallId` | `string` | | Completion ID from the provider (for example, `chatcmpl-abc123`) |
| `providerCallId` | `string` | | {% data variables.product.github %} request tracing ID (`x-github-request-id`) |
| `parentToolCallId` | `string` | | Set when usage originates from a sub-agent |
| `quotaSnapshots` | `Record<string, QuotaSnapshot>` | | Per-quota resource usage, keyed by quota identifier |
| `copilotUsage` | `CopilotUsage` | | Itemized token cost breakdown from the API |

### `assistant.streaming_delta`

Ephemeral. Low-level network progress indicator—total bytes received from the streaming API response.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `totalResponseSizeBytes` | `number` | ✅ | Cumulative bytes received so far |

## Tool execution events

These events track the full lifecycle of each tool invocation—from the model requesting a tool call through execution to completion.

### `tool.execution_start`

Emitted when a tool begins executing.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Unique identifier for this tool call |
| `toolName` | `string` | ✅ | Name of the tool (for example, `"bash"`, `"edit"`, `"grep"`) |
| `arguments` | `object` | | Parsed arguments passed to the tool |
| `mcpServerName` | `string` | | MCP server name, when the tool is provided by an MCP server |
| `mcpToolName` | `string` | | Original tool name on the MCP server |
| `parentToolCallId` | `string` | | Set when invoked by a sub-agent |

### `tool.execution_partial_result`

Ephemeral. Incremental output from a running tool (for example, streaming bash output).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Matches the corresponding `tool.execution_start` |
| `partialOutput` | `string` | ✅ | Incremental output chunk |

### `tool.execution_progress`

Ephemeral. Human-readable progress status from a running tool (for example, MCP server progress notifications).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Matches the corresponding `tool.execution_start` |
| `progressMessage` | `string` | ✅ | Progress status message |

### `tool.execution_complete`

Emitted when a tool finishes executing—successfully or with an error.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Matches the corresponding `tool.execution_start` |
| `success` | `boolean` | ✅ | Whether execution succeeded |
| `model` | `string` | | Model that generated this tool call |
| `interactionId` | `string` | | Interaction identifier |
| `isUserRequested` | `boolean` | | `true` when the user explicitly requested this tool call |
| `result` | `Result` | | Present on success (see below) |
| `error` | `{ message, code? }` | | Present on failure |
| `toolTelemetry` | `object` | | Tool-specific telemetry |
| `parentToolCallId` | `string` | | Set when invoked by a sub-agent |

**`Result` fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | `string` | ✅ | Concise result sent to the LLM (may be truncated for token efficiency) |
| `detailedContent` | `string` | | Full result for display, preserving complete content like diffs |
| `contents` | `ContentBlock[]` | | Structured content blocks (text, terminal, image, audio, resource) |

### `tool.user_requested`

Emitted when the user explicitly requests a tool invocation (rather than the model choosing to call one).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Unique identifier for this tool call |
| `toolName` | `string` | ✅ | Name of the tool the user wants to invoke |
| `arguments` | `object` | | Arguments for the invocation |

## Session lifecycle events

### `session.idle`

Ephemeral. The agent has finished all processing and is ready for the next message. This is the signal that a turn is fully complete.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `backgroundTasks` | `BackgroundTasks` | | Background agents/shells still running when the agent became idle |

### `session.error`

An error occurred during session processing.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `errorType` | `string` | ✅ | Error category (for example, `"authentication"`, `"quota"`, `"rate_limit"`) |
| `message` | `string` | ✅ | Human-readable error message |
| `stack` | `string` | | Error stack trace |
| `statusCode` | `number` | | HTTP status code from the upstream request |
| `providerCallId` | `string` | | {% data variables.product.github %} request tracing ID for server-side log correlation |

### `session.compaction_start`

Context window compaction has begun. Data payload is empty (`{}`).

### `session.compaction_complete`

Context window compaction finished.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `success` | `boolean` | ✅ | Whether compaction succeeded |
| `error` | `string` | | Error message if compaction failed |
| `preCompactionTokens` | `number` | | Tokens before compaction |
| `postCompactionTokens` | `number` | | Tokens after compaction |
| `preCompactionMessagesLength` | `number` | | Message count before compaction |
| `messagesRemoved` | `number` | | Messages removed |
| `tokensRemoved` | `number` | | Tokens removed |
| `summaryContent` | `string` | | LLM-generated summary of compacted history |
| `checkpointNumber` | `number` | | Checkpoint snapshot number created for recovery |
| `checkpointPath` | `string` | | File path where the checkpoint was stored |
| `compactionTokensUsed` | `{ input, output, cachedInput }` | | Token usage for the compaction LLM call |
| `requestId` | `string` | | {% data variables.product.github %} request tracing ID for the compaction call |

### `session.title_changed`

Ephemeral. The session's auto-generated title was updated.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | `string` | ✅ | New session title |

### `session.context_changed`

The session's working directory or repository context changed.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `cwd` | `string` | ✅ | Current working directory |
| `gitRoot` | `string` | | Git repository root |
| `repository` | `string` | | Repository in `"owner/name"` format |
| `branch` | `string` | | Current Git branch |

### `session.usage_info`

Ephemeral. Context window utilization snapshot.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `tokenLimit` | `number` | ✅ | Maximum tokens for the model's context window |
| `currentTokens` | `number` | ✅ | Current tokens in the context window |
| `messagesLength` | `number` | ✅ | Current message count in the conversation |

### `session.task_complete`

The agent has completed its assigned task.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `summary` | `string` | | Summary of the completed task |

### `session.shutdown`

The session has ended.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `shutdownType` | `"routine" \| "error"` | ✅ | Normal shutdown or crash |
| `errorReason` | `string` | | Error description when `shutdownType` is `"error"` |
| `totalPremiumRequests` | `number` | ✅ | Total premium API requests used |
| `totalApiDurationMs` | `number` | ✅ | Cumulative API call time in milliseconds |
| `sessionStartTime` | `number` | ✅ | Unix timestamp (ms) when the session started |
| `codeChanges` | `{ linesAdded, linesRemoved, filesModified }` | ✅ | Aggregate code change metrics |
| `modelMetrics` | `Record<string, ModelMetric>` | ✅ | Per-model usage breakdown |
| `currentModel` | `string` | | Model selected at shutdown time |

## Permission and user input events

These events are emitted when the agent needs approval or input from the user before continuing.

### `permission.requested`

Ephemeral. The agent needs permission to perform an action (run a command, write a file, etc.).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToPermission()` |
| `permissionRequest` | `PermissionRequest` | ✅ | Details of the permission being requested |

The `permissionRequest` is a discriminated union on `kind`:

| `kind` | Key fields | Description |
|--------|------------|-------------|
| `"shell"` | `fullCommandText`, `intention`, `commands[]`, `possiblePaths[]` | Execute a shell command |
| `"write"` | `fileName`, `diff`, `intention`, `newFileContents?` | Write/modify a file |
| `"read"` | `path`, `intention` | Read a file or directory |
| `"mcp"` | `serverName`, `toolName`, `toolTitle`, `args?`, `readOnly` | Call an MCP tool |
| `"url"` | `url`, `intention` | Fetch a URL |
| `"memory"` | `subject`, `fact`, `citations` | Store a memory |
| `"custom-tool"` | `toolName`, `toolDescription`, `args?` | Call a custom tool |

All `kind` variants also include an optional `toolCallId` linking back to the tool call that triggered the request.

### `permission.completed`

Ephemeral. A permission request was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `permission.requested` |
| `result.kind` | `string` | ✅ | One of: `"approved"`, `"denied-by-rules"`, `"denied-interactively-by-user"`, `"denied-no-approval-rule-and-could-not-request-from-user"`, `"denied-by-content-exclusion-policy"` |

### `user_input.requested`

Ephemeral. The agent is asking the user a question.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToUserInput()` |
| `question` | `string` | ✅ | The question to present to the user |
| `choices` | `string[]` | | Predefined choices for the user |
| `allowFreeform` | `boolean` | | Whether free-form text input is allowed |

### `user_input.completed`

Ephemeral. A user input request was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `user_input.requested` |

### `elicitation.requested`

Ephemeral. The agent needs structured form input from the user (MCP elicitation protocol).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToElicitation()` |
| `message` | `string` | ✅ | Description of what information is needed |
| `mode` | `"form"` | | Elicitation mode (currently only `"form"`) |
| `requestedSchema` | `{ type: "object", properties, required? }` | ✅ | JSON Schema describing the form fields |

### `elicitation.completed`

Ephemeral. An elicitation request was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `elicitation.requested` |

## Sub-agent and skill events

### `subagent.started`

A custom agent was invoked as a sub-agent.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Parent tool call that spawned this sub-agent |
| `agentName` | `string` | ✅ | Internal name of the sub-agent |
| `agentDisplayName` | `string` | ✅ | Human-readable display name |
| `agentDescription` | `string` | ✅ | Description of what the sub-agent does |

### `subagent.completed`

A sub-agent finished successfully.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Matches the corresponding `subagent.started` |
| `agentName` | `string` | ✅ | Internal name |
| `agentDisplayName` | `string` | ✅ | Display name |

### `subagent.failed`

A sub-agent encountered an error.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `toolCallId` | `string` | ✅ | Matches the corresponding `subagent.started` |
| `agentName` | `string` | ✅ | Internal name |
| `agentDisplayName` | `string` | ✅ | Display name |
| `error` | `string` | ✅ | Error message |

### `subagent.selected`

A custom agent was selected (inferred) to handle the current request.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `agentName` | `string` | ✅ | Internal name of the selected agent |
| `agentDisplayName` | `string` | ✅ | Display name |
| `tools` | `string[] \| null` | ✅ | Tool names available to this agent; `null` for all tools |

### `subagent.deselected`

A custom agent was deselected, returning to the default agent. The response payload will be empty (`{}`).

### `skill.invoked`

A skill was activated for the current conversation.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | `string` | ✅ | Skill name |
| `path` | `string` | ✅ | File path to the SKILL.md definition |
| `content` | `string` | ✅ | Full skill content injected into the conversation |
| `allowedTools` | `string[]` | | Tools auto-approved while this skill is active |
| `pluginName` | `string` | | Plugin the skill originated from |
| `pluginVersion` | `string` | | Plugin version |

## Other events

### `abort`

The current turn was aborted.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `reason` | `string` | ✅ | Why the turn was aborted (for example, `"user initiated"`) |

### `user.message`

The user sent a message. Recorded for the session timeline.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `content` | `string` | ✅ | The user's message text |
| `transformedContent` | `string` | | Transformed version after preprocessing |
| `attachments` | `Attachment[]` | | File, directory, selection, blob, or {% data variables.product.github %} reference attachments |
| `source` | `string` | | Message source identifier |
| `agentMode` | `string` | | Agent mode: `"interactive"`, `"plan"`, `"autopilot"`, or `"shell"` |
| `interactionId` | `string` | | Interaction identifier |

### `system.message`

A system or developer prompt was injected into the conversation.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `content` | `string` | ✅ | The prompt text |
| `role` | `"system" \| "developer"` | ✅ | Message role |
| `name` | `string` | | Source identifier |
| `metadata` | `{ promptVersion?, variables? }` | | Prompt template metadata |

### `external_tool.requested`

Ephemeral. The agent wants to invoke an external tool (one provided by the SDK consumer).

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToExternalTool()` |
| `sessionId` | `string` | ✅ | Session this request belongs to |
| `toolCallId` | `string` | ✅ | Tool call ID for this invocation |
| `toolName` | `string` | ✅ | Name of the external tool |
| `arguments` | `object` | | Arguments for the tool |

### `external_tool.completed`

Ephemeral. An external tool request was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `external_tool.requested` |

### `exit_plan_mode.requested`

Ephemeral. The agent has created a plan and wants to exit plan mode.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToExitPlanMode()` |
| `summary` | `string` | ✅ | Summary of the plan |
| `planContent` | `string` | ✅ | Full plan file content |
| `actions` | `string[]` | ✅ | Available user actions (for example, approve, edit, reject) |
| `recommendedAction` | `string` | ✅ | Suggested action |

### `exit_plan_mode.completed`

Ephemeral. An exit plan mode request was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `exit_plan_mode.requested` |

### `command.queued`

Ephemeral. A slash command was queued for execution.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Use this to respond via `session.respondToQueuedCommand()` |
| `command` | `string` | ✅ | The slash command text (for example, `/help`, `/clear`) |

### `command.completed`

Ephemeral. A queued command was resolved.

| Data field | Type | Required | Description |
|------------|------|----------|-------------|
| `requestId` | `string` | ✅ | Matches the corresponding `command.queued` |

## Quick reference: agentic turn flow

A typical agentic turn emits events in this order:

```text
assistant.turn_start          → Turn begins
├── assistant.intent          → What the agent plans to do (ephemeral)
├── assistant.reasoning_delta → Streaming thinking chunks (ephemeral, repeated)
├── assistant.reasoning       → Complete thinking block
├── assistant.message_delta   → Streaming response chunks (ephemeral, repeated)
├── assistant.message         → Complete response (may include toolRequests)
├── assistant.usage           → Token usage for this API call (ephemeral)
│
├── [If tools were requested:]
│   ├── permission.requested  → Needs user approval (ephemeral)
│   ├── permission.completed  → Approval result (ephemeral)
│   ├── tool.execution_start  → Tool begins
│   ├── tool.execution_partial_result  → Streaming tool output (ephemeral, repeated)
│   ├── tool.execution_progress        → Progress updates (ephemeral, repeated)
│   ├── tool.execution_complete        → Tool finished
│   │
│   └── [Agent loops: more reasoning → message → tool calls...]
│
assistant.turn_end            → Turn complete
session.idle                  → Ready for next message (ephemeral)
```

## All event types at a glance

| Event type | Ephemeral | Category | Key data fields |
|------------|-----------|----------|-----------------|
| `assistant.turn_start` | | Assistant | `turnId`, `interactionId?` |
| `assistant.intent` | ✅ | Assistant | `intent` |
| `assistant.reasoning` | | Assistant | `reasoningId`, `content` |
| `assistant.reasoning_delta` | ✅ | Assistant | `reasoningId`, `deltaContent` |
| `assistant.streaming_delta` | ✅ | Assistant | `totalResponseSizeBytes` |
| `assistant.message` | | Assistant | `messageId`, `content`, `toolRequests?`, `outputTokens?`, `phase?` |
| `assistant.message_delta` | ✅ | Assistant | `messageId`, `deltaContent`, `parentToolCallId?` |
| `assistant.turn_end` | | Assistant | `turnId` |
| `assistant.usage` | ✅ | Assistant | `model`, `inputTokens?`, `outputTokens?`, `cost?`, `duration?` |
| `tool.user_requested` | | Tool | `toolCallId`, `toolName`, `arguments?` |
| `tool.execution_start` | | Tool | `toolCallId`, `toolName`, `arguments?`, `mcpServerName?` |
| `tool.execution_partial_result` | ✅ | Tool | `toolCallId`, `partialOutput` |
| `tool.execution_progress` | ✅ | Tool | `toolCallId`, `progressMessage` |
| `tool.execution_complete` | | Tool | `toolCallId`, `success`, `result?`, `error?` |
| `session.idle` | ✅ | Session | `backgroundTasks?` |
| `session.error` | | Session | `errorType`, `message`, `statusCode?` |
| `session.compaction_start` | | Session | *(empty)* |
| `session.compaction_complete` | | Session | `success`, `preCompactionTokens?`, `summaryContent?` |
| `session.title_changed` | ✅ | Session | `title` |
| `session.context_changed` | | Session | `cwd`, `gitRoot?`, `repository?`, `branch?` |
| `session.usage_info` | ✅ | Session | `tokenLimit`, `currentTokens`, `messagesLength` |
| `session.task_complete` | | Session | `summary?` |
| `session.shutdown` | | Session | `shutdownType`, `codeChanges`, `modelMetrics` |
| `permission.requested` | ✅ | Permission | `requestId`, `permissionRequest` |
| `permission.completed` | ✅ | Permission | `requestId`, `result.kind` |
| `user_input.requested` | ✅ | User Input | `requestId`, `question`, `choices?` |
| `user_input.completed` | ✅ | User Input | `requestId` |
| `elicitation.requested` | ✅ | User Input | `requestId`, `message`, `requestedSchema` |
| `elicitation.completed` | ✅ | User Input | `requestId` |
| `subagent.started` | | Sub-Agent | `toolCallId`, `agentName`, `agentDisplayName` |
| `subagent.completed` | | Sub-Agent | `toolCallId`, `agentName`, `agentDisplayName` |
| `subagent.failed` | | Sub-Agent | `toolCallId`, `agentName`, `error` |
| `subagent.selected` | | Sub-Agent | `agentName`, `agentDisplayName`, `tools` |
| `subagent.deselected` | | Sub-Agent | *(empty)* |
| `skill.invoked` | | Skill | `name`, `path`, `content`, `allowedTools?` |
| `abort` | | Control | `reason` |
| `user.message` | | User | `content`, `attachments?`, `agentMode?` |
| `system.message` | | System | `content`, `role` |
| `external_tool.requested` | ✅ | External Tool | `requestId`, `toolName`, `arguments?` |
| `external_tool.completed` | ✅ | External Tool | `requestId` |
| `command.queued` | ✅ | Command | `requestId`, `command` |
| `command.completed` | ✅ | Command | `requestId` |
| `exit_plan_mode.requested` | ✅ | Plan Mode | `requestId`, `summary`, `planContent`, `actions` |
| `exit_plan_mode.completed` | ✅ | Plan Mode | `requestId` |
