---
title: Ejecutar el ejecutor de CodeQL en tu sistema de IC
shortTitle: Ejecutar el ejecutor de CodeQL
intro: 'Puedes utilizar el {% data variables.product.prodname_codeql_runner %} para llevar a cabo el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
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

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->
<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Acerca de {% data variables.product.prodname_codeql_runner %}

El {% data variables.product.prodname_codeql_runner %} es una herramienta que puedes utilizar para ejecutar el {% data variables.product.prodname_code_scanning %} en el código que estás procesando en un sistema de integración contínua (IC) de terceros. {% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
En muchos casos es más fácil configurar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} utilizando el {% data variables.product.prodname_codeql_cli %} directamente en tu sistema de IC. El ejecutor es más complejo y menos tolerante para configurar que el CLI y se recomienda únicamente si necesitas sus capacidades para analizar lenguajes compilados múltiples con una sola compilación o para integrar con procesos de compilación complejos. Para obtener más información, consulta la sección "[Acerca del escaneo de código de CodeQL en tu sistema de IC](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".
{% endif %}

Como alternativa, puedes utilizar las {% data variables.product.prodname_actions %} en tu sistema de IC, o al {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

El {% data variables.product.prodname_codeql_runner %} es una herramienta de línea de comandos que ejecuta un análisis de {% data variables.product.prodname_codeql %} en un control de un repositorio de {% data variables.product.prodname_dotcom %}. Agregas el ejecutor a tu sistema de terceros y luego lo llamas para que analice el código y cargue los resultados a {% data variables.product.product_name %}. Estos resultados se muestran como alertas del {% data variables.product.prodname_code_scanning %} en el repositorio.

{% note %}

**Nota:**
{% if currentVersion == "free-pro-team@latest" %}
* El {% data variables.product.prodname_codeql_runner %} utiliza el CLI de {% data variables.product.prodname_codeql %} para analizar el código y, por lo tanto, tiene las mismas condiciones de licencia. Se puede utilizar gratuitamente en los repositorios que mantiene {% data variables.product.prodname_dotcom_the_website %}, y está disponible para utilizarse en aquellos que pertenecen a los clientes con una licencia de {% data variables.product.prodname_advanced_security %}. Para obtener información, consulta la sección "[Términos y condiciones del {% data variables.product.prodname_codeql %} de {% data variables.product.product_name %}](https://securitylab.github.com/tools/codeql/license)" y [CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{% else %}
* El {% data variables.product.prodname_codeql_runner %} se encuentra disponible para los clientes con una licencia de {% data variables.product.prodname_advanced_security %}.
{% endif %}
{% if currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}
* El {% data variables.product.prodname_codeql_runner %} no debe confundirse con el CLI de {% data variables.product.prodname_codeql %}. El CLI de {% data variables.product.prodname_codeql %} es una interface de línea de comandos que te permite crear bases de datos de {% data variables.product.prodname_codeql %} para investigaciones de seguridad y ejecutar consultas de{% data variables.product.prodname_codeql %}. Para obtener más información, consulta "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)."
{% endif %}
{% endnote %}

### Descargar el {% data variables.product.prodname_codeql_runner %}

Puedes descargar el {% data variables.product.prodname_codeql_runner %} desde https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases. En algunos sistemas operativos, puede que necesites cambiar permisos para el archivo de descarga antes de que lo puedas ejecutar.

En Linux:

```shell
chmod +x codeql-runner-linux
```

En macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

En Windows, el archivo `codeql-runner-win.exe` habitualmente no necesita que se hagan cambios a los permisos.

### Agregar el {% data variables.product.prodname_codeql_runner %} a tu sistema de IC

Una vez que descargas el {% data variables.product.prodname_codeql_runner %} y verificas que puede ejecutarse, debes poner el ejecutor disponible para cada servidor de IC que pretendas utilizar para el {% data variables.product.prodname_code_scanning %}. Por ejemplo, podrías configurar cada servidor para que copie el ejecutor desde una ubicación interna y central. Como alternativa, puedes utilizar la API de REST para obtener el ejecutor directamente de {% data variables.product.prodname_dotcom %}, por ejemplo:

```shell
wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Además, cada servidor de IC necesitará también:

- Un token de acceso personal o de {% data variables.product.prodname_github_app %} para que utilice el {% data variables.product.prodname_codeql_runner %}. Debes utilizar un token de acceso con el alcance `repo`, o una {% data variables.product.prodname_github_app %} con el permiso de escritura `security_events`, y los permisos de lectura `metadata` y `contents`. Para obtener más información, consulta las secciones "[Crear {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" y "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
- Acceso al paquete de {% data variables.product.prodname_codeql %} asociado con este lanzamiento del {% data variables.product.prodname_codeql_runner %}. Este paquete contiene consultas y bibliotecas necesarias para el análisis de {% data variables.product.prodname_codeql %}, adicionado con el CLI de {% data variables.product.prodname_codeql %}, el cual utiliza internamente el ejecutor. Para obtener más información, consulta la sección "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".

Las opciones para proporcionar acceso al paquete de {% data variables.product.prodname_codeql %} son:

1. Permite que los servidores de IC accedan a https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action para que el {% data variables.product.prodname_codeql_runner %} pueda descargar el paquete automáticamente.
1. Descarga/extrae manualmente el paquete, almacénalo con otros recursos centrales y utiliza el <nobr>`--codeql-path`</nobr> para especificar la ubicación del paquete en los llamados para inicializar el {% data variables.product.prodname_codeql_runner %}.

### Llamar al {% data variables.product.prodname_codeql_runner %}

Debes llamar al {% data variables.product.prodname_codeql_runner %} desde la ubicación de verificación del repositorio que quieres analizar. Los dos comandos principales son:

1. `init` que se requiere para inicializar el ejecutor y para crear una base de datos de {% data variables.product.prodname_codeql %} para que se analice cada lenguaje. Estas bases de datos se llenan y analizan mediante comandos subsecuentes.
1. `analyze` que se requiere para llenar las bases de datos de {% data variables.product.prodname_codeql %}, analizarlas y cargar los resultados a {% data variables.product.product_name %}.

Para ambos comandos, debes especificar la URL de {% data variables.product.product_name %}, el *PROPIETARIO/NOMBRE* del repositorio, y el token de {% data variables.product.prodname_github_apps %} o de acceso personal a utilizar para la autenticación. También necesitas especificar la ubicación del paquete de CodeQL, a menos de que el servidor de IC tenga acceso para descargarlo directamente del repositorio de `github/codeql-action`.

Puedes configurar la ubicación en la que {% data variables.product.prodname_codeql_runner %} almacenará el paquete de CodeQL para un análisis futuro un un servidor utilizando el marcador <nobr>`--tools-dir`</nobr> , así como en dónde almacena archivos temporales utilizando el marcador <nobr>`--temp-dir`</nobr>.

Para ver la referencia de línea de comandos para el ejecutor, utiliza el marcador `-h`. Por ejemplo, para listar todos los comandos, ejecuta: `codeql-runner-OS -h`, o para listar todos los marcadores disponibles para el comando `init`, ejecuta: `codeql-runner-OS init -h` (en donde el `OS` variará de acuerdo con el ejecutable que estés utilizando). Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### Ejemplo básico

Este ejemplo ejecuta un análisis de {% data variables.product.prodname_codeql %} en un servidor de IC con Linux para el repositorio de `octo-org/example-repo` en `{% data variables.command_line.git_url_example %}`. El proceso es muy simple, ya que el repositorio contiene únicamente los lenguajes que puede analizar {% data variables.product.prodname_codeql %} directamente, sin que se tenga que compilar (es decir, Go, JavaScript, Python, y TypeScript).

En este ejemplo, el servidor tiene acceso para descargar el paquete de {% data variables.product.prodname_codeql %} directamente desde el repositorio `github/codeql-action`, así que no hay necesidad de utilizar el marcador `--codeql-path`.

1. Verifica el repositorio a analizar.
1. Posiciónate en el directorio donde se seleccionó el repositorio.
1. Inicializa el {% data variables.product.prodname_codeql_runner %} y crea bases de datos de {% data variables.product.prodname_codeql %} para los lenguajes detectados.

{% if currentVersion ver_lt "enterprise-server@3.1" %}
   ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
   ```
{% else %}
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```
{% endif %}

{% data reusables.code-scanning.codeql-runner-analyze-example %}

#### Ejemplo de lenguaje compilado

Este ejemplo es similar al anterior, sin embargo, esta vez el repositorio tiene código en C/C++, C#, o Java. Para crear una base de datos de {% data variables.product.prodname_codeql %} para estos lenguajes, el CLI necesita monitorear la compilación. Al final del proceso de inicialización, el ejecutor reportará el comando que necesitas configurar en el ambiente antes de compilar el código. Necesitas ejecutar este comando antes de llamar al proceso normal de compilación de IC y luego ejecutar el comando `analyze`.

1. Verifica el repositorio a analizar.
1. Posiciónate en el directorio donde se seleccionó el repositorio.
1. Inicializa el {% data variables.product.prodname_codeql_runner %} y crea bases de datos de {% data variables.product.prodname_codeql %} para los lenguajes detectados.
{% if currentVersion ver_lt "enterprise-server@3.1" %}
 ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
 ```
{% else %}
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
{% endif %}
1. Proporciona el script que generó la acción `init` para configurar el ambiente para monitorear la compilación. Toma en cuenta el primer punto y espacio en el siguiente extracto de código.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Compila el código. En macOS, necesitarás agregar un prefijo al comando de la compilación con la variable de ambiente `$CODEQL_RUNNER`. For more information, see "[Troubleshooting {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)."

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Nota:** Si utilizas una compilación que usa contenedores, necesitarás ejecutar el {% data variables.product.prodname_codeql_runner %} en el contenedor donde toma lugar tu tarea de compilaión.

{% endnote %}

### Leer más

- "[Configurar el {% data variables.product.prodname_codeql_runner %} en tu sistema](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[Solucionar problemas del {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"
