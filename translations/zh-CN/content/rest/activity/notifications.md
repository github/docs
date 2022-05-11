---
title: 通知
intro: 'The Notifications API lets you manage {% data variables.product.product_name %} notifications.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Notifications API

The Notifications API lets you manage {% data variables.product.product_name %} notifications. For more information about notifications, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."

所有通知 API 调用都需要 `notifications` 或 `repo` API 作用域。  这将赋予对某些议题和提交内容的只读权限。 您仍需要 `repo` 作用域才能从相应的端点访问议题和提交。

通知以“帖子”的形式返回。  帖子包含当前对议题、拉取请求或提交的讨论信息。

通知通过 `Last-Modified` 标头对轮询进行了优化。  如果没有新的通知，您将看到 `304 Not Modified` 响应，您的当前速率限制不受影响。  有一个 `X-Poll-Interval` 标头用于指定允许您轮询的间隔时间（以秒为单位）。  在服务器负载较高时，该时间可能会增加。  请遵循标头指示。

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

### About notification reasons

从通知 API 检索响应时，每个有效负载都有一个名为 `reason` 的键。 这些键对应于触发通知的事件。

These are the potential `reason`s for receiving a notification:

| 原因名称               | 描述                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assign`           | 您被分配到议题。                                                                                                                                                     |
| `作者`               | 您创建了帖子。                                                                                                                                                      |
| `注释，评论`            | 您评论了帖子。                                                                                                                                                      |
| `ci_activity`      | 当 {% data variables.product.prodname_actions %} 工作流程运行被请求或完成时。                                                                                               |
| `邀请`               | 您接受了参与仓库的邀请。                                                                                                                                                 |
| `manual`           | 您订阅了帖子（通过议题或拉取请求）                                                                                                                                            |
| `提及`               | 您在内容中被特别 **@提及**。                                                                                                                                            |
| `review_requested` | 您或您所属的团队被请求审查拉取请求。{% ifversion fpt or ghec %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} 在您的仓库中发现了[安全漏洞](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)。{% endif %}
| `state_change`     | 您更改了帖子主题（例如关闭议题或合并拉取请求）。                                                                                                                                     |
| `subscribed`       | 您在关注仓库。                                                                                                                                                      |
| `team_mention`     | 您所属的团队被提及。                                                                                                                                                   |

请注意，`reason` 根据每个帖子而修改，如果在以后的通知中，`reason` 不同，其值可能会变更。

例如，如果您是某个议题的作者，则有关该议题的后续通知中，其 `reason` 值为 `author`。 如果后来您在这个议题上被 **@提及**，则您此后收到的通知中，其 `reason` 值为 `mention`。 无论您此后是否被再次提及，`reason` 值将保持 `mention` 不变。
