---
title: 取消工作流程
intro: '您可以取消正在运行的工作流程。 当您取消工作流程运行时，{% data variables.product.prodname_dotcom %} 会取消属于该工作流程的所有作业和步骤。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: f8bf0d06f5e0e37cb120b22a3bd6da39b51b78a9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084686'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## 取消工作流程运行

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. 从工作流运行列表中，单击要取消的 `queued` 或 `in progress` 运行的名称。
![工作流运行的名称](/assets/images/help/repository/in-progress-run.png)
1. 在工作流右上角单击“取消工作流”。
![“取消检查套件”按钮](/assets/images/help/repository/cancel-check-suite-updated.png)

## {% data variables.product.prodname_dotcom %} 取消工作流程运行所执行的步骤

取消工作流程运行时，您可能正在运行使用与工作流程运行相关的资源的其他软件。 为了帮助您释放与工作流程运行相关的资源，它可能有助于了解 {% data variables.product.prodname_dotcom %} 为取消工作流程运行而执行的步骤。

1. 要取消工作流运行，服务器将重新评估所有正在运行的作业的 `if` 条件。 如果条件评估为 `true`，作业将不会取消。 例如，条件 `if: always()` 评估为 true，作业继续运行。 没有条件时，则等同于条件 `if: success()`，仅在上一步已成功完成时才会运行。
2. 对于需要取消的作业，服务器向包含需取消作业的所有运行器机器发送取消消息。
3. 对于继续运行的作业，服务器将对未完成的步骤重新评估 `if` 条件。 如果条件评估为 `true`，则步骤继续运行。
4. 对于需要取消的步骤，运行器计算机发送 `SIGINT/Ctrl-C` 到该步骤的入口进程（对于 javascript 操作，为 `node`；对于容器操作，为 `docker`；在步骤中使用 `run` 时，为 `bash/cmd/pwd`）。 如果进程未在 7500 毫秒内退出，运行器将发送 `SIGTERM/Ctrl-Break` 到此进程，然后等待 2500 毫秒让进程退出。 如果该进程仍在运行，运行器会停止进程树。
5. 在 5 分钟取消超时期后，服务器将强制终止未完成运行或无法完成取消进程的所有作业和步骤。
