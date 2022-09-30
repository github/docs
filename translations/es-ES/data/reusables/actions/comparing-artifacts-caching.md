---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145117026"
---
## Comparar artefactos y caché de dependencias

Los artefactos y el almacenamiento en caché son similares porque brindan la posibilidad de almacenar archivos en {% data variables.product.prodname_dotcom %}, pero cada característica ofrece diferentes casos de uso y no se puede usar indistintamente.

- Usa el almacenamiento en caché cuando quieras reutilizar archivos que no cambian a menudo entre trabajos o ejecuciones de flujo de trabajo, como las dependencias de compilación de un sistema de administración de paquetes.
- Usa artefactos cuando quieras guardar los archivos que genera un trabajo para verlos una vez que ha finalizado la ejecución de un flujo de trabajo (por ejemplo, archivos binarios compilados o registros de compilación). 
