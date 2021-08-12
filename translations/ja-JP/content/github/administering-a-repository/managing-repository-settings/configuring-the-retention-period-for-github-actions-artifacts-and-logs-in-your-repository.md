---
title: リポジトリ内の GitHub Actions アーティファクトとログの保持期間を設定する
intro: 'リポジトリ内の {% data variables.product.prodname_actions %} アーティファクトとログの保持期間を設定できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
---

{% data reusables.actions.about-artifact-log-retention %}

ワークフローによって作成された特定のアーティファクトのカスタム保存期間を定義することもできます。 詳しい情報については、「[アーティファクトの保持期間を設定する](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)」を参照してください。

## リポジトリの保持期間を設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
