---
title: Managing custom organization roles
intro: "You can create, edit, and assign custom organization roles in an organization's settings."
versions:
  feature: 'custom-org-roles'
topics:
  - Organizations
shortTitle: Manage custom roles
---


{% data reusables.organizations.custom-org-roles-ghec-only %}

## About custom organization roles

{% data reusables.organizations.custom-org-roles-intro %} For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."

If you are an organization owner or have a custom role with the "View organization roles" or "Manage custom organization roles" permissions, you can view custom roles for the organization. To find the "Custom roles" page, you can follow the first steps in "[Creating a custom role](#creating-a-custom-role)." The exact steps will vary depending on which other settings pages you have access to.

## Creating a custom role

Organization owners and users with the "Manage custom organization roles" permission can create a custom organization role. You can create up to 10 custom roles in an organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
1. Click **Create a role**.
1. Type a name and description for the custom role.
1. Under "Add permissions", click the text field, then select the permissions you want to add to the custom role. For more information about the available permissions, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#additional-permissions-for-custom-roles)."
1. Click **Create role**.

## Assigning an organization role

Organization owners can assign a custom organization role to a user or team. The "Manage custom organization roles" permission does not allow a user to assign a custom role.

A user or team can have multiple custom roles. However, you can only assign one role at a time. To assign multiple roles to the same user or team, repeat the following instructions for each role you want to assign.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" %} Organization roles**, then click **Role assignments**.
1. Click **New role assignment**.
1. Search for users or teams that you want to assign a role to, then select the role you want to give to these users and teams.
1. Click **Add new assignment**.

## Viewing organization role assignments

Organization owners can see which roles are assigned to users and teams.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" %} Organization roles**, then click **Role assignments**.
{% data reusables.organizations.custom-org-roles-filter %}
1. To view role assignments, to the right of the user or team, click **NUMBER roles**.

## Deleting organization role assignments

Organization owners can delete a role assignment for a user or team.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" %} Organization roles**, then click **Role assignments**.
{% data reusables.organizations.custom-org-roles-filter %}
1. To delete a role, to the right of the role, click **Remove**.

## Editing a custom role

Organization owners and users with the "Manage custom organization roles" permission can edit a custom organization role.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
1. Next to the role you want to edit, select {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Edit role**.

   ![Screenshot of the "Organization roles" settings. Next to a custom role, an ellipsis icon is highlighted with an orange outline.](/assets/images/help/organizations/edit-custom-org-role.png)

1. Change the role as required, then click **Update role**.

## Deleting a custom role

Organization owners and users with the "Manage custom organization roles" permission can delete a custom organization role.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
1. Next to the role you want to edit, select {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Delete role**.

   ![Screenshot of the "Organization roles" settings. Next to a custom role, an ellipsis icon is highlighted with an orange outline.](/assets/images/help/organizations/edit-custom-org-role.png)

1. Read the details in the dialog to confirm you want to delete the role, then click **Delete role**.
