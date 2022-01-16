---
title: 管理项目的最佳实践（测试版）
intro: '学习在 {% data variables.product.company_short %} 中管理项目的技巧。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
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

自动化任务可以减少您在繁琐工作上花费的时间，将更多的时间用于项目本身。 需要手动操作的越少，项目就越有可能保持最新状态。 {% data variables.product.prodname_actions %} 和 GraphQL API 使您能够实现例行项目管理任务自动化。 例如，要跟踪等待审查的拉取请求，您可以创建一个工作流程，将拉取请求添加到项目并将状态设置为“需要审核”；当拉取请求标记为“准备审核”时，可以自动触发此过程。

- 有关示例工作流程，请参阅“[自动化项目](/issues/trying-out-the-new-projects-experience/automating-projects)”。
- 有关 API 的更多信息，请参阅“[使用 API 管理项目](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)”。
- 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅[“{% data variables.product.prodname_actions %}](/actions)”。
