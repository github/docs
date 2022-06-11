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

The {% data variables.product.prodname_actions %} Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.{% ifversion fpt or ghec or ghes %} For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}
