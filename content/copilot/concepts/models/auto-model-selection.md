---
title: 'About {% data variables.product.prodname_copilot_short %} {% data variables.copilot.copilot_auto_model_selection_short %}'
allowTitleToDifferFromFilename: true
shortTitle: 'Auto model selection'
intro: 'Automatically select the best model for each task.'
product: '{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is available with all {% data variables.product.prodname_copilot %} plans.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
redirect_from:
  - /copilot/concepts/auto-model-selection
---

## Overview

More than just a model picker, {% data variables.copilot.copilot_auto_model_selection_short %} is an intelligent system delivering high quality results, better reliability, and one less decision to make as the model landscape rapidly evolves.

### Auto with task optimization

> [!NOTE] {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} with task optimization is generally available in {% data variables.copilot.copilot_chat_short %} on the {% data variables.product.github %} website, in {% data variables.product.prodname_vscode_shortname %}, in {% data variables.copilot.copilot_cli_short %}, and in {% data variables.copilot.github_copilot_app %}.

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} with task optimization combines two systems to provide high quality results and better reliability. One system tracks real-time system health and availability, while the other evaluates task complexity. Putting these together, {% data variables.copilot.copilot_auto_model_selection_short %} routes the task to the optimal model.

Routing occurs along natural cache boundaries to avoid additional cache related costs. Switching models mid-session has shown increased cost without ample improvements in quality.
This helps you get more value from {% data variables.product.prodname_copilot_short %} since it matches each task to the model that can solve it most efficiently. That means reserving higher-cost reasoning models for problems that truly need it, while routing straightforward tasks to faster, lower-cost models that still deliver great results.

Benefits of using {% data variables.copilot.copilot_auto_model_selection_short %} include:
* Matching each task to the model that can solve it most efficiently.
* Model choice based on real-time system health and availability.
* Language invariance: Routing decisions depend on what you are trying to do, not what language you're asking in.
* Improved cost efficiency due to intelligent task routing.

#### Auto tier options

When using auto with task optimization, there are three tiers available. Use these tiers to adjust how {% data variables.copilot.copilot_auto_model_selection_short %} preferentially routes models for each prompt. 

| Tier | Priority | Typical use |
| --- | --- | --- |
| **Efficiency** | Cost | Well suited to fast, straightforward tasks. |
| **Balance** | Balances cost, quality and latency | A good fit for everyday work. |
| **Intelligence** | Quality | Built for complex tasks. |

With tiers, {% data variables.copilot.copilot_auto_model_selection_short %} still considers the prompt for each task. The same models remain available in each tier, but tiered routing changes how preferred models are selected for each task.  Examples for each tier:
* **Efficiency**: All prompts are routed to the most cost-efficient and appropriately capable model for the task. 
* **Balance**: For each prompt, the model is selected by considering cost, quality, and latency, to provide cost effective and efficient performance appropriate to the complexity of each prompt.
* **Intelligence**: Prompts are evaluated for which model would provide the highest quality response. A simple prompt could still be routed to a smaller model, while a complex prompt is routed to the most capable model for that task.

Usage is still charged based on the model auto selects, regardless of tier, alongside the 10% discount for users on paid plans. See [Discount for auto model selection](#discount-for-using-auto-model-selection). 

### Auto optimized for model reliability and availability

Experience less rate limiting by letting {% data variables.copilot.copilot_auto_model_selection_short %} choose the best available model on your behalf.

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, optimized for model reliability and availability, intelligently chooses models based on real-time system health and model performance. You benefit from:
* Reduced rate limiting
* Lower latency and errors

### Policies and availability

When you select **Auto**, {% data variables.copilot.copilot_auto_model_selection_short %} chooses from supported models, subject to your policies and subscription type. Available models may change over time. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} **won't** include these models:
* Models not available in your plan.
* Models excluded by administrator policies. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* Models excluded by policies restricting {% data variables.product.prodname_copilot_short %} to data-resident or FedRAMP-compliant models.
* Models excluded by policies restricting [Evaluation models](/copilot/reference/ai-models/supported-models#evaluation-models).

### Disabling evaluation models in {% data variables.copilot.copilot_auto_model_selection_short %}

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} may serve evaluation models to users on {% data variables.product.prodname_copilot_short %} plans for individuals. Individuals can disable use of these models at any time. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#evaluation-models).

### Discount for using {% data variables.copilot.copilot_auto_model_selection_short %}

{% data reusables.copilot.auto-model-discount %}

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.product.prodname_copilot_short %}

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, with task optimization, is generally available in these {% data variables.product.prodname_copilot_short %} products:
* {% data variables.copilot.copilot_chat_short %}, on the {% data variables.product.github %} website and supported IDEs
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.github_copilot_app %}
* {% data variables.copilot.copilot_cloud_agent %}

> [!NOTE] Auto tiers are only available on {% data variables.product.prodname_vscode_shortname %}, {% data variables.copilot.copilot_cli_short %}, and {% data variables.copilot.github_copilot_app %} .

> [!TIP]
> You can see which model was used for each {% data variables.product.prodname_copilot_short %} response.
> * In **{% data variables.copilot.copilot_chat_short %}**, hover over the response.
> * In **{% data variables.copilot.copilot_cli_short %}**, the model used for each response displays in the terminal.
> * In **{% data variables.copilot.copilot_cloud_agent %}**, the model used for each response displays at the end of the response.
> * In **{% data variables.copilot.github_copilot_app %}**, the model used for each response is shown by the model picker next to **Auto**.

### {% data variables.copilot.copilot_chat_short %} in IDEs

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, with task optimization, is generally available in the following IDEs:
  * {% data variables.product.prodname_vscode_shortname %}

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, optimized for model reliability and availability, is generally available in the following IDEs:
  * JetBrains IDEs
  * Eclipse
  * Xcode
  * {% data variables.product.prodname_vs %}

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in third-party agents

When you select **Auto** in the {% data variables.product.prodname_openai_codex %} or {% data variables.product.prodname_anthropic_claude %} coding agents, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} chooses from the supported list of models, subject to your policies and subscription type.

### {% data variables.product.prodname_openai_codex %} supported models

These models are available for {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in the {% data variables.product.prodname_openai_codex %} coding agent.

{% data reusables.copilot.openai-codex-agent-models %}

For more information, see [AUTOTITLE](/copilot/concepts/agents/openai-codex).

### {% data variables.product.prodname_anthropic_claude %} supported models

These models are available for {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in the {% data variables.product.prodname_anthropic_claude %} coding agent.

{% data reusables.copilot.anthropic-claude-agent-models %}

For more information, see [AUTOTITLE](/copilot/concepts/agents/anthropic-claude).
