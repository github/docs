---
title: Eventos de escala de tiempo
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: Timeline events API puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad de la escala de tiempo en los informes de problemas y solicitudes de incorporación de cambios.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061885'
---
## Acerca de Timeline events API

Timeline events API puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad de la escala de tiempo en los informes de problemas y solicitudes de incorporación de cambios. Para más información sobre los eventos específicos que puede recibir de Issue Events API, vea "[Tipos de eventos de incidencia](/developers/webhooks-and-events/issue-event-types)". Para obtener más información acerca de los eventos específicos que puedes recibir de la API de Eventos para Solicitudes de Extracción, consulta la sección "<a href="/developers/webhooks-and-events/issue-event-types">Tipos de evento de las Solicitudes de Extracción</a>". Para más información, vea "[GitHub Events API](/developers/webhooks-and-events/github-event-types)".

Puedes utilizar esta API para mostrar información sobre los informes de problemas y solicitudes de extracción o para determinar a quién debería notificársele sobre los comentarios en los informes de problemas.

{% data reusables.pull_requests.issues-pr-shared-api %}
