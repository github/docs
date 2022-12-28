---
title: Clasificar las alertas del escaneo de código en las solicitudes de cambios
shortTitle: Triage alerts in pull requests
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
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162746'
---
{% data reusables.code-scanning.beta %}

## Acerca de los resultados del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios

En los repositorios donde se configura el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambios, {% data variables.product.prodname_code_scanning %} verificará el código en dicha solicitud. Predeterminadamente, esto se limita a solicitudes de cambios que apuntan a la rama predeterminada, pero puedes cambiar esta configuración dentro de {% data variables.product.prodname_actions %} o en un sistema de IC/EC de terceros. Si el resultado de combinar los cambios puede introducir alertas nuevas de {% data variables.product.prodname_code_scanning %} en la rama de destino, las alertas se notificarán en varios lugares.

- Comprueba los resultados en la solicitud de incorporación de cambios. {% ifversion code-scanning-pr-conversations-tab %}
- Pestaña **Conversación** de la solicitud de incorporación de cambios, como parte de una revisión de solicitud de incorporación de cambios. {% endif %} 
- Pestaña **Archivos cambiados** de la solicitud de incorporación de cambios.

Si tiene permiso de escritura para el repositorio, puede ver cualquier alerta existente de {% data variables.product.prodname_code_scanning %} en la pestaña **Security**. Para obtener información sobre las alertas del repositorio, consulte "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

En los repositorios en los que está configurado que el {% data variables.product.prodname_code_scanning %} realice un examen cada vez que se inserta código, {% data variables.product.prodname_code_scanning %} también asignará los resultados a cualquier solicitud de incorporación de cambios abierta y agregará las alertas como anotaciones en los mismos lugares que otras comprobaciones de solicitud de incorporación de cambios. Para obtener más información, consulte "[Examinar al insertar](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".

