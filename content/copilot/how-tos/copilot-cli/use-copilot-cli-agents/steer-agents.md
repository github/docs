---
title: Steering agents in {% data variables.copilot.copilot_cli %}
shortTitle: Steer agents
intro: Guide {% data variables.product.prodname_copilot_short %} during task execution to keep work on track with your intent.
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

## Steer the conversation while {% data variables.product.prodname_copilot_short %} is thinking

While {% data variables.product.prodname_copilot_short %} is working on a task, you can enter a new prompt at any time. Any input you send while {% data variables.product.prodname_copilot_short %} is thinking is treated as steering and is considered in the context of the current task.

There is no separate instruction queue. To provide additional instructions, enter another prompt while {% data variables.product.prodname_copilot_short %} is running. {% data variables.product.prodname_copilot_short %} processes each message in order as part of the active task.

Steering lets you:

* Interrupt an agent that is heading in the wrong direction.
* Provide inline feedback when rejecting a tool permission request.
* Refine or clarify the task scope partway through execution.

## Next steps

To learn how to use {% data variables.copilot.copilot_cli_short %} to get an AI-powered review of your code changes, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli-agents/agentic-code-review).
