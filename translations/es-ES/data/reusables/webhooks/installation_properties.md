---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091477"
---
Clave | Tipo | Descripción
----|------|------------
`action` | `string` | La acción que se ha realizado. Puede ser una de las siguientes:<ul><li>`created`: alguien instala una {% data variables.product.prodname_github_app %}.</li><li>`deleted`: alguien desinstala una {% data variables.product.prodname_github_app %}</li><li>`suspend`: alguien suspende la instalación de una {% data variables.product.prodname_github_app %}.</li><li>`unsuspend`: alguien anula la suspensión de la instalación de una {% data variables.product.prodname_github_app %}.</li><li>`new_permissions_accepted`: alguien acepta nuevos permisos para la instalación de una {% data variables.product.prodname_github_app %}. Cuando un propietario de una {% data variables.product.prodname_github_app %} solcita permisos nuevos, la persona que instaló dicha {% data variables.product.prodname_github_app %} debe aceptar la solicitud de estos permisos nuevos. </li></ul>
`repositories` | `array` | Un areglo de objetos de repositorio al que puede acceder la instalación.
