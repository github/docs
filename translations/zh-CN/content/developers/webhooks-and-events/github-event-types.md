---
title: GitHub event types
intro: 'For the {% data variables.product.prodname_dotcom %} Events API, learn about each event type, the triggering action on {% data variables.product.prodname_dotcom %}, and each event''s unique properties.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /v3/activity/event_types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


The Events API can return different types of events triggered by activity on GitHub. Each event response contains shared properties, but has a unique `payload` object determined by its event type. The [Event object common properties](#event-object-common-properties) describes the properties shared by all events, and each event type describes the `payload` properties that are unique to the specific event.

{% if currentVersion == "free-pro-team@latest" %}

{% endif %}


### Event object common properties

The event objects returned from the Events API endpoints have the same structure.

| Event API attribute name | 描述                                                                                                                                                                                            |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | Unique identifier for the event.                                                                                                                                                              |
| `type`                   | The type of event. Events uses PascalCase for the name.                                                                                                                                       |
| `actor`                  | The user that triggered the event.                                                                                                                                                            |
| `actor.id`               | The unique identifier for the actor.                                                                                                                                                          |
| `actor.login`            | The username of the actor.                                                                                                                                                                    |
| `actor.display_login`    | The specific display format of the username.                                                                                                                                                  |
| `actor.gravatar_id`      | The unique indentifier of the Gravatar profile for the actor.                                                                                                                                 |
| `actor.url`              | The REST API URL used to retrieve the user object, which includes additional user information.                                                                                                |
| `actor.avatar_url`       | The URL of the actor's profile image.                                                                                                                                                         |
| `repo`                   | The repository object where the event occurred.                                                                                                                                               |
| `repo.id`                | The unique identifier of the repository.                                                                                                                                                      |
| `repo.name`              | The name of the repository, which includes the owner and repository name. For example, `octocat/hello-world` is the name of the `hello-world` repository owned by the `octocat` user account. |
| `repo.url`               | The REST API URL used to retrive the repository object, which includes additional repository information.                                                                                     |
| `payload`                | The event payload object is unique to the event type. See the event type below for the event API `payload` object.                                                                            |

#### Example WatchEvent event object

This example shows the format of the [WatchEvent](#watchevent) response when using the [Events API](/v3/activity/events).

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

#### Event `payload` object

{% data reusables.webhooks.commit_comment_properties %}

### CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.create_properties %}

### DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.delete_properties %}

### ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.fork_properties %}

### GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.gollum_properties %}

### IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}

### IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.issue_event_api_properties %}
{% data reusables.webhooks.issue_properties %}

### MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.member_event_api_properties %}
{% data reusables.webhooks.member_properties %}

### PublicEvent

{% data reusables.webhooks.public_short_desc %}

#### Event `payload` object

This event returns an empty `payload` object.

### PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.pull_request_event_api_properties %}
{% data reusables.webhooks.pull_request_properties %}

### PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}

### PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

| 键                          | 类型    | 描述                                                                                                                |
| -------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| `push_id`                  | `整数`  | Unique identifier for the push.                                                                                   |
| `size`                     | `整数`  | The number of commits in the push.                                                                                |
| `distinct_size`            | `整数`  | The number of distinct commits in the push.                                                                       |
| `ref`                      | `字符串` | 被推送的完整 [`git ref`](/v3/git/refs/)。 例如：`refs/heads/master`。                                                        |
| `头部`                       | `字符串` | 推送之后在 `ref` 上最近提交的 SHA。                                                                                           |
| `before`                   | `字符串` | 推送之前在 `ref` 上最近提交的 SHA。                                                                                           |
| `commits`                  | `数组`  | 描述所推送提交的提交对象数组。 （该数组最多包含 20 个提交。 如有必要，可使用 [Commits API](/v3/repos/commits/) 获取更多提交。 此限制仅适用于时间表事件，而不适用于 web 挂钩递送。） |
| `commits[][sha]`           | `字符串` | 提交的 SHA。                                                                                                          |
| `commits[][message]`       | `字符串` | 提交消息.                                                                                                             |
| `commits[][author]`        | `对象`  | 提交的 Git 作者。                                                                                                       |
| `commits[][author][name]`  | `字符串` | Git 作者的名称。                                                                                                        |
| `commits[][author][email]` | `字符串` | Git 作者的电子邮件地址。                                                                                                    |
| `commits[][url]`           | `url` | 指向提交 API 资源的 URL。                                                                                                 |
| `commits[][distinct]`      | `布尔值` | 此提交是否与之前推送的任何提交不同。                                                                                                |

### ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.release_event_api_properties %}
{% data reusables.webhooks.release_properties %}

{% if currentVersion == "free-pro-team@latest" %}
### SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

#### Event `payload` object

{% data reusables.webhooks.sponsorship_event_api_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% endif %}

### WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### Event `payload` object

{% data reusables.webhooks.watch_properties %}
