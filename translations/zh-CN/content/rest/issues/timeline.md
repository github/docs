---
title: 时间线事件
allowTitleToDifferFromFilename: true
shortTitle: 时间表
intro: 时间线事件 API 可以返回由议题和拉取请求中的时间线活动触发的不同类型的事件。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于时间线事件 API

时间线事件 API 可以返回由议题和拉取请求中的时间线活动触发的不同类型的事件。 有关可以从议题事件 API 接收的特定事件的详细信息，请参阅“[议题事件类型](/developers/webhooks-and-events/issue-event-types)”。 有关可以从议题事件 API 接收的特定事件的更多信息，请参阅“[议题事件类型](/developers/webhooks-and-events/issue-event-types)”。 更多信息请参阅“[GitHub 事件 API](/developers/webhooks-and-events/github-event-types)”。

您可以使用此 API 显示有关议题和拉取请求的信息，或确定应向谁通知议题评论。

{% data reusables.pull_requests.issues-pr-shared-api %}
