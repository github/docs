---
title: Utilizar grupos para administrar el acceso a los ejecutores hospedados en AE
intro: Puedes utilizar políticas para limitar el acceso a los {% data variables.actions.hosted_runner %} que se hayan agregado a una organización o empresa.
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Acerca de los gupos de {% data variables.actions.hosted_runner %}

Los grupos de {% data variables.actions.hosted_runner %} se utilizan para controlar el acceso a los {% data variables.actions.hosted_runner %} a nivel de organización y empresa. Los administradores de la empresa pueden configurar políticas de acceso que controlan qué organizaciones en la empresa tienen acceso al grupo de ejecutores. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.

Cuando un administrador de empresa otorga acceso de organización a un grupo de ejecutores, los administradores de la organización pueden ver este grupo listado en la configuración del {% data variables.actions.hosted_runner %} de la organización. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para repositorios granulares en el grupo de ejecutores de la empresa.

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta la sección "[Mover un {% data variables.actions.hosted_runner %} a un grupo](#moving-an-ae-hosted-runner-to-a-group)".

### Crear un grupo de {% data variables.actions.hosted_runner %} para una organización

Todas las organizaciones tienen un solo grupo de {% data variables.actions.hosted_runner %} predeterminado. Las organizaciones dentro de una cuenta empresarial pueden crear grupos de ejecutores adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores.

Los {% data variables.actions.hosted_runner %} se asignan automáticamente al grupo predeterminado cuando se crea y solo pueden ser miembros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir una política que defina qué repositorios tienen acceso al grupo ejecutor.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. En la sección de **Ejecutores auto-hospedados** da clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

     Puedes configurar un grupo de ejecutores para que una lista específica de repositorios puedan acceder a este o para que todos los repositorios de la organización puedan hacerlo. Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes anular esto. ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)

1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

### Crear un grupo de {% data variables.actions.hosted_runner %} para una empresa

Las empresas pueden agregar sus {% data variables.actions.hosted_runner %} a los grupos para la administración de accesos. Las empresas pueden crear grupos de {% data variables.actions.hosted_runner %} para que organizaciones específicas en la cuenta empresarial puedan acceder a ellos. Los administradores de la organización pueden entonces asignar políticas de acceso adicionales para los repositorios granulares a estos grupos de ejecutores para las empresas.

Los {% data variables.actions.hosted_runner %} se asignan automáticamente al grupo predeterminado cuando se crea y solo pueden ser miembros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Da clic en la pestaña de **Ejecutores auto-hospedados**.
1. Da clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso organizacional.

   Puedes configurar un grupo de ejecutores para que una lista específica de organizaciones o todas las organizaciones de la empresa puedan acceder a él.  Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo de ejecutores, pero puedes anular esto. ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)

1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

### Cambiar la política de acceso de un grupo de {% data variables.actions.hosted_runner %}

Puedes actualizar la política de acceso de un grupo ejecutor o renombrarlo.

{% data reusables.github-actions.hosted-runner-configure-runner-group-access %}

### Mover un {% data variables.actions.hosted_runner %} a un grupo

Los {% data variables.actions.hosted_runner %} nuevos se asignan automáticamente al grupo predeterminado y pueden moverse entonces a otro grupo.

1. En la sección de **Ejecutores auto-hospedados** de la página de configuración, ubica el grupo actual del ejecutor que quieres mover y expande la lista de miembros del grupo. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-group-members.png)
1. Selecciona la casilla de verificación junto al ejecutor y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-group-member-move.png)
1. Para eliminar el ejecutor, haz clic en el grupo destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-group-member-move-destination.png)

### Eliminar un grupo de {% data variables.actions.hosted_runner %}

Los {% data variables.actions.hosted_runner %} se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

1. En la sección de **Ejecutores auto-hospedados** de la página de configuración, ubica el grupo que quieras eliminar y da clic en el botón {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-group-kebab.png)

1. Para eliminar el grupo, da clic en **Eliminar grupo**.

    ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-hosted-runner-group-remove.png)

1. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
