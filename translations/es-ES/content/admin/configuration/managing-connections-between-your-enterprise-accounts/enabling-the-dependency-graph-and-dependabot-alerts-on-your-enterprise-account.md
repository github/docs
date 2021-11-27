---
title: Enabling the dependency graph and Dependabot alerts on your enterprise account
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts in repositories in your instance.'
shortTitle: Enable dependency analysis
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts on {% data variables.product.product_location %}.'
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

{% data variables.product.prodname_dotcom %} identifies vulnerable dependencies in repositories and creates {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}, using:

- Data from the {% data variables.product.prodname_advisory_database %}
- The dependency graph service

For more information about these features, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### About synchronization of data from the {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} with {% data variables.product.prodname_github_connect %}. Once connected, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. No se han cargado códigos o información sobre el código desde {% data variables.product.product_location %} hasta {% data variables.product.prodname_dotcom_the_website %}.

### About generation of {% data variables.product.prodname_dependabot_alerts %}

If you enable vulnerability detection, when {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in your instance that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}.

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.product_location %}

### Prerrequisitos

For {% data variables.product.product_location %} to detect vulnerable dependencies and generate {% data variables.product.prodname_dependabot_alerts %}:
- Debes conectar a {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghae %}This also enables the dependency graph service. {% endif %}{% ifversion ghes or ghae-next %}For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."{% endif %}
{% ifversion ghes %}- You must enable the dependency graph service.{% endif %}
- You must enable vulnerability scanning.

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
{% endif %}

### Habilitar {% data variables.product.prodname_dependabot_alerts %}

{% ifversion ghes %}
Antes de habilitar {% data variables.product.prodname_dependabot_alerts %} para tu instancia, necesitas habilitar la gráfica de dependencias. Para obtener más información, consulta la sección anterior.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Repositories can be scanned for vulnerabilities", select the drop-down menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**. ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Tip**: We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.

   {% endtip %}

## Ver las dependencias vulnerables en {% data variables.product.product_location %}

Puedes ver todas las vulnerabilidades en {% data variables.product.product_location %} y sincronizar en forma manual los datos de vulnerabilidad desde {% data variables.product.prodname_dotcom_the_website %} para actualizar la lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, haz clic en **Vulnerabilities** (Vulnerabilidades). ![Pestaña de vulnerabilidades de la barra lateral del administrador del sitio](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar los datos de vulnerabilidades, haz clic en **Sync Vulnerabilities now** (Sincronizar vulnerabilidades ahora). ![Botón de Sincronizar vulnerabilidades ahora](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
