---
title: Using hooks with Copilot CLI for predictable, policy-compliant execution
shortTitle: Use hooks with Copilot CLI
intro: Use hooks to log user prompts and control which tools {% data variables.copilot.copilot_cli_short %} can run in a repository, so teams can automate safely within your organization’s security and compliance requirements.
topics:
  - Copilot
versions:
  feature: copilot
contentType: tutorials
category:
  - Accelerate PR velocity # Copilot tutorials bespoke page
  - Author and optimize with Copilot # Copilot discovery page
  - Administer Copilot CLI # Copilot CLI bespoke page
allowTitleToDifferFromFilename: true
---

This tutorial is for DevOps engineers, platform teams, and engineering leaders who support developers using {% data variables.copilot.copilot_cli_short %}.

Hooks are custom scripts that run at specific points during a {% data variables.copilot.copilot_cli_short %} session. They can inspect prompts and tool calls, log information for auditing, and even block execution of certain commands.

You’ll configure repository-scoped hooks that:

* Provide visibility into prompts and tool use.
* Block high-risk command patterns before execution.
* Help developers understand organizational policies with clear messaging.

## Prerequisites

* Familiarity with shell scripting (Bash or PowerShell)
* Basic understanding of JSON configuration files
* Access to a repository where {% data variables.copilot.copilot_cli_short %} is used
* `jq` installed (for the Bash examples)

## 1. Define an organizational policy

Before you write any hook scripts, decide which actions should be allowed automatically and which should require human review.

A clear policy helps you avoid over-blocking while still reducing risk.

### Identify commands that always require review

Start by identifying patterns that should never be auto-executed by {% data variables.copilot.copilot_cli_short %}. Common examples include:

* **Privilege escalation**: `sudo`, `su`, `runas`
* **Destructive system operations**: `rm -rf /`, `mkfs`, `dd`, `format`
* **Download-and-execute patterns**: `curl ... | bash`, `wget ... | sh`, PowerShell `iex (irm ...)`

These commands can have irreversible effects if executed unintentionally.

### Decide what to log

When you use hooks, you can capture information about how {% data variables.copilot.copilot_cli_short %} is used in a repository, including prompts submitted by users and tools that {% data variables.copilot.copilot_cli_short %} attempts to run.

At minimum, most organizations log:

* The timestamp and repository path
* The prompt text (or a redacted form)
* The tool name and tool arguments
* Any policy decision (for example, a denied command and its reason)

Avoid logging secrets or credentials. If prompts or commands may contain sensitive data, apply redaction before writing logs.

This tutorial uses a local `.github/hooks/logs` directory as a simple, illustrative example. These log files are **not intended to be committed to the repository** and typically live only on a developer’s machine.

In production environments, many organizations forward hook events to a centralized logging or observability system instead of writing logs locally. This allows teams to apply consistent redaction, access controls, retention policies, and monitoring across repositories and users.

### Align with stakeholders

Before enforcing policies, review them with:

* Security or compliance teams, to confirm risk boundaries
* Platform or infrastructure teams, who may need broader permissions
* Development teams, so they understand what will be blocked and why

Clear expectations make policy enforcement easier to adopt and maintain.

## 2. Set up repository hook files

Throughout this tutorial, you’ll use **repository-scoped hooks** stored in the repository under `.github/hooks/`. These hooks apply whenever {% data variables.copilot.copilot_cli_short %} runs from within this repository.

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} agents load hook configuration files from `.github/hooks/*.json` in the repository. Hooks run synchronously and can block execution.

### Create the directory structure

From the repository root, create directories for your hook configuration, scripts, and logs:

```bash copy
mkdir -p .github/hooks/scripts
mkdir -p .github/hooks/logs
```

Add `.github/hooks/logs/` to .gitignore so local audit logs aren’t committed:

```bash copy
echo ".github/hooks/logs/" >> .gitignore
```

This tutorial uses the following structure:

