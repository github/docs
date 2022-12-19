---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110117"
---
Si no especificas un grupo de ejecutores durante el proceso de registro, tus nuevos ejecutores se asignarán automáticamente al grupo predeterminado y después se moverán a otro grupo.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
2. Seleccione la lista desplegable **Runner group**.
3. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. En la sección {% ifversion ghes or ghae %}"Grupos de ejecutores"{% endif %} de la página de configuración, ubica el grupo actual del ejecutor que quieres mover y expande la lista de sus miembros.
    ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Marque la casilla situada junto al ejecutor autohospedado y, a continuación, haga clic en **Move to group** para ver los destinos disponibles.
    ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para eliminar el ejecutor, haz clic en el grupo destino.
    ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
