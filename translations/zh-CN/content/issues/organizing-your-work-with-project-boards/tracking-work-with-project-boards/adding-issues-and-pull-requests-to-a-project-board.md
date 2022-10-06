---
title: '向 {% data variables.product.prodname_project_v1 %} 添加问题和拉取请求'
intro: '可通过卡的形式将问题和拉取请求添加到 {% data variables.projects.projects_v1_board %}，并分类到各列中。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 36897518283fa085c37363157fb44cbd8e1a75c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422770'
---
{% data reusables.projects.project_boards_old %}

可通过以下方式将问题或拉取请求卡添加到 {% data variables.projects.projects_v1_board %}：
- 从边栏中的“会审”部分拖动卡。
- 在卡片中输入议题或拉取请求 URL。
- 在 {% data variables.projects.projects_v1_board %} 搜索边栏中搜索问题或拉取请求。

每个项目列中最多可以输入 2,500 张卡片。 如果一列已经达到最大卡片数，则无法将卡片移入该列。

![通过鼠标可将议题卡从分类侧栏移至项目板列](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

注意：还可向项目板添加注释以用作任务提醒以及对 {% data variables.product.product_name %} 上任何存储库中的问题和拉取请求的引用，或者用于添加与 {% data variables.projects.projects_v1_board %} 相关的信息。 有关详细信息，请参阅“[向项目板添加备注](/articles/adding-notes-to-a-project-board)”。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} 在搜索要添加到 {% data variables.projects.projects_v1_board %} 的问题和拉取请求时，搜索会自动将范围限于你链接的存储库。 您可以删除这些限定符以搜索所有组织仓库。 有关详细信息，请参阅“[将存储库链接到项目板](/articles/linking-a-repository-to-a-project-board)”。

## 向 {% data variables.projects.projects_v1_board %} 添加问题和拉取请求

1. 导航到要在其中添加问题和拉取请求的 {% data variables.projects.projects_v1_board %}。
2. 在 {% data variables.projects.projects_v1_board %} 中，单击 {% octicon "plus" aria-label="The plus icon" %}“添加卡”。
![“添加卡”按钮](/assets/images/help/projects/add-cards-button.png)
3. 使用搜索限定符搜索要添加到 {% data variables.projects.projects_v1_board %} 的问题和拉取请求。 有关可以使用的搜索限定符的详细信息，请参阅“[搜索问题](/articles/searching-issues)”。
  ![搜索问题和拉取请求](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **提示：**
    - 您也可以通过在卡中输入 URL 来添加议题或拉取请求。
    - 如果你在使用特定功能，可以将标签贴到该功能的每个相关问题或拉取请求，然后通过搜索标签名称轻松地将卡添加到 {% data variables.projects.projects_v1_board %}。 有关详细信息，请参阅“[将标签应用于问题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”。

  {% endtip %}
4. 从筛选的问题和拉取请求列表中，将要添加到 {% data variables.projects.projects_v1_board %} 的卡拖放到正确的列中。 也可以使用键盘快捷键移动卡片。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **提示：** 可以通过拖放或使用键盘快捷方式对卡重新排序以及在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## 从边栏向 {% data variables.projects.projects_v1_board %} 添加问题和拉取请求

1. 在问题或拉取请求右侧，单击“项目 {% octicon "gear" aria-label="The Gear icon" %}”。
  ![边栏中的“项目”板按钮](/assets/images/help/projects/sidebar-project.png)
2. 单击要向其中进行添加的 {% data variables.projects.projects_v1_board %} 的“最近”、“存储库”、“用户”或“组织”选项卡   。
  ![“最近”、“存储库”和“组织”选项卡](/assets/images/help/projects/sidebar-project-tabs.png)
3. 在“筛选项目”字段中键入项目名称。
  ![项目板搜索框](/assets/images/help/projects/sidebar-search-project.png)
4. 选择要在其中添加问题或拉取请求的一个或多个 {% data variables.projects.projects_v1_boards %}。
  ![所选的项目板](/assets/images/help/projects/sidebar-select-project.png)
5. 单击“{% octicon "triangle-down" aria-label="The down triangle icon" %}”，然后单击你希望问题或拉取请求所在的列。 卡片将移动到你所选的 {% data variables.projects.projects_v1_board %} 列的底部。
  ![将卡移至列菜单](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [编辑 {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)
- [筛选 {% data variables.product.prodname_project_v1 %} 上的卡](/articles/filtering-cards-on-a-project-board)
