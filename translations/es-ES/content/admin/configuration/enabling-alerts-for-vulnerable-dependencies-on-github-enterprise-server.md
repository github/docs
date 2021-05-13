---
title: Habilitar las alertas para las dependencias vulnerables en GitHub Enterprise Server
intro: 'Puedes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_ghe_cloud %} y habilitar las {% if currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot %}{% else %}{% endif %} para las dependencias vulnerables en los repositorios de tu instancia.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Acerca de las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Puedes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom_the_website %} y luego sincronizar los datos de las vulnerabilidades con tu instancia y generar {% if currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot %}{% else %}{% endif %} en los repositorios con una dependencia vulnerable.

Después de conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom_the_website %} y de habilitar las{% if currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot %}{% else %}{% endif %} para las dependencias vulnerables, los datos de las vulnerabilidade se sincronizan cada hora desde el {% data variables.product.prodname_dotcom_the_website %} a tu instancia. También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. No se han cargado códigos o información sobre el código desde {% data variables.product.product_location %} hasta {% data variables.product.prodname_dotcom_the_website %}.

{% if currentVersion ver_gt "enterprise-server@2.21" %}Cuando {% data variables.product.product_location %} recibe información acerca de una vulnerabilidad, éste identificará los repositorios en tu instancia que utilicen la versión de la dependencia que presenta la afectación y generará {% data variables.product.prodname_dependabot_alerts %}. Puedes personalizar la forma en la que recibes las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Configurar notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)".
{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}Cuando {% data variables.product.product_location %}recibe información sobre una vulnerabilidad, éste identificará los repositorios en tu instancia que utilicen la versión afectada de la dependencia y generará alertas de seguridad. Puedes personalizar la forma en la que recibes las alertas de seguridad. Para obtener más información, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)".
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" %}Cuando {% data variables.product.product_location %}recibe información sobre una vulnerabilidad, éste identificará los repositorios en tu instancia que utilicen la versión afectada de la dependencia y generará alertas de seguridad. Puedes personalizar la forma en la que recibes las alertas de seguridad. Para obtener más información, consulta "[Elegir el método de entrega para tus notificaciones](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications#choosing-the-delivery-method-for-security-alerts-for-vulnerable-dependencies)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Habilitar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}
{% else %}
### Habilitar alertas de seguridad para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}
{% endif %}

Antes de habilitar {% if currentVersion ver_gt "enterprise-server@2.21" %}las alertas de seguridad del {% data variables.product.prodname_dependabot %}{% else %}{% endif %} para las dependencias vulnerables en {% data variables.product.product_location %}, debes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Conectar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Te recomendamos configurar las {% data variables.product.prodname_dependabot_alerts %} sin incluir notificaciones por los primeros días para evitar una sobrecarga de mensajes de correo electrónico. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}Te recomendamos configurar las alertas de seguridad sin incluir notificaciones por los primeros días para evitar una sobrecarga de mensajes de correo electrónico. Después de algunos cuantos días, puedes habilitar las notificaciones para recibir alertas de seguridad como de costumbre.{% endif %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}

1. En el shell administrativo, habilita las {% if currentVersion ver_gt "enterprise-server@2.21" %} alertas de seguridad del {% data variables.product.prodname_dependabot %}{% else %}{% endif %} para las dependencias vulnerables en {% data variables.product.product_location %}:

 ``` shell
$ ghe-dep-graph-enable
```
   {% note %}

   **Nota**: Para obtener más información acerca de cómo habilitar el acceso al shell administrativo por SSH, consulta la sección "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)".

   {% endnote %}

3. Regresa a

{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Debajo de "Los repositorios pueden escanearse par encontrar vulnerabilidades", utiliza el menú desplegable y selecciona **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, selecciona **Habilitado con notificaciones**.{% else %}
5. En "Los repositorios se pueden escanear para encontrar vulnerabilidades", usa el menú desplegable y selecciona **Enabled** (Habilitado).
{% endif %}
   ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Ver las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}

Puedes ver todas las vulnerabilidades en {% data variables.product.product_location %} y sincronizar en forma manual los datos de vulnerabilidad desde {% data variables.product.prodname_dotcom_the_website %} para actualizar la lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, haz clic en **Vulnerabilities** (Vulnerabilidades). ![Pestaña de vulnerabilidades de la barra lateral del administrador del sitio](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar los datos de vulnerabilidades, haz clic en **Sync Vulnerabilities now** (Sincronizar vulnerabilidades ahora). ![Botón de Sincronizar vulnerabilidades ahora](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
