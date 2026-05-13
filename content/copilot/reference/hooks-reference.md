---
title: GitHub Copilot hooks reference
shortTitle: Hooks reference
intro: 'Find hook events, configuration formats, and input payloads for hooks in {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}.'
versions:
  feature: copilot
redirect_from:
  - /copilot/reference/hooks-configuration
  - /copilot/reference/copilot-cli-reference/cli-hooks-reference
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
  - Configure Copilot cloud agent # Cloud agent bespoke page
contentType: reference
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Hooks are external commands that execute at specific lifecycle points during a session, enabling custom automation, security controls, and integrations.

Hooks are supported in two {% data variables.product.prodname_copilot_short %} surfaces: {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}. Most of the configuration format and event payloads are identical, but the execution environment and the set of events that can fire differ.

Throughout this article, behavior that differs between the two surfaces is called out in "CLI only" and "Cloud agent only" notes. Anything not marked applies to both.

## Hooks locations

The locations where hooks run, and where you can store hook configuration files, depend on the surface:

* **{% data variables.copilot.copilot_cli_short %}** — hooks run on the developer's local machine in the same shell as the CLI. All hook events described in this article are supported by the CLI.

  Hooks are loaded from the following sources in order (user, then project, then plugins) and combined. When the same event appears in multiple sources, all hook entries from all sources are run.

  * **Repository-level hook files** — `.github/hooks/*.json` in the repository root.
  * **User-level hook files** — `*.json` files in the user-level hooks directory. By default this is `~/.copilot/hooks/` on macOS and Linux, or `%USERPROFILE%\.copilot\hooks\` on Windows. If `COPILOT_HOME` is set, it is `$COPILOT_HOME/hooks/`.
  * **Inline `hooks` block in repository settings** — the `hooks` field at the top level of `.github/copilot/settings.json` (Git committed) or `.github/copilot/settings.local.json` (typically gitignored and user specific) in the repository. Cross-tool `.claude/settings.json` and `.claude/settings.local.json` files in the repository are also read.
  * **Inline `hooks` block in user-level config** — the `hooks` field at the top level of `~/.copilot/settings.json`.
  * **Hooks contributed by installed plugins** — declared by each plugin in its own `hooks.json` (or under `hooks/hooks.json`) inside the plugin's installation directory.

* **{% data variables.copilot.copilot_cloud_agent %}** — hooks run inside the ephemeral Linux sandbox that cloud agent provisions for each job. The sandbox is non-interactive, has a constrained network, and is destroyed when the job ends. A subset of events fires, and only `bash` (or `command`) entries are honored.

  Hook configuration is loaded from `.github/hooks/*.json` files in the cloned repository.

## Cloud agent execution environment

This section applies to **{% data variables.copilot.copilot_cloud_agent %} only**. It describes constraints that affect how you write hook scripts and configure hook entries for cloud agent jobs.

| Property | Value |
|----------|-------|
| Operating system | Linux. Only the `bash` field on command hooks is honored; `powershell` entries are ignored. The cross-platform `command` field is honored as a fallback. |
| Working directory | `/workspace` when a repository is cloned, otherwise `/root`. Use this path when setting `cwd` on a hook entry or when referencing files from a script. |
| Filesystem | Ephemeral. Files written by hooks (logs, CSVs, transcripts) are discarded when the job ends. To retain hook output, send it via an `http` hook entry. |
| Outbound network | Restricted by the cloud agent firewall. By default only GitHub and {% data variables.product.prodname_copilot_short %} hostnames are reachable; reaching any other host (for example `https://hooks.example.com`) requires an admin-configured firewall allow rule. |
| Available environment variables | `GITHUB_COPILOT_API_TOKEN` and `GITHUB_COPILOT_GIT_TOKEN` are set in the sandbox. `COPILOT_AGENT_PROMPT` holds the prompt the job was invoked with. `HOME` is set to `/root`, so any hook script that resolves `~/...` paths writes into the ephemeral sandbox. `GITHUB_TOKEN` is not set. |
| Interactivity | Fully non-interactive. The agent runs with all tool permissions pre-granted, so no permission dialogs are shown and no notifications are surfaced to a user. |
| Configuration discovery | In a cloud agent job, the only hook configuration that exists by default is `.github/hooks/*.json` inside the cloned repository. The sandbox does not ship with user-level hook files, `settings.json`, `config.json`, or installed plugins. |

## Hook configuration format

Hook configuration files use JSON format with version `1`.

### Command hooks

Command hooks run shell scripts and are supported on all hook types.

> [!NOTE]
> **Cloud agent only.** Cloud agent runs hooks in a Linux sandbox. Only the `bash` field is honored; `powershell` entries are ignored. The cross-platform `command` field is honored as a fallback.

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
| `bash` | string | One of `bash`, `powershell`, or `command` | Shell command for Unix. |
| `command` | string | One of `bash`, `powershell`, or `command` | Cross-platform fallback used when neither `bash` nor `powershell` is set for the current platform. |
| `cwd` | string | No | Working directory for the command (relative to repository root or absolute). |
| `env` | object | No | Environment variables to set (supports variable expansion). |
| `powershell` | string | One of `bash`, `powershell`, or `command` | Shell command for Windows. |
| `timeoutSec` | number | No | Timeout in seconds. Default: `30`. |
| `type` | `"command"` | Yes | Must be `"command"`. |

### HTTP hooks

HTTP hooks send the input payload as a JSON `POST` to a URL.

> [!NOTE]
> **Cloud agent only.** Outbound network from the sandbox is restricted by the cloud agent firewall, so `url` must target an allow-listed host.

```json
{
  "version": 1,
  "hooks": {
    "postToolUse": [
      {
        "type": "http",
        "url": "https://hooks.example.com/copilot",
        "headers": { "X-Source": "copilot-cli" },
        "allowedEnvVars": ["GITHUB_TOKEN"],
        "timeoutSec": 30
      }
    ]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allowedEnvVars` | string[] | No | Environment variable names that may be expanded inside `headers` values. When set, `url` must use `https://`. |
| `headers` | object | No | Request headers to include. |
| `timeoutSec` | number | No | Timeout in seconds. Default: `30`. |
| `type` | `"http"` | Yes | Must be `"http"`. |
| `url` | string | Yes | Target URL. Must use `http:` or `https:`. For `preToolUse` and `permissionRequest`, must use `https://` because the response can grant tool permissions. |

### Prompt hooks

Prompt hooks auto-submit text as if the user typed it. They are only supported on `sessionStart`. The text can be a natural language prompt or a slash command.

> [!NOTE]
> **{% data variables.copilot.copilot_cli_short %} only.** Prompt hooks fire only for **new interactive sessions**. They do not fire on resume, and they do not fire in non-interactive prompt mode (`-p`).

> [!NOTE]
> **Cloud agent.** Cloud agent jobs run non-interactively (similar to `-p`), so `prompt` hook entries may not fire. Confirm the behavior in your environment before relying on them.

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

The table below lists every supported event. The **Cloud agent** column shows whether the event fires under cloud agent and notes any behavior differences.

| Event | Fires when | Output processed | Cloud agent |
|-------|-----------|------------------|-------------|
| `agentStop` | The main agent finishes a turn. | Yes — can block and force continuation. | Fires. `decision: "block"` forces another turn, which still counts against the job's timeout. |
| `errorOccurred` | An error occurs during execution. | No | Fires. |
| `notification` | Fires asynchronously when the CLI emits a system notification (shell completion, agent completion or idle, permission prompts, elicitation dialogs). Fire-and-forget: never blocks the session. Supports `matcher` regex on `notification_type`. | Optional — can inject `additionalContext` into the session. | **Does not fire.** Cloud agent does not surface notifications to a user (see the **Interactivity** row in the Cloud agent execution environment table above). |
| `permissionRequest` | Fires before the permission service runs (rules engine, session approvals, auto-allow/auto-deny, and user prompting). If the merged hook output returns `behavior: "allow"` or `"deny"`, that decision short-circuits the normal permission flow. Supports `matcher` regex on `toolName`. | Yes — can allow or deny programmatically. | Tool calls are pre-approved, so this hook either does not fire or has no effect. Use `preToolUse` to make permission decisions instead. |
| `postToolUse` | After each tool completes successfully. | No | Fires. |
| `postToolUseFailure` | After a tool completes with a failure. | Yes — can provide recovery guidance via `additionalContext` (exit code `2` for command hooks). | Fires. |
| `preCompact` | Context compaction is about to begin (manual or automatic). Supports `matcher` to filter by trigger (`"manual"` or `"auto"`). | No — notification only. | Fires only with `trigger: "auto"`. There is no user to request manual compaction. |
| `preToolUse` | Before each tool executes. | Yes — can allow, deny, or modify. | Fires. A decision of `"ask"` is treated as `"deny"` because no user is available to answer. |
| `sessionEnd` | The session terminates. | No | Fires once per job. `reason` is typically `"complete"`, `"error"`, or `"timeout"`; `"abort"` and `"user_exit"` are not expected because there is no user. |
| `sessionStart` | A new or resumed session begins. | Optional — can inject `additionalContext` into the session. | Fires once per job, as a new session (not a resume). See the Prompt hooks note above for the behavior of `prompt` entries under cloud agent. |
| `subagentStart` | A subagent is spawned (before it runs). Supports `matcher` to filter by agent name. | Optional — cannot block creation, but `additionalContext` is prepended to the subagent's prompt. | Fires. |
| `subagentStop` | A subagent completes. | Yes — can block and force continuation. | Fires. |
| `userPromptSubmitted` | The user submits a prompt. | No | Fires at most once, for the prompt supplied to the job. There is no follow-up user input. |

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
        result_type: "success";
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
| `permissionDecision` | `"allow"`, `"deny"`, `"ask"` | Whether the tool executes. Empty output uses default behavior. Under cloud agent, `"ask"` is treated as `"deny"` because no user is available to answer. |
| `permissionDecisionReason` | string | Reason shown to the agent. Required when decision is `"deny"`. |
| `modifiedArgs` | object | Substitute tool arguments to use instead of the originals. |

## `agentStop` / `subagentStop` decision control

| Field | Values | Description |
|-------|--------|-------------|
| `decision` | `"block"`, `"allow"` | `"block"` forces another agent turn using `reason` as the prompt. |
| `reason` | string | Prompt for the next turn when `decision` is `"block"`. |

## `permissionRequest` decision control

> [!NOTE]
> **{% data variables.copilot.copilot_cli_short %} only.** The `permissionRequest` hook does not apply under {% data variables.copilot.copilot_cloud_agent %}—tool calls there are pre-approved (see the **Interactivity** row in the Cloud agent execution environment table). Use `preToolUse` to make permission decisions in cloud agent.

The `permissionRequest` hook fires before the permission service runs—before rule checks, session approvals, auto-allow/auto-deny, and user prompting. If hooks return `behavior: "allow"` or `"deny"`, that decision short-circuits the normal permission flow. Returning nothing falls through to normal permission handling. Use it to approve or deny tool calls programmatically—especially useful in CLI pipe mode (`-p`) and other CLI CI usages where no interactive prompt is available. It does not apply to cloud agent.

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

> [!NOTE]
> **{% data variables.copilot.copilot_cli_short %} only.** The `notification` hook does not fire under {% data variables.copilot.copilot_cloud_agent %}.

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

## Matcher filtering

Several events accept an optional `matcher` regex on each hook entry that filters which invocations the hook fires for. The pattern is anchored as `^(?:matcher)$` and must match the full value. Invalid regexes cause the hook entry to be skipped.

| Event | `matcher` is matched against |
|-------|------------------------------|
| `notification` | `notification_type` |
| `permissionRequest` | `toolName` |
| `preCompact` | `trigger` (`"manual"` or `"auto"`) |
| `preToolUse` | `toolName` |
| `subagentStart` | `agentName` |

## Tool names for hook matching

| Tool name | Description |
|-----------|-------------|
| `ask_user` | Ask the user a clarifying question. Under cloud agent there is no user, so `ask_user` does not produce a useful result. |
| `bash` | Execute shell commands (Unix). |
| `create` | Create new files. |
| `edit` | Modify file contents. |
| `glob` | Find files by pattern. |
| `grep` | Search file contents. |
| `powershell` | Execute shell commands (Windows). Does not appear under cloud agent (Linux sandbox). |
| `task` | Run subagent tasks. |
| `view` | Read file contents. |
| `web_fetch` | Fetch web pages. |

If multiple hooks of the same type are configured, they execute in order. For `preToolUse`, if any hook returns `"deny"`, the tool is blocked. Hook failures (non-zero exit codes other than `2`, or timeouts) are logged and skipped—they never block agent execution.

## Exit codes for command hooks

| Exit code | Meaning |
|-----------|---------|
| `0` | Success. `stdout` is parsed as the hook output JSON if present. |
| `2` | Treated as a warning by default. `stderr` is surfaced to the user but the run continues. For `permissionRequest`, exit `2` is treated as `{"behavior":"deny"}` and any `stdout` JSON is merged in. For `postToolUseFailure`, exit `2` is treated as `additionalContext` and `stdout` is appended to the failure shown to the agent. |
| Other non-zero | Logged as a hook failure. The run continues (fail-open). |

## Disable all hooks

Use `disableAllHooks` when you want to keep your hook configuration on disk but stop it from running—for example:

* Debugging an issue and you want to confirm a hook is the cause without deleting your config.
* Pausing automation during a sensitive task (a code review, a release branch, working with secrets) without losing the setup. (**{% data variables.copilot.copilot_cli_short %} only.**)
* Shipping a hooks file in source control that contributors can opt out of locally by setting the option in their repository `settings.json`. (**{% data variables.copilot.copilot_cli_short %} only.**)
* Temporarily silencing slow or noisy hooks during an interactive session. (**{% data variables.copilot.copilot_cli_short %} only.**)

Set `disableAllHooks` to `true` at the top level to skip every hook in the file without deleting it.

```json
{
  "version": 1,
  "disableAllHooks": false,
  "hooks": {
    "preToolUse": [ /* hook entries */ ]
  }
}
```

Behavior depends on where you set the flag:

* **Inside a single `.github/hooks/*.json` file** — only the hooks declared in that file are skipped. Honored by both {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}.
* **At the top level of repository `settings.json`** — **{% data variables.copilot.copilot_cli_short %} only.** Every hook from every source (repository files, user files, plugins, and inline hook blocks) is skipped for sessions in that repository. Cloud agent does not load `settings.json`.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-hooks)
* [AUTOTITLE](/copilot/reference/hooks-configuration)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent)
