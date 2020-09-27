---
title: Disabling or limiting GitHub Actions for your organization
intro: 'Organization owners can disable, enable, and limit GitHub Actions for an organization.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### About {{ site.data.variables.product.prodname_actions }} permissions for your organization

{{ site.data.reusables.github-actions.disabling-github-actions }} For more information about {{ site.data.variables.product.prodname_actions }}, see "[About {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {{ site.data.variables.product.prodname_actions }} for all repositories in your organization. {{ site.data.reusables.github-actions.enabled-actions-description }} You can disable {{ site.data.variables.product.prodname_actions }} for all repositories in your organization. {{ site.data.reusables.github-actions.disabled-actions-description }}

Alternatively, you can enable {{ site.data.variables.product.prodname_actions }} for all repositories in your organization but limit the actions a workflow can run. {{ site.data.reusables.github-actions.enabled-local-github-actions }}

### Managing {{ site.data.variables.product.prodname_actions }} permissions for your organization

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
1. Under **Local and third-party Actions**, select an option. ![Enable, disable, or limit actions for this organization](/assets/images/help/repository/enable-org-actions.png)
1. Click **Save**.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for an organization

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
