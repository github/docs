---
title: Configurar el CLI de CodeQL en tu sistema de IC
shortTitle: Configure CodeQL CLI
intro: 'Puedes configurar tu sistema de integración continua para que ejecute el {% data variables.product.prodname_codeql_cli %}, realice un análisis de {% data variables.product.prodname_codeql %} y cargue los resultados en {% data variables.product.product_name %} para mostrarlos como alertas del {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182302'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** Este artículo describe las características presentes en la versión del {% data variables.product.prodname_codeql_cli %} que están disponibles en el momento del lanzamiento de {% data variables.product.product_name %}. Si la empresa usa una versión más reciente de {% data variables.product.prodname_codeql_cli %}, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

{% endnote %} {% endif %}

## Acerca de generar los resultados del escaneo de código con el {% data variables.product.prodname_codeql_cli %}

Una vez que hayas puesto el {% data variables.product.prodname_codeql_cli %} disponible en los servidores de tu sistema de IC y de que te hayas asegurado que se pueden autenticar con {% data variables.product.product_name %}, estarás listo para generar datos.

Utilizarás tres comandos diferentes para generar los resultados y cargarlos a {% data variables.product.product_name %}:

<!--Option to analyze multiple languages with one call-->
1. `database create` para crear una base de datos de {% data variables.product.prodname_codeql %} que represente la estructura jerárquica de cada lenguaje de programación admitido en el repositorio.
2. ` database analyze` para ejecutar consultas para analizar cada base de datos de {% data variables.product.prodname_codeql %} y resumir los resultados en un archivo SARIF.
3. `github upload-results` para cargar los archivos SARIF resultantes a {% data variables.product.product_name %}, donde los resultados se comparan con una rama o solicitud de incorporación de cambios y se muestran como alertas del {% data variables.product.prodname_code_scanning %}.

Puede mostrar la ayuda de la línea de comandos para cualquier comando mediante <nobr>`--help`</nobr>.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Crear bases de datos de {% data variables.product.prodname_codeql %} para analizar

1. Extraiga del repositorio el código que quiera analizar: 
    - En el caso de una rama, extraiga del repositorio el inicio de la rama que quiera analizar.
    - Para una solicitud de incorporación de cambios, compruebe la confirmación del encabezado de la solicitud o una confirmación de combinación generada por {% data variables.product.prodname_dotcom %} de esa solicitud.
2. Configure el entorno para el código base y asegúrese de que las dependencias estén disponibles. Para obtener más información, consulte [Creación de bases de datos para lenguajes no compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) y [Creación de bases de datos para lenguajes compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) en la documentación del {% data variables.product.prodname_codeql_cli %}.
3. Busque el comando de compilación, si lo hay, para el código base. Normalmente está disponible en un archivo de configuración en el sistema de CI.
4. Ejecute `codeql database create` desde la raíz de extracción del repositorio y compile el código base.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Nota:** Si utiliza una compilación con contenedores, deberá ejecutar el {% data variables.product.prodname_codeql_cli %} dentro del contenedor donde tiene lugar la tarea de compilación.

  {% endnote %}

