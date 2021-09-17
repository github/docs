---
title: Configurar el escaneo de código
intro: 'Puedes configurar la forma en que {% data variables.product.prodname_dotcom %} escanea el código en tu proyecto para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Acerca de la configuración de {% data variables.product.prodname_code_scanning %}

Puedes ejecutar el {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} si utilizas las {% data variables.product.prodname_actions %} o desde tu sistema de integración continua (IC). Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" o
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
"[Acerca del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".
{%- else %}
"[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}

Este artículo se trata de ejecutar el {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} utilizando acciones.

Antes de que puedas configurar el {% data variables.product.prodname_code_scanning %} para un repositorio, debes configurar el {% data variables.product.prodname_code_scanning %} agregando un flujo de trabajo de {% data variables.product.prodname_actions %} a este. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %}

El análisis de {% data variables.product.prodname_codeql %} es tan solo un tipo de {% data variables.product.prodname_code_scanning %} que puedes hacer en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} en  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contiene otros flujos de trabajo de {% data variables.product.prodname_code_scanning %} que puedes utilizar. {% if currentVersion == "free-pro-team@latest" %}Puedes encontrar una selección de estos en la página de "Iniciar con el {% data variables.product.prodname_code_scanning %}", a la cual puedes acceder desde la pestaña de **{% octicon "shield" aria-label="The shield symbol" %} Seguridad**.{% endif %} Los ejemplos especificos que se muestran en este artículo se relacionan con el archivo del {% data variables.product.prodname_codeql_workflow %}.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} guarda los archivos de flujo de trabajo en el directorio de _.github/workflows_ de tu repositorio. Puedes encontrar un flujo de trabajo que hayas agregado si buscas su nombre de archivo. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En el ángulo superior derecho de la vista del archivo, para abrir el editor de flujo de trabajo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Después de que hayas editado el archivo, da clic en **Iniciar confirmación** y completa el formato de "Cambios de la confirmación". Puedes elegir confirmar directamente en la rama actual, o crear una rama nueva e iniciar una solicitud de extracción. ![Confirmar la actualización del flujo de trabajo de codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obtener más información acerca de cómo editar los archivos de flujo de trabajo, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### Configurar la frecuencia

Puedes escanear código con cierta programación o cuando ocurren eventos específicos en un repositorio.

Escanear el código en cada carga al repositorio, y cada vez que se crea una solicitud de extracción, previene que los desarrolladores introduzcan vulnerabilidades y errores nuevos en dicho código. Escanear el código con una programación definida te informará de las últimas vulnerabilidades y errores que {% data variables.product.company_short %}, los investigadores de seguridad, y la comunidad descubren, aún cuando los desarrolladores no estén manteniendo el repositorio activamente.

#### Escanear cuando se carga información

Si utilizas el flujo de trabajo predeterminado, el {% data variables.product.prodname_code_scanning %} escaneará el código en tu repositorio una vez por semana, adicionalmente a los escaneos activados por los eventos. Para ajustar este programa, edita el valor `cron` en el flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

Si escaneas al subir, entonces los resultados aparecen en la pestaña de **Seguridad** de tu repositorio. Para obtener más información, consulta la sección "[Administrar las alertas del escaneo de código para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota**: Si quieres que las alertas del {% data variables.product.prodname_code_scanning %} aparezcan como verificaciones de solicitudes de cambio, debes utilizar el evento `pull_request` que se describe más adelante.

{% endnote %}

#### Escanear las solicitudes de extracción

El {% data variables.product.prodname_codeql_workflow %} predeterminado utiliza el evento `pull_request` para activar un escaneo de código sobre las solilcitudes de cambios que se dirigen a la rama predeterminada. {% if currentVersion ver_gt "enterprise-server@2.21" %}El evento de `pull_request` no se activará si la solicitud de cambios se abrió desde una bifurcación privada.{% else %}Si una solicitud de cambios es de una bifurcación privada, el evento de `pull_request` solo se activará si seleccionaste la opción de "Ejecutar flujos de trabajo desde solicitudes de cambios de la bifurcación" en la configuración del repositorio. Para obtener más información, consulta la sección "[ Inhabilitar o limitar las {% data variables.product.prodname_actions %} para un repositorio](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}

Para obtener más información acerca del evento `pull_request`, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

Si escaneas las solicitudes de cambios, entonces los resultados aparecerán como alertas en una verificación de solicitud de cambios. Para obtener màs informaciònPara obtener más información, consulta la sección "[Clasificar las alertas del escaneo de código en las solicitudes de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
#### Defining the alert severities causing pull request check failure

By default, only alerts with the severity level of `error` will cause a pull request check failure, and a check will still succeed with alerts of lower severities. You can change the levels of alert severities that will cause a pull request check failure in your repository settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Under "Code scanning", to the right of "Check Failure", use the drop-down menu to select the level of severity you would like to cause a pull request check failure. ![Check failure setting](/assets/images/help/repository/code-scanning-check-failure-setting.png)
{% endif %}

#### Evitar escaneos innecesarios en las solicitudes de cambios

Puede que quieras evitar que se active un escaneo de código en solicitudes de cambio específicas que se dirijan a la rama predeterminada, independientemente de los archivos que se hayan cambiado. Puedes configurar esto si especificas `on:pull_request:paths-ignore` o `on:pull_request:paths` en el flujo de trabajo de {% data variables.product.prodname_code_scanning %}. Por ejemplo, si los únicos cambios en una solicitud de cambios se hacen en archivos con las extensiones `.md` o `.txt`, puedes utilizar el siguiente arreglo de `paths-ignore`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Notas**

* `on:pull_request:paths-ignore` y `on:pull_request:paths` configuran condiciones que determinan si una acción en el flujo de trabajo se ejecutará en una solicitud de cambios. No determinan qué archivos se analizarán cuando las acciones _se_ ejecuten. Cuando una solicitud de cambios contiene cualquier archivo que no coincida con `on:pull_request:paths-ignore` o con `on:pull_request:paths`, el flujo de trabajo ejecuta las acciones y escanea todos los archivos que cambiaron en la solicitud de cambios, incluyendo aquellos que coincidieron con `on:pull_request:paths-ignore` o con `on:pull_request:paths`, a menos de que éstos se hayan excluido. Para obtener más información sobre cómo excluir archivos del análisis, consulta la sección "[Especificar directorios para escanear](#specifying-directories-to-scan)".
* Para los archivos de flujo de trabajo del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %}, no utilices las palabras clave `paths-ignore` o `paths` con el evento `on:push`, ya que es probable que cause que falten análisis. Para obtener resultados precisos, el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} necesita poder comparar los cambios nuevos con el análisis de la confirmación previa.

