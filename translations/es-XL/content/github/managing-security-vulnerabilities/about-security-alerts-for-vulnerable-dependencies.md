---
title: Acerca de las alertas de seguridad para las dependencias vulnerables
intro: '{% data variables.product.product_name %} envía alertas de seguridad cuando detectamos vulnerabilidades que afecten a tu repositorio.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de las vulnerabilidades de seguridad

{% data reusables.repositories.a-vulnerability-is %} Dependiendo del nivel de gravedad y la manera en la que tu proyecto utiliza la dependencia, las vulnerabilidades pueden causar diversos problemas para el mismo y para la gente que lo utiliza. Puedes hacer un seguimiento y resolver las vulnerabilidades para ciertos tipos de dependencias en tu repositorio de {% data variables.product.product_name %}.

Te enviaremos una alerta de seguridad si {% data variables.product.prodname_dotcom %} detecta una vulnerabilidad desde el {% data variables.product.prodname_advisory_database %} o desde [WhiteSource](https://www.whitesourcesoftware.com/GitHubSecurityAlerts) en una de las dependencias de la gráfica de dependencias de tu repositorio. Para obtener más información acerca de {% data variables.product.prodname_advisory_database %}, consulta la sección "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Buscar vulnerabilidades de seguridad en el {% data variables.product.prodname_advisory_database %}</a>".

{% if currentVersion == "free-pro-team@latest" %}
### Alertas y actualizaciones de seguridad automatizadas para dependencias vulnerables
{% else %}
### Alertas de seguridad para las dependencias vulnerables
{% endif %}

Cuando se añade una nueva vulnerabilidad a la Base de Datos de Asesoría de GitHub, identificamos los {% if currentVersion == "free-pro-team@latest" %}repositorios{% endif %}públicos{% if currentVersion == "free-pro-team@latest" %} (y los repositorios privados que se han unido a la detección de vulnerabilidades){% endif %}que utilizan la versión afectada de la dependencia{% if currentVersion == "free-pro-team@latest" %}, enviamos una alerta de seguridad a los mantenedores del repositorio además de generar una actualización de seguridad automatizada {% else %} y enviar una alerta de seguridad a los mantenedores del mismo{% endif %}.

Cada alerta de seguridad incluye un nivel de gravedad{% if currentVersion == "free-pro-team@latest" %}, un enlace al archivo afectado en tu proyecto, y un enlace a una solicitud de extracción que contiene una actualización de seguridad automatizada que resuelve la vulnerabilidad{% else %}{% endif %}. Cuando esté disponible, la alerta incluirá más detalles acerca de la vulnerabilidad.

Puedes ver todas las alertas que afectan a un proyecto{% if currentVersion == "free-pro-team@latest" %} en particular en la pestaña Alertas del repositorio o{% endif %} en el gráfico de dependencias del repositorio.{% if currentVersion == "free-pro-team@latest" %} Para obtener información, consulta "[ Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)".{% endif %}

Enviamos alertas de seguridad para las personas con permisos de administrador en los repositorios por defecto afectados. {% data variables.product.product_name %} nunca divulga públicamente las vulnerabilidades identificadas para ningún repositorio.{% if currentVersion == "free-pro-team@latest" %} También puedes activar alertas de seguridad para personas y equipos adicionales que trabajan en los repositorios que son propiedad de una organización. Para obtener más información, consulta "[Administrar las alertas por dependencias vulnerables en los repositorios de tu organización](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)".{% endif %}

{% data reusables.repositories.enable-security-alerts %}
{% if currentVersion == "free-pro-team@latest" %}
Las actualizaciones de seguridad automatizadas actualizan las dependencias vulnerables a la versión mínima que resuelve la vulnerabilidad. Estas se habilitan automáticamente en los repositorios que utilicen la gráfica de dependencias y las alertas de seguridad, pero puedes decidir inhabilitar las solicitudes de extracción automáticas y generar las actualizaciones de seguridad manualmente. Para obtener más información, consulta la sección "[Configurar las actualizaciones de seguridad automatizadas](/github/managing-security-vulnerabilities/configuring-automated-security-updates)".

{% data variables.product.prodname_dotcom %} detecta y alerta sobre las dependencias vulnerables en los repositorios _públicos_ por defecto. Para recibir alertas de seguridad por dependencias vunerables en un repositorio _privado_, un propietario de o una persona con acceso de administrador al repositorio debe activar el gráfico de dependencias y las alertas de seguridad en el repositorio. Para obtener más información, consulta "[Incluir o excluir uso de datos para tu repositorio privado](/articles/opting-into-or-out-of-data-use-for-your-private-repository)".
{% endif %}

Para obtener una lista de los idiomas admitidos que {% data variables.product.product_name %} pueden detectar vulnerabilidades y dependencias, consulta "[Detallar los paquetes de los que depende un repositorio](/articles/listing-the-packages-that-a-repository-depends-on)".

{% warning %}

**Nota**: Las características de seguridad de {% data variables.product.product_name %}, como las alertas de seguridad, no afirman atrapar todas las vulnerabilidades. Aunque siempre estamos intentando actualizar nuestra base de datos de vulnerabilidades y alertarte con nuestra información más actualizada, no nos será posible atrapar todo o alertarte sobre vulnerabilidades conocidas dentro de un plazo garantizado. Estas características no son sustitutos de la revisión humana de cada dependencia por posibles vulnerabilidades o cualquier otra cuestión. Te recomendamos consultar con un servicio de seguridad o realizar una revisión de vulnerabilidad exhaustiva cuando sea necesario.

{% endwarning %}

### Configurar notificaciones para alertas de notificaciones

Predeterminadamente, recibirás alertas de seguridad por correo electrónico{% if currentVersion == "free-pro-team@latest" %}, agrupadas por la vulnerabilidad específica{% endif %}. También puedes elegir recibir las alertas de seguridad en un correo electrónico semanal que las resuma en hasta 10 de tus repositorios, en tus notificaciones web, o en la interfaz de usuario de {% data variables.product.product_name %}. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-options){% else %}"[Elegir el método de entrega para tus notificaciones](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[Acerca de las notificaciones por correo electrónico](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}".{% endif %}

### Leer más

{% if currentVersion == "free-pro-team@latest" %}- "[Configurar las actualizaciones de seguridad automatizadas](/github/managing-security-vulnerabilities/configuring-automated-security-updates)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "
Entender cómo {% data variables.product.product_name %} utiliza y protege tus datos"{% endif %}</li> 
  
  - [Definición de MITRE de "vulnerabilidad"](https://cve.mitre.org/about/terminology.html#vulnerability)</ul>
