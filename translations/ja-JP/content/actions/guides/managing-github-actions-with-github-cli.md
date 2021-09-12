---
title: GitHub CLI で GitHub Actions を管理する
intro: '{% data variables.product.prodname_actions %} で {% data variables.product.prodname_cli %} とインタラクションできます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### {% data variables.product.prodname_cli %}の設定方法

{% data reusables.cli.download-update-cli %} {% data reusables.cli.actions-cli-version %} {% data reusables.cli.cli-manual %}

{% data reusables.cli.cli-auth %}

{% data reusables.cli.cli-repo %}

### {% data variables.product.prodname_cli %} で {% data variables.product.prodname_actions %} を管理する

{% data variables.product.prodname_actions %} に関連する使用可能なすべてのコマンドを表示するには、`gh actions` を実行します。

特定のシナリオでコマンドを使用する方法の詳細については、以下の手順を参照してください。

- 「[ワークフローを再実行する](/actions/managing-workflow-runs/re-running-a-workflow#re-run-a-workflow-through-github-cli)」
- 「[ワークフローを手動で実行する](/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-using-github-cli)」
- 「[ワークフロー成果物をダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts#download-artifacts-through-github-cli)」
- 「[ワークフローの実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-through-github-cli)」
- 「[ワークフローの実行履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history#viewing-workflow-run-history-with-github-cli)」{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- 「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-and-enabling-workflows-through-github-cli)」{% endif %}
