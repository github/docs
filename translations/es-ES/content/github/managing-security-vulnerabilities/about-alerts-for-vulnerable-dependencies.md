---
title: Acerca de las alertas para las dependencias vulnerables
intro: '{% data variables.product.product_name %} envía {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot_alerts %}{% else %}{% endif %} cuando detectamos vulnerabilidades que afectan tu repositorio.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
 
### Acerca de las dependencias vulnerables

{% data reusables.repositories.a-vulnerability-is %}

Cuando tu código depende de un paquete que tiene una vulnerabilidad de seguridad, esta dependencia puede causar una serie de problemas para tu proyecto o para las personas que lo utilizan.

### Detección de dependencias vulnerables

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}El {% data variables.product.prodname_dependabot %} detecta las dependencias vulnerables y envía {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %} detecta dependencias vulnerables y envía alertas de seguridad{% endif %} cuando:

{% if currentVersion == "free-pro-team@latest" %}
- Se agrega una vulnerabilidad nueva a la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta la sección "[Buscar vulnerabilidades de seguridad en la {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)".
- Se procesan los datos de las vulnerabilidades nuevas que se toman de [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database).{% else %}
- Se sincronizan los datos de las asesorías nuevas en {% data variables.product.prodname_ghe_server %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información acerca de los datos de las asesorías, consulta la sección "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Buscar vulnerabilidades de seguridad en el {% data variables.product.prodname_advisory_database %}</a>".{% endif %}
- La gráfica de dependencias para los cambios a un repositorio. Por ejemplo, cuando un colaborador sube una confirmación para cambiar los paquetes o versiones de las cuales depende{% if currentVersion == "free-pro-team@latest" %}, o cuando el código de una de las dependencias cambia{% endif %}. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para encontrar una lista de ecosistemas para las cuales {% data variables.product.product_name %} puede detectar vulnerabilidades y dependencias, consulta la sección [ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Nota:** Es importante mantener actualizados tu manifiesto y tus archivos bloqueados. Si la gráfica de dependencias no refleja con exactitud tus versiones y dependencias actuales, entonces podrías dejar pasar las alertas de las dependencias vulnerables que utilizas. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### Alertas del {% data variables.product.prodname_dependabot %} para dependencias vulnerables
{% else %}
### Alertas de seguridad para las dependencias vulnerables
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detecta dependencias vulnerables en repositorios _públicos_ y genera {% data variables.product.prodname_dependabot_alerts %} predeterminadamente. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.

También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan atu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar la seguridad y la configuración de análisis para tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" o la sección "[Administrar la configuración de seguridad y análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

Para obtener más información sobre los requisitos de permisos para las acciones que se relacionan con las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Niveles de permiso del repositorio para una organización](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)".

{% data variables.product.product_name %} comienza a generar la gráfica de dependencias inmediatamente y genera alertas de cualquier dependencia vulnerable tan pronto como las identifique. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Para obtener más información, consulta la sección "[Administrar la configuración de uso de datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Cuando
{% data variables.product.product_name %} identifica una dependencia vulnerable, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad para el repositorio. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada. {% data variables.product.product_name %} también notifica a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. Para obtener más información, consulta la sección "[Configurar notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Para los repositorios en donde
{% data variables.product.prodname_dependabot_security_updates %} se encuentra habilitado, la alerta también podría contener un enlace a una solicitud de cambios para actualizar el archivo de manifiesto o de bloqueo a la versión mínima que resuelva la vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Cuando
{% data variables.product.product_name %} identifica una dependencia vulnerable, enviamos una alerta de seguridad a los mantenedores de los repositorios afectados con detalles de la vulnerabilidad, un enlace al archivo afectado en el proyecto, e información acerca de una versión arreglada.
{% endif %}

{% warning %}

**Nota**: Las características de seguridad de {% data variables.product.product_name %} no aseguran que se detectarán todas las vulnerabilidades. Aunque siempre estamos tratando de actualizar nuestra base de datos de vulnerabilidades y de generar alertas con nuestra información más actualizada, no podremos atrapar todo o garantizar decirte acerca de las vulnerabilidades conocidas dentro de un periodo de tiempo determinado. Estas características no son sustitutos de la revisión humana de cada dependencia por posibles vulnerabilidades o cualquier otra cuestión. Te recomendamos consultar con un servicio de seguridad o realizar una revisión de vulnerabilidad exhaustiva cuando sea necesario.

{% endwarning %}

### Acceso a las alertas de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}

Puedes ver todas las alertas que afectaron un proyecto en particular{% if currentVersion == "free-pro-team@latest" %} en la pestaña de seguridad del repositorio o{% endif %} en la gráfica de dependencias del mismo.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[Visualizar y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Predeterminadamente, notificamos a las personas con permisos adminsitrativos en los repositorios afectados sobre las
{% data variables.product.prodname_dependabot_alerts %} nuevas.{% endif %} {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} nunca divulga públicamente las vulnerabilidades que se identifican en los repositorios. También puedes hacer que las {% data variables.product.prodname_dependabot_alerts %} sean visibles para más personas o equipos que trabajen en los repositorios que te pertenecen o para los cuales tienes permisos administrativos. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Enviamos alertas de seguridad para las personas con permisos de administrador en los repositorios por defecto afectados.
{% data variables.product.product_name %} nunca disemina públicamente las vulnerabilidades identificadas de ningún repositorio.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} Para obtener más información, consulta la sección "[Elegir el método de entrega para tus notificaciones](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)".{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} Para obtener más información, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "Entender cómo {% data variables.product.product_name %} utiliza y protege tus datos"{% endif %}</li> </ul>
