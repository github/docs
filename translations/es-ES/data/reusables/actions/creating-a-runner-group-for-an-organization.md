---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110064"
---
{% comment %} 

Incluye siempre una admonición de seguridad por encima de este procedimiento. Se trata de una de las siguientes opciones, en función de si el contexto es ejecutores autohospedados o ejecutores más grandes.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Todas las organizaciones tienen un solo grupo predeterminado de ejecutores. Las organizaciones dentro de una cuenta empresarial pueden crear grupos adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores. Para obtener información sobre cómo crear un grupo de ejecutores con la API de REST, consulta "[Grupos de ejecutores autohospedados](/rest/reference/actions#self-hosted-runner-groups)".

Los ejecutores se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser miembros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir una directiva que defina qué repositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} tienen acceso al grupo de ejecutores.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. En la sección "Runner groups", haga clic en **New runner group**.
1. Ingresa un nombre para tu grupo ejecutor.
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Los grupos de ejecutores propiedad de la organización no pueden acceder a los flujos de trabajo desde una organización distinta en la empresa; en lugar de eso, debes crear un grupo de ejecutores propiedad de la empresa.{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. En {% ifversion ghes or ghae %}"Ejecutores"{% endif %}, haz clic en **Agregar nuevo** y, luego, en **Nuevo grupo**.

    ![Agregar grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   Puedes configurar un grupo de ejecutores para que sea accesible a una lista específica de repositorios o a todos ellos en la organización.{% ifversion ghec or ghes %} Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo ejecutor. Pero esto se puede anular. Esta configuración no puede anularse si se configura un grupo ejecutor de la organización que haya compartido una empresa.{% endif %}
   
   ![Agregar opciones para un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Haga clic en **Save group** para crear el grupo y aplicar la directiva.
{% endif %}
