---
title: Clasificar las alertas del escaneo de código en las solicitudes de cambios
shortTitle: Clasificar las alertas en las solicitudes de cambio
intro: 'Cuando el {% data variables.product.prodname_code_scanning %} identifica un problema en una solicitud de extracción, puedes revisar el código que se ha resaltado y resolver la alerta.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

## Acerca de los resultados del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios

En los repositorios donde se configura el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambios, éste verificará el código en dicha solicitud. Predeterminadamente, esto se limita a solicitudes de cambios que apuntan a la rama predeterminada, pero puedes cambiar esta configuración dentro de {% data variables.product.prodname_actions %} o en un sistema de IC/EC de terceros. Si el fusionar los cambios puede introducir alertas nuevas de {% data variables.product.prodname_code_scanning %} a la rama destino, éstas se reportarán como resultados de verificación en la solicitud de cambios. Las alertas también se muestran como anotaciones en la pestaña de **Archivos que cambiaron** de la solicitud de cambios. Si tienes permisos de escritura para el repositorio, puedes ver cualquier alerta del {% data variables.product.prodname_code_scanning %} existente en la pestaña de **Seguridad**. Para obtener más información sobre las alertas de los repositorios, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 or ghec %}
In repositories where {% data variables.product.prodname_code_scanning %} is configured to scan each time code is pushed, {% data variables.product.prodname_code_scanning %} will also map the results to any open pull requests and add the alerts as annotations in the same places as other pull request checks. For more information, see "[Scanning on push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)."
{% endif %}

Si tu solicitud de cambios apunta a una rama protegida que utiliza el {% data variables.product.prodname_code_scanning %} y el propietario del repositorio configuró las verificaciones de estado requeridas, entonces la verificación de los "resultados del {% data variables.product.prodname_code_scanning_capc %}" debe pasar antes de que puedas fusionar la solicitud de cambios. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Acerca del {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio

Hay muchas opciones para configurar el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio, así que la configuración de cada repositorio variará y algunas tendrán más de una verificación.

### Verificación de resultados de {% data variables.product.prodname_code_scanning_capc %}

Para todas las configuraciones del {% data variables.product.prodname_code_scanning %}, la verificación que contiene los resultados del {% data variables.product.prodname_code_scanning %} es: **resultados de {% data variables.product.prodname_code_scanning_capc %}**. Los resultados para cada herramienta de análisis se muestran por separado. Cualquier alerta nueva que ocasionen los cambios en la solicitud de cambios se muestran como anotaciones.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 or ghec %} Para ver el conjunto de alertas completo de la rama analizada, haz clic en **Ver todas las alertas de rama**. Esto abre la vista completa de alertas en donde puedes filtrar todas las de la rama por tipo, gravedad, etiqueta, etc. Para obtener más información, consulta la sección "[Administrar las alertas del escaneo de código para tu repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)".

