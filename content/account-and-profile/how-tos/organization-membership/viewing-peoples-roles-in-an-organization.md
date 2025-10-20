---
title: Viewing people's roles in an organization
intro: You can view a list of the people in your organization and filter by their role.
permissions: Organization members
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View organization members
contentType: how-tos
---

{% ifversion ghes or ghec %}

## Viewing organization roles

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. To filter the list by role, select the **Role** dropdown menu and click a role.

   ![Screenshot of the list of organization members. In the header of the list, a dropdown menu, labeled "Role," is outlined in dark orange.](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can also view the enterprise owners who manage billing settings and policies for all your enterprise's organizations. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% else %}

## Viewing enterprise owners and their roles in an organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. In the left sidebar, under "Enterprise permissions", click **Enterprise owners**.

    Depending on their organization role, enterprise owners have different levels of access to organization resources. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

{% endif %}

## Next steps

To learn more about organization roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).
