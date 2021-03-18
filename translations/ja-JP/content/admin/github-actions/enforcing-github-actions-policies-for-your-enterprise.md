---
title: Enforcing GitHub Actions policies for your enterprise
intro: 'Enterprise 管理者は、Enterprise 内の {% data variables.product.prodname_actions %} へのアクセスを管理できます。'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}

### Enterprise の {% data variables.product.prodname_actions %} 権限について

{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にすると、企業内のすべての Organization で有効になります。 Enterprise 内のすべての Organization に対して {% data variables.product.prodname_actions %} を無効化するか、特定の Organization のみを許可するかを選択できます。 Enterprise にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

### Enterprise の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
