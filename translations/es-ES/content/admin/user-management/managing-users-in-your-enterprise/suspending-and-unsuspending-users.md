---
title: Suspender y anular suspensión de usuarios
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'Si un usuario se va o se traslada a un lugar diferente de la empresa, debes eliminar o modificar su posibilidad de acceder a {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: d888678438f62fb585dac1cab4905ff02d8eb824
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331908'
---
Puedes suspender las cuentas de usuario de {% data variables.product.prodname_ghe_server %} de aquellos que abandonen la compañía para abrir licencias de usuario en tu licencia de {% data variables.product.prodname_enterprise %} preservando las propuestas, comentarios, repositorios, gists y otros datos que hayan creado. Los usuarios suspendidos no pueden iniciar sesión en tu instancia, y no pueden subir ni extraer un código.

Cuando suspendes un usuario, la modificación entra en efecto de inmediato sin notificar al usuario. Si el usuario intenta extraer o subir un repositorio, recibirá el siguiente error:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Antes de suspender administradores del sitio, debes degradarlos a usuarios normales. Para obtener más información, vea "[Promoción o degradación de un administrador de sitio](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)".

{% tip %}

**Nota**: Si la [sincronización ldap está habilitada](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) para {% data variables.product.product_location %}, los usuarios se suspenden automáticamente cuando se quitan del servidor de directorio LDAP. Cuando la sincronización LDAP está activada para tu instancia, los métodos de suspensión de usuario normal están desactivados.

{% endtip %}

## Suspender un usuario desde el tablero de administrador de usuarios

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "Account suspension" (Suspensión de la cuenta), en el cuadro rojo Danger Zone, haga clic en **Suspend** (Suspender).
![Botón suspender](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Indica un motivo para suspender al usuario.
![Motivo de suspensión](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## Anular la suspensión de un usuario desde el tablero de administrador de usuarios

Como cuando se suspende un usuario, anular la suspensión entra en efecto de inmediato. El usuario no será notificado.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral izquierda, haga clic en **Suspended Users** (Usuarios suspendidos).
![Pestaña usuarios suspendidos](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Haz clic en el nombre de la cuenta de usuario de la que quieres anular la suspensión.
![Suspended user](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) (Usuario suspendido) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. En "Account suspension" (Suspension de la cuenta), en el cuadro rojo Danger Zone (Zona de peligro), haga clic en **Unsuspend** (Anular suspensión).
![Botón anular suspensión](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Indica un motivo para anular la suspensión del usuario.
![Motivo de anulación de suspensión](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## Suspender un usuario desde la línea de comandos

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Ejecute [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) con el nombre de usuario que se va a suspender.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

## Crear un mensaje personalizado para usuarios suspendidos

Puedes crear un mensaje personalizado que los usuarios suspendidos verán cuando intenten iniciar sesión.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. Haga clic en **Add message** (Agregar mensaje).
![Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Escriba el mensaje en el cuadro **Suspended user message** (Mensaje de usuario suspendido). Puedes escribir Markdown o usar la barra de herramientas Markdown para diseñar tu mensaje.
![Mensaje de usuario suspendido](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Haga clic en el botón **Preview** (Vista previa) en el campo **Suspended user message** (Mensaje de usuario suspendido) para ver el mensaje representado.
![botón Vista previa](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Revisar el mensaje presentado.
![Mensaje de usuario suspendido representado](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## Anular la suspensión de un usuario desde la línea de comandos

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Ejecute [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) con el nombre de usuario del que se va a anular la suspensión.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

## Información adicional
- "[Suspensión de un usuario](/rest/reference/enterprise-admin#suspend-a-user)"
