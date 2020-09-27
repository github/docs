---
title: Enterprise アカウントで GitHub Actions のポリシーを施行する
intro: 'Enterprise のオーナーは、Enterprise アカウントについて {{ site.data.variables.product.prodname_actions }} の無効化、有効化、および制限ができます。'
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Enterprise アカウント の {{ site.data.variables.product.prodname_actions }} 権限について

デフォルトでは、Enterprise アカウントが所有するすべての Organization で {{ site.data.variables.product.prodname_actions }} が有効です。 Enterprise アカウントが所有するすべての Organization に対して {{ site.data.variables.product.prodname_actions }} を無効にすることも、特定の Organization に対して無効にすることもできます。 Organization にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

{{ site.data.variables.product.prodname_actions }} に関する詳しい情報については、「[{{ site.data.variables.product.prodname_actions }} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。


### Enterprise アカウント の {{ site.data.variables.product.prodname_actions }} 権限の管理

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.actions.enterprise-actions-permissions }}

### プライベートリポジトリのフォークのワークフローを有効にする

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Enterprise アカウントのプライベートフォークポリシーを設定する

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
