---
title: Configurar visibilidad para los miembros de la organización
intro: Puedes establecer la visibilidad para nuevos miembros de la organización en toda tu instancia como pública o privada. También puedes hacer que los miembros no puedan modificar su visibilidad de la establecida por defecto.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
  - Organizations
  - User account
---
También puedes implementar tu configuración por defecto en todos los miembros actuales de la organización en tu instancia usando una utilidad de línea de comandos. Por ejemplo, si quieres solicitar que la visibilidad de cada miembro de la organización sea pública, puedes establecer la configuración predeterminada como pública e implementar la predeterminada para todos los nuevos miembros en los parámetros de administración, y luego usar la utilidad de línea de comandos para implementar la configuración pública en los miembros existentes.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. En "Visibilidad predeterminada de los miembros de la organización", usa el menú desplegable y haz clic en **Private (Privada)** o **Public (Pública)**. ![Menú desplegable con opción para configurar la visibilidad predeterminada de los miembros de la organización como pública o privada](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Opcionalmente, para evitar que los miembros modifiquen la visibilidad de su membresía respecto de la predeterminada, selecciona **Implementar en los miembros de la organización**. ![Casilla de verificación para implementar la configuración predeterminada en todos los miembros](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png)
5. Si quieres implementar tu nueva configuración de visibilidad en todos los miembros existentes, usa la utilidad de línea de comandos `ghe-org-membership-update`. Para obtener más información, consulta "[Utilidades de línea de comandos](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)."
