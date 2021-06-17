---
title: Limite de tasa
redirect_from:
  - /v3/rate_limit
  - /v3/rate-limit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

La documentación general de la API de REST describe las [reglas de los límites de tasa](/rest/overview/resources-in-the-rest-api#rate-limiting). Puedes revisar tu estado actual de límite de tasa en cualquier momento utilizando la API de Límites de Tasa que se describe a continuación.

### Entender el estado de tu límite de tasa

La API de Búsqueda tiene un [límite de tasa personalizado](/rest/reference/search#rate-limit) separado de aquél que rige el resto de la API de REST. La API de GraphQL también tiene un [límite de tasa personalizado](/graphql/overview/resource-limitations#rate-limit) que está separado y se calcula diferente que los límites de tasa de la API de REST.

Es por esto que la respuesta de la API de Límites de Tasa categoriza tu límite de tasa. Debajo de `resources`, verás cuatro objetos:

* El objeto `core` proporciona tu estado de límite de tasa para todos los recursos no relacionados a búsquedas en la API de REST.

* El objeto `search` proporciona el estado de tu límite de tasa para la [API de Búsqueda](/rest/reference/search).

* El objeto `graphql` proporciona el estado de tu límite de tasa para la [API de GraphQL](/graphql).

* El objeto `integration_manifest` proporciona el estado de tu límite de tasa para la terminal [Conversión de código para el Manifiesto de GitHub App](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Para obtener más información sobre los valores y encabezados en la respuesta de límite de tasa, consulta la sección "[Limitar las tasas](/rest#rate-limiting)".

{% include rest_operations_at_current_path %}
