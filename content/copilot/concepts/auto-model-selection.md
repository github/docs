---
title: 'About {% data variables.product.prodname_copilot_short %} auto model selection'
allowTitleToDifferFromFilename: true
shortTitle: 'Auto model selection'
intro: 'Automatically select models for {% data variables.copilot.copilot_chat_short %}.'
product: '{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is in  {% data variables.release-phases.public_preview %} for supported IDEs with all {% data variables.product.prodname_copilot %} plans.'
topics:
  - Copilot
versions:
  feature: copilot
contentType: concepts
category: 
  - Learn about Copilot
---

## Overview

Experience less rate limiting and reduce the mental load of choosing a model by letting {% data variables.copilot.copilot_auto_model_selection %} automatically choose the best available model on your behalf.

{% data variables.copilot.copilot_auto_model_selection %} is currently optimized for model availability, choosing from a list of models that may change over time. It currently chooses from {% data variables.copilot.copilot_gpt_41 %}, {% data variables.copilot.copilot_gpt_5_mini %}, {% data variables.copilot.copilot_gpt_51_codex_max %}, {% data variables.copilot.copilot_claude_haiku_45 %}, {% data variables.copilot.copilot_claude_sonnet_45 %}, and {% data variables.copilot.copilot_gemini_3_pro %}, based on your subscription type.

With {% data variables.copilot.copilot_auto_model_selection %}, you benefit from:
  * Reduced chances of rate limiting
  * Discounted multipliers for paid plans
 
> [!NOTE] Soon {% data variables.copilot.copilot_auto_model_selection %} will choose the best model for you by taking into account both model availability and your task.
  
> [!TIP] To see which model was used for each response, hover over the response in {% data variables.copilot.copilot_chat_short %}.

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is available in the following IDEs: 
  * {% data variables.product.prodname_vscode_shortname %}
  * {% data variables.product.prodname_vs %}
  * Eclipse
  * JetBrains IDEs
  * Xcode

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} **won't** include these models:
* Models excluded by individual or administrator policies. See [AUTOTITLE](/copilot/how-tos/use-ai-models/configure-access-to-ai-models).
* Models with premium request multipliers greater than one. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#model-multipliers).
* Models not available in your plan. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

## AI models for {% data variables.copilot.copilot_chat_short %}

While {% data variables.copilot.copilot_auto_model_selection_short %} is an option for {% data variables.copilot.copilot_chat_short %}, you can manually choose a different model to override this selection. {% data reusables.copilot.change-the-ai-model %}

## Multiplier discounts

{% data reusables.copilot.auto-model-multiplier-discount %} See [AUTOTITLE](/copilot/concepts/billing/copilot-requests#model-multipliers).

## Enabling access during {% data variables.release-phases.public_preview %}

During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the organization or enterprise that provides your plan must have the **Editor preview features** policy enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom).
