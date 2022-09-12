---
ms.openlocfilehash: cdfdf5507dd2c7efa14e7285cc2b18f163d5355d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062421"
---
Ejecuta el comando `mvn --batch-mode deploy` para publicar en {% data variables.product.prodname_registry %}. La variable de entorno `GITHUB_TOKEN` se establecerá con el contenido del secreto `GITHUB_TOKEN`. La clave `permissions` especifica el acceso concedido a `GITHUB_TOKEN`.
