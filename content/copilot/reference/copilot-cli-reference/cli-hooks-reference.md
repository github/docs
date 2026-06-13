---
title: GitHub Copilot CLI hooks reference
shortTitle: CLI hooks reference
intro: 'Find hook events, configuration formats, and input payloads for {% data variables.copilot.copilot_cli_short %}.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
docsTeamMetrics:
  - copilot-cli
---

Hooks are external commands that execute at specific lifecycle points during a session, enabling custom automation, security controls, and integrations. Hook configuration files are loaded automatically from `.github/hooks/*.json` in your repository.

## Hook configuration format

Hook configuration files use JSON format with version `1`.

### Command hooks

Command hooks run shell scripts and are supported on all hook types.

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "your-bash-command",
        "powershell": "your-powershell-command",
        "cwd": "optional/working/directory",
        "env": { "VAR": "value" },
        "timeoutSec": 30
      }
    ]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bash` | string | One of `bash`/`powershell` | Shell command for Unix. |
| `cwd` | string | No | Working directory for the command (relative to repository root or absolute). |
| `env` | object | No | Environment variables to set (supports variable expansion). |
| `powershell` | string | One of `bash`/`powershell` | Shell command for Windows. |
| `timeoutSec` | number | No | Timeout in seconds. Default: `30`. |
| `type` | `"command"` | Yes | Must be `"command"`. |

### Prompt hooks

Prompt hooks auto-submit text as if the user typed it. They are only supported on `sessionStart` and only fire for **new interactive sessions**. They do not fire on resume, and they do not fire in non-interactive prompt mode (`-p`). The text can be a natural language prompt or a slash command.

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "prompt",
        "prompt": "Your prompt text or /slash-command"
      }
    ]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"prompt"` | Yes | Must be `"prompt"`. |
| `prompt` | string | Yes | Text to submit—can be a natural language message or a slash command. |

## Hook events

| Event | Fires when | Output processed |
|-------|-----------|-----------------|
| `agentStop` | The main agent finishes a turn. | Yes — can block and force continuation. |
| `errorOccurred` | An error occurs during execution. | No |
| `notification` | Fires asynchronously when the CLI emits a system notification (shell completion, agent completion or idle, permission prompts, elicitation dialogs). Fire-and-forget: never blocks the session. Supports `matcher` regex on `notification_type`. | Optional — can inject `additionalContext` into the session. |
| `permissionRequest` | Fires before the permission service runs (rules engine, session approvals, auto-allow/auto-deny, and user prompting). If the merged hook output returns `behavior: "allow"` or `"deny"`, that decision short-circuits the normal permission flow. Supports `matcher` regex on `toolName`. | Yes — can allow or deny programmatically. |
| `postToolUse` | After each tool completes successfully. | Yes — can replace the successful result (SDK programmatic hooks only). |
| `postToolUseFailure` | After a tool completes with a failure. | Yes — can provide recovery guidance via `additionalContext` (exit code `2` for command hooks). |
| `preCompact` | Context compaction is about to begin (manual or automatic). Supports `matcher` to filter by trigger (`"manual"` or `"auto"`). | No — notification only. |
| `preToolUse` | Before each tool executes. | Yes — can allow, deny, or modify. |
| `sessionEnd` | The session terminates. | No |
| `sessionStart` | A new or resumed session begins. | No |
| `subagentStart` | A subagent is spawned (before it runs). Returns `additionalContext` prepended to the subagent's prompt. Supports `matcher` to filter by agent name. | No — cannot block creation. |
| `subagentStop` | A subagent completes. | Yes — can block and force continuation. |
| `userPromptSubmitted` | The user submits a prompt. | No |

## Hook event input payloads

Each hook event delivers a JSON payload to the hook handler. Two payload formats are supported, selected by the event name used in the hook configuration:

