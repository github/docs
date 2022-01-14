---
title: Solucionar problemas en el flujo de trabajo de CodeQL
shortTitle: Solucionar problemas del flujo de trabajo de CodeQL
intro: 'Si tienes problemas con el {% data variables.product.prodname_code_scanning %}, puedes solucionarlos si utilizas estos tips para resolver estos asuntos.'
product: '{% data reusables.gated-features.code-scanning %}'
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
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

## Producir bitácoras detalladas para la depuración

Para producir una salida más detallada de bitácoras, puedes habilitar el registro de depuración de pasos. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

## Crear artefactos de depuración de {% data variables.product.prodname_codeql %}

Puedes obtener artefactos para que te ayuden a depurar {% data variables.product.prodname_codeql %} si seleccionas un marcador de configuración de depuración. Modifica el paso de `init` de tu archivo de flujo de trabajo de {% data variables.product.prodname_codeql %} y configura `debug: true`.

```
- name: Initialize CodeQL
  uses: github/codeql-action/init@v1
  with:
    debug: true
```
Los artefactos de depuración se cargarán a la ejecución de flujo de trabajo como un artefacto de nombre `debug-artifacts`. Los datos contienen las bitácoras de {% data variables.product.prodname_codeql %}. la(s) base(s) de datos de {% data variables.product.prodname_codeql %} y cualquier archivo SARIF que produzca el flujo de trabajo.

Estos artefactos te ayudarán a depurar los problemas con el escaneo de código de {% data variables.product.prodname_codeql %}. Si contactas al soporte de GitHub, podrían pedirte estos datos.

{% endif %}

## Compilación automática para los fallos de un lenguaje compilado

Si una compilación automática de código para un lenguaje compilado dentro de tu proyecto falla, intenta los siguientes pasos de solución de problemas.

- Elimina el paso de `autobuild` de tu flujo de trabajo de {% data variables.product.prodname_code_scanning %} y agrega los pasos de compilación específicos. Para obtener información sobre cómo editar el flujo de trabajo, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)". Para obtener más información sobre cómo reemplazar el paso de `autobuild`, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

- Si tu flujo de trabajo no especifica explícitamente los lenguajes a analizar, {% data variables.product.prodname_codeql %} detectará implícitamente los lenguajes compatibles en tu código base. En esta configuración, fuera de los lenguajes compilados C/C++, C#, y Java, {% data variables.product.prodname_codeql %} solo analizará el lenguaje presente en la mayoría de los archivos de origen. Edita el flujo de trabajo y agrega una matriz de compilación que especifique los lenguajes que quieres analizar. El flujo de análisis predeterminado de CodeQL utiliza dicha matriz.

  Los siguientes extractos de un flujo de trabajo te muestran cómo puedes utilizar una matriz dentro de la estrategia del job para especificar lenguajes, y luego hace referencia a cada uno de ellos con el paso de "Inicializar {% data variables.product.prodname_codeql %}":

  ```yaml
  jobs:
    analyze:{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: github/codeql-action/init@v1
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Para obtener más información acerca de editar el flujo de trabajo, consulta la sección "[Configurar el escaneo de código](/code-security/secure-coding/configuring-code-scanning)".

## No se encontró código durante la compilación

Si tu flujo de trabajo falla con un error de `No source code was seen during the build` o de `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, esto indica que {% data variables.product.prodname_codeql %} no pudo monitorear tu código. Hay muchas razones que podrían explicar esta falla:

