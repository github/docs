---
title: Setting base permissions for an organization
intro: You can set base permissions for the repositories that an organization owns.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set base permissions
---

## About base permissions for an organization

You can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. Base permissions do not apply to outside collaborators.

{% ifversion fpt or ghec %}By default, members of an organization will have **Read** permissions to the organization's repositories.{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion custom-repository-roles %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## Setting base permissions

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Base permissions", use the drop-down to select new base permissions.
  ![Selecting new permission level from base permissions drop-down](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Review the changes. To confirm, click **Change default permission to PERMISSION**.
  ![Reviewing and confirming change of base permissions](/assets/images/help/organizations/base-permissions-confirm.png)

## Further reading

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Adding outside collaborators to repositories in your organization](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
