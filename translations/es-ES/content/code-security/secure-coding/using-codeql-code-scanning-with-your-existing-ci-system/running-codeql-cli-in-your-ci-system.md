---
title: Ejecutar el CLI de CodeQL en tu sistema de IC
shortTitle: Ejecutar el CLI de CodeQL
intro: 'Puedes utilizar el {% data variables.product.prodname_codeql_cli %} para llevar a cabo el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Acerca de {% data variables.product.prodname_codeql_cli %}

Puedes utilizar el {% data variables.product.prodname_codeql_cli %} para ejecutar el {% data variables.product.prodname_code_scanning %} en el código que estás procesando en un sistema de integración continua (IC) de terceros. {% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".

{% data reusables.code-scanning.what-is-codeql-cli %}

Como alternativa, puedes utilizar al {% data variables.product.prodname_codeql_runner %} en tu sistema de IC, o a las {% data variables.product.prodname_actions %} para ejecutar el {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para encontrar un resumen de las opciones para los sistemas de IC, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %} de CodeQL en tu sistema de IC](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)". Para obtener más información sobre el {% data variables.product.prodname_code_scanning %} utilizando acciones, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% note %}

**Nota:** {% if currentVersion == "free-pro-team@latest" %}
El {% data variables.product.prodname_codeql_cli %} se puede usar gratuitamente en los repositorios públicos que se mantienen en {% data variables.product.prodname_dotcom_the_website %} y está disponible para utilizarse en los repositorios privados que pertenezcan a los clientes con una licencia de la {% data variables.product.prodname_advanced_security %}. Para obtener información, consulta la sección "[Términos y condiciones del {% data variables.product.prodname_codeql %} de {% data variables.product.product_name %}](https://securitylab.github.com/tools/codeql/license)" y [CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- else %}El {% data variables.product.prodname_codeql_cli %} se encuentra disponible para los clientes con una licencia de la {% data variables.product.prodname_advanced_security %}.
{% endif %}
{% endnote %}

### Descargar el {% data variables.product.prodname_codeql_cli %}

Debes descargar el paquete de {% data variables.product.prodname_codeql %} desde https://github.com/github/codeql-action/releases. Este paquete contiene:

- El producto de {% data variables.product.prodname_codeql_cli %}
- Una versión compatible de las consultas y bibliotecas de https://github.com/github/codeql
- Versiones precompiladas de todas las consultas que se incluyen en el paquete

Siempre debes utilizar Siempre debes utilizar el paquete de {% data variables.product.prodname_codeql %}, ya que este garantiza la compatibilidad y también te da un rendimiento mucho mejor que una descarga independiente del {% data variables.product.prodname_codeql_cli %} y una verificación de las consultas de {% data variables.product.prodname_codeql %}. Si solo ejecutarás el CLI en una plataforma específica, descarga el archivo `codeql-bundle-PLATFORM.tar.gz` adecuado. Como alternativa, puedes descargar el `codeql-bundle.tar.gz` que contiene el CLI para todas las plataformas.

### Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC

Necesitas habilitar el contenido integral del paquete de {% data variables.product.prodname_codeql_cli %} para cada servidor de IC en el que quieras ejecutar el análiss del {% data variables.product.prodname_code_scanning %} de CodeQL. Por ejemplo, puedes configurar cada servidor para copiar el paquete desde una ubicación intera y centrar y extraerlo. Como alternativa, puedes utilizar la API de REST para obtener el paquete directamente desde {% data variables.product.prodname_dotcom %} para garantizar que te beneificarás de las últimas mejoras a las consultas. Las actualizaciones del {% data variables.product.prodname_codeql_cli %} se lanzan cada 2 o 3 semanas. Por ejemplo:

```shell
$ wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

Después de que extraes el paquete del {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el ejecutable del `codeql` en el servidor:

- Ejecutando `/extraction-root/codeql/codeql`, en donde `<extraction-root>` es la carpeta en la cual extrajiste el paquete de {% data variables.product.prodname_codeql_cli %}.
- Agregando `/extraction-root/codeql` a tu `PATH`, para que puedas ejecutar los ejecutables como solo `codeql`.

### Probar la configuración del {% data variables.product.prodname_codeql_cli %}

Después de que extraes el paquete de {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el siguiente comando para verificar que el CLI esté configurado correctamente para crear y analizar bases de datos.

- `codeql resolve languages` if `/extraction-root/codeql` is on the `PATH`.
- `/extraction-root/codeql/codeql resolve languages` otherwise.

**Ejemplo de salida exitosa:**
```
cpp (/extraction-root/codeql/cpp)
csharp (/extraction-root/codeql/csharp)
csv (/extraction-root/codeql/csv)
go (/extraction-root/codeql/go)
html (/extraction-root/codeql/html)
java (/extraction-root/codeql/java)
javascript (/extraction-root/codeql/javascript)
properties (/extraction-root/codeql/properties)
python (/extraction-root/codeql/python)
xml (/extraction-root/codeql/xml)
```

Si el {% data variables.product.prodname_codeql_cli %} no es capaz de resolver los lenguajes esperados, verifica que hayas descargado el paquete de {% data variables.product.prodname_codeql %} y no una copia independiente del {% data variables.product.prodname_codeql_cli %}.

### Generar un token para autenticarse con {% data variables.product.product_name %}

Cada servidor de IC necesita una {% data variables.product.prodname_github_app %} o un token de acceso personal para que utilice el {% data variables.product.prodname_codeql_cli %} para cargar los resultados a {% data variables.product.product_name %}. Debes utilizar un token de acceso o una {% data variables.product.prodname_github_app %} con el permiso de escritura `security_events`. Si los servidores de IC utilizan un token con este alcance para verificar los repositorios de {% data variables.product.product_name %}, podrías permitir potencialmente que {% data variables.product.prodname_codeql_cli %} utilice el mismo token. De lo contrario, debes crear un token nuevo con el permiso de escritura `security_events` y agregarlo al almacenamiento secreto del sistema de IC. Para obtener más información, consulta las secciones "[Crear {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" y "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Utilizar el {% data variables.product.prodname_codeql_cli %} para generar datos y cargarlo al {% data variables.product.product_name %}

Puedes llamar al {% data variables.product.prodname_codeql_cli %} para analizar la base de código en tres pasos:

1. Crear una base de datos de {% data variables.product.prodname_codeql %} para representar un solo lenguaje de programación en el repositorio utilizando: `codeql database create`
2. Ejecuta consultas para analizar la base de datos del {% data variables.product.prodname_codeql %} y resumir los resultados en un archivo SARIF utilizando: `codeql database analyze`
3. Carga el archivo SARIF a {% data variables.product.product_name %}, en donde los resultados se empatan con una rama o solicitud de cambios y se muestran como alertas del {% data variables.product.prodname_code_scanning %} utilizando: `codeql github upload-results`

Cada comando tiene algunas opciones obligatorias con opciones adicionales que puedes utilizar para modificar su comportamiento. Puedes mostrar la ayuda en la línea de comandos para apoyarte sobre cualquier comando utilizando la opción <nobr>`--help`</nobr> .

{% data reusables.code-scanning.upload-sarif-ghas %}

#### Crear una base de datos de {% data variables.product.prodname_codeql %} para analizar

1. Verifica que el código que quieres analizar:
    - Para el caso de una rama, verifica el encabezado de la rama que quieras analizar.
    - Para una solicitud de cambios, verifica ya sea la confirmación de encabezado de la solicitud de cambios o verifica una confirmación de fusión de la solicitud de cambios que genere {% data variables.product.product_name %}.
2. Configura el ambiente de la base de código, asegurándote de que todas las dependencias estén disponibles. Para obtener más información, consulta las secciones [Crear bases de datos para lenguajes no compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) y [Crear bases de datos para lenguajes compilados](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) en la documentación del {% data variables.product.prodname_codeql_cli %}.
3. Ejecuta `codeql database create` desde la raíz de verificación de tu repositorio.
  ```shell
  codeql database create &lt;database&gt; --language=&lt;language-identifier&gt;
  ```
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
      Especifica el nombre y ubicación de un directorio a crear para la base de datos de {% data variables.product.prodname_codeql %}. El comando fallará si intentas sobrescribir un directorio existente.
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
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Utilízalo si ejecutas el CLI fuera de la raíz de verificación del repositorio. Predeterminadamente, el comando de <code>database create</code> asume que el directorio actual es el directorio raíz de los archivos fuente, utiliza esta opción para especificar una ubicación diferente.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional para los lenguajes compilados. Utilízalo si quieres anular la detección y creación automática del sistema de compilación. Especifica el comando de creación o script que invoca el compilador. Los comandos se ejecutan desde la carpeta actual o, cuando se define, desde <nobr>`--source-root`</nobr>. No utilices esta opción para analizar Python ni JavaScript/TypeScript.
    </td>
  </tr>
</table>

Para obtener más información, consulta la sección [Crear bases de datos de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) en la documentación del {% data variables.product.prodname_codeql_cli %}.

##### Ejemplo básico

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

Para obtener más información y ejemplos, consulta la sección [Crear bases de datos de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases) en la documentación del {% data variables.product.prodname_codeql_cli %}.

#### Analizar una base de datos de {% data variables.product.prodname_codeql %}

1. Crea una base de datos de {% data variables.product.prodname_codeql %} (se explica anteriormente).
2. Ejecuta `codeql database analyze` en la base de datos y especifica qué consultas quieres utilizar.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  &lt;queries&gt; 
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
      <code>&lt;queries&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifica las consultas a ejecutar. Para ejecturar las consultas estándar que se utilizan para el {% data variables.product.prodname_code_scanning %}, utiliza: <code>&lt;language&gt;-code-scanning.qls</code> donde <code>&lt;language&gt;</code> es el código corto para el lenguaje de la base de datos. Para ver el resto de las suites de consulta que se incluyen en el paquete de {% data variables.product.prodname_codeql_cli %}, revisa <code>/extraction-root/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>. Para obtener más información sobre cómo crear tu suite de consultas, dirígete a la sección "<a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">Crear suites de consultas de CodeQL</a> en la documentación para el {% data variables.product.prodname_codeql_cli %}.
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
      Especifica el formato del archivo de resultados que generó el comando. Para cargar a {% data variables.product.company_short %}, este debe ser: {% if currentVersion == "free-pro-team@latest" %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}. Para obtener más información, consulta la sección "<a href="/code-security/secure-coding/sarif-support-for-code-scanning">Soporte de SARIF para {% data variables.product.prodname_code_scanning %}</a>".
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
      Especifica dónde guardar el archivo de resultados SARIF.{% if currentVersion == "free-pro-team@latest" %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Especifica una categoría para incluir en el archivo de resultados SARIF para este análisis. La categoría puede utilizarse pra distinguir análisis múltiples de la misma herramienta y confirmación, pero que se llevan a cabo en lenguajes diferentes o en partes diferentes del código. Este valor aparecerá en pa propiedad <code>&lt;run&gt;.automationId</code> de SARIF v1, la propiedad de <code>&lt;run&gt;.automationLogicalId</code> de SARIF v2, y la propiedad <code>&lt;run&gt;.automationDetails.id</code> de SARIF v2.1.0. |{% endif %}
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
</table>

Para obtener más información, consulta la sección [Analizar las bases de datos con el {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) en la documentación del {% data variables.product.prodname_codeql_cli %}.

##### Ejemplo básico

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --format={% if currentVersion == "free-pro-team@latest" %}sarif-latest{% else %}sarifv2.1.0{% endif %} \
    --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

#### Cargar resultados en {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Antes de que puedas cargar resultados a {% data variables.product.product_name %}, debes determinar la mejor forma de pasar la {% data variables.product.prodname_github_app %} o el token de acceso personal que creaste anteriormente al {% data variables.product.prodname_codeql_cli %} (consulta la sección anterior de [Generar un token para autenticarse con {% data variables.product.product_name %}](#generating-a-token-for-authentication-with-github)). Te recomendamos que revises las instrucciones de tu sistema de IC sobre el uso seguro del almacenamiento de secretos. El {% data variables.product.prodname_codeql_cli %} es compatible con:

- Pasar el token al CLI a través de una entrada estándar utilizando la opción `--github-auth-stdin` (recomendado).
- Guardar el secreto en la variable de ambiente `GITHUB_TOKEN` y ejecutando el CLI sin incluir la opción `--github-auth-stdin`.

Cuando decidas cuál será el método más seguro y confiable para tu servidor de IC, ejecuta `codeql github upload-results` en el archivo de resultados SARIF e incluye `--github-auth-stdin`, a menos de que el token esté disponible en la variable de ambiente `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
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
      Especifica el <em x-id="3">OWNER/NAME</em> del repositorio al cual quieres cargar los datos. El propietario debe ser una organización dentro de una empresa que tenga una licencia de {% data variables.product.prodname_GH_advanced_security %} y la {% data variables.product.prodname_GH_advanced_security %} debe estar habilitada para el repositorio{% if currentVersion == "free-pro-team@latest" %}, a menos de que este sea público{% endif %}. Para obtener más información, consulta la sección "<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">Administrar la configuración de seguridad y análisis para tu repositorio</a>".
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
      Especifica el nombre de la <code>ref</code> que verificaste y analizaste para que los resultados puedan empatarse con el código correcto. Para una rama, utiliza: <code>refs/heads/BRANCH-NAME</code>, para la confirmación de encabezado de una solicitud de cambios utiliza <code>refs/pulls/NUMBER/head</code> o, para la confirmación de fusión que genera {% data variables.product.product_name %} para una solicitud de cambios, utiliza <code>refs/pulls/NUMBER/merge</code>.
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
      Especifica el archivo SARIF a cargar.{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
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

##### Ejemplo básico

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

No hay salida para este comando a menos de que la carga no sea exitosa. El símbolo de sistema regresa cuando la carga se completa e inicia el procesamiento de datos. En bases de código más pequeñas, debes poder explorar las alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} poco tiempo después. Las alertas se muestran directamente en la solicitud de cambios o en la pestaña de **Seguridad** para las ramas que dependen del código que se verificó. Para obtener más información, consulta las secciones "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambio](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" y "[Administrar las alertas del {% data variables.product.prodname_code_scanning %} de tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

### Leer más

- [Crear bases de datos de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analizar bases de datos con el CL de CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
