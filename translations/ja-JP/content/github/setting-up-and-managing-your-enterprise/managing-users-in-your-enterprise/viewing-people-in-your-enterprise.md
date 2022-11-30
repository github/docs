---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---
### Viewing enterprise owners{% if currentVersion == "free-pro-team@latest" %} and billing managers{% endif %}

You can view enterprise owners {% if currentVersion == "free-pro-team@latest" %} and billing managers, {% endif %}as well as a list of pending invitations to become owners{% if currentVersion == "free-pro-team@latest" %} and billing managers. You can filter the list of enterprise administrators by role{% endif %}. ユーザ名またはフルネームを検索して、特定の人を見つけることが可能です。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### メンバーと外部コラボレーターを表示する

保留中のメンバーや外部のコラボレータの数を表示できます。 You can filter the list of members by {% if currentVersion == "free-pro-team@latest" %}deployment ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}),{% endif %} role{% if currentVersion == "free-pro-team@latest" %}, and{% else %} or {% endif %} organization. コラボレータがアクセスできるリポジトリの可視性で、外部のコラボレータのリストをフィルタリングできます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

You can view {% if currentVersion == "free-pro-team@latest" %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% if currentVersion == "free-pro-team@latest" %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. メンバーのリストではなく、外部コラボレーターのリストを表示したい場合は、[**Outside collaborators**] をクリックします。 ![Organization メンバーのページにある、[Outside collaborators] タブ](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. 必要に応じて、保留中の招待リストを表示するには、[**_NUMBER_ pending**] をクリックします。
  ![検索およびフィルタオプションの右側にある [NUMBER pending] ボタン](/assets/images/help/enterprises/members-pending.png){% endif %}

### 参考リンク

- "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
