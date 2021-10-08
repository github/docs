---
title: Configurar el CLI de CodeQL en tu sistema de IC
shortTitle: Configurar el CLI de CodeQL
intro: 'Puedes configurar tu sistema de integración continua para que ejecute el {% data variables.product.prodname_codeql_cli %}, realice un análisis de {% data variables.product.prodname_codeql %} y cargue los resultados en {% data variables.product.product_name %} para mostrarlos como alertas del {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: next
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de generar los resultados del escaneo de código con el {% data variables.product.prodname_codeql_cli %}

Una vez que hayas puesto el {% data variables.product.prodname_codeql_cli %} disponible en los servidores de tu sistema de IC y de que te hayas asegurado que se pueden autenticar con {% data variables.product.product_name %}, estarás listo para generar datos.

Utilizarás tres comandos diferentes para generar los resultados y cargarlos a {% data variables.product.product_name %}:

{% ifversion fpt or ghes > 3.1 or ghae %}
<!--Option to analyze multiple languages with one call-->
1. `database create` para crear una base de datos de {% data variables.product.prodname_codeql %} para representar la estructura jerárquica de cada lenguage de programación compatible en el repositorio.
2. `database analyze` para ejecutar consultas para analizar cada base de datos de {% data variables.product.prodname_codeql %} y resumir los resultados en un archivo SARIF.
3. `github upload-results` para cargar los archivos sarif resultantes a {% data variables.product.product_name %} en donde los resultados se empatan con una rama o solicitud de cambios y se muestran como alertas del {% data variables.product.prodname_code_scanning %}.
{% else %}
<!--Only one language can be analyzed-->
1. `database create` para crear una base de datos de {% data variables.product.prodname_codeql %} para representar la estructura jerárquica de un lenguage de programación compatible en el repositorio.
2. `database analyze` para ejecutar consultas para analizar la base de datos de {% data variables.product.prodname_codeql %} y resumir los resultados en un archivo SARIF.
3. `github upload-results` para cargar el archivo sarif resultantes a {% data variables.product.product_name %} en donde los resultados se empatan con una rama o solicitud de cambios y se muestran como alertas del {% data variables.product.prodname_code_scanning %}.
{% endif %}

Puedes mostrar la ayuda en la línea de comandos para apoyarte sobre cualquier comando utilizando la opción <nobr>`--help`</nobr> .

{% data reusables.code-scanning.upload-sarif-ghas %}

## Crear bases de datos de {% data variables.product.prodname_codeql %} para analizar

1. Verifica que el código que quieres analizar:
    - Para una rama, verifica el encabezado de la rama que quieras analizar.
    - Para una solicitud de cambios, verifica ya sea la confirmación de encabezado de la solicitud o una confirmación de fusión generada por {% data variables.product.prodname_dotcom %} de dicha solicitud.
2. Configura el ambiente de la base de código, asegurándote de que todas las dependencias estén disponibles. Para obtener más información, consulta las secciones [Crear bases de datos para lenguajes no compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) y [Crear bases de datos para lenguajes compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) en la documentación del {% data variables.product.prodname_codeql_cli %}.
3. Encuentra el comando de compilación, en caso de que exista, para la base de código. Habitualmente, esta es una variable en un archivo de configración en el sistema de IC.
4. Ejecuta `codeql database create` desde la raíz de verificación de tu repositorio y recompila la base de código.
  {% ifversion fpt or ghes > 3.1 or ghae %}
  ```shell
  # Single supported language - create one CodeQL databsae
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt; 

  # Multiple supported languages - create one CodeQL database per langauge
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt; 
  ```
  {% else %}
    ```shell
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;
  ```
  {% endif %}
  {% note %}

  **Nota:** Si utilizas una compilación que usa contenedores, necesitas ejecutar el {% data variables.product.prodname_codeql_cli %} dentro del contenedor en donde toma lugar tu tarea de compilación.

  {% endnote %}

