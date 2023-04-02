---
title: Removing GitHub App managers from your organization
intro: 'Organization owners can revoke {% data variables.product.prodname_github_app %} manager permissions that were granted to a member of the organization.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
  - /organizations/managing-access-to-your-organizations-apps/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove GitHub App managers
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## Removing a {% data variables.product.prodname_github_app %} manager's permissions for the entire organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "Management", next to the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, click **Revoke**.

## Removing a {% data variables.product.prodname_github_app %} manager's permissions for an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from.
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Under "App managers", next to the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, click **Revoke**.

{% ifversion fpt or ghec %}
## Further reading

- "[AUTOTITLE](/get-started/exploring-integrations/about-github-marketplace)"
{% endif %}
