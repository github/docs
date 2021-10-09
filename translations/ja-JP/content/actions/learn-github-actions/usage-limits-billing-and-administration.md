---
title: 使用制限、支払い、管理
intro: '{% data variables.product.prodname_actions %} ワークフローには使用制限があります。 使用料は、リポジトリの無料の時間とストレージの量を超えるリポジトリに適用されます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %}の支払いについて

{% ifversion fpt %}
{% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %}s that use self-hosted runners.
{% endif %}

## 使用制限

{% ifversion fpt %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. これらの制限は変更されることがあります。

{% note %}

**ノート:** セルフホストランナーの場合、さまざまな使用制限が適用されます。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。

{% endnote %}

- **ジョブの実行時間** - ワークフロー中のそれぞれのジョブは、最大で6時間の間実行できます。 ジョブがこの制限に達すると、ジョブは終了させられ、完了できずに失敗します。
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **並行ジョブ** - アカウント内で実行できる並行ジョブ数は、以下の表に示すとおり、利用しているGitHubのプランによります。 この制限を超えた場合、超過のジョブはキューイングされます。

  | GitHubプラン  | 最大同時ジョブ | 最大同時macOSジョブ |
  | ---------- | ------- | ------------ |
  | 無料         | 20      | 5            |
  | Pro        | 40      | 5            |
  | Team       | 60      | 5            |
  | Enterprise | 180     | 50           |
- **ジョブマトリックス** - {% data reusables.github-actions.usage-matrix-limits %}
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
使用制限は、セルフホストランナーに適用されます。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。
{% endif %}

{% ifversion fpt %}
## 利用のポリシー

使用制限に加えて、{% data variables.product.prodname_actions %}を[GitHubの利用規約](/articles/github-terms-of-service/)内で使っていることを確認しなければなりません。 {% data variables.product.prodname_actions %}の固有の規約に関する詳しい情報については、[GitHubの追加製品規約](/github/site-policy/github-additional-product-terms#a-actions-usage)を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
## Billing for reusable workflows

If you reuse a workflow, billing is always associated with the caller workflow. For more information see, "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## 成果物とログの保持ポリシー

リポジトリ、Organization、または Enterprise アカウントの成果物とログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

詳しい情報については、以下を参照してください。

- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)"
{% endif %}

## リポジトリあるいはOrganizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限

{% data reusables.github-actions.disabling-github-actions %}

詳しい情報については、以下を参照してください。
- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- 「[Organization の {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」{% ifversion fpt %}
- {% data variables.product.prodname_ghe_cloud %} の「[Enterprise アカウントでの {% data variables.product.prodname_actions %} ポリシーを適用する](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)」{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## ワークフローの無効化と有効化

{% data variables.product.prodname_dotcom %} のリポジトリで個々のワークフローを有効化または無効化できます。

{% data reusables.actions.scheduled-workflows-disabled %}

詳しい情報については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
{% endif %}
