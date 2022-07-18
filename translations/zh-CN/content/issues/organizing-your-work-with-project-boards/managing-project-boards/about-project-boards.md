---
title: 关于项目板
intro: '{% data variables.product.product_name %} 上的项目板帮助您组织工作和排列工作的优先级。 您可以为特定功能工作、全面的路线图甚至发布检查列表创建项目板。 通过项目板可以灵活地创建适合需求的自定义工作流程。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% data reusables.projects.project_boards_old %}

项目板包括议题、拉取请求和注释，在选择的列中分类为卡片。 您可以拖放或使用键盘快捷键对列中的卡片重新排序，在不同列之间移动卡片，以及更改列的顺序。

项目板卡片包含议题和拉取请求的相关数据，如标签、受理人、状态和打开者。 {% data reusables.project-management.edit-in-project %}

您可以在列中创建注释以用作任务提醒，引用 {% data variables.product.product_location %} 上任何仓库中的议题和拉取请求，或者添加与项目板相关的信息。 您可以在注释中添加链接，创建另一个项目的参考卡。 如果注释不足以满足您的需求，您可以将其转换为议题。 有关将项目板注释转换为议题的更多信息，请参阅“[添加注释到项目板](/articles/adding-notes-to-a-project-board)”。

项目板的类型：

- **用户拥有的项目板**可以包含任何个人仓库中的议题和拉取请求。
- **组织范围的项目板**可以包含属于组织的任何仓库中的议题和拉取请求。  {% data reusables.project-management.link-repos-to-project-board %}更多信息请参阅“[将仓库链接到项目板](/articles/linking-a-repository-to-a-project-board)”。
- **仓库项目板**范围是单一仓库中的议题和拉取请求。 它们也可包含引用其他仓库中议题和拉取请求的注释。

## 创建和查看项目板

要为组织创建项目板，您必须是组织成员。 组织所有者以及具有项目板管理员权限的人员可以自定义对项目板的访问权限。

如果组织拥有的项目板包含您没有查看权限的仓库中的议题和拉取请求，该卡片将被重新指定。  更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

活动视图显示项目板的最近历史记录，例如某人创建的卡或在列之间移动的卡。 要访问活动视图，请单击 **Menu（菜单）**并向下滚动。

要查找项目板上的特定卡或查看卡的子集，可以过滤项目板卡。 更多信息请参阅“[过滤项目板卡](/articles/filtering-cards-on-a-project-board)”。

为简化工作流程并从项目板移除已完成的任务，您可以对板卡存档。 更多信息请参阅“[对项目板卡存档](/articles/archiving-cards-on-a-project-board)”。

如果您已完成所有项目板任务或不再需要使用项目板，可以关闭项目板。 更多信息请参阅“[关闭项目板](/articles/closing-a-project-board)”。

如果要以不同的方式跟踪您的工作，您也可以[在仓库中禁用项目板](/articles/disabling-project-boards-in-a-repository)或[在组织中禁用项目板](/articles/disabling-project-boards-in-your-organization)。

{% data reusables.project-management.project-board-import-with-api %}

## 项目板模板

您可以使用模板快速设置新的项目板。 在使用模板创建项目板时，新板将包含列以及具有项目板使用提示的卡。 您也可以选择已配置自动化的模板。

| 模板        | 描述                                                                    |
| --------- | --------------------------------------------------------------------- |
| 基本看板      | 使用 To do（待处理）、In progress（进行中）和 Done（已完成）列跟踪您的任务                      |
| 自动化看板     | 卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动                      |
| 带审查的自动化看板 | 板卡自动在 To do（待处理）、In progress（进行中）和 Done（已完成）列之间移动，并且包含拉取请求审查状态的附加触发条件 |
| 漏洞查验      | 通过 To do（待处理）、In progress（进行中）和 Done（已完成）列查验漏洞并排列优先级                  |

有关项目板自动化的更多信息，请参阅“[关于项目板的自动化](/articles/about-automation-for-project-boards)”。

![带看板模板的项目板](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## 延伸阅读

- "[创建项目板](/articles/creating-a-project-board)"
- "[编辑项目板](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[复制项目板](/articles/copying-a-project-board)"{% endif %}
- "[添加议题和拉取请求到项目板](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
- "[键盘快捷键](/articles/keyboard-shortcuts/#project-boards)"
