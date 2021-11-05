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
shortTitle: Administrar grupos de ejecutores
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Acerca de los grupos de ejecutores auto-hospedados

{% ifversion fpt or ghec %}
{% note %}

**Nota:** Todas las organizaciones tienen un solo grupo de ejecutores auto-hospedados predeterminado. Solo las cuentas empresariales y las organizaciones que pretenezcan a estas pueden crear y administrar grupos de ejecutores auto-hospedados adicionales.

{% endnote %}
{% endif %}

Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados a nivel de empresas y organizaciones. Los administradores de la empresa pueden configurar políticas de acceso que controlan qué organizaciones en la empresa tienen acceso al grupo de ejecutores. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.

Cuando un administrador de empresa otorga acceso a una organización para un grupo de ejecutores, los administradores de organización pueden ver que dicho grupo se lista en la configuración del ejecutor auto-hospedado de la organización. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para repositorios granulares en el grupo de ejecutores de la empresa.

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](#moving-a-self-hosted-runner-to-a-group)".

## Crear un grupo de ejecutores auto-hospedados para una organización

Todas las organizaciones tienen un solo grupo predeterminado de ejecutores auto-hospedados. Las organizaciones dentro de una cuenta empresarial pueden crear grupos auto-hospedados adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta la sección "[Grupos de ejecutores auto-hospedados](/rest/reference/actions#self-hosted-runner-groups)".

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir una política que defina qué repositorios tienen acceso al grupo ejecutor.

{% ifversion fpt or ghec %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups %}
1. En la sección de "Grupos de ejecutores", haz clic en **Grupo de ejecutores nuevo**.
 {% data reusables.github-actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Advertencia**: {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. En la sección de "Ejecutores auto-hospedados", haz clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   {% ifversion ghes or ghae %} Puedes configurar un grupo de ejecutores para que sea accesible para una lista específica de repositorios o para todos los repositorios de la organización. Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes anular esto. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}

   {% warning %}

   **Advertencia**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.
{% endif %}

## Crear un grupo de ejecutores auto-hospedados para una empresa

Las empresas pueden agregar sus ejecutores auto-hospedados a grupos para su administración de accesos. Las empresas pueden crear grupos de ejecutores auto-hospedados a los cuales puedan acceder organizaciones específicas en la cuenta empresarial. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para los repositorios granulares a estos grupos de ejecutores para las empresas. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta las [API de GitHub Actions para la Administración Empresarial](/rest/reference/enterprise-admin#github-actions).

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% ifversion fpt or ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Haz clic en **Grupo de ejecución nuevo**.
 {% data reusables.github-actions.runner-group-assign-policy-org %}

   {% warning %}

   **Advertencia**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Da clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso organizacional.

    Puedes configurar un grupo de ejecutores para que una lista específica de organizaciones o todas las organizaciones de la empresa puedan acceder a él. Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes anular esto. Esta configuración no puede anularse si se configura el grupo de ejecutores de una organización que compartió una empresa.

   {% warning %}

   **Advertencia**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.
{% endif %}

## Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

Puedes actualizar la política de acceso de un grupo ejecutor o renombrarlo.
{% ifversion fpt or ghec %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups-selection %}
1. Modifica las opciones de acceso o cambia el nombre del grupo de ejecutores.

   {% warning %}

   **Advertencia**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}
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
{% ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-org-enterprise %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
1. Selecciona el menú desplegable del grupo de ejecutores.
1. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% else %}
1. En la sección de "Ejecutores auto-hospedados" de la página de configuración, ubica el grupo actual del ejecutor que quieres mover y expande la lista de miembros del grupo. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
1. Selecciona la casilla junto al ejecutor auto-hospedado y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. Para mover el ejecutor, da clic en el grupo de destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}
## Eliminar un grupo de ejecutores auto-hospedados

Los ejecutores auto-hospedados se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. Para eliminar el grupo, da clic en **Eliminar grupo**.
1. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
{% else %}
1. En la sección de "Ejecutores auto-hospedados" de la página de ajustes, ubica el grupo que quieras borrar y haz clic en el botón {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para eliminar el grupo, da clic en **Eliminar grupo**. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
{% endif %}
