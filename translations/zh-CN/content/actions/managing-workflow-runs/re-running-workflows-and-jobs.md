---
title: 重新运行工作流程和作业
intro: '您可以工作流程运行初始运行后最长 30 天内重新运行工作流程运行{% if re-run-jobs %}、工作流程运行中所有失败的作业或工作流程运行中的特定作业{% endif %}。'
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

## 关于重新运行工作流程和作业

重新运行工作流程{% if re-run-jobs %} 或工作流程中的作业{% endif %} 会使用触发工作流程运行的原始事件的 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF` (Git ref)。 在初始运行后最长 30 天内，您可以重新运行工作流程{% if re-run-jobs %} 或工作流程中的作业{% endif %}。{% if debug-reruns %} 在重新运行工作流程或工作流程中的作业时，可以为重新运行启用调试日志记录。 这将为重新运行启用运行程序诊断日志记录和步骤调试日志记录。 有关调试日志记录的更多信息，请参阅“[启用调试日志记录](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”。{% endif %}

## 重新运行工作流程中的所有作业

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单，并选择 **Re-run all jobs（重新运行所有作业）**。

   如果没有作业失败，您将不会看到 **重新运行作业（Re-run jobs）**下拉菜单。 相反，请单击 **Re-run all jobs（重新运行所有作业）**。 ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.5 or ghae %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单，并选择 **Re-run all jobs（重新运行所有作业）**。 ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要重新运行失败的工作流程运行，请使用 `run rerun` 子命令。 将 `run-id` 替换为您想要重新运行的已失败运行的 ID。  如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近失败的运行。

```shell
gh run rerun <em>run-id</em>
```

{% if debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

要查看工作流程运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

```shell
gh run watch
```

{% endcli %}

{% if re-run-jobs %}
## 重新运行工作流程中失败的作业

如果工作流程运行中的任何作业失败，您可以仅重新运行失败的作业。 在重新运行工作流程中失败的作业时，将为所有失败的作业及其依赖项启动新的工作流程运行。 上一个工作流程运行中任何成功作业的任何输出都将用于重新运行。 在初始运行中创建的任何构件都将在重新运行中可用。 在上一次运行中通过的任何环境保护规则都将自动在重新运行中通过。

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单，并选择 **Re-run failed jobs（重新运行失败的作业）**。 ![重新运行失败的作业下拉菜单](/assets/images/help/repository/rerun-failed-jobs-drop-down.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

要重新运行工作流程运行中失败的作业，请使用 `run rerun` 子命令与 `--failed` 标志。 将 `run-id` 替换为要为其重新运行失败作业的运行 ID。 如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近失败的运行。

```shell
gh run rerun <em>run-id</em> --failed
```

{% if debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %}
{% endcli %}

## 重新运行工作流程中的特定作业

重新运行工作流程中的特定作业时，将为该作业和任何依赖项启动新的工作流程运行。 上一个工作流程运行中任何其他作业的任何输出都将用于重新运行。 在初始运行中创建的任何构件都将在重新运行中可用。 在上一次运行中通过的任何环境保护规则都将自动在重新运行中通过。

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在要重新运行的作业旁边，单击 {% octicon "sync" aria-label="The re-run icon" %}。 ![重新运行选定的作业](/assets/images/help/repository/re-run-selected-job.png)

   或者，单击作业以查看日志。 在日志中，单击 {% octicon "sync" aria-label="The re-run icon" %}。 ![重新运行选定的作业](/assets/images/help/repository/re-run-single-job-from-log.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

要重新运行工作流程运行中的特定作业，请使用 `run rerun` 子命令与 `--job` 标志。 将 `job-id` 替换为您想要重新运行的作业的 ID。

```shell
gh run rerun --job <em>job-id</em>
```

{% if debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %}
{% endcli %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## 查看以前的工作流程运行

您可以查看以前尝试运行工作流程的结果。 您还可以使用 API 查看以前的工作流程运行。 更多信息请参阅“[获取工作流程运行](/rest/reference/actions#get-a-workflow-run)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{%- if re-run-jobs %}
1. 任何以前的运行尝试都显示在 **Latest（最新）**下拉菜单中。 ![以前的运行尝试](/assets/images/help/repository/previous-run-attempts.png)
{%- else %}
1. 任何以前的运行尝试都显示在左窗格中。 ![重新运行工作流程](/assets/images/help/settings/actions-review-workflow-rerun.png)
{%- endif %}
1. 单击某个条目以查看其结果。

{% endif %}
