---
title: Acerca de la administración de dependencias vulnerables
intro: '{% data variables.product.prodname_dotcom %} te ayuda a evitar el utilizar software de terceros que contenga vulnerabilidades conocidas.'
redirect_from:
  - /github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Managing vulnerabilities in your project’s dependencies ".-->

{% data variables.product.prodname_dotcom %} te proporciona las siguientes herramientas para eliminar y evitar las dependencias vulnerables.

#### Gráfica de dependencias
La gráfica de dependencias es un resumen de los archivos de bloqueo y de manifiesto que se almacenan en un repositorio. Te muestra los ecosistemas y paquetes de los cuales depende tu base de código (sus dependencias) y los repositorios y paquetes que dependen de tu proyecto (sus dependencias). Tanto la revisión de dependencias como el {% data variables.product.prodname_dependabot %} utilizan la información en la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

#### Revisión de dependencias
Si verificas las revisiones de dependencias en las solicitudes de cambios puedes evitar introducir las vulnerabilidades de las dependencias en tu base de código. Si las solicitudes de cambios agregan una dependencia vulnerable o cambian una dependencia a una versión vulnerable, esto se resaltará en la revisión de dependencias. Puedes cambiar la dependencia a una versión parchada antes de fusionar la solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

#### {% data variables.product.prodname_dependabot_alerts %}
{% data variables.product.prodname_dotcom %} puede crear {% data variables.product.prodname_dependabot_alerts %} cuando detecta dependencias vulnerables en tu repositorio. La alerta se muestra en la pestaña de seguridad del repositorio. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada. {% data variables.product.prodname_dotcom %} también notifica a los mantenedores del repositorio, de acuerdo con sus preferencias de notificación. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

#### {% data variables.product.prodname_dependabot_security_updates %}
Cuando {% data variables.product.prodname_dotcom %} genera una alerta del {% data variables.product.prodname_dependabot %} para una dependencia vulnerable en tu repositorio, el {% data variables.product.prodname_dependabot %} puede intentar arreglarla automáticamente. las {% data variables.product.prodname_dependabot_security_updates %} son solicitudes de cambios que se generan automáticamente y que actualizan una dependencia vulnerable a una versión arreglada. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".


#### {% data variables.product.prodname_dependabot_version_updates %}
El habilitar las {% data variables.product.prodname_dependabot_version_updates %} hace que el mantener tus dependencias tome menos esfuerzo. Con las {% data variables.product.prodname_dependabot_version_updates %}, cada que {% data variables.product.prodname_dotcom  %} identifique una dependencia desactualizada, levantará una solicitud de cambios para actualizar el manifiesto a la versión más reciente de la dependencia. Como contraste, las {% data variables.product.prodname_dependabot_security_updates %} solo levantan solicitudes de cambios para arreglar dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de las actualizaciones de versión del Dependabot](/github/administering-a-repository/about-dependabot-version-updates)".
