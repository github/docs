---
title: 使用 GitHub Actions 进行项目管理
intro: '您可以使用 {% data variables.product.prodname_actions %} 自动化许多项目管理任务。'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099104'
---
您可以创建工作流程以使用 {% data variables.product.prodname_actions %} 自动化项目管理任务。 每个工作流程都包含一系列任务，每当工作流程运行时都会自动执行。 例如，您可以创建一个工作流程，在每次创建议题时运行，以添加标签、 留下评论并将议题移动到项目板。

## 工作流程何时运行？

您可以配置工作流程以按计划运行或在事件发生时触发。 例如，您可以设置工作流程在有人在仓库中创建议题时运行。

许多工作流程触发器对项目管理自动化很有用。

- 议题被打开、分配或标记。
- 议题新增了评论。
- 项目卡创建或移动。
- 计划的时间。

有关可以触发工作流的事件的完整列表，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。

## 工作流程可以做什么？

工作流程可以执行许多工作，例如对问题进行评论、添加或删除标签、在项目板上移动卡片以及打开议题。

您可以通过遵循这些教程（包括可以改编以满足您需求的示例工作流程）来了解如何使用 {% data variables.product.prodname_actions %} 进行项目管理。

- “[向议题添加标签](/actions/guides/adding-labels-to-issues)”
- “[将卡片添加到项目板列时删除标签](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)”
- “[在项目板上移动分配的议题](/actions/guides/moving-assigned-issues-on-project-boards)”
- “[添加标签时评论议题](/actions/guides/commenting-on-an-issue-when-a-label-is-added)”
- “[关闭不活跃的议题](/actions/guides/closing-inactive-issues)”
- “[计划议题的创建](/actions/guides/scheduling-issue-creation)”
