---
title: Habilitar comprobaciones de actualización automáticas
intro: 'Puedes habilitar comprobaciones de actualización automáticas para que {% data variables.product.product_location_enterprise %} busque y descargue el último lanzamiento del {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Upgrades
---
Cuando un paquete de actualizaciones se descarga automáticamente para {% data variables.product.product_location_enterprise %}, recibirás un mensaje informándote que puedes actualizar el {% data variables.product.prodname_ghe_server %}. Descarga de paquetes para el directorio `/var/lib/ghe-updates` en {% data variables.product.product_location_enterprise %}. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server)."

Si está disponible un hotpatch para una actualización, el `.hpkg` se descargará automáticamente. En la consola de administración puedes elegir instalar el hotpatch de inmediato o programar la instalación para otro momento. Para obtener más información, consulta "[Actualizar con un hotpatch](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)."

{% tip %}

**Consejo:** Para habilitar comprobaciones de actualización automáticas, {% data variables.product.product_location_enterprise %} se debe poder conectar a `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Haz clic en **Yes, automatically check for updates** (Sí, buscar actualizaciones automáticamente). ![Botón para habilitar actualizaciones automáticas](/assets/images/enterprise/management-console/enable_updates_button.png)
{% data reusables.enterprise_management_console.save-settings %}

Para saber si tu instancia está actualizada, busca el mensaje emergente en la pestaña de actualizaciones.

![Mensaje emergente que indica tu lanzamiento del servidor de GitHub Enterprise](/assets/images/enterprise/management-console/up-to-date-banner.png)

En **Logs** (Registros), puedes ver el estado de la búsqueda de actualizaciones más reciente.

![Registros para actualización](/assets/images/enterprise/management-console/update-log.png)
