---
title: GitHub-Ereignistypen
intro: 'Erfahre für die Ereignis-API von {% data variables.product.prodname_dotcom %} mehr über die einzelnen Ereignistypen, die auslösende Aktion für {% data variables.product.prodname_dotcom %} und die besonderen Eigenschaften jedes Ereignisses.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064243'
---
Die Ereignis-API kann verschiedene Typen von Ereignissen zurückgeben, die durch Aktivität auf GitHub ausgelöst werden. Die Ereignisantworten enthalten gemeinsame Eigenschaften, weisen jedoch ein eindeutiges `payload`-Objekt auf, das vom Ereignistyp bestimmt wird. Unter [Gemeinsame Eigenschaften von Ereignisobjekten](#event-object-common-properties) sind die Eigenschaften beschrieben, die alle Ereignisse aufweisen. Außerdem beschreibt jeder Ereignistyp die eindeutigen `payload`-Eigenschaften des jeweiligen Ereignisses.

{% ifversion fpt or ghec %}

{% endif %}

## Gemeinsame Eigenschaften von Ereignisobjekten

Die von den Ereignis-API-Endpunkten zurückgegebenen Ereignisobjekte weisen dieselbe Struktur auf.

| Name des Ereignis-API-Attributs | BESCHREIBUNG |
|--------------------------|-------------|
| `id` | Eindeutiger Bezeichner für das Ereignis. |
| `type` | Art des Ereignisses. Ereignisse verwenden PascalCase für den Namen. |
| `actor` | Die*Der Benutzer*in, die*der das Ereignis ausgelöst hat. |
| `actor.id` | Der eindeutige Bezeichner für den Akteur. |
| `actor.login` | Der Benutzername des Akteurs. |
| `actor.display_login` | Das spezifische Anzeigeformat des Benutzernamens. |
| `actor.gravatar_id` | Der eindeutige Bezeichner des Gravatar-Profils für den Akteur. |
| `actor.url` | Die REST-API-URL, die zum Abrufen des Benutzerobjekts verwendet wird (einschließlich zusätzlicher Benutzerinformationen). |
| `actor.avatar_url` | Die URL des Profilbilds des Akteurs. |
| `repo` | Das Repositoryobjekt, in dem das Ereignis aufgetreten ist.  |
| `repo.id` | Der eindeutige Bezeichner des Repositorys. |
| `repo.name` | Der Name des Repositorys, das den Besitzer- und Repositorynamen enthält. Beispiel: `octocat/hello-world` ist der Name des `hello-world`-Repositorys, das sich im Besitz des persönlichen `octocat`-Kontos befindet. |
| `repo.url` | Die REST-API-URL, die zum Abrufen des Repositoryobjekts verwendet wird (einschließlich zusätzlicher Repositoryinformationen). |
| `payload` | Das Ereignisnutzlastobjekt ist für den Ereignistyp eindeutig. Der nachfolgende Ereignistyp bezieht sich auf das Ereignis-API-Objekt `payload`. |
| `public` | Ob das Ereignis für alle Benutzer sichtbar ist. |
| `created_at` | Datum und Uhrzeit der Auslösung des Ereignisses. Formatierung gemäß ISO 8601. |
| `org` | Die vom Akteur gewählte Organisation, die die Aktion durchführt, die das Ereignis auslöst.<br />_Die Eigenschaft wird nur dann im Ereignisobjekt angezeigt, wenn sie zutrifft._ |
| `org.id` | Der eindeutige Bezeichner der Organisation. |
| `org.login` | Der Name der Organisation. |
| `org.gravatar_id` | Der eindeutige Bezeichner des Gravatar-Profils der Organisation. |
| `org.url` | Die REST-API-URL zum Abrufen des Organisationsobjekts (einschließlich zusätzlicher Organisationsinformationen). |
| `org.avatar_url` | Die URL des Profilbilds der Organisation. |

### Beispiel für ein WatchEvent-Ereignisobjekt

Dieses Beispiel zeigt das Format der [WatchEvent](#watchevent)-Antwort bei Verwendung der [Ereignis-API](/rest/reference/activity#events).

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

### `payload`-Ereignisobjekt

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### `payload`-Ereignisobjekt

Dieses Ereignis gibt ein leeres `payload`-Objekt zurück.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` | `string` | Die durchgeführte Aktion. Kann `created` sein.
`pull_request` | `object` | Der Pull Request, auf den sich das Review bezieht.
`review` | `object` |   Das betroffene Review.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

Schlüssel | type | BESCHREIBUNG
----|------|-------------
`push_id` | `integer` | Der eindeutige Bezeichner für den Push.
`size`|`integer` | Die Anzahl von Commits im Push.
`distinct_size`|`integer` | Die Anzahl von unterschiedlichen Commits im Push.
`ref`|`string` | Die ganze [`git ref`](/rest/reference/git#refs), die verschoben wurde. Beispiel: `refs/heads/main`.
`head`|`string` | Der SHA des letzten Commits in `ref` nach dem Push.
`before`|`string` | Der SHA des letzten Commits in `ref` vor dem Push.
`commits`|`array` | Ein Array von Commitobjekten, das die gepushten Commits beschreibt. (Das Array umfasst maximal 20 Commits. Bei Bedarf kann die [Commits-API](/rest/reference/repos#commits) verwendet werden, um zusätzliche Commits abzurufen. Dieser Grenzwert wird ausschließlich auf Zeitachsenereignisse und nicht auf Webhook-Übermittlungen angewendet.)
`commits[][sha]`|`string` | Der SHA des Commits.
`commits[][message]`|`string` | Die Commitnachricht.
`commits[][author]`|`object` | Der Git-Autor des Commits.
`commits[][author][name]`|`string` | Der Name des Git-Autors.
`commits[][author][email]`|`string` | Die E-Mail-Adresse des Git-Autors.
`commits[][url]`|`url` | URL, die auf die Commit-API-Ressource verweist.
`commits[][distinct]`|`boolean` | Gibt an, ob sich dieser Commit von einem zuvor gepushten Commit unterscheidet.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### `payload`-Ereignisobjekt

{% data reusables.webhooks.watch_properties %}
