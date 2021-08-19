---
title: Administrar ganchos de pre-recepción en el aparato del Servidor de GitHub Enterprise
intro: 'Configurar cómo las personas usarán sus ganchos de pre-recepción dentro de su aparato de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---

### Crear ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Haz clic en **Add pre-receive hook** (Agregar gancho de pre-recepción). ![Agregar un gancho de pre-recepción](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. En el campo **Hook name** (Nombre de gancho), escribe el nombre del gancho que deseas crear. ![Nombrar los ganchos de pre-recepción](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. En el menú desplegable **Environment** (Entorno), selecciona el entorno en el que deseas ejecutar el gancho. ![Entornos para ganchos](/assets/images/enterprise/site-admin-settings/environment.png)
7. Debajo de **Script**, desde el menú desplegable **Select hook repository** (Seleccionar repositorio de gancho), selecciona el repositorio que contiene tu script de gancho de pre-recepción. Desde el menú desplegable **Select file** (Seleccionar archivo), selecciona el nombre de archivo o el script del gancho de pre-recepción. ![Script para ganchos](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Selecciona **Use the exit-status to accept or reject pushes** (Usar el estado de salida para aceptar o rechazar subidas) para imponer tu script. Al quitar la marca de selección de esta opción podrás probar el script mientras se ignora el valor del estado de salida. En este modo, el resultado del script estará visible para el usuario en la línea de comandos pero no en la interfaz web. ![Usar el estado de salida](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Selecciona **Enable this pre-receive hook on all repositories by default ** (Habilitar este gancho de pre-recepción en todos los repositorios por defecto) si quieres que el gancho de pre-recepción se ejecute en todos los repositorios. ![Habilitar gachos para todos los repositorios](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Selecciona **Administrators can enable and disable this hook** (Los administradores pueden habilitar e inhabilitar este gancho) para permitir que los miembros de la organización con permisos de administración o propietario seleccionen si desean habilitar o inhabilitar este gancho de pre-recepción. ![Los administradores habilitan o inhabilitan los ganchos](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### Editar ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Junto al gancho de pre-recepción que deseas editar, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. ![Editar pre-recepción](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### Eliminar ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. Junto al gancho de pre-recepción que deseas eliminar, haz clic en {% octicon "x" aria-label="X symbol" %}. ![Editar pre-recepción](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### Configurar ganchos de pre-recepción para una organización

Un administrador de la organización solo puede configurar permisos de gancho para una organización si el administrador del sitio seleccionó la opción **Administrators can enable o disable this hook** (Los administradores pueden habilitar o inhabilitar este gancho) al crear el gancho de pre-recepción. Para configurar los ganchos de pre-recepción para un repositorio, debes ser el administrador o el propietario de una organización.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. En la barra lateral izquierda, haz clic en **Hooks** (Ganchos). ![Barra lateral de ganchos](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Junto al gancho de pre-recepción que deseas configurar, haz clic en el menú desplegable **Hook permissions** (Permisos del gancho). Selecciona si deseas habilitar o inhabilitar el gancho de pre-recepción o permite que lo configuren los administradores del repositorio. ![Permisos para ganchos](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### Configurar ganchos de pre-recepción para un repositorio

Un propietario de repositorio solo puede configurar un gancho si el administrador del sitio seleccionó la opción **Administrators can enable or disable this hook** (Los administradores pueden habilitar o inhabilitar este gancho) al crear el gancho de pre-recepción. En una organización, el propietario de la organización también debe haber seleccionado el permiso de gancho **Configurable**. Para configurar los ganchos de pre-recepción para un repositorio, debes ser un propietario de repositorio.

{% data reusables.profile.enterprise_access_profile %}
2. Haz clic en **Repositories** (Repositorios) y selecciona el repositorio para el que deseas configurar los ganchos de pre-recepción. ![Repositorios](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. En la barra lateral izquierda, haz clic en **Hooks & Services** (Ganchos y Servicios). ![Ganchos y servicios](/assets/images/enterprise/repos/hooks-services.png)
5. Junto al gancho de pre-recepción que deseas configurar, haz clic en el menú desplegable **Hook permissions** (Permisos del gancho). Selecciona si deseas habilitar o inhabilitar el gancho de pre-recepción. ![Permisos de gancho del repositorio](/assets/images/enterprise/repos/repo-hook-permissions.png)
