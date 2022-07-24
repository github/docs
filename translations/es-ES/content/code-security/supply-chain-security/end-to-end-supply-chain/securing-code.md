---
title: Mejores prácticas para asegurar el código en tu cadena de suministro
shortTitle: Asegurar el código
allowTitleToDifferFromFilename: true
intro: Orientación sobre cómo proteger el centro de tu cadena de suministro; el código que escribes y del cuál dependes.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
---

## Acerca de esta guía

Esta guía describe los cambios de más alto impacto que puedes hacer para mejorar la seguridad de tu código. Cada sección detalla un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de más alto impacto se listan primero.

## ¿Cuál es el riesgo?

Los riesgos clave en el proceso de desarrollo incluyen:

- Utilizar dependencias con las vulnerabilidades de seguridad que podría aprovechar una tacante.
- Filtrar credenciales de autenticación o un token que pudiera utilizar un atacante para acceder a tus recursos.
- Introducir una vulnerabilidad a tu propio código que pueda aprovechar un atacante.

Estos riesgos abren la posibilidad de que tus recursos y proyectos sufran un ataque y dichos riesgos se pasan directamente a cualquiera que utilice un paquete que crees. Las siguientes secciones explican cómo puedes proteger a tus usuarios y a ti mismo de estos riesgos.

## Crear un programa de administración de vulnerabilidades para las dependencias

Puedes asegurar el código del que dependes si creas un programa de administración de vulnerabilidades para las dependencias. En un nivel alto, este debería incluir los procesos para garantizar que:

1. Crees un inventario de tus dependencias.

2. Sepas cuándo hay una vulnerabilidad de seguridad en una dependencia.

3. Evalúes el impacto de dicha vulnerabilidad en tu código y decidas qué acción llevar a cabo.

### Generación automática de inventario

Como primer paso, necesitas realizar un inventario completo de tus dependencias. La gráfica de dependencias de un repositorio te muestra las dependencias de los ecosistemas compatibles. Si ingresas tus dependencias o utilizas otros ecosistemas, necesitarás suplementar esto con los datos de las herramientas de terceros o listando las dependencias manualmente. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Detección automática de las vulnerabilidades en las dependencias

{% data variables.product.prodname_dependabot %} puede ayudarte monitoreando tus dependencias y notificándote cuando contengan una vulnerabilidad conocida. {% ifversion fpt or ghec or ghes > 3.2 %}Incluso puedes habilitar el {% data variables.product.prodname_dependabot %} para que levante automáticamente solicitudes de cambios que actualicen la dependencia a una versión segura.{% endif %} Para obtener más información, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"{% ifversion fpt or ghec or ghes > 3.2 %} y "[Acerca de las actualizaciones de seguridad del Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}.

### Valoración de la exposición a riesgos de una dependencia vulnerable

Cuando descubres que estás utilizando una dependencia vulnerable, por ejemplo, una librería o marco de trabajo, debes valorar el nivel de exposición de tu proyecto y determinar la acción a tomar. Las vulnerabilidades a menudo se reportan con una calificación de gravedad para mostrarte qué tan grave pudo haber sido el impacto. Esta calificación de gravedad es una guía útil, pero no puede decirte el impacto total de la vulnerabilidad en tu código.

Para valorar el impacto de una vulnerabilidad en tu código, también necesitas considerar cómo utilizas la librería y determinar cuánto riesgo real representa para tu sistema. Tal vez, la vulnerabilidad es parte de una característica que no utilizas y puedes actualizar la librería afectada y seguir con tu ciclo de lanzamiento normal. O tal vez tu código se expuso fuertemente a los riesgos y necesitas actualizar la librería afectada y enviar una actualización de compilación de inmediato. Esta decisión dependen de cómo utilizas la librería en tu sistema y es una decisión sobre la cuál solo tú tendrás conocimiento para realizar.

## Asegurar tus tokens de comunicación

A menudo, el código necesita comunicarse con otros sistemas a través de una red y requiere secretos (como una contrasella o llave de API) para autenticarse. Tu sistema necesita acceso a estos secretos para ejecutarse, pero es la mejor práctica el no incluirlos en tu código fuente. Esto es especialmente importante en el caso de los repositorios públicos, pero también para los repositorios privados a los cuales tienen acceso muchas personas.

