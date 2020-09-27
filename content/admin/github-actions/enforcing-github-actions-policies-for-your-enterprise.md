---
title: Enforcing GitHub Actions policies for your enterprise
intro: 'Enterprise administrators can manage access to {{ site.data.variables.product.prodname_actions }} in an enterprise.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### About {{ site.data.variables.product.prodname_actions }} permissions for your enterprise

When you enable {{ site.data.variables.product.prodname_actions }} on {{ site.data.variables.product.prodname_ghe_server }}, it is enabled for all organizations in your enterprise. You can choose to disable {{ site.data.variables.product.prodname_actions }} for all organizations in your enterprise, or only allow specific organizations. You can also limit the use of public actions, so that people can only use local actions that exist in an organization.

### Managing {{ site.data.variables.product.prodname_actions }} permissions for your enterprise

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.actions.enterprise-actions-permissions }}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for your enterprise

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
