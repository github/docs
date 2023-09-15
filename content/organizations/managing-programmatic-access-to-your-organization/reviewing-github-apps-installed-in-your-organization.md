---
title: Reviewing GitHub Apps installed in your organization
intro: "You can review the permissions and change the repository access for {% data variables.product.prodname_github_apps %} installed on your organization. You can also temporarily or permanently prevent a {% data variables.product.prodname_github_app %} from accessing resources owned by your organization."
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-your-organizations-installed-integrations
  - /organizations/managing-programmatic-access-to-your-organization/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review installed GitHub Apps
---

Organization owners can review the {% data variables.product.prodname_github_apps %} that are installed on their organization. They can view the permissions granted to the app and change the repositories that the {% data variables.product.prodname_github_app %} can access. They can also suspend or delete the {% data variables.product.prodname_github_app %} to prevent the app from accessing resources owned by the organization. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)."

Organization owners can also use the REST API to view the {% data variables.product.prodname_github_apps %} installed on their organization, along with the permissions and repository access granted to each {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/rest/orgs/orgs#list-app-installations-for-an-organization)."
