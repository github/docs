---
title: Setting a personal access token policy for your organization
intro: 'Organization owners can control access to resources by applying policies to {% data variables.product.pat_generic_plural %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Set a token policy
---

{% data reusables.user-settings.pat-v2-org-opt-in %}

## Restricting access by {% data variables.product.pat_generic_plural %}

Organization owners can prevent {% data variables.product.pat_generic_plural %} from accessing resources owned by the organization with the following options:
* **Restrict access via {% data variables.product.pat_generic_plural %}:** {% data variables.product.pat_v1_caps_plural %} or {% data variables.product.pat_v2_plural %} cannot access resources owned by the organization. SSH keys created by {% data variables.product.pat_generic_plural %} will continue to work.
* **Allow access via {% data variables.product.pat_generic_plural %}:** {% data variables.product.pat_v1_caps_plural %} or {% data variables.product.pat_v2_plural %} can access resources owned by the organization.

Regardless of the chosen policy, {% data variables.product.pat_generic_caps_plural %} will have access to public resources within the organization.

{% ifversion ghec or ghes %} If your organization is owned by an enterprise, and your enterprise owner has restricted access by {% data variables.product.pat_generic_caps_plural %}, you cannot override the policy in your organization. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Settings**. {% ifversion tabbed-pat-settings-ui %}
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type. {% endif %}
1. Under **{% data variables.product.pat_v2_caps_plural %}** or **Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations**, select your access policy.
1. Click **Save**.

{% ifversion pats-maximum-lifetime %}

## Enforcing a maximum lifetime policy for {% data variables.product.pat_generic_plural %}

Organization owners can set maximum lifetime allowances for both {% data variables.product.pat_v2_plural %} and {% data variables.product.pat_v1_plural %} to control access to organization resources. {% ifversion ghec or ghes %} However, these policies cannot exceed the maximum lifetime set at the enterprise level or disable the expiration policy set at the enterprise level. See [Enforcing a maximum lifetime policy for {% data variables.product.pat_generic_plural %}](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-a-maximum-lifetime-policy-for-personal-access-tokens) {% endif %}

For {% data variables.product.pat_v2_plural %}, the default the maximum lifetime policy for organizations is set to expire within 366 days. {% data variables.product.pat_v1_caps_plural %} do not have an expiration requirement.

When you set a policy, tokens with non-compliant lifetimes will be blocked from accessing your organization if the token belongs to a member of your organization. Setting this policy does not revoke or disable these tokens. Users will learn that their existing token is non-compliant when API calls for your organization are rejected.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, click **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**.
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type.
1. Under **Set maximum lifetimes for {% data variables.product.pat_generic_plural %}**, set the maximum lifetime.
1. Click **Save**.  
{% endif %}

## Enforcing an approval policy for {% data variables.product.pat_v2_plural %}

Organization owners can manage approval requirements for each {% data variables.product.pat_v2 %} that can access the organization with the following options:
  * **Require administrator approval:** An organization owner must approve each {% data variables.product.pat_v2 %} that can access the organization. {% data variables.product.pat_v2_caps_plural %} created by organization owners will not need approval.
  * **Do not require administrator approval:** {% data variables.product.pat_v2_caps %}s created by organization members can access resources in the organization without prior approval.

{% data variables.product.pat_v2_caps %}s will still be able to read public resources within the organization without approval.

{% ifversion ghec or ghes %} If your organization is owned by an enterprise, and your enterprise owner has set an approval policy for {% data variables.product.pat_v2 %}s, then you cannot override the policy in your organization. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).{% endif %}

> [!NOTE]
> Only {% data variables.product.pat_v2_plural %}, not {% data variables.product.pat_v1_plural %}, are subject to approval. Unless the organization has restricted access by {% data variables.product.pat_v1_plural %}, any {% data variables.product.pat_v1 %} can access organization resources without prior approval. For more information, see [Restricting access by {% data variables.product.pat_generic_plural %}](#restricting-access-by-personal-access-tokens) on this page.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Settings**. {% ifversion tabbed-pat-settings-ui %}
1. Select the **Fine-grained tokens** tab. {% endif %}
1. Under **Require approval of {% data variables.product.pat_v2_plural %}**, select the option that meets your needs:
1. Click **Save**.
