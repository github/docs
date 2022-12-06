---
title: '关于 {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.product_name %} 上的 {% data variables.product.prodname_projects_v1_caps %} 有助于组织工作和排列工作优先级。 可以为特定功能工作、全面的路线图甚至发布检查列表创建 {% data variables.projects.projects_v1_boards %}。 通过 {% data variables.product.prodname_projects_v1 %}，可以灵活地创建适合需求的自定义工作流。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107619'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} 包括问题、拉取请求和注释，在选择的列中分类为卡。 您可以拖放或使用键盘快捷键对列中的卡片重新排序，在不同列之间移动卡片，以及更改列的顺序。

{% data variables.projects.projects_v1_board_caps %} 卡包含问题和拉取请求的相关元数据，如标签、被分派人、状态和创建者。 {% data reusables.project-management.edit-in-project %}

可以在列中创建注释以用作任务提醒、对 {% data variables.location.product_location %} 上任何存储库中的问题和拉取请求的引用，或用于添加与 {% data variables.projects.projects_v1_board %} 相关的信息。 可以通过在注释中添加链接，为另一个 {% data variables.projects.projects_v1_board %} 创建参考卡。 如果注释不足以满足您的需求，您可以将其转换为议题。 有关将注释转换为问题的详细信息，请参阅“[向 {% data variables.product.prodname_project_v1 %} 添加注释](/articles/adding-notes-to-a-project-board)”。

项目板的类型：

- 用户拥有的 {% data variables.projects.projects_v1_board %} 可以包含任何个人存储库中的问题和拉取请求。
- 组织范围的 {% data variables.projects.projects_v1_board %} 可以包含属于组织的任何存储库中的问题和拉取请求。  {% data reusables.project-management.link-repos-to-project-board %} 有关详细信息，请参阅“[将存储库链接到 {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)”。
- **存储库 {% data variables.projects.projects_v1_board %}** 包含单一存储库中的问题和拉取请求。 它们也可包含引用其他仓库中议题和拉取请求的注释。

## 创建和查看 {% data variables.projects.projects_v1_boards %}

若要为组织创建 {% data variables.projects.projects_v1_board %}，必须是组织成员。 组织所有者或具有 {% data variables.projects.projects_v1_board %} 管理员权限的人员可以自定义对 {% data variables.projects.projects_v1_board %} 的访问权限。

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

如果组织拥有的 {% data variables.projects.projects_v1_board %} 包含你没有查看权限的存储库中的问题和拉取请求，将对该卡进行编辑。  有关详细信息，请参阅“[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)”。

活动视图显示 {% data variables.projects.projects_v1_board %} 的最近历史记录，例如某人创建的卡或在列之间移动的卡。 若要访问活动视图，请单击“菜单”并向下滚动。

若要查找 {% data variables.projects.projects_v1_board %} 上的特定卡或查看一部分卡，可以筛选 {% data variables.projects.projects_v1_board %} 卡。 有关详细信息，请参阅“[筛选 {% data variables.product.prodname_project_v1 %} 上的卡](/articles/filtering-cards-on-a-project-board)”。

为简化工作流并从 {% data variables.projects.projects_v1_board %} 移除已完成的任务，可以将卡存档。 有关详细信息，请参阅“[对 {% data variables.product.prodname_project_v1 %} 上的卡进行存档](/articles/archiving-cards-on-a-project-board)”。

如果已完成所有 {% data variables.projects.projects_v1_board %} 任务，或者无需再使用 {% data variables.projects.projects_v1_board %}，可以关闭 {% data variables.projects.projects_v1_board %}。 有关详细信息，请参阅“[关闭 {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)”。

如果希望以不同的方式跟踪工作，还可以[禁用存储库中的 {% data variables.projects.projects_v1_boards %}](/articles/disabling-project-boards-in-a-repository) 或[禁用组织中的 {% data variables.projects.projects_v1_boards %}](/articles/disabling-project-boards-in-your-organization)。

{% data reusables.project-management.project-board-import-with-api %}

## {% data variables.projects.projects_v1_boards %} 的模板

可以使用模板快速设置新的 {% data variables.projects.projects_v1_board %}。 在使用模板创建 {% data variables.projects.projects_v1_board %} 时，新板将包含列以及具有 {% data variables.product.prodname_projects_v1 %} 使用提示的卡。 您也可以选择已配置自动化的模板。

| 模板 | 说明 |
| --- | --- |
| 基本看板 | 使用 To do（待处理）、In progress（进行中）和 Done（已完成）列跟踪您的任务 |
| 自动化看板 | 卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动 | 
| 带审查的自动化看板 | 板卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动，并且包含拉取请求审查状态的附加触发条件 |
| 漏洞查验 | 通过 To do（待处理）、In progress（进行中）和 Done（已完成）列查验漏洞并排列优先级 |

有关 {% data variables.product.prodname_projects_v1 %} 自动化的详细信息，请参阅“[关于 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards)”。

![具有基本看板模板的 {% data variables.product.prodname_project_v1 %}](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## 延伸阅读

- [创建 {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)
- [编辑 {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [复制 {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- [向 {% data variables.product.prodname_project_v1 %} 添加问题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)
- [键盘快捷方式](/articles/keyboard-shortcuts/#project-boards)
