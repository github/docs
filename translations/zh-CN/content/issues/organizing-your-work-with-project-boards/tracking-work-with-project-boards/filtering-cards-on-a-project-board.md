---
title: '筛选 {% data variables.product.prodname_project_v1 %} 上的卡'
intro: '你可以筛选 {% data variables.projects.projects_v1_board %} 上的卡，以搜索特定卡或查看卡的子集。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 337c84415fefad0c542c6b46706de716e71c29b9
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882309'
---
{% data reusables.projects.project_boards_old %}

在卡上，你可以单击任意被分派人、里程碑或标签，以便按该限定符筛选 {% data variables.projects.projects_v1_board %}。 要清除搜索，您可以再次单击相同的受理人、里程碑或标签。

也可以使用每个 {% data variables.projects.projects_v1_board %} 顶部的“筛选卡”搜索栏来搜索卡。 您可以使用以下搜索限定符的任意组合来过滤卡，或者直接输入您要搜索的某些文本。

- 使用 `author:USERNAME` 按作者筛选卡片
- 使用 `assignee:USERNAME` 或 `no:assignee` 按被分派人筛选卡片
- 使用 `label:LABEL`、`label:"MULTI-WORD LABEL NAME"` 或 `no:label` 按标签筛选卡片
- 使用 `milestone:MY-MILESTONE` 按里程碑筛选
- 使用 `state:open`、`state:closed` 或 `state:merged` 按状态筛选卡片
- 使用 `review:none`、`review:required`、`review:approved` 或 `review:changes_requested` 按审查状态筛选
- 使用 `status:pending`、`status:success` 或 `status:failure` 按检查状态筛选
- 使用 `type:issue`、`type:pr` 或 `type:note` 按类型筛选卡片
- 使用 `is:open`、`is:closed` 或 `is:merged`；以及 `is:issue`、`is:pr` 或 `is:note` 按状态和类型筛选卡片
- 使用 `linked:pr` 按通过关闭引用链接到拉取请求的问题筛选卡片
- 使用 `repo:ORGANIZATION/REPOSITORY` 在组织范围内的 {% data variables.projects.projects_v1_board %} 中按存储库筛选卡

1. 导航到包含希望筛选的卡的 {% data variables.projects.projects_v1_board %}。
2. 在项目卡列上方，单击“Filter cards（过滤卡）”搜索栏并键入搜索查询以过滤卡。
![筛选卡片搜索栏](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

提示：可以通过拖放筛选后的卡片或使用键盘快捷键在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [将问题和拉取请求添加到 {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [将备注添加到 {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)
