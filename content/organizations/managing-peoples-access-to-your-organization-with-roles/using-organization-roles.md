---
title: Using organization roles
intro: "Learn how to{% ifversion org-pre-defined-roles %} view organization role permissions and{% endif %} manage organization role assignments."
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.14'
topics:
  - Organizations
  - Access management
  - Administrator
  - Permissions
permissions: 'Organization owners{% ifversion ghec %} and users with the "Manage custom organization roles" permission{% endif %}'
product: 'Organizations on {% data variables.product.prodname_free_team %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, and {% data variables.product.prodname_ghe_server %}'
shortTitle: Use organization roles
---

## About organization roles

You can have more granular, scalable control over the access you grant to your organization's resources using organization roles. Organization roles grant an organization member or team the ability to take specific actions or manage some settings without granting full administrative control of the organization and its repositories.

{% ifversion ghec or ghes %}

In addition to pre-defined roles, you can also create up to 10 custom roles that define groups of permissions. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."

{% endif %}

{% ifversion org-pre-defined-roles %}

## About pre-defined organization roles

{% data reusables.organizations.pre-defined-organization-roles %}

## Viewing organization role permissions

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the left sidebar, click **Organization roles**. Then click **Role management**.
1. To the right of any role, click **{% octicon "fold" aria-label="Show role permissions" %}**.
1. Optionally, to hide the role permissions again, click **{% octicon "fold" aria-label="Hide role permissions" %}**.

{% endif %}

## Assigning an organization role

{% ifversion ghec or ghes %}

The "Manage custom organization roles" permission does not allow a user to assign an organization role.

{% endif %}

A user or team can have multiple organization roles. However, you can only assign one role at a time. To assign multiple roles to the same user or team, repeat the following instructions for each role you want to assign.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-assign-role-step %}

## Viewing organization role assignments

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-view-assignments-step %}

## Deleting an organization role assignment

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-org-roles-remove-assignment-step %}
