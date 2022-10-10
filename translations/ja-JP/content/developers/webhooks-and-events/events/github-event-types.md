---
title: GitHubイベントの種類
intro: '{% data variables.product.prodname_dotcom %} Event APIについて、各イベントの種類、{% data variables.product.prodname_dotcom %}上でのトリガーするアクション、各イベント固有のプロパティについて学んでください。'
redirect_from:
  - /v3/activity/event_types
  - /developers/webhooks-and-events/github-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 0cd519f6dcf84fc5edd6356f1f734d23030a6711
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064244'
---
Events APIは、GitHub上のアクティビティによってトリガーされる様々な種類のイベントを返します。 各イベントの応答には共有プロパティが含まれますが、イベントの種類によって決まる固有の `payload` オブジェクトがあります。 [イベント オブジェクトの共通プロパティ](#event-object-common-properties)は、すべてのイベントで共有されるプロパティを表し、各イベントの種類は、特定のイベントに固有の `payload` プロパティを表します。

{% ifversion fpt or ghec %}

{% endif %}

## イベントオブジェクトの共通プロパティ

Events APIエンドポイントから返されるイベントオブジェクトは、同じ構造を持ちます。

| Event API属性名 | 説明 |
|--------------------------|-------------|
| `id` | イベントの一意識別子。 |
| `type` | イベントの種類。 イベントの名前にはPascalCaseが使われます。 |
| `actor` | イベントをトリガーしたユーザ。 |
| `actor.id` | アクターの一意の識別子。 |
| `actor.login` | アクターのユーザ名。 |
| `actor.display_login` | ユーザ名に特定の表示形式。 |
| `actor.gravatar_id` | アクターのGravatarプロフィールの一意の識別子。 |
| `actor.url` | 追加のユーザ情報を含むユーザオブジェクトの取得に使われるREST APIのURL。 |
| `actor.avatar_url` | アクターのプロフィール画像のURL。 |
| `repo` | イベントが発生したリポジトリオブジェクト。  |
| `repo.id` | リポジトリの一意の識別子。 |
| `repo.name` | リポジトリの名前。オーナーとリポジトリの名前が含まれる。 たとえば、`octocat/hello-world` は、`octocat` 個人用アカウントが所有する `hello-world` リポジトリの名前です。 |
| `repo.url` | 追加のリポジトリ情報を含むリポジトリオブジェクトの取得に使われるREST APIのURL。 |
| `payload` | イベントの種類に固有のイベントペイロードオブジェクト。 イベント API `payload` オブジェクトについては、以下のイベントの種類を参照してください。 |
| `public` | イベントがすべてのユーザーに表示されるかどうか。 |
| `created_at` | イベントがトリガーされた日時。 ISO 8601 に従って形式設定されています。 |
| `org` | イベントをトリガーするアクションを実行するためにアクターによって選択された組織。<br />_このプロパティは、該当する場合にのみイベント オブジェクトに表示されます。_ |
| `org.id` | 組織の一意の識別子。 |
| `org.login` | 組織の名前です。 |
| `org.gravatar_id` | 組織の Gravatar プロフィールの一意の識別子。 |
| `org.url` | 追加の組織情報を含む組織オブジェクトの取得に使われる REST API の URL。 |
| `org.avatar_url` | 組織のプロフィール画像の URL。 |

### WatchEventイベントのオブジェクトの例

この例では、[Events API](#watchevent) を使用するときの [WatchEvent](/rest/reference/activity#events) 応答の形式を示します。

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

## CommitCommentEvent

{% data reusables.webhooks.commit_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### イベント `payload` オブジェクト

このイベントでは、空の `payload` オブジェクトが返されます。
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

キー | Type | [説明]
----|------|-------------
`action` | `string` | 実行されたアクション。 `created` の可能性があります。
`pull_request` | `object` | レビューが関連するプルリクエスト。
`review` | `object` |   影響されるレビュー。

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

キー | Type | 説明
----|------|-------------
`push_id` | `integer` | プッシュの一意の識別子。
`size`|`integer` | プッシュ中のコミット数。
`distinct_size`|`integer` | プッシュ中の個別のコミット数。
`ref`|`string` | プッシュされた完全な [`git ref`](/rest/reference/git#refs)。 例: `refs/heads/main`.
`head`|`string` | プッシュ後の `ref` に対する最新のコミットの SHA。
`before`|`string` | プッシュ前の `ref` に対する最新のコミットの SHA。
`commits`|`array` | プッシュされたコミットを示すコミットオブジェクトの配列。 （配列には最大で20のコミットが含まれる。 必要に応じて、[Commits API](/rest/reference/repos#commits) を使用して追加のコミットをフェッチできます。 この制限はタイムラインイベントにのみ適用され、webhookの配信には適用されない）
`commits[][sha]`|`string` | コミットのSHA。
`commits[][message]`|`string` | コミットメッセージ。
`commits[][author]`|`object` | コミットのGit作者。
`commits[][author][name]`|`string` | Git作者の名前。
`commits[][author][email]`|`string` | Git作者のメールアドレス。
`commits[][url]`|`url` | コミットAPIのリソースを指すURL。
`commits[][distinct]`|`boolean` | このコミットが以前にプッシュされたいずれとも異なっているか。

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### イベント `payload` オブジェクト

{% data reusables.webhooks.watch_properties %}
