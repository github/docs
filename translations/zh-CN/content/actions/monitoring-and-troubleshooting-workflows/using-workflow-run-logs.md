---
title: 使用工作流运行日志
intro: 您可以查看、搜索和下载工作流程运行中每个作业的日志。
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ef8d0a7f1708b8c23705a04496b3d78737aec450
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147521520'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

您可以从工作流程运行页面查看工作流程运行是在进行中，还是已完成。 您必须登录到 {% data variables.product.prodname_dotcom %} 帐户才能查看工作流程运行信息，包括公共仓库。 有关详细信息，请参阅“[对 GitHub 的访问权限](/articles/access-permissions-on-github)”。

如果运行已完成，则可查看运行结果是成功、失败、已取消还是中性。 如果运行失败，您可以查看并搜索构建日志，来诊断失败原因并重新运行工作流程。 您也可以查看可计费作业执行分钟数，或下载日志和创建构件。

{% data variables.product.prodname_actions %} 使用 Checks API 来输出工作流程的状态、结果和日志。 {% data variables.product.prodname_dotcom %} 对每个工作流程创建新检查套件。 检查套件包含检查工作流程中每项作业的运行，而每项作业包含步骤。 {% data variables.product.prodname_actions %} 作为工作流程中的一个步骤运行。 有关检查 API 的详细信息，请参阅“[检查](/rest/reference/checks)”。

{% data reusables.actions.invalid-workflow-files %}

## 查看日志以诊断故障

如果工作流程运行失败，您可以查看是哪个步骤导致了失败，然后审查失败步骤的创建日志进行故障排除。 您可以查看每个步骤运行的时长。 也可以将永久链接复制到日志文件中的特定行，与您的团队分享。 {% data reusables.repositories.permissions-statement-read %}

除了工作流程文件中配置的步骤外，{% data variables.product.prodname_dotcom %} 为每个作业添加了另外两个步骤，以设置和完成作业的执行。 这些步骤以名称"设置作业"和"完成作业"记录在工作流程运行中。

对于在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的作业，“设置作业”会记录运行器映像的详细信息，它还包含一个链接，指向运行器机器上的预安装工具列表。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## 搜索日志

您可以搜索特定步骤的创建日志。 在搜索日志时，只有展开的步骤会包含在结果中。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. 在日志输出右上角的“搜索日志”搜索框中，输入搜索查询。
![用于搜索日志的搜索框](/assets/images/help/repository/search-log-box-updated-2.png)

## 下载日志

您可以从工作流程运行中下载日志文件。 您也可以下载工作流程的构件。 有关详细信息，请参阅“[使用工件持久保存工作流数据](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. 在右上角，单击 {% octicon "gear" aria-label="The gear icon" %}，然后选择“下载日志存档”。
  
  ![下载日志下拉菜单](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **注意**：下载部分重新运行的工作流的日志存档时，存档仅包括已重新运行的作业。 若要获取从工作流程运行的作业的完整日志集，必须下载运行其他作业的上一次运行尝试的日志存档。

  {% endnote %}

  {% endif %}

## 删除日志

您可以从工作流程运行中删除日志文件。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 在右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
    
    ![烤肉串水平图标](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. 要删除日志文件，请单击“删除所有日志”按钮并查看确认提示。 
  
  ![删除所有日志](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
删除日志后，“删除所有日志”按钮将会移除，以表示在工作流运行中没有日志文件。

## 使用 {% data variables.product.prodname_cli %} 查看日志

{% data reusables.cli.cli-learn-more %}

若要查看特定作业的日志，请使用 `run view` 子命令。 将 `run-id` 替换为想要查看其日志的运行的 ID。 {% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您从运行中选择作业。 如果没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单来供你选择最近的运行，然后返回另一个交互式菜单，让你从运行中选择作业。

```shell
gh run view <em>run-id</em> --log
```

还可以使用 `--job` 标记来指定作业 ID。 将 `job-id` 替换为想要查看其日志的作业的 ID。

```shell
gh run view --job <em>job-id</em> --log
```

可使用 `grep` 搜索日志。 例如，此命令将返回包含 `error` 一词的所有日志条目。

```shell
gh run view --job <em>job-id</em> --log | grep error
```

若要筛选任何失败步骤的日志，请使用 `--log-failed` 而不是 `--log`。

```shell
gh run view --job <em>job-id</em> --log-failed
```
