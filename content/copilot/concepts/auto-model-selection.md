---
title: 'About {% data variables.product.prodname_copilot_short %} auto model selection'
allowTitleToDifferFromFilename: true
shortTitle: 'Auto model selection'
intro: 'Optimize {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %} without needing to select a model'
product: '{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} is available in {% data variables.product.prodname_vscode_shortname %} with the {% data variables.copilot.copilot_free %}, {% data variables.copilot.copilot_pro %} and {% data variables.copilot.copilot_pro_plus %} plans.'
topics:
  - Copilot
versions:
  feature: copilot
contentType: concepts
---

> [!NOTE] {% data variables.copilot.copilot_auto_model_selection %} rolls out to {% data variables.product.prodname_vscode_shortname %} starting in September 2025.

## Overview

Experience less rate limiting and reduce the mental load of choosing a model by letting {% data variables.copilot.copilot_auto_model_selection %} automatically choose the best available model.  

{% data variables.copilot.copilot_auto_model_selection %} is available in {% data variables.product.prodname_vscode_shortname %}. Models are selected based on availability and to reduce rate limiting. Included models may change over time.

Automatically selected models **won't** include these models:
* Models with premium request multipliers greater than one. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#model-multipliers).
* Models excluded by individual or administrator policies. See [AUTOTITLE](/copilot/how-tos/use-ai-models/configure-access-to-ai-models).
* Models not available in your plan. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

To see which model was used for each response, hover over the response in {% data variables.copilot.copilot_chat_short %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

While {% data variables.copilot.copilot_auto_model_selection_short %} is an option for {% data variables.copilot.copilot_chat_short %}, you can manually choose a different model to override this selection. {% data reusables.copilot.change-the-ai-model %}

## Multiplier discounts

{% data reusables.copilot.auto-model-multiplier-discount %} See [AUTOTITLE](//copilot/concepts/billing/copilot-requests#model-multipliers).
