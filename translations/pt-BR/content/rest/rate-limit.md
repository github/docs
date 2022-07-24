---
title: Limite de taxa
intro: 'Com a API de limite de taxa, você pode verificar o status atual da taxa limite de várias APIs REST.'
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
---

## Sobre a API de limite de taxa

A documentação geral da API REST descreve as [regras de limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting). Você pode verificar seu status de limite de taxa atual a qualquer momento usando a API de limite de taxa descrita abaixo.

### Entender o seu status de limite de taxa

A API de pesquisa tem um [limite de taxa personalizado](/rest/reference/search#rate-limit), separado do limite de taxa que rege o restante da API REST. A API do GraphQL também tem um [limite de taxa personalizado](/graphql/overview/resource-limitations#rate-limit), que é separado e calculado de forma diferente dos limites de taxa na API REST.

Por esses motivos, a resposta da API do limite de taxa categoriza o seu limite de taxa. Em `recursos`, você verá quatro objetos:

* O objeto `principal` fornece o status do limite de taxa para todos os recursos não relacionados à pesquisa na API REST.

* O objeto `de pesquisa` fornece o status do limite de taxa para a [API de pesquisa](/rest/reference/search).

* O objeto `graphql` fornece o status do limite de taxa para a [API do GraphQL](/graphql).

* O objeto `integration_manifest` fornece o status do limite de taxa para o ponto de extremidade [Conversão do código de manifesto do aplicativo GitHub](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Para obter mais informações sobre os cabeçalhos e valores na resposta de limite de taxa, consulte "[Recursos na API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".
