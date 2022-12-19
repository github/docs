---
title: 跳过工作流程运行
intro: 可以通过在提交消息中包含命令来跳过由 `push` 和 `pull_request` 事件触发的工作流运行。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199968'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

注意：如果因[路径筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[分支筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)或提交消息（见下文）而跳过某工作流，则与该工作流关联的检查将保持为“挂起”状态。 要求这些检查成功的拉取请求将被阻止合并。

{% endnote %}

如果将以下任何字符串添加到推送中的提交消息，或拉取请求的 HEAD 提交中，则不会触发原本使用 `on: push` 或 `on: pull_request` 进行触发的工作流：

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

或者，可以用两个空行结束提交消息，后跟：
- `skip-checks:true`
- `skip-checks: true`

如果您的仓库配置为需要先通过特定检查，则无法合并拉取请求。 要允许合并拉取请求，您可以将新提交推送到拉取请求，而无需提交消息中的跳过指令。

{% note %}

**注意**：跳过说明仅适用于 `push` 事件和 `pull_request` 事件。 例如，将 `[skip ci]` 添加到提交消息不会停止触发 `on: pull_request_target` 的工作流运行。

{% endnote %}

跳过指令仅适用于由包含跳过指令的提交触发的工作流程运行。 您还可以禁用工作流程的运行。 有关详细信息，请参阅“[禁用和启用工作流](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)”。