### Detección automática de secretos confirmados a un repositorio

{% note %}

**Nota:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dotcom %} se asocia con muchos proveedores para detectar automáticamente cuándo se confirman los secretos o cuando se almacenan en tus repositorios públicos y notifica al proveedor para que puedan tomar acciones adecuadas para garantizar que tu cuenta sigue estando segura. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %} para los patrones asociados](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)".
{% endif %}

{% ifversion fpt %}
{% data reusables.secret-scanning.fpt-GHAS-scans %}
{% elsif ghec %}
Si tu organización utiliza la {% data variables.product.prodname_GH_advanced_security %}, puedes habilitar el {% data variables.product.prodname_secret_scanning_GHAS %} en cualquier repositorio que le pertenezca a la organización. También puedes definir patrones personalizados para detectar secretos adicionales a nivel de repositorio, organización o empresa. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)".
{% else %}
Puedes configurar el {% data variables.product.prodname_secret_scanning %} para que verifique si muchos proveedores de servicios emitieron secretos y para notificarte cuando estos se detecten. También puedes definir patrones personalizados para detectar secretos adicionales a nivel de repositorio, organización o empresa. Para obtener más información, consulta las secciones "[Acerca del escaneo de secretos](/code-security/secret-scanning/about-secret-scanning)" y "[Patrones del escaneo de secretos](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### Almacenamiento seguro de los secretos que utilizas en {% data variables.product.product_name %}
{% endif %}

{% ifversion fpt or ghec %}
Además de tu código, probablemente necesitarás utilizar secretos en otros lugares. Por ejemplo, para permitir que los flujos de trabajo de {% data variables.product.prodname_actions %}, el {% data variables.product.prodname_dependabot %} o tu ambiente de desarrollo de {% data variables.product.prodname_codespaces %} se comuniquen con otros sistemas. Para obtener más información sobre cómo almacenar y utilizar secretos de forma segura, consulta las secciones "[Secretos cifrados en las acciones](/actions/security-guides/encrypted-secrets)", "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)" y "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% endif %}

{% ifversion ghes > 3.2 or ghae %}
Además de tu código, probablemente necesitarás utilizar secretos en otros lugares. Por ejemplo, para permitir que los flujos de trabajo de {% data variables.product.prodname_actions %}{% ifversion ghes %} o el {% data variables.product.prodname_dependabot %}{% endif %} se comuniquen con otros sistemas. Para obtener más información sobre cómo almacenar y utilizar secretos de forma segura, consulta las secciones "[Secretos cifrados en las acciones](/actions/security-guides/encrypted-secrets){% ifversion ghes %}" y "[Administrar los secretos cifrados para el dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".{% else %}".{% endif %}
{% endif %}

## Mantener los patrones de código vulnerable fuera de tu repositorio

{% note %}

**Nota:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Crear un proceso de revisión de solicitudes de cambio

Puedes mejorar la calidad y seguridad de tu código si te aseguras de que todas las solicitudes de cambio se revisen y prueben antes de que se fusionen. {% data variables.product.prodname_dotcom %} tiene muchas características que puedes utilizar para controlar el proceso de revisión y fusión. Para iniciar, consulta la sección "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

### Escanear tu código en busca de patrones vulnerables

A menudo, es difícil que los revisores identifiquen los patrones de código inseguro si no cuentan con ayuda para ello. Adicionalmente a escanear tu código en busca de secretos, puedes verificar si existen patrones asociados con vulnerabilidades de seguridad. Por ejemplo, una función que no sea segura para la memoria o que falle en escapar la entrada del usuario y pudiera dar como resultado una vulnerabilidad de inyección. {% data variables.product.prodname_dotcom %} ofrece varias formas diferentes de tratar tanto cómo como cuándo escanear tu código. Para iniciar, consulta la sección "[Acerca del escaneo de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

## Pasos siguientes

- "[Asegurar tu cadena de suministros de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Mejores prácticas para asegurar cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Mejores prácticas para asegurar tu sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