```text
.github/
└── hooks/
    ├── copilot-cli-policy.json
    ├── logs/
    │   └── audit.jsonl
    └── scripts/
        ├── session-banner.sh
        ├── session-banner.ps1
        ├── log-prompt.sh
        ├── log-prompt.ps1
        ├── pre-tool-policy.sh
        └── pre-tool-policy.ps1
```

### Create a hook configuration file

Create a hook configuration file at `.github/hooks/copilot-cli-policy.json`.

This file defines which hooks run, when they run, and which scripts they execute.

```json copy
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "./scripts/session-banner.sh",
        "powershell": "./scripts/session-banner.ps1",
        "cwd": ".github/hooks",
        "timeoutSec": 10
      }
    ],
    "userPromptSubmitted": [
      {
        "type": "command",
        "bash": "./scripts/log-prompt.sh",
        "powershell": "./scripts/log-prompt.ps1",
        "cwd": ".github/hooks",
        "timeoutSec": 10
      }
    ],
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/pre-tool-policy.sh",
        "powershell": "./scripts/pre-tool-policy.ps1",
        "cwd": ".github/hooks",
        "timeoutSec": 15
      }
    ]
  }
}
```

### Understand what this configuration does

This configuration sets up three hooks:

* `sessionStart`: Shows an informational message when a new agent session starts or resumes.
* `userPromptSubmitted`: Runs whenever a user submits a prompt.
* `preToolUse`: Runs before a tool executes and can explicitly allow or deny execution.

### Commit and share the hook configuration

When you’re ready to share the hook configuration with collaborators (for example, via a pull request or in a test repository), commit the hook configuration and scripts. Don’t commit any local audit logs.

```bash copy
git add .github/hooks/copilot-cli-policy.json .github/hooks/scripts
git commit -m "Add Copilot CLI hook configuration"
git push
```

At this point, {% data variables.copilot.copilot_cli_short %} can discover your hook configuration, even though you haven’t created the hook scripts yet.

## 3. Add a policy banner at session start

Use a `sessionStart` hook to display a banner whenever a new {% data variables.copilot.copilot_cli_short %} session starts or resumes. This makes it clear to developers that organizational policies are active.

The `sessionStart` hook receives contextual information such as the current working directory and the initial prompt. Any output from this hook is ignored by {% data variables.copilot.copilot_cli_short %}, which makes it suitable for informational messages.

### Create the session banner script (Bash)

Create `.github/hooks/scripts/session-banner.sh`:

```bash copy
#!/bin/bash
set -euo pipefail

cat << 'EOF'
COPILOT CLI POLICY ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Prompts and tool use may be logged for auditing
• High-risk commands may be blocked automatically
• If something is blocked, follow the guidance shown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EOF
exit 0
```

### Create the session banner script (PowerShell)

Create `.github/hooks/scripts/session-banner.ps1`:

```powershell copy
$ErrorActionPreference = "Stop"

Write-Host @"
COPILOT CLI POLICY ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Prompts and tool use may be logged for auditing
• High-risk commands may be blocked automatically
• If something is blocked, follow the guidance shown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"@
exit 0
```

### Test the session banner

You can test the banner scripts directly:

```bash
.github/hooks/scripts/session-banner.sh
# or, for PowerShell
.github/hooks/scripts/session-banner.ps1
```

When you run either script, you should see the policy banner displayed in your terminal.

## 4. Log prompts for auditing

Use the `userPromptSubmitted` hook to record when users submit prompts to {% data variables.copilot.copilot_cli_short %}. This hook runs whenever a prompt is sent, before any tools are invoked.

The hook receives structured JSON input that includes the timestamp, current working directory, and full prompt text. The output of this hook is ignored.

> [!IMPORTANT]
> Prompts may contain sensitive information. Apply redaction and follow your organization’s data handling and retention policies when logging this data.

### Create the prompt logging script (Bash)

Create `.github/hooks/scripts/log-prompt.sh`:

