---
title: GitHub 이벤트 유형
intro: '{% data variables.product.prodname_dotcom %} 이벤트 API의 경우 각 이벤트 유형, {% data variables.product.prodname_dotcom %}에 대한 트리거 작업, 각 이벤트의 고유 속성에 대해 알아봅니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064245'
---
이벤트 API는 GitHub에서 활동에 의해 트리거되는 다양한 유형의 이벤트를 반환할 수 있습니다. 각 이벤트 응답에는 공유 속성이 포함되어 있지만 해당 이벤트 유형에 따라 결정되는 고유한 `payload` 개체가 있습니다. [Event 개체 공통 속성](#event-object-common-properties)은 모든 이벤트에서 공유하는 속성을 설명하고 각 이벤트 유형은 특정 이벤트에 고유한 `payload` 속성을 설명합니다.

{% ifversion fpt or ghec %}

{% endif %}

## 이벤트 개체 공통 속성

이벤트 API 엔드포인트에서 반환된 이벤트 개체의 구조는 동일합니다.

| 이벤트 API 특성 이름 | 설명 |
|--------------------------|-------------|
| `id` | 이벤트에 대한 고유 식별자입니다. |
| `type` | 이벤트의 유형입니다. 이벤트는 이름에 PascalCase를 사용합니다. |
| `actor` | 이벤트를 트리거한 사용자입니다. |
| `actor.id` | 작업자의 고유 식별자입니다. |
| `actor.login` | 작업자의 사용자 이름입니다. |
| `actor.display_login` | 사용자 이름의 특정 표시 형식입니다. |
| `actor.gravatar_id` | 작업자에 대한 Gravatar 프로필의 고유 식별자입니다. |
| `actor.url` | 추가 사용자 정보를 포함하는 사용자 개체를 검색하는 데 사용되는 REST API URL입니다. |
| `actor.avatar_url` | 작업자 프로필 이미지의 URL입니다. |
| `repo` | 이벤트가 발생한 리포지토리 개체입니다.  |
| `repo.id` | 리포지토리의 고유 식별자입니다. |
| `repo.name` | 리포지토리의 이름으로, 여기에는 소유자 및 리포지토리 이름이 포함되어 있습니다. 예를 들어 `octocat/hello-world`는 `octocat` 개인 계정이 소유한 `hello-world` 리포지토리의 이름입니다. |
| `repo.url` | 추가 리포지토리 정보가 포함된 리포지토리 개체를 검색하는 데 사용되는 REST API URL입니다. |
| `payload` | 이벤트 페이로드 개체는 이벤트 유형에 고유합니다. 이벤트 API `payload` 개체는 아래 이벤트 유형을 참조하세요. |
| `public` | 이벤트가 모든 사용자에게 표시되는지 여부입니다. |
| `created_at` | 이벤트가 트리거된 날짜 및 시간입니다. ISO 8601에 따라 형식이 지정됩니다. |
| `org` | 이벤트를 트리거하는 작업을 수행하기 위해 행위자가 선택한 조직입니다.<br />_속성은 해당되는 경우에만 이벤트 개체에 나타납니다._ |
| `org.id` | 조직의 고유 식별자입니다. |
| `org.login` | 조직의 이름 |
| `org.gravatar_id` | 조직에 대한 Gravatar 프로필의 고유 식별자입니다. |
| `org.url` | 추가 조직 정보가 포함된 조직 개체를 검색하는 데 사용되는 REST API URL입니다. |
| `org.avatar_url` | 조직 프로필 이미지의 URL입니다. |

### WatchEvent 이벤트 개체 예제

이 예제에서는 [이벤트 API](/rest/reference/activity#events)를 사용할 때 [WatchEvent](#watchevent) 응답의 형식을 보여 줍니다.

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

### Event `payload` 객체

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Event `payload` 객체

이 이벤트는 빈 `payload` 개체를 반환합니다.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

키 | 형식 | 설명
----|------|-------------
`action` | `string` | 수행된 작업입니다. `created`일 수 있습니다.
`pull_request` | `object` | 검토와 관련된 끌어오기 요청입니다.
`review` | `object` |   영향을 받은 검토입니다.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

키 | 형식 | 설명
----|------|-------------
`push_id` | `integer` | 푸시의 고유 식별자입니다.
`size`|`integer` | 푸시의 커밋 수입니다.
`distinct_size`|`integer` | 푸시의 고유 커밋 수입니다.
`ref`|`string` | 푸시된 전체 [`git ref`](/rest/reference/git#refs)입니다. 예: `refs/heads/main`.
`head`|`string` | 푸시 후 `ref`에 대한 가장 최근 커밋의 SHA입니다.
`before`|`string` | 푸시 후 `ref`에 대한 가장 최근 커밋의 SHA입니다.
`commits`|`array` | 푸시된 커밋을 설명하는 커밋 개체의 배열. (배열에는 최대 20개의 커밋이 포함됩니다. 필요한 경우 [커밋 API](/rest/reference/repos#commits)를 사용하여 추가 커밋을 가져올 수 있습니다. 이 제한은 타임라인 이벤트에만 적용되며 웹후크 배달에는 적용되지 않습니다.)
`commits[][sha]`|`string` | 커밋의 SHA입니다.
`commits[][message]`|`string` | 커밋 메시지.
`commits[][author]`|`object` | 커밋의 git 작성자.
`commits[][author][name]`|`string` | git 작성자의 이름.
`commits[][author][email]`|`string` | git 작성자의 메일 주소입니다.
`commits[][url]`|`url` | 커밋 API 리소스를 가리키는 URL.
`commits[][distinct]`|`boolean` | 이 커밋이 이전에 푸시된 커밋과 구별되는지 여부.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Event `payload` 객체

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` 객체

{% data reusables.webhooks.watch_properties %}
