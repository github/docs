---
title: 关于监控和疑难解答
intro: '您可以使用 {% data variables.product.prodname_actions %} 中的工具来监控和调试工作流程。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062040'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 监控工作流程 

{% ifversion github-runner-dashboard %}
### 监控组织或企业中的当前作业

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### 使用可视化图表

每个工作流程运行都会生成一个实时图表，说明运行进度。 您可以使用此图表来监控和调试工作流程。 例如：

   ![工作流程图表](/assets/images/help/images/workflow-graph.png)

有关详细信息，请参阅“[使用可视化效果图](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)”。 

### 添加工作流状态徽章

{% data reusables.repositories.actions-workflow-status-badge-intro %}

有关详细信息，请参阅“[添加工作流状态徽章](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)”。

{% ifversion fpt or ghec %}
### 查看作业执行时间

要确定作业运行所花费的时间，可以查看其执行时间。 例如：

   ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

有关详细信息，请参阅“[查看作业执行时间](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)”。
{% endif %}

### 查看工作流程运行历史记录

您可以查看工作流程中每个作业和步骤的状态。 例如：

   ![工作流程运行的名称](/assets/images/help/repository/run-name.png)

有关详细信息，请参阅“[查看工作流运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。

## 工作流程疑难解答

### 使用工作流运行日志

每个工作流程运行都会生成活动日志，您可以查看、搜索和下载这些日志。 例如：

   ![Super linter 工作流程结果](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

有关详细信息，请参阅“[使用工作流运行日志](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)”。

### 启用调试日志记录

如果工作流程日志没有提供足够的详细信息来诊断工作流程、作业或步骤未按预期工作的原因，您可以启用额外的调试日志。 有关详细信息，请参阅“[启用调试日志记录](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”。

## 对自托管运行程序进行监视和故障排除

如果您使用自托管运行器，则可以查看其活动并诊断常见问题。 

有关详细信息，请参阅“[监视和排查自托管运行器问题](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”。
