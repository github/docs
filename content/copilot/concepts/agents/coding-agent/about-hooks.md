---
title: About hooks
shortTitle: Hooks
intro: 'Extend and customize {% data variables.product.prodname_copilot %} agent behavior by executing custom shell commands at key points during agent execution.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category: 
  - Configure Copilot
---

## About hooks

Hooks enable you to execute custom shell commands at strategic points in an agent's workflow, such as when an agent session starts or ends, or before and after a prompt is entered or a tool is called. 

Hooks receive detailed information about agent actions via JSON input, enabling context-aware automation. For example, you can use hooks to:

* Programmatically approve or deny tool executions.  
* Utilize built-in security features like secret scanning to prevent credential leaks.
* Implement custom validation rules and audit logging for compliance.

{% data variables.product.prodname_copilot_short %} agents support hooks stored in JSON files in your repository at `.github/hooks/*.json`.

Hooks are available for use with:

* {% data variables.copilot.copilot_coding_agent %} on {% data variables.product.github %}
* {% data variables.copilot.copilot_cli %} in the terminal 

## Types of hooks

The following types of hooks are available:

* **sessionStart**: Executed when a new agent session begins or when resuming an existing session. Can be used to initialize environments, log session starts for auditing, validate project state, and set up temporary resources.
* **sessionEnd**: Executed when the agent session completes or is terminated. Can be used to cleanup temporary resources, generate and archive session reports and logs, or send notifications about session completion.
* **userPromptSubmitted**: Executed when the user submits a prompt to the agent. Can be used to log user requests for auditing and usage analysis. 
* **preToolUse**: Executed before the agent uses any tool (such as `bash`, `edit`, `view`). This is the most powerful hook as it can **approve or deny tool executions**. Use this hook to block dangerous commands, enforce security policies and coding standards, require approval for sensitive operations, or log tool usage for compliance.
* **postToolUse**: Executed after a tool completes execution (whether successful or failed). Can be used to log execution results, track usage statistics, generate audit trails, monitor performance metrics, and send failure alerts.
* **errorOccurred**: Executed when an error occurs during agent execution. Can be used to log errors for debugging, send notifications, track error patterns, and generate reports.

To see a complete reference of hook types with example use cases, best practices, and advanced patterns, see [AUTOTITLE](/copilot/reference/hooks-configuration).

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
    ],
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

This is an example configuration file that lives in `~/.github/hooks/project-hooks.json` within a repository.

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

To start creating hooks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks).

