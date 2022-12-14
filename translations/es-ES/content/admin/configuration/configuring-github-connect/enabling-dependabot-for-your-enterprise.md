---
title: Habilitación de Dependabot para la empresa
intro: 'Puedes dejar que los usuarios de {% data variables.location.product_location %} busquen y corrijan vulnerabilidades en sus dependencias de código habilitando {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} y {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
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
ms.openlocfilehash: 2a7df1dbbe0f8d905bbd1378592dedbec4f43a19
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106729'
---
## Acerca de {% data variables.product.prodname_dependabot %} para {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} ayuda a que los usuarios de {% data variables.location.product_location %} busquen y corrijan vulnerabilidades en sus dependencias.{% ifversion ghes %} Puedes habilitar {% data variables.product.prodname_dependabot_alerts %} para informar a los usuarios de las dependencias vulnerables y {% data variables.product.prodname_dependabot_updates %} para corregir las vulnerabilidades y mantener actualizadas las dependencias a la versión más reciente.

### Acerca de {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Con {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifica las dependencias no seguras en los repositorios y crea alertas sobre {% data variables.location.product_location %} usando datos de {% data variables.product.prodname_advisory_database %} y el servicio de gráfico de dependencias.

{% data reusables.repositories.tracks-vulnerabilities %}

Después de habilitar {% data variables.product.prodname_dependabot_alerts %} para la empresa, los datos de vulnerabilidad se sincronizan desde {% data variables.product.prodname_advisory_database %} con la instancia una vez cada hora. Únicamente se sincronizan las asesorías que revisa {% data variables.product.company_short %}. {% data reusables.security-advisory.link-browsing-advisory-db %} 

También puedes elegir sincronizar manualmente los datos de vulnerabilidad en cualquier momento. Para más información, vea "[Visualización de los datos de vulnerabilidad de la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

{% note %}

**Nota**: Al habilitar {% data variables.product.prodname_dependabot_alerts %}, no se carga ningún código ni información sobre el código de {% data variables.location.product_location %} en {% data variables.product.prodname_dotcom_the_website %}. 

{% endnote %}

Cuando {% data variables.location.product_location %} recibe información sobre una vulnerabilidad, identifica los repositorios de {% data variables.location.product_location %} en los que se usa la versión afectada de la dependencia y genera {% data variables.product.prodname_dependabot_alerts %}. Puedes elegir si quieres notificar a los usuarios automáticamente acerca de las {% data variables.product.prodname_dependabot_alerts %} nuevas o no. 

Para los repositorios que cuenten con las {% data variables.product.prodname_dependabot_alerts %} habilitadas, el escaneo se activa en cualquier subida a la rama predeterminada. Además, cuando se agrega un nuevo registro de vulnerabilidad a {% data variables.location.product_location %}, {% data variables.product.product_name %} examina todos los repositorios existentes en {% data variables.location.product_location %} y genera alertas relativas a cualquier repositorio vulnerable. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes %}
### Acerca de {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Después de habilitar {% data variables.product.prodname_dependabot_alerts %}, puede habilitar {% data variables.product.prodname_dependabot_updates %}. Cuando se habilitan {% data variables.product.prodname_dependabot_updates %} para {% data variables.location.product_location %}, los usuarios pueden configurar los repositorios para que sus dependencias se actualicen y se mantengan seguras de forma automática. 

{% note %} 

**Nota:** {% data variables.product.prodname_dependabot_updates %} en {% data variables.product.product_name %} necesita {% data variables.product.prodname_actions %} con ejecutores autohospedados.

{% endnote %}

De forma predeterminada, los ejecutores de {% data variables.product.prodname_actions %} que usa {% data variables.product.prodname_dependabot %} necesitan acceso a Internet para descargar paquetes actualizados de administradores de paquetes ascendentes. Para {% data variables.product.prodname_dependabot_updates %} con tecnología de {% data variables.product.prodname_github_connect %}, el acceso a Internet proporciona a los ejecutores un token que permite el acceso a dependencias y avisos hospedados en {% data variables.product.prodname_dotcom_the_website %}.

