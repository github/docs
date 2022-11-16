---
title: Типы событий GitHub
intro: 'Для API событий {% data variables.product.prodname_dotcom %} узнайте о каждом типе события, активируя действие в {% data variables.product.prodname_dotcom %}, а также уникальные свойства каждого события.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064246'
---
API событий может возвращать различные типы событий, инициируемые действием в GitHub. Каждый ответ события содержит общие свойства, но имеет уникальный объект `payload`, определенный его типом события. В разделе [Общие свойства объекта событий](#event-object-common-properties) описываются свойства, общие для всех событий, а каждый тип события описывает свойства `payload`, уникальные для конкретного события.

{% ifversion fpt or ghec %}

{% endif %}

## Общие свойства объекта события

Объекты событий, возвращаемые конечными точками API событий, имеют одинаковую структуру.

| Имя атрибута API событий | Описание |
|--------------------------|-------------|
| `id` | Уникальный идентификатор события. |
| `type` | Тип события. События используют PascalCase для имени. |
| `actor` | Пользователь, который активировал событие. |
| `actor.id` | Уникальный идентификатор субъекта. |
| `actor.login` | Имя пользователя субъекта. |
| `actor.display_login` | Конкретный формат отображения имени пользователя. |
| `actor.gravatar_id` | Уникальный идентификатор профиля Gravatar для субъекта. |
| `actor.url` | URL-адрес REST API, используемый для получения объекта пользователя, который содержит дополнительные сведения о пользователе. |
| `actor.avatar_url` | URL-адрес изображения профиля субъекта. |
| `repo` | Объект репозитория, в котором произошло событие.  |
| `repo.id` | Уникальный идентификатор репозитория. |
| `repo.name` | Имя репозитория, включающее имя владельца и репозитория. Например, `octocat/hello-world` — это имя репозитория `hello-world`, принадлежащего личной учетной записи `octocat`. |
| `repo.url` | URL-адрес REST API, используемый для получения объекта репозитория, который содержит дополнительные сведения о репозитории. |
| `payload` | Объект полезных данных события уникален для каждого типа события. См. тип события ниже для объекта `payload` API событий. |
| `public` | Отображается ли событие для всех пользователей. |
| `created_at` | Дата и время активации события. В формате по стандарту ISO 8601. |
| `org` | Организация, выбранная субъектом для выполнения действия, которое активировало событие.<br />_Свойство отображается в объекте события только в том случае, если это применимо._ |
| `org.id` | Уникальный идентификатор для организации. |
| `org.login` | Название организации. |
| `org.gravatar_id` | Уникальный идентификатор профиля Gravatar для организации. |
| `org.url` | URL-адрес REST API, используемый для получения объекта организации, который содержит дополнительные сведения об организации. |
| `org.avatar_url` | URL-адрес изображения профиля организации. |

### Пример объекта события WatchEvent

В этом примере показан формат ответа [WatchEvent](#watchevent) при использовании [API событий](/rest/reference/activity#events).

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

### Объект события `payload`

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Объект события `payload`

Это событие возвращает пустой объект `payload`.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

Ключ | Тип | Описание
----|------|-------------
`action` | `string` | Действие, которое было выполнено. Может иметь значение `created`.
`pull_request` | `object` | Запрос на вытягивание, к которому относится проверка.
`review` | `object` |   Затрагиваемый обзор.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

Ключ | Тип | Описание
----|------|-------------
`push_id` | `integer` | Уникальный идентификатор принудительной отправки.
`size`|`integer` | Количество фиксаций в принудительной отправке.
`distinct_size`|`integer` | Количество отдельных фиксаций в принудительной отправке.
`ref`|`string` | Полный [`git ref`](/rest/reference/git#refs), который был принудительно отправлен. Например, `refs/heads/main`.
`head`|`string` | SHA последней фиксации в `ref` после принудительной отправки.
`before`|`string` | SHA последней фиксации в `ref` до принудительной отправки.
`commits`|`array` | Массив объектов фиксации, описывающих принудительно отправленные фиксации. (Массив включает не более 20 фиксаций. При необходимости можно использовать [API фиксаций](/rest/reference/repos#commits) для получения дополнительных фиксаций. Это ограничение применяется только к событиям временной шкалы и не применяется к доставке веб-перехватчиков.)
`commits[][sha]`|`string` | SHA фиксации.
`commits[][message]`|`string` | Сообщение фиксации.
`commits[][author]`|`object` | Автор Git фиксации.
`commits[][author][name]`|`string` | Имя автора Git.
`commits[][author][email]`|`string` | Адрес электронной почты автора Git.
`commits[][url]`|`url` | URL-адрес, указывающий на ресурс API фиксации.
`commits[][distinct]`|`boolean` | Отличается ли эта фиксация от остальных фиксаций, принудительно отправленных ранее.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Объект события `payload`

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Объект события `payload`

{% data reusables.webhooks.watch_properties %}
