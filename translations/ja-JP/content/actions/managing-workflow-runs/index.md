---
title: ワークフロー実行を管理する
shortTitle: ワークフロー実行を管理する
intro: 'ワークフローの各ステップのステータスと結果の表示、保留中のワークフローのキャンセル、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}デプロイメントのレビュー、{% endif %}支払い可能なジョブの実行分の表示、失敗したワークフローのデバッグと再実行、ログの検索とダウンロード、成果物のダウンロードを行うことができます。'
redirect_from:
  - /actions/configuring-and-managing-workflows/managing-a-workflow-run
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/configuring-and-managing-workflows/configuring-and-managing-workflow-files-and-runs
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
children:
  - /using-the-visualization-graph
  - /viewing-workflow-run-history
  - /using-workflow-run-logs
  - /manually-running-a-workflow
  - /re-running-a-workflow
  - /canceling-a-workflow
  - /approving-workflow-runs-from-public-forks
  - /reviewing-deployments
  - /disabling-and-enabling-a-workflow
  - /deleting-a-workflow-run
  - /viewing-job-execution-time
  - /downloading-workflow-artifacts
  - /removing-workflow-artifacts
  - /enabling-debug-logging
  - /adding-a-workflow-status-badge
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}{% endif %}
