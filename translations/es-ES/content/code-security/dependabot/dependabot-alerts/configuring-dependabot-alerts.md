---
title: Configurar las alertas del Dependabot
intro: 'Habilita las {% data variables.product.prodname_dependabot_alerts %} para que se generen cuando una dependencia vulnerable nueva {% ifversion GH-advisory-db-supports-malware %}o malware {% endif %}se encuentre en uno de tus repositorios.'
shortTitle: Configurar las alertas del Dependabot
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## Acerca de las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y el malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.prodname_dependabot %} escanea el código cuando una asesoría nueva se agrega a la {% data variables.product.prodname_advisory_database %} o a la gráfica de dependencias para los cambios a un repositorio. Cuando se detectan dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} o el malware{% endif %}, se generan {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".

Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para:
* Tu cuenta personal
* Tu repositorio
* Tu organización

## Adminsitrar las {% data variables.product.prodname_dependabot_alerts %} para tu cuenta personal

{% ifversion fpt or ghec %}

Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que le pertenecen a tu cuenta personal.

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios existentes

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad del código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Inhabilitar todas** o **Habilitar todas**. ![Captura de pantalla de las características de "Configurar el análisis y la seguridad" con énfasis en los botones "Habilitar todo" o "Inhabilitar todo"](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Opcionalmente, habilita las {% data variables.product.prodname_dependabot_alerts %} predeterminadamente para los repositorios nuevos que crees. ![Captura de pantalla de "Habilitar las alertas del Dependabot" con énfasis en la casilla de verificación "Habilitar predeterminadamente para los repositorios privados nuevos"](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Haz clic en **Inhabilitar las {% data variables.product.prodname_dependabot_alerts %}** o **Habilitar las {% data variables.product.prodname_dependabot_alerts %}** para inhabilitar o habilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que te pertenezcan. ![Captura de pantalla de "Habilitar las alertas del Dependabot" con énfasis en el botón "Habilitar las alertas del Dependabot"](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Cuando habilitas las {% data variables.product.prodname_dependabot_alerts %} para los repositorios existentes, verás todos los resultados mostrados en GitHub en cuestión de minutos.

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios nuevos

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad del código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, habilita o inhabilita las {% data variables.product.prodname_dependabot_alerts %} predeterminadas para los repositorios nuevos que crees. ![Captura de pantalla de "Configurar el análisis y la seguridad" con énfasis en la casilla de verificación "Habilitar para todos los repositorios privados nuevos"](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %}
Tu propietario de empresa puede habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para tus repositorios. Para obtener más información, consulta la sección "[Habilitar al Dependabot para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% endif %}

## Administrar las {% data variables.product.prodname_dependabot_alerts %} para tu repositorio

{% ifversion fpt or ghec %}Puedes adminsitrar las {% data variables.product.prodname_dependabot_alerts %} para tu repositorio público, privado o interno.

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% data variables.product.product_name %} jamás divulga públicamente las dependencias inseguras de ningún repositorio. También puedes hacer que las {% data variables.product.prodname_dependabot_alerts %} sean visibles para más personas o equipos que trabajen en los repositorios que te pertenecen o para los cuales tienes permisos administrativos.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Debajo de "Análisis y seguridad del código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Habilitar** para habilitar las alertas o en **Inhabilitar** para inhabilitarlas. ![Captura de pantalla de la sección "Análisis y seguridad del código" con el botón para habilitar las {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png)
{% endif %}{% ifversion ghes or ghae %}

Tu propietario de empresa puede habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para tu repositorio. Para obtener más información, consulta la sección "[Habilitar al Dependabot para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Administrar las {% data variables.product.prodname_dependabot_alerts %} para tu organización
{% ifversion fpt or ghec %}Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que le pertenecen a tu organización. Tus cambios afectan a todos los repositorios.

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios existentes

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. Debajo de "Análisis y seguridad del código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Inhabilitar todas** o **Habilitar todas**.
   {% ifversion fpt or ghec %}
   ![Screenshot of "Configure security and analysis" features with the "Enable all" or "Disable all" button emphasized for Dependabot alerts](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghae %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. Optionally, enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Screenshot of "Enable by default" option for new repositories](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png)
   {% endif %}

   {% endif %}
   {% ifversion fpt or ghec %}
4. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Screenshot of "Enable Dependabot alerts" modal with button to disable or enable feature emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png)
   {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %}
{% data variables.product.prodname_dependabot_alerts %} for your organization can be enabled or disabled by your enterprise owner. For more information, see "[About Dependabot for GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}