```bash copy
#!/bin/bash
set -euo pipefail

INPUT="$(cat)"

TIMESTAMP_MS="$(echo "$INPUT" | jq -r '.timestamp // empty')"
CWD="$(echo "$INPUT" | jq -r '.cwd // empty')"

# This example logs only metadata, not the full prompt, to avoid storing
# potentially sensitive data. Adjust to match your organization’s needs.
LOG_DIR=".github/hooks/logs"
mkdir -p "$LOG_DIR"
chmod 700 "$LOG_DIR"

jq -n \
  --arg ts "$TIMESTAMP_MS" \
  --arg cwd "$CWD" \
  '{event:"userPromptSubmitted", timestampMs:$ts, cwd:$cwd}' \
  >> "$LOG_DIR/audit.jsonl"

exit 0
```

### Create the prompt logging script (PowerShell)

Create `.github/hooks/scripts/log-prompt.ps1`:

```powershell copy
$ErrorActionPreference = "Stop"

$inputObj = [Console]::In.ReadToEnd() | ConvertFrom-Json

$timestampMs = $inputObj.timestamp
$cwd = $inputObj.cwd
$prompt = $inputObj.prompt

# Optional example redaction. Adjust to match your organization’s needs.
$redactedPrompt = $prompt -replace 'ghp_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]'

$logDir = ".github/hooks/logs"
if (-not (Test-Path $logDir)) {
  New-Item -ItemType Directory -Path $logDir -Force | Out-Null
}

$logEntry = @{
  event       = "userPromptSubmitted"
  timestampMs = $timestampMs
  cwd         = $cwd
  prompt      = $redactedPrompt
} | ConvertTo-Json -Compress

Add-Content -Path "$logDir/audit.jsonl" -Value $logEntry
exit 0
```

### Test the prompt logging script

You can test the scripts directly by piping example input.

```bash
echo '{"timestamp":1704614500000,"cwd":"/repo","prompt":"List all branches"}' \
  | .github/hooks/scripts/log-prompt.sh
# or, for PowerShell
echo '{"timestamp":1704614500000,"cwd":"/repo","prompt":"List all branches"}' |
  .github/hooks/scripts/log-prompt.ps1
```

After running the script, check `.github/hooks/logs/audit.jsonl` for a new log entry.

```bash copy
cat .github/hooks/logs/audit.jsonl
```

At this point, prompts submitted to {% data variables.copilot.copilot_cli_short %} in this repository are recorded for auditing.

## 5. Enforce policies with `preToolUse`

Use the `preToolUse` hook to evaluate a tool call **before it runs**. This hook can allow execution (by doing nothing) or deny execution (by returning a structured response).

### Understand the `preToolUse` input

The `preToolUse` hook input includes:

* `toolName`: The tool that {% data variables.copilot.copilot_cli_short %} is about to run (for example, `bash`)
* `toolArgs`: A **JSON string** containing that tool’s arguments

Because `toolArgs` is a JSON string, your script must parse it before reading fields like `command`.

> [!IMPORTANT]
> Tool arguments and commands may contain sensitive information such as API tokens, passwords, or other credentials. Apply redaction before logging this data and follow your organization's security policies. Consider logging only non-sensitive metadata (tool name, timestamp, policy decision) and directing audit events to a secured, centralized logging system with appropriate access controls and retention policies.

### Create the policy script

Next, create a policy script. This example:

* Logs all attempted tool usage.
* Applies deny rules only to bash commands.
* Blocks high-risk patterns such as privilege escalation, destructive operations, and download-and-execute commands.

To let you validate the deny flow safely, the script also includes a temporary demo rule that blocks a harmless test command. After confirming that hooks work as expected, remove the demo rule and replace it with patterns that reflect your organization’s policies.

#### Example script (Bash)

Create `.github/hooks/scripts/pre-tool-policy.sh`:

