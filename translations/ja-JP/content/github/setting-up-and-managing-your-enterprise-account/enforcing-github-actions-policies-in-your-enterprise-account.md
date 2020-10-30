---
title: Enterprise アカウントで GitHub Actions のポリシーを施行する
intro: 'Enterprise のオーナーは、Enterprise アカウントについて {% data variables.product.prodname_actions %} の無効化、有効化、および制限ができます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Enterprise アカウント の {% data variables.product.prodname_actions %} 権限について

デフォルトでは、Enterprise アカウントが所有するすべての Organization で {% data variables.product.prodname_actions %} が有効です。 Enterprise アカウントが所有するすべての Organization に対して {% data variables.product.prodname_actions %} を無効にすることも、特定の Organization に対して無効にすることもできます。 Organization にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

{% data variables.product.prodname_actions %} に関する詳しい情報については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。


### Enterprise アカウント の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Enterprise アカウントのプライベートフォークポリシーを設定する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
