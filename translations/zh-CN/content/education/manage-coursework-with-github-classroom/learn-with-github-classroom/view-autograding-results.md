---
title: 查看自动评分结果
intro: 您可以在作业仓库中查看自动评分结果。
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099780'
---
## 关于自动分级

教师可以配置测试在您推送到 {% data variables.product.product_location %} 上的作业仓库时自动检查您的工作。

如果您是学生，并且讲师已为 {% data variables.product.prodname_classroom %} 中的作业配置自动评分，则您会在整个作业仓库找到自动评分测试结果。 如果提交的所有测试都成功，您将看到绿色复选标记。 如果提交的任何测试失败，您会看到红色的 X。您可以通过单击绿色复选标记或红色 X 查看详细日志。

## 查看作业仓库的自动评分结果

{% data variables.product.prodname_classroom %} 使用 {% data variables.product.prodname_actions %} 来运行自动评分测试。 有关查看自动评分测试日志的详细信息，请参阅“[使用工作流运行日志](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。

“操作”选项卡显示测试运行的完整历史记录。

![“所有工作流”处于选中状态的“操作”选项卡](/assets/images/help/classroom/autograding-actions-tab.png)

您可以单击特定的测试运行来查看日志输出，如编译错误和测试失败。

![{% data variables.product.prodname_actions %} 中的“{% data variables.product.prodname_classroom %} 自动评分工作流”测试结果日志 ](/assets/images/help/classroom/autograding-actions-logs.png)

## 延伸阅读

- [关于状态检查](/github/collaborating-with-issues-and-pull-requests/about-status-checks)