| Opción | Obligatorio | Uso |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Especifica el nombre y ubicación de un directorio a crear para la base de datos de {% data variables.product.prodname_codeql %}. Se producirá un error en el comando si intenta sobrescribir un directorio existente. Si también especifica `--db-cluster`, este es el directorio primario y se crea un subdirectorio para cada lenguaje analizado.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique el identificador para el lenguaje para el que se va a crear una base de datos, uno de los siguientes: `{% data reusables.code-scanning.codeql-languages-keywords %}` (use `javascript` para analizar código de TypeScript {% ifversion codeql-kotlin-beta %} y `java` para analizar código de Kotlin{% endif %}). Cuando se usa con <nobr>`--db-cluster`</nobr>, la opción acepta una lista separada por comas o se puede especificar más de una vez.
| <nobr>`--command`</nobr> | | Se recomienda su uso. Se usa para especificar el comando de compilación o el script que invoca el proceso de compilación para el código base. Los comandos se ejecutan desde la carpeta actual, o donde se define, desde <nobr>`--source-root`</nobr>. No es necesario para el análisis de Python y JavaScript o TypeScript. |
| <nobr>`--db-cluster`</nobr> | | Opcional. Se usa en códigos base de varios lenguajes para generar una base de datos para cada lenguaje especificado por <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Se recomienda su uso. Utilízalo para suprimir el comando de compilación para los lenguajes en donde el {% data variables.product.prodname_codeql_cli %} no necesite monitorear la compilación (por ejemplo, Python y JavaScript/TypeScript).
| <nobr>`--source-root`</nobr> | | Opcional. Se usa si ejecuta la CLI fuera de la raíz de extracción del repositorio. De manera predeterminada, el comando `database create` supone que el directorio actual es el directorio raíz de los archivos de origen. Use esta opción para especificar otra ubicación. |
| <nobr>`--codescanning-config`</nobr> | | (Opcional (Avanzado). Úsalo si tienes un archivo de configuración que especifica cómo crear las bases de datos {% data variables.product.prodname_codeql %} y qué consultas ejecutar en pasos posteriores. Para obtener más información, consulta "[Uso de un archivo de configuración personalizado](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)" y "[creación de base de datos](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config)." |

Para obtener más información, consulte [Crear bases de datos de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) en la documentación de la {% data variables.product.prodname_codeql_cli %}.

### Ejemplo de un solo lenguaje

En este ejemplo se crea una base de datos de {% data variables.product.prodname_codeql %} para el repositorio extraído en `/checkouts/example-repo`. Usa el extractor de JavaScript para crear una representación jerárquica del código JavaScript y TypeScript en el repositorio. La base de datos resultante se almacena en `/codeql-dbs/example-repo`.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### Ejemplo de lenguaje múltiple

En este ejemplo se crean dos base de datos de {% data variables.product.prodname_codeql %} para el repositorio extraído en `/checkouts/example-repo-multi`. Usa:

- `--db-cluster` para solicitar el análisis de más de un lenguaje.
- `--language` para especificar los lenguajes para los que se crearán las bases de datos.
- `--command` para indicarle a la herramienta el comando de compilación para el código base, en este caso `make`.
- `--no-run-unnecessary-builds` para indicarle a la herramienta que omita el comando de compilación para los lenguajes en los que no es necesario (como Python).

Las bases de datos resultantes se almacenan en los subdirectorios `python` y `cpp` de `/codeql-dbs/example-repo-multi`.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## Analizar una base de datos de {% data variables.product.prodname_codeql %}

1. Crea una base de datos de {% data variables.product.prodname_codeql %} (se explica anteriormente).
2. Ejecuta `codeql database analyze` en la base de datos y especifica qué {% ifversion codeql-packs %}paquetes o {% endif %}consultas se van a utilizar.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Nota:** Si analiza más de una base de datos de {% data variables.product.prodname_codeql %} para una sola confirmación, debe especificar una categoría SARIF para cada conjunto de resultados generados por este comando. Cuando cargas los resultados en {% data variables.product.product_name %}, el {% data variables.product.prodname_code_scanning %} utiliza esta categoría para almacenar los resultados para cada lenguaje por separado. Si olvida hacerlo, cada carga sobrescribe los resultados anteriores.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Opción | Obligatorio | Uso |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Especifica la ruta del directorio que contiene la base de datos de {% data variables.product.prodname_codeql %} a analizar. |
| `<packs,queries>` | | Especifica los paquetes o consultas de {% data variables.product.prodname_codeql %} a ejecutar. Para ejecutar las consultas estándar que se utilizan para el {% data variables.product.prodname_code_scanning %}, omite este parámetro. Para ver los demás conjuntos de consultas incluidos en el conjunto de la {% data variables.product.prodname_codeql_cli %}, busque en `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. Para obtener información sobre cómo crear un conjunto de consultas propio, consulte [Creación de conjuntos de consultas de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) en la documentación de la {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique el formato del archivo de resultados generado por el comando. Para cargarlo en {% data variables.product.company_short %}, debe ser: {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. Para obtener más información, consulte "[Compatibilidad con SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)".
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique dónde guardar el archivo de resultados de SARIF.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Opcional para el análisis de base de datos única. Necesario para definir el lenguaje al analizar varias bases de datos para una sola confirmación en un repositorio. Especifique una categoría que se incluirá en el archivo de resultados de SARIF para este análisis. Una categoría se usa para distinguir varios análisis de la misma herramienta y confirmación, pero se ejecuta en distintos lenguajes o partes del código.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Opcional. Se usa si se quiere incluir cualquier ayuda de consulta representada por Markdown disponible para las consultas personalizadas que se usan en el análisis. Cualquier ayuda de consulta para consultas personalizadas incluidas en la salida de SARIF se mostrará en la interfaz de usuario de examen de código si la consulta correspondiente genera una alerta. Para más información, consulta [Análisis de bases de datos de la {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) en la documentación de la {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | Opcional. Úsalo si quieres incluir paquetes de consulta de CodeQL en el análisis. Para obtener más información, consulta "[Descarga y uso de paquetes de {% data variables.product.prodname_codeql %}](#downloading-and-using-codeql-query-packs)".
| <nobr>`--download`</nobr> | | Opcional. Úsalo si algunos de los paquetes de consulta de CodeQL aún no están en el disco y deben descargarse antes de ejecutar consultas. {% endif %}
| <nobr>`--threads`</nobr> | | Opcional. Se usa si se quiere usar más de un subproceso para ejecutar consultas. El valor predeterminado es `1`. Puede especificar más subprocesos para acelerar la ejecución de consultas. Para establecer el número de subprocesos en el número de procesadores lógicos, especifique `0`.
| <nobr>`--verbose`</nobr> | | Opcional. Se usa para obtener información más detallada sobre el proceso de análisis y datos de diagnóstico del proceso de creación de la base de datos.

Para obtener más información, consulte [Análisis de bases de datos de la {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) en la documentación de la {% data variables.product.prodname_codeql_cli %}.

### Ejemplo básico

En este ejemplo se analiza una base de datos de {% data variables.product.prodname_codeql %} almacenada en `/codeql-dbs/example-repo` y se guardan los resultados como un archivo SARIF: `/temp/example-repo-js.sarif`. Usa `--sarif-category` para incluir información adicional en el archivo SARIF que identifica los resultados como JavaScript. Esto es esencial cuando tienes más de una base de datos de {% data variables.product.prodname_codeql %} que analizar para una confirmación única en un repositorio.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## Cargar resultados en {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Para poder cargar resultados en {% data variables.product.product_name %}, debes determinar la mejor forma de pasar la {% data variables.product.prodname_github_app %} o el {% data variables.product.pat_generic %} que creaste anteriormente a la {% data variables.product.prodname_codeql_cli %} (consulta [Instalación de la {% data variables.product.prodname_codeql_cli %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Se recomienda revisar las instrucciones del sistema de CI sobre el uso seguro de un almacén de secretos. El {% data variables.product.prodname_codeql_cli %} es compatible con:

- Pasar el token a la CLI por medio de la entrada estándar mediante la opción `--github-auth-stdin` (recomendado).
- Guardar el secreto en la variable de entorno `GITHUB_TOKEN` y ejecutar la CLI sin incluir la opción `--github-auth-stdin`.

Cuando haya decidido el método más seguro y confiable para el servidor de CI, ejecute `codeql github upload-results` en cada archivo de resultados de SARIF e incluya `--github-auth-stdin` a menos que el token esté disponible en la variable de entorno `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Opción | Obligatorio | Uso |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique el *PROPIETARIO/NOMBRE* del repositorio en el que se cargarán los datos. El propietario debe ser una organización dentro de una empresa que tenga una licencia de {% data variables.product.prodname_GH_advanced_security %}, y la {% data variables.product.prodname_GH_advanced_security %} debe estar habilitada para el repositorio{% ifversion fpt or ghec %}, a menos que sea público{% endif %}. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique el nombre de la `ref` que ha extraído del repositorio y ha analizado para que los resultados puedan coincidir con el código correcto. Para usarla en una rama: `refs/heads/BRANCH-NAME`, para la confirmación del encabezado de una solicitud de incorporación de cambios use `refs/pull/NUMBER/head`, y para la confirmación de la combinación generada por {% data variables.product.prodname_dotcom %} de una solicitud de incorporación de cambios use `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique el SHA completo de la confirmación que ha analizado.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifica el archivo SARIF que se va a cargar.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifica la URL de {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Opcional. Utilízala para pasar a la CLI la {% data variables.product.prodname_github_app %} o el {% data variables.product.pat_generic %} que creaste para autenticarte con la API de REST de {% data variables.product.company_short %} a través de una entrada estándar. Esto no es necesario si el comando tiene acceso a una variable de entorno `GITHUB_TOKEN` establecida con este token.

Para obtener más información, consulte [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) en la documentación de la {% data variables.product.prodname_codeql_cli %}.

### Ejemplo básico

En este ejemplo se cargan los resultados del archivo `temp/example-repo-js.sarif` SARIF en el repositorio `my-org/example-repo`. Se indica a la API de {% data variables.product.prodname_code_scanning %} que los resultados son para la confirmación de `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` en la rama de `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

No hay salida para este comando a menos de que la carga no sea exitosa. El símbolo de sistema regresa cuando la carga se completa e inicia el procesamiento de datos. En bases de código más pequeñas, debes poder explorar las alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} poco tiempo después. Puede ver las alertas directamente en la solicitud de incorporación de cambios o en la pestaña **Security** de las ramas, en función del código que haya extraído. Para obtener más información, consulte "[Evaluación de prioridades de las alertas de {% data variables.product.prodname_code_scanning %} en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" y "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

