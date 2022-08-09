---
title: 'Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.'
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
---

{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- 从侧栏的 **Triage（分类）**部分拖动卡片。
- 在卡片中输入议题或拉取请求 URL。
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

每个项目列中最多可以输入 2,500 张卡片。 如果一列已经达到最大卡片数，则无法将卡片移入该列。

![通过鼠标可将议题卡从分类侧栏移至项目板列](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. 更多信息请参阅“[添加注释到项目板](/articles/adding-notes-to-a-project-board)”。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. 您可以删除这些限定符以搜索所有组织仓库。 更多信息请参阅“[链接仓库到项目板](/articles/linking-a-repository-to-a-project-board)”。

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
2. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-label="The plus icon" %} **Add cards**. ![添加卡按钮](/assets/images/help/projects/add-cards-button.png)
3. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers. 有关您可以使用的搜索限定符的更多信息，请参阅“[搜索议题](/articles/searching-issues)”。 ![搜索议题和拉取请求](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **提示：**
    - 您也可以通过在卡中输入 URL 来添加议题或拉取请求。
    - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. 更多信息请参阅“[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”。

  {% endtip %}
4. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. 也可以使用键盘快捷键移动卡片。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **提示：**可以通过拖放或键盘快捷键对卡片重新排序以及在列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. 在议题或拉取请求右侧单击 **Projects（项目）{% octicon "gear" aria-label="The Gear icon" %}**。 ![侧栏中的项目板按钮](/assets/images/help/projects/sidebar-project.png)
2. Click the **Recent**, **Repository**,**User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to. ![最近、仓库和组织选项卡](/assets/images/help/projects/sidebar-project-tabs.png)
3. 在 **Filter projects（过滤项目）**字段中输入项目的名称。 ![项目板搜索框](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request. ![选择的项目板](/assets/images/help/projects/sidebar-select-project.png)
5. 单击 {% octicon "triangle-down" aria-label="The down triangle icon" %}，然后单击您希望议题或拉取请求所在的列。 The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select. ![将卡移至列菜单](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 延伸阅读

- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
