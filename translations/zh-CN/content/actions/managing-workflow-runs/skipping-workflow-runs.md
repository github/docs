---
title: 跳过工作流程运行
intro: You can skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Workflows that would otherwise be triggered using `on: push` or `on: pull_request` won't be triggered if you add any of the following strings to the commit message in a push, or the HEAD commit of a pull request:

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

Skip instructions only apply to the workflow run(s) that would be triggered by the commit that contains the skip instructions. You can also disable a workflow from running. 更多信息请参阅“[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)。