{% ifversion codeql-packs %}
## Descargar y utilizar paquetes de consultas de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

El paquete de {% data variables.product.prodname_codeql_cli %} incluye consultas que mantienen los expertos de {% data variables.product.company_short %}, los investigadores de seguridad y los contribuyentes de la comunidad. Si quieres ejecutar consultas que desarrollan otras organizaciones, los paquetes de consultas de {% data variables.product.prodname_codeql %} proporcionan una forma confiable y eficiente de descargarlas y ejecutarlas. Para obtener más información, consulte "[Acerca del análisis de código con CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Para poder usar un paquete de {% data variables.product.prodname_codeql %} para analizar una base de datos, debes descargar los paquetes que necesites del {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}. Puedes hacerlo si usas la marca `--download` como parte del comando `codeql database analyze`. Si un paquete no está disponible públicamente, deberás usar una {% data variables.product.prodname_github_app %} o un {% data variables.product.pat_generic %} para autenticarte. Para obtener más información y ver un ejemplo, consulte la sección anterior "[Carga de resultados en {% data variables.product.product_name %}](#uploading-results-to-github)".

| Opción | Obligatorio | Uso |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifica el alcance y nombre de uno o más paquetes de consultas de CodeQL a descargar utilizando una lista separada por comas. Opcionalmente, incluye la versión para descargar y descomprimir. Se descarga la versión más reciente de este paquete predeterminadamente. Opcionalmente, incluye una ruta de acceso a una consulta, directorio o conjunto de consultas que se vaya a ejecutar. Si no se incluye ninguna ruta de acceso, ejecuta las consultas predeterminadas de este paquete. |
| <nobr>`--github-auth-stdin`</nobr> | | Opcional. Pasa a la CLI la {% data variables.product.prodname_github_app %} o el {% data variables.product.pat_generic %} que creaste para autenticarte con la API de REST de {% data variables.product.company_short %} en la CLI a través de una entrada estándar. Esto no es necesario si el comando tiene acceso a una variable de entorno `GITHUB_TOKEN` establecida con este token.

### Ejemplo básico

En este ejemplo se ejecuta el comando `codeql database analyze` con la opción `--download` para:

1. Descargar la versión más reciente del paquete `octo-org/security-queries`.
2. Descargar una versión del paquete `octo-org/optional-security-queries` que sea *compatible* con la versión 1.0.1 (en este caso, es la versión 1.0.2). Para obtener más información sobre la compatibilidad de SemVer, consulta la [documentación del intervalo de versiones semánticas de npm](https://github.com/npm/node-semver#ranges).
3. Ejecutar todas las consultas predeterminadas en `octo-org/security-queries`.
4. Ejecutar solo la consulta `queries/csrf.ql` de `octo-org/optional-security-queries`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Descarga directa de paquetes de {% data variables.product.prodname_codeql %}

Si quieres descargar un paquete de {% data variables.product.prodname_codeql %} sin ejecutarlo inmediatamente, puedes usar el comando `codeql pack download`. Esto resulta útil si quieres evitar acceder a Internet al ejecutar consultas de {% data variables.product.prodname_codeql %}. Al ejecutar el análisis de {% data variables.product.prodname_codeql %}, puedes especificar paquetes, versiones y rutas de acceso de la misma manera que en el ejemplo anterior:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### Descarga de paquetes de {% data variables.product.prodname_codeql %} de varios registros de contenedor de {% data variables.product.company_short %}

Si tus paquetes de {% data variables.product.prodname_codeql %} están en varios registros de contenedor, debes indicar a la {% data variables.product.prodname_codeql_cli %} dónde encontrar cada paquete. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server)".
{% endif %}

## Configuración de IC de ejemplo para el análisis de {% data variables.product.prodname_codeql %}

Este es un ejemplo de la serie de comandos que puedes utilizar para analizar una base de código con dos lenguajes compatibles y luego cargar los resultados a {% data variables.product.product_name %}.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## Solucionar problemas del {% data variables.product.prodname_codeql_cli %} en tu sistema de IC

### Visualizar la información diangóstica y de la bitácora

Cuando analices una base de datos de {% data variables.product.prodname_codeql %} utilizando un conjunto de consultas del {% data variables.product.prodname_code_scanning %} adicionalmente a generar información detallada sobre las alertas, el CLI reporta datos de diagnóstico desde el paso de generación de base de datos y las métricas de resumen. En el caso de los repositorios con pocas alertas, puede que esta información te sea útil para determinar si genuinamente hay pocos problemas en el código o si hubieron errores que se generaron en la base datos de {% data variables.product.prodname_codeql %}. Para obtener un resultado más detallado de `codeql database analyze`, utilice la opción `--verbose`.

Para obtener más información sobre el tipo de información de diagnóstico disponible, consulte "[Visualización de registros de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)".

### El {% data variables.product.prodname_code_scanning_capc %} solo muestra los resultados de análisis de uno de los lenguajes analizados

Predeterminadamente, el {% data variables.product.prodname_code_scanning %} espera un archivo de resultado SARIF por cada análisis de un repositorio. Como consecuencia, cuando cargues un segundo archivo de resultados SARIF para una confirmación, este se tratará como un reemplazo para el conjunto de datos original.

Si quieres cargar más de un conjunto de resultados a la API del {% data variables.product.prodname_code_scanning %} para una confirmación en un repositorio, debes identificar cada conjunto de resultados como un conjunto único. En el caso de los repositorios donde crees más de una base de datos de {% data variables.product.prodname_codeql %} para analizar cada confirmación, utilice la opción `--sarif-category` para especificar un lenguaje u otra categoría única para cada archivo SARIF que genere para ese repositorio.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Problemas con la extracción de Python

Vamos a dejar en desuso la compatibilidad de Python 2 con la {% data variables.product.prodname_codeql_cli %}, más concretamente, para la fase de generación de bases de datos CodeQL (extracción de código).

Si usas la {% data variables.product.prodname_codeql_cli %} para ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en código escrito en Python, debes asegurarte de que el sistema de CI tiene Python 3 instalado.

{% endif %}

## Información adicional

- [Crear bases de datos de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analizar las bases de datos con la CLI de CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [Publicación y uso de paquetes de CodeQL](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
