---
title: Customizing GitHub Copilot in the CLI
shortTitle: Customize Copilot in the CLI
intro: 'Learn how to customize and set up aliases for {% data variables.copilot.copilot_cli_short %}.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
redirect_from:
  - /copilot/github-copilot-in-the-cli/configuring-github-copilot-in-the-cli
  - /copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-the-cli
  - /copilot/how-tos/personal-settings/configuring-github-copilot-in-the-cli
  - /copilot/how-tos/personal-settings/customizing-github-copilot-in-the-cli
  - /copilot/how-tos/personal-settings/customize-copilot-in-the-cli
contentType: how-tos
---

Before you begin, make sure you have installed {% data variables.copilot.copilot_cli_short %}. See [AUTOTITLE](/copilot/how-tos/set-up/installing-github-copilot-in-the-cli).

## Setting up aliases

You can create aliases for {% data variables.copilot.copilot_cli_short %} to reduce keystrokes, and to allow {% data variables.copilot.copilot_cli_short %} to execute commands on your behalf.

To allow {% data variables.copilot.copilot_cli_short %} to execute commands, you must run the following commands to create the aliases (as opposed to creating an alias like you would for another shell command).

After executing the following commands to create the aliases, you can run `ghcs` and `ghce` instead of `gh copilot suggest` and `gh copilot explain`.

### Bash

```shell copy
echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc
```

### PowerShell

```shell copy
$GH_COPILOT_PROFILE = Join-Path -Path $(Split-Path -Path $PROFILE -Parent) -ChildPath "gh-copilot.ps1"
gh copilot alias -- pwsh | Out-File ( New-Item -Path $GH_COPILOT_PROFILE -Force )
echo ". `"$GH_COPILOT_PROFILE`"" >> $PROFILE
```

### Zsh

```shell copy
echo 'eval "$(gh copilot alias -- zsh)"' >> ~/.zshrc
```

## Changing the default execution confirmation

When you use the `ghcs` alias and you select **Execute command**, {% data variables.copilot.copilot_cli_short %} will ask for confirmation before executing the command. You can change the default confirmation.

1. Execute the following command:

   ```shell copy
   gh copilot config
   ```

1. Select **Default value for confirming command execution**.
1. Choose the desired default.

## Changing usage analytics

Unless you opt out, {% data variables.copilot.copilot_cli_short %} will send a payload in the format below to the analytics system. This data helps improve the product. {% data variables.product.company_short %} does not look at the data of specific individuals or at specific queries.

```json
{
  "platform": "darwin",
  "architecture": "arm64",
  "version": "0.3.0-beta",
  "custom_event": "true",
  "event_parent_command": "explain",
  "event_name": "Explain",
  "sha": "089a53215fc4383179869f7f6132ce9d6e58754a",
  "thread_id": "e61d0d08-f6ba-465b-81cf-c30fd9127d70"
}
```

To opt in or out of data collection:

1. Execute the following command:

   ```shell copy
   gh copilot config
   ```

1. Select **Optional Usage Analytics**.
1. Choose the desired default.
