---
title: Using GitHub Copilot in the CLI
intro: 'You can use `gh`, the {% data variables.product.prodname_dotcom %} command line interface, to work with {% data variables.product.prodname_copilot_cli %}.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Using Copilot in the CLI
---

## About using {% data variables.product.prodname_copilot_cli %}

{% data reusables.cli.about-cli %} For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

{% data reusables.copilot.copilot-cli-about %} You can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for your use case, with `gh copilot suggest`, or to explain a command you're curious about, with `gh copilot explain`.

Additionally, you can use `gh copilot --help` for general help or `gh copilot SUBCOMMAND --help` for help with a specific subcommand.

## Prerequisites

To access {% data variables.product.prodname_copilot_cli %} you will need the following.

- **Subscription to {% data variables.product.prodname_copilot %}**: You must have an active {% data variables.product.prodname_copilot %} subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."
- **Access to {% data variables.product.prodname_copilot_cli_short %}**: If you are part of an organization{% ifversion ghec %} or enterprise{% endif %} with a {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %} subscription, the organization{% ifversion ghec %} or enterprise{% endif %} owner will need to grant you access to {% data variables.product.prodname_copilot_cli_short %}. For more information, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/setting-up-github-copilot-in-the-cli)."
- **Install {% data variables.product.prodname_cli %}**: You must have {% data variables.product.prodname_cli %} installed. {% data reusables.cli.cli-installation %}
- **Install the {% data variables.product.prodname_copilot_cli_short %} extension**: Additionally, you must have the {% data variables.product.prodname_copilot_cli_short %} extension installed. For more information, see "[Installing {% data variables.product.prodname_copilot_cli_short %}](/copilot/github-copilot-in-the-cli/setting-up-github-copilot-in-the-cli)."

## Asking {% data variables.product.prodname_copilot_cli_short %} to explain a command

You can ask {% data variables.product.prodname_copilot_cli_short %} to explain a command for you by running:

```shell copy
gh copilot explain
```

Alternatively, you can add the command you want explained directly to the prompt:

```shell copy
gh copilot explain "sudo apt-get"
```

{% data variables.product.prodname_copilot_cli_short %} can help by explaining what a command does in plain language. This makes it easier for you to understand the command's purpose and how it works for a specific example. You don't need to go through the command's documentation because the explanation includes information about what the command takes as input and produces as output, and provides practical examples.

## Asking {% data variables.product.prodname_copilot_cli_short %} to suggest a command

You can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for you by running:

```shell copy
gh copilot suggest
```

This will start an interactive experience to get the command you need. {% data variables.product.prodname_copilot_cli_short %} aims to suggest commands that help you perform the tasks you’re trying to complete. To help {% data variables.product.prodname_copilot_cli_short %} provide better suggestions, you can specify the type of command you are looking for (generic, `git` or `gh`).

If you already know what command you need, you can also include that in the prompt. For example, if you want to install Git, you can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for you:

```shell copy
gh copilot suggest "Install git"
```

If the result isn’t quite what you’re looking for, you can keep revising your question until the returned command meets your expectations. You can do this by selecting the **Revise command** option.

Once you’ve generated the perfect command for your task, you can easily copy it to your clipboard to run it wherever you need by selecting the **Copy to clipboard** option, or you can execute the command.

### Executing the command

After {% data variables.product.prodname_copilot_cli_short %} suggests a command, you can choose to execute the command by selecting the **Execute command** option. If you select this option after running `gh copilot suggest` to ask for a suggestion, {% data variables.product.prodname_copilot_cli_short %} will copy the command to your clipboard and exit out of the interactive session automatically. You can then paste the command and run it yourself.

If you want {% data variables.product.prodname_copilot_cli_short %} to execute commands for you, the `ghcs` alias generated by `gh copilot alias` provides this support. For more information about configuring the `ghcs` alias, see "[Setting up aliases for {% data variables.product.prodname_copilot_cli_short %}](#setting-up-aliases-for-copilot-in-the-cli)."

When you use the `ghcs` alias and you select **Execute command**, {% data variables.product.prodname_copilot_cli_short %} will ask for your confirmation before executing the command. The confirmation prompt defaults to `No`, but you can change your preference via the `gh copilot config` option. For more information, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/configuring-github-copilot-in-the-cli)."

If you confirm, the command will be executed and saved to your shell history for future reference.

## Setting up aliases for {% data variables.product.prodname_copilot_cli_short %}

With `gh copilot alias`, you can create aliases for {% data variables.product.prodname_copilot_cli_short %}. Aliases are not required to use {% data variables.product.prodname_copilot_cli_short %}, but they can be useful for convenience as they require fewer keystrokes and aid in executing suggested commands.

You can also use the provided aliases to wrap `gh copilot suggest` and `gh copilot explain`. The provided aliases are `ghcs` and `ghce`. To use `ghcs` and `ghce`, you'll need to add some alias configurations to your shell configuration file.

The following examples show how to add the alias configurations to your Bash, PowerShell, and Zsh configuration files.

**Bash**

Run the following to add the aliases to your Bash configuration file:

```shell copy
echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc
```

**PowerShell**

Run the following to add the aliases to your PowerShell profile:

```shell copy
$GH_COPILOT_PROFILE = Join-Path -Path $(Split-Path -Path $PROFILE -Parent) -ChildPath "gh-copilot.ps1"
gh copilot alias -- pwsh | Out-File ( New-Item -Path $GH_COPILOT_PROFILE -Force )
echo ". `"$GH_COPILOT_PROFILE`"" >> $PROFILE
```

**Zsh**

Run the following to add the aliases to your Zsh configuration file:

```shell copy
echo 'eval "$(gh copilot alias -- zsh)"' >> ~/.zshrc
```

Once you have the alias set up, you can run the following:

```shell copy
ghcs 'print "Hello world!"'
```

## Sharing feedback about {% data variables.product.prodname_copilot_cli_short %}

If you encounter any issues or limitations with {% data variables.product.prodname_copilot_cli_short %}, you can provide feedback by selecting the **Rate response** option in {% data variables.product.prodname_copilot_cli_short %}.
