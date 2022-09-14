---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917065"
---
Al usar la opción **Fusionar mediante cambio de base y combinar** en una solicitud de incorporación de cambios, es importante tener en cuenta que las confirmaciones de la rama principal se agregan a la rama base sin confirmar la comprobación de la firma. Al usar esta opción, {% data variables.product.prodname_dotcom %} crea una confirmación modificada con los datos y el contenido de la confirmación original. Esto significa que {% data variables.product.prodname_dotcom %} no creó realmente esta confirmación y, por tanto, no puede firmarla como un usuario genérico del sistema. {% data variables.product.prodname_dotcom %} no tiene acceso a las claves de firma privada del confirmador, por lo que no puede firmar la confirmación en nombre del usuario.

Una solución para esta incidencia consiste en fusionar mediante cambio de base y combinar localmente y, luego, insertar los cambios en la rama base de la solicitud de incorporación de cambios.
