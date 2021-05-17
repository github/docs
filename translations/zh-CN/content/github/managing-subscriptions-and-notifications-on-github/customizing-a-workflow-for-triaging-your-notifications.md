---
title: 自定义对通知分类的工作流程
intro: 要创建对通知分类的理想工作流程，可以调整和自定义以下示例工作流程。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

### 开始收件箱分类

在开始对收件箱进行分类之前，请考虑您是希望首先查找并响应最重要的更新，还是清除收件箱中容易删除或分类的干扰更新。

您可以在不同时间根据收到的通知数量决定使用这两种方法的组合。

有关查找和响应最重要通知的工作流程示例，请参阅“[检查您的最高通知优先级](#checking-your-highest-notification-priorities)”。

有关清除易删除或易分类通知的工作流程示例，请参阅“[清除最不重要的通知](#clearing-your-least-important-notifications)”。

### 检查您的最高通知优先级

选择最迫切需要查看的通知类型，并选择最适合查看的时间。 您可能会考虑“我在阻止谁？”

例如，您可以决定在每日计划时间的早上按此顺序检查通知：
  - 已请求您审查的拉取请求。 （按 `reason:review-requested` 过滤）
  - @提及了您的用户名的事件，也称为直接提及。 （按 `reason:mention` 过滤）
  - @提及了您所在团队的事件，也称为团队提及。 （按 `reason:team-mention` 过滤）
  - 特定仓库的 CI 工作流程失败。 （按 `reason:ci-activity` 和 `repo:owner/repo-name` 过滤，并且确保您已在通知设置中启用工作流程失败的 CI 活动通知）

  {% tip %}

  **提示：**要快速查看您的最高优先级，请按其审查优先级顺序设置自定义过滤器。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)”。

  {% endtip %}

### 跟进正在进行的通知更新

To follow-up on notifications, you might consider the question "What was I blocked on that I'm no longer blocked on?" Choose your follow-up notification priorities. 选择后续通知优先级。

例如，您可以决定按照以下顺序采取后续行动：
  - 分配给您的议题和拉取请求。 立即关闭您可以关闭的任何议题或拉取请求，并添加更新。 需要时，保存通知供以后查看。
  - 查看已保存的收件箱中的通知，尤其是未读更新。 如果帖子不再相关，请取消选中 {% octicon "bookmark" aria-label="The bookmark icon" %} 以从保存的收件箱中删除通知并取消保存它。

### 管理低优先级通知

对较高优先级的通知进行分类之后，查看其余的通知，例如参与通知。 考虑以下问题：
  - 您可以取消订阅此通知吗？ 此通知是否已完成并且可以标记为**完成**？
  {% tip %}

  **提示：**取消订阅通知后，您不会收到新的更新，除非您开始参与帖子、您被@提及或您所在的团队被@提及。 将通知标记为**完成**时，该通知将从您的收件箱主视图中删除，但可通过查询 `is:read` 查看。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)”。

  {% endtip %}
  - 是否希望在此议题或拉取请求关闭或重新打开时或者拉取请求合并时接收未来的更新？ 有关这些选项的更多信息，请参阅“[对单一通知分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”。
  - 是否希望以后不再收到这样的通知？ 如果是，请考虑取消订阅。 更多信息请参阅“[在 GitHub 上管理活动订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

### 清除最不重要的通知

选择收件箱中最快和最容易分类和删除的通知类型，最好是一次对多个通知进行分类。

例如，您可以决定按以下顺序清除通知：
  - 参与您可以取消订阅的通知。
  - 与保留或跟进无关的仓库更新。

有关同时管理收件箱中多个通知的更多信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”。

如果可能，您还可以考虑更改通知设置或取消订阅这些更新。 更多信息请参阅"[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)“[管理 GitHub 上的活动订阅](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)。”
