---
title: Enforcing policies for personal access tokens in your enterprise
intro: 'Enterprise owners can control whether to allow {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %}, and can require approval for {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
---

{% note %}

**Note**: {% data reusables.user-settings.pat-v2-beta %}

During the beta, enterprises must opt in to {% data variables.product.pat_v2 %}s. If your enterprise has not already opted-in, then you will be prompted to opt-in and set policies when you follow the steps below.

Even if an enterprise has not opted in to {% data variables.product.pat_v2 %}s, organizations owned by the enterprise can still opt in. All users, including {% data variables.product.prodname_emus %}, can create {% data variables.product.pat_v2 %}s that can access resources owned by the user (such as repositories created under their account) even if the enterprise has not opted in to {% data variables.product.pat_v2 %}s.

{% endnote %}

## Restricting access by {% data variables.product.pat_v2 %}s

Enterprise owners can prevent {% data variables.product.pat_v2 %}s from accessing private and internal resources owned by the enterprise. {% data variables.product.pat_v2_caps %}s will still be able to access public resources within the organizations. This setting only controls access by {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}. For more information about restricting access by {% data variables.product.pat_v1_plural %}, see "[Restricting access by {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" on this page.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under {% octicon "law" aria-hidden="true" %} **Policies**, click **{% data variables.product.pat_generic_caps_plural %}**.
1. Under **Restrict access via {% data variables.product.pat_v2 %}s**, select the option that meets your needs:
   - **Allow organizations to configure access requirements**: Each organization owned by the enterprise can decide whether to restrict access by {% data variables.product.pat_v2 %}s.
   - **Restrict access via {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s cannot access organizations owned by the enterprise. SSH keys created by {% data variables.product.pat_v2 %}s will continue to work. Organizations cannot override this setting.
   - **Allow access via {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s can access organizations owned by the enterprise. Organizations cannot override this setting.
1. Click **Save**.

## Enforcing an approval policy for {% data variables.product.pat_v2 %}s

Enterprise owners can require that all organizations owned by the enterprise must approve each {% data variables.product.pat_v2 %} that can access the organization. {% data variables.product.pat_v2_caps %}s will still be able to read public resources within the organization without approval. Conversely, enterprise owners can allow {% data variables.product.pat_v2 %}s to access organizations in the enterprise without prior approval. Enterprise owners can also let each organization in the enterprise choose their own approval settings.

{% note %}

**Note**: Only {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}, are subject to approval. Unless the organization or enterprise has restricted access by {% data variables.product.pat_v1_plural %}, any {% data variables.product.pat_v1 %} can access organization resources without prior approval. For more information about restricting {% data variables.product.pat_v1_plural %}, see "[Restricting access by {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" on this page and "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under {% octicon "law" aria-hidden="true" %} **Policies**, click **{% data variables.product.pat_generic_caps_plural %}**.
1. Under **Require approval of {% data variables.product.pat_v2 %}s**, select the option that meets your needs:
   - **Allow organizations to configure approval requirements**: Each organization owned by the enterprise can decide whether to require approval of {% data variables.product.pat_v2 %} that can access the organization.
   - **Require organizations to use the approval flow**: All organizations owned by the enterprise must approve each {% data variables.product.pat_v2 %} that can access the organization. {% data variables.product.pat_v2_caps %}s created by organization owners will not need approval. Organizations cannot override this setting.
   - **Disable the approval flow in all organizations**: {% data variables.product.pat_v2_caps %}s created by organization members can access organizations owned by the enterprise without prior approval. Organizations cannot override this setting.
1. Click **Save**.

## Restricting access by {% data variables.product.pat_v1_plural %}

Enterprise owners can prevent {% data variables.product.pat_v1_plural %} from accessing the enterprise and organizations owned by the enterprise. {% data variables.product.pat_v1_caps_plural %} will still be able to access public resources within the organization. This setting only controls access by {% data variables.product.pat_v1_plural %}, not {% data variables.product.pat_v2 %}s. For more information about restricting access by {% data variables.product.pat_v2 %}s, see "[Restricting access by {% data variables.product.pat_v2 %}s](#restricting-access-by-fine-grained-personal-access-tokens)" on this page.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under {% octicon "law" aria-hidden="true" %} **Policies**, click **{% data variables.product.pat_generic_caps_plural %}**.
1. Under **Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations**, select the option that meets your needs:
   - **Allow organizations to configure {% data variables.product.pat_v1_plural %} access requirements**: Each organization owned by the enterprise can decide whether to restrict access by {% data variables.product.pat_v1_plural %}.
   - **Restrict access via {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} cannot access the enterprise or organizations owned by the enterprise. SSH keys created by {% data variables.product.pat_v1_plural %} will continue to work. Organizations cannot override this setting.
   - **Allow access via {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} can access the enterprise and organizations owned by the enterprise. Organizations cannot override this setting.
1. Click **Save**.
