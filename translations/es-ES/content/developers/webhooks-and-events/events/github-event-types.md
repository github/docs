---
title: Tipos de evento de GitHub
intro: 'Para la API de Eventos de {% data variables.product.prodname_dotcom %}, aprende acerca de cada tipo de evento, la acción que los desencadena en {% data variables.product.prodname_dotcom %}, y las propiedades exclusivas de cada evento.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '146064247'
---
La API de eventos puede devolver diferentes tipos de ventos que se activan de acuerdo a la actividad en GitHub. Cada respuesta de evento contiene propiedades compartidas, pero tiene un objeto `payload` único determinado por su tipo de evento. En [Propiedades comunes del objeto de evento](#event-object-common-properties) se describen las propiedades compartidas por todos los eventos y cada tipo de evento describe las propiedades `payload` que son únicas para el evento específico.

{% ifversion fpt or ghec %}

{% endif %}

## Propiedades comunes del objeto de los eventos

Los objetos de los eventos que se devuelven de las terminales de la API de Eventos tienen la misma estructura.

| Nombre del atributo de la API del Evento | Descripción |
|--------------------------|-------------|
| `id` | Identificador único para el evento |
| `type` | Tipo del evento. Los eventos utilizan PascalCase para el nombre. |
| `actor` | El usuario que activó el evento. |
| `actor.id` | El identificador único para el actor. |
| `actor.login` | El nombre de usuario para el actor. |
| `actor.display_login` | El formato de visualización específico para el nombre de usuario. |
| `actor.gravatar_id` | El identificador único del perfil de Gravatar para el actor. |
| `actor.url` | La URL de la API de REST que se utiliza para recuperar el objeto del usuario, el cual incluye información adicional del usuario. |
| `actor.avatar_url` | La URL de la imagen de perfil del actor. |
| `repo` | El objeto del repositorio en donde ocurrió el evento.  |
| `repo.id` | El identificador único del repositorio. |
| `repo.name` | El nombre del repositorio, el cual incluye también al nombre del propietario. Por ejemplo, `octocat/hello-world` es el nombre del repositorio `hello-world` que pertenece a la cuenta personal `octocat`. |
| `repo.url` | La URL de la API de REST que se utiliza para recuperar el objeto del repositorio, el cual incluye información adicional sobre dicho repositorio. |
| `payload` | El objeto de la carga útil del evento que es exclusivo para el tipo de evento. Vea el tipo de evento siguiente para el objeto de API `payload`. |
| `public` | Si el evento es visible para todos los usuarios. |
| `created_at` | La fecha y hora en que se desencadenó el evento. Tiene formato de conformidad con la ISO 8601. |
| `org` | La organización que ha elegido el actor para realizar la acción que desencadena el evento.<br />_La propiedad aparece en el objeto de evento solo si es aplicable._ |
| `org.id` | El identificador único de la organización. |
| `org.login` | El nombre de la organización. |
| `org.gravatar_id` | El identificador único del perfil de Gravatar para la organización. |
| `org.url` | La dirección URL de la API REST que se utiliza para recuperar el objeto de la organización, que incluye información adicional de esta organización. |
| `org.avatar_url` | La dirección URL de la imagen de perfil de la organización. |

### Ejemplo con el objeto de evento WatchEvent

En este ejemplo se muestra el formato de la respuesta [WatchEvent](#watchevent) cuando se usa [Events API](/rest/reference/activity#events).

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

### Objeto `payload` de evento

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Objeto `payload` de evento

Este evento devuelve un objeto `payload` vacío.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | La acción que se ha realizado. Puede ser `created`.
`pull_request` | `object` | La solicitud de cambios a la cual pertenece la revisión.
`review` | `object` |   La revisión que se afectó.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

Clave | Tipo | Descripción
----|------|-------------
`push_id` | `integer` | Identificador único para la carga.
`size`|`integer` | La cantidad de confirmaciones de la carga.
`distinct_size`|`integer` | La cantidad de confimraciones distintas para la carga.
`ref`|`string` | El elemento [`git ref`](/rest/reference/git#refs) completo que se ha insertado. Ejemplo: `refs/heads/main`.
`head`|`string` | El SHA de la confirmación más reciente en `ref` después de la inserción.
`before`|`string` | El SHA de la confirmación más reciente en `ref` antes de la inserción.
`commits`|`array` | Un conjunto de objetos de confirmación que describen las confirmaciones subidas. (El conjunto incluye un máximo de 20 confirmaciones. Si es necesario, puede usar [Commits API](/rest/reference/repos#commits) para capturar confirmaciones adicionales. Este límite se aplica a los eventos cronológicos únicamente y no se aplica a las entregas de webhooks).
`commits[][sha]`|`string` | El SHA de la confirmación.
`commits[][message]`|`string` | El mensaje de la confirmación.
`commits[][author]`|`object` | El autor de git de la confirmación.
`commits[][author][name]`|`string` | El nombre del autor de git.
`commits[][author][email]`|`string` | La dirección de correo electrónico del autor de git.
`commits[][url]`|`url` | URL que apunta al recurso de la API de la confirmación.
`commits[][distinct]`|`boolean` | Si la confirmación es distinta de cualquier otra que se haya subido antes.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Objeto `payload` de evento

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` de evento

{% data reusables.webhooks.watch_properties %}
