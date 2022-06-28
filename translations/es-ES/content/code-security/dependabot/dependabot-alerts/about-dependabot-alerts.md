---
title: About Dependabot alerts
intro: '{% data variables.product.product_name %} sends {% data variables.product.prodname_dependabot_alerts %} when we detect that your repository uses a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Las alertas del dependabot
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Acerca de {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %}
{% data reusables.advisory-database.beta-malware-advisories %}
{% endif %}

{% data variables.product.prodname_dependabot_alerts %} tell you that your code depends on a package that is insecure.

If your code depends on a package with a security vulnerability, this can cause a range of problems for your project or the people who use it. You should upgrade to a secure version of the package as soon as possible.{% ifversion GH-advisory-db-supports-malware %} If your code uses malware, you need to replace the package with a secure alternative.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detection of insecure dependencies

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies, and sends {% data variables.product.prodname_dependabot_alerts %} when:

{% ifversion fpt or ghec %}
- A new advisory is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security advisories in the {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)."{% else %}
- Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Nota:** Solo las asesorías que ha revisado {% data variables.product.company_short %} activarán las {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- La gráfica de dependencias para los cambios a un repositorio. Por ejemplo, cuando un colaborador sube una confirmación para cambiar los paquetes o versiones de los cuales depende{% ifversion fpt or ghec %}, o cuando cambia el código de alguna de las dependencias{% endif %}. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

For a list of the ecosystems that {% data variables.product.product_name %} detects insecure dependencies in, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Nota:** Es importante mantener actualizados tu manifiesto y tus archivos bloqueados. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for insecure dependencies that you use. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

## Configuration of {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies and malware in _public_ repositories and displays the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Los propietarios de repositorios o las personas con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios públicos. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.

También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan atu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)".

Para obtener más información sobre los requisitos de acceso para las acciones que se relacionan con las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any insecure dependencies as soon as they are identified. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Para obtener más información, consulta la sección "[Administrar la configuración de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

When {% data variables.product.product_name %} identifies a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}, we generate a {% data variables.product.prodname_dependabot %} alert and display it {% ifversion fpt or ghec or ghes %} on the Security tab for the repository and{% endif %} in the repository's dependency graph. La alerta incluye {% ifversion fpt or ghec or ghes %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida. {% data variables.product.product_name %} también podría notificar a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

{% ifversion fpt or ghec or ghes > 3.2 %}
Para los repositorios en donde están habilitadas las {% data variables.product.prodname_dependabot_security_updates %}, la alerta también podría contener un enlace a una solicitud de cambios o a una actualización en el archivo de bloqueo o de manifiesto para la versión mínima que resuelva la vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. We actively maintain {% data variables.product.prodname_advisory_database %} and generate alerts with the most up-to-date information. However, we cannot catch everything or tell you about known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough dependency review when necessary.

{% endwarning %}

## Acceder a las {% data variables.product.prodname_dependabot_alerts %}

Puedes ver todas las alertas que afectan un proyecto en particular{% ifversion fpt or ghec %} en la pestaña de Seguridad del repositorio o{% endif %} en la gráfica de dependencias del repositorio. For more information, see "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% ifversion fpt or ghec %}{% data variables.product.product_name %} never publicly discloses insecure dependencies for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working with repositories that you own or have admin permissions for. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular advisory in the {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacidad en {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
