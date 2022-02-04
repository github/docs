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

## Enterprise のオーナー{% ifversion ghec %}と支払いマネージャーマネージャーを表示する{% endif %}

Enterprise のオーナー{% ifversion ghec %}と支払いマネージャー、{% endif %}およびオーナーと{% ifversion ghec %}支払いマネージャーマネージャーになるための保留中の招待状のリストを表示できます。 Enterprise 管理者のリストを、ロールでフィルタできます{% endif %}。 ユーザ名またはフルネームを検索して、特定の人を見つけることが可能です。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% ifversion ghec %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/administrators-pending.png){% endif %}

## メンバーと外部コラボレーターを表示する

保留中のメンバーや外部のコラボレータの数を表示できます。 メンバーのリストは、{% ifversion ghec %}デプロイメント（{% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %}）、{% endif %}ロール{% ifversion ghec %}、および{% else %}または{% endif %}Organization でフィルタできます。 コラボレータがアクセスできるリポジトリの可視性で、外部のコラボレータのリストをフィルタリングできます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

You can view {% ifversion ghec %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% ifversion ghec %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. メンバーのリストではなく、外部コラボレーターのリストを表示したい場合は、[**Outside collaborators**] をクリックします。 ![Organization メンバーのページにある、[Outside collaborators] タブ](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% ifversion ghec %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/members-pending.png){% endif %}

{% ifversion ghec %}

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