<table spaces-before="0">
  <tr>
    <th>
      Opción
    </th>
    
    <th align="center">
      Requerido
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el nombre y ubicación de un directorio a crear para la base de datos de {% data variables.product.prodname_codeql %}. El comando fallará si intentas sobrescribir un directorio existente. Si también especificas el <code>--db-cluster</code>, este es el directorio padre y se crea un subdirectorio para cada lenguaje analizado.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--language`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el identificador del lenguaje para el cual se creará la base de datos, debe ser uno de entre: <code>{% data reusables.code-scanning.codeql-languages-keywords %}</code> (utiliza <code>javascript</code> para analizar el código en TypeScript).
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae %} cuando se utiliza con <nobr>`--db-cluster`</nobr>, la opción acepta una lista separada por comas o puede especificarse más de una vez.{% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Recomendado. Utilízalo para especificar el comando o script de compilación que invoca el proceso de compilación para la base de código. Los comandos se ejecutan desde la carpeta actual o, cuando se define, desde <nobr>`--source-root`</nobr>. No se necesita para analizar Python y JavaScript/TypeScript.
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--db-cluster`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utiliza las bases de código multi-lenguaje para generar una base de datos para cada lenguaje que especifica <nobr>`--language`</nobr>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--no-run-unnecessary-builds`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Recomendado. Utilízalo para suprimir el comando de compilación para los lenguajes en donde el {% data variables.product.prodname_codeql_cli %} no necesite monitorear la compilación (por ejemplo, Python y JavaScript/TypeScript).
    </td>
  </tr>
  
  <tr>
    <td>
      {% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízalo si ejecutas el CLI fuera de la raíz de verificación del repositorio. Predeterminadamente, el comando de <code>database create</code> asume que el directorio actual es el directorio raíz de los archivos fuente, utiliza esta opción para especificar una ubicación diferente.
    </td>
  </tr>
</table>

Para obtener más información, consulta la sección [Crear bases de datos de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) en la documentación del {% data variables.product.prodname_codeql_cli %}.

### {% ifversion fpt or ghes > 3.1 or ghae %}Ejemplo con un solo lenguaje{% else %}Ejemplo básico{% endif %}

Este ejemplo crea una base de datos de {% data variables.product.prodname_codeql %} para el repositorio que se verificón en `/checkouts/example-repo`. Utiliza el extractor de JavaScript para crear una representación jerárquica del código de JavaScript y TypeScript en el repositorio. La base de datos resultante se almacena en `/codeql-dbs/example-repo`.

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

{% ifversion fpt or ghes > 3.1 or ghae %}
### Ejemplo de lenguaje múltiple

Este ejemplo crea dos bases de datos de {% data variables.product.prodname_codeql %} para el repositorio que se verificó en `/checkouts/example-repo-multi`. Esta utiliza:

- `--db-cluster` para solicitar el análisis de más de un lenguaje.
- `--language` para especificar para qué lenguajes creará bases de datos.
- `--command` para decirle a la herramienta el comando de compilación para la base de código, aquí es `make`.
- `--no-run-unnecessary-builds` para decirle a la herramienta que se salte el comando de compilación para los lenguajes en donde no se necesita (como Pyhon).

La base de datos resultante se almacena en los subdirectorios `python` y `cpp` de `/codeql-dbs/example-repo-multi`.

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
{% endif %}

## Analizar una base de datos de {% data variables.product.prodname_codeql %}

1. Crea una base de datos de {% data variables.product.prodname_codeql %} (mira el ejemplo anterior).{% if codeql-packs %}
2. Opcionalmente, ejecuta `codeql pack download` para descargar cualquier paquete de {% data variables.product.prodname_codeql %} (beta) que quieras ejecutar durante el análisis. Para obtener más información, consulta la sección "[Descargar y usar los paquetes de consultas de {% data variables.product.prodname_codeql %}](#downloading-and-using-codeql-query-packs)" a continuación.
    ```shell
    codeql pack download &lt;packs&gt; 
    ```
    {% endif %}
3. Ejecuta `codeql database analyze` en la base de datos y especifica qué {% if codeql-packs %}paquetes o {% endif %}consultas utilizar.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% if codeql-packs %}&lt;packs,queries&gt;{% else %} &lt;queries&gt;{% endif %} 
  ```

{% ifversion fpt or ghes > 3.1 or ghae %}
{% note %}

