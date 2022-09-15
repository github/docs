---
title: Ejecutar el ejecutor de CodeQL en tu sistema de IC
shortTitle: Run CodeQL runner
intro: 'Puedes utilizar el {% data variables.product.prodname_codeql_runner %} para llevar a cabo el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
ms.openlocfilehash: c4803ff75aa157bc89dc2bfa776c03b3a1cf305a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178683'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de {% data variables.product.prodname_codeql_runner %}

El {% data variables.product.prodname_codeql_runner %} es una herramienta que puedes utilizar para ejecutar el {% data variables.product.prodname_code_scanning %} en el código que estás procesando en un sistema de integración contínua (IC) de terceros. {% data reusables.code-scanning.about-code-scanning %} Para obtener información, consulta "[Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

En muchos casos es más fácil configurar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} utilizando el {% data variables.product.prodname_codeql_cli %} directamente en tu sistema de IC. 

Como alternativa, puedes utilizar las {% data variables.product.prodname_actions %} en tu sistema de IC, o al {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para obtener información, consulta "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

El {% data variables.product.prodname_codeql_runner %} es una herramienta de línea de comandos que ejecuta un análisis de {% data variables.product.prodname_codeql %} en un control de un repositorio de {% data variables.product.prodname_dotcom %}. Puedes agregar el ejecutor a tu sistema de terceros y, luego, llamarlo para que analice el código y cargue los resultados en {% data variables.product.product_name %}. Estos resultados se muestran como alertas del {% data variables.product.prodname_code_scanning %} en el repositorio.

{% note %}

**Nota**: {% ifversion fpt or ghec %}
* El {% data variables.product.prodname_codeql_runner %} utiliza el CLI de {% data variables.product.prodname_codeql %} para analizar el código y, por lo tanto, tiene las mismas condiciones de licencia. Se puede utilizar gratuitamente en los repositorios que mantiene {% data variables.product.prodname_dotcom_the_website %}, y está disponible para utilizarse en aquellos que pertenecen a los clientes con una licencia de {% data variables.product.prodname_advanced_security %}. Para obtener información, vea "[Términos y condiciones de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license)" y "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{% else %}
* El {% data variables.product.prodname_codeql_runner %} se encuentra disponible para los clientes con una licencia de {% data variables.product.prodname_advanced_security %}.
{% endif %} {% ifversion ghae %}
* El {% data variables.product.prodname_codeql_runner %} no debe confundirse con el CLI de {% data variables.product.prodname_codeql %}. El CLI de {% data variables.product.prodname_codeql %} es una interface de línea de comandos que te permite crear bases de datos de {% data variables.product.prodname_codeql %} para investigaciones de seguridad y ejecutar consultas de{% data variables.product.prodname_codeql %}.
Para obtener más información, consulta "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)".
{% endif %} {% endnote %}

## Descargar el {% data variables.product.prodname_codeql_runner %}

Puedes descargar {% data variables.product.prodname_codeql_runner %} desde https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases. En algunos sistemas operativos, puede que necesites cambiar permisos para el archivo de descarga antes de que lo puedas ejecutar.

En Linux:

```shell
chmod +x codeql-runner-linux
```

En macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

En Windows, el archivo `codeql-runner-win.exe` normalmente no requiere ningún cambio en los permisos.

## Agregar el {% data variables.product.prodname_codeql_runner %} a tu sistema de IC

Una vez que descargas el {% data variables.product.prodname_codeql_runner %} y verificas que puede ejecutarse, debes poner el ejecutor disponible para cada servidor de IC que pretendas utilizar para el {% data variables.product.prodname_code_scanning %}. Por ejemplo, podrías configurar cada servidor para que copie el ejecutor desde una ubicación interna y central. Como alternativa, puedes utilizar la API de REST para obtener el ejecutor directamente de {% data variables.product.prodname_dotcom %}, por ejemplo: 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Además, cada servidor de IC necesitará también:

- Un token de {% data variables.product.prodname_github_app %} o de acceso personal para que lo use el {% data variables.product.prodname_codeql_runner %}. Debes usar un token de acceso con el ámbito `repo` o una {% data variables.product.prodname_github_app %} con el permiso de escritura `security_events` y los permisos de lectura `metadata` y `contents`. Para obtener información, consulta "[Compilación de {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" y "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
- Acceso al paquete de {% data variables.product.prodname_codeql %} asociado con este lanzamiento del {% data variables.product.prodname_codeql_runner %}. Este paquete contiene consultas y bibliotecas necesarias para el análisis de {% data variables.product.prodname_codeql %}, adicionado con el CLI de {% data variables.product.prodname_codeql %}, el cual utiliza internamente el ejecutor. Para obtener información, consulta "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".

Las opciones para proporcionar acceso al paquete de {% data variables.product.prodname_codeql %} son:

1. Permitir que los servidores de CI accedan a https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action para que el {% data variables.product.prodname_codeql_runner %} pueda descargar el paquete automáticamente.
1. Descargar o extraer el paquete manualmente, almacenarlo con otros recursos centrales y usar la marca <nobr>`--codeql-path`</nobr> para especificar la ubicación del paquete en las llamadas para inicializar el {% data variables.product.prodname_codeql_runner %}.

## Llamar al {% data variables.product.prodname_codeql_runner %}

Debes llamar al {% data variables.product.prodname_codeql_runner %} desde la ubicación de verificación del repositorio que quieres analizar. Los dos comandos principales son:

1. `init` que se requiere para inicializar el ejecutor y para crear una base de datos de {% data variables.product.prodname_codeql %} para que se analice cada lenguaje. Estas bases de datos se llenan y analizan mediante comandos subsecuentes.
1. `analyze` que se requiere para rellenar las bases de datos de {% data variables.product.prodname_codeql %}, analizarlas y cargar los resultados en {% data variables.product.product_name %}.

Para ambos comandos, debes especificar la URL de {% data variables.product.product_name %}, el *PROPIETARIO/NOMBRE* del repositorio y el token de {% data variables.product.prodname_github_apps %} o de acceso personal que se usará para la autenticación. También necesitas especificar la ubicación del paquete de CodeQL, a menos de que el servidor de CI tenga acceso para descargarlo directamente del repositorio de `github/codeql-action`.

Puedes configurar en qué lugar el {% data variables.product.prodname_codeql_runner %} almacena la agrupación de CodeQL para el análisis futuro en un servidor mediante la marca <nobr>`--tools-dir`</nobr> y dónde almacena los archivos temporales durante el análisis mediante <nobr>`--temp-dir`</nobr>.

Para ver la referencia de línea de comandos para el ejecutor, usa la marca `-h`. Por ejemplo, para enumerar todos los comandos ejecuta `codeql-runner-OS -h`, o bien para enumerar todas las marcas disponibles para el comando `init` ejecuta `codeql-runner-OS init -h` (donde `OS` varía según el ejecutable que se use). Para obtener más información, consulta "[Configuración de {% data variables.product.prodname_code_scanning %} en el sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Ejemplo básico

En este ejemplo se ejecuta el análisis de {% data variables.product.prodname_codeql %} en un servidor de CI de Linux para el repositorio `octo-org/example-repo` hospedado en `{% data variables.command_line.git_url_example %}`. El proceso es muy simple, ya que el repositorio contiene únicamente los lenguajes que puede analizar {% data variables.product.prodname_codeql %} directamente, sin que se tenga que compilar (es decir, Go, JavaScript, Python, y TypeScript).

En este ejemplo, el servidor tiene acceso para descargar la agrupación {% data variables.product.prodname_codeql %} directamente desde el repositorio `github/codeql-action`, así que no hay necesidad de usar la marca `--codeql-path`.

1. Verifica el repositorio a analizar.
1. Posiciónate en el directorio donde se seleccionó el repositorio.
1. Inicializa el {% data variables.product.prodname_codeql_runner %} y crea bases de datos de {% data variables.product.prodname_codeql %} para los lenguajes detectados.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Ejemplo de lenguaje compilado

Este ejemplo es similar al anterior, sin embargo, esta vez el repositorio tiene código en C/C++, C#, o Java. Para crear una base de datos de {% data variables.product.prodname_codeql %} para estos lenguajes, el CLI necesita monitorear la compilación. Al final del proceso de inicialización, el ejecutor reportará el comando que necesitas configurar en el ambiente antes de compilar el código. Necesitas ejecutar este comando antes de llamar al proceso normal de compilación de CI y ejecutar el comando `analyze`.

1. Verifica el repositorio a analizar.
1. Posiciónate en el directorio donde se seleccionó el repositorio.
1. Inicializa el {% data variables.product.prodname_codeql_runner %} y crea bases de datos de {% data variables.product.prodname_codeql %} para los lenguajes detectados.
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
1. Proporciona el script que generó la acción `init` a fin de configurar el entorno para supervisar la compilación. Toma en cuenta el primer punto y espacio en el siguiente extracto de código.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Compilación del código. En macOS, necesitarás agregar un prefijo al comando de compilación con la variable de entorno `$CODEQL_RUNNER`. Para obtener más información, consulta "[Solución de problemas de {% data variables.product.prodname_codeql_runner %} en el sistema de CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)".

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Nota**: Si usas una compilación contenedorizada, deberás ejecutar el {% data variables.product.prodname_codeql_runner %} en el contenedor donde tiene lugar la tarea de compilación.

{% endnote %}

## Información adicional

- "[Configuración del {% data variables.product.prodname_codeql_runner %} en el sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[Solución de problemas del {% data variables.product.prodname_codeql_runner %} en el sistema de CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"

{% else %}

## Acerca de {% data variables.product.prodname_codeql_runner %}

El {% data variables.product.prodname_codeql_runner %} ahora es obsoleto. La versión 2.7.6 de la [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) tiene paridad de características completa.

Para obtener información sobre la migración a {% data variables.product.prodname_codeql_cli %}, vea "[Migración del ejecutor de CodeQL a la CLI de CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

## Información adicional

- [Desuso del ejecutor de CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) en el blog de GitHub

{% endif %}
