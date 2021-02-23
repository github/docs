---
title: Administrar los parámetros de seguridad y análisis para tu organización
intro: 'Puedes controlar las características que aseguran y analizan el código en los proyectos de tu organización en {% data variables.product.prodname_dotcom %}.'
permissions: Los propietarios de la organización pueden administrar los parámetros de seguridad y de análisis para los repositorios en la organización.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar los repositorios en tu organización. Puedes administrar las características de seguridad y de análisis para todos los repositorios existentes que los miembros creen en tu organización. {% if currentVersion == "free-pro-team@latest" %}Si tienes una licencia para {% data variables.product.prodname_GH_advanced_security %}, entonces también podrás administrar el acceso a estas características. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Mostrar la configuración de seguridad y de análisis

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

La página que se muestra te permite habilitar o inhabilitar todas las características de seguridad y de análisis para los repositorios de tu organización.

{% if currentVersion == "free-pro-team@latest" %}If your organization, or the enterprise that owns it, has a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features.{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}If you have a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features.{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![Características de la {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/organizations/security-and-analysis-highlight-ghas.png)
{% endif %}

### Habilitar o inhabilitar una característica para todos los repositorios existentes

Puedes habilitar o inhabilitar las características para todos los repositorios. {% if currentVersion == "free-pro-team@latest" %}El impacto de tus cambios en los repositorios de tu organización se determina de acuerdo con su visibilidad:

- **Gráfica de dependencias** - Tus cambios solo afectan a repositorios privados porque la característica siempre está habilitada para los repositorios públicos.
- **{% data variables.product.prodname_dependabot_alerts %}** - Tus cambios afectan a todos los repositorios.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Tus cambios afectan a todos los repositorios.
- **{% data variables.product.prodname_GH_advanced_security %}** - Tus cambios afectan únicamente a los repositorios privados, ya que la {% data variables.product.prodname_GH_advanced_security %} y las características relacionadas siempre se encuentran habilitadas para los repositorios públicos.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Tus cambios afectan únicamente a los repositorios privados en donde la {% data variables.product.prodname_GH_advanced_security %} también se encuentra habilitada. El {% data variables.product.prodname_secret_scanning_caps %} siempre se encuentra habilitado para los repositorios públicos.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
1. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, da clic en **Inhabilitar todo** o **Habilitar todo**.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
2. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos en tu organización.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
3. Da clic en **Inhabilitar CARACTERÍSTICA** o en **Habilitar CARACTERÍSTICA** para inhabilitar o habilitar la característica para todos los repositorios en tu organización.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botón para inhabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botón para inhabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}

### Habilitar o inhabilitar una característica automáticamente cuando se agregan repositorios nuevos

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
1. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, habilítala o inhabilítala para los repositorios nuevos
{% if currentVersion == "free-pro-team@latest" %}, o para todos los repositorios privados nuevos,{% endif %} en tu organización.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}

   {% data reusables.advanced-security.note-org-enable-uses-seats %}

{% if currentVersion == "free-pro-team@latest" %}

### Permitir que el Dependabot acceda a los repositorios privados

{% data reusables.dependabot.beta-note %}

El {% data variables.product.prodname_dependabot %} puede verificar si hay referencias obsoletas de las dependencias en un proyecto y generar automáticamente una solicitud de cambios para actualizarlas. Para hacerlo, el {% data variables.product.prodname_dependabot %} debe tener acceso a todos los archivos de dependencia que sean el objetivo. Habitualmente, las actualizaciones de versión fallarán si una o más dependencias son inaccesibles.

Predeterminadamente, el {% data variables.product.prodname_dependabot %} no puede actualizar las dependencias que se ubican en los repositorios privados. Sin embargo, si una dependencia se encuentra en un repositorio privado de {% data variables.product.prodname_dotcom %} dentro de la misma organización que el proyecto que la utiliza, puedes permitir al {% data variables.product.prodname_dependabot %} actualizar la versión exitosamente si le otorgas acceso al repositorio en el que se hospeda. Para obtener más información, incluyendo los detalles de las limitaciones para el soporte de la dependencia privada, consulta la sección "[Acerca de las actualizaciones de versión del Dependabot](/github/administering-a-repository/about-dependabot-version-updates)".

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
1. En la sección de "acceso al repositorio del {% data variables.product.prodname_dependabot %}", da clic en el botón de configuración **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) Se muestra una lista que presenta todos los repositorios privados de tu organización. ![La lista de repositorios](/assets/images/help/organizations/repositories-dialog.png)
1. Selecciona los repositorios a los que puede acceder el {% data variables.product.prodname_dependabot %}.
1. Da clic en **Seleccionar repositorios**.
{% endif %}

### Leer más

- [Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Acerca del escaneo de secretos](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[Mantener tus dependencias actualizacas automáticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Administrar las vulnerabilidades en las dependencias de tu proyecto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