```bash copy
#!/bin/bash
set -euo pipefail

INPUT="$(cat)"

TOOL_NAME="$(echo "$INPUT" | jq -r '.toolName // empty')"
TOOL_ARGS_RAW="$(echo "$INPUT" | jq -r '.toolArgs // empty')"  # JSON string

LOG_DIR=".github/hooks/logs"
mkdir -p "$LOG_DIR"

# Example redaction logic.
# GitHub does not currently provide built-in secret redaction for hooks.
# This example shows one possible approach; many organizations prefer to
# forward events to a centralized logging system that handles redaction.
# Redact sensitive patterns before logging.
# Adjust these patterns to match your organization's needs.
REDACTED_TOOL_ARGS="$(echo "$TOOL_ARGS_RAW" | \
  sed -E 's/ghp_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
  sed -E 's/gho_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
  sed -E 's/ghu_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
  sed -E 's/ghs_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
  sed -E 's/Bearer [A-Za-z0-9_\-\.]+/Bearer [REDACTED]/g' | \
  sed -E 's/--password[= ][^ ]+/--password=[REDACTED]/g' | \
  sed -E 's/--token[= ][^ ]+/--token=[REDACTED]/g')"

# Log attempted tool use with redacted toolArgs.
jq -n \
  --arg tool "$TOOL_NAME" \
  --arg toolArgs "$REDACTED_TOOL_ARGS" \
  '{event:"preToolUse", toolName:$tool, toolArgs:$toolArgs}' \
  >> "$LOG_DIR/audit.jsonl"

# Only enforce command rules for bash.
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0
fi

# Parse toolArgs JSON string.
# If toolArgs isn't valid JSON for some reason, allow (and rely on logs).
if ! echo "$TOOL_ARGS_RAW" | jq -e . >/dev/null 2>&1; then
  exit 0
fi

COMMAND="$(echo "$TOOL_ARGS_RAW" | jq -r '.command // empty')"

# ---------------------------------------------------------------------------
# Demo-only deny rule for safe testing.
# This blocks a harmless test command so you can validate the deny flow.
# Remove this rule after confirming your hooks work as expected.
# ---------------------------------------------------------------------------
if echo "$COMMAND" | grep -q "COPILOT_HOOKS_DENY_DEMO"; then
  deny "Blocked demo command (test rule). Remove this rule after validating hooks."
fi

deny() {
  local reason="$1"

  # Redact sensitive patterns from command before logging.
  local redacted_cmd="$(echo "$COMMAND" | \
    sed -E 's/ghp_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
    sed -E 's/gho_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
    sed -E 's/ghu_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
    sed -E 's/ghs_[A-Za-z0-9]{20,}/[REDACTED_TOKEN]/g' | \
    sed -E 's/Bearer [A-Za-z0-9_\-\.]+/Bearer [REDACTED]/g' | \
    sed -E 's/--password[= ][^ ]+/--password=[REDACTED]/g' | \
    sed -E 's/--token[= ][^ ]+/--token=[REDACTED]/g')"

  # Log the denial decision with redacted command.
  jq -n \
    --arg cmd "$redacted_cmd" \
    --arg r "$reason" \
    '{event:"policyDeny", toolName:"bash", command:$cmd, reason:$r}' \
    >> "$LOG_DIR/audit.jsonl"

  # Return a denial response.
  jq -n \
    --arg r "$reason" \
    '{permissionDecision:"deny", permissionDecisionReason:$r}'

  exit 0
}

# Privilege escalation
if echo "$COMMAND" | grep -qE '\b(sudo|su|runas)\b'; then
  deny "Privilege escalation requires manual approval."
fi

# Destructive filesystem operations targeting root
if echo "$COMMAND" | grep -qE 'rm\s+-rf\s*/($|\s)|rm\s+.*-rf\s*/($|\s)'; then
  deny "Destructive operations targeting the filesystem root require manual approval."
fi

# System-level destructive operations
if echo "$COMMAND" | grep -qE '\b(mkfs|dd|format)\b'; then
  deny "System-level destructive operations are not allowed via automated execution."
fi

# Download-and-execute patterns
if echo "$COMMAND" | grep -qE 'curl.*\|\s*(bash|sh)|wget.*\|\s*(bash|sh)'; then
  deny "Download-and-execute patterns require manual approval."
fi

# Allow by default
exit 0
```

#### Create the policy script (PowerShell)

Create `.github/hooks/scripts/pre-tool-policy.ps1`:

