---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069514"
---
El flujo de trabajo configura un contenedor de servicios con la etiqueta `redis`. Todos los servicios se deben ejecutar en un contenedor, por lo que cada servicio requiere que especifiques la `image` del mismo. En este ejemplo se utiliza la imagen de contenedor `redis`, y se incluyen opciones de verificación de estado para garantizar que el servicio se está ejecutando. Para obtener más información, consulta la [imagen de redis](https://hub.docker.com/_/redis) en Docker Hub.
