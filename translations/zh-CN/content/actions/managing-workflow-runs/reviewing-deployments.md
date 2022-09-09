---
title: 审查部署
intro: 您可以批准或拒绝等待审查的作业。
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147718099'
---
## 关于工作流程中所需的审查

引用配置了所需审查者的环境的作业将等待审批后再开始。 当作业正在等待批准时，其状态为“等待”。 如果作业在 30 天内未获得批准，工作流程运行将自动取消。

有关环境和所需的审批的详细信息，请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。 有关如何使用 REST API 查看部署的信息，请参阅“[工作流运行](/rest/reference/actions#workflow-runs)”。

## 批准或拒绝作业

1. 导航到需要审核的工作流程运行。 有关导航到工作流运行的详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
2. 单击“审查部署”"。 
   ![审查部署](/assets/images/actions-review-deployments.png)
3. 选择要审批或拒绝的作业环境。 （可选）留下评论。
   ![批准部署](/assets/images/actions-approve-deployments.png)
4. 批准或拒绝：
   - 要批准作业，请单击“批准并部署”。 一旦作业获得批准（并且任何其他环境保护规则已通过），作业将继续。 此时，作业可以访问存储在环境中的任何机密。
   - 要拒绝作业，请单击“拒绝”。 如果作业被拒绝，工作流程将失败。
