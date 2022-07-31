---
title: 'Adding notes to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add notes to a {% data variables.projects.projects_v1_board %} to serve as task reminders or to add information related to the {% data variables.projects.projects_v1_board %}.'
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
---

{% data reusables.projects.project_boards_old %}

{% tip %}

**提示：**
- 您可以使用 Markdown 语法格式化注释。 例如，可以使用标题、链接、任务列表或表情符号。 更多信息请参阅“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)”。
- 可以通过拖放或键盘快捷键对注释重新排序以及在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Your {% data variables.projects.projects_v1_board %} must have at least one column before you can add notes. 更多信息请参阅“[创建项目板](/articles/creating-a-project-board)”。

{% endtip %}

When you add a URL for an issue, pull request, or another {% data variables.projects.projects_v1_board %} to a note, you'll see a preview in a summary card below your text.

![显示议题和另一个项目板预览的项目板卡](/assets/images/help/projects/note-with-summary-card.png)

## Adding notes to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add notes.
2. 在要添加注释的列中，单击 {% octicon "plus" aria-label="The plus icon" %}。 ![列标题中的加号](/assets/images/help/projects/add-note-button.png)
3. 输入您的注释，然后单击 **Add（添加）**。 ![用于输入注释的字段和添加卡按钮](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **提示：**您可以在注释中输入议题或拉取请求在卡中的 URL 以引用它们。

  {% endtip %}

## 将注释转换为议题

如果您创建了注释但发现它不足以表达您的需求，可以将其转换为议题。

在将注释转换为议题时，会使用注释中的内容自动创建议题。 注释的第一行将成为议题的标题，其他内容将添加到议题说明中。

{% tip %}

**提示：**您可以添加注释正文的内容以 @提及某人、链接到其他议题或拉取请求，以及添加表情符号。 These {% data variables.product.prodname_dotcom %} Flavored Markdown features aren't supported within {% data variables.projects.projects_v1_board %} notes, but once your note is converted to an issue, they'll appear correctly. 有关使用这些功能的更多信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/articles/about-writing-and-formatting-on-github)”。

{% endtip %}

1. 导航到您要转换为议题的注释。
{% data reusables.project-management.project-note-more-options %}
3. 单击 **Convert to issue（转换为议题）**。 ![转换为议题按钮](/assets/images/help/projects/convert-to-issue.png)
4. If the card is on an organization-wide {% data variables.projects.projects_v1_board %}, in the drop-down menu, choose the repository you want to add the issue to. ![列出可在其中创建议题的仓库的下拉菜单](/assets/images/help/projects/convert-note-choose-repository.png)
5. 可以选择编辑预填的议题标题，并输入议题正文。 ![议题标题和正文字段](/assets/images/help/projects/convert-note-issue-title-body.png)
6. 单击 **Convert to issue（转换为议题）**。
7. 该注释会自动转换为议题。 In the {% data variables.projects.projects_v1_board %}, the new issue card will be in the same location as the previous note.

## 编辑和删除注释

1. 导航到您要编辑或删除的注释。
{% data reusables.project-management.project-note-more-options %}
3. 要编辑注释的内容，请单击 **Edit note（编辑注释）**。 ![编辑注释按钮](/assets/images/help/projects/edit-note.png)
4. 要删除注释的内容，请单击 **Delete note（删除注释）**。 ![删除注释按钮](/assets/images/help/projects/delete-note.png)

## 延伸阅读

- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[创建 {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
