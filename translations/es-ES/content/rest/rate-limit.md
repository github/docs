---
title: Limite de tasa
intro: 'With the Rate limit API, you can check the current rate limit status of various REST APIs.'
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

## About the Rate limit API

La documentación general de la API de REST describe las [reglas de los límites de tasa](/rest/overview/resources-in-the-rest-api#rate-limiting). Puedes revisar tu estado actual de límite de tasa en cualquier momento utilizando la API de Límites de Tasa que se describe a continuación.

### Entender el estado de tu límite de tasa

La API de Búsqueda tiene un [límite de tasa personalizado](/rest/reference/search#rate-limit) separado de aquél que rige el resto de la API de REST. La API de GraphQL también tiene un [límite de tasa personalizado]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations#rate-limit) que está separado y se calcula diferente que los límites de tasa de la API de REST.

Es por esto que la respuesta de la API de Límites de Tasa categoriza tu límite de tasa. Debajo de `resources`, verás cuatro objetos:

* El objeto `core` proporciona tu estado de límite de tasa para todos los recursos no relacionados a búsquedas en la API de REST.

* El objeto `search` proporciona el estado de tu límite de tasa para la [API de Búsqueda](/rest/reference/search).

* El objeto `graphql` proporciona el estado de tu límite de tasa para la [API de GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql).

* El objeto `integration_manifest` proporciona el estado de tu límite de tasa para la terminal [Conversión de código para el Manifiesto de GitHub App](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Para obtener más información sobre los encabezados y valores en la respuesta de límite de tasa, consulta la sección "[Recursos en la API de REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".
