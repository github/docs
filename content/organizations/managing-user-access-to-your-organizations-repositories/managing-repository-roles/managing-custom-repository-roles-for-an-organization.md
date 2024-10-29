---
title: Managing custom repository roles for an organization
intro: 'Learn how to create, edit, or delete custom repository roles for your organization.'
permissions: Organization owners.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization
---

{% data reusables.organizations.custom-repo-roles-ghec-only %}

## About custom repository roles

{% data reusables.organizations.about-custom-repo-roles %} For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles)."

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
1. Scroll to the "Custom roles" section, then click **Create a Role**.
1. Under "Name", type the name of your repository role.
1. Under "Description", type a description of your repository role.
1. Under "Choose a role to inherit", select the role you want to inherit.
1. Under "Add Permissions", select the dropdown menu and click the permissions you want your custom role to include.
1. Click **Create role**.

## Editing a repository role

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
1. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Edit**.

   ![Screenshot of the list of custom roles for an organization. To the right of a role, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/repository-role-edit-setting.png)
1. Edit, then click **Update role**.

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
1. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Delete**.

   ![Screenshot of the list of custom roles for an organization. To the right of a role, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/repository-role-edit-setting.png)
1. Review changes for the role you want to remove, then click **Delete role**.
