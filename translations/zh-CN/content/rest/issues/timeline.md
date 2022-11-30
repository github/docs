---
title: 时间线事件
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: 时间线事件 API 可以返回问题和拉取请求中的时间线活动所触发的不同类型的事件。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a9872cc5b4013a83f57c84753a19af6c9207ecde
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061872'
---
## 关于时间线事件 API

时间线事件 API 可以返回问题和拉取请求中的时间线活动所触发的不同类型的事件。 有关可从议题事件 API 接收的特定事件的详细信息，请参阅“[议题事件类型](/developers/webhooks-and-events/issue-event-types)”。 有关可以从议题事件 API 接收的特定事件的更多信息，请参阅“<a href="/developers/webhooks-and-events/issue-event-types">议题事件类型</a>”。 有关详细信息，请参阅“[GitHub 事件 API](/developers/webhooks-and-events/github-event-types)”。

您可以使用此 API 显示有关议题和拉取请求的信息，或确定应向谁通知议题评论。

{% data reusables.pull_requests.issues-pr-shared-api %}
