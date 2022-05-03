---
title: Enabling Dependabot for your enterprise
intro: 'You can allow users of {% data variables.product.product_location %} to find and fix vulnerabilities in code dependencies by enabling {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} and {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
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
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
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

## About {% data variables.product.prodname_dependabot %} for {% data variables.product.product_name %}

El {% data variables.product.prodname_dependabot %} ayuda a que los usuarios de {% data variables.product.product_location %} encuentren y corrijan vulnerabilidades en sus dependencias.{% ifversion ghes > 3.2 %} Puedes habilitar las {% data variables.product.prodname_dependabot_alerts %} para notificar a los usuarios sobre dependencias vulnerables y {% data variables.product.prodname_dependabot_updates %} para corregir las vulnerabilidades y mantener actualziadas las dependencias a su última versión.

### Acerca de {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Con las {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifica las dependencias vulnerables en los repositorios y crea alertas en {% data variables.product.product_location %} utilizando datos de la {% data variables.product.prodname_advisory_database %} y del servicio de la gráfica de dependencias.

{% data reusables.repositories.tracks-vulnerabilities %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. Únicamente se sincronizan las asesorías que revisa {% data variables.product.company_short %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. Para obtener más información, consulta la sección "[Ver los datos de vulnerabilidad de tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

{% note %}

**Note:** When you enable enable {% data variables.product.prodname_dependabot_alerts %}, no code or information about code from {% data variables.product.product_location %} is uploaded to {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

When {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in  {% data variables.product.product_location %} that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. Puedes elegir si quieres notificar a los usuarios automáticamente acerca de las {% data variables.product.prodname_dependabot_alerts %} nuevas o no.

Para los repositorios que cuenten con las {% data variables.product.prodname_dependabot_alerts %} habilitadas, el escaneo se activa en cualquier subida a la rama predeterminada. Additionally, when a new vulnerability record is added to {% data variables.product.product_location %}, {% data variables.product.product_name %} scans all existing repositories on {% data variables.product.product_location %} and generates alerts for any repository that is vulnerable. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes > 3.2 %}
### Acerca de {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can choose to enable {% data variables.product.prodname_dependabot_updates %}. When {% data variables.product.prodname_dependabot_updates %} are enabled for {% data variables.product.product_location %}, users can configure repositories so that their dependencies are updated and kept secure automatically.

{% note %}

**Note:** {% data variables.product.prodname_dependabot_updates %} on {% data variables.product.product_name %} requires {% data variables.product.prodname_actions %} with self-hosted runners.

{% endnote %}

With {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} automatically creates pull requests to update dependencies in two ways.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Los usuarios agregan un archivo de configuración del {% data variables.product.prodname_dependabot %} al repositorio para habilitar el {% data variables.product.prodname_dependabot %} para que cree solicitudes de cambios cuando se lance una versión nueva de una dependencia rastreada. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}**: Los usuarios pueden alternar un ajuste de repositorio para habilitar que el {% data variables.product.prodname_dependabot %} cree solicitudes de cambios cuando {% data variables.product.prodname_dotcom %} detecta una vulnerabilidad en una de las dependencias de la gráfica de dependencias del repositorio. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

## Habilitar {% data variables.product.prodname_dependabot_alerts %}

Before you can enable {% data variables.product.prodname_dependabot_alerts %}:
- You must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."{% ifversion ghes %}
- Debes conectar la gráfica de dependencias. Para obtener más información, consulta la sección "[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- if dependabot-updates-github-connect %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of "Users can receive vulnerability alerts for open source code dependencies", select the dropdown menu and click **Enabled without notifications**. Opcionalmente, para habilitar las alertas con notificaciones, haz clic en **Habilitado con notificaciones**.

   ![Screenshot of the dropdown menu to enable scanning repositories for vulnerabilities](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Dabjo de "Se pueden escanear los repositorios para encontrar vulnerabilidades", selecciona el menú desplegable y haz clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haz clic en **Habilitado con notificaciones**. ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
{%- endif %}
   {% tip %}

   **Tip**: Te recomendamos configurar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.

   {% endtip %}

{% if dependabot-updates-github-connect %}
## Habilitar {% data variables.product.prodname_dependabot_updates %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise, you can enable {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %}
Before you enable {% data variables.product.prodname_dependabot_updates %}, you must configure {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %} with self-hosted runners. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

{% data variables.product.prodname_dependabot_updates %} are not supported on {% data variables.product.product_name %} if your enterprise uses clustering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security", select **{% data variables.product.prodname_dependabot_security_updates %}**.

   ![Screenshot of the checkbox to enable or disable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.
1. Configure self-hosted runners to create the pull requests that will update dependencies. Para obtener más información, consulta la sección "[Administrar los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %} en tu empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of "Users can easily upgrade to non-vulnerable open source code dependencies", click **Enable**.

   ![Screenshot of the dropdown menu to enable updating vulnerable dependencies](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% elsif ghes > 3.2 %}
Cuando habilitas las {% data variables.product.prodname_dependabot_alerts %}, deberías considerar también configurar las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Esta característica permite que los desarrolladores arreglen las vulnerabilidades en sus dependencias. Para obtener más información, consulta la sección "[Administrar los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %} en tu empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".
{% endif %}
