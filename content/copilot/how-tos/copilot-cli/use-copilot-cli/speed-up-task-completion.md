---
title: Speeding up task completion with the `/fleet` command
shortTitle: Speed up task completion
intro: Learn how you can speed up the completion of a multi-step implementation plan by using the `/fleet` slash command.
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/speeding-up-task-completion
  - /copilot/how-tos/copilot-cli/speed-up-task-completion
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

Where a task involves multiple operations, some or all of which can be worked on in parallel, the `/fleet` slash command can speed up task completion. When you use this command, {% data variables.product.prodname_copilot_short %} assigns separate parts of the work to subagents.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/fleet).

## Using the `/fleet` slash command

To use the `/fleet` slash command, enter the command followed by your prompt.

### Typical workflow

Typically, you'll use the `/fleet` slash command after creating an implementation plan.

1. In an interactive CLI session, press <kbd>Shift</kbd>+<kbd>Tab</kbd> to switch into plan mode.
1. Enter a prompt describing the feature you want to add or the change you want to make.
1. Work with {% data variables.product.prodname_copilot_short %} in plan mode to create an implementation plan.
1. Once the plan is complete, select one of the following options:

   * **Accept plan and build on autopilot + /fleet** to allow {% data variables.product.prodname_copilot_short %} to use subagents and work autonomously to implement the plan without any further input.
   * **Exit plan mode and I will prompt myself** and then enter a prompt such as `/fleet implement the plan`. {% data variables.product.prodname_copilot_short %} will start working on the plan, using subagents to run parts of the work in parallel where possible. It may ask you to answer questions or make decisions as it works through the plan.

### Monitoring progress

Use the `/tasks` slash command to see a list of background tasks relating to the current session. This will include any subtasks handled by subagents when you use the `/fleet` command.

Use up and down keyboard keys to navigate through the list of background tasks. For each subagent task, you can:

* Press <kbd>Enter</kbd> to view details. When the subtask is complete, you will see a summary of what was done.
* Press <kbd>x</kbd> to kill the process.
* Press <kbd>r</kbd> to remove completed or killed subtasks from the list.

Press <kbd>Esc</kbd> to exit the task list and return to the main CLI prompt.

## Starting in fleet mode from the command line

You can start {% data variables.copilot.copilot_cli_short %} in fleet mode directly from the command line by using the `--fleet` option. This is the command-line equivalent of the `/fleet` slash command. It wraps the prompt you supply, so {% data variables.product.prodname_copilot_short %} starts working on it in fleet mode straight away. You don't have to enter `/fleet` in an interactive session.

The `--fleet` option is not supported in ACP server mode, so you cannot combine it with the `--acp` option.

You must provide a prompt for {% data variables.product.prodname_copilot_short %} to work on. You can supply the prompt in one of three ways:

* With the `-i` (interactive) option, to start an interactive session that begins in fleet mode.
* With the `-p` (prompt) option, to run a task without an interactive session. The session exits when the task is complete.
* By piping the prompt in through standard input.

### When to use the `--fleet` option

The `--fleet` option is particularly useful for automation, using the `-p` option, when you know that a task can be split into parts that run in parallel.

For more information about the `-p` option and running tasks without an interactive session, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically).

### Examples

Run a task in fleet mode without an interactive session:

```shell copy
copilot --fleet -p "Refactor the utils package and update everything that calls it" --allow-tool write
```

Pipe a prompt into fleet mode:

```shell copy
echo "Update the project dependencies and run the tests" | copilot --fleet
```

Start an interactive session that begins in fleet mode:

```shell copy
copilot --fleet -i "Add unit tests for every module in the src directory"
```

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface)
