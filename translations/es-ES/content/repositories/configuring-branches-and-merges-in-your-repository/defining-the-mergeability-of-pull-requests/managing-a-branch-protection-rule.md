---
title: Administrar una regla de protección de rama
intro: 'Puede crear una regla de protección de rama a fin de aplicar determinados flujos de trabajo para una o varias ramas, como exigir una revisión de aprobación o pasar comprobaciones de estado para todas las solicitudes de incorporación de cambios combinadas en la rama protegida.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614179'
---
## Acerca de las reglas de protección de rama

{% data reusables.repositories.branch-rules-example %}

Puede crear una regla para todas las ramas actuales y futuras de la repositorio con la sintaxis de comodín `*`. Como {% data variables.product.company_short %} usa la marca `File::FNM_PATHNAME` para la sintaxis `File.fnmatch`, el carácter comodín no coincide con los separadores de directorios (`/`). Por ejemplo, `qa/*` coincidirá con todas las ramas que comienzan por `qa/` y que contienen una sola barra diagonal. Puede incluir varias barras diagonales con `qa/**/*` y puede ampliar la cadena `qa` con `qa**/**/*` para que la regla sea más inclusiva. Para más información sobre las opciones de sintaxis para las reglas de rama, vea la [documentación de fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Si un repositorio tiene varias reglas de rama protegida que afectan las mismas ramas, las reglas que incluyen el nombre de una rama específica tienen la mayor prioridad. Si hay más de una regla de rama protegida que hace referencia al mismo nombre de rama específico, entonces la regla de rama creada primera tendrá la prioridad más alta.

Las reglas de rama protegida que mencionen un carácter especial, como `*`, `?` o `]`, se aplican en el orden en el que se hayan creado, por lo que las reglas más antiguas con estos caracteres tienen una prioridad más alta.

Para crear una excepción a una regla de rama existente, puedes crear una nueva regla de protección de rama que sea una prioridad superior, como una regla de rama para un nombre de rama específico.

Para más información sobre cada una de las opciones de protección de rama disponibles, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

## Crear una regla de protección de rama

Cuando creas una regla de rama, la rama que especifiques no tendrá que en el repositorio aún.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Opcionalmente, habilita las solicitudes de cambios requeridas.
   - En "Proteger las ramas coincidentes", seleccione **Exigir una solicitud de incorporación de cambios antes de la combinación**.
     ![Casilla para restringir la revisión de la solicitud de incorporación de cambios](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Opcionalmente, para exigir aprobaciones antes de que se pueda combinar una solicitud de incorporación de cambios, seleccione **Exigir aprobaciones**, haga clic en el menú desplegable **Número obligatorio de aprobaciones antes de la combinación** y, después, seleccione la cantidad de revisiones de aprobación que le gustaría exigir en la rama.
     ![Menú desplegable para seleccionar el número de aprobaciones de revisión necesarias](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. Opcionalmente, habilita las revisiones requeridas para las solicitudes de cambios.
   - En "Proteger las ramas coincidentes", seleccione **Exigir revisiones de la solicitud de incorporación de cambios antes de la combinación**.
     ![Casilla para restringir la revisión de la solicitud de incorporación de cambios](/assets/images/help/repository/PR-reviews-required.png)
   - Haga clic en el menú desplegable **Revisiones de aprobación necesarias** y, después, seleccione el número de revisiones de aprobación que quiera exigir en la rama. 
     ![Menú desplegable para seleccionar el número de aprobaciones de revisión necesarias](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - Opcionalmente, para descartar una revisión de aprobación de la solicitud de incorporación de cambios cuando una confirmación que modifica el código se inserta en la rama, seleccione **Descartar las aprobaciones de solicitud de incorporación de cambios obsoletas cuando se inserten confirmaciones nuevas**.
     ![Casilla para descartar las aprobaciones de solicitud de incorporación de cambios obsoletas cuando se inserten confirmaciones](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Opcionalmente, para exigir una revisión de un propietario del código cuando la solicitud de incorporación de cambios afecte a código que tenga un propietario designado, seleccione **Exigir la revisión de los propietarios del código**. Para más información, vea "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".
     ![Exigir la revisión de los propietarios del código](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Opcionalmente, para permitir que actores concretos inserten código en la rama sin crear solicitudes de incorporación de cambios cuando es obligatorio, selecciona **Permitir que actores específicos omitan las solicitudes de incorporación de cambios necesarias**. Posteriormente, busca y selecciona los actores a quienes se les debería permitir omitir la creación de una solicitud de incorporación de cambios.
     ![Casilla para permitir que actores específicos omitan los requisitos de la solicitud de incorporación de cambios]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - Opcionalmente, si el repositorio forma parte de una organización, seleccione **Restringir quién puede descartar las revisiones de una solicitud de incorporación de cambios**. Posteriormente, busca y selecciona los actores a quienes se les permitirá descartar las revisiones de solicitudes de incorporación de cambios. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
     ![Casilla para restringir quién puede descartar las revisiones de la solicitud de incorporación de cambios]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. Opcionalmente, habilita las verificaciones de estado requeridas. Para más información, vea "[Acerca de las comprobaciones de estado](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".
   - Seleccione **Exigir que se superen comprobaciones de estado antes de la combinación**.
     ![Opción de comprobaciones de estado obligatorias](/assets/images/help/repository/required-status-checks.png)
   - Opcionalmente, para garantizar que las solicitudes de incorporación de cambios se prueban con el código más reciente en la rama protegida, seleccione **Exigir que las ramas estén actualizadas antes de la combinación**.
     ![Casilla de comprobación de estado estricta o flexible](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Busca las verificaciones de estado seleccionando aquellas que quieras requerir.
     ![Interfaz de búsqueda para las verificaciones de estado disponibles con una lista de verificaciones requeridas](/assets/images/help/repository/required-statuses-list.png)
1. Opcionalmente, seleccione **Exigir la resolución de la conversación antes de la combinación**.
  ![Opción de requerir la resolución de conversaciones antes de fusionar](/assets/images/help/repository/require-conversation-resolution.png)
1. Opcionalmente, seleccione **Exigir confirmaciones con firma**.
  ![Opción para exigir confirmaciones con firma](/assets/images/help/repository/require-signed-commits.png)
1. Opcionalmente, seleccione **Exigir historial lineal**.
  ![Opción para exigir el historial lineal](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. Opcionalmente, para combinar las solicitudes de incorporación de cambios con una cola de fusión mediante combinación, seleccione **Exigir cola de fusión mediante combinación**. {% data reusables.pull_requests.merge-queue-references %} ![Opción para exigir cola de fusión mediante combinación](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **Sugerencia:** La característica de cola de fusión mediante combinación de solicitudes de incorporación de cambios se encuentra actualmente en versión beta público y está sujeta a cambios. Los propietarios de las organizaciones pueden solicitar acceso anticipado a la versión beta si se unen a la [lista de espera](https://github.com/features/merge-queue/signup).

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. Opcionalmente, para elegir en qué entornos se deben implementar correctamente los cambios antes de la combinación, seleccione **Exigir que las implementaciones se realicen correctamente antes de la combinación** y, después, seleccione los entornos.
   ![Opción para exigir que las implementación se realice correctamente](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. Opcionalmente, selecciona {% ifversion bypass-branch-protections %}**No permitir omitir la configuración anterior**.
![Casilla para no permitir omitir la configuración anterior](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**Aplicar las reglas anteriores a los administradores**.
![Casilla de verificación para aplicar las reglas anteriores a los administradores](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. Opcionalmente,{% ifversion fpt or ghec %} si el repositorio pertenece a una organización que usa {% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %},{% endif %} habilite las restricciones de rama.
   - Seleccione **Restringir quién puede realizar inserciones en a las ramas coincidentes**.
     ![Casilla de restricción de rama](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Opcionalmente, para restringir también la creación de ramas coincidentes, selecciona **Restringir inserciones que creen ramas coincidentes**.
     ![Casilla de restricción de creación de rama](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Busca y selecciona las personas, equipos o aplicaciones que tendrán permiso para subir información a la rama protegida o crear una rama coincidente.
     ![Búsqueda de restricciones de rama]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. Opcionalmente, en "Reglas que se aplican a todos, incluidos los administradores", seleccione **Permitir inserciones forzadas**.
  ![Opción para permitir inserciones forzadas](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} Después, elija quién puede forzar la inserción en la rama.
    - Seleccione **Todos** para permitir que todos los que tengan al menos permisos de escritura en el repositorio realicen inserciones forzadas en la rama, incluidos los que tengan permisos administrativos.
    - Selecciona **Especificar quién puede realizar inserciones forzadas** para permitir que solo actores concretos realicen inserciones forzadas en la rama. A continuación, busca y selecciona esos actores.
      ![Captura de pantalla de las opciones para especificar quién puede realizar inserciones forzadas]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    Para más información sobre las inserciones forzadas, vea "[Permiso para realizar inserciones forzadas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)".
1. Opcionalmente, seleccione **Permitir eliminaciones**.
  ![Opción para permitir eliminaciones de ramas](/assets/images/help/repository/allow-branch-deletions.png)
1. Haga clic en **Crear**.

## Editar una regla de protección de rama

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. A la derecha de la regla de protección de rama que quiera editar, haga clic en **Editar**.
  ![Botón Edit (Editar)](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Haz los cambios que desees en la regla de protección de rama.
1. Haga clic en **Guardar cambios**.
  ![Botón Save changes](/assets/images/help/repository/save-branch-protection-rule.png)

## Borrar una regla de protección de rama

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. A la derecha de la regla de protección de rama que quiera eliminar, haga clic en **Eliminar**.
    ![Botón Delete (Eliminar)](/assets/images/help/repository/delete-branch-protection-rule.png)
