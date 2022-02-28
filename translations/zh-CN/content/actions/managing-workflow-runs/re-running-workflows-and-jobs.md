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

## Re-running all the jobs in a workflow

重新运行工作流程使用触发工作流程运行的原始事件的 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF` (Git ref)。 You can re-run a workflow for up to 30 days after the initial run.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
1. In the upper-right corner of the workflow, use the **Re-run jobs** drop-down menu, and select **Re-run all jobs** ![Rerun checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.3 or ghae %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单，并选择 **Re-run all jobs（重新运行所有作业）**。 ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要重新运行失败的工作流程运行，请使用 `run rerun` 子命令。 将 `run-id` 替换为您想要重新运行的已失败运行的 ID。  如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近失败的运行。

```shell
gh run rerun <em>run-id</em>
```

要查看工作流程运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

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
