---
ms.openlocfilehash: e628886d349bf314fa6b9a91ae8652731dc5979b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061022"
---
Tenga en cuenta que si ha filtrado las alertas en una rama no predeterminada, pero las mismas alertas existen en la rama predeterminada, en la página de alertas de cualquier alerta se seguirá reflejando el estado de la alerta en la rama predeterminada, incluso si ese estado entra en conflicto con el de una rama no predeterminada. Por ejemplo, una alerta que aparece en la lista "Abrir" en el resumen de alertas para `branch-x` podría mostrar un estado de "Corregido" en la página de alertas, si ya se ha corregido en la rama predeterminada. Puede ver el estado de la alerta de la rama filtrada en la sección **Ramas afectadas** del lado derecho de la página de alertas.
