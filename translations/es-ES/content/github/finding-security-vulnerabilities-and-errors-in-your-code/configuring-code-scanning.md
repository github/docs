---
title: Configurar el escaneo de código
intro: 'Puedes configurar la forma en que {% data variables.product.prodname_dotcom %} escanea el código en tu proyecto para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden configurar {% data variables.product.prodname_code_scanning %} para el mismo.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Acerca de la configuración de {% data variables.product.prodname_code_scanning %}

Puedes ejecutar el {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_location %} utilizando {% data variables.product.prodname_actions %}, o desde tu sistema de integración continua (IC) utilizando el {% data variables.product.prodname_codeql_runner %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)". Para obtener más información acerca del {% data variables.product.prodname_codeql_runner %}, consulta la sección [Ejecutar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

Este artìculo es acerca de ejecutar el {% data variables.product.prodname_code_scanning %} dentro de {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.prodname_dotcom %}{% endif %}.

Antes de que puedas configurar {% data variables.product.prodname_code_scanning %} para un repositorio, debes habilitar {% data variables.product.prodname_code_scanning %} agregando un flujo de trabajo de {% data variables.product.prodname_actions %} a dicho repositorio. El flujo de trabajo predeterminado de {% data variables.product.prodname_code_scanning %} utiliza el evento `on.push` para activar el escaneo de código cada vez que alguien carga información a cualquier rama que contenga el archivo de flujo de trabajo.

{% data reusables.code-scanning.edit-workflow %}

