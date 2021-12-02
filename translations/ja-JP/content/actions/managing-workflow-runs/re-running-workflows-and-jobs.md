---
title: Re-running workflows and jobs
intro: You can re-run a workflow run up to 30 days after its initial run.
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Re-running all the jobs in a workflow

Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. You can re-run a workflow for up to 30 days after the initial run.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
1. In the upper-right corner of the workflow, use the **Re-run jobs** drop-down menu, and select **Re-run all jobs** ![Rerun checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.3 or ghae %}
1. ワークフローの右上隅にある [**Re-run jobs**] ドロップダウンメニューを使用して、[**Re-run all jobs**] を選択します。 ![[Re-run checks] ドロップダウンメニュー](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}

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

{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
### Reviewing previous workflow runs

You can view the results from your previous attempts at running a workflow. You can also view previous workflow runs using the API. For more information, see ["Get a workflow run"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Any previous run attempts are shown in the left pane. ![Rerun workflow](/assets/images/help/settings/actions-review-workflow-rerun.png)
1. Click an entry to view its results.

{% endif %}
