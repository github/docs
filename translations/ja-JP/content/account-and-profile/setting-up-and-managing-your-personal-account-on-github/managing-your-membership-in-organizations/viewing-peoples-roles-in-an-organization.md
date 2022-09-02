---
title: Organization の人のロールを表示する
intro: 'Organization 内の人のリストを表示し、それらのロールでフィルタリングすることができます。 For more information on organization roles, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."'
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
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
---

## View organization roles

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Organization 内の人のリストが表示されます。 ロールでリストをフィルタリングするには、[**Role**] をクリックします。 ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can also view the enterprise owners who manage billing settings and policies for all your enterprise's organizations. 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization)を参照してください。

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## View enterprise owners and their roles in an organization

If your organization is managed by an enterprise account, then you can view the enterprise owners who manage billing settings and policies for all of your enterprise's organizations. For more information about enterprise accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

You can also view whether an enterprise owner has a specific role in the organization. Enterprise owners can also be an organization member, any other organization role, or be un-affiliated with the organization.

{% note %}

**Note:** If you're an organization owner, you can also invite an enterprise owner to have a role in the organization. If an enterprise owner accepts the invitation, a seat or license in the organization is used from the available licenses for your enterprise. For more information about how licensing works, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% endnote %}

| **Enterprise role** | **Organization role**                          | **Organization access or impact**                                                                                              |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Enterprise owner    | Un-affiliated or no official organization role | Cannot access organization content or repositories but manages enterprise settings and policies that impact your organization. |
| Enterprise owner    | Organization owner                             | Able to configure organization settings and manage access to the organization's resources through teams, etc.                  |
| Enterprise owner    | Organization member                            | Able to access organization resources and content, such as repositories, without access to the organization's settings.        |

To review all roles in an organization, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)." {% ifversion custom-repository-roles %} An organization member can also have a custom role for a specific repository. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."{% endif %}

For more information about the enterprise owner role, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. In the left sidebar, under "Enterprise permissions", click **Enterprise owners**. ![Screenshot of "Enterprise owners" option in sidebar menu](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. View the list of the enterprise owners for your enterprise. If the enterprise owner is also a member of your organization, you can see their role in the organization.

  ![Screenshot of list of Enterprise owners and their role in the organization](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