```powershell copy
$ErrorActionPreference = "Stop"

$inputObj = [Console]::In.ReadToEnd() | ConvertFrom-Json
$toolName = $inputObj.toolName
$toolArgsRaw = $inputObj.toolArgs  # JSON string

$logDir = ".github/hooks/logs"
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }

# Example redaction logic.
# GitHub does not currently provide built-in secret redaction for hooks.
# This example shows one possible approach; many organizations prefer to
# forward events to a centralized logging system that handles redaction.
# Redact sensitive patterns before logging.
# Adjust these patterns to match your organization's needs.
$redactedToolArgs = $toolArgsRaw `
  -replace 'ghp_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
  -replace 'gho_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
  -replace 'ghu_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
  -replace 'ghs_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
  -replace 'Bearer [A-Za-z0-9_\-\.]+', 'Bearer [REDACTED]' `
  -replace '--password[= ][^ ]+', '--password=[REDACTED]' `
  -replace '--token[= ][^ ]+', '--token=[REDACTED]'

# Log attempted tool use with redacted toolArgs.
(@{
  event    = "preToolUse"
  toolName = $toolName
  toolArgs = $redactedToolArgs
} | ConvertTo-Json -Compress) | Add-Content -Path "$logDir/audit.jsonl"

if ($toolName -ne "bash") { exit 0 }

# Parse toolArgs JSON string.
$toolArgs = $null
try { $toolArgs = $toolArgsRaw | ConvertFrom-Json } catch { exit 0 }

$command = $toolArgs.command

# ---------------------------------------------------------------------------
# Demo-only deny rule for safe testing.
# This blocks a harmless test command so you can validate the deny flow.
# Remove this rule after confirming your hooks work as expected.
# ---------------------------------------------------------------------------
if ($command -match 'COPILOT_HOOKS_DENY_DEMO') {
  Deny "Blocked demo command (test rule). Remove this rule after validating hooks."
}

function Deny([string]$reason) {
  # Redact sensitive patterns from command before logging.
  $redactedCommand = $command `
    -replace 'ghp_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
    -replace 'gho_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
    -replace 'ghu_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
    -replace 'ghs_[A-Za-z0-9]{20,}', '[REDACTED_TOKEN]' `
    -replace 'Bearer [A-Za-z0-9_\-\.]+', 'Bearer [REDACTED]' `
    -replace '--password[= ][^ ]+', '--password=[REDACTED]' `
    -replace '--token[= ][^ ]+', '--token=[REDACTED]'

  # Log the denial decision with redacted command.
  (@{
    event    = "policyDeny"
    toolName = "bash"
    command  = $redactedCommand
    reason   = $reason
  } | ConvertTo-Json -Compress) | Add-Content -Path "$logDir/audit.jsonl"

  (@{
    permissionDecision = "deny"
    permissionDecisionReason = $reason
  } | ConvertTo-Json -Compress)

  exit 0
}

if ($command -match '\b(sudo|su|runas)\b') { Deny "Privilege escalation requires manual approval." }
if ($command -match 'rm\s+-rf\s*/(\s|$)|rm\s+.*-rf\s*/(\s|$)') { Deny "Destructive operations targeting the filesystem root require manual approval." }
if ($command -match '\b(mkfs|dd|format)\b') { Deny "System-level destructive operations are not allowed via automated execution." }
if ($command -match 'curl.*\|\s*(bash|sh)|wget.*\|\s*(bash|sh)') { Deny "Download-and-execute patterns require manual approval." }

exit 0
```

### Test the policy script

You can test the scripts by piping example `preToolUse` input.

Allow example:

```bash
echo '{"toolName":"bash","toolArgs":"{\"command\":\"git status\"}"}' \
  | .github/hooks/scripts/pre-tool-policy.sh
# or, for PowerShell
echo '{"toolName":"bash","toolArgs":"{\"command\":\"git status\"}"}' |
  .github/hooks/scripts/pre-tool-policy.ps1
```

Deny example:

```bash
echo '{"toolName":"bash","toolArgs":"{\"command\":\"sudo rm -rf /\"}"}' \
  | .github/hooks/scripts/pre-tool-policy.sh
