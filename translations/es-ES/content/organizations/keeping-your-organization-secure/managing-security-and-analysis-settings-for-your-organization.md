---
title: Administrar los parámetros de seguridad y análisis para tu organización
intro: 'Puedes controlar las características que aseguran y analizan el código en los proyectos de tu organización en {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Organizations
  - Teams
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

{% if currentVersion == "free-pro-team@latest" %}Si tu organización pertenece a una empresa que tiene una licencia para {% data variables.product.prodname_GH_advanced_security %}, la págna también contendrá opciones para habilitar e inhabilitar las características de {% data variables.product.prodname_advanced_security %}. Cualquier repositorio que utilice {% data variables.product.prodname_GH_advanced_security %} se listará en la parte inferior de la página.{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}Si tienes una licencia para {% data variables.product.prodname_GH_advanced_security %}, la página también contendrá opciones para habilitar e inhabilitar las características de {% data variables.product.prodname_advanced_security %}. Cualquier repositorio que utilice {% data variables.product.prodname_GH_advanced_security %} se listará en la parte inferior de la página.{% endif %}

{% if currentVersion == "github-ae@latest" %}La página también contendrá opciones para habilitar e inhabilitar las características de la {% data variables.product.prodname_advanced_security %}.{% endif %}

### Habilitar o inhabilitar una característica para todos los repositorios existentes

Puedes habilitar o inhabilitar las características para todos los repositorios. {% if currentVersion == "free-pro-team@latest" %}El impacto de tus cambios en los repositorios de tu organización se determina de acuerdo con su visibilidad:

