---
title: Estados de confirmación
intro: La API de estado de confirmación permite que los servicios externos marquen las confirmaciones con un estado que después se refleja en las solicitudes de incorporación de cambios que implican estas confirmaciones.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882299'
---
## Acerca de la API de estados de confirmación

La API de estado de confirmación permite que los servicios externos marquen las confirmaciones con un estado `error`, `failure`, `pending` o `success`, que después se refleja en las solicitudes de incorporación de cambios que implican esas confirmaciones. Los estados también incluyen valores `description` y `target_url` opcionales, y se recomienda encarecidamente proporcionarlos, ya que hacen que los estados sean mucho más útiles en la IU de GitHub.

Como ejemplo, un uso común es para que los servicios de integración continua marquen las confirmaciones como compilaciones correctas o con error por medio de los estados.  `target_url` sería la dirección URL completa de la salida de la compilación y `description` sería el resumen general de lo que ha ocurrido con la compilación.

Los estados pueden incluir un valor `context` para indicar qué servicio proporciona ese estado. Por ejemplo, puede hacer que el servicio de integración continua inserte estados con un contexto de `ci` y que una herramienta de auditoría de seguridad inserte estados con un contexto de `security`.  Después, puede usar [Obtener el estado combinado de una referencia específica](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) para recuperar todo el estado de una confirmación.

Tenga en cuenta que el [ámbito de OAuth](/developers/apps/scopes-for-oauth-apps) `repo:status` concede acceso de destino a los estados **sin** conceder también acceso al código del repositorio, mientras que el ámbito `repo` concede permiso para el código y los estados.

Si va a desarrollar una aplicación de GitHub y quiere proporcionar información más detallada sobre un servicio externo, es posible que quiera utilizar [Checks API](/rest/reference/checks).
