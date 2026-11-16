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

**Windows users only:** The example hooks in this article are designed to run on Windows, Linux, and macOS. For Windows, they use PowerShell and require you to have PowerShell 7.0 or later installed and in your PATH. You can check your PowerShell version by running `pwsh --version` in a terminal. To install PowerShell, run `winget install Microsoft.PowerShell` then restart your terminal.

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

## Troubleshooting sandboxed hooks

If a hook fails or times out only when sandboxing is enabled, a tool it calls may need access to a configuration file or cache. See [AUTOTITLE](/copilot/reference/hooks-reference#sandboxed-sessions).

Before granting access, remember that user settings apply across CLI sessions and are not limited to this hook. Configuration files such as `.npmrc` can contain credentials. Grant only access you are willing to give to other sandboxed commands. Organization-managed restrictions still apply.

1. Check the hook's or tool's error output and logs for a denied file or directory. If the script suppresses errors, enable diagnostic output without logging credentials.
1. Run `/sandbox policy` followed by the hook command to preview command-specific developer-tool access in your current directory.

   > [!NOTE]
   > If the hook sets `cwd` you must run `/sandbox policy` from the configured `cwd` directory.

   This does not inspect script files or include the hook's additional source and data directory permissions. See [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/understanding-local-sandboxing#checking-what-the-current-policy-allows).
1. In your user settings, add only the required paths to `sandbox.userPolicy.filesystem.readonlyPaths` or `sandbox.userPolicy.filesystem.readwritePaths`. Use read-only access for configuration files and read/write access only for caches the tool needs to update. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#user-settings-copilotsettingsjson).
1. Start a new CLI session and check whether the hook succeeds when its event next occurs.

## Further reading

* [AUTOTITLE](/copilot/reference/hooks-reference)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
