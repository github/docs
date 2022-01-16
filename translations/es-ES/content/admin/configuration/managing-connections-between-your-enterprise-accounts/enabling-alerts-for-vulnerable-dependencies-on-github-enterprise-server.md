---
title: Habilitar las alertas para las dependencias vulnerables en GitHub Enterprise Server
intro: 'Puedes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_ghe_cloud %} y habilitar la gráfica de dependencias y el {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}alertas de seguridad{% endif %} en los repositorios de tu instancia.'
shortTitle: Habilitar las alertas para las dependencias
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts on {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Acerca de las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}

Para identificar las dependencias vulnerables en tu repositorio y recibir alertas sobre las vulnerabilidades, necesitas habilitar dos características de seguridad:
- La gráfica de dependencias
- Las alertas del {% data variables.product.prodname_dependabot %}

Para obtener más información, consulta las secciones "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" y "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% data reusables.repositories.tracks-vulnerabilities %}

Puedes conectar a {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %} y luego sincronizar los datos de vulnerabilidades a tu instancia y generar {% data variables.product.prodname_dependabot_alerts %} en los repositorios con dependencias vulnerables.

Después de conectar {% data variables.product.product_location %}a {% data variables.product.prodname_dotcom_the_website %} y habilitar la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables, los datos de vulnerabilidad se sincronizan desde {% data variables.product.prodname_dotcom_the_website %} a tu instancia una vez cada hora. También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. No se han cargado códigos o información sobre el código desde {% data variables.product.product_location %} hasta {% data variables.product.prodname_dotcom_the_website %}.

Cuando {% data variables.product.product_location %} recibe información sobre una vulnerabilidad, identificará los repositorios en tu instancia que utilicen la versión afectada de la dependencia y generará {% data variables.product.prodname_dependabot_alerts %}. Puedes personalizar la forma en la que recibes las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Configurar notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)".

Before enabling the dependency graph and {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location %}, you must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

## Habilitar la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} en GitHub Enterprise Server

Para que {% data variables.product.product_location %} genere {% data variables.product.prodname_dependabot_alerts %} cada que las vulnerabilidades se detecten en tus repositorios:
-  Debes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Conectar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."
-  Debes conectar la gráfica de dependencias.

{% ifversion ghes > 3.1 %}
Puedes habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %} o del shell administrativo. Te recomendamos que sigas la ruta de la {% data variables.enterprise.management_console %} a menos de que {% data variables.product.product_location %} utilice clústering.

### Habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %}
{% endif %}{% ifversion ghes > 3.1 %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "Seguridad", haz clic en **Gráfica de dependencias**. ![Casilla de verificación para habilitar o inhabilitar la gráfica de dependencias](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.

### Habilitar la gráfica de dependencias a través del shell administrativo
{% else %}
### Habilitar la gráfica de dependencias
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. En el shell administrativo, habilita la gráfica de dependencias en {% data variables.product.product_location %}:
    ``` shell
    $ {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
   {% note %}

   **Nota**: Para obtener más información acerca de cómo habilitar el acceso al shell administrativo por SSH, consulta la sección "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)".

   {% endnote %}
1. Aplica la configuración
    ```shell
    $ ghe-config-apply
    ```
1. Regresa a {% data variables.product.prodname_ghe_server %}.

### Habilitar {% data variables.product.prodname_dependabot_alerts %}

Antes de habilitar {% data variables.product.prodname_dependabot_alerts %} para tu instancia, necesitas habilitar la gráfica de dependencias. Para obtener más información, consulta la sección anterior.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Debajo de "Los repositorios pueden escanearse par encontrar vulnerabilidades", utiliza el menú desplegable y selecciona **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, selecciona **Habilitado con notificaciones**. ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
   {% note %}

   Te recomendamos configurar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.

   {% endnote %}
## Ver las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}

Puedes ver todas las vulnerabilidades en {% data variables.product.product_location %} y sincronizar en forma manual los datos de vulnerabilidad desde {% data variables.product.prodname_dotcom_the_website %} para actualizar la lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, haz clic en **Vulnerabilities** (Vulnerabilidades). ![Pestaña de vulnerabilidades de la barra lateral del administrador del sitio](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar los datos de vulnerabilidades, haz clic en **Sync Vulnerabilities now** (Sincronizar vulnerabilidades ahora). ![Botón de Sincronizar vulnerabilidades ahora](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
