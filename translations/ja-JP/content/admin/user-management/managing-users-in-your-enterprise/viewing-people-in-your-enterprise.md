---
title: Enterprise の人を表示する
intro: Enterprise が所有するリソースやユーザライセンスの利用を監査するため、Enterprise のオーナーは、すべての Enterprise の管理者およびメンバーを表示できます。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
---

## About the list of people in your enterprise

To audit access to your enterprise's resources and manage license usage, you can see a list of all the people who have access to your enterprise.

You can see all current enterprise members and enterprise administrators{% ifversion ghec %}, as well as pending invitations to become members and administrators{% endif %}. To make it easier to consume this information, you can search and filter the lists.

## Viewing enterprise administrators

You can view all the current enterprise owners{% ifversion ghec %} and billing managers{% endif %} for your enterprise.{% if enterprise-membership-view-improvements %} You can see useful information about each administrator{% ifversion ghec %} and filter the list by role{% endif %}.{% endif %} You can find a specific person by searching for their username or display name.

{% ifversion not ghae %}
You can also remove an administrator. For more information. see "[Inviting people to manage your enterprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

## Viewing members {% if enterprise-membership-view-improvements %}{% else %}and outside collaborators{% endif %}

You can see all the current members {% if enterprise-membership-view-improvements %}{% else %}or outside collaborators{% endif %} for your enterprise. You can see useful information about each account and filter the list in useful ways, such as by role. ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

You can view more information about the person's access to your enterprise, such as the organizations the person belongs to, by clicking on the person's name.

{% if remove-enterprise-members %}
You can also remove any enterprise member from all organizations owned by the enterprise. For more information, see "[Removing a member from your enterprise](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}{% if enterprise-membership-view-improvements %}{% else %}
1. メンバーのリストではなく、外部コラボレーターのリストを表示したい場合は、[**Outside collaborators**] をクリックします。

   ![Outside collaborators tab on the enterprise members page](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% if enterprise-membership-view-improvements %}
## Viewing outside collaborators

You can see all the current outside collaborators for your enterprise. You can see useful information about each collaborator and filter the list in useful ways, such as by organization. You can find a specific collaborator by searching for their username or display name.

You can view more information about the person's access to your enterprise, such as a list of all the repositories the collaborator has access to, by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Outside collaborators**.

  ![Outside collaborators tab in the enterprise settings sidebar]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}

{% endif %}


{% ifversion ghec %}
## Viewing pending invitations

You can see all the pending invitations to become administrators, members, or outside collaborators in your enterprise. You can filter the list in useful ways, such as by organization. ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

If you use {% data variables.product.prodname_vss_ghe %}, the list of pending invitations includes all {% data variables.product.prodname_vs %} subscribers that haven't joined any of your organizations on {% data variables.product.prodname_dotcom %}, even if the subscriber does not have a pending invitation to join an organization. For more information about how to get {% data variables.product.prodname_vs %} subscribers access to {% data variables.product.prodname_enterprise %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Pending invitations**.

   ![Screenshot of the "Pending invitations" tab in the sidebar](/assets/images/help/enterprises/pending-invitations-tab.png)

1. Optionally, to view pending invitations for enterprise administrators or outside collaborators, under "Pending members", click **Administrators** or **Outside collaborators**.

   ![Screenshot of the "Members", "Administrators", and "Outside collaborators" tabs](/assets/images/help/enterprises/pending-invitations-type-tabs.png)


## Viewing suspended members in an {% data variables.product.prodname_emu_enterprise %}

If your enterprise uses {% data variables.product.prodname_emus %}, you can also view suspended users. Suspended users are members who have been deprovisioned after being unassigned from the {% data variables.product.prodname_emu_idp_application %} application or deleted from the identity provider. For more information, see "[About Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To view a list of suspended members, above the list of active members, click **Suspended**. ![Screenshot showing "Suspended" option](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## 休眠ユーザの表示

You can view a list of all dormant users {% ifversion ghes or ghae %} who have not been suspended and {% endif %}who are not site administrators. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} 詳細は「[休眠ユーザを管理する](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)」を参照してください。

## 参考リンク

- 「[Enterprise のロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」
