---
title: Enforcing GitHub Actions policies for your enterprise
intro: 'Enterprise administrators can manage access to {% data variables.product.prodname_actions %} in an enterprise.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  ghes: '>=2.22'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: Enforce enterprise policies
---
{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

## About {% data variables.product.prodname_actions %} permissions for your enterprise

{% ifversion ghae %}{% else %}When you enable {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}, it is enabled for all organizations in your enterprise. {% endif %}You can choose to disable {% data variables.product.prodname_actions %} for all organizations in your enterprise, or only allow specific organizations. You can also limit the use of public actions, so that people can only use local actions that exist in your enterprise.

## Managing {% data variables.product.prodname_actions %} permissions for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% ifversion ghes > 2.22 or ghae %}
## Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

### Configuring the private fork policy for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