![verificación de resultados de {% data variables.product.prodname_code_scanning_capc %} en una solicitud de cambios](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### Fallos de verificación de resultados de {% data variables.product.prodname_code_scanning_capc %}

Si la verificación de los resultados del {% data variables.product.prodname_code_scanning %} encuentra cualquier problema con una gravedad de `error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 or ghec %}, `critical`, o `high`,{% endif %} la verificación fallará y el error se reportará en los resultados de verificación. Si todos los resultados que encontró el {% data variables.product.prodname_code_scanning %} tienen gravedades menores, las alertas se tratarán como advertencias o notas y la verificación tendrá éxito.

![Verificación fallida del {% data variables.product.prodname_code_scanning %} en una solicitud de cambios](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}Puedes anular el comportamiento predeterminado de los ajustes de tu repositorio si especificas el nivel de gravedad {% ifversion fpt or ghes > 3.1  or ghae-issue-4697 or ghec %} y las gravedades de seguridad {% endif %} que ocasionarán el fallo de una verificación de solicitud de cambios. Para obtener más información, consulta la sección "[Definir las gravedades que ocasionan un fallo en la verificación de las solicitudes de cambios](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Otras verificaciones del {% data variables.product.prodname_code_scanning %}

Dependiendo de tu configuración, podrías ver verificaciones adicionales ejecutándose en las solicitudes de cambios con el {% data variables.product.prodname_code_scanning %} configurado. A menudo, estos son flujos de trabajo que analizan el código o que cargan resultados del {% data variables.product.prodname_code_scanning %}. Estas verificaciones son útiles para solucionar problemas cuando el análisis los presenta.

Por ejemplo, si el repositorio utiliza el {% data variables.product.prodname_codeql_workflow %}, se ejecutará una verificación de **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** para cada lenguaje antes de que se ejecute la verificación de resultados. La verificación del análisis podría fallar si existieran problemas de configuración o si la solicitud de cambios impide la compilación para un lenguaje que el análisis necesita compilar (por ejemplo, C/C++, C# o Java).

Así como con otras verificaciones de solicitudes de cambios, puedes ver todos los detalles de la falla de la verificación en la pestaña de **Verificaciones**. Para obtener más información acerca de la configuración y la soución de problemas, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" o "[Solucionar problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Visualizar una alerta en tu solicitud de cambios

Puedes ver cualquier alerta del {% data variables.product.prodname_code_scanning %} que se haya introducido en una solicitud de cambios si muestras la pestaña de **Archivos que cambiaron**. Cada alerta se muestra como una anotación en las líneas de código que la activaron. La gravedad de la alerta se muestra en la anotación.

![Anotación de alerta dentro de un diff de una solicitud de cambios](/assets/images/help/repository/code-scanning-pr-annotation.png)

Si tienes permisos de escritura para el repositorio, algunas anotaciones contendrán enlaces con un contexto adicional de la alerta. En el ejemplo anterior del análisis de {% data variables.product.prodname_codeql %}, puedes dar clic en **valor proporcionado por el usuario** para ver en dónde ingresarían los datos no confiables dentro del flujo de datos (a esto se le conoce como la fuente). En este caso, también puedes ver la ruta completa desde la fuente hasta el código que utiliza los datos (el consumidor de datos) dando clic en **Mostrar rutas**. Esto facilita la revisión, ya sea que los datos no sean confiables o que el análisis falle en reconocer un paso de sanitización de datos entre la fuente y el consumidor de datos. Para obtener información sobre cómo analizar el flujo de datos utilizando {% data variables.product.prodname_codeql %}, consulta la sección "[Acerca del análisis de flujo de datos](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)".

Para ver más información sobre una alerta, los usuarios con permisos de escritura pueden dar clic en el enlace de **Mostrar más detalles** que se muestra en la anotación. Esto te permite ver todo el contexto y los metadatos que proporciona la herramienta en una vista de alertas. En el siguiente ejemplo, puedes ver que las etiquetas muestran la severidad, tipo y las enumeraciones de los puntos débiles comunes (los CWE) del problema. La vista también muestra qué confirmación introdujo el problema.

En la vista detallada de una alerta, algunas herramientas del {% data variables.product.prodname_code_scanning %}, como el análisis de {% data variables.product.prodname_codeql %}, también incluyen una descripción del problema y un enlace de **Mostrar más** para orientarte sobre cómo arreglar tu código.

![Descripción de alerta y enlace para mostrar más información](/assets/images/help/repository/code-scanning-pr-alert.png)

## Arreglar una alerta en tu solicitud de cambios

Cualquiera con acceso de subida a una solicitud de cambios puede arreglar una alerta del {% data variables.product.prodname_code_scanning %}, la cual se identifique en dicha solicitud. Si confirmas cambios en la solicitud de extracción, esto activará una ejecución nueva de las verificaciones de dicha solicitud. Si tus cambios arreglan el problema, la alerta se cierra y la anotación se elimina.

## Descartar una alerta en tu solicitud de cambios

Una forma alterna de cerrar una alerta es descartarla. Puedes descartar una alerta si no crees que necesite arreglarse. {% data reusables.code-scanning.close-alert-examples %} Si tienes permisos de escritura en el repositorio, el botón de **Descartar** está disponible en las anotaciones de código y en el resumen de alertas. Cuando das clic en **Descartar** se te pedirá elegir una razón para cerrar la alerta.

![Elegir una razón para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obtener más información acerca de descartar alertas, consulta la sección "[Administrar alertas del {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".
