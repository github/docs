---
title: Enterprise に GitHub Actions のポリシーを適用する
intro: 'Enterprise 管理者は、Enterprise 内の {% data variables.product.prodname_actions %} へのアクセスを管理できます。'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
---
{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

### Enterprise の {% data variables.product.prodname_actions %} 権限について

{% if currentVersion == "github-ae@latest" %}{% else %}{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にすると、Enterprise 内のすべての Organization で有効化されます。 {% endif %} Enterprise 内のすべての Organization に対して {% data variables.product.prodname_actions %} を無効にするか、特定の Organization のみを許可するかを選択できます。 Enterprise にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

### Enterprise の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest"%}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Enterprise のプライベートフォークポリシーを設定する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
