---
title: Setting base permissions for an organization
intro: You can set base permissions for the repositories that an organization owns.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization
  - /organizations/managing-user-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
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
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

{% note %}

**Notes:**

* All changes to base permissions will affect both new and existing members.
* {% data reusables.repositories.org-base-permissions-private-forks %}

{% endnote %}

## Setting base permissions

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Base permissions", select the dropdown menu and click a permissions level.
1. Review the changes. To confirm, click **Change default permission to PERMISSION**.

## Further reading

* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)"
