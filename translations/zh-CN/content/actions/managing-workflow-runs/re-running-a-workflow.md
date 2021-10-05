---
title: 重新运行工作流程
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
{% data reusables.actions.ae-beta %}

Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. You can re-run a workflow up to 30 days after the initial run.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单并选择 **Re-run all jobs（重新运行所有作业）**。{% ifversion fpt or ghes > 3.0 or ghae %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

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