1. La detección automática del lenguaje identificó un lenguaje compatible, pero no hay código analizable en dicho lenguaje dentro del repositorio. Un ejemplo típico es cuando nuestro servicio de detección de lenguaje encuentra un archivo que se asocia con un lenguaje de programación específico como un archivo `.h`, o `.gyp`, pero no existe el código ejecutable correspondiente a dicho lenguaje en el repositorio. Para resolver el problema, puedes definir manualmente los lenguajes que quieras analizar si actualizas la lista de éstos en la matriz de `language`. Por ejemplo, la siguiente configuración analizará únicamente a Go y a Javascript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Para obtener más información, consulta el extracto de flujo de trabajo en la sección "[Compilación automática para los fallos de un lenguaje compilado](#automatic-build-for-a-compiled-language-fails)" que se trata anteriormente.
1. Tu flujo de trabajo de {% data variables.product.prodname_code_scanning %} está analizando un lenguaje compilado (C, C++, C#, o Java), pero el código no se compiló. Predeterminadamente, el flujo de trabajo de análisis de {% data variables.product.prodname_codeql %} contiene un paso de `autobuild`, sin embargo, este paso representa un proceso de mejor esfuerzo y podría no tener éxito en compilar tu código, dependiendo de tu ambiente de compilación específico. También podría fallar la compilación si eliminaste el paso de `autobuild` y no incluiste manualmente los pasos de compilación.  Para obtener más información acerca de especificar los pasos de compilación, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
1. Tu flujo de trabajo está analizando un lenguaje compilado (C, C++, C#, or Java), pero algunas porciones de tu compilación se almacenan en caché para mejorar el rendimiento (esto muy probablemente ocurra con los sistemas de compilación como Gradle o Bazel). Ya que {% data variables.product.prodname_codeql %} observa la actividad del compilador para entender los flujos de datos en un repositorio, {% data variables.product.prodname_codeql %} requiere que suceda una compilación completa para poder llevar a cabo este análisis.
1. Tu flujo de trabajo está analizando un lenguaje compilado (C, C++, C#, or Java), pero no ocurre ninguna compilación entre los pasos de `init` y `analyze` en el flujo de trabajo. {% data variables.product.prodname_codeql %} requiere que tu compilación tome lugar entre estos dos pasos para poder observar la actividad del compilador y llevar a cabo el análisis.
1. Tu código compilado (en C, C++, C#, or Java) se compiló con éxito, pero {% data variables.product.prodname_codeql %} no pudo detectar las invocaciones del compilador. Las causas más comunes son:

   * Ejecutar tu proceso de compilación en un contenedor separado a {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Ejecutar el escaneo de código de CodeQL en un contenedor](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
   * Compilar utilizando un sistema de compilación distribuida externo a GitHub Actions, utilizando un proceso de daemon.
   * {% data variables.product.prodname_codeql %} no está consciente del compilador específico que estás utilizando.

  En el caso de los proyectos de .NET Framework y C# que utilicen ya sea `dotnet build` o `msbuild`, deberás especificar `/p:UseSharedCompilation=false` en el paso de `run` de tu flujo de trabajo cuando compiles tu código.

  Por ejemplo, la siguiente configuración para C# pasará el marcador durante el primer paso de compilación.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Si encuentras otro problema con tu compilador específico o con tu configuración, contacta a {% data variables.contact.contact_support %}.

Para obtener más información acerca de especificar los pasos de compilación, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
## Las líneas de código escaneado son menores de lo esperado

Para los lenguajes compilados como C/C++, C#, Go y Java, {% data variables.product.prodname_codeql %} solo escanea los archivos que se compilen durante el análisis. Por lo tanto, la cantidad de líneas de código escaneado será menor de lo esperado si parte del código fuente no se compila correctamente. Esto puede suceder por varias razones:

1. La característica de `autobuild` del {% data variables.product.prodname_codeql %} utiliza la heurística para compilar el código de un repositorio. Sin embargo, algunas veces, este enfoque da como resultado un análisis incompleto del repositorio. Por ejemplo, cuando existen comandos múltiples de `build.sh` en un solo repositorio, el análisis podría no completarse, ya que el paso de `autobuild` solo se ejecutará en uno de los comandos y, por lo tanto, algunos archivos origen no se compilarán.
1. Algunos compiladores no funcionan con {% data variables.product.prodname_codeql %} y pueden causar problemas cuando analizan el código. Por ejemplo, Project Lombok utiliza unas API de compilación no públicas para modificar el comportamiento del compilador. Las asunciones que se utilizan en las modificaciones de este compilador no son válidas para el extractor de Java de {% data variables.product.prodname_codeql %}, así que el código no se puede analizar.

Si tu análisis de {% data variables.product.prodname_codeql %} escanea menos líneas de código de lo esperado, hay varios enfoques que puedes intentar para asegurarte de que todos los archivos de código fuente necesarios se compilen.

### Reemplaza el paso `autobuild`

Reemplaza el paso `autobuild` con los mismos comandos de compilación que utilizarías en producción. Esto garantiza que {% data variables.product.prodname_codeql %} sepa exactamente cómo compilar todos los archivos de código fuente que quieras escanear. Para obtener más información, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### Inspecciona la copia de los archivos de código fuente en la base de datos de {% data variables.product.prodname_codeql %}
Podrías entender por qué algunos archivos de código fuente no se ha analizado si inspeccionas la copia del código fuente que se incluye utilizando la base de datos de {% data variables.product.prodname_codeql %}. Para obtener la base de datos del flujo de trabajo de tus acciones, agrega una acción de `upload-artifact` después del paso de análisis en tu flujo de trabajo de escaneo de código:
```
- uses: actions/upload-artifact@v2
  with:
    name: codeql-database
    path: ../codeql-database
```
Esto carga la base de datos como un artefacto de acciones que puedes descargar en tu máquina local. Para obtener más información, consulta la sección "[Almacenar artefactos de los flujos de trabajo ](/actions/guides/storing-workflow-data-as-artifacts)".

El artefacto contendrá una copia archivada de los archivos de código fuente que escaneó el {% data variables.product.prodname_codeql %} llamada _src.zip_. Si comparas los archivos de código fuente en el repositorio con los archivos en _src.zip_, puedes ver qué tipos de archivo faltan. Una vez que sepas qué tipos de archivo son los que no se analizan es más fácil entender cómo podrías cambiar el flujo de trabajo para el análisis de {% data variables.product.prodname_codeql %}.

## Extracción de errores en la base de datos

El equipo de {% data variables.product.prodname_codeql %} trabaja constantemente en los errores de extracción críticos para asegurarse de que todos los archivos de código fuente pueden escanearse. Sin embargo, los extractores de {% data variables.product.prodname_codeql %} sí generan errores durante la creación de bases de datos ocasionalmente. {% data variables.product.prodname_codeql %} proporciona información acerca de los errores de extracción y las advertencias que se generan durante la creación de bases de datos en un archivo de bitácora. La información de diagnóstico de extracción proporciona una indicación de la salud general de la base de datos. La mayoría de los errores del extractor no impactan el análisis significativamente. Una pequeña parte de los errores del extractor es saludable y, a menudo, indica un buen estado del análisis.

Sin embargo, si ves errores del extractor en la vasta mayoría de archivos que se compilan durante la creación de la base de datos, deberías revisarlos a detalle para intentar entender por qué algunos archivos de código fuente no se extrajeron adecuadamente.

{% else %}
## Algunas porciones de mi repositorio no se analizaron con `autobuild`

La característica de `autobuild` de {% data variables.product.prodname_codeql %} utiliza la heurística para compilar el código en un repositorio, sin embargo, algunas veces este acercamiento da como resultado un análisis incompleto de un repositorio. Por ejemplo, cuando existen comandos múltiples de `build.sh` en un solo repositorio, el análisis podría no completarse, ya que el paso de `autobuild` solo se ejecutará en uno de los comandos. La solución es reemplazar el paso de `autobuild` con los pasos de compilación que compilarán todo el código fuente que quieras analizar. Para obtener más información, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
{% endif %}


## La compilación tarda demasiado

Si tu compilación con análisis de {% data variables.product.prodname_codeql %} toma demasiado para ejecutarse, hay varios acercamientos que puedes intentar para reducir el tiempo de compilación.

### Incrementar la memoria o los núcleos

Si utilizas ejecutores auto-hospedados para ejecutar el análisis de {% data variables.product.prodname_codeql %}, puedes incrementar la memoria o la cantidad de núcleos en estos ejecutores.

### Utilizar matrices de compilación para paralelizar el análisis

El {% data variables.product.prodname_codeql_workflow %} predeterminado utiliza una matriz de lenguajes, la cual causa que el análisis de cada uno de ellos se ejecute en paralelo. Si especificaste los lenguajes que quieres analizar directamente en el paso de "Inicializar CodeQL", el análisis de cada lenguaje ocurrirá de forma secuencial. Para agilizar el análisis de lenguajes múltiples, modifica tu flujo de trabajo para utilizar una matriz. Para obtener más información, consulta el extracto de flujo de trabajo en la sección "[Compilación automática para los fallos de un lenguaje compilado](#automatic-build-for-a-compiled-language-fails)" que se trata anteriormente.

### Reducir la cantidad de código que se está analizando en un solo flujo de trabajo

El tiempo de análisis es habitualmente proporcional a la cantidad de código que se esté analizando. Puedes reducir el tiempo de análisis si reduces la cantidad de código que se analice en cada vez, por ejemplo, si excluyes el código de prueba o si divides el análisis en varios flujos de trabajo que analizan únicamente un subconjunto de tu código a la vez.

Para los lenguajes compilados como Java, C, C++ y C#, {% data variables.product.prodname_codeql %} analiza todo el código que se haya compilado durante la ejecución del flujo de trabajo. Para limitar la cantidad de código que se está analizando, compila únicamente el código que quieres analizar especificando tus propios pasos de compilación en un bloque de `run`. Puedes combinar el especificar tus propios pasos de compilación con el uso de filtros de `paths` o `paths-ignore` en los eventos de `pull_request` y de `push` para garantizar que tu flujo de trabajo solo se ejecute cuando se cambia el código específico. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

For languages like Go, JavaScript, Python, and TypeScript, that {% data variables.product.prodname_codeql %} analyzes without compiling the source code, you can specify additional configuration options to limit the amount of code to analyze. Para obtener más información, consulta la sección "[Especificar los directorios a escanear](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".

Si divides tu análisis en varios flujos de trabajo como se describió anteriormente, aún te recomendamos que por lo menos tengas un flujo de trabajo que se ejecute con un `schedule` que analice todo el código en tu repositorio. Ya que {% data variables.product.prodname_codeql %} analiza los flujos de datos entre componentes, algunos comportamientos de seguridad complejos podrían detectarse únicamente en una compilación completa.

### Ejecutar únicamente durante un evento de `schedule`

Si tu análisis aún es muy lento como para ejecutarse durante eventos de `push` o de `pull_request`, entonces tal vez quieras activar el análisis únicamente en el evento de `schedule`. Para obtener más información, consulta la sección "[Eventos](/actions/learn-github-actions/introduction-to-github-actions#events)".

{% ifversion fpt or ghec %}
## Los resultados difieren de acuerdo con la plataforma de análisis

Si estás analizando código escrito en Python, podrías ver resultados diferentes dependiendo de si ejecutas el {% data variables.product.prodname_codeql_workflow %} en Linux, macOS o Windows.

En los ejecutores hospedados en GitHub que utilizan Linux, el {% data variables.product.prodname_codeql_workflow %} intenta instalar y analizar las dependencias de Python, lo cual podría llevar a más resultados. Para inhabilitar la auto instalación, agrega `setup-python-dependencies: false` al paso de "Initialize CodeQL" en el flujo de trabajo. Para obtener más información acerca de la configuración del análisis para las dependencias de Python, consulta la sección "[Analizar las dependencias de Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)".

{% endif %}

## Error: "Error de servidor"

Si la ejecución de un flujo de trabajo para {% data variables.product.prodname_code_scanning %} falla debido a un error de servidor, trata de ejecutar el flujo de trabajo nuevamente. Si el problema persiste, contaca a {% data variables.contact.contact_support %}.

## Error: "Out of disk" o "Out of memory"

En proyectos muy grandes, el {% data variables.product.prodname_codeql %} podría quedarse sin memoria o sin espacio de almacenamiento en el ejecutor.
{% ifversion fpt or ghec %}Si te encuentras con este problema en un ejecutor de {% data variables.product.prodname_actions %}, contacta a {% data variables.contact.contact_support %} para que podamos investigar el problema.
{% else %}Si llegas a tener este problema, intenta incrementar la memoria en el ejecutor.{% endif %}

{% ifversion fpt or ghec %}
## Error:403 "No se puede acceder al recurso por integración" al utilizar {% data variables.product.prodname_dependabot %}

El {% data variables.product.prodname_dependabot %} se considera no confiable cuando activa una ejecución de flujo de trabajo y este se ejecutará con un alcance de solo lectura. El cargar resultados del {% data variables.product.prodname_code_scanning %} en una rama a menudo requiere del alcance `security_events: write`. Sin embargo, el {% data variables.product.prodname_code_scanning %} siempre permite que se carguen los resultados cuando el evento `pull_request` activa la ejecución de la acción. Es por esto que, para las ramas del {% data variables.product.prodname_dependabot %}, te recomendamos utilizar el evento `pull_request` en vez del evento `push`.

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

### El análisis aún falla en la rama predeterminada

Si el {% data variables.product.prodname_codeql_workflow %} aún falla en una confirmación que se hizo en una rama predeterminada, debes verificar:
- si el {% data variables.product.prodname_dependabot %} fue el autor de la confirmación
- si la solicitud de cambios que incluye la confirmación se fusionó utilizando `@dependabot squash and merge`

Este tipo de confirmación por fusión tiene como autor al {% data variables.product.prodname_dependabot %} y, por lo tanto, cualquier flujo de trabajo que se ejecute en la confirmación tendrá permisos de solo lectura. Si habilitaste las actualizaciones de seguridad o de versión del {% data variables.product.prodname_code_scanning %} y del {% data variables.product.prodname_dependabot %} en tu repositorio, te recomendamos que evites utilizar el comando `@dependabot squash and merge` del {% data variables.product.prodname_dependabot %}. En su lugar, puedes habilitar la fusión automática en tu repositorio. Esto significa que las solicitudes de cambio se fusionarán automáticamente cuando se cumplan todas las revisiones requeridas y cuando pasen todas las verificaciones de estado. Para obtener más información sobre cómo habilitar la fusión automática, consulta la sección "[Fusionar una solicitud de cambios automáticamente](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)".
{% endif %}

## Warning: "git checkout HEAD^2 is no longer necessary"

Si estás utilizando un flujo de trabajo de {% data variables.product.prodname_codeql %} antiguo, podrías obtener el siguiente mensaje de advertencia en la salida "inicializar {% data variables.product.prodname_codeql %}" de la acción:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Puedes arreglar esto si eliminas las siguientes líneas del flujo de trabajo de {% data variables.product.prodname_codeql %}. Estas líneas se incluyeron en la sección de `steps` del job `Analyze` en las versiones iniciales del flujo de trabajo de {% data variables.product.prodname_codeql %}.

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

La sección revisada de `steps` en el flujo de trabajo se deberá ver así:

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

Para obtener más información sobre la edición del archivo de flujo de trabajo de {% data variables.product.prodname_codeql %}, consulta la sección "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".