Con {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} crea automáticamente solicitudes de incorporación de cambios para actualizar las dependencias de dos maneras.

- **{% data variables.product.prodname_dependabot_version_updates %}** : los usuarios agregan un archivo de configuración de {% data variables.product.prodname_dependabot %} al repositorio a fin de habilitar {% data variables.product.prodname_dependabot %} para crear solicitudes de incorporación de cambios cuando se publique una versión nueva de una dependencia de la que se realiza el seguimiento. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}** : los usuarios pueden alternar un valor del repositorio a fin de habilitar {% data variables.product.prodname_dependabot %} para crear solicitudes de incorporación de cambios cuando {% data variables.product.prodname_dotcom %} detecte una vulnerabilidad en una de las dependencias del gráfico de dependencias del repositorio. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" y "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

## Habilitación de {% data variables.product.prodname_dependabot_alerts %}

Antes de poder habilitar {% data variables.product.prodname_dependabot_alerts %}:
- Debe habilitar {% data variables.product.prodname_github_connect %}. Para más información, vea "[Administración de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".{% ifversion ghes %}
- Debes conectar la gráfica de dependencias. Para más información, vea "[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. En "{% data variables.product.prodname_dependabot %}", a la derecha de "Los usuarios pueden recibir alertas de vulnerabilidad para dependencias de código abierto", seleccione el menú desplegable y haga clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haga clic en **Habilitado con notificaciones**.

   ![Captura de pantalla del menú desplegable a fin de habilitar el examen de repositorios para detectar vulnerabilidades](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. En "Los repositorios se pueden examinar para buscar vulnerabilidades", seleccione el menú desplegable y haga clic en **Habilitado sin notificaciones**. Opcionalmente, para habilitar las alertas con notificaciones, haga clic en **Habilitado con notificaciones**.
   ![Menú desplegable para habilitar el examen de repositorios para buscar vulnerabilidades](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **Sugerencia**: Le recomendamos configurar {% data variables.product.prodname_dependabot_alerts %} sin notificaciones durante los primeros días para evitar una sobrecarga de correos electrónicos. Después de varios días, puede habilitar las notificaciones para recibir {% data variables.product.prodname_dependabot_alerts %} de la forma habitual.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Habilitación de {% data variables.product.prodname_dependabot_updates %}

Después de habilitar {% data variables.product.prodname_dependabot_alerts %} para la empresa, puede habilitar {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Para obtener más información, consulta "[Introducción a {% data variables.product.prodname_actions %} para el servidor de GitHub Enterprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

{% data variables.product.prodname_dependabot_updates %} no se admiten en los datos {% data variables.product.product_name %} si en la empresa se usa la agrupación en clústeres.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. En "Seguridad", seleccione **{% data variables.product.prodname_dependabot_security_updates %}** .

   ![Captura de pantalla de la casilla para habilitar o deshabilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Haga clic en **Visitar la instancia**.
1. Configura ejecutores autohospedados dedicados para crear las solicitudes de incorporación de cambios que van a actualizar las dependencias. Esto debes hacerlo porque los flujos de trabajo usan una etiqueta de ejecutor específica. Para más información, vea "[Administración de ejecutores autohospedados para {% data variables.product.prodname_dependabot_updates %} en la empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. En "{% data variables.product.prodname_dependabot %}", a la derecha de "Los usuarios pueden actualizar fácilmente a dependencias de código abierto no vulnerables", haga clic en **Habilitar**.

   ![Captura de pantalla del menú desplegable para habilitar la actualización de dependencias vulnerables](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

Cuando habilitas las {% data variables.product.prodname_dependabot_alerts %}, deberías considerar también configurar las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Esta característica permite que los desarrolladores arreglen las vulnerabilidades en sus dependencias. Para más información, vea "[Administración de ejecutores autohospedados para {% data variables.product.prodname_dependabot_updates %} en la empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".

Si necesitas una seguridad mejorada, te recomendamos que configures {% data variables.product.prodname_dependabot %} para usar registros privados. Para obtener más información, consulta "[Administración de secretos cifrados para {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)".

{% endif %}
