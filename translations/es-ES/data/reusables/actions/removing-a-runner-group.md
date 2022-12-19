---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110116"
---
Los ejecutores se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para eliminar el grupo, haga clic en **Remove group**.
3. Revise las indicaciones de confirmación y haga clic en **Remove this runner group**. Los ejecutores que aún estén en este grupo se moverán automáticamente al grupo predeterminado, donde heredarán los permisos de acceso asignados a ese grupo.

{% endif %}
