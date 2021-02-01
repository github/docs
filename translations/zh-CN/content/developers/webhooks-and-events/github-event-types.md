---
title: GitHub 事件类型
intro: '对于 {% data variables.product.prodname_dotcom %} 事件 API，了解每个事件类型、{% data variables.product.prodname_dotcom %} 上的触发操作以及每个事件的唯一属性。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /v3/activity/event_types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


事件 API 可以返回 GitHub 上的活动触发的不同类型事件。 每个时间响应包含共享属性，但具有由其事件类型确定的唯一 `payload` 对象。 [事件对象公共属性](#event-object-common-properties)描述所有事件共享的属性，而每个事件类型描述特定事件唯一的 `payload` 属性。

{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

### 事件对象公共属性

从事件 API 端点返回的事件对象具有相同的结构。

| 事件 API 属性名称           | 描述                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------- |
| `id`                  | 事件的唯一标识符。                                                                           |
| `type`                | 事件的类型。 事件使用 PascalCase 作为名称。                                                        |
| `actor`               | 触发事件的用户。                                                                            |
| `actor.id`            | 执行者的唯一标识符。                                                                          |
| `actor.login`         | 执行者的用户名。                                                                            |
| `actor.display_login` | 用户名的特定显示格式。                                                                         |
| `actor.gravatar_id`   | 执行者的 Gravatar 个人资料的唯一标识符。                                                           |
| `actor.url`           | 用于检索用户对象的 REST API URL，其中包括更多用户信息。                                                  |
| `actor.avatar_url`    | 执行者个人资料图像的 URL。                                                                     |
| `repo`                | 发生事件的仓库对象。                                                                          |
| `repo.id`             | 仓库的唯一标识符。                                                                           |
| `repo.name`           | 仓库名称，包括所有者和仓库的名称。 例如，`octocat/hello-world` 是 `octocat` 用户帐户拥有的 `hello-world` 仓库的名称。 |
| `repo.url`            | 用于检索仓库对象的 REST API URL，其中包括更多仓库信息。                                                  |
| `payload`             | 事件有效负载对象对于事件类型是唯一的。 关于事件 API `payload` 对象，请参阅下面的事件类型。                               |

#### WatchEvent 事件对象示例

此示例显示了使用[事件 API](/rest/reference/activity#events) 时 [WatchEvent](#watchevent) 响应的格式。

```
Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
```
```json
[
  {
    "type": "WatchEvent",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```

### CommitCommentEvent

{% data reusables.webhooks.commit_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.commit_comment_properties %}

### CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.create_properties %}

### DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.delete_properties %}

### ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.fork_properties %}

### GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.gollum_properties %}

### IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}

### IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.issue_event_api_properties %}
{% data reusables.webhooks.issue_properties %}

### MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.member_event_api_properties %}
{% data reusables.webhooks.member_properties %}

### PublicEvent

{% data reusables.webhooks.public_short_desc %}

#### 事件 `payload` 对象

此事件返回一个空 `payload` 对象。

### PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.pull_request_event_api_properties %}
{% data reusables.webhooks.pull_request_properties %}

### PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}

### PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

| 键                          | 类型    | 描述                                                                                                                     |
| -------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------- |
| `push_id`                  | `整数`  | 推送的唯一标识符。                                                                                                              |
| `size`                     | `整数`  | 推送中的提交数。                                                                                                               |
| `distinct_size`            | `整数`  | 推送中不同提交的数量。                                                                                                            |
| `ref`                      | `字符串` | 被推送的完整 [`git ref`](/rest/reference/git#refs)。 例如：`refs/heads/main`。                                                    |
| `头部`                       | `字符串` | 推送之后在 `ref` 上最近提交的 SHA。                                                                                                |
| `before`                   | `字符串` | 推送之前在 `ref` 上最近提交的 SHA。                                                                                                |
| `commits`                  | `数组`  | 描述所推送提交的提交对象数组。 （该数组最多包含 20 个提交。 如有必要，可使用[提交 API](/rest/reference/repos#commits) 获取更多提交。 此限制仅适用于时间表事件，而不适用于 web 挂钩递送。） |
| `commits[][sha]`           | `字符串` | 提交的 SHA。                                                                                                               |
| `commits[][message]`       | `字符串` | 提交消息.                                                                                                                  |
| `commits[][author]`        | `对象`  | 提交的 Git 作者。                                                                                                            |
| `commits[][author][name]`  | `字符串` | Git 作者的名称。                                                                                                             |
| `commits[][author][email]` | `字符串` | Git 作者的电子邮件地址。                                                                                                         |
| `commits[][url]`           | `url` | 指向提交 API 资源的 URL。                                                                                                      |
| `commits[][distinct]`      | `布尔值` | 此提交是否与之前推送的任何提交不同。                                                                                                     |

### ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.release_event_api_properties %}
{% data reusables.webhooks.release_properties %}

{% if currentVersion == "free-pro-team@latest" %}
### SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

#### 事件 `payload` 对象

{% data reusables.webhooks.sponsorship_event_api_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% endif %}

### WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### 事件 `payload` 对象

{% data reusables.webhooks.watch_properties %}