Si tu solicitud de cambios apunta a una rama protegida que utiliza el {% data variables.product.prodname_code_scanning %} y el propietario del repositorio configuró las verificaciones de estado requeridas, entonces la verificación de los "resultados del {% data variables.product.prodname_code_scanning_capc %}" debe pasar antes de que puedas fusionar la solicitud de cambios. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Acerca del {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio

Hay muchas opciones para configurar el {% data variables.product.prodname_code_scanning %} como una verificación de solicitudes de cambio, así que la configuración de cada repositorio variará y algunas tendrán más de una verificación. 

### Verificación de resultados de {% data variables.product.prodname_code_scanning_capc %}

En todas las configuraciones de {% data variables.product.prodname_code_scanning %}, la comprobación que contiene los resultados del {% data variables.product.prodname_code_scanning %} es: **resultados de {% data variables.product.prodname_code_scanning_capc %}** . Los resultados para cada herramienta de análisis se muestran por separado. Cualquier alerta nueva que ocasionen los cambios en la solicitud de cambios se muestran como anotaciones. 

Para ver el conjunto de alertas completo de la rama analizada, haz clic en **Ver todas las alertas de rama**. Se abre la vista completa de alertas donde puede filtrar todas las alertas de la rama por tipo, gravedad, etiqueta, etc. Para obtener más información, consulte "[Administración de alertas de análisis de código para el repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)".

![Comprobación de resultados de {% data variables.product.prodname_code_scanning_capc %} en una solicitud de incorporación de cambios](/assets/images/help/repository/code-scanning-results-check.png)

### Fallos de verificación de resultados de {% data variables.product.prodname_code_scanning_capc %}

Si en la comprobación de resultados de {% data variables.product.prodname_code_scanning %} se detecta algún problema con una gravedad de `error`, `critical` o `high`, se produce un error en la comprobación y el error se notifica en los resultados. Si todos los resultados que encontró el {% data variables.product.prodname_code_scanning %} tienen gravedades menores, las alertas se tratarán como advertencias o notas y la verificación tendrá éxito.

![Verificación fallida del {% data variables.product.prodname_code_scanning %} en una solicitud de cambios](/assets/images/help/repository/code-scanning-check-failure.png)

Puedes invalidar el comportamiento predeterminado en la configuración del repositorio. Para ello, especifica los niveles de gravedad y la gravedad de seguridad que causarán un error en la comprobación de la solicitud de incorporación de cambios. Para obtener más información, consulte "[Definición de las gravedades que provocan un error de comprobación de solicitudes de incorporación de cambios](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Otras verificaciones del {% data variables.product.prodname_code_scanning %}

Dependiendo de tu configuración, podrías ver verificaciones adicionales ejecutándose en las solicitudes de cambios con el {% data variables.product.prodname_code_scanning %} configurado. A menudo, estos son flujos de trabajo que analizan el código o que cargan resultados del {% data variables.product.prodname_code_scanning %}. Estas verificaciones son útiles para solucionar problemas cuando el análisis los presenta. 

Por ejemplo, si el repositorio utiliza {% data variables.code-scanning.codeql_workflow %}, se ejecutará una verificación de **{% data variables.product.prodname_codeql %}/Analyze (LANGUAGE)** para cada lenguaje antes de que se ejecute la comprobación de resultados. La verificación del análisis podría fallar si existieran problemas de configuración o si la solicitud de cambios impide la compilación para un lenguaje que el análisis necesita compilar (por ejemplo, C/C++, C# o Java). 

Al igual que con otras comprobaciones de solicitudes de incorporación de cambios, puede ver detalles completos del error de comprobación en la pestaña **Checks**. Para obtener más información sobre la configuración y la solución de problemas, consulte "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" o "[Solución de problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Visualizar una alerta en tu solicitud de cambios

{% ifversion code-scanning-pr-conversations-tab %} Para ver todas las alertas de {% data variables.product.prodname_code_scanning %} introducidas en una solicitud de incorporación de cambios, accede a la pestaña **Conversación**. {% data variables.product.prodname_code_scanning_capc %} publica una revisión de solicitud de incorporación de cambios en la que cada alerta se muestra como una anotación en las líneas de código que desencadenaron la alerta. Puedes comentar las alertas, descartarlas y ver sus rutas de acceso directamente en las anotaciones. Para ver los detalles completos de una alerta, haz clic en el vínculo "Mostrar más detalles", lo que te llevará a la página de detalles de la alerta.

![Anotación de alerta en una solicitud de cambios en la pestaña Conversación](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

También puedes ver todas las alertas de {% data variables.product.prodname_code_scanning %} en la pestaña **Archivos cambiados** de la solicitud de incorporación de cambios. Las alertas de {% data variables.product.prodname_code_scanning %} existentes en un archivo que están fuera de la diferencia de los cambios introducidos en la solicitud de incorporación de cambios solo aparecerán en la pestaña **Archivos modificados**.

{% else %} Para ver todas las alertas de {% data variables.product.prodname_code_scanning %} introducidas en una solicitud de incorporación de cambios, accede a la pestaña **Archivos cambiados**. Cada alerta se muestra como una anotación en las líneas de código que desencadenaron la alerta. La gravedad de la alerta se muestra en la anotación. 

![Anotación de alerta dentro de la diferencia de una solicitud de incorporación de cambios](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

Si tienes permisos de escritura para el repositorio, algunas anotaciones contendrán enlaces con un contexto adicional de la alerta. En el ejemplo anterior del análisis de {% data variables.product.prodname_codeql %}, puede hacer clic en **user-provided value** para ver dónde se introducen los datos no fiables en el flujo de datos (a esto se le conoce como el origen). En este caso, también puede ver la ruta completa desde el origren hasta el código que utiliza los datos (el receptor) haciendo clic en **Show paths**. Esto facilita la revisión, ya sea que los datos no sean confiables o que el análisis falle en reconocer un paso de sanitización de datos entre la fuente y el consumidor de datos. Para obtener información sobre cómo analizar el flujo de datos mediante {% data variables.product.prodname_codeql %}, consulte "[Acerca del análisis de flujo de datos](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)".

Para ver más información sobre una alerta, los usuarios con permisos de escritura pueden hacer clic en el vínculo **Show more details** que se muestra en la anotación. Esto te permite ver todo el contexto y los metadatos que proporciona la herramienta en una vista de alertas. En el siguiente ejemplo, puedes ver que las etiquetas muestran la severidad, tipo y las enumeraciones de los puntos débiles comunes (los CWE) del problema. La vista también muestra qué confirmación introdujo el problema.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

En la vista detallada de una alerta, algunas herramientas de {% data variables.product.prodname_code_scanning %}, como el análisis de {% data variables.product.prodname_codeql %}, también incluyen una descripción del problema y un enlace de **Show more** para ayudarle a saber cómo corregir el código.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![Descripción y vínculo de la alerta para mostrar más información](/assets/images/help/repository/code-scanning-pr-alert.png) {% else %} ![Descripción y vínculo de la alerta para mostrar más información](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Realización de comentarios sobre una alerta en una solicitud de incorporación de cambios

Puedes comentar cualquier alerta de {% data variables.product.prodname_code_scanning %} que se hayan introducido debido a los cambios en una solicitud de incorporación de cambios. Las alertas aparecen como anotaciones en la pestaña **Conversación** de una solicitud de incorporación de cambios, como parte de una revisión de la solicitud de incorporación de cambios, y también se muestran en la pestaña **Archivos cambiados**. Solo puedes comentar las alertas que se hayan introducido debido a los cambios en una solicitud de incorporación de cambios. Las alertas de {% data variables.product.prodname_code_scanning %} existentes en archivos que están fuera de los cambios introducidos en la solicitud de incorporación de cambios aparecerán en la pestaña **Archivos modificados**, pero no se podrán comentar.

Puedes optar por establecer que, para que se pueda combinar una solicitud de incorporación de cambios, primero deban resolverse todas las conversaciones de una solicitud de incorporación de cambios, incluidas las conversaciones de las alertas de {% data variables.product.prodname_code_scanning %}. Para más información, vea "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging)".
{% endif %}
## Arreglar una alerta en tu solicitud de cambios

Cualquiera con acceso de subida a una solicitud de cambios puede arreglar una alerta del {% data variables.product.prodname_code_scanning %}, la cual se identifique en dicha solicitud. Si confirmas cambios en la solicitud de extracción, esto activará una ejecución nueva de las verificaciones de dicha solicitud. Si tus cambios arreglan el problema, la alerta se cierra y la anotación se elimina.

## Descartar una alerta en tu solicitud de cambios

Una forma alterna de cerrar una alerta es descartarla. Puedes descartar una alerta si no crees que necesite arreglarse. {% data reusables.code-scanning.close-alert-examples %} Si tiene permisos de escritura en el repositorio, el botón **Dismiss** aparece en las anotaciones de código y en el resumen de alertas. Al hacer clic en **Dismiss**, se le pedirá que elija un motivo para cerrar la alerta.
{% ifversion comment-dismissed-code-scanning-alert %} ![ Captura de pantalla de la alerta de examen de código, con la lista desplegable para seleccionar el motivo del descarte resaltada](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![Selección de un motivo para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obtener más información sobre cómo descartar alertas, consulta {% ifversion delete-code-scanning-alerts %}"[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".{% else %} "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)".{% endif %}
