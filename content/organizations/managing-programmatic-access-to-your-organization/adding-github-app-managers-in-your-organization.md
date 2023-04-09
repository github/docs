---
title: Adding GitHub App managers in your organization
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
  - /organizations/managing-access-to-your-organizations-apps/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add GitHub App managers
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. At the bottom of the "Management" section, in the search field, type the username of the person you want to designate as a {% data variables.product.prodname_github_app %} manager in the organization, then click **Grant**.

## Giving someone the ability to manage an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for.
{% data reusables.organizations.app-managers-settings-sidebar %}
1. At the bottom of the "App managers" section, in the search field, type the username of the person you want to designate as a GitHub App manager for the app, then click **Grant**.

{% ifversion fpt or ghec %}
## Further reading

- "[AUTOTITLE](/get-started/exploring-integrations/about-github-marketplace)"
{% endif %}
