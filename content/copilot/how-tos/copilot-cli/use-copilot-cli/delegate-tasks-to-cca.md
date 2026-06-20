---
title: Delegating tasks to {% data variables.product.prodname_copilot_short %}
shortTitle: Delegate tasks to {% data variables.product.prodname_copilot_short %}
intro: Use autopilot mode, or the `/delegate` slash command, to get {% data variables.product.prodname_copilot_short %} to work autonomously on your behalf.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/use-copilot-cli-agents/delegate-tasks-to-cca
category:
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

{% data variables.copilot.copilot_cli_short %} offers two ways to have {% data variables.product.prodname_copilot_short %} work autonomously: **autopilot mode** and the **`/delegate` command**. Both let you hand off tasks, but they differ in where the work happens:

* **Autopilot mode** runs locally in your CLI session. You give autopilot full permissions and {% data variables.product.prodname_copilot_short %} then works on a task without stopping to prompt you for input. Your local machine does the work, and you can watch progress in real time. Use autopilot when you want hands-free local execution.

* **`/delegate`** pushes the task to {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.github %}. The work runs remotely: {% data variables.product.prodname_copilot_short %} creates a branch, opens a draft pull request, and works in the background. Use `/delegate` when you want to hand off a task entirely and continue running even if you shut down your local machine.

## Get autopilot to complete tasks autonomously on your local machine

There are two ways to use autopilot mode:

* **Interactively:** In an interactive session, press <kbd>Shift</kbd>+<kbd>Tab</kbd> until you see "autopilot" in the status bar. If prompted to choose permissions for autopilot mode, allow full permissions, then enter your prompt.
* **Programmatically:** Pass the CLI a prompt directly in a command, and include the `--autopilot` option. For example, to use autopilot mode with full permissions, restricting it to 10 continuations, enter `{% data reusables.cli.autopilot-programmatic-prompt %}`.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot).

## Delegate tasks to {% data variables.copilot.copilot_cloud_agent %}

You can delegate a task to {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.github %} by using the `/delegate`slash command, followed by a prompt:

```shell
/delegate complete the API integration tests and fix any failing edge cases
```

Alternatively, prefix a prompt with `&` to delegate it:

```shell
& complete the API integration tests and fix any failing edge cases
```

{% data variables.product.prodname_copilot_short %} will ask to commit any of your unstaged changes as a checkpoint in a new branch it creates. {% data variables.copilot.copilot_cloud_agent %} will open a draft pull request, make changes in the background, and request a review from you.

{% data variables.product.prodname_copilot_short %} will provide a link to the pull request and agent session on {% data variables.product.github %} once the session begins.

## Next steps

To learn how to invoke specialized agents tailored to specific tasks, such as code review, documentation, or security audits, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents).
