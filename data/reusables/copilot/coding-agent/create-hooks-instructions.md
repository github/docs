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