---
title: Enterprise の人を表示する
intro: Enterprise が所有するリソースやユーザライセンスの利用を監査するため、Enterprise のオーナーは、すべての Enterprise の管理者およびメンバーを表示できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
---

## Enterprise のオーナー{% ifversion fpt %}と支払いマネージャーマネージャーを表示する{% endif %}

Enterprise のオーナー{% ifversion fpt %}と支払いマネージャー、{% endif %}およびオーナーと{% ifversion fpt %}支払いマネージャーマネージャーになるための保留中の招待状のリストを表示できます。 Enterprise 管理者のリストを、ロールでフィルタできます{% endif %}。 ユーザ名またはフルネームを検索して、特定の人を見つけることが可能です。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% ifversion fpt %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/administrators-pending.png){% endif %}

## メンバーと外部コラボレーターを表示する

保留中のメンバーや外部のコラボレータの数を表示できます。 メンバーのリストは、{% ifversion fpt %}デプロイメント（{% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %}）、{% endif %}ロール{% ifversion fpt %}、および{% else %}または{% endif %}Organization でフィルタできます。 コラボレータがアクセスできるリポジトリの可視性で、外部のコラボレータのリストをフィルタリングできます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

You can view {% ifversion fpt %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% ifversion fpt %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. メンバーのリストではなく、外部コラボレーターのリストを表示したい場合は、[**Outside collaborators**] をクリックします。 ![Organization メンバーのページにある、[Outside collaborators] タブ](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% ifversion fpt %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/members-pending.png){% endif %}

## 参考リンク

- 「[Enterprise のロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)」
