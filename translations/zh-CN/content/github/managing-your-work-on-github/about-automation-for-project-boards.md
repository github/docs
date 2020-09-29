---
title: 关于项目板的自动化
intro: 您可以配置自动工作流程来保持项目板卡状态与相关的议题及拉取请求同步。
redirect_from:
  - /articles/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.project-management.automate-project-board-permissions %}  更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

您可以根据项目板列的触发事件自动执行操作。 这可以节省项目板管理过程中的一些手动任务。 例如，您可以配置 "To do"（待处理）列，其中您添加到项目板的任何新议题或拉取请求都会自动移至配置的列。 更多信息请参阅“[配置项目板的自动化](/articles/configuring-automation-for-project-boards)”。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

项目板自动化通过为某些操作创建标准工作流程，也可帮助团队对项目板的目的和团队开发流程达成一致的理解。

{% data reusables.project-management.resync-automation %}

### 自动化选项

| 列预设 | 配置选项                      |
| --- | ------------------------- |
| 待处理 | <ul><li>将所有新增的议题移到此处</li><li>将所有新增的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li></ul> |
| 进行中 | <ul><li>将所有新打开的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li><li>将所有符合基本分支需要的最低评论数量的拉取请求移到此处</li><li>将所有不再符合基本分支需要的最低评论数量的拉取请求移到此处</li></ul> |
| 已完成 | <ul><li>将所有关闭的议题移到此处</li><li>将所有合并的拉取请求移到此处</li><li>将所有已关闭、已取消合并的拉取请求移到此处</li></ul> |

### 项目进度跟踪
项目板自动化默认启用进度跟踪。 "To do"（待处理）、"In progress"（进行中）或 "Done"（完成）列中的卡会预置总体目标进度值。 {% data reusables.project-management.project-progress-locations %}

### 延伸阅读
- "[配置项目板的自动化](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- "[复制项目板](/articles/copying-a-project-board)"{% endif %}
