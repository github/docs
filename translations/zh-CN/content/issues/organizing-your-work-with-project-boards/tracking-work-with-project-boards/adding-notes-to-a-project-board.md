---
title: '向 {% data variables.product.prodname_project_v1 %} 添加注释'
intro: '可向 {% data variables.projects.projects_v1_board %} 添加注释以用作任务提醒，或用于添加与 {% data variables.projects.projects_v1_board %} 相关的信息。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 46068bb6de081043b05c78e731a09e7dbaa47c78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422746'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**提示：**
- 您可以使用 Markdown 语法格式化注释。 例如，可以使用标题、链接、任务列表或表情符号。 有关详细信息，请参阅“[基本编写和格式设置语法](/articles/basic-writing-and-formatting-syntax)”。
- 可以通过拖放或键盘快捷键对注释重新排序以及在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- {% data variables.projects.projects_v1_board %} 必须至少有一列，然后才可添加注释。 有关详细信息，请参阅“[创建项目板](/articles/creating-a-project-board)”。

{% endtip %}

在注释中添加问题、拉取请求或其他 {% data variables.projects.projects_v1_board %} 的 URL 时，你将在文本下方的摘要卡中看到预览。

![显示议题和另一个项目板预览的项目板卡](/assets/images/help/projects/note-with-summary-card.png)

## 向 {% data variables.projects.projects_v1_board %} 添加注释

1. 导航到要向其添加注释的 {% data variables.projects.projects_v1_board %}。
2. 在要添加注释的列中，单击 {% octicon "plus" aria-label="The plus icon" %}。
![列标题中的加号图标](/assets/images/help/projects/add-note-button.png)
3. 键入注释，然后单击“添加”。
![用于键入注释的字段和添加卡按钮](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **提示：** 可以在注释中输入问题或拉取请求在卡中的 URL 以引用它们。

  {% endtip %}

## 将注释转换为议题

如果您创建了注释但发现它不足以表达您的需求，可以将其转换为议题。

在将注释转换为议题时，会使用注释中的内容自动创建议题。 注释的第一行将成为议题的标题，其他内容将添加到议题说明中。

{% tip %}

**提示：** 可以添加注释正文的内容，以 @mention 某人、链接到其他问题或拉取请求，以及添加表情符号。 这些 {% data variables.product.prodname_dotcom %} Flavored Markdown 功能在 {% data variables.projects.projects_v1_board %} 注释中不受支持，但在注释转换为问题之后，它们会正确显示。 有关使用这些功能的详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/articles/about-writing-and-formatting-on-github)”。

{% endtip %}

1. 导航到您要转换为议题的注释。
{% data reusables.project-management.project-note-more-options %}
3. 单击“转换为问题”。
  ![转换为问题按钮](/assets/images/help/projects/convert-to-issue.png)
4. 如果卡在组织范围 {% data variables.projects.projects_v1_board %} 上，请从下拉菜单中选择要添加问题到其中的存储库。
  ![列出可在其中创建问题的存储库的下拉菜单](/assets/images/help/projects/convert-note-choose-repository.png)
5. 可以选择编辑预填的议题标题，并输入议题正文。
  ![问题标题和正文字段](/assets/images/help/projects/convert-note-issue-title-body.png)
6. 单击“转换为问题”。
7. 该注释会自动转换为议题。 在 {% data variables.projects.projects_v1_board %} 中，新问题卡与之前的注释位于同一位置。

## 编辑和删除注释

1. 导航到您要编辑或删除的注释。
{% data reusables.project-management.project-note-more-options %}
3. 若要编辑注释的内容，请单击“编辑注释”。
  ![编辑注释按钮](/assets/images/help/projects/edit-note.png)
4. 若要删除注释的内容，请单击“删除注释”。
  ![删除注释按钮](/assets/images/help/projects/delete-note.png)

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [创建 {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)
- [编辑 {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)
- [向 {% data variables.product.prodname_project_v1 %} 添加问题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board)
