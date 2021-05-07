---
title: 使用制限、支払い、管理
intro: '{% data variables.product.prodname_actions %} ワークフローには使用制限があります。 使用料は、リポジトリの無料の時間とストレージの量を超えるリポジトリに適用されます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Billing
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### {% data variables.product.prodname_actions %}の支払いについて

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。
{% else %}
GitHub アクションの使用は、
セルフホストランナーを使用する {% data variables.product.prodname_ghe_server %} では無料です。
{% endif %}

### 使用制限

{% if currentVersion == "free-pro-team@latest" %}
ー
{% data variables.product.prodname_dotcom %} ホストランナーを使用する場合、{% data variables.product.prodname_actions %} の使用にはいくつかの制限があります。 これらの制限は変更されることがあります。

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
{% else %}
使用制限は、セルフホストランナーに適用されます。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 利用のポリシー
使用制限に加えて、

[GitHub 利用規約](/articles/github-terms-of-service/)で {% data variables.product.prodname_actions %} を使用していることを確認する必要があります。 {% data variables.product.prodname_actions %}の固有の規約に関する詳しい情報については、[GitHubの追加製品規約](/github/site-policy/github-additional-product-terms#a-actions-usage)を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 成果物とログの保持ポリシー

リポジトリ、Organization、または Enterprise アカウントの成果物とログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

詳しい情報については、以下を参照してください。

- [リポジトリ内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Organization 内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Enterprise 内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### リポジトリまたは Organization の {% data variables.product.prodname_actions %} を無効化または制限する

{% data reusables.github-actions.disabling-github-actions %}

詳しい情報については、以下を参照してください。
- 「[リポジトリの {% data variables.product.prodname_actions %} を無効化または制限する](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)」
- 「[Organization の {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」{% if currentVersion == "free-pro-team@latest" %}
- {% data variables.product.prodname_ghe_cloud %} の「[Enterprise アカウントでの {% data variables.product.prodname_actions %} ポリシーを適用する](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)」{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### ワークフローの無効化と有効化

{% data variables.product.prodname_dotcom %} のリポジトリで個々のワークフローを有効化または無効化できます。

{% data reusables.actions.scheduled-workflows-disabled %}

詳しい情報については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
{% endif %}
