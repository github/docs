---
title: Types d’événements GitHub
intro: 'Pour les API Événements {% data variables.product.prodname_dotcom %}, découvrez chaque type d’événement, l’action de déclenchement sur {% data variables.product.prodname_dotcom %} et les propriétés uniques de chaque événement.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064242'
---
L’API Événements peut retourner différents types d’événements déclenchés par l’activité sur GitHub. Chaque réponse d’événement contient des propriétés partagées, mais a un objet `payload` unique déterminé par son type d’événement. Les [Propriétés communes des objets d’événement](#event-object-common-properties) décrivent les propriétés partagées par tous les événements, et chaque type d’événement décrit les propriétés de `payload` propres à l’événement spécifique.

{% ifversion fpt or ghec %}

{% endif %}

## Propriétés courantes des objets d’événement

Les objets d’événement retournés par les points de terminaison de l’API Événements ont la même structure.

| Nom de l’attribut d’API d’événement | Description |
|--------------------------|-------------|
| `id` | Identificateur unique de l’événement. |
| `type` | Type de l'événement. Les événements utilisent la casse Pascal pour le nom. |
| `actor` | Utilisateur qui a déclenché l’événement. |
| `actor.id` | Identificateur unique de l’acteur. |
| `actor.login` | Nom d’utilisateur de l’acteur. |
| `actor.display_login` | Format d’affichage spécifique du nom d’utilisateur. |
| `actor.gravatar_id` | Identificateur unique du profil Gravatar de l’acteur. |
| `actor.url` | URL de l’API REST utilisée pour récupérer l’objet utilisateur, qui comprend des informations supplémentaires sur l’utilisateur. |
| `actor.avatar_url` | URL de l’image de profil de l’acteur. |
| `repo` | Objet de dépôt où l’événement s’est produit.  |
| `repo.id` | Identificateur unique du dépôt. |
| `repo.name` | Nom du dépôt, qui comprend le nom du propriétaire et du dépôt. Par exemple, `octocat/hello-world` est le nom du dépôt `hello-world` appartenant au compte personnel `octocat`. |
| `repo.url` | URL de l’API REST utilisée pour récupérer l’objet de dépôt, qui comprend des informations supplémentaires sur le dépôt. |
| `payload` | L’objet de charge utile d’événement est propre au type d’événement. Consultez le type d’événement ci-dessous pour l’objet `payload` de l’API d’événement. |
| `public` | Indique si l’événement est visible pour tous les utilisateurs. |
| `created_at` | La date et l’heure de déclenchement de l’événement. Il est mis en forme conformément à la norme ISO 8601. |
| `org` | L’organisation choisie par l’acteur pour effectuer une action qui déclenche l’événement.<br />_La propriété apparaît dans l’objet d’événement uniquement s’il est applicable._ |
| `org.id` | Identificateur unique de l’organisation. |
| `org.login` | Nom de l’organisation. |
| `org.gravatar_id` | Identificateur unique du profil Gravatar de l’organisation. |
| `org.url` | L’URL de l’API REST utilisée pour récupérer l’objet de l’organisation, qui comprend des informations supplémentaires sur l’organisation. |
| `org.avatar_url` | L’URL de l’image de profil de l’organisation. |

### Exemple d’objet d’événement WatchEvent

Cet exemple montre le format de la réponse [WatchEvent](#watchevent) en cas d’utilisation de l’[API Événements](/rest/reference/activity#events).

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

### Objet `payload` d’événement

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Objet `payload` d’événement

Cet événement retourne un objet `payload` vide.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

Clé | Type | Description
----|------|-------------
`action` | `string` | Action qui a été effectuée. Peut être `created`.
`pull_request` | `object` | Demande de tirage à laquelle appartient la révision.
`review` | `object` |   Révision qui a été affectée.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

Clé | Type | Description
----|------|-------------
`push_id` | `integer` | Identificateur unique pour la poussée.
`size`|`integer` | Nombre de commits dans la poussée.
`distinct_size`|`integer` | Nombre de commits distincts dans la poussée.
`ref`|`string` | La [`git ref`](/rest/reference/git#refs) complète qui a été poussée. Exemple : `refs/heads/main`.
`head`|`string` | SHA du commit le plus récent sur `ref` après la poussée.
`before`|`string` | SHA du commit le plus récent sur `ref` avant la poussée.
`commits`|`array` | Tableau d’objets de commit décrivant les commits poussés. (Le tableau comprend un maximum de 20 commits. Si nécessaire, vous pouvez utiliser l’[API Commits](/rest/reference/repos#commits) pour récupérer des commits supplémentaires. Cette limite s’applique uniquement aux événements de chronologie et non aux livraisons de webhook.)
`commits[][sha]`|`string` | SHA du commit.
`commits[][message]`|`string` | Message du commit.
`commits[][author]`|`object` | Auteur Git du commit.
`commits[][author][name]`|`string` | Nom de l’auteur Git.
`commits[][author][email]`|`string` | Adresse e-mail de l’auteur Git.
`commits[][url]`|`url` | URL qui pointe vers la ressource d’API de commit.
`commits[][distinct]`|`boolean` | Indique si ce commit est distinct de ceux qui ont été poussés précédemment.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Objet `payload` d’événement

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objet `payload` d’événement

{% data reusables.webhooks.watch_properties %}