* **camelCase format** — Configure the event name in camelCase (for example, `sessionStart`). Fields use camelCase.
* **{% data variables.product.prodname_vscode_shortname %} compatible format** — Configure the event name in PascalCase (for example, `SessionStart`). Fields use snake_case to match the {% data variables.product.prodname_vscode_shortname %} {% data variables.product.prodname_copilot_short %} extension format.

### `sessionStart` / `SessionStart`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;      // Unix timestamp in milliseconds
    cwd: string;
    source: "startup" | "resume" | "new";
    initialPrompt?: string;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "SessionStart";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    source: "startup" | "resume" | "new";
    initial_prompt?: string;
}
```

### `sessionEnd` / `SessionEnd`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    reason: "complete" | "error" | "abort" | "timeout" | "user_exit";
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "SessionEnd";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    reason: "complete" | "error" | "abort" | "timeout" | "user_exit";
}
```

### `userPromptSubmitted` / `UserPromptSubmit`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    prompt: string;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "UserPromptSubmit";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    prompt: string;
}
```

### `preToolUse` / `PreToolUse`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    toolName: string;
    toolArgs: unknown;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

When configured with the PascalCase event name `PreToolUse`, the payload uses snake_case field names to match the {% data variables.product.prodname_vscode_shortname %} {% data variables.product.prodname_copilot_short %} extension format:

```typescript
{
    hook_event_name: "PreToolUse";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    tool_name: string;
    tool_input: unknown;    // Tool arguments (parsed from JSON string when possible)
}
```

### `postToolUse` / `PostToolUse`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    toolName: string;
    toolArgs: unknown;
    toolResult: {
        resultType: "success";
        textResultForLlm: string;
    }
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "PostToolUse";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    tool_name: string;
    tool_input: unknown;
    tool_result: {
        result_type: "success" | "failure" | "denied" | "error";
        text_result_for_llm: string;
    }
}
```

### `postToolUseFailure` / `PostToolUseFailure`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    toolName: string;
    toolArgs: unknown;
    error: string;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "PostToolUseFailure";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    tool_name: string;
    tool_input: unknown;
    error: string;
}
```

### `agentStop` / `Stop`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    transcriptPath: string;
    stopReason: "end_turn";
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "Stop";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    transcript_path: string;
    stop_reason: "end_turn";
}
```

### `subagentStart`

**Input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    transcriptPath: string;
    agentName: string;
    agentDisplayName?: string;
    agentDescription?: string;
}
```

### `subagentStop` / `SubagentStop`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    transcriptPath: string;
    agentName: string;
    agentDisplayName?: string;
    stopReason: "end_turn";
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "SubagentStop";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    transcript_path: string;
    agent_name: string;
    agent_display_name?: string;
    stop_reason: "end_turn";
}
```

### `errorOccurred` / `ErrorOccurred`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    error: {
        message: string;
        name: string;
        stack?: string;
    };
    errorContext: "model_call" | "tool_execution" | "system" | "user_input";
    recoverable: boolean;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "ErrorOccurred";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    error: {
        message: string;
        name: string;
        stack?: string;
    };
    error_context: "model_call" | "tool_execution" | "system" | "user_input";
    recoverable: boolean;
}
```

### `preCompact` / `PreCompact`

**camelCase input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    transcriptPath: string;
    trigger: "manual" | "auto";
    customInstructions: string;
}
```

**{% data variables.product.prodname_vscode_shortname %} compatible input:**

```typescript
{
    hook_event_name: "PreCompact";
    session_id: string;
    timestamp: string;      // ISO 8601 timestamp
    cwd: string;
    transcript_path: string;
    trigger: "manual" | "auto";
    custom_instructions: string;
}
```

## `preToolUse` decision control

The `preToolUse` hook can control tool execution by writing a JSON object to stdout.

| Field | Values | Description |
|-------|--------|-------------|
| `permissionDecision` | `"allow"`, `"deny"`, `"ask"` | Whether the tool executes. Empty output uses default behavior. |
| `permissionDecisionReason` | string | Reason shown to the agent. Required when decision is `"deny"`. |
| `modifiedArgs` | object | Substitute tool arguments to use instead of the originals. |

