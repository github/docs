---
title: Permitir a los administradores activar el acceso de lectura Git anónimo a los repositorios públicos
intro: 'Para simplificar el funcionamiento de las herramientas personalizadas en tu instancia y saltear los requisitos de autenticación, puedes permitir a los administradores de repositorio activar el acceso de lectura Git anónimo a los repositorios públicos en {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Si el modo privado está activado, puedes permitir a los administradores de repositorio activar el acceso de lectura Git anónimo a los repositorios públicos en {% data variables.product.product_location_enterprise %}. Para obtener más información acerca del modo privado, consulta "[Activar modo privado](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode/)."

Permitir el acceso de lectura Git anónimo te da la posibilidad de saltear la autenticación para las herramientas personalizadas en tu instancia. Cuando tú o un administrador de repositorio activan esta configuración de acceso a un repositorio, las operaciones Git no autenticadas (y cualquiera con acceso de red a {% data variables.product.prodname_ghe_server %}) tendrán acceso de lectura al repositorio sin autenticación.

También puedes evitar que los administradores de repositorios cambien la configuración de acceso Git anónimo para todos los repositorios o un repositorio específico en {% data variables.product.product_location_enterprise %}. Para obtener más información, consulta "[Evitar que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Acceso de lectura Git anónimo", usa el menú desplegable y haz clic en **Activado**. ![Menú desplegable de acceso de lectura Git anónimo que muestra las opciones de menú "Habilitado" e "Inhabilitado"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para impedir que los administradores de repositorio modifiquen los parámetros de acceso de lectura Git anónimo en todos los repositorios en tu instancia, selecciona **Impedir que los administradores de repositorio modifiquen el acceso de lectura Git anónimo**. ![Selecciona la casilla de verificación para evitar que los administradores del repositorio cambien la configuración de acceso de lectura Git anónimo para todos los repositorios en tu instancia](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Activar el acceso de lectura Git anónimo para un repositorio específico

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. En "Zona de peligro", al lado de "Activar el acceso de lectura Git anónimo", haz clic en **Activar**. ![Botón "Activado" en "Activar el acceso de lectura Git anónimo" en la zona de peligro de los parámetros de administración del sitio de un repositorio ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revisa los cambios. Para confirmar, haz clic en **Sí, habilitar el acceso de lectura Git anónimo.** ![Confirma la configuración de acceso de lectura Git anónimo en la ventana emergente](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Opcionalmente, para impedir que los administradores de repositorio modifiquen estos parámetros para este repositorio, selecciona **Impedir que los administradores de repositorio modifiquen el acceso de lectura Git anónimo**. ![Selecciona la casilla de verificación para evitar que los administradores del repositorio cambien el acceso de lectura Git anónimo para este repositorio](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
