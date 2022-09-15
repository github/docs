---
title: Estadísticas del repositorio
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'La API de estadísticas del repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar los diferentes tipos de actividad del repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066134'
---
## Acerca de la API de estadísticas del repositorio

La API de estadísticas del repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar los diferentes tipos de actividad del repositorio.

### Unas palabras sobre el almacenamiento en caché

El calcular las estadísticas del repositorio es una operación costosa, así que intentamos devolver los datos almacenados en caché cuando nos es posible.  Si los datos no se han almacenado en caché cuando consultas la estadística de un repositorio, recibirás una respuesta `202`; también se dispara un trabajo en segundo plano para comenzar a compilar estas estadísticas. Permite que el trabajo se complete, y luego emite la solicitud nuevamente. Si el trabajo ya terminó, esa solicitud recibirá una respuesta `200` con la estadística en el cuerpo de la respuesta.

El SHA de la rama predeterminada del repositorio guarda en caché las estadísticas del repositorio; el subir información a la rama predeterminada restablece el caché de de las estadísticas.

### Las estadísticas excluyen algunos tipos de confirmaciones

Las estadísticas expuestas por la API coinciden con las estadísticas que muestran los [distintos gráficos del repositorio](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

En resumen:
- Todas las estadísticas excluyen las confirmaciones de fusión.
- Las estadísticas del colaborador también excluyen a las confirmaciones vacías.
