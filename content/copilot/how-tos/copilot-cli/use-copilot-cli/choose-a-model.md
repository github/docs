---
title: Choosing a model in {% data variables.copilot.copilot_cli %}
shortTitle: Choose a model
intro: 'Choose which large language model you want {% data variables.copilot.copilot_cli_short %} to use for a task.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

{% data reusables.copilot.choose-model-intro %}

## Identifying the currently selected model

Information about currently selected model is displayed as the last items in the status line, below the prompt box in an interactive session.

## Choosing a model

You can choose which model you want to use for the current session. This choice takes effect immediately if {% data variables.product.prodname_copilot_short %} is currently idle, or when the current turn completes. The model will continue to be used for the remainder of the session, unless you change it again. Your choice persists if you later resume the session, but other current or future sessions are not affected.

If you have installed local models, these are only available if you are currently in a local session. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models).

1. In an interactive session, enter `/model`.

   A list of models is displayed. You can press <kbd>Shift</kbd>+<kbd>Tab</kbd> to arrange the list into different model groupings: recommended, by vendor, by provider, or by category.

1. Use the up/down arrow keys on your keyboard to navigate through the list of available models.
1. Optionally:

   * On models with context tier options, use the tab key to change the context capacity.
   * On models with a choice of reasoning levels, use the left/right arrow keys to change the reasoning level.

1. Press <kbd>Enter</kbd> to use the highlighted model.

### Choosing the "{% data variables.copilot.copilot_fusion_short %}" option

When you choose **{% data variables.copilot.copilot_fusion_short %}** and an effort level, {% data variables.product.prodname_copilot_short %} chooses models, and execution patterns when needed, for your task, then returns a single response. {% data variables.copilot.copilot_fusion_short %} has multiple effort levels to let you prioritize the quality, cost, and capability tradeoffs that the system prioritizes for each prompt.

For more information, see [AUTOTITLE](/copilot/concepts/models/copilot-fusion).

If you have installed the {% data variables.copilot.mai_code_1_1_flash %} model on your local machine, then {% data variables.copilot.copilot_fusion_short %}, can choose this model—in {% data variables.product.prodname_vscode_shortname %}, {% data variables.copilot.copilot_cli_short %}, and the {% data variables.copilot.github_copilot_app %}—when you set the effort level to {% data variables.copilot.copilot_fusion_standard %}. This allows tasks to be completed without using {% data variables.product.prodname_ai_credits %}. {% data reusables.copilot.model-download-from-app %}

{% data variables.copilot.copilot_fusion_short %}, on the {% data variables.copilot.copilot_fusion_standard %} effort level, can also use {% data variables.copilot.qwen3.8-flash-next %} on your local machine.

### Choosing a model from the command line

You can select a model from the command line by using the `--model` option. For example:

```bash
copilot --model MODEL-NAME -p "YOUR PROMPT"
```

You can use {% data variables.copilot.copilot_fusion_short %} to automatically select an appropriate model. Use `fusion` as the model name, and `--fusion-tier` with `standard`, `high`, or `max` to specify the effort level. For example:

```bash
copilot --model fusion --fusion-tier standard -p "YOUR PROMPT"
```

### Choosing a specific model for a subagent

You can configure a subagent to use a specific model.

This allows you, for example, to use a locally hosted model for part of the work on a task. To do this, configure a {% data variables.copilot.copilot_custom_agent_short %} to use that model and then ask the main {% data variables.product.prodname_copilot_short %} agent to delegate a focused task to to that subagent. This does not change the main session's model. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

### Setting your default model

You can set a default model for {% data variables.copilot.copilot_cli_short %}.

1. In an interactive session, enter `/config model`.
1. Use the up/down arrow keys on your keyboard to navigate through the list of available models.
1. Use the tab key and left/right arrow keys to change the context capacity and reasoning level, where these are available.
1. Press <kbd>Enter</kbd> to use the highlighted model.

Your choice is applied to the current session and future sessions.

> [!NOTE]
> Project settings, enforced administrator policies, and explicit invocation options can take precedence over your default model choice.
