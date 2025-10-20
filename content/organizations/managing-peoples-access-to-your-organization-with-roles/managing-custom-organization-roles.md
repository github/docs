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

{% data reusables.organizations.custom-org-roles-intro %} For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

If you are an organization owner or have a custom role with the "View organization roles" or "Manage custom organization roles" permissions, you can view custom roles for the organization. With {% data variables.product.prodname_ghe_cloud %} and starting from {% data variables.product.prodname_ghe_server %} 3.19, if your enterprise owner has created organization roles, these roles can be seen and assigned as well, but not edited or deleted.

To find the "Custom roles" page, you can follow the first steps in [Creating a custom role](#creating-a-custom-role). The exact steps will vary depending on which other settings page you have access to.

To{% ifversion org-pre-defined-roles %} view organization role permissions and{% endif %} manage organization role assignments, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles).

## Creating a custom role

{% ifversion ent-owner-custom-org-roles %}Enterprise owners, organization{% else %}Organization{% endif %} owners, and users with the "Manage custom organization roles" permission can create up to {% ifversion ent-owner-custom-org-roles %}20{% else %}10{% endif %} custom organization roles.

{% ifversion ent-owner-custom-org-roles %}

### In an organization

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-settings-step %}
{% data reusables.organizations.custom-org-roles-create-new-step %}

{% ifversion ent-owner-custom-org-roles %}

### In an enterprise

Enterprise owners can define standard custom organization roles for their organization owners to assign. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-organization-roles).

{% endif %}

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
