---
title: 监视当前的工作
intro: '监视 {% data variables.product.prodname_dotcom %} 托管的运行器如何处理组织或企业中的作业，并确定任何相关的约束。'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100158'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 查看组织或企业中的活动作业

可以获取当前在组织或企业中的 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的所有作业的列表。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. 查看“活动作业”部分，其中包含当前在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的所有作业的列表。

  ![活动作业列表的屏幕截图](/assets/images/help/settings/actions-runner-active-jobs.png)

## 查看组织或企业中的排队作业

{% data variables.product.prodname_dotcom %}-hosted runners 允许你同时运行作业，最大并发作业数将根据你的计划而有所不同。 如果达到最大并发作业数，任何新作业都将开始进入队列。 若要详细了解计划可用的并发作业数量，请参阅“[使用限制、计费和管理](/actions/learn-github-actions/usage-limits-billing-and-administration)”。

以下过程演示了如何检查可以运行的最大并发作业数。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. 查看“所有作业使用情况”部分，其中列出了活动作业的数量和你可以运行的最大作业数量。 在此示例中，`9` 个作业当前已超过最大值 `180`。
  ![一个帐户的最大作业的屏幕截图](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
