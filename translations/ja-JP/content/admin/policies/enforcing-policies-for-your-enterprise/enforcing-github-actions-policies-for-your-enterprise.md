---
title: Enterprise に GitHub Actions のポリシーを適用する
intro: 'Enterprise 管理者は、Enterprise 内の {% data variables.product.prodname_actions %} へのアクセスを管理できます。'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## Enterprise の {% data variables.product.prodname_actions %} 権限について

{% ifversion ghae %}{% else %}{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にすると、Enterprise 内のすべての Organization で有効化されます。 {% endif %} Enterprise 内のすべての Organization に対して {% data variables.product.prodname_actions %} を無効にするか、特定の Organization のみを許可するかを選択できます。 Enterprise にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

## Enterprise の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% ifversion ghes > 2.22 or ghae %}
## 特定のアクションの実行を許可する

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. [**Policies**] で [**Allow select actions**] を選択し、必要なアクションをリストに追加します。
   {%- ifversion ghes or ghae-issue-5094 %}
   ![許可リストにアクションを追加する](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![許可リストにアクションを追加する](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}
{% endif %}

{% ifversion ghes > 2.22 or ghae %}
## プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

### Enterprise のプライベートフォークポリシーを設定する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
