---
title: 'About {% data variables.product.prodname_copilot_short %} auto model selection'
allowTitleToDifferFromFilename: true
shortTitle: 'Auto model selection'
intro: 'Optimize {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %} without needing to select a model'
product: '{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is available in {% data variables.product.prodname_vscode_shortname %} with all {% data variables.product.prodname_copilot %} plans.'
topics:
  - Copilot
versions:
  feature: copilot
contentType: concepts
category: 
  - Learn about Copilot
---

> [!NOTE] {% data variables.copilot.copilot_auto_model_selection %} rolls out to {% data variables.product.prodname_vscode_shortname %} starting in September 2025.

## Overview

Experience less rate limiting and reduce the mental load of choosing a model by letting {% data variables.copilot.copilot_auto_model_selection %} automatically choose the best available model.  

In {% data variables.product.prodname_vscode_shortname %}, {% data variables.copilot.copilot_auto_model_selection %} chooses from {% data variables.copilot.copilot_gpt_41 %}, {% data variables.copilot.copilot_gpt_5_mini %}, {% data variables.copilot.copilot_gpt_5 %}, {% data variables.copilot.copilot_claude_sonnet_35 %}, and {% data variables.copilot.copilot_claude_sonnet_45 %}, based on availability and to help reduce rate limiting. Included models may change over time.

Automatically selected models **won't** include these models:
* Models with premium request multipliers greater than one. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#model-multipliers).
* Models excluded by individual or administrator policies. See [AUTOTITLE](/copilot/how-tos/use-ai-models/configure-access-to-ai-models).
* Models not available in your plan. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

To see which model was used for each response, hover over the response in {% data variables.copilot.copilot_chat_short %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

While {% data variables.copilot.copilot_auto_model_selection_short %} is an option for {% data variables.copilot.copilot_chat_short %}, you can manually choose a different model to override this selection. {% data reusables.copilot.change-the-ai-model %}

## Multiplier discounts

{% data reusables.copilot.auto-model-multiplier-discount %} See [AUTOTITLE](/copilot/concepts/billing/copilot-requests#model-multipliers).

## Enabling access during {% data variables.release-phases.public_preview %}

During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the organization or enterprise that provides your plan must have the **Editor preview features** policy enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom).
