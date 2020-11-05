---
title: 添加议题和拉取请求到项目板
intro: 您可以通过卡片的形式将议题和拉取请求添加到项目板，并且分类到各列中。
redirect_from:
  - /articles/adding-issues-and-pull-requests-to-a-project/
  - /articles/adding-issues-and-pull-requests-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可通过以下方式将议题或拉取请求卡添加到项目板：
- 从侧栏的 **Triage（分类）**部分拖动卡片。
- 在卡片中输入议题或拉取请求 URL。
- 在项目板搜索侧栏中搜索议题或拉取请求。

每个项目列中最多可以输入 2,500 张卡片。 如果一列已经达到最大卡片数，则无法将卡片移入该列。

![通过鼠标可将议题卡从分类侧栏移至项目板列](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**注：**您可以添加注释到项目板以用作任务提醒，引用 {% data variables.product.product_name %} 上任何仓库中的议题和拉取请求，或者添加与项目板相关的信息。 更多信息请参阅“[添加注释到项目板](/articles/adding-notes-to-a-project-board)”。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} 在搜索要添加到项目板的议题和拉取请求时，搜索会自动将范围限于您链接的仓库。 您可以删除这些限定符以搜索所有组织仓库。 更多信息请参阅“[链接仓库到项目板](/articles/linking-a-repository-to-a-project-board)”。

### 添加议题和拉取请求到项目板

1. 导航到您要在其中添加议题和拉取请求的项目板。
2. 在项目板中，单击 {% octicon "plus" aria-label="The plus icon" %} **Add cards（添加卡）**。 ![添加卡按钮](/assets/images/help/projects/add-cards-button.png)
3. 使用搜索限定符搜索要添加到项目板的议题和拉取请求。 有关您可以使用的搜索限定符的更多信息，请参阅“[搜索议题](/articles/searching-issues)”。 ![搜索议题和拉取请求](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **提示：**
    - 您也可以通过在卡中输入 URL 来添加议题或拉取请求。
    - 如果您在使用特定功能，可以将标签贴到该功能的每个相关议题或拉取请求，然后通过搜索标签名称轻松地将卡片添加到项目板。 更多信息请参阅“[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”。

  {% endtip %}
4. 从过滤的议题和拉取请求列表，将要添加到项目板的卡片拖放到正确的列中。 也可以使用键盘快捷键移动卡片。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **提示：**可以通过拖放或键盘快捷键对卡片重新排序以及在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

### 从侧栏添加议题和拉取请求到项目板

1. 在议题或拉取请求右侧单击 **Projects（项目）{% octicon "gear" aria-label="The Gear icon" %}**。 ![侧栏中的项目板按钮](/assets/images/help/projects/sidebar-project.png)
2. 单击要添加到其中的项目板对应的 **Recent（最近）**、**Repository（仓库）**、**User（用户）**或 **Organization（组织）**选项卡。 ![最近、仓库和组织选项卡](/assets/images/help/projects/sidebar-project-tabs.png)
3. 在 **Filter projects（过滤项目）**字段中输入项目的名称。 ![项目板搜索框](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more project boards where you want to add the issue or pull request. ![选择的项目板](/assets/images/help/projects/sidebar-select-project.png)
5. 单击 {% octicon "triangle-down" aria-label="The down triangle icon" %}，然后单击您希望议题或拉取请求所在的列。 该卡将移到您选择的项目板列的底部。 ![将卡移至列菜单](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

### 延伸阅读

- "[关于项目板](/articles/about-project-boards)"
- "[编辑项目板](/articles/editing-a-project-board)"
- "[过滤项目板上的卡](/articles/filtering-cards-on-a-project-board)"
