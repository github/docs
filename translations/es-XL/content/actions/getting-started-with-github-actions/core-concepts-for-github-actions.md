---
title: Conceptos básicos para GitHub Actions
shortTitle: Conceptos básicos
intro: 'A continuación se muestra una lista de términos comunes de {% data variables.product.prodname_actions %} que utilizamos en nuestros sitios y documentación de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acción

Las tareas individuales que combinas como pasos para crear un trabajo. Las acciones son el componente portable más pequeño de un flujo de trabajo. Puedes crear tus propias acciones, usar acciones compartidas de la comunidad de {% data variables.product.prodname_dotcom %} y personalizar las acciones públicas. Para utilizar una acción en un flujo de trabajo, debes incluirla como paso.

### Artefacto

Los artefactos son los archivos que se crean cuando desarrollas y pruebas tu código. Por ejemplo, los artefactos podrían incluir archivos binarios o de paquete, resultados de pruebas, capturas de pantalla o archivos de registro. Los artefactos se asocian con la ejecución de flujo de trabajo en la que se crearon, y los puede usar o implementar otro trabajo.

### Integración continua (CI)

El ejercicio de desarrollo de software relacionado con la frecuente confirmación de pequeños cambios de código en un repositorio compartido. Con {% data variables.product.prodname_actions %}, puedes crear flujos de trabajo de CI personalizados que automaticen el desarrollo y la prueba de tu código. Desde el repositorio, puedes ver el estado de los cambios de código y los registros detallados de cada acción de tu flujo de trabajo. La CI les ahorra tiempo a los programadores al ofrecer comentarios inmediatos sobre los cambios de código para detectar y resolver errores más rápido.

### Implementación continua (CD)

La implementación continua se desarrolla sobre la integración continua. Cuando se confirma el código nuevo y pasa las pruebas de CI, el código se implementa de manera automática en la producción. Con {% data variables.product.prodname_actions %}, puedes crear flujos de trabajo de CD personalizados para implementar de manera automática tu código en cualquier nube, servicio de almacenamiento propio o plataforma directamente desde tu repositorio. La CD les ahorra tiempo a los programadores al automatizar el proceso de implementación y permite implementar más rápido los cambios de código estables ya probados para tus clientes.

### Evento

Una actividad específica que activa una ejecución de flujo de trabajo. Por ejemplo, la actividad se puede originar desde {% data variables.product.prodname_dotcom %} cuando alguien sube una confirmación a un repositorio o cuando se crea una propuesta o solicitud de extracción. También puedes configurar un flujo de trabajo para que se ejecute cuando ocurre un evento externo usando el webhook de envío de repositorios.

### Ejecutor alojado de {% data variables.product.prodname_dotcom %}
{% data variables.product.prodname_dotcom %} aloja los ejecutores de Linux, Windows y macOS. Los trabajos se ejecutan en una nueva instancia de una máquina virtual que incluye el software preinstalado de uso común. {% data variables.product.prodname_dotcom %} realiza todas las actualizaciones y el mantenimiento de los ejecutores alojados de {% data variables.product.prodname_dotcom %}. No puedes personalizar la configuración de hardware de los ejecutores alojados de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Entornos virtuales para ejecutores alojados de {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

### Trabajo

Un conjunto de pasos que se ejecutan en el mismo ejecutor. Puedes definir reglas de dependencia para cómo se deben ejecutar los trabajos en un archivo de flujo de trabajo. Los trabajos se pueden ejecutar al mismo tiempo en paralelo o en forma secuencial en función del estado de un trabajo anterior. Por ejemplo, un flujo de trabajo puede tener dos trabajos consecutivos para desarrollar y probar el código. El trabajo de prueba depende del estado del trabajo de desarrollo. Si el trabajo de desarrollo falla, no se ejecutará el trabajo de prueba. Para los ejecutores alojados {% data variables.product.prodname_dotcom %}, cada trabajo en un flujo de trabajo se ejecuta en una nueva instancia de un entorno virtual.

### Ejecutor

Cualquier máquina con la aplicación del ejecutor {% data variables.product.prodname_actions %} instalada. Puedes usar un ejecutor alojado por {% data variables.product.prodname_dotcom %} o alojar tu propio ejecutor. Un ejecutor espera los trabajos disponibles. Cuando un ejecutor recoge un trabajo, ejecuta las acciones del trabajo e informa el progreso, los registros y los resultados finales a {% data variables.product.prodname_dotcom %}. Los runners ejecutan un trabajo por vez. Para obtener más información, consulta "[Ejecutor alojado y ejecutor autoalojado de {% data variables.product.prodname_dotcom %}](#github-hosted-runner)[](#self-hosted-runner)".

{% note %}

**Nota:** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### Ejecutor autoalojado

Una máquina que administras y mantienes con la aplicación del ejecutor autoalojado instalada. {% data reusables.github-actions.self-hosted-runner-description %} Para obtener más información, consulta "[Alojar tus propios ejecutores](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)".

### Paso

Un paso es una tarea individual que puede ejecutar comandos o acciones. Un trabajo configura uno o más pasos. Cada paso en un trabajo se ejecuta en el mismo ejecutor, lo que permite que las acciones en ese trabajo compartan información usando el sistema de archivos.

### Entorno virtual

El entorno virtual de un ejecutor alojado de {% data variables.product.prodname_dotcom %} incluye la configuración de hardware, el sistema operativo y el software instalado de la máquina virtual. Para obtener más información, consulta "[Entornos virtuales para ejecutores alojados de {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

### Flujo de trabajo

Un proceso automático configurable que puedes configurar en tu repositorio para elaborar, probar, empaquetar, lanzar o implementar cualquier proyecto en {% data variables.product.prodname_dotcom %}. Los flujos de trabajo constan de uno o más trabajos y se pueden programar o activar mediante un evento.

### Archivo de flujo de trabajo

El archivo YAML que define tu configuración de flujo de trabajo con un trabajo como mínimo. Este archivo se aloja en la raíz de tu repositorio {% data variables.product.prodname_dotcom %} en el directorio de `.github/workflows`.

### Ejecución de flujo de trabajo

Una instancia de tu flujo de trabajo que se ejecuta cuando ocurre el evento previamente configurado. Puedes ver los trabajos, acciones, registros y estados de cada ejecución de flujo de trabajo.
