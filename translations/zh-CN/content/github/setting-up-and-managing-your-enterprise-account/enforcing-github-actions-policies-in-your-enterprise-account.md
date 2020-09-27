---
title: 在企业帐户中实施 GitHub 操作策略
intro: '企业所有者可以对企业帐户禁用、启用和限制 {{ site.data.variables.product.prodname_actions }}。'
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### 关于企业帐户的 {{ site.data.variables.product.prodname_actions }} 权限

默认情况下，在企业帐户拥有的所有组织中启用 {{ site.data.variables.product.prodname_actions }}。 您可以选择对企业账户拥有的所有组织禁用 {{ site.data.variables.product.prodname_actions }}，或只对指定的组织启用。 您还可以限制公共操作的使用，以使人们只能使用您的组织中存在的本地操作。

有关 {{ site.data.variables.product.prodname_actions }} 的更多信息，请参阅“[关于 {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)”。


### 管理企业帐户的 {{ site.data.variables.product.prodname_actions }} 权限

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.actions.enterprise-actions-permissions }}

### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for your enterprise account

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
