---
title: Habilitar alertas de seguridad para tus dependencias vulnerables en el servidor de GitHub Enterprise
intro: 'Puedes conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_ghe_cloud }} y habilitar alertas de seguridad para las dependencias vulnerables de los repositorios de tu instancia.'
permissions: 'Los administradores de sitio para {{ site.data.variables.product.prodname_ghe_server }} que también sean dueños de la cuenta organizacional o empresarial conectada de {{ site.data.variables.product.prodname_ghe_cloud }} pueden habilitar las alertas de seguridad para las dependencias vulnerables en {{ site.data.variables.product.prodname_ghe_server }}.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### Acerca de las alertas para las dependencias vulnerables en {{ site.data.variables.product.prodname_ghe_server }}

{{ site.data.reusables.repositories.tracks-vulnerabilities }} Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Puedes conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_dotcom_the_website }}, luego sincronizar los datos de vulnerabilidad para tu instancia y generar alertas de seguridad en los repositorios con dependencias vulnerables.

Luego de conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_dotcom_the_website }} y de habilitar las alertas de seguridad para las dependencias vulnerables, los datos de vulnerabilidad se sincronizan desde {{ site.data.variables.product.prodname_dotcom_the_website }} hasta tu instancia cada una hora. También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. No se han cargado códigos o información sobre el código desde {{ site.data.variables.product.product_location_enterprise }} hasta {{ site.data.variables.product.prodname_dotcom_the_website }}.

Cuando {{ site.data.variables.product.product_location_enterprise }} recibe información sobre una vulnerabilidad, identificará repositorios en su instancia que usa la versión afectada de la dependencia y envía alertas de seguridad a los propietarios y a las personas con accesos administrativos en estos repositorios. Pueden personalizar cómo recibir las alertas de seguridad. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)".

### Habilitar alertas de seguridad para las dependencias vulnerables en {{ site.data.variables.product.prodname_ghe_server }}

Antes de habilitar las alertas de seguridad para dependencias vulnerables en {{ site.data.variables.product.product_location_enterprise }}, debes conectar {{ site.data.variables.product.product_location_enterprise }} en {{ site.data.variables.product.prodname_dotcom_the_website }}. Para obtener más información, consulta "[Conectar {{ site.data.variables.product.prodname_ghe_server }} a {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% if currentVersion ver_gt "enterprise-server@2.20" %} Te recomendamos configurar las alertas de seguridad sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de algunos cuantos días, puedes habilitar las notificaciones para recibir alertas de seguridad como de costumbre.{% endif %}

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
2. En el shell administrativo, habilita las alertas de seguridad para las dependencias vulnerables en {{ site.data.variables.product.product_location_enterprise }}:
 ``` shell
$ ghe-dep-graph-enable
```
3. Regresar a {{ site.data.variables.product.prodname_ghe_server }}.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Debajo de "Los repositorios pueden escanearse par encontrar vulnerabilidades", utiliza el menú desplegable y selecciona **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, selecciona **Habilitado con notificaciones**.{% else %}
5. En "Los repositorios se pueden escanear para encontrar vulnerabilidades", usa el menú desplegable y selecciona **Enabled** (Habilitado).
{% endif %}
   ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Ver las dependencias vulnerables en {{ site.data.variables.product.prodname_ghe_server }}

Puedes ver todas las vulnerabilidades en {{ site.data.variables.product.product_location_enterprise }} y sincronizar en forma manual los datos de vulnerabilidad desde {{ site.data.variables.product.prodname_dotcom_the_website }} para actualizar la lista.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
2. En la barra lateral izquierda, haz clic en **Vulnerabilities** (Vulnerabilidades). ![Pestaña de vulnerabilidades de la barra lateral del administrador del sitio](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar los datos de vulnerabilidades, haz clic en **Sync Vulnerabilities now** (Sincronizar vulnerabilidades ahora). ![Botón de Sincronizar vulnerabilidades ahora](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
