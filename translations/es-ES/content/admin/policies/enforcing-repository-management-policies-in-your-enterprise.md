---
title: Requerir políticas de administración de repositorios en tu empresa
intro: 'Los propietarios de empresas pueden hacer cumplir determinadas políticas de administración de repositorios para todas las organizaciones que son propiedad de una cuenta de empresa o pueden permitir que las políticas se establezcan en cada organización.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Configurar la visibilidad predeterminada para los repositorios nuevos en tu empresa

Cada vez que alguien crea un repositorio nuevo en tu empresa, esta persona debe elegir una visibilidad para el mismo. Cuando configuras una visibilidad predeterminada para la empresa, eliges qué vsibilidad se seleccina predeterminadamente. Para obtener más información sobre los tipos de visibilidad para los repositorios, visita "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Si un propietario de empresa deja de permitir que los miembros de ésta creen ciertos tipos de repositorios, estos no podrán crear este tipo de repositorio aún si la configuración de visibilidad lo tiene como predeterminado. Para obtener más información, consulta la sección "[Configurar una política para la creación de repositorios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Debajo de "Default repository visibility" (visibilidad predeterminada del repositorio), utiliza el menú desplegable y selecciona un tipo de visibilidad predeterminado. ![Menú desplegable para elegir la visibilidad predeterminada de los repositorios para tu empresa](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

### Configurar una política para cambiar la visibilidad de un repositorio

Cuando no permites que los miembros cambien la visibilidad del repositroio, únicamente los propietarios de la empresa podrán hacerlo.

Si un propietario de empresa restringió la creación de repositorios en la misma para que solo los propietarios puedan realizar esta operación, entonces los miembros no podrán cambiar la visibilidad de los repositorios. Si un propietario de una empresa restringe la creación de repositorios para que los miembros solo puedan crear repositorios privados, entonces éstos solo podrán cambiar la visibilidad de un repositorio a privada. Para obtener más información, consulta la sección "[Configurar una política para la creación de repositorios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Modificar visibilidad del repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Configurar una política para la creación de repositorios

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Creación de repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. En "Creación de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con políticas para creación de repositorio](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

### Requerir una política para bifurcar repositorios privados o internos

En todas las organizaciones que pertenezcan a tu empresa, puedes permitir o prohibir la bifurcación de un repositorio privado o interno o permitir a los propietarios administrar la configuración a nivel organizacional para todos los que tengan acceso a éstos.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Bifurcación de repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Bifurcación de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de bifurcación de repositorios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### Configurar una política para el borrado y transferencia de repositorios

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Transferencia y eliminación de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Configurar una política para los límites de subida de Git

Para que el tamaño de tu repositorio se mantenga en una cantidad administrable y puedas prevenir los problemas de rendimiento, puedes configurar un límite de tamaño de archivo para los repositorios de tu empresa.

Cuando impones límites de carga a los repositorios, la configuración predeterminada no permite a los usuarios añadir o actualizar archivos mayores a 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Nota:** únicamente los archivos mayores a {% data variables.large_files.warning_size %} se revisarán frente al límite de subida de Git. Si debes establecer un límite de subida menor, contacta a {% data variables.contact.contact_ent_support %} para obtener ayuda.

{% endtip %}
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Dentro de "Repository upload limit (Límite de subida del repositorio)", utiliza el menú desplegable y haz clic en un tamaño máximo de objeto. ![Menú desplegable con opciones de tamaño máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para requerir un límite de carga máximo para todos los repositorios en tu empresa, selecciona **Requerir en todos los repositorios** ![Opción para imponer tamaño máximo de objetos en todos los repositorios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

### Configurar el editor de fusión de conflictos para solicitudes de extracción entre repositorios

Solicitarles a los usuarios que resuelvan los conflictos de fusión en forma local desde sus computadoras puede evitar que las personas escriban inadvertidamente un repositorio ascendente desde una bifurcación.

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. En "Editor de conflicto para las solicitudes de extracción entre repositorios", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). ![Menú desplegable con opción para inhabilitar el editor de conflicto de fusión](/assets/images/enterprise/settings/conflict-editor-settings.png)

### Configurar las cargas forzadas

Cada repositorio hereda una configuración de empuje forzado por defecto desde la configuración de la cuenta del usuario o la organización a la que pertenece. De la misma forma, cada cuenta de organización y de usuario hereda una configuración de subidas forzadas de aquella de la empresa. Si cambias esta configuración para la empresa, se cambiará en todos los repositorios que le pertenezcan a cualquier usuario u organización dentro de ella.

#### Bloquear las cargas forzadas en tu aplicativo

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Debajo de "Force pushes" (Empujes forzados), usa el menú desplegable y haz clic en **Allow** (Permitir), **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada). ![Forzar empujes desplegables](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Opcionalmente, selecciona **Enforce on all repositories** (Implementar en todos los repositorios) que sobrescribirán las configuraciones a nivel de la organización y del repositorio para los empujes forzados.

#### Bloquear las cargas forzadas para un repositorio específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecciona **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada) debajo de **Push and Pull** (Subir y extraer). ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

#### Bloquear empujes forzados a los repositorios que posee una cuenta de usuario u organización

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

{% if enterpriseServerVersions contains currentVersion %}

### Configurar el acceso de lectura anónimo de Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% if enterpriseServerVersions contains currentVersion %}Si [habilitaste el modo privado](/enterprise/admin/configuration/enabling-private-mode) en tu empresa, puedes {% else %}Puedes {% endif %}permitir a los administradores de repositorio habilitar el acceso de lectura de Git a los repositorios públicos.

Habilitar el acceso anónimo de lectura de Git permite a los usuarios saltar la autenticación para las herramientas personalizadas en tu empresa. Cuando tú o un administrador de repositorio activan esta configuración de acceso a un repositorio, las operaciones Git no autenticadas (y cualquiera con acceso de red a {% data variables.product.product_name %}) tendrán acceso de lectura al repositorio sin autenticación.

De ser necesario, puedes prevenir que los administradores de repositorio cambien la configuración de acceso anónimo de Git para los repositorios de tu empresa si bloqueas la configuración de acceso de los mismos. Una vez que bloqueas los parámetros de acceso de lectura Git de un repositorio, solo un administrador del sitio puede modificar los parámetros.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

#### Configurar el acceso de lectura anónimo de Git para todos los repositorios

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Acceso de lectura Git anónimo", usa el menú desplegable y haz clic en **Activado**. ![Menú desplegable de acceso de lectura Git anónimo que muestra las opciones de menú "Habilitado" e "Inhabilitado"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para prevenir que los administradores de repositorio cambien la configuración del acceso de lectura anónimo de Git en todos los repositorios de tu empresa, selecciona **Prevenir que los administradores de los repositorios cambien el acceso de lectura anónimo de Git**. ![Casilla de verificación seleccionada para prevenir que los administradores de los repositorios cambien la configuración de acceso de lectura anónimo de Git para todos los repositorios de tu empresa](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

#### Configurar el acceso de lectura anónimo de Git para un repositorio específico

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. En "Zona de peligro", al lado de "Activar el acceso de lectura Git anónimo", haz clic en **Activar**. ![Botón "Activado" en "Activar el acceso de lectura Git anónimo" en la zona de peligro de los parámetros de administración del sitio de un repositorio ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revisa los cambios. Para confirmar, haz clic en **Sí, habilitar el acceso de lectura Git anónimo.** ![Confirma la configuración de acceso de lectura Git anónimo en la ventana emergente](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Opcionalmente, para impedir que los administradores de repositorio modifiquen estos parámetros para este repositorio, selecciona **Impedir que los administradores de repositorio modifiquen el acceso de lectura Git anónimo**. ![Selecciona la casilla de verificación para evitar que los administradores del repositorio cambien el acceso de lectura Git anónimo para este repositorio](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Requerir una política para el nombre de la rama predeterminada

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña de **Políticas de los repositorios**, debajo de "Nombre de la rama predeterminada", ingresa el nombre de rama predeterminada que deberán utilizar los repositorios nuevos. ![Caja de texto para ingresar un nombre de rama predeterminado](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para requerir el nombre de rama predeterminado para todas las organizaciones en la empresa, selecciona **Requerir en toda la empresa**. ![Casilla de requerir](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Da clic en **Actualizar**. ![Botón de actualizar](/assets/images/help/business-accounts/default-branch-name-update.png)
{% endif %}