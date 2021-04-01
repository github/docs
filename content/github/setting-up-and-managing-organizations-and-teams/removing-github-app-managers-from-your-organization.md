---
title: Removing GitHub App managers from your organization
intro: 'Organization owners can revoke {% data variables.product.prodname_github_app %} manager permissions that were granted to a member of the organization.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization#github-app-managers)."

### Removing a {% data variables.product.prodname_github_app %} manager's permissions for the entire organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "Management", find the username of the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, and click **Revoke**.
![Revoke {% data variables.product.prodname_github_app %} manager permissions](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Removing a {% data variables.product.prodname_github_app %} manager's permissions for an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_app %}s", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from.
![Select {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Under "App managers", find the username of the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, and click **Revoke**.
![Revoke {% data variables.product.prodname_github_app %} manager permissions](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Further reading

- "[About {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
