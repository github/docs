---
title: 使用可视化图表
intro: 每个工作流程运行都会生成一个实时图表，说明运行进度。 您可以使用此图表来监控和调试工作流程。
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Use the visualization graph
ms.openlocfilehash: 7bd21c783afe21b10bdf64b8ccc42a84a009109a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100199'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. 图表显示每个工作流程中的作业。 作业名称左侧的图标指示作业的状态。 作业之间的线表示依赖项。
   ![工作流图表](/assets/images/help/images/workflow-graph.png)

2. 单击作业可查看作业日志。
   ![工作流图表](/assets/images/help/images/workflow-graph-job.png)
