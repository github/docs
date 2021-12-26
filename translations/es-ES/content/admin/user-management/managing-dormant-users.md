---
title: Administrar usuarios inactivos
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: 'Se considera una cuenta de usuario como durmiente si no ha tenido actividad por lo menos en todo un mes.{% if enterpriseServerVersions contains currentVersion %} Puedes elegir suspender a los usuarios durmientes para liberar licencias de usuario.{% endif %}'
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
---

"Actividad" incluye, entre otros:
- Iniciar sesión en {% data variables.product.product_name %}.
- Comentar en propuestas y en solicitudes de extracción.
- Crear, eliminar, observar y destacar repositorios.
- Subida de confirmaciones.{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Acceder a los recursos utilizando un token de acceso personal o llave de SSH.{% endif %}

### Visualizar usuarios inactivos

Puedes ver una lista de todos los usuarios inactivos que no han sido suspendidos y que no son administradores del sitio.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral de la izquierda, haz clic en **Usuarios inactivos**. ![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% if enterpriseServerVersions contains currentVersion %}
4. Para suspender todos los usuarios inactivos de esta lista, haz clic en **Suspender todos**, en la parte superior de la página. ![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

### Determinar si un usuario está inactivo

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. En la sección **Información del usuario**, un punto rojo con la palabra "Inactiva" indica que la cuenta del usuario está inactiva, y un punto verde con la palabra "Activa" indica que la cuenta del usuario está activa. ![Cuenta de usuario inactiva](/assets/images/enterprise/stafftools/dormant-user.png) ![Cuenta de usuario activa](/assets/images/enterprise/stafftools/active-user.png)

### Configurar el umbral de inactividad

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Umbral de inactividad", usa el menú desplegable y haz clic en el umbral de inactividad deseado. ![Menú desplegable Umbral de inactividad](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
