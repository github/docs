---
ms.openlocfilehash: 62e8c6a4133d8402083e84402453b5fb6820bac3
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764198"
---
Los ejecutores se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para eliminar el grupo, haga clic en **Remove group**.
3. Revise las indicaciones de confirmación y haga clic en **Remove this runner group**. Los ejecutores que aún estén en este grupo se moverán automáticamente al grupo predeterminado, donde heredarán los permisos de acceso asignados a ese grupo.

{% endif %}