---
title: Reviewing your organization's installed integrations
intro: You can review the permission levels for your organization's installed integrations and  configure each integration's access to organization repositories.
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review installed integrations
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the "Integrations" section of the sidebar, click **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}**.
{% else %}
1. In the left sidebar, click **Installed {% data variables.product.prodname_github_apps %}**.
  ![Installed {% data variables.product.prodname_github_apps %} tab in the organization settings sidebar](/assets/images/help/organizations/org-settings-installed-github-apps.png)
{% endif %}
2. Next to the {% data variables.product.prodname_github_app %} you'd like to review, click **Configure**.
  ![Configure button](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Review the {% data variables.product.prodname_github_app %}'s permissions and repository access.
  ![Option to give the {% data variables.product.prodname_github_app %} access to all repositories or specific repositories](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - To give the {% data variables.product.prodname_github_app %} access to all of your organization's repositories, select **All repositories**.
    - To choose specific repositories to give the application access to, select **Only select repositories**, then type a repository name.
7. Click **Save**.
