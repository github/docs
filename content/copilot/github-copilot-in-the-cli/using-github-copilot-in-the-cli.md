---
title: Using GitHub Copilot in the CLI
intro: 'You can use `gh`, the {% data variables.product.prodname_dotcom %} command line interface, to work with {% data variables.product.prodname_copilot_cli %}.'
product: '{% data reusables.gated-features.copilot-in-cli %}'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Using Copilot in the CLI
---

## About using {% data variables.product.prodname_copilot_cli %}

{% data reusables.cli.about-cli %} For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

{% data variables.product.prodname_copilot_cli %} is an extension for {% data variables.product.prodname_cli %} which provides a chat-like interface in the terminal that allows you to ask questions about the command line. You can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for your use case, with `gh copilot suggest`, or to explain a command you're curious about, with `gh copilot explain`.

## Prerequisites

- To use {% data variables.product.prodname_copilot_cli_short %} you must have an active {% data variables.product.prodname_copilot %} subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."
- To use {% data variables.product.prodname_copilot_cli_short %} you must have {% data variables.product.prodname_cli %} installed. {% data reusables.cli.cli-installation %}

## Installing {% data variables.product.prodname_copilot_cli_short %}

If you have not already done so, run `gh auth login` to authenticate with your {% data variables.product.prodname_dotcom %} account.

To install the {% data variables.product.prodname_copilot_cli_short %} extension, run `gh extension install github/gh-copilot`.

To update {% data variables.product.prodname_copilot_cli_short %}, run `gh extension upgrade gh-copilot`.

## Using {% data variables.product.prodname_copilot_cli_short %}

To use `gh` to work with {% data variables.product.prodname_copilot %}, type `gh copilot SUBCOMMAND`. Additionally, you can use `gh copilot --help` for general help or `gh copilot SUBCOMMAND --help` for help with a specific subcommand.

### Asking {% data variables.product.prodname_copilot_cli_short %} to explain a command

You can ask {% data variables.product.prodname_copilot_cli_short %} to explain a command for you by running:

```shell
gh copilot explain
```

Alternatively, you can add the command you want explained directly to the prompt:

```shell
gh copilot explain "sudo apt-get"
```

{% data variables.product.prodname_copilot_cli_short %} can help by explaining what a command does in plain language. This makes it easier for you to understand the command's purpose and how it works for a specific example. You don't need to go through the command's documentation because the explanation includes information about what the command takes as input and produces as output, and provides practical examples.

### Asking {% data variables.product.prodname_copilot_cli_short %} to suggest a command

You can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for you by running:

```shell
gh copilot suggest
```

This will start an interactive experience to get the command you need. {% data variables.product.prodname_copilot_cli_short %} aims to suggest commands that help you perform the tasks you’re trying to complete. To help {% data variables.product.prodname_copilot_cli_short %} provide better suggestions, you can specify the type of command you are looking for (generic, `git` or `gh`).

If you already know what command you need, you can also include that in the prompt. For example, if you want to install Git, you can ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command for you:

```shell
gh copilot suggest "Install git"
```

If the result isn’t quite what you’re looking for, you can keep revising your question until the returned command meets your expectations. You can do this by selecting the **Revise command** option.

Once you’ve generated the perfect command for your task, you can easily copy it to your clipboard to run it wherever you need by selecting the **Copy to clipboard** option.

## Sharing feedback about {% data variables.product.prodname_copilot_cli_short %}

If you encounter any issues or limitations with {% data variables.product.prodname_copilot_cli_short %}, you can provide feedback by selecting the **Rate response** option in {% data variables.product.prodname_copilot_cli_short %}.
