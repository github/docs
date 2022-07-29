---
title: Habilitar al Dependabot en tu empresa
intro: 'Puedes permitir que los usuarios de {% data variables.product.product_location %} encuentren y corrijan las vulnerabilidades de las dependencias de código si habilitas las {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} y las {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
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
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Acerca del {% data variables.product.prodname_dependabot %} para {% data variables.product.product_name %}

El {% data variables.product.prodname_dependabot %} ayuda a que los usuarios de {% data variables.product.product_location %} encuentren y corrijan vulnerabilidades en sus dependencias.{% ifversion ghes > 3.2 %} Puedes habilitar las {% data variables.product.prodname_dependabot_alerts %} para notificar a los usuarios sobre dependencias vulnerables y {% data variables.product.prodname_dependabot_updates %} para corregir las vulnerabilidades y mantener actualziadas las dependencias a su última versión.

### Acerca de {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Con las {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifica las dependencias inseguras en los repositorios y crea alertas en {% data variables.product.product_location %} utilizando datos de la {% data variables.product.prodname_advisory_database %} y el servicio de la gráfica de dependencias.

{% data reusables.repositories.tracks-vulnerabilities %}

Después de que habilitas las {% data variables.product.prodname_dependabot_alerts %} para tu empresa, los datos de las vulnerabilidades se sincronizan desde la {% data variables.product.prodname_advisory_database %} con tu instancia una vez por hora. Únicamente se sincronizan las asesorías que revisa {% data variables.product.company_short %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. Para obtener más información, consulta la sección "[Ver los datos de vulnerabilidad de tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

{% note %}

**Nota:** cuando habilitas las {% data variables.product.prodname_dependabot_alerts %}, no se carga código ni información sobre este desde {% data variables.product.product_location %} hacia {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

Cuando {% data variables.product.product_location %} recibe la información sobre una vulnerabilidad, identifica los repositorios de {% data variables.product.product_location %} que utilizan la versión afectada de la dependencia y genera {% data variables.product.prodname_dependabot_alerts %}. Puedes elegir si quieres notificar a los usuarios automáticamente acerca de las {% data variables.product.prodname_dependabot_alerts %} nuevas o no.

Para los repositorios que cuenten con las {% data variables.product.prodname_dependabot_alerts %} habilitadas, el escaneo se activa en cualquier subida a la rama predeterminada. Adicionalmente, cuando se agrega un registro de vulnerabilidad nuevo a {% data variables.product.product_location %}, {% data variables.product.product_name %} escanea todos los repositorios existentes en {% data variables.product.product_location %} y genera alertas para cualquier repositorio que esté vulnerable. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes > 3.2 %}
### Acerca de {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Después de que habilitas las {% data variables.product.prodname_dependabot_alerts %}, puedes elegir habilitar las {% data variables.product.prodname_dependabot_updates %}. Cuando se habilitan las {% data variables.product.prodname_dependabot_updates %} de {% data variables.product.product_location %}, los usuarios pueden configurar los repositorios para que sus dependencias se actualicen y mantengan seguras automáticamente.

{% note %}

**Nota:** Las {% data variables.product.prodname_dependabot_updates %} en {% data variables.product.product_name %} requieren utilizar {% data variables.product.prodname_actions %} con ejecutores auto-hospedados.

{% endnote %}

Predeterminadamente, los ejecutores de {% data variables.product.prodname_actions %} que utiliza el {% data variables.product.prodname_dependabot %} necesitan acceso al internet para descargar paquetes actualizados desde administradores de paquetes ascendentes. Para las {% data variables.product.prodname_dependabot_updates %} impulsadas por {% data variables.product.prodname_github_connect %}, el acceso a internet proporciona tus ejecutores con un token que permite el acceso a las dependencias y asesorías hospedadas en {% data variables.product.prodname_dotcom_the_website %}.

Con las {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} crea solicitudes de cambio automáticamente para actualizar las dependencias de dos formas.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Los usuarios agregan un archivo de configuración del {% data variables.product.prodname_dependabot %} al repositorio para habilitar el {% data variables.product.prodname_dependabot %} para que cree solicitudes de cambios cuando se lance una versión nueva de una dependencia rastreada. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}**: Los usuarios pueden alternar un ajuste de repositorio para habilitar que el {% data variables.product.prodname_dependabot %} cree solicitudes de cambios cuando {% data variables.product.prodname_dotcom %} detecta una vulnerabilidad en una de las dependencias de la gráfica de dependencias del repositorio. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

## Habilitar {% data variables.product.prodname_dependabot_alerts %}

Antes de que puedas habilitar las {% data variables.product.prodname_dependabot_alerts %}:
- Debes habilitar {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Administrar {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".{% ifversion ghes %}
- Debes conectar la gráfica de dependencias. Para obtener más información, consulta la sección "[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion dependabot-updates-github-connect %}
1. Debajo de "{% data variables.product.prodname_dependabot %}", a la derecha de "Los usuarios pueden recibir alertas de vulnerabilidades para las dependencias de código libre", selecciona el menú desplegable y haz clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haz clic en **Habilitado con notificaciones**.

   ![Captura de pantalla del menú desplegable para habilitar el escaneo de repositorios en busca de vulnerabilidades](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Dabjo de "Se pueden escanear los repositorios para encontrar vulnerabilidades", selecciona el menú desplegable y haz clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haz clic en **Habilitado con notificaciones**. ![Menú desplegable para habilitar el escaneo de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
{%- endif %}
   {% tip %}

   **Tip**: Te recomendamos configurar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de algunos días, puedes habilitar las notificaciones para recibir las {% data variables.product.prodname_dependabot_alerts %} como de costumbre.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Habilitar {% data variables.product.prodname_dependabot_updates %}

Después de que habilitas las {% data variables.product.prodname_dependabot_alerts %} para tu empresa, puedes habilitar las {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %}
Antes de habilitar las {% data variables.product.prodname_dependabot_updates %}, debes configurar {% data variables.product.product_location %} para utilizar las {% data variables.product.prodname_actions %} con los ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

Las {% data variables.product.prodname_dependabot_updates %} no son compatibles con {% data variables.product.product_name %} si tu empresa utiliza clústering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "Seguridad", selecciona **{% data variables.product.prodname_dependabot_security_updates %}**.

   ![Captura de pantalla de la casilla de verificación para habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.
1. Configura los ejecutores auto-hospedados para crear las solicitudes de cambio que actualizarán las dependencias. Para obtener más información, consulta la sección "[Administrar los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %} en tu empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Debajo de "{% data variables.product.prodname_dependabot %}", a la derecha de "Los usuarios pueden mejorar fácilmente a dependencias de código abierto no vulnerables", haz clic en **Habilitar**.

   ![Captura de pantalla del menú desplegable para habilitar la actualización de las dependencias vulnerables](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %}
{% ifversion ghes > 3.2 %}

Cuando habilitas las {% data variables.product.prodname_dependabot_alerts %}, deberías considerar también configurar las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Esta característica permite que los desarrolladores arreglen las vulnerabilidades en sus dependencias. Para obtener más información, consulta la sección "[Administrar los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %} en tu empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".

Si necesitas una seguridad mejorada, te recomendamos configurar al {% data variables.product.prodname_dependabot %} para utilizar los registros privados. Para obtener más información, consulta la sección "[Administrar los secretos cifrados para el {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)".

{% endif %}