El análisis de {% data variables.product.prodname_codeql %} es tan solo un tipo de {% data variables.product.prodname_code_scanning %} que puedes hacer en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} en  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contiene otros flujos de trabajo de {% data variables.product.prodname_code_scanning %} que puedes utilizar. {% if currentVersion == "free-pro-team@latest" %}Puedes encontrar una selección de estos en la página de "Iniciar con el {% data variables.product.prodname_code_scanning %}", a la cual puedes acceder desde la pestaña de **{% octicon "shield" aria-label="The shield symbol" %} Seguridad**.{% endif %} Los ejemplos especificos que se muestran en este artículo se relacionan con el archivo del {% data variables.product.prodname_codeql_workflow %}.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} guarda los archivos de flujo de trabajo en el directorio de _.github/workflows_ de tu repositorio. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En el ángulo superior derecho de la vista del archivo, para abrir el editor de flujo de trabajo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Después de que hayas editado el archivo, da clic en **Iniciar confirmación** y completa el formato de "Cambios de la confirmación". Puedes elegir confirmar directamente en la rama actual, o crear una rama nueva e iniciar una solicitud de extracción. ![Confirmar la actualización del flujo de trabajo de codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obtener más información acerca de cómo editar los archivos de flujo de trabajo, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### Configurar la frecuencia

Puedes escanear código con cierta programación o cuando ocurren eventos específicos en un repositorio.

Escanear el código en cada carga al repositorio, y cada vez que se crea una solicitud de extracción, previene que los desarrolladores introduzcan vulnerabilidades y errores nuevos en dicho código. Escanear el código con una programación definida te informará de las últimas vulnerabilidades y errores que {% data variables.product.company_short %}, los investigadores de seguridad, y la comunidad descubren, aún cuando los desarrolladores no estén manteniendo el repositorio activamente.

#### Escanear cuando se carga información

Si utilizas el flujo de trabajo predeterminado, el {% data variables.product.prodname_code_scanning %} escaneará el código en tu repositorio una vez por semana, adicionalmente a los escaneos activados por los eventos. Para ajustar este programa, edita el valor `cron` en el flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

#### Escanear las solicitudes de extracción

El {% data variables.product.prodname_codeql_workflow %} predeterminado utiliza el evento `pull_request` para activar un escaneo de código sobre las solilcitudes de cambios que se dirigen a la rama predeterminada. {% if currentVersion ver_gt "enterprise-server@2.21" %}El evento de `pull_request` no se activará si la solicitud de cambios se abrió desde una bifurcación privada.{% else %}Si una solicitud de cambios es de una bifurcación privada, el evento de `pull_request` solo se activará si seleccionaste la opción de "Ejecutar flujos de trabajo desde solicitudes de cambios de la bifurcación" en la configuración del repositorio. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

Para obtener más información acerca del evento `pull_request`, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

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
  pull_request:
  schedule:
    - cron: '0 15 * * 0'
```

Este flujo de trabajo escanea:
* Cada subida a la rama predeterminada y a la rama protegida
* Cada solicitud de cambios a la rama predeterminada
* La rama predeterminada a las 3 P.M. cada domingo

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

### Cambiar los lenguajes que se analizan

El {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} detecta automáticamente el código que se escribe en los lenguajes compatibles.

{% data reusables.code-scanning.supported-languages %}

El archivo predeterminado del {% data variables.product.prodname_codeql_workflow %} contiene una matriz de compilación que se llama `language`, la cual lista los lenguajes en tu repositorio que se han analizado. El {% data variables.product.prodname_codeql %} llena automáticamente esta matriz cuando agregas el {% data variables.product.prodname_code_scanning %} a un repositorio. Cuando se utiliza la matriz de `language` se optimiza a {% data variables.product.prodname_codeql %} para ejecutar cada análisis en paralelo. Te recomendamos que todos los flujos de trabajo adopten esta configuración debido a los beneficios de rendimiento que implica el paralelizar las compilaciones. Para obtener más información acerca de las matrices de compilación, consulta la sección "[Administrar flujos de trabajo complejos](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)".

{% data reusables.code-scanning.specify-language-to-analyze %}

Si tu flujo de trabajo utiliza la matriz `language`, entonces {% data variables.product.prodname_codeql %} se codifica fijamente para analizar únicamente los lenguajes en dicha matriz. Para cambiar los lenguajes que quieres analizar, edita el valor de la variable de la matriz. Puedes eliminar un lenguaje para que no se analice, o puedes agregar alguno que no estuviera presente ene l repositorio cuando se habilitó el {% data variables.product.prodname_code_scanning %}. Por ejemplo, si el repositorio inicialmente contenía solo JavaScript cuando se habilitó el {% data variables.product.prodname_code_scanning %}, y luego quieres agregar código de Python, entonces necesitarás agregar `python` a la matriz.

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

    runs-on: ubuntu-latest

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

### Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

Para agregar uno o más conjuntos de consultas, agrega una sección de `queries` a tu archivo de configuración.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
```

También puedes ejecutar conjuntos de consultas adicionales si los especificas en un archivo de configuración. Los conjuntos de consultas son colecciones de consultas que a menudo se agrupan por propósito o lenguaje.

{% data reusables.code-scanning.codeql-query-suites %}

Puedes ejecutar consultas adicionales si las especificas en un archivo de configuración. So quieres ejecutar el conjunto combinado de consultas adicionales que se especifica aquí y en el archivo de configuración, agrega como prefijo el valor `queries` en el flujo de trabajo con el símbolo `+`. Para encontrar ejemplos de archivos de configuración, consulta la sección "[Ejemplos de archivos de configuración](#example-configuration-files)".

En el siguiente ejemplo, el símbolo `+` se asegura de que las consultas adicionales especificadas se utilicen en conjunto con cualquier otra consulta que se especifique en el archivo de configuración referenciado.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Utilizar una herramienta de escaneo de código de terceros

Como alternativa para especificar qué consultas se ejecutarán en un archivo de flujo de trabajo, puedes hacer esto en un archivo de configuración diferente. También puedes utilizar un archivo de configuración para inhabilitar las consultas predeterminadas y para especificar qué directorios escanear durante el análisis.

En el archivo de flujo de trabajo, utiliza el parámetro `config-file` de la acción `init` para especificar la ruta al archivo de configuración que quieres utilizar. Este ejemplo carga el archivo de configuración _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a remote, public repository. Using a remote, public repository allows you to specify configuration options for multiple repositories in a single place. When you reference a configuration file located in a remote repository, you can use the _OWNER/REPOSITORY/FILENAME@BRANCH_ syntax. For example, _monacorp/shared/codeql-config.yml@main_.

La configuración en el archivo se escribe en formato YAML.

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
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. Por ejemplo, `foo/**`, `**/foo`, y `foo/**/bar` son todas sintaxis permitidas, pero `**foo` no lo es. Sin embargo, puedes utilizar asteriscos sencillos con otros caracteres, tal como se muestra en el ejemplo. Tendrás que poner entre comillas todo lo que contenga un caracter de `*`.

{% endnote %}

Para los lenguajes compilados, si quieres limitar el {% data variables.product.prodname_code_scanning %} para directorios específicos en tu proyecto, debes especificar los pasos de compilación adecuados en el flujo de trabajo. Los comandos que necesites utilizar para excluir un directorio de la compilación dependerán en tu sistema de compilación. Para obtener más información, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Puedes analizar rápidamente partes pequeñas de un monorepo cuando modificas el código en directorios específicos. Necesitarás tanto excluir los directorios en tus pasos de compilación como utilizar las palabras clave `paths-ignore` y `paths` para [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) en tu archivo de flujo de trabajo.

#### Ejemplos de archivos de configuración

{% data reusables.code-scanning.example-configuration-files %}

### Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener más información acerca de cómo configurar el {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} para los lenguajes compilados, consulta la sección "[Configurar el flujo de trabajo de {% data variables.product.prodname_codeql %} para los lenguajes compilados](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages)".

### Acceder a repositorios privados

Si tu flujo de trabajo para {% data variables.product.prodname_code_scanning %} accede a repositorios privados en {% data variables.product.prodname_dotcom %}, necesitarás configurar Git para autenticarte con un token de acceso personal. Define el secreto en el ambiente de ejecución utilizando `jobs.<job_id>.steps[*].env` en tu flujo de trabajo antes de cualquier acción de {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" y "[Crear y almacenar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por ejemplo, la siguiente configuración hace que Git reemplace las URL enteras de los repositorios `ghost/foo`, `ghost/bar`, y `ghost/baz` en {% data variables.product.prodname_dotcom_the_website %} con aquellas que incluyen tu token de acceso personal y que almacenaste en la variable de ambiente `ACCESS_TOKEN`.

{% raw %}
```yaml
steps:
- name: Configure access to private repositories
  env:
    TOKEN: ${{ secrets.ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/ghost/foo".insteadOf "https://github.com/ghost/foo"
    git config --global url."https://${TOKEN}@github.com/ghost/bar".insteadOf "https://github.com/ghost/bar"
    git config --global url."https://${TOKEN}@github.com/ghost/baz".insteadOf "https://github.com/ghost/baz"
```
{% endraw %}

### Puedes escribir un archivo de configuración para {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_dotcom %} puede mostrar los datos de análisis de código que se generan externamente con una herramienta de terceros. Puedes mostrar el análisis de código de una herramienta de terceros en {{ site.data.variables.product.prodname_dotcom }} su agregas la acción `upload-sarif` en tu flujo de trabajo. Para obtener más información, consulta la sección "[Cargar un archivo SARIF a GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)".
