---
title: 'About {% data variables.product.prodname_copilot_short %} auto model selection'
allowTitleToDifferFromFilename: true
shortTitle: 'Auto model selection'
intro: 'Automatically select models for {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cloud_agent %}, and third-party agents.'
product: '{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} for {% data variables.copilot.copilot_chat_short %} is available with all {% data variables.product.prodname_copilot %} plans. <br>{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} for {% data variables.copilot.copilot_cloud_agent %} is available for {% data variables.copilot.copilot_pro %} and {% data variables.copilot.copilot_pro_plus %} plans.'
versions:
  feature: copilot
contentType: concepts
category: 
  - Learn about Copilot
---

## Overview

Experience less rate limiting and reduce the mental load of choosing a model by letting {% data variables.copilot.copilot_auto_model_selection %} choose the best available model on your behalf.

{% data variables.copilot.copilot_auto_model_selection %} intelligently chooses models based on real time system health and model performance.  You benefit from:
  * Reduced rate limiting
  * Lower latency and errors
  * Discounted multipliers for paid plans ({% data variables.copilot.copilot_chat_short %} only)

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} **won't** include these models:
* Models excluded by administrator policies. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* Models with premium request multipliers greater than one. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#model-multipliers).
* Models not available in your plan. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

> [!NOTE] Soon {% data variables.copilot.copilot_auto_model_selection %} will choose the best model for you based on your task.

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.copilot.copilot_chat_short %}

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is generally available in the following IDEs: 
  * {% data variables.product.prodname_vscode_shortname %}
  * JetBrains IDEs

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is in public preview for the following IDEs: 
  * {% data variables.product.prodname_vs %}
  * Eclipse
  * Xcode

When you select **Auto** in {% data variables.copilot.copilot_chat_short %} in IDEs, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} chooses from the supported models, subject to your policies and subscription type. Models may change over time. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

> [!TIP] To see which model was used for each response, hover over the response in {% data variables.copilot.copilot_chat_short %} in IDEs.

 {% data reusables.copilot.change-the-ai-model %}

### Multiplier discounts

{% data reusables.copilot.auto-model-multiplier-discount %} See [AUTOTITLE](/copilot/concepts/billing/copilot-requests#model-multipliers).

### Enabling access during {% data variables.release-phases.public_preview %}

During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the organization or enterprise that provides your plan must have the **Editor preview features** policy enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom).

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.copilot.copilot_cli %}

When you select **Auto** from the list of available models in {% data variables.copilot.copilot_cli %}, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} chooses from the supported models, subject to your policies and subscription type. Models may change over time. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

When using Auto, the model used for each response displays in the terminal.

 {% data reusables.copilot.change-the-ai-model %}

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.copilot.copilot_cloud_agent %}

When you select **Auto** in {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} chooses from the supported list of models, subject to your policies and subscription type. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

{% data reusables.copilot.change-the-ai-model-copilot-cloud-agent %}

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.product.prodname_openai_codex %}

When you select **Auto** in the {% data variables.product.prodname_openai_codex %} coding agent, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} currently chooses from the following list of models, subject to your policies and subscription type:

{% data reusables.copilot.openai-codex-agent-models %}

For more information, see [AUTOTITLE](/copilot/concepts/agents/openai-codex).

## {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} in {% data variables.product.prodname_anthropic_claude %}

When you select **Auto** in the {% data variables.product.prodname_anthropic_claude %} coding agent, {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} currently chooses from the following list of models, subject to your policies and subscription type:

{% data reusables.copilot.anthropic-claude-agent-models %}

For more information, see [AUTOTITLE](/copilot/concepts/agents/anthropic-claude).
