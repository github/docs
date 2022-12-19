---
title: Administrar ganchos de pre-recepción en el aparato del Servidor de GitHub Enterprise
intro: 'Configurar cómo las personas usarán sus ganchos de pre-recepción dentro de su aparato de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112505'
---
## Crear ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. Haga clic en **Add pre-receive hook**.
![Agregar enlace previo a la recepción](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. En el campo **Hook name**, escriba el nombre del enlace que desea crear.
![Asignar un nombre al enlace previo a la recepción](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. En el menú desplegable **Environment**, seleccione el entorno en el que desea que se ejecute el enlace.
![Entorno del enlace](/assets/images/enterprise/site-admin-settings/environment.png)
7. En **Script**, en el menú desplegable **Select hook repository**, seleccione el repositorio que contiene el script del enlace de recepción previa. En el menú desplegable **Select file**, seleccione el nombre de archivo del script del enlace de recepción previa.
![Script de enlace](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Seleccione **Use the exit-status to accept or reject pushes** para aplicar el script. Al quitar la marca de selección de esta opción podrás probar el script mientras se ignora el valor del estado de salida. En este modo, el resultado del script estará visible para el usuario en la línea de comandos pero no en la interfaz web.
![Usar el estado de salida](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Seleccione **Enable this pre-receive hook on all repositories by default** si desea que el enlace de recepción previa se ejecute en todos los repositorios.
![Habilitar enlace para todos los repositorios](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Seleccione **Administrators can enable and disable this hook** para permitir que los miembros de la organización con permisos de administrador o propietario seleccionen si desean habilitar o deshabilitar este enlace de recepción previa.
![Habilitar o deshabilitar enlace para administradores](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## Editar ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. Junto al enlace de recepción previa que desea editar, haga clic en {% octicon "pencil" aria-label="The edit icon" %}.
![Editar enlace de recepción previa](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## Eliminar ganchos de pre-recepción

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. Junto al enlace de recepción previa que desea eliminar, haga clic en {% octicon "x" aria-label="X symbol" %}.
![Editar enlace de recepción previa](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Configurar ganchos de pre-recepción para una organización

El administrador de una organización solo puede configurar permisos de enlace para una organización si el administrador del sitio seleccionó la opción **Administrators can enable or disable this hook** al crear el enlace de recepción previa. Para configurar los ganchos de pre-recepción para un repositorio, debes ser el administrador o el propietario de una organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. En la barra lateral de la izquierda, haga clic en **Hooks**.
![Barra lateral Hooks](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Junto al enlace de recepción previa que desea configurar, haga clic en el menú desplegable **Hook permissions**. Selecciona si deseas habilitar o inhabilitar el gancho de pre-recepción o permite que lo configuren los administradores del repositorio.
![Permisos de enlaces](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## Configurar ganchos de pre-recepción para un repositorio

Un propietario de repositorio solo puede configurar un gancho si el administrador del sitio seleccionó la opción **Administrators can enable or disable this hook** al crear el enlace de recepción previa. En una organización, el propietario de la organización también debe haber seleccionado el permiso de enlace **Configurable**. Para configurar los ganchos de pre-recepción para un repositorio, debes ser un propietario de repositorio.

{% data reusables.profile.enterprise_access_profile %}
2. Haga clic en **Repositories** y seleccione el repositorio para el que desea configurar los enlaces de recepción previa.
![Repositorios](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. En la barra lateral de la izquierda, haga clic en **Hooks & Services**.
![Enlaces y servicios](/assets/images/enterprise/repos/hooks-services.png)
5. Junto al enlace de recepción previa que desea configurar, haga clic en el menú desplegable **Hook permissions**. Selecciona si deseas habilitar o inhabilitar el gancho de pre-recepción.
![Permisos de enlace de repositorio](/assets/images/enterprise/repos/repo-hook-permissions.png)
