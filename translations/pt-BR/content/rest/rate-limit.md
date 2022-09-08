---
title: Limite de taxa
intro: 'Com a API Limite de taxa, você pode verificar o status atual do limite de taxa de várias APIs REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081045'
---
## Sobre a API de Limite de Taxa

A documentação de visão geral da API REST descreve as [regras de limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting). Você pode verificar seu status de limite de taxa atual a qualquer momento usando a API de limite de taxa descrita abaixo.

### Entender o seu status de limite de taxa

A API de Pesquisa tem um [limite de taxa personalizado](/rest/reference/search#rate-limit), separado do limite de taxa que rege o restante da API REST. A API do GraphQL também tem um [limite de taxa personalizado](/graphql/overview/resource-limitations#rate-limit), separado e calculado de modo diferente dos limites de taxa na API REST.

Por esses motivos, a resposta da API do limite de taxa categoriza o seu limite de taxa. Abaixo de `resources`, você verá quatro objetos:

* O objeto `core` fornece o status de limite de taxa para todos os recursos não relacionados à pesquisa na API REST.

* O objeto `search` fornece o status de limite de taxa para a [API de Pesquisa](/rest/reference/search).

* O objeto `graphql` fornece o status de limite de taxa para a [API do GraphQL](/graphql).

* O objeto `integration_manifest` fornece o status de limite de taxa para o ponto de extremidade de [conversão de código do Manifesto do Aplicativo do GitHub](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Para obter mais informações sobre os cabeçalhos e os valores na resposta do limite de taxa, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".
