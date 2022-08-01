---
title: GitHub Actionsの権限
allowTitleToDifferFromFilename: true
shortTitle: 権限
intro: '{% data variables.product.prodname_actions %} Permissions APIを使うと、どのEnterprise、Organization、リポジトリが{% data variables.product.prodname_actions %}を実行できるか、そしてどのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を実行できるかの権限を設定できます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Permissions APIについて

{% data variables.product.prodname_actions %} Permissions API では、どのEnterprise、Organizaton、リポジトリが {% data variables.product.prodname_actions %} を実行できるか、どのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を実行できるかについて権限を設定できます。{% ifversion fpt or ghec or ghes %}詳しい情報については[利用制限、支払い、管理](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)」を参照してください。{% endif %}
