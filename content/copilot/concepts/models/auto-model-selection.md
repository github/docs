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

> [!NOTE] {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} with task optimization is generally available in {% data variables.copilot.copilot_chat_short %} on the {% data variables.product.github %} website and in {% data variables.product.prodname_vscode_shortname %}.

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} with task optimization combines two systems to provide high quality results and better reliability. One system tracks real-time system health and availability, while the other evaluates task complexity. Putting these together, {% data variables.copilot.copilot_auto_model_selection_short %} routes the task to the optimal model.

Routing occurs along natural cache boundaries to avoid additional cache related costs. Switching models mid-session has shown increased cost without ample improvements in quality.
This helps you get more value from {% data variables.product.prodname_copilot_short %} since it matches each task to the model that can solve it most efficiently. That means reserving higher-cost reasoning models for problems that truly need it, while routing straightforward tasks to faster, lower-cost models that still deliver great results.

Benefits of using {% data variables.copilot.copilot_auto_model_selection_short %} include:
* Matching each task to the model that can solve it most efficiently.
* Model choice based on real-time system health and availability.
* Language invariance: Routing decisions depend on what you are trying to do, not what language you're asking in.
* Improved cost efficiency due to intelligent task routing.

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

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, optimized for model reliability and availability, is available in these {% data variables.product.prodname_copilot_short %} products: 
* {% data variables.copilot.copilot_chat_short %}, on the {% data variables.product.github %} website and supported IDEs
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.copilot_cloud_agent %}

> [!TIP]
> You can see which model was used for each {% data variables.product.prodname_copilot_short %} response.
> * In **{% data variables.copilot.copilot_chat_short %}**, hover over the response.
> * In **{% data variables.copilot.copilot_cli_short %}**, the model used for each response displays in the terminal.
> * In **{% data variables.copilot.copilot_cloud_agent %}**, the model used for each response displays at the end of the response.

### {% data variables.copilot.copilot_chat_short %} on {% data variables.product.github %} and in IDEs

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, with task optimization, is generally available in the following IDEs:
  * {% data variables.product.prodname_vscode_shortname %}
  * {% data variables.product.github %} website

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, optimized for model reliability and availability, is generally available in the following IDEs:
  * JetBrains IDEs
  * Eclipse
  * Xcode

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %}, optimized for model reliability and availability, is in public preview in the following IDEs:
  * {% data variables.product.prodname_vs %}

#### Enabling access during {% data variables.release-phases.public_preview %}

During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the organization or enterprise that provides your plan must have the **Editor preview features** policy enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom).

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
