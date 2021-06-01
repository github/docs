---
title: Acerca de las alertas para las dependencias vulnerables
intro: '{% data variables.product.product_name %} envía {% if currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot_alerts %}{% else %}{% endif %} cuando detectamos vulnerabilidades que afectan tu repositorio.'
versions:
  enterprise-server: <=2.22
topics:
  - Security
---

<!--See /content/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies for the current version of this article -->

### Acerca de las dependencias vulnerables

{% data reusables.repositories.a-vulnerability-is %}

Cuando tu código depende de un paquete que tiene una vulnerabilidad de seguridad, esta dependencia puede causar una serie de problemas para tu proyecto o para las personas que lo utilizan.

### Detección de dependencias vulnerables

 {% if currentVersion ver_gt "enterprise-server@2.21" %}El {% data variables.product.prodname_dependabot %} detecta las dependencias vulnerables y envía {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %} detecta dependencias vulnerables y envía alertas de seguridad{% endif %} cuando:

- Se sincronizan los datos de las asesorías nuevas en {% data variables.product.prodname_ghe_server %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}
- La gráfica de dependencias para los cambios a un repositorio. Por ejemplo, cuando un colaborador sube una confirmación para cambiar los paquetes o versiones de los cuales depende. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para encontrar una lista de ecosistemas para las cuales {% data variables.product.product_name %} puede detectar vulnerabilidades y dependencias, consulta la sección [ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Nota:** Es importante mantener actualizados tu manifiesto y tus archivos bloqueados. Si la gráfica de dependencias no refleja con exactitud tus versiones y dependencias actuales, entonces podrías dejar pasar las alertas de las dependencias vulnerables que utilizas. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.21" % %}
### Alertas del {% data variables.product.prodname_dependabot %} para dependencias vulnerables
{% else %}
### Alertas de seguridad para las dependencias vulnerables
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Cuando
{% data variables.product.product_name %} identifica una dependencia vulnerable, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad para el repositorio. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada. {% data variables.product.product_name %} también notifica a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. Para obtener más información, consulta la sección "[Configurar notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Cuando
{% data variables.product.product_name %} identifica una dependencia vulnerable, enviamos una alerta de seguridad a los mantenedores de los repositorios afectados con detalles de la vulnerabilidad, un enlace al archivo afectado en el proyecto, e información acerca de una versión arreglada.
{% endif %}

{% warning %}

**Nota**: Las características de seguridad de {% data variables.product.product_name %} no aseguran que se detectarán todas las vulnerabilidades. Aunque siempre estamos tratando de actualizar nuestra base de datos de vulnerabilidades y de generar alertas con nuestra información más actualizada, no podremos atrapar todo o garantizar decirte acerca de las vulnerabilidades conocidas dentro de un periodo de tiempo determinado. Estas características no son sustitutos de la revisión humana de cada dependencia por posibles vulnerabilidades o cualquier otra cuestión. Te recomendamos consultar con un servicio de seguridad o realizar una revisión de vulnerabilidad exhaustiva cuando sea necesario.

{% endwarning %}

### Acceso a las alertas de {% if currentVersion ver_gt "enterprise-server@2.21" %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}

Puedes ver todas las alertas que afectan a un proyecto en particular en la gráfica de dependencias del repositorio.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Predeterminadamente, notificamos a las personas con permisos adminsitrativos en los repositorios afectados sobre las
{% data variables.product.prodname_dependabot_alerts %}.{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Enviamos alertas de seguridad para las personas con permisos de administrador en los repositorios por defecto afectados.
{% data variables.product.product_name %} nunca disemina públicamente las vulnerabilidades identificadas de ningún repositorio.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} Para obtener más información, consulta la sección "[Elegir el método de entrega de tus notificaciones](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)".{% endif %}{% if currentVersion ver_gt "enterprise-server@2.20" %} Para obtener más información, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".{% endif %}
