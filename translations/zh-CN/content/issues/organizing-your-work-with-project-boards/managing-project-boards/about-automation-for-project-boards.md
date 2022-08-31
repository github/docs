---
title: 'About automation for {% data variables.product.prodname_projects_v1 %}'
intro: 'You can configure automatic workflows to keep the status of {% data variables.projects.projects_v1_board %} cards in sync with the associated issues and pull requests.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  For more information, see "[{% data variables.product.prodname_projects_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for {% data variables.projects.projects_v1_board %} columns. This eliminates some of the manual tasks in managing a {% data variables.projects.projects_v1_board %}. For example, you can configure a "To do" column, where any new issues or pull requests you add to a {% data variables.projects.projects_v1_board %} are automatically moved to the configured column. For more information, see "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} automation can also help teams develop a shared understanding of a {% data variables.projects.projects_v1_board %}'s purpose and the team's development process by creating a standard workflow for certain actions.

{% data reusables.project-management.resync-automation %}

## 自动化选项

| 列预设 | 配置选项                      |
| --- | ------------------------- |
| 待处理 | <ul><li>将所有新增的议题移到此处</li><li>将所有新增的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li></ul> |
| 进行中 | <ul><li>将所有新打开的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li><li>将所有符合基本分支需要的最低评论数量的拉取请求移到此处</li><li>将所有不再符合基本分支需要的最低评论数量的拉取请求移到此处</li></ul> |
| 已完成 | <ul><li>将所有关闭的议题移到此处</li><li>将所有合并的拉取请求移到此处</li><li>将所有已关闭、已取消合并的拉取请求移到此处</li></ul> |

## 项目进度跟踪

You can track the progress on your {% data variables.projects.projects_v1_board %}. "To do"（待处理）、"In progress"（进行中）或 "Done"（完成）列中的卡计入总体项目进度。 {% data reusables.project-management.project-progress-locations %}

For more information, see "[Tracking progress on your {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)."

## 延伸阅读
- "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copying a {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
