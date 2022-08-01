---
title: About monitoring and troubleshooting
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to monitor and debug your workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Monitoring your workflows

{% ifversion github-runner-dashboard %}
### Monitoring your current jobs in your organization or enterprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### 視覚化グラフの利用

すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 このグラフを使って、ワークフローをモニタリング及びデバッグできます。 例:

   ![ワークフローグラフ](/assets/images/help/images/workflow-graph.png)

For more information, see "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

### ワークフローステータスバッジを追加する

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)."

{% ifversion fpt or ghec %}
### ジョブの実行時間を表示する

To identify how long a job took to run, you can view its execution time. 例:

   ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

詳しい情報については、「[ジョブの実行時間を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)」を参照してください。
{% endif %}

### ワークフロー実行の履歴を表示する

You can view the status of each job and step in a workflow. 例:

   ![ワークフローの実行の名前](/assets/images/help/repository/run-name.png)

詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。

## Troubleshooting your workflows

### ワークフロー実行ログを使用する

Each workflow run generates activity logs that you can view, search, and download. 例:

   ![Super linterワークフローの結果](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

詳しい情報については、「[ワークフロー実行ログを使用する](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)」を参照してください。

### デバッグロギングの有効化

ワークフロージョブあるいはステップが期待どおりに動作しない理由を診断する上で、十分な詳細がワークフローのログになかった場合、追加のデバッグロギングを有効化できます。 詳しい情報については、「[デバッグログの有効化](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)」を参照してください。

## セルフホストランナーのモニタリングとトラブルシューティング

If you use self-hosted runners, you can view their activity and diagnose common issues.

詳しい情報については「[セルフホストランナーのモニタリングとトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。
