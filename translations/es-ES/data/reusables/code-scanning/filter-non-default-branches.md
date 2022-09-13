---
ms.openlocfilehash: e628886d349bf314fa6b9a91ae8652731dc5979b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147061022"
---
Tenga en cuenta que si ha filtrado las alertas en una rama no predeterminada, pero las mismas alertas existen en la rama predeterminada, en la página de alertas de cualquier alerta se seguirá reflejando el estado de la alerta en la rama predeterminada, incluso si ese estado entra en conflicto con el de una rama no predeterminada. Por ejemplo, una alerta que aparece en la lista "Abrir" en el resumen de alertas para `branch-x` podría mostrar un estado de "Corregido" en la página de alertas, si ya se ha corregido en la rama predeterminada. Puede ver el estado de la alerta de la rama filtrada en la sección **Ramas afectadas** del lado derecho de la página de alertas.
