---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### {% data variables.product.prodname_actions %}の支払いについて

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。
{% else %}
GitHub Actions usage is free for
{% data variables.product.prodname_ghe_server %} that use self-hosted runners.
{% endif %}

### 使用制限

{% if currentVersion == "free-pro-team@latest" %}
There are some limits on
{% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. これらの制限は変更されることがあります。

{% note %}

**Note:** For self-hosted runners, different usage limits apply. 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。

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
Usage limits apply to self-hosted runners. 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 利用のポリシー
In addition to the usage limits, you must ensure that you use

{% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/articles/github-terms-of-service/). {% data variables.product.prodname_actions %}の固有の規約に関する詳しい情報については、[GitHubの追加製品規約](/github/site-policy/github-additional-product-terms#a-actions-usage)を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### アーティファクトとログの保持ポリシー

リポジトリ、Organization、または Enterprise アカウントのアーティファクトとログの保持期間を構成できます。

{% data reusables.actions.about-artifact-log-retention %}

詳しい情報については、以下を参照してください。

- [リポジトリ内のアーティファクトとログの {% data variables.product.prodname_actions %} の保持期間を設定する](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Organization 内のアーティファクトとログの {% data variables.product.prodname_actions %} の保持期間を設定する](/github/setting-up-and-managing-organizations-and-teams/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Enterprise 内のアーティファクトとログの {% data variables.product.prodname_actions %} の保持期間を設定する](/github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### リポジトリあるいはOrganizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限

{% data reusables.github-actions.disabling-github-actions %}

詳しい情報については、以下を参照してください。
- "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)" for {% data variables.product.prodname_ghe_cloud %}{% endif %}

### Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