- **Gráfica de dependencias** - Tus cambios solo afectan a repositorios privados porque la característica siempre está habilitada para los repositorios públicos.
- **{% data variables.product.prodname_dependabot_alerts %}** - Tus cambios afectan a todos los repositorios.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Tus cambios afectan a todos los repositorios.
- **{% data variables.product.prodname_GH_advanced_security %}** - Tus cambios afectan únicamente a los repositorios privados, ya que la {% data variables.product.prodname_GH_advanced_security %} y las características relacionadas siempre se encuentran habilitadas para los repositorios públicos.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Tus cambios afectan únicamente a los repositorios privados en donde la {% data variables.product.prodname_GH_advanced_security %} también se encuentra habilitada. El {% data variables.product.prodname_secret_scanning_caps %} siempre se encuentra habilitado para los repositorios públicos.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
2. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, da clic en **Inhabilitar todo** o **Habilitar todo**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}El control para "{% data variables.product.prodname_GH_advanced_security %}" se encontrará inhabilitado si no tienes plazas disponibles en tu licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos en tu organización.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
4. Da clic en **Inhabilitar CARACTERÍSTICA** o en **Habilitar CARACTERÍSTICA** para inhabilitar o habilitar la característica para todos los repositorios en tu organización.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botón para inhabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
    {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botón para inhabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
3. Click **Enable for all eligible repositories** to enable the feature for all the new repositories in your organization that will have {% data variables.product.prodname_advanced_security %} enabled. ![Botón para habilitar característica para todos los repositorios elegibles de la organización](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

### Habilitar o inhabilitar una característica automáticamente cuando se agregan repositorios nuevos

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
2. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories{% if currentVersion == "free-pro-team@latest" %}, or all new private repositories,{% endif %} in your organization.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Permitir que el {% data variables.product.prodname_dependabot %} acceda a las dependencias privadas

El {% data variables.product.prodname_dependabot %} puede verificar si hay referencias obsoletas de las dependencias en un proyecto y generar automáticamente una solicitud de cambios para actualizarlas. Para hacerlo, el {% data variables.product.prodname_dependabot %} debe tener acceso a todos los archivos de dependencia que sean el objetivo. Habitualmente, las actualizaciones de versión fallarán si una o más dependencias son inaccesibles. Para obtener más información, consulta la sección "[Acerca de las actualizaciones de versión del {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates)".

Predeterminadamente, el {% data variables.product.prodname_dependabot %} no puede actualizar las dependencias que se ubican en los repositorios o en los registros de paquetes privados. Sin embargo, si una dependencia se encuentra en un repositorio privado de {% data variables.product.prodname_dotcom %} dentro de la misma organización que el proyecto que la utiliza, puedes permitir al {% data variables.product.prodname_dependabot %} actualizar la versión exitosamente si le otorgas acceso al repositorio en el que se hospeda.

Si tu código depende de paquetes en un registro privado, puedes permitir que el {% data variables.product.prodname_dependabot %} actualice las versiones de estas dependencias si configuras esto a nivel del repositorio. Puedes hacer esto si agregas los detalles de autenticación al archivo _dependabot.yml_ para el repositorio. Para obtener más información, consulta la sección "[Opciones de configuración para las actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

Para permitir que el {% data variables.product.prodname_dependabot %} acceda a un repositorio privado de {% data variables.product.prodname_dotcom %}:

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
1. Debajo de "Acceso del {% data variables.product.prodname_dependabot %} a repositorios privados", haz clic en **Agregar repositorios privados** o **Agregar repositorios internos y privados**. ![Botón para agregar repositorios](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Comienza a teclear el nombre del repositorio que quieras permitir. ![Botón para agregar repositorios](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Haz clic en el repositorio que quieras permitir.

1. Optionally, to remove a repository from the list, to the right of the repository, click {% octicon "x" aria-label="The X icon" %}. ![Botón "X" para eliminar un repositorio](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### Eliminar el acceso a {% data variables.product.prodname_GH_advanced_security %} desde los repositorios individuales de una organización

Puedes administrar el acceso a las características de la {% data variables.product.prodname_GH_advanced_security %} para un repositorio desde su pestaña de "Configuración". Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". Sin embargo, también puedes inhabilitar las características de la {% data variables.product.prodname_GH_advanced_security %} para un reositorio desde la pestaña de "Configuración" de la organización.

1. Ve a la configuración de análisis y seguridad para tu organización. Para obtener más información, consulta la sección "[Mostrar la configuración de análisis y seguridad](#displaying-the-security-and-analysis-settings)".
1. Para encontrar una lista de todos los repositorios de tu organización que tengan habilitada la {% data variables.product.prodname_GH_advanced_security %}, desplázate hasta la sección "repositorios con {% data variables.product.prodname_GH_advanced_security %}". ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) La tabla lista la cantidad de confirmantes únicos para cada repositorio. Esta es la cantidad de plazas que puedes liberar en tus licencias si eliminas el acceso a {% data variables.product.prodname_GH_advanced_security %}. El tamaño de tu licencia se muestra para las licencias a nivel organizacional. Para obtener más información, consulta la sección "[Acerca de las licencias para {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)".
1. Para eliminar el acceso a la {% data variables.product.prodname_GH_advanced_security %} desde un repositorio y liberar plazas que utilice cualquier confirmante y que son únicas en ese repositorio, haz clic en el {% octicon "x" aria-label="X symbol" %} adyacente.
1. En el diálogo de confirmación, da clic en **Eliminar repositorio** para eliminar el acceso a las características de la {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Nota:** Si eliminas el acceso de un repositorio a la {% data variables.product.prodname_GH_advanced_security %}, deberás comunicarte con el equipo de desarrollo afectado para que sepan que este cambio se hizo apropósito. Esto garantiza que no pierdan tiempo en depurar las ejecuciones fallidas del escaneo de código.

{% endnote %}

{% endif %}

### Leer más

- [Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Acerca del escaneo de secretos](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[Mantener tus dependencias actualizadas automáticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}{% if currentVersion != "github-ae@latest" %}
- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Administrar las vulnerabilidades en tus dependencias de proyecto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"{% endif %}