{% endnote %}

Para obtener más información acerca de utilizar `on:pull_request:paths-ignore` y `on:pull_request:paths` para determinar cuando se ejecutará un flujo de trabajo para una solicitud de cambios, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

#### Escanear de forma pre-programada

El flujo de trabajo del {% data variables.product.prodname_code_scanning %} utiliza el evento `pull_request` para activar un escaneo de código en la confirmación `HEAD` de una solicitud de extracción. Para ajustar este programa, edita el valor `cron` en el flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} solo ejecuta jobs pre-programados que se encuentren en flujos de trabajo de la rama predeterminada. Cambiar la programación en un flujo de trabajo en cualquier otra rama no tendrá efecto hasta que fusiones esta rama con la predeterminada.

{% endnote %}

#### Ejemplo

El siguiente ejemplo muestra un {% data variables.product.prodname_codeql_workflow %} para un repositorio particular que tiene una rama predeterminada que se llama `main` y una protegida que se llama `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Este flujo de trabajo escanea:
* Cada subida a la rama predeterminada y a la rama protegida
* Cada solicitud de cambios a la rama predeterminada
* La rama predeterminada cada lunes a las 14:20 UTC

### Especificar un sistema operativo

Si tu código requiere un sistema operativo específico para compilar, puedes configurarlo en tu flujo de trabajo. Edita el valor de `jobs.analyze.runs-on` para especificar el sistema operativo para la máquina que ejecuta tus acciones de {% data variables.product.prodname_code_scanning %}. {% if currentVersion ver_gt "enterprise-server@2.21" %}Especificas el sistema operativo utilizando una etiqueta adecuada como el segundo elemento en un arreglo de dos elementos, después de `self-hosted`.{% else %}

Si eliges utilizar une ejecutor auto-hospedado para el escaneo de código, puedes especificar un sistema operativo si utilizas una etiqueta adecuada como el segundo elemento en un arreglo de dos elementos, después de `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% if currentVersion == "free-pro-team@latest" %}Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Agregar ejecutores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."{% endif %}

