---
title: Enterprise アカウントの人を表示する
intro: 'Enterprise が所有するリソースやユーザライセンスの利用を監査するため、Enterprise のオーナーは、Enterprise アカウントの管理者およびメンバーすべてを表示できます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Enterprise のオーナーと支払いマネージャーを表示する

Enterprise のコードオーナー、支払いマネージャー、さらにオーナーや支払いマネージャーになるよう招待して保留中の人のリストを表示できます。 Enterprise 管理者のリストを、ロールでフィルタリングできます。 ユーザ名またはフルネームを検索して、特定の人を見つけることが可能です。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**. !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/administrators-pending.png)

### メンバーと外部コラボレーターを表示する

保留中のメンバーや外部のコラボレータの数を表示できます。 デプロイメント ({% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %})、ロール、および Organization で、メンバーのリストをフィルタリングできます。 コラボレータがアクセスできるリポジトリの可視性で、外部のコラボレータのリストをフィルタリングできます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

名前をクリックして、メンバーが属するすべての {% data variables.product.prodname_ghe_cloud %} Organization および {% data variables.product.prodname_ghe_server %} インスタンス、そして外部のコラボレータがどのリポジトリにアクセスできるかを表示できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. メンバーのリストではなく、外部コラボレーターのリストを表示したい場合は、[**Outside collaborators**] をクリックします。 ![Organization メンバーのページにある、[Outside collaborators] タブ](/assets/images/help/business-accounts/outside-collaborators-tab.png)
1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**. !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/members-pending.png)

### 参考リンク

- [Enterprise アカウントのロール](/articles/roles-for-an-enterprise-account)
