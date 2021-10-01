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
  ghes: '>=3.0'
  ghae: '*'
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

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_capc %} results" check must pass before you can merge the pull request. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Acerca del {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio

Hay muchas opciones para configurar el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio, así que la configuración de cada repositorio variará y algunas tendrán más de una verificación.

### {% data variables.product.prodname_code_scanning_capc %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_capc %} results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 %} To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. Para obtener más información, consulta la sección "[Administrar las alertas del escaneo de código para tu repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)".

![{% data variables.product.prodname_code_scanning_capc %} results check on a pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}, `critical`, or `high`,{% endif %} the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![Verificación fallida del {% data variables.product.prodname_code_scanning %} en una solicitud de cambios](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae-next %}You can override the default behavior in your repository settings, by specifying the level of severities {% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}and security severities {% endif %}that will cause a pull request check failure. For more information, see "[Defining the severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. La verificación del análisis podría fallar si existieran problemas de configuración o si la solicitud de cambios impide la compilación para un lenguaje que el análisis necesita compilar (por ejemplo, C/C++, C# o Java).

Así como con otras verificaciones de solicitudes de cambios, puedes ver todos los detalles de la falla de la verificación en la pestaña de **Verificaciones**. Para obtener más información acerca de la configuración y la soución de problemas, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" o "[Solucionar problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Viewing an alert on your pull request

You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

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