# or, for PowerShell
echo '{"toolName":"bash","toolArgs":"{\"command\":\"sudo rm -rf /\"}"}' |
  .github/hooks/scripts/pre-tool-policy.ps1
```

After running the deny example, check `.github/hooks/logs/audit.jsonl` for a new denial log entry.

```json
{"permissionDecision":"deny","permissionDecisionReason":"Privilege escalation requires manual approval."}
```

At this point, high-risk `bash` commands are blocked from auto-execution in this repository.

## 6. Test end-to-end in the repository

Once you’ve created the configuration file and scripts, verify that hooks run as expected when you use {% data variables.copilot.copilot_cli_short %} in this repository.

### Validate your hook configuration file

Check that your hook configuration file is valid JSON:

```bash copy
jq '.' < .github/hooks/copilot-cli-policy.json
```

### Verify script permissions (Unix-based systems)

On macOS and Linux, confirm your Bash scripts are executable:

```bash copy
chmod +x .github/hooks/scripts/*.sh
```

### Run a basic session

Start a new {% data variables.copilot.copilot_cli_short %} session in the repository:

```bash copy
copilot -p "Show me the status of this repository"
```

Expected results:

* You see the policy banner (from `sessionStart`).
* A new entry is added to `.github/hooks/logs/audit.jsonl` (from `userPromptSubmitted`).

### Trigger tool use and verify logging

Run a prompt that causes {% data variables.copilot.copilot_cli_short %} to use a tool (for example, bash):

```bash copy
copilot -p "Show me the last 5 git commits"
```

Expected results:

* A `preToolUse` entry is added to `.github/hooks/logs/audit.jsonl`.
* If the tool call is allowed, execution proceeds normally.

### Test a denied command

The example policy script includes a temporary demo rule that blocks commands containing the string `COPILOT_HOOKS_DENY_DEMO`. This allows you to validate the deny flow safely without running destructive commands.

Run a prompt that would trigger a denied command:

```bash copy
copilot -p "Run a test command: echo COPILOT_HOOKS_DENY_DEMO"
```

Expected results:

* {% data variables.copilot.copilot_cli_short %} does not execute the command.
* Your hook returns a denial response with a clear reason.
* A `policyDeny` entry is written to `.github/hooks/logs/audit.jsonl`.

After confirming that the deny flow works correctly, remove the demo rule from your script and replace it with deny patterns that reflect your organization’s policies.

### Inspect your audit logs

To view recent entries:

```bash copy
tail -n 50 .github/hooks/logs/audit.jsonl
```

To filter only denied decisions:

```bash copy
jq 'select(.event=="policyDeny")' .github/hooks/logs/audit.jsonl
```

## 7. Roll out safely across teams

After validating your hooks in a single repository, roll them out gradually to avoid disrupting development workflows.

### Choose a rollout strategy

Common rollout approaches include:

* **Logging-first rollout (recommended)**: Start by logging prompts and tool usage without denying execution. Review logs for a period of time, then introduce deny rules once you understand common usage patterns.
* **Team-by-team rollout**: Deploy hooks to one team or repository at a time, gather feedback, then expand to additional teams.
* **Risk-based rollout**: Start with repositories that handle sensitive systems or production infrastructure, then expand to lower-risk repositories.

### Communicate expectations

Before enforcing deny rules, make sure developers understand:

* That hooks are active in the repository
* Which types of commands may be blocked
* How to proceed if a command is denied

Clear communication reduces confusion and support requests.

### Keep policies maintainable

As usage evolves:

* Store hook configuration and scripts in version control.
* Review audit logs periodically to detect new risk patterns.
* Update deny rules incrementally rather than adding broad matches.
* Document why each deny rule exists, especially for high-impact restrictions.

### Handle exceptions carefully

Some teams (for example, infrastructure or platform teams) may require broader permissions. To handle this safely:

* Maintain separate hook configurations for different repositories.
* Keep exceptions narrow and well-documented.
* Avoid ad-hoc local bypasses that undermine auditability.

## Further reading

For troubleshooting hooks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks#troubleshooting).
