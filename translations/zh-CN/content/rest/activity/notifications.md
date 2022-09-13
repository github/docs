---
title: 通知
intro: '使用通知 API 可以管理 {% data variables.product.product_name %} 通知。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2d68f2b563578608ab66eafbb055edbe5d88d172
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064272'
---
## 关于通知 API

使用通知 API 可以管理 {% data variables.product.product_name %} 通知。 有关通知的详细信息，请参阅“[关于通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。

所有通知 API 调用都需要 `notifications` 或 `repo` API 作用域。  这将赋予对某些议题和提交内容的只读权限。 你仍需要 `repo` 作用域才能从相应的端点访问议题和提交。

通知以“帖子”的形式返回。  帖子包含当前对议题、拉取请求或提交的讨论信息。

通知针对使用 `Last-Modified` 标头的轮询进行了优化。  如果没有新的通知，你将看到 `304 Not Modified` 响应，你的当前速率限制不受影响。  还有一个 `X-Poll-Interval` 标头，用于指定允许你轮询的间隔时间（以秒为单位）。  在服务器负载较高时，该时间可能会增加。  请遵循标头指示。

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### 关于通知原因

从通知 API 检索响应时，每个有效负载都有一个名为 `reason` 的键。 这些键对应于触发通知的事件。

以下是接收通知的可能 `reason`：

原因名称 | 说明
------------|------------
`assign` | 您被分配到议题。
`author` | 您创建了帖子。
`comment` | 您评论了帖子。
`ci_activity` | 当 {% data variables.product.prodname_actions %} 工作流程运行被请求或完成时。
`invitation` | 您接受了参与仓库的邀请。
`manual` | 您订阅了帖子（通过议题或拉取请求）
`mention` | 你在内容中被特别 **@mentioned** 。
`review_requested` | 您或您所属的团队被请求审查拉取请求。{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} 在你的存储库中发现了[安全漏洞](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)。{% endif %}
`state_change` | 您更改了帖子主题（例如关闭议题或合并拉取请求）。
`subscribed` | 您在关注仓库。
`team_mention` | 您所属的团队被提及。

请注意，`reason` 根据每个帖子而修改，如果在以后的通知中，`reason` 不同，其值可能会变更。

例如，如果你是某个议题的作者，则有关该议题的后续通知中，其 `reason` 值为 `author`。 如果后来你在这个议题上被 **@mentioned** ，则你此后收到的通知中，其 `reason` 值为 `mention`。 无论你此后是否被再次提及，`reason` 值将保持 `mention` 不变。
