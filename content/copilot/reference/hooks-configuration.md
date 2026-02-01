---
title: Hooks configuration
shortTitle: Hooks configuration
intro: 'Find information about configuring hooks for use with {% data variables.copilot.copilot_cli %} and {% data variables.copilot.copilot_coding_agent %}.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
---

This reference article describes the available hook types with examples, including their input and output formats, script best practices, and advanced patterns for logging, security enforcement, and external integrations. For general information about creating hooks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks).

## Hook types

### Session start hook

Executed when a new agent session begins or when resuming an existing session.

**Input JSON:**

```json copy
{
  "timestamp": 1704614400000,
  "cwd": "/path/to/project",
  "source": "new",
  "initialPrompt": "Create a new feature"
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `source`: Either `"new"` (new session), `"resume"` (resumed session), or `"startup"`
* `initialPrompt`: The user's initial prompt (if provided)

**Output:** Ignored (no return value processed)

**Example hook:**

```json copy
{
  "type": "command",
  "bash": "./scripts/session-start.sh",
  "powershell": "./scripts/session-start.ps1",
  "cwd": "scripts",
  "timeoutSec": 30
}
```

**Example script (Bash):**

```shell copy
#!/bin/bash
INPUT=$(cat)
SOURCE=$(echo "$INPUT" | jq -r '.source')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')

