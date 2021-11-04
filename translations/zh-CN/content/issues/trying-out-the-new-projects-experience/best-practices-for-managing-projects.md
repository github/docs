---
title: 管理项目的最佳实践（测试版）
intro: '学习在 {% data variables.product.company_short %} 中管理项目的技巧。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Projects
  - Issues
  - Project management
---

{% data reusables.projects.projects-beta %}

您可以使用项目来管理您在 {% data variables.product.company_short %} 上的工作，其中包括您的议题和拉取请求。 阅读提示以便高效和有效地管理您的项目。 有关项目的更多信息，请参阅“[关于项目](/issues/trying-out-the-new-projects-experience/about-projects)”。

## 将大议题分成较小的议题

将大议题分解为较小的议题，使工作更加易于管理，并使团队成员能够并行工作。 它还会导致较小的拉取请求，这些请求更容易审查。

要跟踪较小的议题如何融入更大的目标，请使用任务列表、里程碑或标签。 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”、“[关于里程碑](/issues/using-labels-and-milestones-to-track-work/about-milestones)”和“[管理标签](/issues/using-labels-and-milestones-to-track-work/managing-labels)”。

## 沟通

议题和拉取请求包括内置功能，让您轻松地与协作者沟通。 使用@提及提醒个人或整个团队注意评论。 指派议题协作者负责沟通。 链接到相关的议题或拉取请求以沟通它们是如何连接的。

## 使用视图

使用项目视图从不同角度查看您的项目。

例如：

- 按状态过滤以查看所有未启动的项
- Group by a custom priority field to monitor the volume of high priority items
- 按自定义日期字段排序，以查看具有最早目标运输日期的物品

更多信息请参阅“[自定义项目视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。

## 拥有单一真相来源

为了防止信息不同步，请保持单一真相来源。 例如，在一个位置跟踪目标运输日期，而不是分布于多个字段。 然后，如果目标运输日期发生变化，您只需要在一个位置更新日期。

{% data variables.product.company_short %} 项目自动更新 {% data variables.product.company_short %} 数据，例如受理人、里程碑和标签。 当其中一个字段在议题或拉取请求中发生变化时，更改会自动反映在您的项目中。

## 使用自动化

You can automate tasks to spend less time on busy work and more time on the project itself. 需要手动操作的越少，项目就越有可能保持最新状态。

Projects (beta) offers built-in workflows. For example, when an issue is closed, you can automatically set the status to "Done."

Additionally, {% data variables.product.prodname_actions %} and the GraphQL API enable you to automate routine project management tasks. For example, to keep track of pull requests awaiting review, you can create a workflow that adds a pull request to a project and sets the status to "needs review"; this process can be automatically triggered when a pull request is marked as "ready for review."

- 有关示例工作流程，请参阅“[自动化项目](/issues/trying-out-the-new-projects-experience/automating-projects)”。
- 有关 API 的更多信息，请参阅“[使用 API 管理项目](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)”。
- 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅[“{% data variables.product.prodname_actions %}](/actions)”。

## Use different field types

Take advantage of the various field types to meet your needs.

Use an iteration field to schedule work or create a timeline. You can group by iteration to see if items are balanced between iterations, or you can filter to focus on a single iteration. Iteration fields also let you view work that you completed in past iterations, which can help with velocity planning and reflecting on your team's accomplishments.

Use a single select field to track information about a task based on a preset list of values. For example, track priority or project phase. Since the values are selected from a preset list, you can easily group or filter to focus on items with a specific value.

For more information about the different field types, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)."
