---
title: 自定义对通知分类的工作流程
intro: 要创建对通知分类的理想工作流程，可以调整和自定义以下示例工作流程。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### 开始收件箱分类

Before you start triaging your inbox, consider whether you prefer to first find and respond to the most important updates or to clear your inbox of distracting updates that are easy to remove or triage.

You may decide to use a combination of both approaches at various times depending on the volume of notifications you have.

For an example workflow of finding and responding to the most important notifications, see "[Checking your highest notification priorities](#checking-your-highest-notification-priorities)."

For an example workflow of removing notifications that are easy to remove or triage, see "[Clearing your least important notifications](#clearing-your-least-important-notifications)."

### 检查您的最高通知优先级

Choose which type of notifications are most urgent to review and pick a time to review them that's best for you. You might consider the question "Who am I blocking?"

For example, you may decide to check your notifications in this order in the morning during your daily planning time:
  - 已请求您审查的拉取请求。 （按 `reason:review-requested` 过滤）
  - @提及了您的用户名的事件，也称为直接提及。 （按 `reason:mention` 过滤）
  - @提及了您所在团队的事件，也称为团队提及。 （按 `reason:team-mention` 过滤）
  - 特定仓库的 CI 工作流程失败。 （按 `reason:ci-activity` 和 `repo:owner/repo-name` 过滤，并且确保您已在通知设置中启用工作流程失败的 CI 活动通知）

  {% tip %}

  **提示：**要快速查看您的最高优先级，请按其审查优先级顺序设置自定义过滤器。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)”。

  {% endtip %}

### 跟进正在进行的通知更新

To follow-up on notifications, you might consider the question "What was I blocked on that I'm no longer blocked on?" Choose your follow-up notification priorities. Choose your follow-up notification priorities.

For example, you may decide to follow up in this order:
  - 分配给您的议题和拉取请求。 立即关闭您可以关闭的任何议题或拉取请求，并添加更新。 需要时，保存通知供以后查看。
  - 查看已保存的收件箱中的通知，尤其是未读更新。 如果帖子不再相关，请取消选中 {% octicon "bookmark" aria-label="The bookmark icon" %} 以从保存的收件箱中删除通知并取消保存它。

### 管理低优先级通知

After triaging the higher priority notifications, review the remaining notifications, such as participating notifications. Consider these questions:
  - 您可以取消订阅此通知吗？ 此通知是否已完成并且可以标记为**完成**？
  {% tip %}

  **提示：**取消订阅通知后，您不会收到新的更新，除非您开始参与帖子、您被@提及或您所在的团队被@提及。 将通知标记为**完成**时，该通知将从您的收件箱主视图中删除，但可通过查询 `is:read` 查看。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)”。

  {% endtip %}
  - 是否希望在此议题或拉取请求关闭或重新打开时或者拉取请求合并时接收未来的更新？ 有关这些选项的更多信息，请参阅“[对单一通知分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”。
  - 是否希望以后不再收到这样的通知？ 如果是，请考虑取消订阅。 更多信息请参阅“[在 GitHub 上管理活动订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

### 清除最不重要的通知

Choose which type of notifications are quickest and easiest for you to triage and remove from your inbox, ideally triaging multiple notifications at once.

例如，您可以决定按以下顺序清除通知：
  - 参与您可以取消订阅的通知。
  - 与保留或跟进无关的仓库更新。

For more information on managing multiple notifications in your inbox at the same time, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

You may also consider changing your notification settings or unsubscribing from these updates if possible. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" or "[Managing subscriptions for activity on GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."
