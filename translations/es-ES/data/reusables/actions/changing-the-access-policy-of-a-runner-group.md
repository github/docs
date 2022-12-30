---
ms.openlocfilehash: 19ffef89b0f09653fc396f4cfc99e47e2162548b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109904"
---
{% comment %} 

Incluye siempre una admonición de seguridad por encima de este procedimiento. Se trata de una de las siguientes opciones, en función de si el contexto es ejecutores autohospedados o ejecutores más grandes.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

En el caso de los grupos de ejecutores de una empresa, puedes cambiar las organizaciones de la empresa que pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir los flujos de trabajo que puede ejecutar un grupo de ejecutores{% endif %}. En el caso de los grupos de ejecutores de una organización, puedes cambiar los repositorios de la organización que pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir los flujos de trabajo que puede ejecutar un grupo de ejecutores{% endif %}.

### Cambiar qué organizaciones o repositorios pueden acceder a un grupo de ejecutores

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. En el caso de los grupos de ejecutores de una empresa, en **Organization access**, modifique las organizaciones que pueden acceder al grupo de ejecutores. En el caso de los grupos de ejecutores de una organización, en **Respository access**, modifique los repositorios que pueden acceder al grupo de ejecutores.

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### Cambiar los flujos de trabajo a los cuales puede acceder un grupo de ejecutores
Puedes configurar un grupo de ejecutores para que ejecute ya sea flujos selectos o todos ellos. Por ejemplo, podrías utilizar este ajuste para proteger secretos almacenados en los ejecutores o estandarizar los flujos de trabajo de despliegue restringiendo un grupo de ellos para que ejecute solo un flujo de trabajo reutilizable específico. Este ajuste no se puede anular si estás configurando un grupo de ejecutores de una organización que haya compartido una empresa. {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. En **Workflow access**, seleccione el menú desplegable y haga clic en **Selected workflows**.
1. Haga clic en {% octicon "gear" aria-label="the gear icon" %}.
1. Ingresa una lista separada por comas de los flujos de trabajo que pueden acceder al grupo de ejecutores. Utiliza la ruta completa, incluyendo el nombre y propietario del repositorio. Fija el flujo de trabajo a una rama, etiqueta o SHA completo. Por ejemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Solo los jobs que se definan directamente dentro de los flujos de trabajo seleccionados tendrán acceso al grupo de ejecutores.
   
   Los grupos de ejecutores que pertenecen a la organización no pueden acceder a los flujos de trabajo de otra organización de la empresa; en vez de esto, debes crear un grupo de ejecutores que pertenezca a la empresa.

1. Haga clic en **Save**(Guardar).

{% endif %}
