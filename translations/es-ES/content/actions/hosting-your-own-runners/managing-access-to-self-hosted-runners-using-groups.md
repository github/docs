---
title: Administrar el acceso a los ejecutores auto-hospedados utilizando grupos
intro: Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados que se hayan agregado a una organización o empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los grupos de ejecutores auto-hospedados

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** Todas las organizaciones tienen un solo grupo de ejecutores auto-hospedados predeterminado. Solo las cuentas empresariales y las organizaciones que pertenezcan a una cuenta empresarial pueden crear y administrar grupos adicionales de ejecutores auto-hospedados.

{% endnote %}
{% endif %}

Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados a nivel de empresas y organizaciones. Los administradores de la empresa pueden configurar políticas de acceso que controlan qué organizaciones en la empresa tienen acceso al grupo de ejecutores. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.

Cuando un administrador de empresa otorga acceso a una organización para un grupo de ejecutores, los administradores de organización pueden ver que dicho grupo se lista en la configuración del ejecutor auto-hospedado de la organización. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para repositorios granulares en el grupo de ejecutores de la empresa.

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](#moving-a-self-hosted-runner-to-a-group)".

### Crear un grupo de ejecutores auto-hospedados para una organización

Todas las organizaciones tienen un solo grupo predeterminado de ejecutores auto-hospedados. Las organizaciones dentro de una cuenta empresarial pueden crear grupos auto-hospedados adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores.

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir una política que defina qué repositorios tienen acceso al grupo ejecutor.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. En la sección de **Ejecutores auto-hospedados** da clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} Puedes configurar un grupo de ejecutores para que una lista específica de repositorios puedan acceder a éste, o para que todos los repositorios en la organización puedan hacerlo. Predeterminadamente, los repositorios no pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes utilizar la opción **Permitir repositorios públicos** para anular dicha política.{% else if currentVersion == "enterprise-server@2.22"%}Puedes configurar un grupo de ejecutores para que ya sea una lista específica de repositorios, todos los repositorios privados, o todos los repositorios de la organización puedan acceder a él.{% endif %}

   {% warning %}

   **Advertencia**

   {% indented_data_reference site.data.reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

### Crear un grupo de ejecutores auto-hospedados para una empresa

Las empresas pueden agregar sus ejecutores auto-hospedados a grupos para su administración de accesos. Las empresas pueden crear grupos de ejecutores auto-hospedados a los cuales puedan acceder organizaciones específicas en la cuenta empresarial. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para los repositorios granulares a estos grupos de ejecutores para las empresas.

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Da clic en la pestaña de **Ejecutores auto-hospedados**.
1. Da clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso organizacional.

   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} Puedes configurar un grupo de ejecutores para que ya sea una lista específica de organizaciones o todas las organizaciones de la empresa puedan acceder a él. Predeterminadamente, los repositorios no pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes utilizar la opción **Permitir repositorios públicos** para anular dicha política.{% else if currentVersion == "enterprise-server@2.22"%}Puedes configurar un grupo de ejecutores para que todas las organizaciones de la empresa puedan acceder a él, o puedes elegir organizaciones específicas.{% endif %}

   {% warning %}

   **Advertencia**

   {% indented_data_reference site.data.reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

### Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

Puedes actualizar la política de acceso de un grupo ejecutor o renombrarlo.

{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}

### Mover un ejecutor auto-hospedado a un grupo

Los ejecutores auto-hospedados nuevos se asignan automáticamente al grupo predeterminado y entonces pueden moverse a otro grupo.

1. En la sección **Ejecutores auto-hospedados** de la página de configuración, ubica el grupo actual del ejecutor que quieras mover de grupo y expande la lista de miembros de dicho grupo. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
1. Selecciona la casilla junto al ejecutor auto-hospedado y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. Para mover el ejecutor, da clic en el grupo de destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)

### Eliminar un grupo de ejecutores auto-hospedados

Los ejecutores auto-hospedados se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

1. En la sección de **Ejecutores auto-hospedados** de la página de configuración, ubica el grupo que quieras eliminar y da clic en el botón {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para eliminar el grupo, da clic en **Eliminar grupo**. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
