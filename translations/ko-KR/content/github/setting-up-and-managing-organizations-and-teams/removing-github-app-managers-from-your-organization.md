---
title: Removing GitHub App managers from your organization
intro: 'Organization owners can revoke {{ site.data.variables.product.prodname_github_app }} manager permissions that were granted to a member of the organization.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

For more information about {{ site.data.variables.product.prodname_github_app }} manager permissions, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization#github-app-managers)."

### Removing a {{ site.data.variables.product.prodname_github_app }} manager's permissions for the entire organization

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Under "Management", find the username of the person you want to remove {{ site.data.variables.product.prodname_github_app }} manager permissions from, and click **Revoke**. ![Revoke {{ site.data.variables.product.prodname_github_app }} manager permissions](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Removing a {{ site.data.variables.product.prodname_github_app }} manager's permissions for an individual {{ site.data.variables.product.prodname_github_app }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Under "{{ site.data.variables.product.prodname_github_app }}s", click on the avatar of the app you'd like to remove a {{ site.data.variables.product.prodname_github_app }} manager from. ![Select {{ site.data.variables.product.prodname_github_app }}](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. Under "App managers", find the username of the person you want to remove {{ site.data.variables.product.prodname_github_app }} manager permissions from, and click **Revoke**. ![Revoke {{ site.data.variables.product.prodname_github_app }} manager permissions](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 더 읽을거리

- "[About {{ site.data.variables.product.prodname_dotcom }} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
