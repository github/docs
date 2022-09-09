---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069527"
---
El flujo de trabajo configura un contenedor de servicios con la etiqueta `postgres`. Todos los servicios se deben ejecutar en un contenedor, por lo que cada servicio requiere que especifiques la `image` del mismo. Este ejemplo utiliza la imagen del contenedor `postgres`, proporciona la contraseña predeterminada de PostgreSQL, e incluye las opciones de revisión de estado para garantizar que el servicio se está ejecutando. Para obtener más información, consulta la [imagen de postgres](https://hub.docker.com/_/postgres) en Docker Hub.
