---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092047"
---
Ejecuta el comando `mvn --batch-mode deploy` para publicar en el repositorio `ossrh`. La variable de entorno `MAVEN_USERNAME` se establecerá con el contenido del secreto `OSSRH_USERNAME` y la variable de entorno `MAVEN_PASSWORD` se establecerá con el contenido del secreto `OSSRH_TOKEN`.
