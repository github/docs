---
title: Promover o degradar a un administrador del sitio
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Los administradores del sitio pueden promover cualquier cuenta de usuarios normales a un administrador del sitio, así como degradar a otros administradores del sitio a usuarios normales.'
versions:
  enterprise-server: '*'
---

{% tip %}

**Nota:** Si [ la sincronización LDAP está activada](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) y se establece el atributo `Administrators group` cuando [se configura el acceso LDAP para usuarios](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), estos usuarios tendrán automáticamente acceso de administrador del sitio para tu instancia. En este caso, no puedes promover usuarios manualmente con los siguientes pasos, debes agregarlos al grupo de administradores LDAP.

{% endtip %}

Para obtener información sobre cómo promover un usuario a un propietario de la organización, consulta la sección `ghe-org-admin-promote` de "[Utilidades de línea de comandos](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)".

### Promover un usuario desde los parámetros de empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. En la esquina superior derecha de la página, haz clic en **Agregar propietario**. ![Botón para agregar un administrador](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. En el campo Buscar, escribe el nombre del usuario y haz clic en **Agregar**. ![Campo de búsqueda para agregar un administrador](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### Degradar un administrador del sitio desde los parámetros de empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. En la esquina superior izquierda de la página, en el campo de búsqueda "Find an administrator" (Encontrar un administrador), escribe el nombre de usuario de la persona que deseas degradar. ![Campo de búsqueda para encontrar un administrador](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. In the search results, find the username of the person you want to demote, then use the {% octicon "gear" %} drop-down menu, and select **Remove owner**. ![Eliminar de la opción de empresa](/assets/images/help/business-accounts/demote-admin-button.png)

### Promover un usuario desde la línea de comandos

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) en tu aparato.
2. Ejecuta [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote) con el nombre de usuario a promover.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### Degradar un administrador del sitio desde la línea de comandos

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) en tu aparato.
2. Ejecuta [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote) con el nombre de usuario a degradar.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
