---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

您的项目可以跟踪草稿议题、议题和拉取请求。

{% note %}

**Note:** A project can contain a maximum of 1,200 items and 10,000 archived items.

{% endnote %}

### Adding issues and pull requests to a project

#### Pasting the URL of an issue or pull request

{% data reusables.projects.add-item-via-paste %}

#### 搜索议题或拉取请求

{% data reusables.projects.add-item-bottom-row %}
2. 输入 <kbd>#</kbd>。
3. 选择拉取请求或议题所在的仓库。 您可以输入仓库名称的一部分来缩小选项范围。 ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-repo.png)
4. 选择议题或拉取请求。 您可以键入标题的一部分以缩小选项范围。 ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Bulk adding issues and pull requests

1. In the bottom row of the project, click {% octicon "plus" aria-label="plus icon" %}. ![Screenshot showing + button at the bottom of the project](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**. ![Screenshot showing "add item from repository" menu item](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### 从存储库添加多个议题或拉取请求

1. 在 {% data variables.product.product_location %} 上，导航到包含要添加到项目中的议题或拉取请求的存储库。
{% data reusables.repositories.sidebar-issue-pr %}
1. 在每个议题标题的左侧，选择要添加到项目中的议题。 ![显示用于选择议题或拉取请求的复选框的屏幕截图](/assets/images/help/issues/select-issue-checkbox.png)
1. （可选）若要选择页面上的每个议题或拉取请求，请在议题或拉取请求列表的顶部选择全部。 ![显示用于全选的复选框的屏幕截图](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**. ![Screenshot showing projects option](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 单击要向其添加所选议题或拉取请求的项目。 ![显示用于全选的复选框的屏幕截图](/assets/images/help/projects-v2/issue-index-select-project.png)

#### 从议题或拉取请求中分配项目

1. 导航到要添加到项目的议题或拉取请求。
2. 在侧边栏中，单击 **Projects（项目）**。 ![Screenshot showing "Projects" in the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Select the project that you want to add the issue or pull request to. ![Screenshot showing selecting a project from the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Optionally, populate the custom fields. ![项目侧边栏](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Using the command palette to add an issue or pull request

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

### 创建草稿议题

草稿议题有助于快速捕获想法。 Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

草稿议题可以具有标题、文本正文、受理人以及项目中的任何自定义字段。 为了填充草稿议题的存储库、标签或里程碑，必须首先将草稿问题转换为议题。 更多信息请参阅“[将草稿议题转换为议题](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)”。

{% note %}

**注意**：用户在草稿议题中被分配或提及时不会收到通知，除非草稿议题已转换为议题。

{% endnote %}
