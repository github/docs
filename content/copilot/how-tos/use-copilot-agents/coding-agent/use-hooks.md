---
title: Using hooks with GitHub Copilot agents
shortTitle: Use hooks
intro: 'Learn how to extend and customize {% data variables.product.prodname_copilot %} agent behavior by executing custom shell commands at key points during agent execution.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category: 
  - Configure Copilot
---

Hooks allow you to extend and customize the behavior of {% data variables.product.prodname_copilot %} agents by executing custom shell commands at key points during agent execution. For a conceptual overview of hooks, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-hooks).

## Creating a hook in a repository on {% data variables.product.github %}

1. Create a new `hooks.json` file with the name of your choice in the `.github/hooks/` folder of your repository. The hooks configuration file **must be present** on your repository's default branch to be used by {% data variables.copilot.copilot_coding_agent %}. For {% data variables.copilot.copilot_cli %}, hooks are loaded from your current working directory.

1. In your text editor, copy and paste the following hook template. Remove any hooks you don't plan on using from the `hooks` array.

    ```json copy
    {
      "version": 1,
      "hooks": {
        "sessionStart": [...],
        "sessionEnd": [...],
        "userPromptSubmitted": [...],
        "preToolUse": [...],
        "postToolUse": [...],
        "errorOccurred": [...]
      }
    }
    ```

1. Configure your hook syntax under the `bash` or `powershell` keys, or directly reference script files you have created. 

    * This example runs a script that outputs the start date of the session to a log file using the `sessionStart` hook:

      ```json copy
      "sessionStart": [
        {
          "type": "command",
          "bash": "echo \"Session started: $(date)\" >> logs/session.log",
          "powershell": "Add-Content -Path logs/session.log -Value \"Session started: $(Get-Date)\"",
          "cwd": ".",
          "timeoutSec": 10
        }
      ],
      ```
  
    * This example calls out to an external `log-prompt` script:

      ```json copy
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
      ```

      For a full reference on the input JSON from agent sessions along with sample scripts, see [AUTOTITLE](/copilot/reference/hooks-configuration).

1. Commit the file to the repository and merge it into the default branch. Your hooks will now run during agent sessions.

## Troubleshooting

If you run into problems using hooks, use the following table to troubleshoot.

| Issue | Action |
| --- | --- |
| Hooks are not executing | <ul><li>Verify the JSON file is in the `.github/hooks/` directory.</li><li>Check for valid JSON syntax (for example, `jq .  hooks.json`).</li><li>Ensure `version: 1` is specified in your `hooks.json` file.</li><li>Verify the script you are calling from your hook is executable (`chmod +x script.sh`)</li><li>Check that the script has a proper shebang (for example, `#!/bin/bash`)</li></ul> |
| Hooks are timing out | <ul><li>The default timeout is 30 seconds. Increase `timeoutSec` in the configuration if needed.</li><li>Optimize script performance by avoiding unnecessary operations.</li> |
| Invalid JSON output | <ul><li>Ensure the output is on a single line.</li><li>On Unix, use `jq -c` to compact and validate the JSON output.</li><li>On Windows, use the `ConvertTo-Json -Compress` command in PowerShell to do the same.</li></ul> |

## Debugging

You can debug hooks using the following methods:

* **Enable verbose logging** in the script to inspect the input data and trace script execution.

  ```shell copy
  #!/bin/bash
  set -x  # Enable bash debug mode
  INPUT=$(cat)
  echo "DEBUG: Received input" >&2
  echo "$INPUT" >&2
  # ... rest of script
  ```

* **Test hooks locally** by piping test input into your hook to validate its behavior:

  ```shell copy
  # Create test input
  echo '{"timestamp":1704614400000,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}' | ./my-hook.sh

  # Check exit code
  echo $?

  # Validate output is valid JSON
  ./my-hook.sh | jq .
  ```

## Further reading

* For more information about configuring hooks, see [AUTOTITLE](/copilot/reference/hooks-configuration)
* For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent)
* For more information about {% data variables.copilot.copilot_cli %}, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* For information about customizing the agent environment, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment)
