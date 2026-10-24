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

## Default availability of features

The **Default policy for new features and clients** policy applies to any new or existing GA feature that you have not explicitly configured.

### When does the policy apply?

Your setting for this policy determines the default enablement status of:

* Newly released GA (general availability) features
* Existing GA features that are **Unconfigured** in your policy settings

The policy can be configured in an enterprise and its organizations. At the enterprise level, it applies to features labeled as **Unconfigured**. At the organization level, it applies to features that an enterprise owner has set to **Let organizations decide**, but that an organization owner has not explicitly configured.

The policy does **not** apply to features in preview.

### Policy states

At the enterprise level, the policy has the following possible states.

Policy state | Outcome
------------ | --------
**Let organizations decide** | The "default availability" policy decision is delegated to organizations. An unconfigured feature is set to "Let organizations decide" if its policy supports that option; otherwise, it is disabled. For a feature delegated to organizations and not explicitly configured by an organization owner, the organization-level "default policy" for new features determines its availability.
**Enabled everywhere** | Any unconfigured, GA feature is automatically enabled for all your {% data variables.product.prodname_copilot_short %} users, and organizations cannot disable it.
**Disabled everywhere** | Any unconfigured, GA feature is automatically disabled for all your {% data variables.product.prodname_copilot_short %} users, and organizations cannot enable it.

### What counts as a feature?

For the purposes of this policy, a "feature" refers to any policy configured on an enterprise's "Features & clients" page (`github.com/enterprises/ENTERPRISE/ai-controls/copilot/features`), **plus**:

* The **{% data variables.copilot.copilot_code-review_short %}** policy on the "Agents" page
* The **MCP servers in {% data variables.product.prodname_copilot_short %}** policy on the "MCP" page

The following policies are exceptions and are **not** affected:

* Restrictive model policies on {% data variables.enterprise.data_residency_site %}: **Restrict Copilot to data residency models** and **Restrict Copilot to FedRAMP models**
* **Store local sessions in the Cloud** for {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} 

## Default availability of models

The **Default availability for released models** policy is active and affects new and unconfigured GA models.

>[!NOTE] This policy is **not** related to the default model that is selected for users' sessions. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).

### Which models follow the policy?

{% data reusables.copilot.model-autoenablement-excluded-models %}

### Policy states

At the enterprise level, the **Default availability for released models** policy has the following possible states.

Policy state | Outcome
------------ | --------
**Enabled** | Any model labeled **Delegate to Default Policy** is automatically enabled for all your {% data variables.product.prodname_copilot_short %} users, and organizations or teams cannot disable it.
**Disabled** | Any model labeled **Delegate to Default Policy** is automatically disabled for all your {% data variables.product.prodname_copilot_short %} users, and organizations or teams cannot enable it.
**Let organizations decide** | (Not available in enterprise teams mode.) Any model labeled **Delegate to Default Policy** is automatically available for organizations to enable or disable. In each organization, an eligible model follows the organization-level **Default availability for released models** policy if the organization has not explicitly configured it.

#### Policy states for models

The status of each model in your enterprise's model settings reflects whether or not it follows the default policy.

Model status | Description
------------ | -----------
**Enabled** or **Disabled** | Explicitly configured. **Does not follow** the default availability policy.
**Delegate to default policy** | Has not been configured. **Follows** the default availability policy.
**Unconfigured** | Has not been configured. **Does not follow** the default availability policy. For example, a model in preview.
**Delegate to organizations** or **Delegate to Enterprise Teams/Apps** | (Depends on whether you have enabled enterprise teams mode.) Explicitly configured. **Does not follow** the default availability policy at the enterprise level. However, if delegated to organizations, **will follow** the organization-level default availability policy _for each organization that does not explicitly configure the model_.

## How do I prevent default enablement?

To disable default enablement entirely, disable the default policies in your enterprise or organization's settings. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the default availability policies enabled, you can explicitly disable individual features and models so that they are not eligible for automatic enablement.

* For features, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).
* For models, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new releases?

We recommend keeping up with new releases and GA announcements so you can choose your enablement settings. New features and models are announced on {% data variables.product.github %}'s changelog. For more information, see [AUTOTITLE](/copilot/concepts/enterprise/learning-about-new-features-and-models).
