---
title: GitHub Issues 快速入门
intro: '按照这个简短的互动指南了解 {% data variables.product.prodname_github_issues %}。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## 简介

本指南说明如何使用 {% data variables.product.prodname_github_issues %} 来规划和跟踪一项工作。 在此指南中，您将创建新议题并添加任务列表以跟踪子任务。 您还将学习如何添加标签、里程碑、受理人和项目来传达有关您的议题的元数据。

## 基本要求

要创建议题，您需要一个仓库。 您可以使用您有写入权限的现有仓库，或者创建一个新的仓库。 {% data reusables.enterprise-accounts.emu-permission-repo %} 存储库必须启用议题。 关于创建仓库的更多信息，请参阅“[创建新仓库](/articles/creating-a-new-repository)”。 关于启用议题（如果它们在您的仓库中被禁用）的更多信息，请参阅“[禁用议题](/github/administering-a-repository/managing-repository-settings/disabling-issues)“。

## 打开空白议题

首先，创建议题。 创建议题的方法有很多种：您可以为工作流程选择最方便的方法。 此示例将使用 {% data variables.product.prodname_dotcom %} UI。 有关创建议题的其他方法的更多信息，请参阅“[创建议题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. 在此示例中，我们将从空白议题开始。 您的仓库可能使用议题模板{% ifversion fpt or ghec %} 和议题表单{% endif %} 来鼓励贡献者提供具体信息。 如果您的仓库使用议题模板，请 {% ifversion fpt or ghes or ghec %}单击**打开空白议题**{% else %}单击**打开常规议题**{% endif %}。

![空白议题](/assets/images/help/issues/blank-issue.png)

## 填写信息

为议题提供一个描述性标题。 标题应一目了然地传达议题的内容。

添加解释问题目的之说明，包括任何可能有助于解决问题的详细信息。 例如，如果这是漏洞报告，请描述重现漏洞的步骤、预期结果和实际结果。

您可以使用 Markdown 添加格式、链接、表情等内容。 更多信息请参阅“[在 GitHub 上编写](/github/writing-on-github)”。

![议题标题和正文](/assets/images/help/issues/issue-title-body.png)

## 添加任务列表

将大问题分解为较小的任务，或在单个较大的问题中跟踪多个相关问题，可能会有所帮助。 使用 `[ ]` 预置列表项，将任务列表项添加到议题。 按议题编号或 URL 引用现有议题。 您可以使用纯文本来跟踪没有相应议题的任务，并在以后将其转换为议题。 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/about-task-lists)”。

![带任务列表的议题](/assets/images/help/issues/issue-task-list-raw.png)

## 添加标签

添加标签对议题分类。 例如， 您可以使用 `bug` 标签和 `good first issue` 标签来指示问题是首次贡献者可能发现的漏洞。 用户可以通过标签过滤议题，以查找所有具有特定标签的议题。

您可以使用默认标签，也可以创建新标签。 更多信息请参阅“[管理标签](/issues/using-labels-and-milestones-to-track-work/managing-labels)”。

![带标签的议题](/assets/images/help/issues/issue-with-label.png)

## 添加里程碑

您可以添加里程碑来跟踪议题，作为基于日期的目标的一部分。 随着目标日期的临近，里程碑将显示议题的进展。 更多信息请参阅“[关于里程碑](/issues/using-labels-and-milestones-to-track-work/about-milestones)”。

![有里程碑的议题](/assets/images/help/issues/issue-milestone.png)

## 分配议题

要传达责任，您可以将议题分配给您的组织成员。 更多信息请参阅“[分配议题和拉取请求到其他 GitHub 用户](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)”。

![有受理人的议题](/assets/images/help/issues/issue-assignees.png)

## 添加议题到项目

您可以将议题添加到现有项目。 {% ifversion fpt or ghec %}如果您使用的是项目（测试版），也可以填充项目的元数据。 {% endif %} 有关项目的更多信息，请参阅 {% ifversion fpt or ghec %}“[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)”和{% endif %}“[组织对项目板的使用](/issues/organizing-your-work-with-project-boards)”。

![有项目的议题](/assets/images/help/issues/issue-project.png)

## 提交议题

单击 **Submit new issue（提交新议题）**以创建议题。 您可以在创建议题后编辑任何上述字段。 您的议题具有独特的 URL，可以与团队成员共享，或在其他议题或拉取请求中引用。

## 通信

创建议题后，通过向议题添加评论来继续对话。 您可以@提及协作者或团队以提请他们注意评论。 要将相关议题链接到同一仓库，您可以键入 `#`，后接议题标题的一部分，然后点击要链接的议题。 更多信息请参阅“[在 GitHub 上编写](/github/writing-on-github)”。

![议题评论](/assets/images/help/issues/issue-comment.png)

## 后续步骤

您可以将议题用于广泛的用途。 例如：

- 跟踪想法
- 收集反馈
- 规划任务
- 报告问题

以下是一些帮助您对 {% data variables.product.prodname_github_issues %} 执行后续操作的有用资源：

- 要了解议题的更多信息，请参阅“[关于议题](/issues/tracking-your-work-with-issues/about-issues)”。
- 要详细了解项目如何帮助您规划和跟踪，请参阅{% ifversion fpt or ghec %}“[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)”或{% endif %}“[使用项目板组织工作](/issues/organizing-your-work-with-project-boards)”。
- 要详细了解使用议题模板{% ifversion fpt or ghec %} 和议题表单{% endif %} 鼓励贡献者提供具体信息，请参阅“[使用模板鼓励有用的议题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。
