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
shortTitle: Repository management policies
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192645'
---
## Acerca de las políticas para la administración de repositorios en tu empresa

Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} administran repositorios. También puedes permitir que los propietarios de las organizaciones administren las políticas para la administración de repositorios. Para más información, vea "[Creación y administración de repositorios](/repositories/creating-and-managing-repositories) y "[Organizaciones y equipos](/organizations)".

{% ifversion ghes or ghae %}

## Configurar la visibilidad predeterminada de los repositorios nuevos

Cada vez que alguien crea un repositorio nuevo dentro de tu empresa, esta persona debe elegir la visibilidad del mismo. Cuando configuras una visibilidad predeterminada para la empresa, eliges qué vsibilidad se seleccina predeterminadamente. Para más información sobre la visibilidad de los repositorios, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Si un propietario de empresa deja de permitir que los miembros de ésta creen ciertos tipos de repositorios, estos no podrán crear este tipo de repositorio aún si la configuración de visibilidad lo tiene como predeterminado. Para más información, vea "[Aplicación de una directiva para crear repositorios](#enforcing-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Debajo de "Default repository visibility" (visibilidad predeterminada del repositorio), utiliza el menú desplegable y selecciona un tipo de visibilidad predeterminado.
  ![Menú desplegable para elegir la visibilidad predeterminada de los repositorios para la empresa](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Requerimiento de una directiva en los permisos base del repositorio

En todas las organizaciones que pertenecen a tu empresa, puedes establecer un nivel de permiso base para los repositorios (ninguno, lectura, escritura o administrador) para los miembros de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. En "Permisos base", revisa la información sobre cómo modificar la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Permisos base", usa el menú desplegable y elige una directiva.
  ![Menú desplegable con opciones de directivas de permisos de repositorios](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## Requerir una política para la creación de repositorios

En todas las organizaciones que le pertenecen a tu empresa, puedes permitir que los miembros creen repositorios, restringir la creación de repositorios para los propietarios de la organización o permitir que los propietarios administren los ajustes en el nivel de la organización. 

Si permites a los miembros crear repositorios en las organizaciones, puedes elegir qué tipos de repositorios (públicos, privados e internos) pueden crear.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %} Si tu empresa usa {% data variables.product.prodname_emus %},{% else %}{% endif %} también tú puedes impedir que los usuarios creen repositorios propiedad de sus cuentas de usuario.
{% endif %}

{% data reusables.repositories.internal-repo-default %} Para más información sobre los repositorios internos, vea "[Creación de un repositorio interno](/articles/creating-an-internal-repository)".

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. En "Creación de repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. Opcionalmente, {% ifversion ghec %}si la empresa usa {% data variables.product.prodname_emus %} y quieres {% endif %}impedir que los miembros de la empresa creen repositorios propiedad de sus cuentas de usuario, selecciona **Bloquear la creación de repositorios de espacio de nombres de usuario**.
  ![Captura de pantalla en la que se muestra la lista de opciones deshabilitadas de la directiva de bifurcación](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## Requerir una política para bifurcar repositorios privados o internos
En todas las organizaciones que pertenezcan a tu empresa, puedes permitir o prohibir la bifurcación de un repositorio privado o interno o permitir a los propietarios administrar la configuración a nivel organizacional para todos los que tengan acceso a éstos.

{% ifversion org-owners-limit-forks-creation %} Las personas con permisos de administrador pueden establecer una directiva de bifurcación más detallada. Para más información, vea "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**Nota:** Si {% ifversion ghec %}tu empresa usa {% data variables.product.prodname_emus %} y {% endif %}la directiva "Creación de repositorios" impide que los miembros de la empresa creen repositorios propiedad de sus cuentas de usuario, los miembros no podrán bifurcar un repositorio en sus cuentas de usuario, independientemente de la directiva de "Bifurcación del repositorio".

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Debajo de "Bifurcación de repositorios", revisa la información sobre cómo cambiar el ajuste. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. En "Bifurcación de repositorios", usa el menú desplegable y elige una directiva.

  ![Menú desplegable con opciones de políticas de bifurcación de repositorios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. Si la bifurcación está habilitada, puedes especificar dónde se permite que los usuarios bifurquen los repositorios. Revisa la información sobre cómo cambiar la configuración y elige una directiva.

    ![Captura de pantalla en la que se muestra la lista de opciones de la directiva de bifurcación de repositorios](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## Requerir una política para invitar colaboradores{% ifversion ghec %} externos{% endif %} a los repositorios

En todas las organizaciones que pertenecen a tu empresa, puedes permitir que los miembros inviten a colaboradores{% ifversion ghec %} externos{% endif %} a repositorios, restringir las invitaciones de {% ifversion ghec %}colaboradores externos {% endif %}a los propietarios de la organización, {% ifversion prevent-org-admin-add-outside-collaborator %}restringir las invitaciones de {% ifversion ghec %}colaboradores externos {% endif %}a los propietarios de la organización {% endif %}o permitir que los propietarios de la organización administren la configuración en el nivel de organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. Debajo de "{% ifversion ghec %}Colaboradores externos{% elsif ghes or ghae %}Invitaciones{% endif %} de repositorio", revisa la información sobre cómo cambiar el ajuste. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Debajo de "{% ifversion ghec %}Colaboradores externos{% elsif ghes or ghae %}Invitaciones{% endif %} de repositorio", utiliza el menú desplegable y elige una política.

  {% ifversion ghec %} ![Menú desplegable con opciones de directivas de invitación a colaborador externos](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![Menú desplegable con opciones de directivas de invitación](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## Requerir una política para el nombre de rama predeterminada

Puedes configurar el nombre de rama predeterminada para cualquier repositorio miembro que creen los miembros en todas las organizaciones que pertenezcan a tu empresa. Puedes elegir el requerir un nombre de rama predeterminado a través de todas las organizaciones o permitir a algunas configurar un nombre diferente.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Directivas de repositorio**, en "Nombre de rama predeterminado", escriba el nombre de rama predeterminado que deben usar los nuevos repositorios.
    ![Cuadro de texto para escribir un nombre de rama predeterminado](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para aplicar el nombre de rama predeterminado para todas las organizaciones en la empresa, seleccione **Aplicar en toda la empresa**.
    ![Casilla Aplicación](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Haga clic en **Update**(Actualizar).
    ![Botón Actualizar](/assets/images/help/business-accounts/default-branch-name-update.png)

## Requerir una política para los cambios a la visibilidad del repositorio

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir que los miembros con acceso administrativo cambien la visibilidad de un repositorio, restrinjan los cambios de visibilidad del mismo a los propietarios de la organización o que permitan que los propietarios administren el ajuste a nivel organizacional. Cuando no permites que los miembros cambien la visibilidad del repositroio, únicamente los propietarios de la empresa podrán hacerlo.

Si un propietario de empresa restringió la creación de repositorios en la misma para que solo los propietarios puedan realizar esta operación, entonces los miembros no podrán cambiar la visibilidad de los repositorios. Si un propietario de una empresa restringe la creación de repositorios para que los miembros solo puedan crear repositorios privados, entonces éstos solo podrán cambiar la visibilidad de un repositorio a privada. Para más información, vea "[Aplicación de una directiva para crear repositorios](#enforcing-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. En "Modificar visibilidad del repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Debajo de "Repository visibility change" (Cambio de visibilidad de repositorios), usa el menú desplegable y elige una política.
   ![Menú desplegable con opciones de directivas de visibilidad de repositorios](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## Requerir una política para el borrado y transferencia de repositorios

En todas las organizaciones que son propiedad de tu empresa, puedes permitir que los miembros con permisos de administrador eliminen o transfieran un repositorio, puedes restringir la eliminación o la transferencia de repositorios a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. En "Transferencia y eliminación de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Requerir una política para borrar propuestas

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir que los miembros con acceso administrativo borren propuestas en un repositorio, restrinjan el borrado de propuestas para solo los propietarios de organizaciones o permitan que los propietarios administren el ajuste a nivel organizacional.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Directivas de repositorio**, en "Eliminación de incidencias de repositorio", revise la información sobre cómo cambiar la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Eliminación de propuestas en los repositorios", usa el menú desplegable y elige una política.

  ![Menú desplegable con opciones de directivas de eliminación de incidencias](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Requerir una política para los límites de subida de Git

Para que el tamaño de tu repositorio se mantenga en una cantidad administrable y puedas prevenir los problemas de rendimiento, puedes configurar un límite de tamaño de archivo para los repositorios de tu empresa.

Cuando impones límites de carga a los repositorios, la configuración predeterminada no permite a los usuarios añadir o actualizar archivos mayores a 100 MB.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Dentro de "Repository upload limit (Límite de subida del repositorio)", utiliza el menú desplegable y haz clic en un tamaño máximo de objeto.
![Menú desplegable con opciones de tamaño máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, a fin de aplicar un límite máximo de carga para todos los repositorios de la empresa, seleccione **Aplicar en todos los repositorios**
![Opción Aplicar tamaño máximo de objeto en todos los repositorios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

{% ifversion profile-name-enterprise-setting %}

## Aplicación de una directiva para la visualización de nombres de miembro en los repositorios

En todas las organizaciones que pertenecen a tu empresa, puedes permitir que los miembros vean el nombre del perfil del autor de un comentario, además de su nombre de usuario, en incidencias y solicitudes de incorporación de cambios para repositorios públicos e internos.

![Nombre del perfil del autor del comentario que se muestra en un comentario](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Nota:** Cuando se aplica esta directiva para todos los repositorios de la empresa, invalida la configuración de la organización para los repositorios privados. Para obtener más información, consulta "[Administrar la visualización de los nombres de los miembros en tu organización](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. En "Permitir a los miembros ver el nombre del perfil del autor del comentario en repositorios públicos e internos", selecciona el menú desplegable y haz clic en una directiva.
![Captura de pantalla de la página de opciones con la lista desplegable de directivas resaltada](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. Opcionalmente, para aplicar la visualización de nombres de perfil para todos los repositorios de la empresa, selecciona **Enforce for all repositories on the instance** (Aplicar para todos los repositorios de la instancia).
![Captura de pantalla de la opción de aplicar para todos los repositorios resaltada](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Configurar el editor de fusión de conflictos para solicitudes de extracción entre repositorios

Solicitarles a los usuarios que resuelvan los conflictos de fusión en forma local desde sus computadoras puede evitar que las personas escriban inadvertidamente un repositorio ascendente desde una bifurcación.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. En "Editor de conflictos para las solicitudes de incorporación de cambios entre repositorios", use el menú desplegable y haga clic en **Deshabilitado**.
 ![Menú desplegable con opción para deshabilitar el editor de conflictos de combinación](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configurar las cargas forzadas

Cada repositorio hereda un ajuste de subida forzada predeterminado desde los ajustes de la cuenta de usuario o de la organización a la que pertenece dicho repositorio. Cada organización y cuenta de usuario hereda un ajuste de subida forzada predeterminado desde el ajuste de subida forzada para la empresa. Si cambias el ajuste de subida forzada de la empresa, la política aplicará a todos los repositorios que pertenecen a cualquier organización o usuario.

### Bloquear las subidas forzadas en todos los repositorios

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. En "Forzar inserciones", use el menú desplegable y haga clic en **Permitir**, **Bloquear** o **Bloquear en la rama predeterminada**.
![Menú desplegable Forzar inserciones](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Opcionalmente, seleccione **Aplicar en todos los repositorios**, lo que invalidará las configuraciones de nivel de la organización y del repositorio para las inserciones forzadas.

### Bloquear las cargas forzadas para un repositorio específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Seleccione **Bloquear** o **Bloquear en la rama predeterminada** en **Inserción y extracción**.
   ![Bloqueo de inserciones forzadas](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Bloquear empujes forzados a los repositorios que posee una cuenta de usuario u organización

Los repositorios heredan los parámetros de los empujes forzados de la cuenta de usuario u organización a la que pertenecen. Las cuentas de usuario y las organizaciones a su vez heredan su configuración de subidas forzadas de aquella de la empresa.

Puedes sustituir los parámetros predeterminados heredados al configurar los parámetros para una cuenta de usuario u organización.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "Parámetros predeterminados del repositorio" en la sección "Empujes forzados", selecciona
    - **Bloquear** para bloquear las inserciones forzadas en todas las ramas.
    - **Bloquear en la rama predeterminada** para bloquear solo las inserciones forzadas en la rama predeterminada.
  ![Bloqueo de inserciones forzadas](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Opcionalmente, seleccione **Aplicar en todos los repositorios** para invalidar la configuración específica del repositorio. Tenga en cuenta que esto **no** invalidará una directiva de toda la empresa.
   ![Bloqueo de inserciones forzadas](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configurar el acceso de lectura anónimo de Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Si has [habilitado el modo privado](/enterprise/admin/configuration/enabling-private-mode) para {% data variables.location.product_location %}, puedes permitir a los administradores de repositorio habilitar el acceso de lectura Git anónimo a los repositorios públicos.

Habilitar el acceso anónimo de lectura de Git permite a los usuarios saltar la autenticación para las herramientas personalizadas en tu empresa. Cuando habilite esta configuración de acceso a un repositorio, o lo haga un administrador del repositorio, las operaciones de Git sin autenticar (y cualquiera con acceso de red a {% data variables.product.product_name %}) tendrán acceso de lectura al repositorio sin autenticación.

El acceso de lectura de Git anónimo está deshabilitado de forma predeterminada.{% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} Al actualizar a {% data variables.product.product_name %} 3.6 o posterior, el acceso de lectura anónimo de Git se deshabilita automáticamente en el nivel de aplicación y las conexiones `git://` en el puerto 9418 devolverán el siguiente error.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

Si quieres admitir el protocolo Git no autenticado en tu entorno, debes volver a habilitar manualmente la característica. Ejecuta los comandos siguientes después de la actualización:

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

El acceso de lectura de Git anónimo se quitará completamente en una versión futura de {% data variables.product.prodname_ghe_server %}. {% data variables.product.company_short %} recomienda usar SSH en lugar del protocolo Git. Para obtener más información acerca de este cambio, consulta [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



De ser necesario, puedes prevenir que los administradores de repositorio cambien la configuración de acceso anónimo de Git para los repositorios de tu empresa si bloqueas la configuración de acceso de los mismos. Una vez que bloqueas los parámetros de acceso de lectura Git de un repositorio, solo un administrador del sitio puede modificar los parámetros.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Configurar el acceso de lectura anónimo de Git para todos los repositorios

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. En "Acceso de lectura de Git anónimo", use el menú desplegable y haga clic en **Habilitado**.
![Menú desplegable de acceso de lectura anónimo de Git en el que se muestran las opciones "Habilitado" y "Deshabilitado"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para impedir que los administradores del repositorio cambien la configuración del acceso de lectura anónimo de Git en todos los repositorios de la empresa, seleccione **Impedir que los administradores del repositorio cambien el acceso de lectura anónimo de Git**.
![Selección de la casilla para impedir que los administradores del repositorio cambien la configuración de acceso de lectura anónimo de Git para todos los repositorios de la empresa](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Configurar el acceso de lectura anónimo de Git para un repositorio específico

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. En "Zona de peligro", junto a "Habilitar el acceso de lectura Git anónimo", haga clic en **Habilitar**.
![Botón "Habilitado" en "Habilitar el acceso de lectura anónimo de Git" en la zona de peligro de la configuración de administrador del sitio de un repositorio ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Examine los cambios. Para confirmarlo, haga clic en **Sí, habilitar el acceso de lectura anónimo de Git.** 
![Confirmación de la configuración de acceso de lectura de Git anónimo en la ventana emergente](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Opcionalmente, para impedir que los administradores del repositorio modifiquen este valor para este repositorio, seleccione **Impedir que los administradores del repositorio cambien el acceso de lectura de Git anónimo**.
![Selección de la casilla para evitar que los administradores del repositorio cambien el acceso de lectura de Git anónimo para este repositorio](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
