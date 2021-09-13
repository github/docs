---
title: About Dependabot security updates
intro: '{% data variables.product.prodname_dependabot %} puede arreglar tus dependencias vulnerables levantando solicitudes de extracción con actualizaciones de seguridad.'
shortTitle: About Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
versions:
  free-pro-team: '*'
---

### Acerca de las {% data variables.product.prodname_dependabot_security_updates %}

Las {% data variables.product.prodname_dependabot_security_updates %} te facilitan el arreglar las dependencias vulnerables en tu repositorio. Si habilitas esta característica, cuando se levante una alerta del {% data variables.product.prodname_dependabot %} para una dependencia vulnerable en la gráfica de dependencias de tu repositorio, {% data variables.product.prodname_dependabot %} intentará arreglarla automáticamente. Para obtener más información, consulta las seccciones "[Acerca de las alertas para las depedencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

{% data variables.product.prodname_dependabot %} verifica si es posible actualizar la dependencia vulnerable a una versión arreglada sin irrumpir en la gráfica de dependencias para el repositorio. Posteriormente, el {% data variables.product.prodname_dependabot %} levanta una solicitud de cambios para actualizar la dependencia a la versión mínima que incluye el parche y los enlaces a la solicitud de cambios para la alerta del {% data variables.product.prodname_dependabot %}, o reporta un error en la alerta. Para obtener más información, consulta la sección "[Solucionar problemas para los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".

{% note %}

**Nota**

La característica de {% data variables.product.prodname_dependabot_security_updates %} se encuentra disponible para los repositorios en donde hayas habilitado la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %}. Verás una alerta del {% data variables.product.prodname_dependabot %} por cada dependencia vulnerable que se haya identificado en toda tu gráfica de dependencias. Sin embargo, las actualizaciones de seguridad se activan únicamente para las dependencias que se especifican en un archivo de manifiesto o de bloqueo. El {% data variables.product.prodname_dependabot %} no puede actualizar una dependencia indirecta o transitoria si no se define explícitamente. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)".

{% endnote %}

### Acerca de las solicitudes de cambios para las actualizaciones de seguridad

Cada solicitud de cambios contiene todo lo que necesitas para revisar y fusionar de forma rápida y segura un arreglo propuesto en tu proyecto. Esto incluye la información acerca de la vulnerabilidad, como las notas de lanzamiento, las entradas de bitácora de cambios, y los detalles de confirmación. Los detalles de qué vulnerabilidad resuelve una solicitud de cambios se encuentran ocultos para cualquiera que no tenga acceso a las {% data variables.product.prodname_dependabot_alerts %} del repositorio en cuestión.

Cuando fusionas una solicitud de cambios que contiene una actualización de seguridad, la alerta correspondiente del {% data variables.product.prodname_dependabot %} se marca como resuelta en el repositorio. Para obtener más información acerca de las solicitudes de cambios del {% data variables.product.prodname_dependabot %}, consulta la sección "[Administrar las solicitudes de cambios para las actualizaciones de las dependencias](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)".

{% data reusables.dependabot.automated-tests-note %}

### Acerca de las puntuaciones de compatibilidad

Las {% data variables.product.prodname_dependabot_security_updates %} podrían incuir puntuaciones de compatibilidad para hacerte saber si el actualizar una vulnerabilidad podría causar cambios sustanciales en tu proyecto. Estos se calculan de las pruebas de IC en otros repositorios públicos en donde se ha generado la misma actualización de seguridad. La puntuación de compatibilidad de una actualización es el porcentaje de ejecuciones de IC que pasaron cuando se hicieron actualizaciones en versiones específicas de la dependencia.

### Acerca de las notificaciones para las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %}

Puedes filtrar tus notificaciones en {% data variables.product.company_short %} para mostrar las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %}. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".