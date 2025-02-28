---
title: Enforcing policies for personal access tokens in your enterprise
intro: 'Enterprise owners can control access to resources by applying policies to {% data variables.product.pat_generic_plural %}'
versions:
  ghec: '*'
  ghes: '*'
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
redirect_from:
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise
---

> [!NOTE]
> {% data reusables.user-settings.pat-v2-beta %}
>
> During the {% data variables.release-phases.public_preview %}, enterprises must opt in to {% data variables.product.pat_v2_plural %}. If your enterprise has not already opted-in, then you will be prompted to opt-in and set policies when you follow the steps below.
>
> Organizations within an enterprise can opt in to {% data variables.product.pat_v2_plural %}, even if the enterprise has not. All users, including {% data variables.product.prodname_emus %}, can create {% data variables.product.pat_v2_plural %} that can access resources owned by the user (such as repositories created under their account) regardless of the enterprise's opt in status.

## Restricting access by {% data variables.product.pat_generic_plural %}

Enterprise owners can prevent their members from using {% data variables.product.pat_generic_plural %} to access resources owned by the enterprise. You can configure these restrictions for {% data variables.product.pat_v1_plural %} and {% data variables.product.pat_v2_plural %} independently with the following options:
* **Allow organizations to configure access requirements:** Each organization owned by the enterprise can decide whether to restrict or permit access by {% data variables.product.pat_generic_plural %}.
* **Restrict access via {% data variables.product.pat_generic_plural %}:** {% data variables.product.pat_generic_caps_plural %} cannot access organizations owned by the enterprise. SSH keys created by these {% data variables.product.pat_generic_plural %} will continue to work. Organizations cannot override this setting.
* **Allow access via {% data variables.product.pat_generic_plural %}:** {% data variables.product.pat_generic_caps_plural %} can access organizations owned by the enterprise. Organizations cannot override this setting.

Regardless of the chosen policy, {% data variables.product.pat_generic_caps_plural %} will have access to public resources within the organizations managed by your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under **{% octicon "law" aria-hidden="true" %} Policies**, click **{% data variables.product.pat_generic_caps_plural %}**. {% ifversion tabbed-pat-settings-ui %}
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type. {% endif %}
1. Under **{% data variables.product.pat_v2_caps_plural %}** or **Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations**, select your access policy.
1. Click **Save**.

{% ifversion pats-maximum-lifetime %}

## Enforcing a maximum lifetime policy for {% data variables.product.pat_generic_plural %}

Enterprise owners can set and remove maximum lifetime allowances for both {% data variables.product.pat_v2_plural %} and {% data variables.product.pat_v1_plural %} to help protect enterprise resources. Organization owners within the enterprise can further restrict the lifetime policies for their organizations. See [Enforcing a maximum lifetime policy for {% data variables.product.pat_generic_plural %}](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization#enforcing-a-maximum-lifetime-policy-for-personal-access-tokens).

For {% data variables.product.pat_v2_plural %}, the default the maximum lifetime policy for organizations and enterprises is set to expire within 366 days. {% data variables.product.pat_v1_caps_plural %} do not have an expiration requirement.

### Policy enforcement details

For {% ifversion ghes %}GHES {% else %}{% data variables.product.prodname_emus %}{% endif %}, the enterprise-level policies apply to user namespaces as well because the enterprise owns the user accounts.

The policies around maximum lifetimes are enforced slightly differently for {% data variables.product.pat_v2_plural %} and {% data variables.product.pat_v1_plural %}. For {% data variables.product.pat_classic_plural %}, enforcement occurs when the token is used and when SSO credential authorization is attempted, and errors will prompt users to adjust the lifetime. For {% data variables.product.pat_v2_plural %}, the target organization is known at the time of token creation. In both cases, users will be prompted to regenerate tokens with compliant lifetimes if the current one exceeds the policy limit.

When you set a policy, tokens with non-compliant lifetimes will be blocked from accessing your organization if the token belongs to a member of your organization. Setting this policy does not revoke or disable these tokens. Users will learn that their existing token is non-compliant when API calls for your organization are rejected.

### Setting a maximum lifetime policy

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}, then click **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**.
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type.
1. Under **Set maximum lifetimes for {% data variables.product.pat_generic_plural %}**, set the maximum lifetime. Tokens must be created with a lifetime less than or equal to this many days.
1. Optionally, to exempt your enterprise administrators from this policy, check the **Exempt administrators** checkbox. You should exempt them from this policy if you use SCIM for user provisioning or have automation that has not migrated to {% data variables.product.prodname_github_app %} yet.
   >[!WARNING] If you use {% data variables.product.prodname_emus %}, you will be asked to accept the risk of service interruption unless you exempt your enterprise administrators. This ensures you are aware of the potential risk.
1. Click **Save**.
{% endif %}

## Enforcing an approval policy for {% data variables.product.pat_v2_plural %}

Enterprise owners can manage approval requirements for each {% data variables.product.pat_v2 %} with the following options:
* **Allow organizations to configure approval requirements:** Enterprise owners can allow each organization in the enterprise to set its own approval requirements for the tokens.
* **Require approval:** Enterprise owners can require that all organizations within the enterprise must approve each {% data variables.product.pat_v2 %} that can access the organization. These tokens can still read public resources within the organization without needing approval.
* **Disable approval:** {% data variables.product.pat_v2_caps %}s created by organization members can access organizations owned by the enterprise without prior approval. Organizations cannot override this setting.

> [!NOTE]
> Only {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}, are subject to approval. Any {% data variables.product.pat_v1 %} can access organization resources without prior approval, unless the organization or enterprise has restricted access by {% data variables.product.pat_v1_plural %} For more information about restricting {% data variables.product.pat_v1_plural %}, see [Restricting access by {% data variables.product.pat_generic_plural %}](#restricting-access-by-personal-access-tokens) on this page and [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under **{% octicon "law" aria-hidden="true" %} Policies**, click **{% data variables.product.pat_generic_caps_plural %}**. {% ifversion tabbed-pat-settings-ui %}
1. Select the **Fine-grained tokens** tab. {% endif %}
1. Under **Require approval of {% data variables.product.pat_v2_plural %}**, select your approval policy:
1. Click **Save**.
