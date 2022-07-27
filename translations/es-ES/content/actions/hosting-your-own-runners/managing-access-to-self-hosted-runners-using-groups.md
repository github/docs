---
title: Administrar el acceso a los ejecutores auto-hospedados utilizando grupos
intro: Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados que se hayan agregado a una organización o empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Administrar el acceso a los ejecutores
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los grupos de ejecutores auto-hospedados

{% ifversion fpt %}
{% note %}

**Nota:** Todas las organizaciones tienen un solo grupo de ejecutores auto-hospedados predeterminado. Solo las cuentas empresariales y las organizaciones que pretenezcan a estas pueden crear y administrar grupos de ejecutores auto-hospedados adicionales.

{% endnote %}

Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.
Si utilizas

{% data variables.product.prodname_ghe_cloud %}, puedes crear grupos de ejecutores adicionales; los administradores empresariales pueden configurar políticas de acceso que controlen qué organizaciones dentro de una empresa pueden acceder al grupo de ejecutores y los administradores organizacionales pueden asignar políticas de acceso granulares de repositorio para el grupo de ejecutores empresarial. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).
{% endif %}

{% ifversion ghec or ghes or ghae %}
Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados a nivel de empresas y organizaciones. Los propietarios de empresas pueden configurar políticas de acceso que controlan qué organizaciones
{% ifversion restrict-groups-to-workflows %}y flujos de trabajo {% endif %}en una empresa tienen acceso al grupo de ejecutores. Los propietarios de las organizaciones pueden configurar las políticas de acceso que controlan qué repositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} en una organización tienen aceso al grupo de ejecutores.

