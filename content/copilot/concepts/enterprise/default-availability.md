---
title: About default availability of {% data variables.product.prodname_copilot_short %} features and models
shortTitle: Default availability
intro: Policies control whether unconfigured features and models default to enabled or disabled.
product: '{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Manage Copilot for a team
redirect_from:
  - /copilot/concepts/models/automatic-enablement
  - /copilot/concepts/models/default-availability
  - /copilot/concepts/enterprise/default-model-availability
---

{% data reusables.copilot.default-availability-policies %}

<!-- expires 2026-10-22 -->

## Default availability of features

The **Default policy for new features** policy is available to configure but is **not** currently active. It will start applying to new and existing GA features from October 22, 2026. In your policy settings, you will see a banner showing how many eligible policies are currently unconfigured, so you can assess the impact of your global default and explicitly configure individual policies before October 22.

This policy is enabled by default. If you don't take action, unconfigured features will be enabled on October 22.

<!-- end expires 2026-10-22 -->

### What does the policy do?

Your setting for this policy determines the enablement status of:

* New GA (general availability) features
* Features that move from preview to GA 
* Existing GA features that are **Unconfigured** in your policy settings

The policy can be configured in an enterprise and its organizations. At the enterprise level, it applies to features labeled as **Unconfigured**. At the organization level, it applies to features that an enterprise owner has set to **Let organizations decide**, but that an organization owner has not explicitly configured.

The policy does **not** apply to features in preview.

### What counts as a feature?

For the purposes of this policy, a "feature" refers to any policy configured on an enterprise's "Features & clients" page (`github.com/enterprises/ENTERPRISE/ai-controls/copilot/features`), **plus**:

* The **{% data variables.copilot.copilot_code-review_short %}** policy on the "Agents" page
* The **MCP servers in {% data variables.product.prodname_copilot_short %}** policy on the "MCP" page

The following policies are exceptions and are **not** affected:

* Restrictive model policies on {% data variables.enterprise.data_residency_site %}: **Restrict Copilot to data residency models** and **Restrict Copilot to FedRAMP models**
* **Store local sessions in the Cloud** for {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} 

## Default availability of models

The **Default availability for released models** policy is active and affects new and unconfigured GA models.

### Which models follow the policy?

{% data reusables.copilot.model-autoenablement-excluded-models %}

## How do I prevent default enablement?

To disable default enablement entirely, disable the default policies in your enterprise or organization's settings. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the default availability policies enabled, you can explicitly disable individual features and models so that they are not eligible for automatic enablement.

* For features, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).
* For models, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new releases?

We recommend keeping up with new releases and GA announcements so you can choose your enablement settings. New features and models are announced on {% data variables.product.github %}'s changelog. For more information, see [AUTOTITLE](/copilot/concepts/enterprise/learning-about-new-features-and-models).
