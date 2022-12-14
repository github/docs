---
title: Tipos de eventos de problemas
intro: 'Para a API de eventos de problemas e API da Linha do tempo, aprenda sobre cada tipo de evento, ativando a ação em {% data variables.product.prodname_dotcom %}, bem como as propriedades únicas de cada evento.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875478'
---
Os eventos de problemas são disparados pela atividade em problemas e solicitações de pull e estão disponíveis na [API de Eventos de Problema](/rest/reference/issues#events) e na [API de Eventos da Linha do Tempo](/rest/reference/issues#timeline). Cada tipo de evento especifica se o evento está disponível nos eventos do problema ou na API de eventos da linha do tempo.

A API REST do GitHub considera que todo pull request é um problema, mas nem todos os problemas são pull request. Por este motivo, os eventos de problemas e os pontos de extremidade dos eventos da linha do tempo podem retornar problemas e pull requests na resposta. As solicitações de pull têm uma propriedade `pull_request` no objeto `issue`. Como os pull requests são problemas, os números de problemas e pull requests não se sobrepõem em um repositório. Por exemplo, se você abrir seu primeiro problema em um repositório, o número será 1. Se você abrir um pull request, o número será 2. Cada tipo de evento especifica se o evento ocorre em um pull request, em um problema ou em ambos.

## Propriedades comuns do objeto de evento do problema

Todos os eventos de problema têm a mesma estrutura de objeto, exceto os eventos que estão disponíveis apenas na API de eventos da linha do tempo. Alguns eventos também incluem propriedades adicionais que fornecem mais contexto sobre os recursos do evento. Consulte o evento específico para obter informações sobre quaisquer propriedades que diferem deste formato de objeto.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

O problema ou pull request foi adicionado a um quadro de projeto. {% data reusables.projects.disabled-projects %}

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitação de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## atribuída

O problema ou o pull request foi atribuído a um usuário.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X**  |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

O GitHub tentou alterar automaticamente o branch base do pull request sem sucesso.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** |  |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

O GitHub tentou alterar automaticamente o branch base do pull request com sucesso.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## ref_base_alterada

O branch de referência do pull request alterado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## closed

O problema ou pull request foi fechado. Quando a `commit_id` está presente, ele identifica o commit que fechou o problema usando a sintaxe "closes / fixes". Para obter mais informações sobre a sintaxe, confira "[Como vincular uma solicitação de pull a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## comentado

Um comentário foi adicionado ao problema ou pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> |  | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nome | Tipo | Descrição
-----|------|--------------
`url` | `string` | A URL da API REST para recuperar o comentário do problema.
`html_url` | `string` | A URL de HTML do comentário do problema.
`issue_url` | `string` | A URL de HTML do problema.
`id` | `integer` | O identificador exclusivo do evento.
`node_id` | `string` | A [ID de Nó Global](/graphql/guides/using-global-node-ids) do evento.
`user` | `object` | A pessoa que comentou sobre o problema.
`created_at` | `string` | A marca de tempo que indica quando o comentário foi adicionado.
`updated_at` | `string` | A marca de tempo que indica quando o comentário foi atualizado ou criado, se o comentário nunca for atualizado.
`author_association` | `string` | As permissões que o usuário tem no repositório do problema. Por exemplo, o valor será `"OWNER"` se o proprietário do repositório criar um comentário.
`body` | `string` | O texto do comentário.
`event` | `string` | O valor do evento é `"commented"`.
`actor` | `object` | A pessoa que gerou o evento.

## confirmado

Um commit foi adicionado ao branch `HEAD` da solicitação de pull.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> |  | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nome | Tipo | Descrição
-----|------|--------------
`sha` | `string` | O SHA do commit no pull request.
`node_id` | `string` | A [ID de Nó Global](/graphql/guides/using-global-node-ids) do evento.
`url` | `string` | A URL da API REST para recuperar o commit.
`html_url` | `string` | A URL de HTML do commit.
`author` | `object` | A pessoa que autorizou o commit.
`committer` | `object` | A pessoa que confirmou o commit em nome do autor.
`tree` | `object` | A árvore Git do commit.
`message` | `string` | A mensagem do commit.
`parents` | `array of objects` | Uma lista de commits principais.
`verification` | `object` | O resultado de verificação da assinatura do commit. Para obter mais informações, confira "[Objeto de verificação de assinatura](/rest/reference/git#get-a-commit)".
`event` | `string` | O valor do evento é `"committed"`.

## connected

O problema ou pull request foi vinculado a outro problema ou pull request. Para obter mais informações, confira "[Como vincular uma solicitação de pull a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

O pull request foi convertido para modo rascunho.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

O problema foi criado convertendo uma observação de um quadro de projeto em uma problema. {% data reusables.projects.disabled-projects %}

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## cross-referenced

O problema ou pull request foi referenciado a partir de outro problema ou pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> |  | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nome | Tipo | Descrição
-----|------|--------------
`actor` | `object` | A pessoa que gerou o evento.
`created_at` | `string` | A marca de tempo que indica quando a referência cruzada foi adicionada.
`updated_at` | `string` | A marca de tempo que indica quando a referência cruzada foi atualizada ou criada, se a referência cruzada nunca for atualizada.
`source` | `object` | O problema ou pull request que adicionou uma referência cruzada.
`source[type]` | `string` | Esse valor sempre será `"issue"` porque o tipo das solicitações de pull é problema. Apenas eventos de referência cruzada acionados por problemas são retornados na API de eventos da linha te tempo. Para determinar se o problema que disparou o evento é uma solicitação de pull, verifique se o objeto `source[issue][pull_request]` existe.
`source[issue]` | `object` | O objeto `issue` que adicionou a referência cruzada.
`event` | `string` | O valor do evento é `"cross-referenced"`.

## demilestoned

O problema ou pull request foi removido de um marco.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | O objeto de marco.
`milestone[title]` | `string` | O título do marco.

## deployed

O pull request foi implantado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

O ambiente de implantação do pull request foi alterado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** |  |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## desconectado

O problema ou o pull request foi desvinculado de outro problema ou pull request. Para obter mais informações, confira "[Como vincular uma solicitação de pull a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

O branch `HEAD` da solicitação de pull foi excluído.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

O branch `HEAD` da solicitação de pull foi restaurado para o último commit conhecido.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

## head_ref_force_pushed

O branch HEAD do pull request foi criado por push forçado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## rotulado

Uma etiqueta foi adicionada ao problema ou pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## bloqueado

O problema ou pull request foi bloqueado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | O motivo pelo qual uma conversa de solicitação de pull ou de problema foi bloqueada, caso uma tenha sido fornecida.

## mentioned

O `actor` foi `@mentioned` no corpo de uma solicitação de pull ou de um problema.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

Um usuário com permissões de gravação marcou um problema como duplicata de outro problema ou um pull request como duplicata de outro pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## mesclado

O pull request foi mesclado. O atributo `commit_id` é o SHA1 do commit `HEAD` que foi mesclado. O `commit_repository` é sempre o mesmo que o repositório principal.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## marcado

O problema ou pull request foi adicionado a um marco.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | O objeto de marco.
`milestone[title]` | `string` | O título do marco.

## moved_columns_in_project

O problema ou pull request foi movido entre as colunas em um quadro de projeto. {% data reusables.projects.disabled-projects %}

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | O nome da coluna da qual o problema foi movido.

## pinned

O problema foi fixado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

Um rascunho de pull request foi marcado como pronto para revisão.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## referenciado

O problema foi referenciado a partir de uma mensagem de commit. O atributo `commit_id` é o SHA1 do commit em que isso aconteceu, e o commit_repository é o local em que o commit foi enviado por push.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

O problema ou pull request foi removido de um quadro de projeto. {% data reusables.projects.disabled-projects %}

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renamed

O problema ou o título do pull request foi alterado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | Os detalhes do nome.
`rename[from]` | `string` | O nome anterior.
`rename[to]` | `string` | O novo nome.

## reaberta

O problema ou o pull request foi reaberto.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

A revisão do pull request foi ignorada.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

Foi solicitada uma revisão do pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

Uma solicitação de revisão do pull request foi removida.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## revisado

O pull request foi revisado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitações de pull</li></ul> |  | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nome | Tipo | Descrição
-----|------|--------------
`id` | `integer` | O identificador exclusivo do evento.
`node_id` | `string` | A [ID de Nó Global](/graphql/guides/using-global-node-ids) do evento.
`user` | `object` | A pessoa que comentou sobre o problema.
`body` | `string` | O texto do resumo da revisão.
`commit_id` | `string` | O SHA do último commit no pull request no momento da revisão.
`submitted_at` | `string` | A marca de tempo que indica quando a revisão foi enviada.
`state` | `string` | O estado da revisão enviada. Pode ser `commented`, `changes_requested` ou `approved`.
`html_url` | `string` | A URL de HTML da revisão.
`pull_request_url` | `string` | A URL da API REST para recuperar a o pull request.
`author_association` | `string` | As permissões que o usuário tem no repositório do problema. Por exemplo, o valor será `"OWNER"` se o proprietário do repositório criar um comentário.
`_links` | `object` | A `html_url` e a `pull_request_url`.
`event` | `string` | O valor do evento é `"reviewed"`.

## subscribed

Alguém faz a assinatura para receber notificações de um problema ou pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## transferido

O problema foi transferido para outro repositório.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## não atribuído

Um usuário foi não foi atribuído a partir do problema.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## sem etiqueta

Uma etiqueta foi removida do problema.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## desbloqueado

O problema estava desbloqueado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | O motivo pelo qual uma conversa de solicitação de pull ou de problema foi bloqueada, caso uma tenha sido fornecida.

## unmarked_as_duplicate

Um problema que um usuário havia marcado anteriormente como uma duplicata de outro problema não é considerado mais uma duplicata, ou um pull request que um usuário havia marcado anteriormente como uma duplicata de outro pull request não é mais considerado uma duplicata.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## desfixado

O problema foi desfixado.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

## assinatura cancelada

Alguém cancelou a assinatura para receber notificações de um problema ou pull request.

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> |  | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

Um proprietário da organização bloqueou um usuário da organização. Isso foi feito [por meio de um dos comentários do usuário bloqueado sobre o problema](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

### Disponibilidade

|Tipo de problema | API de eventos de problema | API de eventos da linha de tempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problemas</li><li>Solicitações de pull</li></ul> | **X** | **X** |

### Propriedades do objeto do evento

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