{% data variables.product.prodname_code_scanning_capc %} es compatible con las últimas versiones de macOs, Ubuntu, y Windows. Los valores habituales para esta configuración son por lo tanto: `ubuntu-latest`, `windows-latest`, y `macos-latest`. Para obtener más información, consulta las secciones {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" y "[Utilizar etiquetas con ejecutores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}".

{% if currentVersion ver_gt "enterprise-server@2.21" %}Debes asegurarte de qeu Git esté en la variable "PATH" en tus ejecutores auto-hospedados.{% else %}Si utilizas el ejecutor auto-hospedado, debes asegurarte de que git esté en la variable "PATH".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Especificar la ubicación de las bases de datos de {% data variables.product.prodname_codeql %}

En general, no necesitas preocuparte por dónde {% data variables.product.prodname_codeql_workflow %} coloca las bases de dato de {% data variables.product.prodname_codeql %}, ya que los pasos subsecuentes encontrarán automáticamente las bases de datos que crearon los pasos previos. Sin embargo, si estás escribiendo un paso de un flujo de trabajo personalizado que requiera que la base de datos de {% data variables.product.prodname_codeql %} esté en una ubicación de disco específica, por ejemplo, para cargar la base de datos como un artefacto de flujo de trabajo, puedes especificar esa ubicación utilizando el parámetro `db-location` bajo la acción `init`.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    db-location: '${{ github.workspace }}/codeql_dbs'
```
{% endraw %}

El {% data variables.product.prodname_codeql_workflow %} esperará que se pueda escribir la ruta que se proporcionó en `db-location` y que ya sea no exista o sea un directorio vacío. Cuando utilizamos este parámetro en un job que se ejecuta en un ejecutor auto-hospedado o utilizando un contenedor de Docker, es responsabilidad del usuario garantizar que el directorio elegido se limpie entre ejecuciones o que las bases de datos se eliminen una vez que ya no se necesiten. No es necesario para los jobs que se ejecutan en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, los cuales obtienen una instancia nueva y un sistema de archivos limpio cada vez que se ejecutan. Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

Si no se utiliza este parámetro, el {% data variables.product.prodname_codeql_workflow %} creará bases de datos en una ubicación temporal de su propia elección.
{% endif %}

### Cambiar los lenguajes que se analizan

El {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} detecta automáticamente el código que se escribe en los lenguajes compatibles.

{% data reusables.code-scanning.codeql-languages-bullets %}

El archivo predeterminado del {% data variables.product.prodname_codeql_workflow %} contiene una matriz de compilación que se llama `language`, la cual lista los lenguajes en tu repositorio que se han analizado. El {% data variables.product.prodname_codeql %} llena automáticamente esta matriz cuando agregas el {% data variables.product.prodname_code_scanning %} a un repositorio. Cuando se utiliza la matriz de `language` se optimiza a {% data variables.product.prodname_codeql %} para ejecutar cada análisis en paralelo. Te recomendamos que todos los flujos de trabajo adopten esta configuración debido a los beneficios de rendimiento que implica el paralelizar las compilaciones. Para obtener más información acerca de las matrices de compilación, consulta la sección "[Administrar flujos de trabajo complejos](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)".

{% data reusables.code-scanning.specify-language-to-analyze %}

Si tu flujo de trabajo utiliza la matriz `language`, entonces {% data variables.product.prodname_codeql %} se codifica fijamente para analizar únicamente los lenguajes en dicha matriz. Para cambiar los lenguajes que quieres analizar, edita el valor de la variable de la matriz. Puedes eliminar un lenguaje para que no se analice, o puedes agregar alguno que no estuviera presente en el repositorio cuando se configuró el {% data variables.product.prodname_code_scanning %}. Por ejemplo, si el repositorio inicialmente contenía solo JavaScript cuando se configuró el {% data variables.product.prodname_code_scanning %}, y luego quieres agregar código de Python, entonces necesitarás agregar `python` a la matriz.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Si tu flujo de trabajo no contiene una matriz que se llame `language`, entonces {% data variables.product.prodname_codeql %} se configurará para ejecutar un análisis secuencialmente. Si no especificas los lenguajes en los flujos de trabajo, {% data variables.product.prodname_codeql %} detectará e intentará analizar cualquier lenguaje compatible que haya en el repositorio. Si quieres elegir qué lenguajes analizar sin utilizar una matriz, puedes utilizar el parámetro `languages` en la acción de `init`.

```yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```
{% if currentVersion == "free-pro-team@latest" %}
### Analizar las dependencias de Python

Para los ejecutores hospedados en GitHub que utilicen solo Linux, el {% data variables.product.prodname_codeql_workflow %} intentarà instalar automàticamente las dependencias de Python para dar màs resultados para el anàlisis de CodeQL. Puedes controlar este comportamiento si especificas el paràmetro `setup-python-dependencies` para la acciòn que el paso "Initialize CodeQL" llama. Predeterminadamente, este paràmetro se configura como `true`:

-  Si el repositorio contiene còdigo escrito en Python, el paso "Initialize CodeQL" instala las dependencias necesarias en el ejecutor hospedado en GitHub. Si la instalaciòn automàtica es exitosa, la acciòn tambièn configura la variable de ambiente `CODEQL_PYTHON` en el archivo ejecutable de Python que incluye las dependencias.

- Si el repositorio no tiene ninguna dependencia de Python o si las dependencias se especifican en una forma inesperada, obtendràs una advertencia y la acciòn seguirà con los jobs restantes. La acciòn puede ejecutarse exitosamente aùn cuando existan problemas para interpretar las dependencias, pero los resultados podrìan estar incompletos.

Como alternativa, puedes instalar las dependencias de Python manualmente en cualquier sistema operativo. Necesitaràs agregar a `setup-python-dependencies` y configurarlo como `false`, asì como configurar `CODEQL_PYTHON` para el ejecutable de Python que incluye las dependencias, tal como se muestra en este extracto de flujo de trabajo:

```yaml
jobs:
  CodeQL-Build:

    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v1
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Configurar una cateogría para el análisis

Utiliza `category` para distinguir entre análisis múltiples de la misma herramienta y confirmación, pero que se lleven a cabo en lenguajes o partes diferentes del código. La categoría que especificas en tu flujo de trabajo se incluirá en el archivo de resultados de SARIF.

Este parámetro es particularmente útil si trabajas en monorepositorios y tienes vrios archivos SARIF para diferentes componentes de este.

{% raw %}
``` yaml
   - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze
      with:
      # Optional. Specify a category to distinguish between multiple analyses
      # for the same tool and ref. If you don't use `category` in your workflow, 
      # GitHub will generate a default category name for you
       category: "my_category"
```
{% endraw %}

Si no especificas un parámetro de `category` en tu flujo de trabajo, {% data variables.product.prodname_dotcom %} generará un nombre de categoría para ti con base en el nombre del archivo de flujo de trabajo que activó la acción, el nombre de la acción y cualquier variable de la matriz. Por ejemplo:
- El flujo de trabajo `.github/workflows/codeql-analysis.yml` y la acción `analyze` producirán la categoría `.github/workflows/codeql.yml:analyze`.
- Las variables Del flujo de trabajo de `.github/workflows/codeql-analysis.yml`, la acción `analyze`, y la matriz de `{language: javascript, os: linux}` producirán la categoría `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

El valor `category` se mostrará como la propiedad `<run>.automationDetails.id` en SARIF v2.1.0. Para obtener más información, consulta la sección "[Soporte de SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)".

La categoría que especificaste no sobrescribirá los detalles del objeto `runAutomationDetails` en el archivo SARIF, si es que se incluye.

{% endif %}

### Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

Para agregar uno o más conjuntos de consultas, agrega una sección de `queries` a tu archivo de configuración. Si las consultas están en un repositorio privado, utiliza el parámetro `external-repository-token` para especificar un token que tenga acceso a este.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access private repositories.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

También puedes ejecutar conjuntos de consultas adicionales si los especificas en un archivo de configuración. Los conjuntos de consultas son colecciones de consultas que a menudo se agrupan por propósito o lenguaje.

{% data reusables.code-scanning.codeql-query-suites %}

Puedes ejecutar consultas adicionales si las especificas en un archivo de configuración. So quieres ejecutar el conjunto combinado de consultas adicionales que se especifica aquí y en el archivo de configuración, agrega como prefijo el valor `queries` en el flujo de trabajo con el símbolo `+`. Para encontrar ejemplos de archivos de configuración, consulta la sección "[Ejemplos de archivos de configuración](#example-configuration-files)".

En el siguiente ejemplo, el símbolo `+` se asegura de que las consultas adicionales especificadas se utilicen en conjunto con cualquier otra consulta que se especifique en el archivo de configuración referenciado.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

### Utilizar una herramienta de escaneo de código de terceros

Como alternativa para especificar qué consultas se ejecutarán en un archivo de flujo de trabajo, puedes hacer esto en un archivo de configuración diferente. También puedes utilizar un archivo de configuración para inhabilitar las consultas predeterminadas y para especificar qué directorios escanear durante el análisis.

En el archivo de flujo de trabajo, utiliza el parámetro `config-file` de la acción `init` para especificar la ruta al archivo de configuración que quieres utilizar. Este ejemplo carga el archivo de configuración _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

El archivo de configuración se ubica en un repositorio privado externo, utiliza el parámetro `external-repository-token` de la acción `init` para especificar un token que tenga acceso al repositorio privado.

{% raw %}
```yaml
uses: github/codeql-action/init@v1
with:
  external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

Los ajustes en el archivo de configuración se escriben en formato YAML.

#### Especificar consultas adicionales

Puedes especificar consultas adicionales en una matriz de `queries`. Cada elemento de la matriz contiene un parámetro de `uses` con un valor que identifica un archivo de consulta simple, un directorio que contiene los archivos de consulta, o un archivo de suite de definiciones de una consulta.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

Opcionalmente, puedes otorgar un nombre a cada elemento de la matriz, como se muestra en los siguientes ejemplos de archivos de configuración.

Para obtener más información acerca de las consultas adicionales, puedes ver la siguiente sección "[Ejecutar consultas adicionales](#running-additional-queries)".

#### Inhabilitar las consultas predeterminadas

Si solo quieres ejecutar consultas personalizadas, puedes inhabilitar las consultas de seguridad predeterminadas si agregas `disable-default-queries: true` a tu archivo de configuración.

#### Especificar directorios para escanear

Para los lenguajes interpretados compatibles con {% data variables.product.prodname_codeql %} (Python y JavaScript/TypeScript), puedes restringir el {% data variables.product.prodname_code_scanning %} para los archivos que estén en directorios específicos si agregas una matriz de `paths` al archivo de configuración. Puedes excluir del análisis los archivos en los directorios específicos si agregas un arreglo de `paths-ignore`.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Nota**:

* Las palabras clave `paths` y `paths-ignore` que se utilizan en el contexto del archivo de configuración del {% data variables.product.prodname_code_scanning %} no deben confundirse con las mismas palabras clave cuando se utilizan para `on.<push|pull_request>.paths` en un flujo de trabajo. Cuando se tulizan para modificar `on.<push|pull_request>` en un flujo de trabajo, éstas determinan si las acciones se ejecutarán cuando alguien modifique el código en los directorios especificados. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".
* Los caracteres de patrón de filtro como `?`, `+`, `[`, `]`, y `!` no son compatibles y se empatarán literalmente.
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. Por ejemplo, `foo/**`, `**/foo`, y `foo/**/bar` son todas sintaxis permitidas, pero `**foo` no lo es. Sin embargo, puedes utilizar asteriscos sencillos con otros caracteres, tal como se muestra en el ejemplo. Tendrás que poner entre comillas todo lo que contenga un caracter de `*`.

{% endnote %}

Para los lenguajes compilados, si quieres limitar el {% data variables.product.prodname_code_scanning %} para directorios específicos en tu proyecto, debes especificar los pasos de compilación adecuados en el flujo de trabajo. Los comandos que necesites utilizar para excluir un directorio de la compilación dependerán en tu sistema de compilación. Para obtener más información, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Puedes analizar rápidamente partes pequeñas de un monorepo cuando modificas el código en directorios específicos. Necesitarás tanto excluir los directorios en tus pasos de compilación como utilizar las palabras clave `paths-ignore` y `paths` para [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) en tu archivo de flujo de trabajo.

#### Ejemplos de archivos de configuración

{% data reusables.code-scanning.example-configuration-files %}

### Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener más información sobre cómo configurar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} para los lenguajes compilados, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)".

### Puedes escribir un archivo de configuración para {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_dotcom %} puede mostrar los datos de análisis de código que se generan externamente con una herramienta de terceros. Puedes mostrar el análisis de código de una herramienta de terceros en {{ site.data.variables.product.prodname_dotcom }} su agregas la acción `upload-sarif` en tu flujo de trabajo. Para obtener más información, consulta la sección "[Cargar un archivo SARIF a GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
