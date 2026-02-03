---
title: Getting started with GitHub Copilot CLI
shortTitle: Copilot CLI quickstart
intro: 'Quickly learn how to use {% data variables.copilot.copilot_cli %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
contentType: get-started
category:
  - Learn about Copilot
  - Author and optimize with Copilot
---

## Introduction

{% data variables.copilot.copilot_cli %} is a powerful terminal-native AI coding assistant that brings agentic capabilities directly to your command line. The {% data variables.copilot.copilot_cli_short %} offers deep flexibility, {% data variables.product.github %} workflow integration, and the ability to work autonomously on complex tasks while maintaining full user control.

This guide will help you start using the CLI.

## Installation

Use one of these commands:

* **Cross-platform (npm)**

    ```bash copy
    npm install -g @github/copilot
    ```

* **Windows (WinGet)**

    ```bash copy
    winget install GitHub.Copilot
    ```

* **macOS/Linux (Homebrew)**

    ```bash copy
    brew install copilot-cli
    ```

## Starting the CLI for the first time

1. In the terminal, navigate to the project directory where you want to use {% data variables.copilot.copilot_cli_short %}.
1. Start an interactive CLI session:

   ```bash
   copilot
   ```

1. In the CLI interface, enter `/login` and follow the on-screen prompts to authenticate with your {% data variables.product.github %} account.

   You'll only have to do this the first time you use the CLI.

1. When prompted, confirm that you trust that the files in the current directory are suitable for use with an AI tool.

   > [!NOTE]
   > {% data variables.product.prodname_copilot_short %} won't make changes to your files without your explicit approval.

1. Try asking {% data variables.product.prodname_copilot_short %} a question, for example:

   ```copilot copy
   Give me an overview of this project.
   ```

## Core shortcuts to master

| Shortcut | Action |
| -------- | ------ |
| <kbd>Esc</kbd>                | Cancel the current operation |
| <kbd>Ctrl</kbd>+<kbd>C</kbd>  | Cancel if thinking, clear input, or exit |
| <kbd>Ctrl</kbd>+<kbd>L</kbd>  | Clear the screen |
| `@`                           | Mention files to include in context |
| `/`                           | Show slash commands |
| <kbd>↑</kbd> and <kbd>↓</kbd> | Navigate the command history |

For a full list of shortcuts and available commands, enter:

```bash
/help
```

## Using {% data variables.copilot.copilot_cli %} non-interactively

You can also enter a command and get a response from {% data variables.product.prodname_copilot_short %} directly in your terminal, without starting an interactive session.

To do this, pass a prompt to the CLI with the `-p` flag. For example:

```bash
copilot -p "In Git, how can I apply a commit from another branch"
```

The `-p` flag allows you to use {% data variables.copilot.copilot_cli %} programmatically within scripts, for example to automate tasks using AI.

You can add the `-s` flag to tell the CLI to output only {% data variables.product.prodname_copilot_short %}'s response, omitting the additional usage information.

```bash
copilot -sp "YOUR PROMPT HERE"
```

For details of other flags you can use programmatically, and for more information, enter:

```bash
copilot help
```

or:

```bash
copilot help TOPIC
```

where TOPIC is one of the topics listed in the help output.

## Next steps

Find out more about {% data variables.copilot.copilot_cli_short %}:

* [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/cli-best-practices)
