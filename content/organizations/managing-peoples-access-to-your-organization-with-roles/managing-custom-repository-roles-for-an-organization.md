---
title: Managing custom repository roles for an organization
intro: You can create, edit, or delete custom repository roles for your organization.
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
---

{% data reusables.organizations.custom-repo-roles-ghec-only %}

## About custom repository roles

{% data reusables.organizations.about-custom-repo-roles %} For more information, see "[About custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
5. Click **Create a Role**.
  ![Screenshot of "Create a Role" button](/assets/images/help/organizations/repository-role-create-role.png)
4. Under "Name", type the name of your repository role.
  ![Field to type a name for the repository role](/assets/images/help/organizations/repository-role-name.png)
5. Under "Description", type a description of your repository role.
  ![Field to type a description for the repository role](/assets/images/help/organizations/repository-role-description.png)
6. Under "Choose a role to inherit", select the role you want to inherit.
  ![Selecting repository role base role option](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Under "Add Permissions", use the drop-down menu to select the permissions you want your custom role to include.
  ![Selecting permission levels from repository role drop-down](/assets/images/help/organizations/repository-role-drop-down.png)
7. Click **Create role**.
  ![Confirm creating a repository role](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editing a repository role

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Edit**.
  ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edit, then click **Update role**.
  ![Edit fields and update repository roles](/assets/images/help/organizations/repository-role-update.png)

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
  ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Review changes for the role you want to remove, then click **Delete role**.
  ![Confirm deleting a repository role](/assets/images/help/organizations/repository-role-delete-confirm.png)
