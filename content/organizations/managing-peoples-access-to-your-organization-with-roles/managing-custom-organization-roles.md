---
title: Managing custom organization roles
intro: "You can create, edit, and assign custom organization roles in an organization's settings."
versions:
  feature: 'custom-org-roles'
topics:
  - Organizations
shortTitle: Manage custom roles
permissions: 'Organization owners and users with the "Manage custom organization roles" permission'
product: 'Organizations on {% data variables.product.prodname_ghe_cloud %}{% ifversion ghes %} and {% data variables.product.prodname_ghe_server %}{% endif %}'
---

## About custom organization roles

{% data reusables.organizations.custom-org-roles-intro %} For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."

If you are an organization owner or have a custom role with the "View organization roles" or "Manage custom organization roles" permissions, you can view custom roles for the organization. To find the "Custom roles" page, you can follow the first steps in "[Creating a custom role](#creating-a-custom-role)." The exact steps will vary depending on which other settings page you have access to.

To{% ifversion org-pre-defined-roles %} view organization role permissions and{% endif %} manage organization role assignments, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)"

## Creating a custom role

Organization owners and users with the "Manage custom organization roles" permission can create up to 10 custom organization roles.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
{% data reusables.organizations.custom-org-roles-create-new-step %}

## Editing a custom role

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
{% data reusables.organizations.custom-org-roles-edit-role-step %}

## Deleting a custom role

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
{% data reusables.organizations.custom-org-roles-delete-role-step %}
