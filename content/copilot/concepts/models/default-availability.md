---
title: About default availability of {% data variables.product.prodname_copilot_short %} models
shortTitle: Default availability
intro: A policy controls whether unconfigured models default to enabled or disabled.
product: '{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Manage Copilot for a team
redirect_from:
  - /copilot/concepts/models/automatic-enablement
---

On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, the **Default availability for released models** policy will control whether unconfigured generally available (GA) models default to enabled or disabled. If this policy is enabled, users will benefit from the latest models without the need for administrator intervention.

<!-- expires 2026-08-26 -->

To give you time to prepare, this policy can be configured but **does not currently affect model availability**. On August 26, 2026, new GA models and existing unconfigured GA models will automatically follow the default set in the policy. These are models that you have not explicitly chosen a setting for. They will be relabeled as "inherits default" in the UI.

To prepare for this change, you can disable the policy or explicitly disable models you don't want to be enabled.

<!-- end expires 2026-08-26 -->

## Which models follow the policy?

{% data reusables.copilot.model-autoenablement-excluded-models %}

## How do I prevent default enablement?

To disable default enablement entirely, disable the **Default availability for released models** policy in your enterprise or organization's models policies. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the **Default availability for released models** policy enabled, you can explicitly disable individual models so that they are not eligible for automatic enablement.

For instructions on managing model policies, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new models?

We recommend keeping up with new model releases so you can choose your enablement settings for each one. New models are announced on {% data variables.product.github %}'s changelog. For more information, see [AUTOTITLE](/copilot/concepts/preparing-for-new-features-and-models#learning-about-new-copilot-models).
