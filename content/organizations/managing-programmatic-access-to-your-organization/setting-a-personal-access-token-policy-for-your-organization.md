---
title: Setting a personal access token policy for your organization
intro: 'Organization owners can control whether to allow {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %}, and can require approval for {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
---

{% data reusables.user-settings.pat-v2-org-opt-in %}

## Restricting access by {% data variables.product.pat_v2 %}s

Organization owners can prevent {% data variables.product.pat_v2 %}s from accessing resources owned by the organization. {% data variables.product.pat_v2_caps %}s will still be able to read public resources within the organization. This setting only controls access by {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}. For more information about restricting access by {% data variables.product.pat_v1_plural %}, see "[Restricting access by {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" on this page.

{% ifversion ghec or ghes %} If your organization is owned by an enterprise, and your enterprise owner has restricted access by {% data variables.product.pat_v2 %}s, then you cannot override the policy in your organization. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Settings**.
1. Under **{% data variables.product.pat_v2_caps %}s**, select the option that meets your needs:
   * **Allow access via {% data variables.product.pat_v2 %}s**:  {% data variables.product.pat_v2_caps %}s can access resources owned by the organization.
   * **Restrict access via {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s cannot access resources owned by the organization. SSH keys created by {% data variables.product.pat_v2 %}s will continue to work.
1. Click **Save**.

## Enforcing an approval policy for {% data variables.product.pat_v2 %}s

Organization owners can require approval for each {% data variables.product.pat_v2 %} that can access the organization. {% data variables.product.pat_v2_caps %}s will still be able to read public resources within the organization without approval. {% data variables.product.pat_v2_caps %}s created by organization owners will not need approval.

{% ifversion ghec or ghes %} If your organization is owned by an enterprise, and your enterprise owner has set an approval policy for {% data variables.product.pat_v2 %}s, then you cannot override the policy in your organization. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% note %}

**Note**: Only {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}, are subject to approval. Unless the organization has restricted access by {% data variables.product.pat_v1_plural %}, any {% data variables.product.pat_v1 %} can access organization resources without prior approval. For more information, see "[Restricting access by {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" on this page.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Settings**.
1. Under **Require approval of {% data variables.product.pat_v2 %}s**, select the option that meets your needs:
   * **Require administrator approval**: An organization owner must approve each {% data variables.product.pat_v2 %} that can access the organization. {% data variables.product.pat_v2_caps %}s created by organization owners will not need approval.
   * **Do not require administrator approval**: {% data variables.product.pat_v2_caps %}s created by organization members can access resources in the organization without prior approval.
1. Click **Save**.

## Restricting access by {% data variables.product.pat_v1_plural %}

Organization owners can prevent {% data variables.product.pat_v1_plural %} from accessing resources owned by the organization. {% data variables.product.pat_v1_caps_plural %} will still be able to read public resources within the organization. This setting only controls access by {% data variables.product.pat_v1_plural %}, not {% data variables.product.pat_v2 %}s. For more information about restricting access by {% data variables.product.pat_v2 %}s, see "[Restricting access by {% data variables.product.pat_v2 %}s](#restricting-access-by-fine-grained-personal-access-tokens)" on this page.

{% ifversion ghec or ghes %} If your organization is owned by an enterprise, and your enterprise owner has restricted access by {% data variables.product.pat_v1_plural %}, then you cannot override the policy in your organization. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Settings**.
{% ifversion tabbed-pat-settings-ui %} 1. Select the **Tokens (classic)** tab to access the {% data variables.product.pat_v1_plural %} settings.
{% endif %}1. Under **{% data variables.product.pat_v1_caps %}**, select the option that meets your needs:
   * **Allow access via {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} can access resources owned by the organization.
   * **Restrict access via {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} cannot access resources owned by the organization. SSH keys created by {% data variables.product.pat_v1_plural %} will continue to work.
1. Click **Save**.