**Nota:** Si analizaste más de una base de datos de {% data variables.product.prodname_codeql %} para una confirmación simple, debes especificar una categoría SARIF para cada conjunto de resultados que se generaron con este comando. Cuando cargas los resultados en {% data variables.product.product_name %}, el {% data variables.product.prodname_code_scanning %} utiliza esta categoría para almacenar los resultados para cada lenguaje por separado. Si te olvidas de hacerlo, cada carga sobreescribe los resultados anteriores.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% if codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

{% endif %}
<table spaces-before="0">
  <tr>
    <th>
      Opción
    </th>
    
    <th align="center">
      Requerido
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica la ruta del directorio que contiene la base de datos de {% data variables.product.prodname_codeql %} a analizar.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs,queries&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Specify {% data variables.product.prodname_codeql %} packs or queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, omit this parameter. Para ver el resto de las suites de consultas que se incluyen en el paquete del {% data variables.product.prodname_codeql_cli %}, revisa <code>/&lt;extraction-root&gt;/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>. Para obtener más información sobre cómo crear tu suite de consultas, dirígete a la sección "<a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">Crear suites de consultas de CodeQL</a> en la documentación para el {% data variables.product.prodname_codeql_cli %}.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--format`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el formato del archivo de resultados que generó el comando. Para cargar a {% data variables.product.company_short %}, este debe ser: {% ifversion fpt or ghae %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}. Para obtener más información, consulta la sección "<a href="/code-security/secure-coding/sarif-support-for-code-scanning">Soporte de SARIF para {% data variables.product.prodname_code_scanning %}</a>".
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--output`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica dónde guardar el archivo de resultados SARIF.{% ifversion fpt or ghes > 3.1 or ghae %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
      {% octicon "question" aria-label="Required with multiple results sets" %}
    </td>
    
    <td>
      Opcional para el análisis de bases de datos simples. Requerido para definir el idioma cuando analizas bases de datos múltiples para una confirmación simple en un repositorio. Especifica una categoría para incluir en el archivo de resultados SARIF para su análisis. Se utiliza una categoría para distinguir entre análisis múltiples para la misma herramienta y confirmación, pero se realiza en lenguajes diferentes o en partes diferentes del código.{% endif %}{% if codeql-packs %}
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízalo si descargaste paquetes de consultas de CodeQL y quieres ejecutar las consultas predeterminadas o suites de consultas especificadas en estos. Para obtener más información, consulta la sección "<a href="#downloading-and-using-codeql-query-packs">Descargar y utilizar paquetes de {% data variables.product.prodname_codeql %}</a>".{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--threads`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízala si quieres usar más de un subproceso para ejecutar consultas. El valor predeterminado es <code>1</code>. Puedes especificar más subprcesos para agilizar la ejecución de la consulta. Para configurar la cantidad de subprocesos en la cantidad de procesadores lógicos, especifica <code>0</code>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--verbose`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízalo para obtener información más detallada sobre el proceso de análisis{% ifversion fpt or ghes > 3.1 or ghae %} y datos de diagnóstico del proceso de creación de bases de datos{% endif %}.
    </td>
  </tr>
</table>

Para obtener más información, consulta la sección [Analizar las bases de datos con el {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) en la documentación del {% data variables.product.prodname_codeql_cli %}.

### Ejemplo básico

Este ejemplo analiza una base de datos de {% data variables.product.prodname_codeql %} que se almacena en `/codeql-dbs/example-repo` y guarda los resultados como un archivo SARIF: `/temp/example-repo-js.sarif`. {% ifversion fpt or ghes > 3.1 or ghae %}Este utiliza `--sarif-category` para incluir información adicional en el archivo SARIF que identifica los resultados como JavaScript. Esto es escencial cuando tienes más de una base de datos de {% data variables.product.prodname_codeql %} que analizar para una sola confirmación en un repositorio.{% endif %}

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls {% ifversion fpt or ghes > 3.1 or ghae %}--sarif-category=javascript{% endif %}
    --format={% ifversion fpt or ghae %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

## Cargar resultados en {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Antes de que puedas cargar los resultados a {% data variables.product.product_name %}, debes determinar la mejor forma de pasar el token de acceso personal o de la {% data variables.product.prodname_github_app %} que creaste anteriormente al {% data variables.product.prodname_codeql_cli %} (consulta la sección [Instalar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Te recomendamos que revises las instrucciones de tu sistema de IC sobre el uso seguro para un almacenamiento de secretos. El {% data variables.product.prodname_codeql_cli %} es compatible con:

- Pasar el token al CLI a través de una entrada estándar utilizando la opción `--github-auth-stdin` (recomendado).
- Guardar el secreto en la variable de ambiente `GITHUB_TOKEN` y ejecutando el CLI sin incluir la opción `--github-auth-stdin`.

Cuando decidas cuál será el método más seguro y confiable para tu servidor de IC, ejecuta `codeql github upload-results` en cada archivo de resultados SARIF e incluye `--github-auth-stdin`, a menos de que el token esté disponible en la variable de ambiente `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes > 3.0 or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

<table spaces-before="0">
  <tr>
    <th>
      Opción
    </th>
    
    <th align="center">
      Requerido
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`--repository`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el <em x-id="3">OWNER/NAME</em> del repositorio al cual quieres cargar los datos. El propietario debe ser una organización dentro de una empresa que tenga una licencia de {% data variables.product.prodname_GH_advanced_security %} y la {% data variables.product.prodname_GH_advanced_security %} debe estar habilitada para el repositorio{% ifversion fpt %}, a menos de que este sea público{% endif %}. Para obtener más información, consulta la sección "<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">Administrar la configuración de seguridad y análisis para tu repositorio</a>".
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--ref`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el nombre de la <code>ref</code> que verificaste y analizaste para que los resultados puedan empatarse con el código correcto. Para una rama, utiliza: <code>refs/heads/BRANCH-NAME</code>, para la confirmación de encabezado de una solicitud de cambios utiliza <code>refs/pulls/NUMBER/head</code> o, para la confirmación de fusión que genera {% data variables.product.prodname_dotcom %} para una solicitud de cambios, utiliza <code>refs/pulls/NUMBER/merge</code>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--commit`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el SHA completo de la confirmación que analizaste.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--sarif`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el archivo SARIF a cargar.{% ifversion ghes > 3.0 or ghae %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-url`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica la URL de {% data variables.product.product_name %}.{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízala para pasar al CLI la {% data variables.product.prodname_github_app %} o token de acceso personal que creaste para autenticarse con la API de REST de {% data variables.product.company_short %} a través de una entrada estándar. Esto no se necesita si el comando tiene acceso a una variable de ambiente de <code>GITHUB_TOKEN</code> que se configuró con este token.
    </td>
  </tr>
</table>

Para obtener más información, consulta la sección [resultados de carga de github](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) en la documentación del {% data variables.product.prodname_codeql_cli %}.

### Ejemplo básico

Este ejemplo carga los resultados del archivo SARIF `temp/example-repo-js.sarif` al repositorio `my-org/example-repo`. Le dice a la API del {% data variables.product.prodname_code_scanning %} que los resultados son para la confirmación `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` en la rama `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes > 3.0 or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

No hay salida para este comando a menos de que la carga no sea exitosa. El símbolo de sistema regresa cuando la carga se completa e inicia el procesamiento de datos. En bases de código más pequeñas, debes poder explorar las alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} poco tiempo después. Puedes ver las alertas directamente en la solicitud de cambios en la pestaña de **Seguridad** de las ramas, dependiendo del código que verificaste. Para obtener más información, consulta las secciones "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambio](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" y "[Administrar las alertas del {% data variables.product.prodname_code_scanning %} de tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

{% if codeql-packs %}
## Descargar y utilizar paquetes de consultas de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

El paquete de {% data variables.product.prodname_codeql_cli %} incluye consultas que mantienen los expertos de {% data variables.product.company_short %}, los investigadores de seguridad y los contribuyentes de la comunidad. Si quieres ejecutar consultas que desarrollan otras organizaciones, los paquetes de consultas de {% data variables.product.prodname_codeql %} proporcionan una forma confiable y eficiente de descargarlas y ejecutarlas. Para obtener más información, consulta la sección "[Acerca del escaneo de código con CodeQL"](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Antes de que puedas utilizar un paquete de {% data variables.product.prodname_codeql %} para analizar una base de datos, debes descargar cualquier paquete que requieras desde el {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %} ejecutando `codeql pack download` y especificando los paquetes que quieras descargar. Si un paquete no está disponible públicamente, necesitarás utilizar un token de acceso personal o de {% data variables.product.prodname_github_app %} para autenticarte. Para obtener más información y un ejemplo, consulta la sección anterior de "[Cargar los resultados a {% data variables.product.product_name %}](#uploading-results-to-github)".

```shell
codeql pack download &lt;scope/name@version&gt;,... 
```

<table spaces-before="0">
  <tr>
    <th>
      Opción
    </th>
    
    <th align="center">
      Requerido
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`<scope>`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica el alcance y nombre de uno o más paquetes de consultas de CodeQL a descargar utilizando una lista separada por comas. Opcionalmente, incluye la versión para descargar y descomprimir. Se descarga la versión más reciente de este paquete predeterminadamente.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Pasa la {% data variables.product.prodname_github_app %} o el token de acceso personal que se creó para la autenticación con la API de REST de {% data variables.product.company_short %} al CLI a través de una entrada estándar. Esto no se necesita si el comando tiene acceso a una variable de ambiente de <code>GITHUB_TOKEN</code> que se configuró con este token.
    </td>
  </tr>
</table>

### Ejemplo básico

Este ejemplo ejecuta dos comandos para descargar la última versión del paquete `octo-org/security-queries` y luego analiza la base de datos `/codeql-dbs/example-repo`.

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download octo-org/security-queries

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0

$ codeql database analyze /codeql-dbs/example-repo  octo-org/security-queries \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/1] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> [1/1 eval 394ms] Evaluation done; writing results to docto-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}

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

Cuando analices una base de datos de {% data variables.product.prodname_codeql %} utilizando un conjunto de consultas del {% data variables.product.prodname_code_scanning %} adicionalmente a generar información detallada sobre las alertas, el CLI reporta datos de diagnóstico desde el paso de generación de base de datos y las métricas de resumen. En el caso de los repositorios con pocas alertas, puede que esta información te sea útil para determinar si genuinamente hay pocos problemas en el código o si hubieron errores que se generaron en la base datos de {% data variables.product.prodname_codeql %}. Para obtener una salida más detallada de `codeql database analyze`, utiliza la opción `--verbose`.

Para obtener información sobre el tipo de información de diagnóstico disponible, consulta la sección "[Visualizar las bitácoras del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)".

### El {% data variables.product.prodname_code_scanning_capc %} solo muestra los resultados de análisis de uno de los lenguajes analizados

Predeterminadamente, el {% data variables.product.prodname_code_scanning %} espera un archivo de resultado SARIF por cada análisis de un repositorio. Como consecuencia, cuando cargues un segundo archivo de resultados SARIF para una confirmación, este se tratará como un reemplazo para el conjunto de datos original.

Si quieres cargar más de un conjunto de resultados a la API del {% data variables.product.prodname_code_scanning %} para una confirmación en un repositorio, debes identificar cada conjunto de resultados como un conjunto único. En el caso de los repositorios en donde creas más de una base de datos de {% data variables.product.prodname_codeql %} para analizar cada confirmación, utiliza la opción `--sarif-category` para especificar un lenguaje u otra categoría para cada archivo SARIF que generes para ese repositorio.

### Alternativa si tu sistema de IC no puede activar el {% data variables.product.prodname_codeql_cli %}

{% ifversion fpt or ghes > 3.2 or ghae-next %}

Si tu sistema de IC no puede activar la autocompilación del {% data variables.product.prodname_codeql_cli %} y no puedes especificar una línea de comandos para dicha compilación, puedes utilizar el rastreo de compilación indirecta para crear bases de datos de {% data variables.product.prodname_codeql %} para los lenguajes compilados. Para obtener más información, consulta la sección [Utilizar el rastreo indirecto de compilaciones](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#using-indirect-build-tracing) en la documentación del {% data variables.product.prodname_codeql_cli %}.

{% endif %}

{% ifversion ghes < 3.3 %}

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

## Leer más

- [Crear bases de datos de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analizar las bases de datos con el CLI de CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
