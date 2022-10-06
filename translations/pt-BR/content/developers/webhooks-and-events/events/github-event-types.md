---
title: Tipos de eventos do GitHub
intro: 'Para a API de eventos de {% data variables.product.prodname_dotcom %}, saiba sobre cada tipo de evento, a ação de acionamento em {% data variables.product.prodname_dotcom %} e as propriedades exclusivas de cada evento.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064240'
---
A API de eventos pode retornar diferentes tipos de eventos acionados por atividades no GitHub. Cada resposta de evento contém propriedades compartilhadas, mas tem um objeto `payload` exclusivo determinado pelo tipo de evento. As [propriedades comuns do objeto Event](#event-object-common-properties) descrevem as propriedades compartilhadas por todos os eventos, e cada tipo de evento descreve as propriedades `payload` exclusivas do evento específico.

{% ifversion fpt or ghec %}

{% endif %}

## Propriedades comuns do objeto de evento

Os objetos de evento retornados dos pontos de extremidade da API de eventos têm a mesma estrutura.

| Nome do atributo da API do evento | Descrição |
|--------------------------|-------------|
| `id` | Identificador exclusivo do evento. |
| `type` | O tipo do evento. Os eventos usam PascalCase para o nome. |
| `actor` | O usuário que acionou o evento. |
| `actor.id` | O identificador único para o ator. |
| `actor.login` | O nome de usuário do ator. |
| `actor.display_login` | O formato de exibição específico do nome de usuário. |
| `actor.gravatar_id` | O identificador único do perfil Gravatar para o ator. |
| `actor.url` | A URL da API REST usada para recuperar o objeto do usuário, que inclui informações adicionais sobre o usuário. |
| `actor.avatar_url` | A URL da imagem do perfil do ator. |
| `repo` | O objeto de repositório onde ocorreu o evento.  |
| `repo.id` | O identificador único do repositório. |
| `repo.name` | O nome do repositório, que inclui o proprietário e o nome do repositório. Por exemplo, `octocat/hello-world` é o nome do repositório `hello-world` pertencente à conta pessoal `octocat`. |
| `repo.url` | A URL da API REST usada para recuperar o objeto do repositório, que inclui informações adicionais do repositório. |
| `payload` | O objeto da carga de eventos é único para o tipo de evento. Confira o tipo de evento abaixo para ver o objeto `payload` da API de evento. |
| `public` | Se o evento é visível a todos os usuários. |
| `created_at` | A data e hora em que o evento foi disparado. O formato segue a ISO 8601. |
| `org` | A organização que foi escolhida pelo ator para executar uma ação que dispara o evento.<br />_A propriedade será exibida no objeto de evento somente se for aplicável._ |
| `org.id` | O identificador exclusivo da organização. |
| `org.login` | O nome da organização. |
| `org.gravatar_id` | O identificador exclusivo do perfil da organização no Gravatar. |
| `org.url` | A URL da API REST usada para recuperar o objeto de organização, que inclui informações adicionais da organização. |
| `org.avatar_url` | A URL da imagem de perfil da organização. |

### Exemplo de objeto de evento WatchEvent

Este exemplo mostra o formato da resposta [WatchEvent](#watchevent) ao usar a [API de Eventos](/rest/reference/activity#events).

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

### Objeto `payload` do evento

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Objeto `payload` do evento

Esse evento retorna um objeto `payload` vazio.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

Chave | Tipo | Descrição
----|------|-------------
`action` | `string` | A ação que foi executada. Pode ser `created`.
`pull_request` | `object` | O pull request ao qual a revisão pertence.
`review` | `object` |   A revisão que foi afetada.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

Chave | Tipo | Descrição
----|------|-------------
`push_id` | `integer` | Identificador único para o push.
`size`|`integer` | O número de commits no push.
`distinct_size`|`integer` | O número de commits distintos no push.
`ref`|`string` | A [`git ref`](/rest/reference/git#refs) completa que foi enviada por push. Exemplo: `refs/heads/main`.
`head`|`string` | O SHA do commit mais recente em `ref` após o push.
`before`|`string` | O SHA do commit mais recente em `ref` antes do push.
`commits`|`array` | Um array de objetos de commit, que descreve os commits carregados. (O array inclui um máximo de 20 commits. Se necessário, você pode usar a [API de Commits](/rest/reference/repos#commits) para buscar commits adicionais. Este limite é aplicado apenas aos eventos da linha do tempo e não é aplicado às entregas do webhook.)
`commits[][sha]`|`string` | O SHA do commit.
`commits[][message]`|`string` | A mensagem do commit.
`commits[][author]`|`object` | O autor do git do commit.
`commits[][author][name]`|`string` | O nome do autor do git.
`commits[][author][email]`|`string` | O endereço de e-mail do autor do git.
`commits[][url]`|`url` | URL que aponta para o recurso de commit de API.
`commits[][distinct]`|`boolean` | Se este compromisso é diferente de qualquer outro que tenha sido carregado anteriormente.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Objeto `payload` do evento

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Objeto `payload` do evento

{% data reusables.webhooks.watch_properties %}
