---
title: ワークフローを再実行する
intro: You can re-run an instance of a workflow up to 30 days after the initial run.
product: '{% data reusables.gated-features.actions %}'
permissions: People with write permissions to a repository can re-run workflows in the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. You can re-run a workflow up to 30 days after the initial run.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上部から、**Re-run jobs（ジョブの再実行）**ドロップダウンメニューを使い、**Re-run all jobs（すべてのジョブを再実行）**を選択してください。{% ifversion fpt or ghes > 3.0 or ghae %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

失敗したワークフローの実行を再実行するには、`run rerun` サブコマンドを使用します。 `run-id` を、再実行する失敗した実行の ID に置き換えます。  `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は、最近失敗した実行を選択するためのインタラクティブメニューを返します。

```shell
gh run rerun <em>run-id</em>
```

ワークフロー実行の進行状況を表示するには、`run watch` サブコマンドを使用して、インタラクティブリストから実行を選択します。

```shell
gh run watch
```

{% endcli %}
