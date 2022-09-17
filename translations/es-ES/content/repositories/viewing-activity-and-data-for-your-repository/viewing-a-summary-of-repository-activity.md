---
title: Ver un resumen de la actividad de un repositorio
intro: 'Puedes ver un resumen de la solicitud de cambios, propuesta y actividad de confirmación de un repositorio.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882307'
---
## Acerca de Pulse

Puedes ver un resumen de la actividad de un repositorio a través de Pulse. Pulse incluye una lista de solicitudes de incorporación de cambios abiertas y combinadas, incidencias abiertas y cerradas, y un gráfico que muestra la actividad de confirmación de los 15 usuarios principales que han confirmado la rama predeterminada del proyecto en el [período de tiempo](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) seleccionado.

Los coautores de confirmación están incluidos en el resumen de actividad de confirmación si sus confirmaciones fueron fusionadas dentro de la rama por defecto del repositorio y están en los 15 usuarios principales que contribuyeron en la mayoría de las confirmaciones.

## Acceder a Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por tiempo

Por defecto, Pulse muestra los últimos siete días de actividad del repositorio. Para elegir un período de tiempo diferente, haga clic en la lista desplegable **Period** (Período) en la esquina superior derecha de la información general de Pulse.

![Filtrar la actividad de Pulse por tiempo](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
