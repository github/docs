---
title: Enforcing GitHub Actions policies in your enterprise account
intro: 'Enterprise owners can disable, enable, and limit {{ site.data.variables.product.prodname_actions }} for an enterprise account.'
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### About {{ site.data.variables.product.prodname_actions }} permissions for your enterprise account

By default, {{ site.data.variables.product.prodname_actions }} is enabled in all organizations owned by an enterprise account. You can choose to disable {{ site.data.variables.product.prodname_actions }} for all organizations owned by an enterprise account, or only allow specified organizations. You can also limit the use of public actions, so that people can only use local actions that exist in your organization.

For more information about {{ site.data.variables.product.prodname_actions }}, see "[About {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)."


### Managing {{ site.data.variables.product.prodname_actions }} permissions for your enterprise account

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.actions.enterprise-actions-permissions }}

### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for your enterprise account

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
