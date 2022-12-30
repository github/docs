---
title: 重新运行工作流程和作业
intro: '可以在工作流运行初始运行后最长 30 天内重新运行工作流运行{% ifversion re-run-jobs %}、工作流运行中所有失败的作业或工作流运行中的特定作业{% endif %}。'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419719'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于重新运行工作流程和作业

重新运行工作流{% ifversion re-run-jobs %}或工作流中的作业{% endif %}使用与触发工作流运行的原始事件相同的 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF` (Git ref)。 {% ifversion actions-stable-actor-ids %} 工作流将使用最初触发工作流的参与者的权限，而不是启动重新运行的参与者的权限。 {% endif %}在初始运行最多 30 天后，可以重新运行工作流{% ifversion re-run-jobs %}或工作流中的作业{% endif %}。{% ifversion re-run-jobs %}一旦工作流的日志超过其保留限制，就无法重新运行工作流中的作业。 有关详细信息，请参阅“[使用限制、计费和管理](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”。{% endif %}{% ifversion debug-reruns %} 重新运行工作流或工作流中的作业时，可以为重新运行启用调试日志记录。 这将为重新运行启用运行器诊断日志记录和步骤调试日志记录。 有关调试日志记录的详细信息，请参阅“[启用调试日志记录](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”。{% endif %}

## 重新运行工作流程中的所有作业

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. 在工作流的右上角，使用“重新运行作业”下拉菜单，然后选择“重新运行所有作业” 。

   如果没有作业失败，则看不到“重新运行作业”下拉菜单。 相反，单击“重新运行所有作业”。
    ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %} {% ifversion ghes < 3.5 or ghae %}
1. 在工作流的右上角，使用“重新运行作业”下拉菜单，然后选择“重新运行所有作业” 。
    ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要重新运行失败的工作流运行，请使用 `run rerun` 子命令。 将 `run-id` 替换为要重新运行的已失败运行的 ID。  如果没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回交互式菜单供你选择最近失败的运行。

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

要查看工作流运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## 重新运行工作流程中失败的作业

如果工作流程运行中的任何作业失败，您可以仅重新运行失败的作业。 在重新运行工作流程中失败的作业时，将为所有失败的作业及其依赖项启动新的工作流程运行。 上一个工作流程运行中任何成功作业的任何输出都将用于重新运行。 在初始运行中创建的任何构件都将在重新运行中可用。 在上一次运行中通过的任何环境保护规则都将自动在重新运行中通过。

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 在工作流的右上角，使用“重新运行作业”下拉菜单，然后选择“重新运行失败的作业” 。
    ![“重新运行失败的作业”下拉菜单](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

若要在工作流运行中重新运行失败的作业，请使用带有 `--failed` 标志的 `run rerun` 子命令。 将 `run-id` 替换为其重新运行失败作业的运行的 ID。 如果没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回交互式菜单供你选择最近失败的运行。

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## 重新运行工作流程中的特定作业

重新运行工作流程中的特定作业时，将为该作业和任何依赖项启动新的工作流程运行。 上一个工作流程运行中任何其他作业的任何输出都将用于重新运行。 在初始运行中创建的任何构件都将在重新运行中可用。 在上一次运行中通过的任何环境保护规则都将自动在重新运行中通过。

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 在要重新运行的作业旁边，单击 {% octicon "sync" aria-label="The re-run icon" %}。
   ![重新运行选定的作业](/assets/images/help/repository/re-run-selected-job.png)

   或者，单击作业以查看日志。 在日志中，单击 {% octicon "sync" aria-label="The re-run icon" %}。
   ![重新运行选定的作业](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

若要在工作流运行中重新运行特定作业，请使用带有 `--job` 标志的 `run rerun` 子命令。 将 `job-id` 替换为要重新运行的作业的 ID。

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## 使用可重用工作流重新运行工作流和作业

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## 查看以前的工作流程运行

您可以查看以前尝试运行工作流程的结果。 您还可以使用 API 查看以前的工作流程运行。 有关详细信息，请参阅“[获取工作流运行](/rest/reference/actions#get-a-workflow-run)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. 任何以前的运行尝试都显示在“最新”下拉菜单中。
   ![以前的运行尝试](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. 任何以前的运行尝试都显示在左窗格中。
    ![重新运行工作流](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. 单击某个条目以查看其结果。

{% endif %}
