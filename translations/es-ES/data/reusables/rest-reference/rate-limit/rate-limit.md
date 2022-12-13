---
ms.openlocfilehash: d1413d882372224a865c9aced0bf3b5115800d7b
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141517455"
---
En la documentación de información general de la API REST se describen las [reglas de límite de frecuencia](/rest/overview/resources-in-the-rest-api#rate-limiting). Puedes revisar tu estado actual de límite de tasa en cualquier momento utilizando la API de Límites de Tasa que se describe a continuación.

### <a name="understanding-your-rate-limit-status"></a>Entender el estado de tu límite de tasa

Search API tiene un [límite de frecuencia personalizado](/rest/reference/search#rate-limit) independiente del que controla el resto de la API REST. GraphQL API también tiene un [límite de frecuencia personalizado]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations#rate-limit) que es independiente y se calcula de forma diferente a los límites de frecuencia de la API REST.

Es por esto que la respuesta de la API de Límites de Tasa categoriza tu límite de tasa. En `resources`, verá cuatro objetos:

* El objeto `core` proporciona el estado de límite de frecuencia para todos los recursos que no están relacionados con la búsqueda en la API REST.

* El objeto `search` proporciona el estado de límite de frecuencia para [Search API](/rest/reference/search).

* El objeto `graphql` proporciona el estado de límite de frecuencia para [GraphQL API]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql).

* El objeto `integration_manifest` proporciona el estado de límite de frecuencia para el punto de conexión de [conversión de código del manifiesto de aplicación de GitHub](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Para más información sobre los encabezados y los valores de la respuesta de límite de frecuencia, vea "[Recursos en la API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".