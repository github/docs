---
title: Eventos da linha de tempo
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: A API de Eventos da Linha do Tempo pode retornar diferentes tipos de eventos acionados pela atividade da linha do tempo em problemas e pull requests.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a9872cc5b4013a83f57c84753a19af6c9207ecde
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061871'
---
## Sobre a API de eventos da Linha do Tempo

A API de Eventos da Linha do Tempo pode retornar diferentes tipos de eventos acionados pela atividade da linha do tempo em problemas e pull requests. Para obter mais informações sobre os eventos específicos que você pode receber da API de Eventos de Problemas, confira "[Tipos de eventos de problemas](/developers/webhooks-and-events/issue-event-types)". For more information about the specific events that you can receive from the Issue Events API, see "<a href="/developers/webhooks-and-events/issue-event-types">Issue event types</a>." Para obter mais informações, confira a "[API de Eventos do GitHub](/developers/webhooks-and-events/github-event-types)".

Você pode usar esta API para exibir informações sobre problemas e pull request ou determinar quem deve ser notificado sobre os comentários de problema.

{% data reusables.pull_requests.issues-pr-shared-api %}
