---
title: 跳过工作流程运行
intro: 您可以通过在提交消息中包含命令来跳过由 `push` 和 `pull_request` 事件触发的工作流程运行。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 跳过工作流程运行
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**注意：**如果由于[路径过滤](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、 [分支过滤](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)或提交消息而跳过工作流程（参见下文），则与该工作流程关联的检查将保持“挂起”状态。 需要这些检查成功的拉取请求将被阻止合并。

{% endnote %}

本来会触发使用 `on: push` 或 `on: pull_request` 的工作流程，如果您将以下任何字符串添加到推送中的提交消息或者拉取请求的 HEAD 提交，则不会触发：

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

或者，您也可以使用两个空行后接 `skip-checks: true` 或 `skip-checks:true` 来结束提交消息。

如果您的仓库配置为需要先通过特定检查，则无法合并拉取请求。 要允许合并拉取请求，您可以将新提交推送到拉取请求，而无需提交消息中的跳过指令。

{% note %}

**注意：**跳过指令仅适用于 `push` 和 `pull_request` 事件。 例如，将 `[skip ci]` 添加到提交消息不会停止触发 `on: pull_request_target` 的工作流程运行。

{% endnote %}

跳过指令仅适用于由包含跳过指令的提交触发的工作流程运行。 您还可以禁用工作流程的运行。 更多信息请参阅“[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)。
