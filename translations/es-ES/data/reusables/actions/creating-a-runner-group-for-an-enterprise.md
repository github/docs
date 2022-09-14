---
ms.openlocfilehash: f49d42aa3fafbdbde2a650f84bc3b48a61e26182
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764242"
---
{% comment %} 

Incluye siempre una admonición de seguridad por encima de este procedimiento. Se trata de una de las siguientes opciones, en función de si el contexto es ejecutores autohospedados o ejecutores más grandes.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Las empresas pueden agregar sus ejecutores a grupos para su administración de accesos. Las empresas pueden crear grupos de ejecutores que son accesibles para organizaciones específicas en la cuenta empresarial{% ifversion restrict-groups-to-workflows %} o para flujos de trabajo específicos{% endif %}. Los propietarios de la organización pueden entonces asignar directivas de acceso adicionales y detalladas para los repositorios{% ifversion restrict-groups-to-workflows %} o flujos de trabajo{% endif %} a los grupos de ejecutores de la empresa. Para obtener más información sobre cómo crear un grupo de ejecutores con la API de REST, consulte los puntos de conexión de la empresa en la [API de REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Los ejecutores se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser miembros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Para elegir una directiva para el acceso de la organización, seleccione la lista desplegable **Organization access** y haga clic en una directiva. Puedes configurar un grupo de ejecutores para que sea accesible a una lista de organizaciones específica o a todas las organizaciones en la empresa.{% ifversion ghes %} Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo, pero esto se puede anular.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Opciones para agregar grupos de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png) {%- elsif ghae %}

   ![Opciones para agregar grupos de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png) {%- endif %} {% data reusables.actions.runner-group-assign-policy-workflow %}
1. Haga clic en **Save group** para crear el grupo y aplicar la directiva.

