---
title: 使用制限、支払い、管理
intro: '{% data variables.product.prodname_actions %} ワークフローには使用制限があります。 使用料は、リポジトリの無料の時間とストレージの量を超えるリポジトリに適用されます。'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %}の支払いについて

{% data reusables.repositories.about-github-actions %} For more information, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}" and "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %} instances that use self-hosted runners. 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。
{% endif %}


{% ifversion fpt or ghec %}

## 利用の可否

{% data variables.product.prodname_actions %} is available on all {% data variables.product.prodname_dotcom %} products, but {% data variables.product.prodname_actions %} is not available for private repositories owned by accounts using legacy per-repository plans. {% data reusables.gated-features.more-info %}

{% endif %}

## 使用制限

{% ifversion fpt or ghec %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. これらの制限は変更されることがあります。

{% note %}

**ノート:** セルフホストランナーの場合、さまざまな使用制限が適用されます。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。

{% endnote %}

- **ジョブの実行時間** - ワークフロー中のそれぞれのジョブは、最大で6時間の間実行できます。 ジョブがこの制限に達すると、ジョブは終了させられ、完了できずに失敗します。
{% data reusables.actions.usage-workflow-run-time %}
{% data reusables.actions.usage-api-requests %}
- **並行ジョブ** - アカウント内で実行できる並行ジョブ数は、以下の表に示すとおり、利用しているGitHubのプランによります。 この制限を超えた場合、超過のジョブはキューイングされます。

  | GitHubプラン  | 最大同時ジョブ | 最大同時macOSジョブ |
  | ---------- | ------- | ------------ |
  | 無料         | 20      | 5            |
  | Pro        | 40      | 5            |
  | Team       | 60      | 5            |
  | Enterprise | 180     | 50           |

  {% note %}

  **Note:** If required, customers on enterprise plans can request a higher limit for concurrent jobs. For more information, contact {% data variables.contact.contact_ent_support %} or your sales representative.

  {% endnote %}
- **ジョブマトリックス** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}

{% else %}
使用制限は、セルフホストランナーに適用されます。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %}
## 利用のポリシー

使用制限に加えて、{% data variables.product.prodname_actions %}を[GitHubの利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service/)内で使っていることを確認しなければなりません。 {% data variables.product.prodname_actions %}の固有の規約に関する詳しい情報については、[GitHubの追加製品規約](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage)を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Billing for reusable workflows

{% data reusables.actions.reusable-workflows-ghes-beta %}

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. The caller cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository.

For more information see, "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

## 成果物とログの保持ポリシー

リポジトリ、Organization、または Enterprise アカウントの成果物とログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

詳しい情報については、以下を参照してください。

- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## リポジトリあるいはOrganizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限

{% data reusables.actions.disabling-github-actions %}

詳しい情報については、以下を参照してください。
- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- 「[Organization の {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」
- "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## ワークフローの無効化と有効化

{% data variables.product.prodname_dotcom %} のリポジトリで個々のワークフローを有効化または無効化できます。

{% data reusables.actions.scheduled-workflows-disabled %}

詳しい情報については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
