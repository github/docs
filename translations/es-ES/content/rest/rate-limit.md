---
title: Límite de frecuencia
intro: Usa la API de REST para comprobar el estado actual del límite de frecuencia.
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
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193417'
---
## Acerca de los límites de frecuencia

Puedes comprobar el estado actual del límite de frecuencia en cualquier momento. Para obtener más información, consulta "[Recursos en la API de REST](/rest/overview/resources-in-the-rest-api#rate-limiting)". 

La API de REST para buscar elementos tiene un límite de frecuencia personalizado que es independiente del límite de frecuencia que rige los demás puntos de conexión de la API de REST. Para obtener más información, consulta "[Búsqueda](/rest/search)". GraphQL API también tiene un límite de frecuencia personalizado que es independiente y se calcula de forma diferente a los límites de frecuencia de la API REST. Para obtener más información, consulta "[Límites de los recursos](/graphql/overview/resource-limitations#rate-limit)". Es por esto que la respuesta de la API categoriza tu límite de frecuencia. En `resources`, verás objetos relacionados con diferentes categorías:

* El objeto `core` proporciona el estado de límite de frecuencia para todos los recursos que no están relacionados con la búsqueda en la API REST.

* El objeto `search` proporciona el estado de límite de frecuencia para la API de REST de búsqueda.

* El objeto `graphql` proporciona el estado de límite de frecuencia para GraphQL API.

* El objeto `integration_manifest` proporciona el estado de límite de frecuencia para la operación `POST /app-manifests/{code}/conversions`. Para más información, consulta "[Creación de una aplicación de GitHub a partir de un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)".

Para más información sobre los encabezados y los valores de la respuesta de límite de frecuencia, vea "[Recursos en la API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)".