Cuando un propietario de empresa otorga un acceso organizacional a un grupo de ejecutores, los propietarios de organizaciones pueden verlo listado en los ajustes del ejecutor auto-hospedado de la organización. Los propietarios organizacionales pueden entonces asignar políticas de acceso adicionales y granulares para los repositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} al grupo ejecutor de la empresa.

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](#moving-a-self-hosted-runner-to-a-group)".

## Crear un grupo de ejecutores auto-hospedados para una organización

Todas las organizaciones tienen un solo grupo predeterminado de ejecutores auto-hospedados. Las organizaciones dentro de una cuenta empresarial pueden crear grupos auto-hospedados adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta la sección "[Grupos de ejecutores auto-hospedados](/rest/reference/actions#self-hosted-runner-groups)".

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir la política que define qué reositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} tienen acceso al grupo ejecutor.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. En la sección de "Grupos de ejecutores", haz clic en **Grupo de ejecutores nuevo**.
1. Ingresa un nombre para tu grupo ejecutor.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Advertencia**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %}Los grupos ejecutores que pertenecen a las organizaciones no pueden acceder a los flujos de trabajo de una organización diferente en la empresa. En vez de esto, debes crear un grupo de ejecutores que pertenezca a la empresa.{% endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Debajo de {% ifversion ghes or ghae %}"Ejecutores"{% endif %}, haz clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   Puedes configurar un grupo de ejecutores para que sea accesible a una lista específica de repositorios o a todos ellos en la organización.{% ifversion ghec or ghes %} Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo ejecutor. Pero esto se puede anular. Esta configuración no puede anularse si se configura un grupo ejecutor de la organización que haya compartido una empresa.{% endif %}

   {%- ifversion ghes %}
   {% warning %}

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.
{% endif %}

## Crear un grupo de ejecutores auto-hospedados para una empresa

Las empresas pueden agregar sus ejecutores auto-hospedados a grupos para su administración de accesos. Las empresas pueden crear grupos de ejecutores auto-hospedados que son accesibles para organizaciones específicas en la cuenta empresarial{% ifversion restrict-groups-to-workflows %} o para flujos de trabajo específicos{% endif %}. Los propietarios de organizaciones pueden entonces asignar políticas de acceso adicionales y granulares para los repositorios{% ifversion restrict-groups-to-workflows %} o flujos de trabajo{% endif %} a los grupos de ejecutores empresariales. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta las terminales empresariales en la [API de REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. Para elegir una política para el acceso organizacional, selecciona el menú desplegable **Acceso organizacional** y haz clic en una política. Puedes configurar un grupo de ejecutores para que sea accesible a una lista de organizaciones específica o a todas las organizaciones en la empresa.{% ifversion ghes %} Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo, pero esto se puede anular.{% endif %}

   {%- ifversion ghec or ghes %}
   {% warning %}

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
   {%- ifversion ghec or ghes %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

{% endif %}

## Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

En el caso de los grupos de ejecutores en una empresa, puedes cambiar qué organizaciones dentro de ella pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir qué flujos de trabajo puede ejecutar un grupo de ejecutores{% endif %}. En el caso de los grupos de ejecutores en una organización, puedes cambiar qué repositorios en ella pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir qué flujos de trabajo puede ejecutar un grupo de ejecutores{% endif %}.

### Cambiar qué organizaciones o repositorios pueden acceder a un grupo de ejecutores

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. En el caso de los grupos de ejecutores en una empresa, debajo de **Acceso organizacional**, modifica qué organizaciones pueden acceder al grupo de ejecutores. En el caso de los grupos de ejecutores en una organización, debajo de **Acceso al repositorio**, modifica aquellos a los que puede acceder este grupo.

   {%- ifversion fpt or ghec or ghes %}
   {% warning %}

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% ifversion restrict-groups-to-workflows %}
### Cambiar los flujos de trabajo a los cuales puede acceder un grupo de ejecutores
Puedes configurar un grupo de ejecutores auto-hospedado para que ejecute ya sea flujos selectos o todos ellos. Por ejemplo, podrías utilizar este ajuste para proteger secretos almacenados en los ejecutores auto-hospedados o estandarizar los flujos de trabajo de despliegue restringiendo un grupo de ellos para que ejecute solo un flujo de trabajo reutilizable específico. Este ajuste no se puede anular si estás configurando un grupo de ejecutores de una organización que haya compartido una empresa.
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Debajo de **Acceso al flujo de trabajo**, selecciona el menú desplegable y haz clic en **Flujos de trabajo selectos**.
1. Da clic en {% octicon "gear" aria-label="the gear icon" %}.
1. Ingresa una lista separada por comas de los flujos de trabajo que pueden acceder al grupo de ejecutores. Utiliza la ruta completa, incluyendo el nombre y propietario del repositorio. Fija el flujo de trabajo a una rama, etiqueta o SHA completo. Por ejemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Solo los jobs que se definan directamente dentro de los flujos de trabajo seleccionados tendrán acceso al grupo de ejecutores.

   Los grupos de ejecutores que pertenecen a la organización no pueden acceder a los flujos de trabajo de otra organización de la empresa; en vez de esto, debes crear un grupo de ejecutores que pertenezca a la empresa.

1. Haz clic en **Save ** (guardar).

{% endif %}

## Cambiar el nombre de un grupo de ejectuores

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Cambia el nombre del grupo de ejecutores.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group %}
1. Cambia el nombre del grupo de ejecutores.
{% endif %}

{% ifversion ghec or ghes or ghae %}
## Agregar ejecutores auto-hospedados a un grupo automáticamente

Puedes utilizar el script de configuración para agregar automáticamente un ejecutor auto-hospedado nuevo a un grupo. Por ejemplo, este comando registra un ejecutor auto-hospedado nuevo y utiliza el parámetro `--runnergroup` para agregarlo a un grupo llamado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

El comando fallará si el grupo de ejecutores no existe:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```

## Mover un ejecutor auto-hospedado a un grupo

Si no especificas un grupo de ejecutores durante el proceso de registro, tus ejecutores auto-hospedados nuevos se asignarán automáticamente al grupo predeterminado y después se moverán a otro grupo.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
2. Selecciona el menú desplegable de **Grupo de ejecutores**.
3. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% elsif ghae or ghes < 3.4 %}
1. En la sección {% ifversion ghes or ghae %}"Grupos de ejecutores"{% endif %} de la página de ajustes, ubica el grupo actual del ejecutor que quieras mover y expande la lista de miembros del grupo. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Selecciona la casilla junto al ejecutor auto-hospedado y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover el ejecutor, da clic en el grupo de destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## Eliminar un grupo de ejecutores auto-hospedados

Los ejecutores auto-hospedados se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para eliminar el grupo, da clic en **Eliminar grupo**.
3. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.

{% endif %}
{% endif %}
