---
title: Requerir políticas de administración de repositorios en tu empresa
intro: Puedes requerir políticas para la administración de repositorios dentro de las organizaciones de tu empresa o permitir que se configuren políticas en cada organización.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Políticas de administración de repositorio
---

## Acerca de las políticas para la administración de repositorios en tu empresa

Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} administran repositorios. También puedes permitir que los propietarios de las organizaciones administren las políticas para la administración de repositorios. Para obtener más información, consulta las secciones "[Crear y administrar repositorios](/repositories/creating-and-managing-repositories) y "[Organizaciones y equipos](/organizations)".

{% ifversion ghes or ghae %}

## Configurar la visibilidad predeterminada de los repositorios nuevos

Cada vez que alguien crea un repositorio nuevo dentro de tu empresa, esta persona debe elegir la visibilidad del mismo. Cuando configuras una visibilidad predeterminada para la empresa, eliges qué vsibilidad se seleccina predeterminadamente. Para obtener más información sobre la visibilidad de los repositorios, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Si un propietario de empresa deja de permitir que los miembros de ésta creen ciertos tipos de repositorios, estos no podrán crear este tipo de repositorio aún si la configuración de visibilidad lo tiene como predeterminado. Para obtener más información, consulta la sección "[Configurar una política para la creación de repositorios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Debajo de "Default repository visibility" (visibilidad predeterminada del repositorio), utiliza el menú desplegable y selecciona un tipo de visibilidad predeterminado. ![Menú desplegable para elegir la visibilidad predeterminada de los repositorios para tu empresa](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Requerir una política para los permisos {% ifversion ghec or ghes or ghae %}base{% else %}predeterminados{% endif %} del repositorio

En todas las organizaciones que pertenezcan a tu empresa, puedes configurar un nivel de permisos {% ifversion ghec or ghes or ghae %}base{% else %}predeterminado{% endif %} de los repositorios (ninguno, lectura, escritura o administración) para los miembros organizacionales o permitir que los propietarios administren el ajuste a nivel de organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
4. Debajo de "permisos {% ifversion ghec or ghes or ghae %}base{% else %}predeterminados{% endif %}", revisa la información sobre cómo cambiar el ajuste. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Debajo de "Permisos{% ifversion ghec or ghes or ghae %}base{% else %}predeterminados{% endif %}", utiliza el menú desplegable y elige una política.
  {% ifversion ghec or ghes or ghae %}
  ![Menú desplegable con opciones de políticas de permisos de repositorios](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)
  {% else %}
  ![Menú desplegable con opciones de políticas de permisos de repositorios](/assets/images/enterprise/business-accounts/repository-permissions-policy-drop-down.png)
  {% endif %}

## Requerir una política para la creación de repositorios

