---
title: 自定义对通知分类的工作流程
intro: 要创建对通知分类的理想工作流程，可以调整和自定义以下示例工作流程。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098874'
---
## 开始收件箱分类

在开始对收件箱进行分类之前，请考虑您是希望首先查找并响应最重要的更新，还是清除收件箱中容易删除或分类的干扰更新。

您可以在不同时间根据收到的通知数量决定使用这两种方法的组合。

有关查找和响应最重要的通知的示例工作流，请参阅“[检查最高通知优先级](#checking-your-highest-notification-priorities)”。

有关删除易于删除或分类的通知的示例工作流，请参阅“[清除最不重要的通知](#clearing-your-least-important-notifications)”。

## 检查您的最高通知优先级

选择最迫切需要查看的通知类型，并选择最适合查看的时间。 您可能会考虑“我在阻止谁？”

例如，您可以决定在每日计划时间的早上按此顺序检查通知：
  - 已请求您审查的拉取请求。 （按 `reason:review-requested` 进行筛选）
  - 向你的用户名执行了 @mentioned 的事件也称为直接提及。 （按 `reason:mention` 进行筛选）
  - 向你所属的团队执行了 @mentioned 的事件也称为团队提及。 （按 `reason:team-mention` 进行筛选）
  - 特定仓库的 CI 工作流程失败。 （按 `reason:ci-activity` 和 `repo:owner/repo-name` 进行筛选，并确保已在通知设置中启用关于工作流失败的 CI 活动通知）

  {% tip %}

  提示：要快速查看你的最高优先级，请按其查看优先级顺序设置自定义筛选器。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)”。

  {% endtip %}

## 跟进正在进行的通知更新

To follow-up on notifications, you might consider the question "What was I blocked on that I'm no longer blocked on?" Choose your follow-up notification priorities. 选择后续通知优先级。

例如，您可以决定按照以下顺序采取后续行动：
  - 分配给您的议题和拉取请求。 立即关闭您可以关闭的任何议题或拉取请求，并添加更新。 需要时，保存通知供以后查看。
  - 查看已保存的收件箱中的通知，尤其是未读更新。 如果话题不再相关，请取消选择 {% octicon "bookmark" aria-label="The bookmark icon" %} 以从保存的收件箱中删除通知并取消保存。

## 管理低优先级通知

对较高优先级的通知进行分类之后，查看其余的通知，例如参与通知。 请考虑以下问题：
  - 您可以取消订阅此通知吗？ 此通知是否已完成且可标记为“完成”？
  {% tip %}

  提示：取消订阅通知后，你不再收到新的更新，除非你开始参与会话、你是 @mentioned，或者你所属的团队是 @mentioned。 将通知标记为“完成”时，该通知会从收件箱主视图中删除，但可通过查询 `is:read` 进行查看。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)”。

  {% endtip %}
  - 是否希望在此议题或拉取请求关闭或重新打开时或者拉取请求合并时接收未来的更新？ 有关这些选项的详细信息，请参阅“[对单个通知进行分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”。
  - 是否希望以后不再收到这样的通知？ 如果是，请考虑取消订阅。 有关详细信息，请参阅“[在 GitHub 上管理活动的订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

## 清除最不重要的通知

选择收件箱中最快和最容易分类和删除的通知类型，最好是一次对多个通知进行分类。

例如，您可以决定按以下顺序清除通知：
  - 参与您可以取消订阅的通知。
  - 与保留或跟进无关的仓库更新。

若要详细了解如何同时管理收件箱中的多个通知，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”。

如果可能，您还可以考虑更改通知设置或取消订阅这些更新。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”或“[在 GitHub 上管理活动的订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。
