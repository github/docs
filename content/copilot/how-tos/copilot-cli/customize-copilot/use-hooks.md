---
title: Using hooks with {% data variables.copilot.copilot_cli %}
shortTitle: Use hooks
intro: "Extend {% data variables.product.prodname_copilot %} agent behavior with custom shell commands at key points during agent execution."
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
redirect_from:
  - /copilot/how-tos/copilot-cli/use-hooks
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.copilot.cloud-agent.hooks-intro %}

## Prerequisite

**For Windows only:** The examples in this article use PowerShell. If you're using Windows, you must have PowerShell 7.0 or later installed and in your PATH. You can check your PowerShell version by running `pwsh --version` in a terminal. To install PowerShell, run `winget install Microsoft.PowerShell` then restart your terminal.

## Creating a repository-level hook

1. Create a new `NAME.json` file (where `NAME` describes the purpose of the file) in the `.github/hooks/` folder of your repository.

{% data reusables.copilot.cloud-agent.create-hooks-instructions %}

## Creating a user-level hook

User-level hooks are configured just like repository-level hooks, but the hook files are stored locally, below your home directory.

The following examples for macOS and Windows show how to configure hooks that will play a sound and display a message box when the CLI finishes responding to a prompt, and when you quit {% data variables.copilot.copilot_cli_short %}. Hooks for Linux would be similar to the macOS example, but would use Linux tools for playing sounds and displaying messages.

### User-level example for macOS

1. Create a file called `notification-hooks.json` in `~/.copilot/hooks/`.

   > [!NOTE]
   > If `COPILOT_HOME` is set, create the file in `$COPILOT_HOME/hooks/`.

1. Copy and paste the following JSON into the file:

   ```json copy
   {
     "version": 1,
     "hooks": {
       "agentStop": [
         {
           "type": "command",
           "bash": "osascript -e 'do shell script \"afplay /System/Library/Sounds/Funk.aiff &> /dev/null &\"' -e 'display dialog \"Agent stopped.\" with title \"Hook-generated message\" buttons {\"OK\"} default button \"OK\"'",
           "timeoutSec": 5
         }
       ],
       "sessionEnd": [
         {
           "type": "command",
           "bash": "osascript -e 'do shell script \"afplay /System/Library/Sounds/Funk.aiff &> /dev/null &\"' -e 'display dialog \"Session ended.\" with title \"Hook-generated message\" buttons {\"OK\"} default button \"OK\"'",
           "timeoutSec": 5
         }
       ]
     }
   }
   ```

{% data reusables.copilot.cloud-agent.hooks-example-steps %}

### User-level example for Windows

1. Create a file called `notification-hooks.json` in `%USERPROFILE%\.copilot\hooks\`.

   > [!NOTE]
   > If `COPILOT_HOME` is set, create the file in `%COPILOT_HOME%\hooks\`.

1. Copy and paste the following JSON into the file:

   ```json copy
   {
     "version": 1,
     "hooks": {
       "agentStop": [
         {
           "type": "command",
           "powershell": "Add-Type -AssemblyName System.Windows.Forms; [System.Media.SystemSounds]::Asterisk.Play(); [System.Windows.Forms.MessageBox]::Show('Agent stopped.', 'Hook-generated message') | Out-Null",
           "timeoutSec": 5
         }
       ],
       "sessionEnd": [
         {
           "type": "command",
           "powershell": "Add-Type -AssemblyName System.Windows.Forms; [System.Media.SystemSounds]::Asterisk.Play(); [System.Windows.Forms.MessageBox]::Show('Session ended.', 'Hook-generated message') | Out-Null",
           "timeoutSec": 5
         }
       ]
     }
   }
   ```

{% data reusables.copilot.cloud-agent.hooks-example-steps %}

## Troubleshooting

{% data reusables.copilot.cloud-agent.troubleshoot-hooks %}

## Further reading

* [AUTOTITLE](/copilot/reference/hooks-reference)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
