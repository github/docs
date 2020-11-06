---
title: 关于通知
intro: '通知提供有关您在 {% data variables.product.product_name %} 上已订阅活动的更新。 您可以使用通知收件箱来自定义、分类和管理更新。'
redirect_from:
  - /articles/notifications/
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

### 通知和订阅

您可以选择通过订阅接收有关 {% data variables.product.product_name %} 上特定活动的持续更新。 通知是您收到的已订阅特定活动的更新。

#### 订阅选项

您可以选择订阅关于以下内容的通知：
- 关于特定议题、拉取请求或 Gist 的对话。
- 仓库或团队讨论中的所有活动。
- CI 活动，例如仓库中使用 {% data variables.product.prodname_actions %} 设置的工作流程的状态。
- 仓库中的发行版。

您也可以选择自动关注所有您有推送访问权限的仓库，但复刻除外。 您可以通过单击 **Watch（关注）**来手动关注您有权访问的任何其他仓库。

如果您的某项对话不再感兴趣，您可以取消订阅、取消关注或自定义以后接收的通知类型。 例如，如果不想再接收特定仓库的通知，您可以单击 **Unsubscribe（取消订阅）**。 更多信息请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

#### 默认订阅

一般来说，默认在以下情况下自动订阅对话：
- 在通知设置中未禁用自动关注您加入的仓库或团队。 此设置在默认情况下会启用。
- 被分配了议题或拉取请求。
- 打开了拉取请求、议题或创建了团队讨论帖子。
- 在帖子中发表了评论。
- 通过单击 **Watch（关注）**或 **Subscribe（订阅）**手动订阅了帖子。
- 您的用户名被 @提及
- 更改了帖子的状态，例如通过关闭议题或合并拉取请求。
- 您所属的团队被 @提及。

默认情况下，还会自动关注您创建的以及您的用户帐户所拥有的所有仓库。

要取消订阅自动订阅的对话，您可以更改通知设置，或者直接取消订阅或取消关注 {% data variables.product.product_name %} 上的活动。 更多信息请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

### 自定义通知和订阅

You can choose to view your notifications through the notifications inbox at [https://github.com/notifications](https://github.com/notifications){% if currentVersion == "free-pro-team@latest" %} and in the {% data variables.product.prodname_mobile %} app{% endif %}, through your email, or some combination of these options.

要自定义您希望接收的更新类型以及将这些更新发送至何处，请配置通知设置。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”。

要保持订阅的可管理性，请审查您的订阅和关注的仓库，并根据需要取消订阅。 更多信息请参阅“[在 GitHub 上管理活动订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

要自定义如何接收特定拉取请求或议题的更新，可以在议题或拉取请求中配置首选项。 更多信息请参阅“[对单个通知进行分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”。

{% if currentVersion == "free-pro-team@latest" %}
You can enable push notifications in the
{% data variables.product.prodname_mobile %} app. 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)”。
{% endif %}

### 接收通知的原因

您的收件箱配置了默认过滤器，它们代表人们需要跟进通知的最常见原因。 有关收件箱过滤器的更多信息，请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)”。

收件箱以标签形式显示您接收通知的 `reasons`。

![收件箱中的原因标签](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

您可以按订阅通知的原因过滤收件箱。 例如，要仅查看有人请求您审查的拉取请求，您可以使用 `review-requested` 查询过滤器。

![通过查看请求的原因过滤通知](/assets/images/help/notifications-v2/review-requested-reason.png)

如果您已将通知配置为通过电子邮件发送，但认为您收到了不属于自己的通知，请考虑使用显示预期收件人的电子邮件标头排除故障。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”。

### 从收件箱分类通知

为了有效地管理通知，您可以使用以下选项对收件箱进行分类：
- 使用 **Done（已完成）**从收件箱删除通知。 您可以通过单击边栏中的 **Done（已完成）**或使用查询 `is:done` 来集中查看所有 **Done（已完成）**通知。
- 将通知标记为已读或未读。
- **Save（保存）**通知以供以后查看。 **Saved（已保存）**通知会标记在您的收件箱中。 您可以通过单击 **Saved（已保存）**或使用查询 `is:saved` 在边栏中集中查看所有 **Saved（已保存）**通知。
- 自动取消订阅此通知和此对话的未来更新。 取消订阅还会从收件箱中删除通知。 如果您取消订阅了对话，但有人在此对话中提及您的用户名或您所在的团队（您正在为其接收更新），则您将再次开始接收此对话的通知。

您还可以从收件箱中一次分类多个通知。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”。

### 自定义通知收件箱

To focus on a group of notifications in your inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} or {% data variables.product.prodname_mobile %}{% endif %}, you can create custom filters. 例如，您可以为您参与的开源项目创建自定义过滤器，只查看您被提及的仓库的通知。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。 有关如何自定义分类工作流程的更多示例，请参阅“[自定义对通知分类的工作流程](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)”。

### 通知保留策略

未标记为 **Saved（已保存）**的通知将保留 5 个月。 标记为 **Saved（已保存）**的通知将无限期保留。 如果已保存通知超过 5 个月后，您取消保存它，则该通知将在一天之内从收件箱中消失。

### 反馈和支持

如果您对通知有反馈或功能请求，请使用[通知反馈表](https://support.github.com/contact/feedback?contact%5Bcategory%5D=notifications&contact%5Bsubject%5D=Product+feedback)。
