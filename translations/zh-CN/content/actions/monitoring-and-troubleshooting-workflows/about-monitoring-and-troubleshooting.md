---
title: About monitoring and troubleshooting
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to monitor and debug your workflows.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Monitoring your workflows

{% ifversion fpt or ghae or ghes > 3.0 %}

### 使用可视化图表

每个工作流程运行都会生成一个实时图表，说明运行进度。 您可以使用此图表来监控和调试工作流程。 例如：

   ![工作流程图表](/assets/images/help/images/workflow-graph.png)

For more information, see "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

{% endif %}

### 添加工作流程状态徽章

{% data reusables.repositories.actions-workflow-status-badge-intro %}

更多信息请参阅“[添加工作流程状态徽章](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)”。

{% ifversion fpt %}
### 查看作业执行时间

To identify how long a job took to run, you can view its execution time. 例如：

   ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

更多信息请参阅“[查看作业执行时间](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)”。
{% endif %}

### 查看工作流程运行历史记录

You can view the status of each job and step in a workflow. 例如：

   ![工作流程运行的名称](/assets/images/help/repository/run-name.png)

更多信息请参阅“[查看工作流程运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。

## Troubleshooting your workflows

### 使用工作流程运行日志

Each workflow run generates activity logs that you can view, search, and download. 例如：

   ![Super linter 工作流程结果](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

更多信息请参阅“[使用工作流程运行日志](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)”。

### 启用调试日志

如果工作流程日志没有提供足够的详细信息来诊断工作流程、作业或步骤未按预期工作的原因，您可以启用额外的调试日志。 更多信息请参阅“[启用调试日志记录](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”。

## 自托管运行器的监控和故障排除

If you use self-hosted runners, you can view their activity and diagnose common issues.

更多信息请参阅“[自托管运行器监控和故障排除](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”。
