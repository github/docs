---
title: 启用调试日志
intro: '如果工作流程日志没有提供足够的详细信息来诊断工作流程、作业或步骤未按预期工作的原因，您可以启用额外的调试日志。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

这些额外的日志将通过在包含工作流程的仓库中设置密码来启用，因此将应用相同的权限要求：

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- {% data reusables.github-actions.permissions-statement-secrets-environment %}
{% endif %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

有关设置密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

### 启用运行程序诊断日志

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. 两个额外的日志文件被添加到日志存档中：

* 运行程序进程日志，其中包含关于如何协调和设置运行程序执行作业的信息。
* 工作程序进程日志，用于记录作业执行情况。

1. 要启用运行程序诊断日志，请在包含工作流程的仓库中设置以下密码：将 `ACTIONS_RUNNER_DEBUG` 设置为 `true`。

1. 要下载运行程序诊断日志，请下载工作流程运行情况的日志存档。 运行程序诊断日志包含在 `runner-diagnostic-logs` 文件夹中。 关于下载日志的更多信息，请参阅“[下载日志](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)”。

### 启用步骤调试日志

步骤调试日志增加了作业执行期间和执行之后的作业日志的详细程度。

1. 要启用步骤调试日志，必须在包含工作流程的仓库中设置以下密码：将 `ACTIONS_STEP_DEBUG` 设置为 `true`。

1. 设置密码后，步骤日志中会显示更多调试事件。 更多信息请参阅[“查看日志以诊断故障”](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures)。
