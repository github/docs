---
title: Enforcing team policies in your enterprise
intro: 'You can enforce policies for teams in your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for teams in an enterprise.
redirect_from:
  - /articles/enforcing-team-settings-for-organizations-in-your-business-account
  - /articles/enforcing-team-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-team-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-team-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-team-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-team-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Teams
shortTitle: Team policies
---

## About policies for teams in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage teams. You can also allow organization owners to manage policies for teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% ifversion team-discussions %}

## Enforcing a policy for team discussions

Across all organizations owned by your enterprise, you can enable or disable team discussions, or allow owners to administer the setting on the organization level. For more information, see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under "{% octicon "law" aria-hidden="true" %} Policies", click **Teams**.
1. Under "Team discussions", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Team discussions", select the dropdown menu and click a policy.
{% endif %}