## `agentStop` / `subagentStop` decision control

| Field | Values | Description |
|-------|--------|-------------|
| `decision` | `"block"`, `"allow"` | `"block"` forces another agent turn using `reason` as the prompt. |
| `reason` | string | Prompt for the next turn when `decision` is `"block"`. |

## `permissionRequest` decision control

The `permissionRequest` hook fires before the permission service runs—before rule checks, session approvals, auto-allow/auto-deny, and user prompting. If hooks return `behavior: "allow"` or `"deny"`, that decision short-circuits the normal permission flow. Returning nothing falls through to normal permission handling. Use it to approve or deny tool calls programmatically—especially useful in pipe mode (`-p`) and CI environments where no interactive prompt is available.

All configured `permissionRequest` hooks run for each request (except `read` and `hook` permission kinds, which short-circuit before hooks). Hook outputs are merged with later hook outputs overriding earlier ones.

**Matcher:** Optional regex tested against `toolName`. Anchored as `^(?:pattern)$`; must match the full tool name. When set, the hook fires only for matching tool names.

Output JSON to stdout to control the permission decision:

| Field | Values | Description |
|-------|--------|-------------|
| `behavior` | `"allow"`, `"deny"` | Whether to approve or deny the tool call. |
| `message` | string | Reason fed back to the LLM when denying. |
| `interrupt` | boolean | When `true` combined with `"deny"`, stops the agent entirely. |

Return empty output or `{}` to fall through to the normal permission flow. For command hooks, exit code `2` is treated as a deny; stdout JSON (if any) is merged with `{"behavior":"deny"}`, and stderr is ignored.

## `notification` hook

The `notification` hook fires asynchronously when the CLI emits a system notification. These hooks are fire-and-forget: they never block the session, and any errors are logged and skipped.

**Input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    hook_event_name: "Notification";
    message: string;           // Human-readable notification text
    title?: string;            // Short title (e.g., "Permission needed", "Shell completed")
    notification_type: string; // One of the types listed below
}
```

**Notification types:**

| Type | When it fires |
|------|---------------|
| `shell_completed` | A background (async) shell command finishes |
| `shell_detached_completed` | A detached shell session completes |
| `agent_completed` | A background subagent finishes (completed or failed) |
| `agent_idle` | A background agent finishes a turn and enters idle state (waiting for `write_agent`) |
| `permission_prompt` | The agent requests permission to execute a tool |
| `elicitation_dialog` | The agent requests additional information from the user |

**Output:**

```typescript
{
    additionalContext?: string; // Injected into the session as a user message
}
```

If `additionalContext` is returned, the text is injected into the session as a prepended user message. This can trigger further agent processing if the session is idle. Return `{}` or empty output to take no action.

**Matcher:** Optional regex on `notification_type`. The pattern is anchored as `^(?:pattern)$`. Omit `matcher` to receive all notification types.

## Tool names for hook matching

| Tool name | Description |
|-----------|-------------|
| `ask_user` | Ask the user a clarifying question. |
| `bash` | Execute shell commands (Unix). |
| `create` | Create new files. |
| `edit` | Modify file contents. |
| `glob` | Find files by pattern. |
| `grep` | Search file contents. |
| `powershell` | Execute shell commands (Windows). |
| `task` | Run subagent tasks. |
| `view` | Read file contents. |
| `web_fetch` | Fetch web pages. |

If multiple hooks of the same type are configured, they execute in order. For `preToolUse`, if any hook returns `"deny"`, the tool is blocked. For `postToolUseFailure` command hooks, exiting with code `2` causes stderr to be returned as recovery guidance for the assistant. Hook failures (non-zero exit codes or timeouts) are logged and skipped—they never block agent execution.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-hooks)
* [AUTOTITLE](/copilot/reference/hooks-configuration)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
