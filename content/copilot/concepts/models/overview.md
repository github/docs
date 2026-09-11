---
title: Models in GitHub Copilot
shortTitle: Overview
intro: 'Understand the types and availability of AI models in {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
contentType: concepts
---

## About models in {% data variables.product.prodname_copilot_short %}

{% data variables.product.prodname_copilot %} supports a range of AI models. Different models have different strengths. For example, some prioritize low latency, while others are optimized for complex reasoning or large context windows. For a full list of supported models, see [AUTOTITLE](/copilot/reference/ai-models/supported-models).

Depending on the surface you're using, your plan, and any policies your organization or enterprise has set, you can often **choose** which model handles your request, or **let {% data variables.copilot.copilot_auto_model_selection_short %} choose** one for you. Model choice affects the speed, cost, and quality of your results, so understanding your options helps you get the most out of every feature.

In addition, {% data variables.product.prodname_copilot_short %} also has utility models that run automatically in the background, and for {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, base and long-term support (LTS) models for extended stability.

## Model choice

When you're using {% data variables.product.prodname_copilot_short %}, whether that's on {% data variables.product.github %}, {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app %} and supported IDEs, you can select the model that best suits your task. For guidance on which model fits common tasks, such as general-purpose coding, large-scale refactors, or documentation writing, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

### What determines which models are available to you

The models you see in {% data variables.product.prodname_copilot_short %} depend on several factors:

* **Your plan.** Some models are available on all plans, while others, such as premium models, require a paid plan. See [AUTOTITLE](/copilot/get-started/plans).
* **The {% data variables.product.prodname_copilot_short %} surface or client you're using.** Not every model is available in every IDE, on {% data variables.product.github %}, in {% data variables.copilot.copilot_cli_short %}, or in the {% data variables.copilot.github_copilot_app %}. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-client).
* **Administrator policies.** If you're part of an organization or enterprise, administrators can enable or disable specific models, which affects what you and {% data variables.copilot.copilot_auto_model_selection_short %} can use. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* **Model availability over time.** Providers periodically release new models and retire older ones, so the specific models available to you can change. Check [AUTOTITLE](/copilot/reference/ai-models/supported-models) for the current list.

## Auto model selection

Rather than requiring you to track every model's strengths yourself, you can select **Auto** in the model picker. {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} then routes your request to an appropriate supported model based on the complexity of your task and real-time model availability. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).

## Bring your own key

With bring your own key (BYOK), you (or your enterprise) can connect a custom or provider-hosted model to {% data variables.product.prodname_copilot_short %}. Availability depends on the mechanism you use and the client you're working in. See [AUTOTITLE](/copilot/concepts/models/bring-your-own-key).

## Utility models for background features

Some {% data variables.product.prodname_copilot_short %} features, such as generating a commit message or a chat session title, run on small utility models that work automatically in the background. Utility models aren't part of the model picker, and you can't select them directly. See [AUTOTITLE](/copilot/concepts/models/utility-models).

## Base and long-term support models

{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} accounts have access to two additional model designations:

* A **base model** is used automatically when no other model is enabled for the account.
* A **long-term support (LTS) model** is supported for a defined extended period of time, currently one year from its designation date.

See [AUTOTITLE](/copilot/concepts/models/fallback-and-lts-models).

## Further reading

* [AUTOTITLE](/copilot/reference/ai-models)
