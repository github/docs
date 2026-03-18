---
title: Base and long-term support (LTS) models
shortTitle: Base and LTS models
intro: 'Learn about base models, long-term support (LTS) models, and how they affect model availability for enterprises using {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
contentType: concepts
category:
  - Manage Copilot for a team
---

## About base models

> [!IMPORTANT]
> * On March 18, 2026, {% data variables.product.github %} designated {% data variables.copilot.copilot_gpt_53_codex %} as the base model.
> * Base models apply only to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.

 A base model is the default AI model that {% data variables.product.prodname_copilot %} uses when no other models are enabled. The base model is automatically enabled for all {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} accounts within 60 days after the model is designated as a base model.

When a new model is designated a base model, the following timeline applies:

| Phase              | Timeline                      | What happens                                                                                       |
|--------------------|-------------------------------|----------------------------------------------------------------------------------------------------|
| Announcement       | Day 0                         | {% data variables.product.github %} announces the new base model.                              |
| Upgrade window     | Day 0 to Day 60               | Customers have 60 days to upgrade their IDE extensions to versions that support the new model.     |
| Enablement         | Day 60                        | The new model is automatically enabled on all organizations and enterprises as the base model. |

> [!NOTE]
> The base model has a **1x premium request multiplier** on paid plans. For more information about multipliers, see [AUTOTITLE](/copilot/concepts/billing/copilot-requests#model-multipliers).

## About long-term support (LTS) models

> [!IMPORTANT]
> * On March 18, 2026, {% data variables.product.github %} designated {% data variables.copilot.copilot_gpt_53_codex %} as the LTS model.
> * LTS models apply only to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.

An LTS model is an AI model that {% data variables.product.github %} commits to supporting for an extended period of one year from its designation date. During that period, the model remains available, which allows users to build around the model without concern that it will be {% data variables.release-phases.closing_down %} unexpectedly.

## Continuous access when premium requests are unavailable

{% data variables.copilot.copilot_gpt_53_codex %} is available on paid plans with a 0x premium request multiplier, which means it does not consume premium requests. This ensures continuous access to {% data variables.product.prodname_copilot_short %} in situations such as:
* Premium request quota exhausted: If a user has used their monthly premium request allowance, they can continue working with {% data variables.copilot.copilot_gpt_41 %} (the former base model) at no additional cost.
* Overage controls disabled: If an organization or enterprise has disabled premium request overages and a user reaches their limit, {% data variables.copilot.copilot_gpt_53_codex %} will not remain available.

## Further reading

* [AUTOTITLE](/copilot/reference/ai-models/supported-models)
* [AUTOTITLE](/copilot/concepts/billing/copilot-requests)
