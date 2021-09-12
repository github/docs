---
title: GitHubイベントの種類
intro: '{% data variables.product.prodname_dotcom %} Event APIについて、各イベントの種類、{% data variables.product.prodname_dotcom %}上でのトリガーするアクション、各イベント固有のプロパティについて学んでください。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /v3/activity/event_types
  - /developers/webhooks-and-events/github-event-types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Events
---

Events APIは、GitHub上のアクティビティによってトリガーされる様々な種類のイベントを返します。 各イベントのレスポンスは共有プロパティを含むとともに、イベントの種類によって決まる固有の`payload`オブジェクトを持ちます。 [イベントオブジェクトの共通プロパティ](#event-object-common-properties)は、すべてのイベントが共有するプロパティを示すものであり、各イベントの種類にはそのイベントに固有の`payload`プロパティが示されています。

{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

### イベントオブジェクトの共通プロパティ

Events APIエンドポイントから返されるイベントオブジェクトは、同じ構造を持ちます。

| Event API属性名          | 説明                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                  | イベントの一意の識別子。                                                                                         |
| `type`                | イベントの種類。 イベントの名前にはPascalCaseが使われます。                                                                  |
| `actor`               | イベントをトリガーしたユーザ。                                                                                      |
| `actor.id`            | アクターの一意の識別子。                                                                                         |
| `actor.login`         | アクターのユーザ名。                                                                                           |
| `actor.display_login` | ユーザ名に特定の表示形式。                                                                                        |
| `actor.gravatar_id`   | アクターのGravatarプロフィールの一意の識別子。                                                                          |
| `actor.url`           | 追加のユーザ情報を含むユーザオブジェクトの取得に使われるREST APIのURL。                                                            |
| `actor.avatar_url`    | アクターのプロフィール画像のURL。                                                                                   |
| `repo`                | イベントが発生したリポジトリオブジェクト。                                                                                |
| `repo.id`             | リポジトリの一意の識別子。                                                                                        |
| `repo.name`           | リポジトリの名前。オーナーとリポジトリの名前が含まれる。 たとえば`octocat/hello-world`は、`octocat`ユーザアカウントが所有する`hello-world`リポジトリの名前。 |
| `repo.url`            | 追加のリポジトリ情報を含むリポジトリオブジェクトの取得に使われるREST APIのURL。                                                        |
| `payload`             | イベントの種類に固有のイベントペイロードオブジェクト。 イベントAPIの`payload`オブジェクトについては、以下のイベントの種類を参照してください。                        |

#### WatchEventイベントのオブジェクトの例

この例は、[Events API](/rest/reference/activity#events)を使用する際の[WatchEvent](#watchevent)のレスポンスの形式を示しています。

```
HTTP/2 200
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
```
```json
[
  {
    "type": "WatchEvent",
    "public": false,
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

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.commit_comment_properties %}

### CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.create_properties %}

### DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.delete_properties %}

### ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.fork_properties %}

### GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.gollum_properties %}

### IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}

### IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.issue_event_api_properties %}
{% data reusables.webhooks.issue_properties %}

### MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.member_event_api_properties %}
{% data reusables.webhooks.member_properties %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### PublicEvent

{% data reusables.webhooks.public_short_desc %}
#### イベントの`payload`オブジェクト

このイベントは、空の`payload`オブジェクトを返します。
{% endif %}
### PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.pull_request_event_api_properties %}
{% data reusables.webhooks.pull_request_properties %}

### PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

| キー             | 種類       | 説明                                       |
| -------------- | -------- | ---------------------------------------- |
| `action`       | `string` | 実行されたアクション. `created `になりうる。             |
| `pull_request` | `オブジェクト` | The pull request the review pertains to. |
| `レビュー`         | `オブジェクト` | 影響されるレビュー。                               |

### PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}

### PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

| キー                         | 種類        | 説明                                                                                                                                                                    |
| -------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `push_id`                  | `integer` | プッシュの一意の識別子。                                                                                                                                                          |
| `size`                     | `integer` | プッシュ中のコミット数。                                                                                                                                                          |
| `distinct_size`            | `integer` | プッシュ中の個別のコミット数。                                                                                                                                                       |
| `ref`                      | `string`  | プッシュされた完全な[`git ref`](/rest/reference/git#refs)。 例:`refs/heads/main`。                                                                                                 |
| `head`                     | `string`  | プッシュ後の`ref`上の最新のコミットのSHA。                                                                                                                                             |
| `before`                   | `string`  | プッシュ前の`ref` 上の最新のコミットのSHA。                                                                                                                                            |
| `commits`                  | `array`   | プッシュされたコミットを示すコミットオブジェクトの配列。 （配列には最大で20のコミットが含まれる。 必要な場合は、追加のコミットを[Commits API](/rest/reference/repos#commits)を使ってフェッチできる。 この制限はタイムラインイベントにのみ適用され、webhookの配信には適用されない） |
| `commits[][sha]`           | `string`  | コミットのSHA。                                                                                                                                                             |
| `commits[][message]`       | `string`  | コミットメッセージ。                                                                                                                                                            |
| `commits[][author]`        | `オブジェクト`  | コミットのGit作者。                                                                                                                                                           |
| `commits[][author][name]`  | `string`  | Git作者の名前。                                                                                                                                                             |
| `commits[][author][email]` | `string`  | Git作者のメールアドレス。                                                                                                                                                        |
| `commits[][url]`           | `url`     | コミットAPIのリソースを指すURL。                                                                                                                                                   |
| `commits[][distinct]`      | `boolean` | このコミットが以前にプッシュされたいずれとも異なっているか。                                                                                                                                        |

### ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.release_event_api_properties %}
{% data reusables.webhooks.release_properties %}

{% if currentVersion == "free-pro-team@latest" %}
### SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.sponsorship_event_api_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% endif %}

### WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

#### イベントの`payload`オブジェクト

{% data reusables.webhooks.watch_properties %}
