---
title: Hooks for {% data variables.product.prodname_copilot %}
shortTitle: Hooks
intro: 'Run your own checks, logging, or other commands at defined points while a {% data variables.product.prodname_copilot_short %} agent works.'
versions:
  feature: copilot
contentType: concepts
category:
  - Configure Copilot
redirect_from:
  - /copilot/concepts/agents/coding-agent/about-hooks
  - /copilot/concepts/agents/cloud-agent/about-hooks
  - /copilot/concepts/agents/about-hooks
  - /copilot/concepts/agents/hooks
---

## What are hooks?

Hooks are a way of executing custom shell commands at strategic points in an agent's workflow, such as when an agent session starts or ends, when you enter a prompt, or when a tool is called.

Hooks receive detailed information about agent actions via JSON input, enabling context-aware automation. For example, you can use hooks to:

* Programmatically approve or deny tool executions.
* Use built-in security features like secret scanning to prevent credential leaks.
* Implement custom validation rules and audit logging for compliance.

Unlike custom instructions, hooks run code rather than asking the model to follow a rule. For example, a hook can run a script that checks a tool request before it executes.

## Where you can use hooks

Hooks are available in:

* **The {% data variables.copilot.github_copilot_app %}**, which supports repository hooks and hooks supplied by plugins. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app).
* **{% data variables.copilot.copilot_cli %}**, where commands run in its execution environment.
* **{% data variables.copilot.copilot_cloud_agent %}**, where commands run in the agent's cloud environment. Only a subset of events is supported.
* **{% data variables.product.prodname_vscode %}**, where the hooks experience is in {% data variables.release-phases.public_preview %}. Supported events and configuration depend on the agent running the session. See [Agent hooks in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/agent-customization/hooks).

The configuration and examples below describe hooks for {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}. Do not assume that the same events, input, or output work unchanged across surfaces.

For {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}, you can define repository hooks in `.github/hooks/*.json`. {% data variables.copilot.copilot_cli_short %} also supports personal hooks in `~/.copilot/hooks/*.json`. For execution environments, additional locations, and event support, see [AUTOTITLE](/copilot/reference/hooks-reference).

## Types of hooks

These are examples of {% data variables.copilot.copilot_cli_short %} hook events. {% data variables.copilot.copilot_cloud_agent %} supports a subset:

* **sessionStart**: Executed when a new agent session begins or when resuming an existing session. Can be used to initialize environments, log session starts for auditing, validate project state, and set up temporary resources.
* **sessionEnd**: Executed when the agent session completes or is terminated. Can be used to cleanup temporary resources, generate and archive session reports and logs, or send notifications about session completion.
* **userPromptSubmitted**: Executed when the user submits a prompt to the agent. Can be used to log user requests for auditing and usage analysis.
* **preToolUse**: Executed before the agent uses any tool (such as `bash`, `edit`, `view`). This is the most powerful hook as it can **approve or deny tool executions**. Use this hook to block dangerous commands, enforce security policies and coding standards, require approval for sensitive operations, or log tool usage for compliance.
* **postToolUse**: Executed after a tool completes execution (whether successful or failed). Can be used to log execution results, track usage statistics, generate audit trails, monitor performance metrics, and send failure alerts.
* **agentStop**: Executed when the main agent has finished responding to your prompt.
* **subagentStop**: Executed when a subagent completes, before returning results to the parent agent.
* **errorOccurred**: Executed when an error occurs during agent execution. Can be used to log errors for debugging, send notifications, track error patterns, and generate reports.

The hooks reference lists the full set of events and their availability in {% data variables.copilot.copilot_cloud_agent %}.

## Hook configuration format

You configure hooks using a special JSON format. The JSON must contain a `version` field with a value of `1` and a `hooks` object containing arrays of hook definitions.

```json copy
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "string (optional)",
        "powershell": "string (optional)",
        "cwd": "string (optional)",
        "env": { "KEY": "value" },
        "timeoutSec": 30
      }
    ]
  }
}
```

The hook object can contain the following keys:

| Property | Required | Description |
| --- | --- | --- |
| `type` | Yes | Must be `"command"` |
| `bash` | Yes (on Unix systems) | Path to the bash script to execute |
| `powershell` | Yes (on Windows) | Path to the PowerShell script to execute |
| `cwd` | No | Working directory for the script (relative to repository root) |
| `env` | No |  Additional environment variables that are merged with the existing environment |
| `timeoutSec` | No | Maximum execution time in seconds (default: 30) |

## Example hook configuration file

This is an example configuration file that lives in `.github/hooks/project-hooks.json` within a repository.

```json copy
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "echo \"Session started: $(date)\" >> logs/session.log",
        "powershell": "Add-Content -Path logs/session.log -Value \"Session started: $(Get-Date)\"",
        "cwd": ".",
        "timeoutSec": 10
      }
    ],
    "userPromptSubmitted": [
      {
        "type": "command",
        "bash": "./scripts/log-prompt.sh",
        "powershell": "./scripts/log-prompt.ps1",
        "cwd": "scripts",
        "env": {
          "LOG_LEVEL": "INFO"
        }
      }
    ],
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "powershell": "./scripts/security-check.ps1",
        "cwd": "scripts",
        "timeoutSec": 15
      },
      {
        "type": "command",
        "bash": "./scripts/log-tool-use.sh",
        "powershell": "./scripts/log-tool-use.ps1",
        "cwd": "scripts"
      }
    ],
    "postToolUse": [
      {
        "type": "command",
        "bash": "cat >> logs/tool-results.jsonl",
        "powershell": "$input | Add-Content -Path logs/tool-results.jsonl"
      }
    ],
    "sessionEnd": [
      {
        "type": "command",
        "bash": "./scripts/cleanup.sh",
        "powershell": "./scripts/cleanup.ps1",
        "cwd": "scripts",
        "timeoutSec": 60
      }
    ]
  }
}
```

## Performance considerations

Hooks run synchronously and block agent execution. To ensure a responsive experience, keep the following considerations in mind:

* **Minimize execution time**: Keep hook execution time under 5 seconds when possible.
* **Optimize logging**: Use asynchronous logging, like appending to files, rather than synchronous I/O.
* **Use background processing**: For expensive operations, consider background processing.
* **Cache results**: Cache expensive computations when possible.

## Security considerations

To ensure security is maintained when using hooks, keep the following considerations in mind:

* **Always validate and sanitize the input processed by hooks**. Untrusted input could lead to unexpected behavior.
* **Use proper shell escaping when constructing commands**. This prevents command injection vulnerabilities.
* **Never log sensitive data, such as tokens or passwords**.
* **Ensure hook scripts and logs have the appropriate permissions**.
* **Be cautious with hooks that make external network calls**. These can introduce latency, failures, or expose data to third parties.
* **Set appropriate timeouts to prevent resource exhaustion**. Long-running hooks can block agent execution and degrade performance.

## Next steps

To start creating hooks, see:
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks) for {% data variables.copilot.copilot_cloud_agent %}
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks) for {% data variables.copilot.copilot_cli %}
