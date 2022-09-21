---
ms.openlocfilehash: c5f96449d1a353d5be663dafe0b2f0507befbd59
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764119"
---
Si no especificas un grupo de ejecutores durante el proceso de registro, tus nuevos ejecutores se asignarán automáticamente al grupo predeterminado y después se moverán a otro grupo.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
2. Seleccione la lista desplegable **Runner group**.
3. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% elsif ghae or ghes < 3.4 %}
1. En la sección {% ifversion ghes or ghae %}"Grupos de ejecutores"{% endif %} de la página de configuración, ubica el grupo actual del ejecutor que quieres mover y expande la lista de sus miembros.
    ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Marque la casilla situada junto al ejecutor autohospedado y, a continuación, haga clic en **Move to group** para ver los destinos disponibles.
    ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para eliminar el ejecutor, haz clic en el grupo destino.
    ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}