---
title: Suspender y anular suspensión de usuarios
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
intro: 'Si un usuario se va o se traslada a un lugar diferente de la empresa, deberías eliminar o modificar su posibilidad de acceder a {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Puedes suspender las cuentas de usuario de {% data variables.product.prodname_ghe_server %} de aquellos que abandonen la compañía para abrir licencias de usuario en tu licencia de {% data variables.product.prodname_enterprise %} preservando las propuestas, comentarios, repositorios, gists y otros datos que hayan creado. Los usuarios suspendidos no pueden iniciar sesión en tu instancia, y no pueden subir ni extraer un código.

Cuando suspendes un usuario, la modificación entra en efecto de inmediato sin notificar al usuario. Si el usuario intenta extraer o subir un repositorio, recibirá el siguiente error:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Tu cuenta está suspendida. Consulta a tu administrador de instalación.
fatal: El extremo remoto colgó inesperadamente
```

Antes de suspender administradores del sitio, debes degradarlos a usuarios normales. Para obtener más información, consulta "[Promover o degradar a un administrador del sitio](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)."

{% tip %}

**Nota:** Si [la sincronización LDAP está activada](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) para {% data variables.product.product_location %}, los usuarios son suspendidos automáticamente cuando son eliminados del servidor de directorios LDAP. Cuando la sincronización LDAP está activada para tu instancia, los métodos de suspensión de usuario normal están desactivados.

{% endtip %}

### Suspender un usuario desde el tablero de administrador de usuarios

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "Suspensión de cuenta", en el cuadro rojo de Zona de peligro, haz clic en **Suspender**. ![Botón Suspender](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Indica un motivo para suspender al usuario. ![Motivo de suspensión](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### Anular la suspensión de un usuario desde el tablero de administrador de usuarios

Como cuando se suspende un usuario, anular la suspensión entra en efecto de inmediato. El usuario no será notificado.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral de la izquierda, haz clic en **Usuarios suspendidos**. ![Pestaña Usuarios suspendidos](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Haz clic en el nombre de la cuenta de usuario de la que quieres anular la suspensión. ![Usuario suspendido](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. En "Suspensión de cuenta", en el cuadro rojo de Zona de peligro, haz clic en **Anular suspensión**. ![Botón Anular suspensión](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Indica un motivo para anular la suspensión del usuario. ![Motivo de anulación de suspensión](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### Suspender un usuario desde la línea de comandos

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Ejecuta [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) con el nombre de usuario a suspender.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### Crear un mensaje personalizado para usuarios suspendidos

Puedes crear un mensaje personalizado que los usuarios suspendidos verán cuando intenten iniciar sesión.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Haz clic en **Agregar mensaje**. ![Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Escribe tu mensaje en el cuadro **Mensaje para usuario suspendido**. Puedes escribir Markdown o usar la barra de herramientas Markdown para diseñar tu mensaje. ![Mensaje para usuario suspendido](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Haz clic en el botón **Vista previa** en el campo **Mensaje para usuario suspendido** para ver el mensaje representado. ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje presentado de usuario suspendido](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Anular la suspensión de un usuario desde la línea de comandos

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Ejecuta [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) con el nombre de usuario a anular la suspensión.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### Leer más
- "[Suspender a un usuario](/rest/reference/enterprise-admin#suspend-a-user)"
