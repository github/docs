---
title: Marcar con una estrella
intro: Starring API permite marcar un repositorio como favorito.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064254'
---
## Acerca de Starring API

Starring API permite marcar un repositorio como favorito. Las estrellas se muestran junto a los repositorios para denotar un nivel aproximado de interés. Las estrellas no tienen efecto alguno en las notificaciones o en los canales de actividad. Para obtener más información, consulta "[Guardar repositorios con estrellas](/get-started/exploring-projects-on-github/saving-repositories-with-stars)".

### Marcar con estrella vs. Observar

En agosto de 2012, [cambiamos el funcionamiento de la inspección](https://github.com/blog/1204-notifications-stars) en {% data variables.product.prodname_dotcom %}. Es posible que muchas aplicaciones cliente de la API usen los puntos de conexión de "inspección" originales para acceder a estos datos. Ahora puede comenzar a usar los puntos de conexión de "estrella" como sustitución (como se describe más adelante). Para más información, vea la [publicación Cambio de Watcher API](https://developer.github.com/changes/2012-09-05-watcher-api/) y la "[API de inspección de repositorios](/rest/reference/activity#watching)".

### Tipos de medio personalizados para marcar con estrella

Hay un tipo de medios personalizado compatible para la API de REST para Marcar con estrella. Cuando se usan este tipo de medios personalizados, recibirá una respuesta con la propiedad de marca de tiempo `starred_at` que indica la hora a la que se ha creado la estrella. La respuesta también tiene una segunda propiedad que incluye el recurso que se devuelve cuando no se incluye el tipo de medios personalizado. La propiedad que contiene el recurso será `user` o `repo`.

    application/vnd.github.star+json

Para más información sobre los tipos de medios, vea "[Tipos de medios personalizados](/rest/overview/media-types)".
