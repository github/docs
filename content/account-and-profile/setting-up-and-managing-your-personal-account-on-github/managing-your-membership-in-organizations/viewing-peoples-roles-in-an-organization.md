---
title: Viewing people's roles in an organization
intro: 'You can view a list of the people in your organization and filter by their role. For more information on organization roles, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."'
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
---

## View organization roles

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. To filter the list by role, select the **Role** dropdown menu and click a role.

   ![Screenshot of the list of organization members. In the header of the list, a dropdown menu, labeled "Role," is outlined in dark orange.](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can also view the enterprise owners who manage billing settings and policies for all your enterprise's organizations. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}

## View enterprise owners and their roles in an organization

If your organization is managed by an enterprise account, then you can view the enterprise owners who manage billing settings and policies for all of your enterprise's organizations. For more information about enterprise accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

You can also view whether an enterprise owner has a specific role in the organization. Enterprise owners can also be an organization member, any other organization role, or be un-affiliated with the organization.

{% note %}

**Note:** If you're an organization owner, you can also invite an enterprise owner to have a role in the organization. If an enterprise owner accepts the invitation, a seat or license in the organization is used from the available licenses for your enterprise. For more information about how licensing works, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% endnote %}

| **Enterprise role** | **Organization role** | **Organization access or impact** |
|----|----|----|
| Enterprise owner | Un-affiliated or no official organization role | Cannot access organization content or repositories but manages enterprise settings and policies that impact your organization. |
| Enterprise owner | Organization owner | Able to configure organization settings and manage access to the organization's resources through teams, etc. |
| Enterprise owner | Organization member | Able to access organization resources and content, such as repositories, without access to the organization's settings. |

To review all roles in an organization, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)." {% ifversion custom-repository-roles %} An organization member can also have a custom role for a specific repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization)."{% endif %}

For more information about the enterprise owner role, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. In the left sidebar, under "Enterprise permissions", click **Enterprise owners**.

{% endif %}
