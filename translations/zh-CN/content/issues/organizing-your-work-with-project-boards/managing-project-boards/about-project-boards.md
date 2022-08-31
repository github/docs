---
title: '关于 {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} on {% data variables.product.product_name %} help you organize and prioritize your work. You can create {% data variables.projects.projects_v1_boards %} for specific feature work, comprehensive roadmaps, or even release checklists. With {% data variables.product.prodname_projects_v1 %}, you have the flexibility to create customized workflows that suit your needs.'
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
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. 您可以拖放或使用键盘快捷键对列中的卡片重新排序，在不同列之间移动卡片，以及更改列的顺序。

{% data variables.projects.projects_v1_board_caps %} cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_location %}, or to add information related to the {% data variables.projects.projects_v1_board %}. You can create a reference card for another {% data variables.projects.projects_v1_board %} by adding a link to a note. 如果注释不足以满足您的需求，您可以将其转换为议题。 For more information on converting notes to issues, see "[Adding notes to a {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)."

项目板的类型：

- **User-owned {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any personal repository.
- **Organization-wide {% data variables.projects.projects_v1_board %}** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)."
- **Repository {% data variables.projects.projects_v1_board %}** are scoped to issues and pull requests within a single repository. 它们也可包含引用其他仓库中议题和拉取请求的注释。

## Creating and viewing {% data variables.projects.projects_v1_boards %}

To create a {% data variables.projects.projects_v1_board %} for your organization, you must be an organization member. Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize access to the {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

If an organization-owned {% data variables.projects.projects_v1_board %} includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

The activity view shows the {% data variables.projects.projects_v1_board %}'s recent history, such as cards someone created or moved between columns. 要访问活动视图，请单击 **Menu（菜单）**并向下滚动。

To find specific cards on a {% data variables.projects.projects_v1_board %} or view a subset of the cards, you can filter {% data variables.projects.projects_v1_board %} cards. For more information, see "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your {% data variables.projects.projects_v1_board %}, you can archive cards. For more information, see "[Archiving cards on a {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)."

If you've completed all of your {% data variables.projects.projects_v1_board %} tasks or no longer need to use your {% data variables.projects.projects_v1_board %}, you can close the {% data variables.projects.projects_v1_board %}. For more information, see "[Closing a {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)."

You can also [disable {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository) or [disable {% data variables.projects.projects_v1_boards %} in your organization](/articles/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

{% data reusables.project-management.project-board-import-with-api %}

## Templates for {% data variables.projects.projects_v1_boards %}

You can use templates to quickly set up a new {% data variables.projects.projects_v1_board %}. When you use a template to create a {% data variables.projects.projects_v1_board %}, your new board will include columns as well as cards with tips for using {% data variables.product.prodname_projects_v1 %}. 您也可以选择已配置自动化的模板。

| 模板        | 描述                                                                    |
| --------- | --------------------------------------------------------------------- |
| 基本看板      | 使用 To do（待处理）、In progress（进行中）和 Done（已完成）列跟踪您的任务                      |
| 自动化看板     | 卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动                      |
| 带审查的自动化看板 | 板卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动，并且包含拉取请求审查状态的附加触发条件 |
| 漏洞查验      | 通过 To do（待处理）、In progress（进行中）和 Done（已完成）列查验漏洞并排列优先级                  |

For more information on automation for {% data variables.product.prodname_projects_v1 %}, see "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)."

![{% data variables.product.prodname_project_v1 %} with basic kanban template](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## 延伸阅读

- "[创建 {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copying a {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[键盘快捷键](/articles/keyboard-shortcuts/#project-boards)"
