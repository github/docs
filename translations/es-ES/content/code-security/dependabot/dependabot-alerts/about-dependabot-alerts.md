---
title: About Dependabot alerts
intro: '{% data variables.product.product_name %} envía {% data variables.product.prodname_dependabot_alerts %} cuando detectamos vulnerabilidades que afectan tu repositorio.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
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

## Acerca de las dependencias vulnerables

{% data reusables.repositories.a-vulnerability-is %}

Cuando tu código depende de un paquete que tiene una vulnerabilidad de seguridad, esta dependencia puede causar una serie de problemas para tu proyecto o para las personas que lo utilizan.

## Detección de dependencias vulnerables

{% data reusables.dependabot.dependabot-alerts-beta %}

El {% data variables.product.prodname_dependabot %} lleva a cabo un escaneo para detectar las dependencias vulnerables y envía {% data variables.product.prodname_dependabot_alerts %} cuando:

{% ifversion fpt or ghec %}
- Se agrega una vulnerabilidad nueva a la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta las secciones "[Buscar vulnerabilidades de seguridad en la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)" y [Acerca de las {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)".{% else %}
- Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Nota:** Solo las asesorías que ha revisado {% data variables.product.company_short %} activarán las {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- La gráfica de dependencias para los cambios a un repositorio. Por ejemplo, cuando un colaborador sube una confirmación para cambiar los paquetes o versiones de los cuales depende{% ifversion fpt or ghec %}, o cuando cambia el código de alguna de las dependencias{% endif %}. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para encontrar una lista de ecosistemas para las cuales {% data variables.product.product_name %} puede detectar vulnerabilidades y dependencias, consulta la sección [ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Nota:** Es importante mantener actualizados tu manifiesto y tus archivos bloqueados. Si la gráfica de dependencias no refleja con exactitud tus versiones y dependencias actuales, entonces podrías dejar pasar las alertas de las dependencias vulnerables que utilizas. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

## {% data variables.product.prodname_dependabot_alerts %} para dependencias vulnerables

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detecta las dependencias vulnerables en los repositorios _públicos_ y muestra la gráfica de dependencias, pero no genera {% data variables.product.prodname_dependabot_alerts %} predeterminadamente. Los propietarios de repositorios o las personas con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios públicos. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.

También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan atu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)".

Para obtener más información sobre los requisitos de acceso para las acciones que se relacionan con las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} comienza a generar la gráfica de dependencias inmediatamente y genera alertas de cualquier dependencia vulnerable tan pronto como las identifique. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Para obtener más información, consulta la sección "[Administrar la configuración de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Cuando {% data variables.product.product_name %} identifica una dependencia vulnerable, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos {% ifversion fpt or ghec or ghes %}en la pestaña de Seguridad del repositorio y{% endif %} en la gráfica de dependencias del mismo. La alerta incluye {% ifversion fpt or ghec or ghes %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida. {% data variables.product.product_name %} también podría notificar a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. Para obtener más información, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
Para los repositorios en donde están habilitadas las {% data variables.product.prodname_dependabot_security_updates %}, la alerta también podría contener un enlace a una solicitud de cambios o a una actualización en el archivo de bloqueo o de manifiesto para la versión mínima que resuelva la vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% warning %}

**Nota**: Las características de seguridad de {% data variables.product.product_name %} no aseguran que se detectarán todas las vulnerabilidades. Aunque siempre estamos tratando de actualizar nuestra base de datos de vulnerabilidades y de generar alertas con nuestra información más actualizada, no podremos atrapar todo o garantizar decirte acerca de las vulnerabilidades conocidas dentro de un periodo de tiempo determinado. Estas características no son sustitutos de la revisión humana de cada dependencia por posibles vulnerabilidades o cualquier otra cuestión. Te recomendamos consultar con un servicio de seguridad o realizar una revisión de vulnerabilidad exhaustiva cuando sea necesario.

{% endwarning %}

## Acceder a las {% data variables.product.prodname_dependabot_alerts %}

Puedes ver todas las alertas que afectan un proyecto en particular{% ifversion fpt or ghec %} en la pestaña de Seguridad del repositorio o{% endif %} en la gráfica de dependencias del repositorio. Para obtener más información, consulta la sección "[Visualizar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% ifversion fpt or ghec %}{% data variables.product.product_name %} nunca divulga públicamente las vulnerabilidades identificadas de ningún repositorio. También puedes hacer que las {% data variables.product.prodname_dependabot_alerts %} sean visibles para más personas o equipos que trabajen en los repositorios que te pertenecen o para los cuales tienes permisos administrativos. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Para obtener más información, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)".

También puedes ver todas las {% data variables.product.prodname_dependabot_alerts %} que corresponden a una vulnerabilidad en particular en la {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Ver las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacidad en {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