echo "Session started from $SOURCE at $TIMESTAMP" >> session.log
```

### Session end hook

Executed when the agent session completes or is terminated.

**Input JSON:**

```json copy
{
  "timestamp": 1704618000000,
  "cwd": "/path/to/project",
  "reason": "complete"
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `reason`: One of `"complete"`, `"error"`, `"abort"`, `"timeout"`, or `"user_exit"`

**Output:** Ignored

**Example script:**

```shell copy
#!/bin/bash
INPUT=$(cat)
REASON=$(echo "$INPUT" | jq -r '.reason')

echo "Session ended: $REASON" >> session.log
# Cleanup temporary files
rm -rf /tmp/session-*
```

### User prompt submitted hook

Executed when the user submits a prompt to the agent.

**Input JSON:**

```json copy
{
  "timestamp": 1704614500000,
  "cwd": "/path/to/project",
  "prompt": "Fix the authentication bug"
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `prompt`: The exact text the user submitted

**Output:** Ignored (prompt modification not currently supported in customer hooks)

**Example script:**

```shell copy
#!/bin/bash
INPUT=$(cat)
PROMPT=$(echo "$INPUT" | jq -r '.prompt')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')

# Log to a structured file
echo "$(date -d @$((TIMESTAMP/1000))): $PROMPT" >> prompts.log
```

### Pre-tool use hook

Executed before the agent uses any tool (such as `bash`, `edit`, `view`). This is the most powerful hook as it can **approve or deny tool executions**.

**Input JSON:**

```json copy
{
  "timestamp": 1704614600000,
  "cwd": "/path/to/project",
  "toolName": "bash",
  "toolArgs": "{\"command\":\"rm -rf dist\",\"description\":\"Clean build directory\"}"
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `toolName`: Name of the tool being invoked (such as "bash", "edit", "view", "create")
* `toolArgs`: JSON string containing the tool's arguments

**Output JSON (optional):**

```json copy
{
  "permissionDecision": "deny",
  "permissionDecisionReason": "Destructive operations require approval"
}
```

**Output fields:**

* `permissionDecision`: Either `"allow"`, `"deny"`, or `"ask"` (only `"deny"` is currently processed)
* `permissionDecisionReason`: Human-readable explanation for the decision

**Example hook to block dangerous commands:**

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Log the tool use
echo "$(date): Tool=$TOOL_NAME Args=$TOOL_ARGS" >> tool-usage.log

# Check for dangerous patterns
if echo "$TOOL_ARGS" | grep -qE "rm -rf /|format|DROP TABLE"; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Dangerous command detected"}'
  exit 0
fi

# Allow by default (or omit output to allow)
echo '{"permissionDecision":"allow"}'
```

**Example hook to enforce file permissions:**

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only allow editing specific directories
if [ "$TOOL_NAME" = "edit" ]; then
  PATH_ARG=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.path')
  
  if [[ ! "$PATH_ARG" =~ ^(src/|test/) ]]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Can only edit files in src/ or test/ directories"}'
    exit 0
  fi
fi

# Allow all other tools
```

### Post-tool use hook

Executed after a tool completes execution (whether successful or failed).

**Example input JSON:**

```json copy
{
  "timestamp": 1704614700000,
  "cwd": "/path/to/project",
  "toolName": "bash",
  "toolArgs": "{\"command\":\"npm test\"}",
  "toolResult": {
    "resultType": "success",
    "textResultForLlm": "All tests passed (15/15)"
  }
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `toolName`: Name of the tool that was executed
* `toolArgs`: JSON string containing the tool's arguments
* `toolResult`: Result object containing:
  * `resultType`: Either `"success"`, `"failure"`, or `"denied"`
  * `textResultForLlm`: The result text shown to the agent

**Output:** Ignored (result modification is not currently supported)

**Example script that logs tool execution statistics to a CSV file:**

This script logs tool execution statistics to a CSV file and sends an email alert when a tool fails.

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Track statistics
echo "$(date),${TOOL_NAME},${RESULT_TYPE}" >> tool-stats.csv

# Alert on failures
if [ "$RESULT_TYPE" = "failure" ]; then
  RESULT_TEXT=$(echo "$INPUT" | jq -r '.toolResult.textResultForLlm')
  echo "FAILURE: $TOOL_NAME - $RESULT_TEXT" | mail -s "Agent Tool Failed" admin@example.com
fi
```

### Error occurred hook

Executed when an error occurs during agent execution.

**Example input JSON:**

```json copy
{
  "timestamp": 1704614800000,
  "cwd": "/path/to/project",
  "error": {
    "message": "Network timeout",
    "name": "TimeoutError",
    "stack": "TimeoutError: Network timeout\n    at ..."
  }
}
```

**Fields:**

* `timestamp`: Unix timestamp in milliseconds
* `cwd`: Current working directory
* `error`: Error object containing:
  * `message`: Error message
  * `name`: Error type/name
  * `stack`: Stack trace (if available)

**Output:** Ignored (error handling modification is not currently supported)

**Example script that extracts error details to a log file:**

```shell copy
#!/bin/bash
INPUT=$(cat)
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')
ERROR_NAME=$(echo "$INPUT" | jq -r '.error.name')

echo "$(date): [$ERROR_NAME] $ERROR_MSG" >> errors.log
```

## Script best practices

### Reading input

This example script reads JSON input from stdin into a variable, then uses `jq` to extract the `timestamp` and `cwd` fields.

**Bash:**

```shell copy
#!/bin/bash
# Read JSON from stdin
INPUT=$(cat)

# Parse with jq
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
CWD=$(echo "$INPUT" | jq -r '.cwd')
```

**PowerShell:**

```powershell copy
# Read JSON from stdin
$input = [Console]::In.ReadToEnd() | ConvertFrom-Json

# Access properties
$timestamp = $input.timestamp
$cwd = $input.cwd
```

### Outputting JSON

This example script shows how to output valid JSON from your hook script. Use `jq -c` in Bash for compact single-line output, or `ConvertTo-Json -Compress` in PowerShell.

**Bash:**

```shell copy
#!/bin/bash
# Use jq to compact the JSON output to a single line
echo '{"permissionDecision":"deny","permissionDecisionReason":"Security policy violation"}' | jq -c

# Or construct with variables
REASON="Too dangerous"
jq -n --arg reason "$REASON" '{permissionDecision: "deny", permissionDecisionReason: $reason}'
```

**PowerShell:**

```powershell copy
# Use ConvertTo-Json to compact the JSON output to a single line
$output = @{
    permissionDecision = "deny"
    permissionDecisionReason = "Security policy violation"
}
$output | ConvertTo-Json -Compress
```

### Error handling

This script example demonstrates how to handle errors in hook scripts. 

**Bash:**

```shell copy
#!/bin/bash
set -e  # Exit on error

INPUT=$(cat)
# ... process input ...

# Exit with 0 for success
exit 0
```

**PowerShell:**

```powershell copy
$ErrorActionPreference = "Stop"

try {
    $input = [Console]::In.ReadToEnd() | ConvertFrom-Json
    # ... process input ...
    exit 0
} catch {
    Write-Error $_.Exception.Message
    exit 1
}
```

### Handling timeouts

Hooks have a default timeout of 30 seconds. For longer operations, increase `timeoutSec`:

```json copy
{
  "type": "command",
  "bash": "./scripts/slow-validation.sh",
  "timeoutSec": 120
}
```

## Advanced patterns

### Multiple hooks of the same type

You can define multiple hooks for the same event. They execute in order:

```json copy
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "comment": "Security validation - runs first"
      },
      {
        "type": "command", 
        "bash": "./scripts/audit-log.sh",
        "comment": "Audit logging - runs second"
      },
      {
        "type": "command",
        "bash": "./scripts/metrics.sh",
        "comment": "Metrics collection - runs third"
      }
    ]
  }
}
```

### Conditional logic in scripts

**Example: Only block specific tools**

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only validate bash commands
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0  # Allow all non-bash tools
fi

# Check bash command for dangerous patterns
COMMAND=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.command')
if echo "$COMMAND" | grep -qE "rm -rf|sudo|mkfs"; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Dangerous system command"}'
fi
```

### Structured logging

**Example: JSON Lines format**

```shell copy
#!/bin/bash
INPUT=$(cat)
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Output structured log entry
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg tool "$TOOL_NAME" \
  --arg result "$RESULT_TYPE" \
  '{timestamp: $ts, tool: $tool, result: $result}' >> logs/audit.jsonl
```

### Integration with external systems

**Example: Send alerts to Slack**

```shell copy
#!/bin/bash
INPUT=$(cat)
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

curl -X POST "$WEBHOOK_URL" \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"Agent Error: $ERROR_MSG\"}"
```

## Example use cases

### Compliance audit trail

Log all agent actions for compliance requirements by utilizing log scripts:

```json copy
{
  "version": 1,
  "hooks": {
    "sessionStart": [{"type": "command", "bash": "./audit/log-session-start.sh"}],
    "userPromptSubmitted": [{"type": "command", "bash": "./audit/log-prompt.sh"}],
    "preToolUse": [{"type": "command", "bash": "./audit/log-tool-use.sh"}],
    "postToolUse": [{"type": "command", "bash": "./audit/log-tool-result.sh"}],
    "sessionEnd": [{"type": "command", "bash": "./audit/log-session-end.sh"}]
  }
}
```

### Cost tracking

Track tool usage for cost allocation:

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
USER=${USER:-unknown}

echo "$TIMESTAMP,$USER,$TOOL_NAME" >> /var/log/copilot/usage.csv
```

### Code quality enforcement

Prevent commits that violate code standards:

```shell copy
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

if [ "$TOOL_NAME" = "edit" ] || [ "$TOOL_NAME" = "create" ]; then
  # Run linter before allowing edits
  npm run lint-staged
  if [ $? -ne 0 ]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Code does not pass linting"}'
  fi
fi
```

### Notification system

Send notifications on important events:

```shell copy
#!/bin/bash
INPUT=$(cat)
PROMPT=$(echo "$INPUT" | jq -r '.prompt')

# Notify on production-related prompts
if echo "$PROMPT" | grep -iq "production"; then
  echo "ALERT: Production-related prompt: $PROMPT" | mail -s "Agent Alert" team@example.com
fi
```
