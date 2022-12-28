---
title: Solucionar problemas en el flujo de trabajo de CodeQL
shortTitle: Troubleshoot CodeQL workflow
intro: 'Si tienes problemas con el {% data variables.product.prodname_code_scanning %}, puedes solucionarlos si utilizas estos tips para resolver estos asuntos.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 1efc550663ddeff381acf929e184d26232d22723
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160812'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** En este artículo se describen las características disponibles con la versión de la acción CodeQL y el paquete CodeQL CLI asociado que se incluye en la versión inicial de esta versión de {% data variables.product.product_name %}. Si en la empresa se usa una versión más reciente de la acción CodeQL, consulte el [artículo {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow) para obtener información sobre las características más recientes. {% ifversion not ghae %} Para obtener información sobre el uso de la versión más reciente, consulte "[Configuración del análisis de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

## Producir bitácoras detalladas para la depuración

Para producir una salida más detallada de bitácoras, puedes habilitar el registro de depuración de pasos. Para más información, vea ["Habilitación del registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## Crear artefactos de depuración de {% data variables.product.prodname_codeql %}

Puedes obtener artefactos para que te ayuden a depurar {% data variables.product.prodname_codeql %}.
Los artefactos de depuración se cargarán en la ejecución de flujo de trabajo como un artefacto denominado `debug-artifacts`. Los datos contienen las bitácoras de {% data variables.product.prodname_codeql %}. la(s) base(s) de datos de {% data variables.product.prodname_codeql %} y cualquier archivo SARIF que produzca el flujo de trabajo.

Estos artefactos te ayudarán a depurar los problemas con {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Si contactas al soporte de GitHub, podrían pedirte estos datos.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### Creación de artefactos de depuración de {% data variables.product.prodname_codeql %} mediante la reejecución de trabajos con el registro de depuración habilitado

Puedes habilitar el registro de depuración y volver a ejecutar los trabajos para crear artefactos de depuración de {% data variables.product.prodname_codeql %}. Para obtener más información sobre cómo volver a ejecutar los flujos de trabajo y los trabajos de {% data variables.product.prodname_actions %}, consulta "[Volver a ejecutar flujos de trabajo y jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

Asegúrate de seleccionar **Habilitación del registro de depuración**. Esta opción habilita el registro de diagnóstico del ejecutor y el registro de depuración de pasos para la ejecución. A continuación, podrás descargar `debug-artifacts` para investigar más a fondo. No necesitas volver a ejecutar trabajos para modificar el archivo de flujo de trabajo al crear artefactos de depuración de {% data variables.product.prodname_codeql %}.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### Creación de artefactos de depuración de {% data variables.product.prodname_codeql %} mediante una marca de flujo de trabajo

Puedes crear artefactos de depuración de {% data variables.product.prodname_codeql %} mediante el uso de una marca en el flujo de trabajo. Para ello, tienes que modificar el paso `init` del archivo de {% data variables.product.prodname_codeql_workflow %} y establecer `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## Compilación automática para los fallos de un lenguaje compilado

Si una compilación automática de código para un lenguaje compilado dentro de tu proyecto falla, intenta los siguientes pasos de solución de problemas.

- Elimine el paso `autobuild` del flujo de trabajo de {% data variables.product.prodname_code_scanning %} y agregue los pasos de compilación específicos. Para obtener información sobre cómo editar el flujo de trabajo, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)". Para más información sobre cómo reemplazar el paso `autobuild`, vea "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

- Si tu flujo de trabajo no especifica explícitamente los lenguajes a analizar, {% data variables.product.prodname_codeql %} detectará implícitamente los lenguajes compatibles en tu código base. En esta configuración, fuera de los lenguajes compilados C/C++, C#, {% ifversion codeql-go-autobuild %} Go{% endif %} y Java, {% data variables.product.prodname_codeql %} solo analizará el lenguaje presente en la mayoría de los archivos de origen. Edita el flujo de trabajo y agrega una matriz que especifique los lenguajes que quieres analizar. El flujo de análisis predeterminado de CodeQL utiliza dicha matriz.

  Los siguientes extractos de un flujo de trabajo te muestran cómo puedes utilizar una matriz dentro de la estrategia del job para especificar lenguajes, y luego hace referencia a cada uno de ellos con el paso de "Inicializar {% data variables.product.prodname_codeql %}":

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Para más información sobre cómo editar el flujo de trabajo, vea "[Configuración del análisis de código](/code-security/secure-coding/configuring-code-scanning)".

## No se encontró código durante la compilación

Si se produce un error `No source code was seen during the build` o `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` en el flujo de trabajo, esto indica que {% data variables.product.prodname_codeql %} no ha podido supervisar el código. Hay muchas razones que podrían explicar esta falla:

1. Es posible que el repositorio no contenga código fuente escrito en lenguajes admitidos por {% data variables.product.prodname_codeql %}. Comprueba la lista de lenguajes admitidos y, si este es el caso, quita el flujo de trabajo de {% data variables.product.prodname_codeql %}. Para más información, consulta "[Acerca del examen de código con CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)".

1. La detección automática del lenguaje identificó un lenguaje compatible, pero no hay código analizable en dicho lenguaje dentro del repositorio. Un ejemplo típico es cuando nuestro servicio de detección de lenguaje encuentra un archivo asociado a un lenguaje de programación específico, como un archivo `.h` o `.gyp`, pero en el repositorio no existe el código ejecutable correspondiente. Para resolver el problema, puede definir manualmente los lenguajes que quiere analizar si actualiza la lista de lenguajes en la matriz `language`. Por ejemplo, la siguiente configuración analizará únicamente a Go y a Javascript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Para más información, vea el extracto de flujo de trabajo en "[Error de compilación automático para un lenguaje compilado](#automatic-build-for-a-compiled-language-fails)" más arriba.

1. Tu flujo de trabajo de {% data variables.product.prodname_code_scanning %} está analizando un lenguaje compilado (C, C++, C#,{% ifversion codeql-go-autobuild %} Go {% endif %} o Java), pero el código no se compiló. De manera predeterminada, el flujo de trabajo de análisis de {% data variables.product.prodname_codeql %} contiene un paso `autobuild`, pero este paso representa un proceso de mejor esfuerzo y podría no compilar el código de forma correcta, en función del entorno de compilación específico. También se podría producir un error en la compilación si ha eliminado el paso `autobuild` y no ha incluido manualmente los pasos de compilación.  Para más información sobre cómo especificar los pasos de compilación, vea "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
1. Tu flujo de trabajo está analizando un lenguaje compilado (C, C++, C#,{% ifversion codeql-go-autobuild %} Go {% endif %} o Java), pero algunas partes de tu compilación se almacenan en caché para mejorar el rendimiento (esto muy probablemente ocurra con los sistemas de compilación como Gradle o Bazel). Ya que {% data variables.product.prodname_codeql %} observa la actividad del compilador para entender los flujos de datos en un repositorio, {% data variables.product.prodname_codeql %} requiere que suceda una compilación completa para poder llevar a cabo este análisis.
1. El flujo de trabajo analiza un lenguaje compilado (C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} o Java),pero no se produce ninguna compilación entre los pasos `init` y `analyze` del flujo de trabajo. {% data variables.product.prodname_codeql %} requiere que tu compilación tome lugar entre estos dos pasos para poder observar la actividad del compilador y llevar a cabo el análisis.
1. Tu código compilado (en C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} o Java) se compiló con éxito, pero {% data variables.product.prodname_codeql %} no pudo detectar las invocaciones del compilador. Las causas más comunes son:

   - Ejecutar tu proceso de compilación en un contenedor separado a {% data variables.product.prodname_codeql %}. Para más información, vea "[Ejecución del análisis de código de CodeQL en un contenedor](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
   - Compilar utilizando un sistema de compilación distribuida externo a GitHub Actions, utilizando un proceso de daemon.
   - {% data variables.product.prodname_codeql %} no está consciente del compilador específico que estás utilizando.

  Para proyectos de .NET Framework y para los proyectos de C# que usen `dotnet build` o `msbuild`, tendrá que especificar `/p:UseSharedCompilation=false` en el paso `run` del flujo de trabajo, al compilar el código.
  
  Por ejemplo, la siguiente configuración para C# pasará el marcador durante el primer paso de compilación.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Si encuentras otro problema con tu compilador específico o con tu configuración, contacta a {% data variables.contact.contact_support %}.

Para más información sobre cómo especificar los pasos de compilación, vea "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## Las líneas de código escaneado son menores de lo esperado

Para los lenguajes compilados como C/C++, C#, Go y Java, {% data variables.product.prodname_codeql %} solo escanea los archivos que se compilen durante el análisis. Por lo tanto, la cantidad de líneas de código escaneado será menor de lo esperado si parte del código fuente no se compila correctamente. Esto puede ocurrir por varios motivos:

1. La característica `autobuild` de {% data variables.product.prodname_codeql %} utiliza la heurística para compilar el código de un repositorio. Sin embargo, algunas veces, este enfoque da como resultado un análisis incompleto del repositorio. Por ejemplo, cuando existen varios comandos `build.sh` en un mismo repositorio, es posible que no se complete el análisis, ya que el paso `autobuild` solo ejecutará uno de los comandos y, por tanto, algunos archivos de código fuente podrían no compilarse.
1. Algunos compiladores no funcionan con {% data variables.product.prodname_codeql %} y pueden causar problemas cuando analizan el código. Por ejemplo, Project Lombok utiliza unas API de compilación no públicas para modificar el comportamiento del compilador. Las asunciones que se utilizan en las modificaciones de este compilador no son válidas para el extractor de Java de {% data variables.product.prodname_codeql %}, así que el código no se puede analizar.

Si tu análisis de {% data variables.product.prodname_codeql %} escanea menos líneas de código de lo esperado, hay varios enfoques que puedes intentar para asegurarte de que todos los archivos de código fuente necesarios se compilen.

### Reemplazo del paso `autobuild`

Reemplace el paso `autobuild` con los mismos comandos de compilación que usaría en producción. Esto garantiza que {% data variables.product.prodname_codeql %} sepa exactamente cómo compilar todos los archivos de código fuente que quieras escanear.
Para más información, vea "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### Inspecciona la copia de los archivos de código fuente en la base de datos de {% data variables.product.prodname_codeql %}

Podrías entender por qué algunos archivos de código fuente no se ha analizado si inspeccionas la copia del código fuente que se incluye utilizando la base de datos de {% data variables.product.prodname_codeql %}. Para obtener la base de datos del flujo de trabajo de Acciones, modifique el paso `init` del archivo de flujo de trabajo de {% data variables.product.prodname_codeql %} y establezca `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Esto carga la base de datos como un artefacto de acciones que puedes descargar en tu máquina local. Para más información, vea "[Almacenamiento de artefactos de flujo de trabajo](/actions/guides/storing-workflow-data-as-artifacts)".

El artefacto contendrá una copia archivada de los archivos de código fuente examinados por {% data variables.product.prodname_codeql %} denominada _src.zip_. Si compara los archivos de código fuente del repositorio con los de _src.zip_, verá qué tipos de archivo faltan. Una vez que sepas qué tipos de archivo son los que no se analizan es más fácil entender cómo podrías cambiar el flujo de trabajo para el análisis de {% data variables.product.prodname_codeql %}.

## Alertas encontradas en el código generado

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Extracción de errores en la base de datos

El equipo de {% data variables.product.prodname_codeql %} trabaja constantemente en los errores de extracción críticos para asegurarse de que todos los archivos de código fuente pueden escanearse. Sin embargo, los extractores de {% data variables.product.prodname_codeql %} sí generan errores durante la creación de bases de datos ocasionalmente. {% data variables.product.prodname_codeql %} proporciona información acerca de los errores de extracción y las advertencias que se generan durante la creación de bases de datos en un archivo de bitácora.
La información de diagnóstico de extracción proporciona una indicación de la salud general de la base de datos. La mayoría de los errores del extractor no impactan el análisis significativamente. Una pequeña parte de los errores del extractor es saludable y, a menudo, indica un buen estado del análisis.

Sin embargo, si ves errores del extractor en la vasta mayoría de archivos que se compilan durante la creación de la base de datos, deberías revisarlos a detalle para intentar entender por qué algunos archivos de código fuente no se extrajeron adecuadamente.

{% else %}

## Algunas partes del repositorio no se han analizado con `autobuild`

La característica `autobuild` de {% data variables.product.prodname_codeql %} usa la heurística para compilar el código en un repositorio, pero en ocasiones este enfoque da como resultado un análisis incompleto de un repositorio. Por ejemplo, cuando existen varios comandos `build.sh` en un mismo repositorio, es posible que no se complete el análisis, ya que el paso `autobuild` solo ejecutará uno de los comandos. La solución consiste en reemplazar el paso `autobuild` con los pasos de compilación que compilarán todo el código fuente que se quiere analizar. Para más información, vea "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
{% endif %}

## La compilación tarda demasiado

Si tu compilación con análisis de {% data variables.product.prodname_codeql %} toma demasiado para ejecutarse, hay varios acercamientos que puedes intentar para reducir el tiempo de compilación.

### Incrementar la memoria o los núcleos

Si utilizas ejecutores auto-hospedados para ejecutar el análisis de {% data variables.product.prodname_codeql %}, puedes incrementar la memoria o la cantidad de núcleos en estos ejecutores.

### Utilizar matrices de compilación para paralelizar el análisis

El {% data variables.product.prodname_codeql_workflow %} predeterminado utiliza una matriz de lenguajes, que hace que el análisis de cada uno de ellos se ejecute en paralelo. Si especificaste los lenguajes que quieres analizar directamente en el paso de "Inicializar CodeQL", el análisis de cada lenguaje ocurrirá de forma secuencial. Para agilizar el análisis de lenguajes múltiples, modifica tu flujo de trabajo para utilizar una matriz. Para más información, vea el extracto de flujo de trabajo en "[Error de compilación automático para un lenguaje compilado](#automatic-build-for-a-compiled-language-fails)" más arriba.

### Reducir la cantidad de código que se está analizando en un solo flujo de trabajo

El tiempo de análisis suele ser proporcional a la cantidad de código que se analiza. Puedes reducir el tiempo de análisis si reduces la cantidad de código que se analice en cada vez, por ejemplo, si excluyes el código de prueba o si divides el análisis en varios flujos de trabajo que analizan únicamente un subconjunto de tu código a la vez.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Si divide el análisis en varios flujos de trabajo como se ha descrito antes, le recomendamos que al menos tenga uno que se ejecute en una `schedule` que analice todo el código del repositorio. Ya que {% data variables.product.prodname_codeql %} analiza los flujos de datos entre componentes, algunos comportamientos de seguridad complejos podrían detectarse únicamente en una compilación completa.

### Ejecución durante un evento `schedule`

Si el análisis es demasiado lento para ejecutarse durante los eventos `push` o `pull_request`, es posible que solo quiera desencadenarlo cuando se produzca el evento `schedule`. Para más información, vea "[Eventos](/actions/learn-github-actions/introduction-to-github-actions#events)".

### Verificar qué suites de consultas ejecuta el flujo de trabajo

Predeterminadamente, existen tres suites de consultas principales disponibles para cada lenguaje. Si optimizaste la compilación de la base de datos de CodeQL y el proceso aún es demasiado largo, podrías reducir la cantidad de consultas que ejecutas. La suite de consultas predeterminada se ejecuta automáticamente; esta contiene las consultas de seguridad más rápidas con las tasas más bajas de resultados falsos positivos.

Podrías estar ejecutando consultas o suites de consultas adicionales además de aquellas predeterminadas. Compruebe si el flujo de trabajo define una consulta adicional o un conjunto de consultas para ejecutarse con el elemento `queries`. Puedes probar el inhabilitar la consulta o suite de consultas adicionales. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)".

{% ifversion codeql-ml-queries %} {% note %}

**Nota:** Si ejecuta el conjunto de consultas `security-extended` o `security-and-quality` para JavaScript, algunas consultas usan tecnología experimental. Para más información, vea "[Acerca de las alertas de análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## Los resultados difieren de acuerdo con la plataforma de análisis

Si estás analizando código escrito en Python, podrías ver resultados diferentes dependiendo de si ejecutas el {% data variables.product.prodname_codeql_workflow %} en Linux, macOS o Windows.

En los ejecutores hospedados en GitHub que utilizan Linux, el {% data variables.product.prodname_codeql_workflow %} intenta instalar y analizar las dependencias de Python, lo cual podría llevar a más resultados. Para deshabilitar la instalación automática, agregue `setup-python-dependencies: false` al paso "Inicializar CodeQL" del flujo de trabajo. Para más información sobre cómo configurar el análisis de dependencias de Python, vea "[Análisis de dependencias de Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)".

{% endif %}

## Error: "Error del servidor"

Si la ejecución de un flujo de trabajo para {% data variables.product.prodname_code_scanning %} falla debido a un error de servidor, trata de ejecutar el flujo de trabajo nuevamente. Si el problema persiste, contaca a {% data variables.contact.contact_support %}.

## Error: "Espacio en disco insuficiente" o "Memoria insuficiente"

En proyectos muy grandes, {% data variables.product.prodname_codeql %} podría quedarse sin memoria o espacio de disco en el ejecutor.
{% ifversion fpt or ghec %}Si se produce esta incidencia en un ejecutor hospedado en {% data variables.product.prodname_actions %}, póngase en contacto con {% data variables.contact.contact_support %} para que podamos investigar el problema.
{% else %}Si llegas a tener este problema, intenta incrementar la memoria en el ejecutor.{% endif %}

{% ifversion fpt or ghec %}

## Error:403 "No se puede acceder al recurso por integración" al utilizar {% data variables.product.prodname_dependabot %}

El {% data variables.product.prodname_dependabot %} se considera no confiable cuando activa una ejecución de flujo de trabajo y este se ejecutará con un alcance de solo lectura. Para cargar resultados de {% data variables.product.prodname_code_scanning %} en una rama normalmente se necesita el ámbito `security_events: write`. Pero {% data variables.product.prodname_code_scanning %} siempre permite que se carguen los resultados cuando el evento `pull_request` desencadena la ejecución de la acción. Por este motivo, para las ramas de {% data variables.product.prodname_dependabot %}, se recomienda usar el evento `pull_request` en lugar del evento `push`.

Un enfoque simple es ejecutar las subidas a la rama predeterminada y cualquier otra rama que se ejecute a la larga, así como las solicitudes de cambio que se abren contra este conjunto de ramas:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Un enfoque alternativo es ejecutar todas las subidas con excepción de las ramas del {% data variables.product.prodname_dependabot %}:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Error persistente de análisis en la rama predeterminada

Si el {% data variables.product.prodname_codeql_workflow %} aún falla en una confirmación que se hizo en una rama predeterminada, debes verificar:

- si el {% data variables.product.prodname_dependabot %} fue el autor de la confirmación
- si la solicitud de incorporación de cambios que incluye la confirmación se ha combinado mediante `@dependabot squash and merge`

Este tipo de confirmación por fusión tiene como autor al {% data variables.product.prodname_dependabot %} y, por lo tanto, cualquier flujo de trabajo que se ejecute en la confirmación tendrá permisos de solo lectura. Si ha habilitado las actualizaciones de seguridad o de versión de {% data variables.product.prodname_code_scanning %} y {% data variables.product.prodname_dependabot %} en el repositorio, se recomienda evitar el uso del comando `@dependabot squash and merge` de {% data variables.product.prodname_dependabot %}. En su lugar, puede habilitar la combinación automática para el repositorio. Esto significa que las solicitudes de incorporación de cambios se combinarán automáticamente cuando se cumplan todas las revisiones necesarias y se hayan superado las comprobaciones de estado. Para más información sobre cómo habilitar la combinación automática, vea "[Combinación automática de una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)".
{% endif %}

## Error: "no es un archivo .ql, un archivo .qls, un directorio o una especificación del paquete de consultas"

Verás este error si CodeQL no encuentra la consulta con nombre, el conjunto de consultas o el paquete de consultas en la ubicación solicitada en el flujo de trabajo. Hay dos motivos habituales por los que se puede producir este error.

- Hay un error tipográfico en el flujo de trabajo.
- Un recurso al que hace referencia el flujo de trabajo por la ruta de acceso se cambió de nombre, eliminó o movió a una nueva ubicación.

Después de comprobar la ubicación del recurso, puedes actualizar el flujo de trabajo para especificar la ubicación correcta.

## Advertencia: "git checkout HEAD^2 ya no es necesario"

Si estás utilizando un flujo de trabajo de {% data variables.product.prodname_codeql %} antiguo, podrías obtener el siguiente mensaje de advertencia en la salida "inicializar {% data variables.product.prodname_codeql %}" de la acción:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Puedes arreglar esto si eliminas las siguientes líneas del flujo de trabajo de {% data variables.product.prodname_codeql %}. Estas líneas se han incluido en la sección `steps` del trabajo `Analyze` en las versiones iniciales del flujo de trabajo de {% data variables.product.prodname_codeql %}.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

La sección revisada `steps` del flujo de trabajo tendrá el siguiente aspecto:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Para más información sobre cómo editar el archivo de flujo de trabajo de {% data variables.product.prodname_codeql %}, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".
