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

1. Configure your hook syntax under the `bash` and `powershell` keys, or directly reference script files you have created.

   > [!NOTE]
   > Include both a `bash` key (with a script for Linux and macOS) and a `powershell` key (for a script for Windows) to allow the hooks to run on all three operating systems. {% data variables.product.prodname_copilot_short %} uses the appropriate key based on the user's operating system.

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

     For a full reference on the input JSON from agent sessions along with sample scripts, see [AUTOTITLE](/copilot/reference/hooks-reference).

1. Commit the file to the repository and merge it into the default branch. Your hooks will now run during agent sessions.
