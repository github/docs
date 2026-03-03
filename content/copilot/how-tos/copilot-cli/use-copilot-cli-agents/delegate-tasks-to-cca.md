---
title: Delegating tasks to {% data variables.copilot.copilot_cli %}
shortTitle: Delegate tasks to Copilot
intro: Use {% data variables.copilot.copilot_cli_short %}''s autopilot mode to hand off tasks and have {% data variables.product.prodname_copilot_short %} work autonomously on your behalf.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Build with Copilot CLI
---

## Get {% data variables.product.prodname_copilot_short %} to work autonomously

You can tell {% data variables.product.prodname_copilot_short %} to use its best judgment to complete a task autonomously, rather than the CLI prompting you for input at each decision point within a task. You do this by using the CLI's autopilot mode.

There are two ways to use autopilot mode:

* **Interactively:** In an interactive session, press <kbd>Shift</kbd>+<kbd>Tab</kbd> until you see "autopilot" in the status bar. If prompted to choose permissions for autopilot mode, allow full permissions, then enter your prompt.
* **Programmatically:** Pass the CLI a prompt directly in a command, and include the `--autopilot` option. For example, to use autopilot mode with full permissions, restricting it to 10 continuations, enter `{% data reusables.cli.autopilot-programmatic-prompt %}`.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot).

## Delegate tasks to {% data variables.copilot.copilot_coding_agent %}

The delegate command lets you push your current session to {% data variables.copilot.copilot_coding_agent %} on {% data variables.product.github %}. This lets you hand off work while preserving all the context {% data variables.product.prodname_copilot_short %} needs to complete your task.

You can delegate a task using the slash command, followed by a prompt:

```shell
/delegate complete the API integration tests and fix any failing edge cases
```

Alternatively, prefix a prompt with `&` to delegate it:

```shell
& complete the API integration tests and fix any failing edge cases
```

{% data variables.product.prodname_copilot_short %} will ask to commit any of your unstaged changes as a checkpoint in a new branch it creates. {% data variables.copilot.copilot_coding_agent %} will open a draft pull request, make changes in the background, and request a review from you.

{% data variables.product.prodname_copilot_short %} will provide a link to the pull request and agent session on {% data variables.product.github %} once the session begins.

## Next steps

To learn how to invoke specialized agents tailored to specific tasks, such as code review, documentation, or security audits, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli-agents/invoke-custom-agents).
