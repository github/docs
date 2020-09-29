---
title: Impedir que los usuarios modifiquen el acceso de lectura Git anónimo
intro: 'Puedes hacer que los administradores de repositorio no modifiquen el acceso de lectura Git anónimo a un repositorio {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} o a todos los repositorios{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Para hacer que los administradores de repositorio no puedan modificar los parámetros de acceso de lectura Git anónimo para un repositorio específico, puedes bloquear los parámetros de acceso del repositorio. Una vez que bloqueas los parámetros de acceso de lectura Git de un repositorio, solo un administrador del sitio puede modificar los parámetros.

El administrador de un repositorio puede modificar el acceso de lectura Git anónimo para un repositorio público si no es una bifurcación. Para obtener más información, consulta "[Permitir que los administradores habiliten el acceso de lectura anónimo de Git para los repositorios públicos](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)."

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

### Impedir que los usuarios modifiquen el acceso de lectura Git anónimo para un repositorio

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. En "Zona de peligro", selecciona **Impedir que los administradores de repositorio activen el acceso de lectura Git anónimo**. ![Seleccionar la casilla de verificación para que el repositorio no pueda modificar los parámetros de acceso de lectura Git anónimo](/assets/images/enterprise/site-admin-settings/lock-repo-from-changing-anonymous-git-read-access.png)

### Impedir que los usuarios modifiquen el acceso de lectura Git anónimo para todos los repositorios

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
3. En "Acceso de lectura Git anónimo", confirma que los parámetros estén activados, luego selecciona **Impedir que los administradores de repositorio modifiquen el acceso de lectura Git anónimo**. ![Seleccionar la casilla de verificación para que el repositorio no pueda modificar globalmente los parámetros de acceso de lectura Git anónimo](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

