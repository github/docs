---
title: Clasificar las alertas del escaneo de código en las solicitudes de cambios
shortTitle: Clasificar las alertas en las solicitudes de cambios
intro: 'Cuando el {% data variables.product.prodname_code_scanning %} identifica un problema en una solicitud de extracción, puedes revisar el código que se ha resaltado y resolver la alerta.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Si tienes permiso de lectura en un repositorio, puedes ver las anotaciones en las solicitudes de cambios. Con los permisos de escritura, puedes ver la información detallada y resolver las alertas del {% data variables.product.prodname_code_scanning %} para el repositorio en cuestión.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### Acerca de los resultados del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios

En los repositorios donde se configura el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambios, éste verificará el código en dicha solicitud. Predeterminadamente, esto se limita a solicitudes de cambios que apuntan a la rama predeterminada, pero puedes cambiar esta configuración dentro de {% data variables.product.prodname_actions %} o en un sistema de IC/EC de terceros. Si el fusionar los cambios puede introducir alertas nuevas de {% data variables.product.prodname_code_scanning %} a la rama destino, éstas se reportarán como resultados de verificación en la solicitud de cambios. Las alertas también se muestran como anotaciones en la pestaña de **Archivos que cambiaron** de la solicitud de cambios. Si tienes permisos de escritura para el repositorio, puedes ver cualquier alerta del {% data variables.product.prodname_code_scanning %} existente en la pestaña de **Seguridad**. Para obtener más información sobre las alertas de los repositorios, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Si el {% data variables.product.prodname_code_scanning %} presenta cualquier resultado con una severidad de `error`, la verificación fallará y el error se reportará en los resultados de la verificación. Si todos los resultados que encuentra el {% data variables.product.prodname_code_scanning %} tienen severidades menores, las alertas se tratarán como advertencias o notificaciones y la verificación será exitosa. Si tu solicitud de cambios apunta a una rama protegida que se habilitó para el {% data variables.product.prodname_code_scanning %} y el propietario del repositorio configuró las verificaciones de estado requeridas, entonces debes ya sea arreglar o {% if currentVersion == "enterprise-server@2.22" %}cerrar{% else %}descartar{% endif %} todas las alertas de error antes de que se pueda fusionar la solicitud de cambios. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

![Verificación fallida del {% data variables.product.prodname_code_scanning %} en una solicitud de cambios](/assets/images/help/repository/code-scanning-check-failure.png)

### Acerca del {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio

Hay muchas opciones para configurar el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio, así que la configuración de cada repositorio variará y algunas tendrán más de una verificación. La verificación que contiene los resultados del {% data variables.product.prodname_code_scanning %} se llama: **Resultados del escaneo de código**.

Si el repositorio utiliza el {% data variables.product.prodname_codeql_workflow %}, se ejecutará una verificación de **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** para cada lenguaje antes de que la verificación de resultados se ejecute. La verificación del análisis podría fallar si existieran problemas de configuración o si la solicitud de cambios impide la compilación para un lenguaje que el análisis necesita compilar (por ejemplo, C/C++, C# o Java). Así como con otras verificaciones de solicitudes de cambios, puedes ver todos los detalles de la falla de la verificación en la pestaña de **Verificaciones**. Para obtener más información acerca de la configuración y la soución de problemas, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" o "[Solucionar problemas del {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)".

### Clasificar una alerta en tu solicitud de cambios

Cuando ves la pestaña de **Archivos que cambiaron** en una solicitud de cambios, puedes ver anotaciones de cualquier línea de código que haya activado la alerta.

![Anotación de alerta dentro de un diff de una solicitud de cambios](/assets/images/help/repository/code-scanning-pr-annotation.png)

Si tienes permisos de escritura para el repositorio, algunas anotaciones contendrán enlaces con un contexto adicional de la alerta. En el ejemplo anterior del análisis de {% data variables.product.prodname_codeql %}, puedes dar clic en **valor proporcionado por el usuario** para ver en dónde ingresarían los datos no confiables dentro del flujo de datos (a esto se le conoce como la fuente). En este caso, también puedes ver la ruta completa desde la fuente hasta el código que utiliza los datos (el consumidor de datos) dando clic en **Mostrar rutas**. Esto facilita la revisión, ya sea que los datos no sean confiables o que el análisis falle en reconocer un paso de sanitización de datos entre la fuente y el consumidor de datos. Para obtener información sobre cómo analizar el flujo de datos utilizando {% data variables.product.prodname_codeql %}, consulta la sección "[Acerca del análisis de flujo de datos](https://help.semmle.com/QL/learn-ql/intro-to-data-flow.html)".

Para ver más información sobre una alerta, los usuarios con permisos de escritura pueden dar clic en el enlace de **Mostrar más detalles** que se muestra en la anotación. Esto te permite ver todo el contexto y los metadatos que proporciona la herramienta en una vista de alertas. En el siguiente ejemplo, puedes ver que las etiquetas muestran la severidad, tipo y las enumeraciones de los puntos débiles comunes (los CWE) del problema. La vista también muestra qué confirmación introdujo el problema.

En la vista detallada de una alerta, algunas herramientas del {% data variables.product.prodname_code_scanning %}, como el análisis de {% data variables.product.prodname_codeql %}, también incluyen una descripción del problema y un enlace de **Mostrar más** para orientarte sobre cómo arreglar tu código.

![Descripción de alerta y enlace para mostrar más información](/assets/images/help/repository/code-scanning-pr-alert.png)

### {% if currentVersion == "enterprise-server@2.22" %}Resolver{% else %}Arreglar{% endif %} una alerta en tu solicitud de cambios

Cualquiera con acceso de subida a una solicitud de cambios puede arreglar una alerta del {% data variables.product.prodname_code_scanning %}, la cual se identifique en dicha solicitud. Si confirmas cambios en la solicitud de extracción, esto activará una ejecución nueva de las verificaciones de dicha solicitud. Si tus cambios arreglan el problema, la alerta se cierra y la anotación se elimina.

{% if currentVersion == "enterprise-server@2.22" %}

Si no crees que alguna alerta deba arreglarse, los usuarios con permisos de escritura pueden cerrarla manualmente. {% data reusables.code-scanning.close-alert-examples %} El botón de **Cerrar** se encuentra disponible en las anotaciones y en la vista de alertas si tienes permisos de escritura en el repositorio.

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

### Descartar una alerta en tu solicitud de cambios

Una forma alterna de cerrar una alerta es descartarla. Puedes descartar una alerta si no crees que necesite arreglarse. {% data reusables.code-scanning.close-alert-examples %} Si tienes permisos de escritura en el repositorio, el botón de **Descartar** está disponible en las anotaciones de código y en el resumen de alertas. Cuando das clic en **Descartar** se te pedirá elegir una razón para cerrar la alerta.

![Elegir una razón para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obtener más información acerca de descartar alertas, consulta la sección "[Administrar alertas del {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".

{% endif %}
