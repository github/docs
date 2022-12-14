---
title: 关于通知
intro: '通知提供有关你在 {% data variables.product.product_location %} 上已订阅活动的更新。 可以使用通知收件箱来自定义、分类和管理更新。'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432022'
---
## 通知和订阅

可选择通过订阅接收有关 {% data variables.product.product_location %} 上的特定活动的持续更新。 通知是您收到的已订阅特定活动的更新。

### 订阅选项

您可以选择订阅关于以下内容的通知：
- 关于特定议题、拉取请求或 Gist 的对话。
- 仓库或团队讨论中的所有活动。
- CI 活动，例如仓库中使用 {% data variables.product.prodname_actions %} 设置的工作流程的状态。 
- 仓库 {% data reusables.notifications-v2.custom-notification-types %} (如果启用)。

您也可以选择自动关注所有您有推送访问权限的仓库，但复刻除外。 可单击“关注”来手动关注你有权访问的任何其他存储库。

如果您的某项对话不再感兴趣，您可以取消订阅、取消关注或自定义以后接收的通知类型。 例如，如果不想再接收特定存储库的通知，可单击“取消订阅”。 有关详细信息，请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

### 默认订阅

一般来说，默认在以下情况下自动订阅对话：
- 在通知设置中未禁用自动关注您加入的仓库或团队。 默认情况下，此设置处于启用状态。
- 被分配了议题或拉取请求。
- 打开了拉取请求、议题或创建了团队讨论帖子。
- 在帖子中发表了评论。
- 通过单击“关注”或“订阅”手动订阅了帖子 。
- 向你的用户名执行了 @mentioned。
- 更改了帖子的状态，例如通过关闭议题或合并拉取请求。
- 向你所属的团队执行了 @mentioned。

默认情况下，还会自动关注你创建的以及你的个人帐户所拥有的所有存储库。

要取消订阅自动订阅的对话，可更改通知设置，或者直接取消订阅或取消关注 {% data variables.product.product_location %} 上的活动。 有关详细信息，请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

## 自定义通知和订阅

可选择通过 [https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %} 上和 {% data variables.product.prodname_mobile %} 应用中的通知收件箱查看通知{% endif %}，或者通过电子邮件或这些选项的某种组合进行查看。

要自定义您希望接收的更新类型以及将这些更新发送至何处，请配置通知设置。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”。

要保持订阅的可管理性，请审查您的订阅和关注的仓库，并根据需要取消订阅。 有关详细信息，请参阅“[在 GitHub 上管理活动的订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

要自定义如何接收特定拉取请求或议题的更新，可以在议题或拉取请求中配置首选项。 有关详细信息，请参阅“[对单个通知进行分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”。

{% ifversion fpt or ghes or ghec %} 可在 {% data variables.product.prodname_mobile %} 应用中自定义和安排推送通知。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile)”。
{% endif %}

## 接收通知的原因

您的收件箱配置了默认过滤器，它们代表人们需要跟进通知的最常见原因。 有关收件箱筛选器的详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)”。

收件箱以标签形式显示你接收通知的 `reasons`。

![收件箱中的原因标签](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

您可以按订阅通知的原因过滤收件箱。 例如，要仅查看有人请求你审查的拉取请求，可使用 `review-requested` 查询筛选器。

![通过查看请求的原因过滤通知](/assets/images/help/notifications-v2/review-requested-reason.png)

如果您已将通知配置为通过电子邮件发送，但认为您收到了不属于自己的通知，请考虑使用显示预期收件人的电子邮件标头排除故障。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”。

## 从收件箱分类通知

为了有效地管理通知，您可以使用以下选项对收件箱进行分类：
- 从收件箱中删除带有“完成”标记的通知。 可单击边栏中的“完成”或使用 `is:done` 查询集中查看所有“已完成”的通知 。
- 将通知标记为已读或未读。
- 保存通知供以后查看。 已保存的通知会在收件箱中标记。 可在边栏中单击“已保存”或使用 `is:saved` 查询集中查看所有“已保存”的通知 。
- 自动取消订阅此通知和此对话的未来更新。 取消订阅还会从收件箱中删除通知。 如果您取消订阅了对话，但有人在此对话中提及您的用户名或您所在的团队（您正在为其接收更新），则您将再次开始接收此对话的通知。

您还可以从收件箱中一次分类多个通知。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”。

## 自定义通知收件箱

要在 {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} 或 {% data variables.product.prodname_mobile %}{% endif %} 上的收件箱中关注一组通知，可创建自定义筛选器。 例如，您可以为您参与的开源项目创建自定义过滤器，只查看您被提及的仓库的通知。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。 有关如何自定义分类工作流的更多示例，请参阅“[自定义对通知进行分类的工作流](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)”。

## 通知保留策略

未标记为“已保存”的通知将保留 5 个月。 标记为“已保存”的通知将无限期保留。 如果已保存通知超过 5 个月后，您取消保存它，则该通知将在一天之内从收件箱中消失。

## 反馈和支持

如果你有针对通知的反馈或功能请求，请使用 [{% data variables.product.prodname_github_community %} 讨论](https://github.com/orgs/community/discussions/categories/general)。
