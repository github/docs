---
title: Enabling the dependency graph and Dependabot alerts for your enterprise
intro: 'You can allow users on {% data variables.product.product_location %} to find and fix vulnerabilities in code dependencies by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}.'
versions:
  ghes: '*'
  ghae: issue-4864
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Acerca de las alertas para las dependencias vulnerables en {% data variables.product.product_location %}

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dotcom %} identifica las dependencias vulnerables en los repositorios y crea {% data variables.product.prodname_dependabot_alerts %} en {% data variables.product.product_location %}, utilizando:

- Datos de la {% data variables.product.prodname_advisory_database %}
- El servicio de gráfica de dependencias

Para obtener más información acerca de estas características, consulta las secciones "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" y "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

### Acerca de la sincronización de datos desde la {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Puedes conectar a {% data variables.product.product_location %} con el {% data variables.product.prodname_ghe_cloud %} mediante {% data variables.product.prodname_github_connect %}. Una vez que se haya conectado, los datos de vulnerabilidades se sincronizan desde la {% data variables.product.prodname_advisory_database %} hacia tu instancia cada hora. También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. No se han cargado códigos o información sobre el código desde {% data variables.product.product_location %} hasta {% data variables.product.prodname_dotcom_the_website %}.

Únicamente se sincronizan las asesorías que revisa {% data variables.product.company_short %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

### Acerca del escaneo de los repositorios con datos sincronizados desde la {% data variables.product.prodname_advisory_database %}

Para los repositorios que cuenten con las {% data variables.product.prodname_dependabot_alerts %} habilitadas, el escaneo se activa en cualquier subida a la rama predeterminada. Adicionalmente, cuando se agrega un registro de vulnerabilidades nuevo a la instancia, {% data variables.product.prodname_ghe_server %} escanea todos los repositorios existentes en ella y genera alertas para cualquier repositorio que esté vulnerable. Para obtener más información, consulta la sección "[Detección de dependencias vulnerables](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies)".

### Acerca de la generación de {% data variables.product.prodname_dependabot_alerts %}

Si habilitas la detección de vulnerabilidades, cuando {% data variables.product.product_location %} reciba información sobre una vulnerabilidad, este identificará a los repositorios de tu instancia que utilicen la versión afectada de la dependencia y genere {% data variables.product.prodname_dependabot_alerts %}. Puedes elegir si quieres notificar a los usuarios automáticamente acerca de las {% data variables.product.prodname_dependabot_alerts %} nuevas o no.

## Habilitar la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables en {% data variables.product.product_location %}

### Prerrequisitos

Para que {% data variables.product.product_location %} detecte las dependencias vulnerables y genere {% data variables.product.prodname_dependabot_alerts %}:
- You must enable {% data variables.product.prodname_github_connect %}. {% ifversion ghae %}Esto también habilita el servicio de la gráfica de dependencias.{% endif %}{% ifversion ghes or ghae %}Para obtener más información, consulta la sección "[Administrar {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".{% endif %}
{% ifversion ghes %}- Debes habilitar el servicio de gráficas de dependencia.{% endif %}
- Debes habilitar el escaneo de vulnerabilidades.

{% ifversion ghes %}
{% ifversion ghes > 3.1 %}
Puedes habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %} o del shell administrativo. Te recomendamos que sigas la ruta de la {% data variables.enterprise.management_console %} a menos de que {% data variables.product.product_location %} utilice clústering.

### Habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "Seguridad", haz clic en **Gráfica de dependencias**. ![Casilla de verificación para habilitar o inhabilitar la gráfica de dependencias](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.

### Habilitar la gráfica de dependencias a través del shell administrativo
{% endif %}{% ifversion ghes < 3.2 %}
### Habilitar la gráfica de dependencias
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. En el shell administrativo, habilita la gráfica de dependencias en {% data variables.product.product_location %}:
    {% ifversion ghes > 3.1 %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Aplica la configuración
    ```shell
    $ ghe-config-apply
    ```
3. Regresa a {% data variables.product.prodname_ghe_server %}.
{% endif %}

### Habilitar {% data variables.product.prodname_dependabot_alerts %}

{% ifversion ghes %}
Antes de habilitar {% data variables.product.prodname_dependabot_alerts %} para tu instancia, necesitas habilitar la gráfica de dependencias. Para obtener más información, consulta la sección anterior.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Dabjo de "Se pueden escanear los repositorios para encontrar vulnerabilidades", selecciona el menú desplegable y haz clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haz clic en **Habilitado con notificaciones**. ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Tip**: Te recomendamos configurar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.

   {% endtip %}

{% ifversion fpt or ghec or ghes > 3.2 %}
Cuando habilitas las {% data variables.product.prodname_dependabot_alerts %}, deberías considerar también configurar las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Esta característica permite que los desarrolladores arreglen las vulnerabilidades en sus dependencias. Para obtener más información, consulta la sección "[Configurar la seguridad y actualizaciones de versión del {% data variables.product.prodname_dependabot %} en tu empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates)".
{% endif %}

## Ver las dependencias vulnerables en {% data variables.product.product_location %}

Puedes ver todas las vulnerabilidades en {% data variables.product.product_location %} y sincronizar en forma manual los datos de vulnerabilidad desde {% data variables.product.prodname_dotcom_the_website %} para actualizar la lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, haz clic en **Vulnerabilities** (Vulnerabilidades). ![Pestaña de vulnerabilidades de la barra lateral del administrador del sitio](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar los datos de vulnerabilidades, haz clic en **Sync Vulnerabilities now** (Sincronizar vulnerabilidades ahora). ![Botón de Sincronizar vulnerabilidades ahora](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
