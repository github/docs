---
title: Setting base permissions for an organization
intro: You can set base permissions for the repositories that an organization owns.
permissions: Organization owners can set base permissions for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About base permissions for an organization

You can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. Base permissions do not apply to outside collaborators.

{% if currentVersion == "free-pro-team@latest" %}By default, members of an organization will have **Read** permissions to the organization's repositories.{% endif %}

If someone with admin permissions to an organization's repository grants a member a higher level of permission for the repository, the higher level of permission overrides the base permission.

### Setting base permissions

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Base permissions", use the drop-down to select new base permissions. ![Selecting new permission level from base permissions drop-down](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Review the changes. To confirm, click **Change default permission to PERMISSION**. ![Reviewing and confirming change of base permissions](/assets/images/help/organizations/base-permissions-confirm.png)

### 더 읽을거리

- "[Repository permission levels for an organization](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)"
- "[Adding outside collaborators to repositories in your organization](/github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization)"
