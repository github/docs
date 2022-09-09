---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145117017"
---
La configuración de jobs para su ejecución en un contenedor simplifica las configuraciones de red entre el job y los contenedores de servicio. Los contenedores de Docker en el mismo puente de red definido por el usuario exponen todos los puertos entre ellos, así que no necesitas mapear ninguno de los puertos para contenedores de servicio en el alojamiento de Docker. Puedes acceder al contenedor de servicio desde el contenedor del job utilizando la etiqueta que configuras en el flujo de trabajo.
