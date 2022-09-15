---
title: Eventos
intro: 'A API de eventos é uma API somente leitura para os eventos de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064303'
---
Esses eventos alimentam os vários fluxos de atividades no site.

A API de eventos pode retornar diferentes tipos de eventos acionados por atividade em {% data variables.product.product_name %}. Para obter mais informações sobre os eventos específicos que você pode receber da API de Eventos, confira "[Tipos de eventos do {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)". Uma API de eventos para problemas de repositório também está disponível. Para obter mais informações, confira a "[API de Eventos de Problemas](/rest/reference/issues#events)".

Os eventos são otimizados para sondagem a com o cabeçalho "ETag". Se nenhum novo evento for iniciado, você verá uma resposta "304 Not Modified" e seu limite de taxa atual não será alterado. Há também um cabeçalho "X-Poll-Interval" que especifica quantas vezes (em segundos) você pode fazer uma sondagem. Em tempos de alta carga do servidor, o tempo pode aumentar. Obedeça o cabeçalho.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

Apenas eventos criados nos últimos 90 dias serão incluídos nas linhas de tempo. Eventos mais antigos que 90 dias não serão incluídos (mesmo que o número total de eventos na linha do tempo seja inferior a 300).