En todas las organizaciones que le pertenecen a tu empresa, puedes permitir que los miembros creen repositorios, restringir la creación de repositorios para los propietarios de la organización o permitir que los propietarios administren los ajustes en el nivel de la organización. Si permites que los miembros creen repositorios, puedes decidir si pueden crear cualquier combinación de repositorios públicos, privados e internos. {% data reusables.repositories.internal-repo-default %} Para obtener más información acerca de los repositorios internos, consulta "[Crear un repositorio interno](/articles/creating-an-internal-repository)".

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Creación de repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. En "Creación de repositorios", usa el menú desplegable y elige una política.

  ![Menú desplegable con políticas para creación de repositorio](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## Requerir una política para bifurcar repositorios privados o internos

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir o prohibir la bifurcación de un repositorio privado o interno o permitir a los propietarios administrar la configuración a nivel organizacional para todos los que tengan acceso a éstos.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Debajo de "Bifurcación de repositorios", revisa la información sobre cómo cambiar el ajuste. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Bifurcación de repositorios", usa el menú desplegable y elige una política.

  ![Menú desplegable con opciones de políticas de bifurcación de repositorios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

{% ifversion innersource-fork-policies %}
5. If forking is enabled, you can specify where users are allowed to fork repositories. Review the information about changing the setting and choose a policy.

    ![Screenshot showing the list of repository forking policy options](/assets/images/help/business-accounts/repository-forking-policy-settings.png)
{% endif %}


## Requerir una política para invitar colaboradores{% ifversion ghec %} externos{% endif %} a los repositorios

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir que los miembros inviten colaboradores{% ifversion ghec %} externos{% endif %} a los repositorios, restrinjan las invitaciones a los {% ifversion ghec %}colaboradores externos{% endif %} a los propietarios de las organizaciones, {% ifversion prevent-org-admin-add-outside-collaborator %}restrinjan las invitaciones a los {% ifversion ghec %}colaboradores externos {% endif %}a los propietarios de las empresas, {% endif %}o permitan que los propietarios de las organizaciones administren la configuración a nivel organizacional.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Debajo de "{% ifversion ghec %}Colaboradores externos{% elsif ghes or ghae %}Invitaciones{% endif %} de repositorio", revisa la información sobre cómo cambiar el ajuste. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Debajo de "{% ifversion ghec %}Colaboradores externos{% elsif ghes or ghae %}Invitaciones{% endif %} de repositorio", utiliza el menú desplegable y elige una política.

  {% ifversion ghec %}
  ![Menú desplegable con opciones de políticas de invitación de colaboradores externos](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)
  {% elsif ghes or ghae %}
  ![Menú desplegable con opciones de política de invitación](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)
  {% endif %}

{% ifversion ghec or ghes or ghae %}

## Requerir una política para el nombre de rama predeterminada

Puedes configurar el nombre de rama predeterminada para cualquier repositorio miembro que creen los miembros en todas las organizaciones que pertenezcan a tu empresa. Puedes elegir el requerir un nombre de rama predeterminado a través de todas las organizaciones o permitir a algunas configurar un nombre diferente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña de **Políticas de los repositorios**, debajo de "Nombre de la rama predeterminada", ingresa el nombre de rama predeterminada que deberán utilizar los repositorios nuevos. ![Caja de texto para ingresar un nombre de rama predeterminado](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para requerir el nombre de rama predeterminado para todas las organizaciones en la empresa, selecciona **Requerir en toda la empresa**. ![Casilla de requerir](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Da clic en **Actualizar**. ![Botón de actualizar](/assets/images/help/business-accounts/default-branch-name-update.png)

{% endif %}

## Requerir una política para los cambios a la visibilidad del repositorio

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir que los miembros con acceso administrativo cambien la visibilidad de un repositorio, restrinjan los cambios de visibilidad del mismo a los propietarios de la organización o que permitan que los propietarios administren el ajuste a nivel organizacional. Cuando no permites que los miembros cambien la visibilidad del repositroio, únicamente los propietarios de la empresa podrán hacerlo.

Si un propietario de empresa restringió la creación de repositorios en la misma para que solo los propietarios puedan realizar esta operación, entonces los miembros no podrán cambiar la visibilidad de los repositorios. Si un propietario de una empresa restringe la creación de repositorios para que los miembros solo puedan crear repositorios privados, entonces éstos solo podrán cambiar la visibilidad de un repositorio a privada. Para obtener más información, consulta la sección "[Configurar una política para la creación de repositorios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Modificar visibilidad del repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## Requerir una política para el borrado y transferencia de repositorios

En todas las organizaciones que son propiedad de tu empresa, puedes permitir que los miembros con permisos de administrador eliminen o transfieran un repositorio, puedes restringir la eliminación o la transferencia de repositorios a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Transferencia y eliminación de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Requerir una política para borrar propuestas

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir que los miembros con acceso administrativo borren propuestas en un repositorio, restrinjan el borrado de propuestas para solo los propietarios de organizaciones o permitan que los propietarios administren el ajuste a nivel organizacional.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Eliminación de propuestas en los repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Eliminación de propuestas en los repositorios", usa el menú desplegable y elige una política.

  ![Menú desplegable con opciones de políticas de eliminación de propuestas](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Requerir una política para los límites de subida de Git

Para que el tamaño de tu repositorio se mantenga en una cantidad administrable y puedas prevenir los problemas de rendimiento, puedes configurar un límite de tamaño de archivo para los repositorios de tu empresa.

Cuando impones límites de carga a los repositorios, la configuración predeterminada no permite a los usuarios añadir o actualizar archivos mayores a 100 MB.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Dentro de "Repository upload limit (Límite de subida del repositorio)", utiliza el menú desplegable y haz clic en un tamaño máximo de objeto. ![Menú desplegable con opciones de tamaño máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para requerir un límite de carga máximo para todos los repositorios en tu empresa, selecciona **Requerir en todos los repositorios** ![Opción para imponer tamaño máximo de objetos en todos los repositorios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## Configurar el editor de fusión de conflictos para solicitudes de extracción entre repositorios

Solicitarles a los usuarios que resuelvan los conflictos de fusión en forma local desde sus computadoras puede evitar que las personas escriban inadvertidamente un repositorio ascendente desde una bifurcación.

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. En "Editor de conflicto para las solicitudes de extracción entre repositorios", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). ![Menú desplegable con opción para inhabilitar el editor de conflicto de fusión](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configurar las cargas forzadas

Cada repositorio hereda un ajuste de subida forzada predeterminado desde los ajustes de la cuenta de usuario o de la organización a la que pertenece dicho repositorio. Cada organización y cuenta de usuario hereda un ajuste de subida forzada predeterminado desde el ajuste de subida forzada para la empresa. Si cambias el ajuste de subida forzada de la empresa, la política aplicará a todos los repositorios que pertenecen a cualquier organización o usuario.

### Bloquear las subidas forzadas en todos los repositorios

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Debajo de "Force pushes" (Empujes forzados), usa el menú desplegable y haz clic en **Allow** (Permitir), **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada). ![Forzar empujes desplegables](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Opcionalmente, selecciona **Enforce on all repositories** (Implementar en todos los repositorios) que sobrescribirán las configuraciones a nivel de la organización y del repositorio para los empujes forzados.

### Bloquear las cargas forzadas para un repositorio específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecciona **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada) debajo de **Push and Pull** (Subir y extraer). ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Bloquear empujes forzados a los repositorios que posee una cuenta de usuario u organización

Los repositorios heredan los parámetros de los empujes forzados de la cuenta de usuario u organización a la que pertenecen. Las cuentas de usuario y las organizaciones a su vez heredan su configuración de subidas forzadas de aquella de la empresa.

Puedes sustituir los parámetros predeterminados heredados al configurar los parámetros para una cuenta de usuario u organización.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "Parámetros predeterminados del repositorio" en la sección "Empujes forzados", selecciona
    - **Block** (Bloquear) para bloquear los empujes forzados en todas las ramas.
    - **Block to the default branch** (Bloquear en la rama por defecto) para bloquear solo los empujes forzados en la rama por defecto. ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Opcionalmente, selecciona **Enforce on all repositories** (Implementar en todos los repositorios) para sustituir los parámetros específicos del repositorio. Nota que esto **no** anulará alguna política válida en toda la empresa. ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configurar el acceso de lectura anónimo de Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% ifversion ghes %}Si [habilitaste el modo privado](/enterprise/admin/configuration/enabling-private-mode) en tu empresa, puedes {% else %}Puedes {% endif %}permitir a los administradores de repositorio habilitar el acceso de lectura de Git a los repositorios públicos.

Habilitar el acceso anónimo de lectura de Git permite a los usuarios saltar la autenticación para las herramientas personalizadas en tu empresa. Cuando tú o un administrador de repositorio activan esta configuración de acceso a un repositorio, las operaciones Git no autenticadas (y cualquiera con acceso de red a {% data variables.product.product_name %}) tendrán acceso de lectura al repositorio sin autenticación.

De ser necesario, puedes prevenir que los administradores de repositorio cambien la configuración de acceso anónimo de Git para los repositorios de tu empresa si bloqueas la configuración de acceso de los mismos. Una vez que bloqueas los parámetros de acceso de lectura Git de un repositorio, solo un administrador del sitio puede modificar los parámetros.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Configurar el acceso de lectura anónimo de Git para todos los repositorios

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Acceso de lectura Git anónimo", usa el menú desplegable y haz clic en **Activado**. ![Menú desplegable de acceso de lectura Git anónimo que muestra las opciones de menú "Habilitado" e "Inhabilitado"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para prevenir que los administradores de repositorio cambien la configuración del acceso de lectura anónimo de Git en todos los repositorios de tu empresa, selecciona **Prevenir que los administradores de los repositorios cambien el acceso de lectura anónimo de Git**. ![Casilla de verificación seleccionada para prevenir que los administradores de los repositorios cambien la configuración de acceso de lectura anónimo de Git para todos los repositorios de tu empresa](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Configurar el acceso de lectura anónimo de Git para un repositorio específico

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. En "Zona de peligro", al lado de "Activar el acceso de lectura Git anónimo", haz clic en **Activar**. ![Botón "Activado" en "Activar el acceso de lectura Git anónimo" en la zona de peligro de los parámetros de administración del sitio de un repositorio ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revisa los cambios. Para confirmar, haz clic en **Sí, habilitar el acceso de lectura Git anónimo.** ![Confirma la configuración de acceso de lectura Git anónimo en la ventana emergente](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Opcionalmente, para impedir que los administradores de repositorio modifiquen estos parámetros para este repositorio, selecciona **Impedir que los administradores de repositorio modifiquen el acceso de lectura Git anónimo**. ![Selecciona la casilla de verificación para evitar que los administradores del repositorio cambien el acceso de lectura Git anónimo para este repositorio](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
