---
title: Limite de taxa
intro: Use a API REST para verificar seu status de limite de taxa atual.
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193148'
---
## Sobre limites de taxa

Você pode verificar seu status de limite de taxa atual a qualquer momento. Para obter mais informações sobre regras de limite de taxa, confira "[Recursos na API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)". 

A API REST para pesquisar itens tem um limite de taxa personalizado separado do limite de taxa que rege os outros pontos de extremidade da API REST. Para obter mais informações, confira "[Pesquisar](/rest/search)". A API do GraphQL também tem um limite de taxa personalizado, separado e calculado de modo diferente dos limites de taxa na API REST. Para obter mais informações, confira "[Limitações de recursos](/graphql/overview/resource-limitations#rate-limit)". Por esses motivos, a resposta da API categoriza seu limite de taxa. Em `resources`, você verá objetos relacionados a diferentes categorias:

* O objeto `core` fornece o status de limite de taxa para todos os recursos não relacionados à pesquisa na API REST.

* O objeto `search` fornece seu status de limite de taxa para a API REST para pesquisa.

* O objeto `graphql` fornece o status de limite de taxa para a API do GraphQL.

* O objeto `integration_manifest` fornece o status de limite de taxa para a operação do `POST /app-manifests/{code}/conversions`. Para obter mais informações, confira "[Como criar um Aplicativo do GitHub de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)".

Para obter mais informações sobre os cabeçalhos e os valores na resposta do limite de taxa, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".
