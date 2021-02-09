---
title: Configurar el escaneo de còdigo de CodeQL en tu sistema de IC
shortTitle: Configuración en tu IC
intro: 'Puedes configurar la forma en la que {% data variables.product.prodname_codeql_runner %} escanea el código en tu proyecto y en la que carga los resultados a {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Acerca de configurar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC

Para integrar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC, puedes utilizar el {% data variables.product.prodname_codeql_runner %}. Para obtener màs informaciòn, consulta la secicòn "[Ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

En general, se invoca el {% data variables.product.prodname_codeql_runner %} de la siguiente manera.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depende de si descargaste el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC. `codeql-runner-OS` depende del sistema operativo que utilices. Hay tres versiones del {% data variables.product.prodname_codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos`, y `codeql-runner-win`, para sistemas Linux, macOS y Windows respectivamente.

Para personalizar la forma en la que el {% data variables.product.prodname_codeql_runner %} escanea tu código, puedes utilizar marcadores, tales como `--languages` y `--queries`,o puedes especificar configuraciones personalizadas en un archivo de configuración por separado.

### Invalidar la detección automática de lenguaje

El {% data variables.product.prodname_codeql_runner %} detecta automáticamente y escanea el código que se ha escrito en los lenguajes compatibles.

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para anular la detección automática de lenguajes, ejecuta el comando `init` con el marcador `--languages`, seguido de una lista separada por comas de las palabras clave de los lenguajes. Las palabras clave para los lenguajes compatibles son `cpp`, `csharp`, `go`, `java`, `javascript`, y `python`.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

### Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites %}

Para agregar una o más consultas, pasa una lista separada por comas de las rutas al marcador `--queries` del comando `init`. También puedes especificar consultas adicionales en un archivo de configuración.

Si también estás usando un archivo de configuración para los ajustes personalizados y también estás especificando consultas adicionales con el marcador de `--queries`, el {% data variables.product.prodname_codeql_runner %} utilizará consultas adicionales que se especifican con el marcador <nobr>`--queries`</nobr> en vez de con cualquier otro en el archivo de configuración. Si quieres ejecutar el conjunto combinado de consultas adicionales que se especifican con el marcador y en el archivo de configuración, usa un prefijo en el valor que se pasa a <nobr>`--queries`</nobr> con el símbolo `+`. Para encontrar ejemplos de archivos de configuración, consulta la sección "[Ejemplos de archivos de configuración](#example-configuration-files)".

En el siguiente ejemplo, el símbolo `+` garantiza que el {% data variables.product.prodname_codeql_runner %} utilizará consultas adicionales junto con cualquier otra consulta que se especifique en el archivo de configuración referenciado.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Utilizar una herramienta de escaneo de código de terceros

En vez de pasar información adicional a los comandos de {% data variables.product.prodname_codeql_runner %}, puedes especificar ajustes personalizados en un archivo de configuración por separado.

El archivo de configuración es un archivo de YAML. Utiliza una sintaxis similar a aquella del flujo de trabajo para {% data variables.product.prodname_actions %}, de acuerdo como se ilustra en los siguientes ejemplos. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".

Utiliza el marcador `--config-file` del comando `init` para especificar el archivo de configuración. El valor de <nobr>`--config-file`</nobr> es la ruta al archivo de configuración que quieres utilizar. Este ejemplo carga el archivo de configuración _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

#### Ejemplos de archivos de configuración

{% data reusables.code-scanning.example-configuration-files %}

### Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

Para los lenguajes C/C++, C#, y Java, {% data variables.product.prodname_codeql %} compila el código antes de analizarlo. {% data reusables.code-scanning.analyze-go %}

Para varios sistemas de compilación comunes, el {% data variables.product.prodname_codeql_runner %} puede compilar el código automáticamente. Para intentar compilar el código automáticamente, ejecuta `autobuild` entre los pasos de `init` y `analyze`. Nota que, si tu repositorio necesita una versión específica de una herramienta de compilación, puede que necesites instalar dicha herramienta manualmente primero.

El proceso de `autobuild` solo intenta siempre compilar _un_ solo lenguaje compilado para un repositorio. El lenguaje que se selecciona automáticamente para su análisis es aquél presente en más archivos. Si quieres elegir un lenguaje explícitamente, utiliza el marcador `--language` del comando `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Si el comando `autobuild` no puede compilar tu código, tú mismo puedes ejecutar los pasos de compilación entre los pasos de `init` y `analyze`. Para obtener màs informaciòn, consulta la secciòn "[Ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system#compiled-language-example)".

### Puedes escribir un archivo de configuración para {% data variables.product.prodname_code_scanning %}.

Predeterminadamente, el {% data variables.product.prodname_codeql_runner %} carga los resultados del {% data variables.product.prodname_code_scanning %} cuando ejecutas el comando `analyze`. También puedes cargar archivos de SARIF por separado si utilizas el comando `upload`.

Una vez que hayas cargado los datos, {% data variables.product.prodname_dotcom %} mostrará las alertas en tu repositorio. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

### Referencia de comandos de {% data variables.product.prodname_codeql_runner %}

El {% data variables.product.prodname_codeql_runner %} es compatible con los siguientes comandos y marcadores.

#### `init`

Inicializa el {% data variables.product.prodname_codeql_runner %} y crea una base de datos de {% data variables.product.prodname_codeql %} para analizar cada lenguaje.

| Marcador                         | Requerido | Valor de entrada                                                                                                                                                                                         |
| -------------------------------- |:---------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repositorio`                  |     ✓     | Nombre del repositorio a inicializar.                                                                                                                                                                    |
| `--github-url`                   |     ✓     | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio.                                                                                                     |
| `--github-auth`                  |     ✓     | Un token de {% data variables.product.prodname_github_apps %} o un token de acceso personal.                                                                                                           |
| `--languages`                    |           | Lista separada por comas de los lenguajes a analizar. Predeterminadamente, el {% data variables.product.prodname_codeql_runner %} detecta y analiza todos los lenguajes compatibles en el repositorio. |
| `--queries`                      |           | Lista separada por comas de las consultas adicionales a ejecutar, adicionalmente a la suite predeterminada de consultas de seguridad.                                                                    |
| `--config-file`                  |           | Ruta al archivo de configuración personalizado.                                                                                                                                                          |
| `--codeql-path`                  |           | Ruta a una copia del CLI ejecutable de {% data variables.product.prodname_codeql %} a utilizar. Predeterminadamente, el {% data variables.product.prodname_codeql_runner %} descarga una copia.        |
| `--temp-dir`                     |           | Directorio donde se almacenan los archivos temporales. El predeterminado es _./codeql-runner_.                                                                                                           |
| `--tools-dir`                    |           | Directorio donde las herramientas de {% data variables.product.prodname_codeql %} y otros archivos se almacenan entre ejecuciones. El predeterminado es un subdirectorio del directorio principal.       |
| <nobr>`--checkout-path`</nobr> |           | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo.                                                                                                    |
| `--debug`                        |           | Ninguno. Imprime una salida más verbosa.                                                                                                                                                                 |
| `-h`, `--help`                   |           | Ninguno. Muestra la ayuda para el comando.                                                                                                                                                               |

#### `autobuild`

Intenta compilar el código para los lenguajes compilados de C/C++, C#, y Java. Para estos lenguajes, {% data variables.product.prodname_codeql %} compila el código antes de analizarlo. Ejecuta `autobuild` entre los pasos de `init` y `analyze`.

| Marcador                    | Requerido | Valor de entrada                                                                                                                            |
| --------------------------- |:---------:| ------------------------------------------------------------------------------------------------------------------------------------------- |
| `--language`                |           | El lenguaje a compilar. Predeterminadamente, el {% data variables.product.prodname_codeql_runner %} compila el lenguaje con más archivos. |
| <nobr>`--temp-dir`</nobr> |           | Directorio donde se almacenan los archivos temporales. El predeterminado es _./codeql-runner_.                                              |
| `--debug`                   |           | Ninguno. Imprime una salida más verbosa.                                                                                                    |
| `-h`, `--help`              |           | Ninguno. Muestra la ayuda para el comando.                                                                                                  |

#### `analyze`

Analiza el código en las bases de datos de {% data variables.product.prodname_codeql %} y carga los resultados a {% data variables.product.product_location %}.

| Marcador                         | Requerido | Valor de entrada                                                                                                                                                                                           |
| -------------------------------- |:---------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repositorio`                  |     ✓     | Nombre del repositorio que se analizará.                                                                                                                                                                   |
| `--commit`                       |     ✓     | SHA de la confirmación que se analizará. En Git y en Azure DevOps, este corresponde al valor de `git rev-parse HEAD`. En Jenkins, este corresponde a `$GIT_COMMIT`.                                        |
| `--ref`                          |     ✓     | Nombre de la referencia a analizar, por ejemplo `refs/heads/main`. En Git y en Jenkins, esto corresponde al valor de `git symbolic-ref HEAD`. En Azure DevOps, esto corresponde a `$(Build.SourceBranch)`. |
| `--github-url`                   |     ✓     | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio.                                                                                                       |
| `--github-auth`                  |     ✓     | Un token de {% data variables.product.prodname_github_apps %} o un token de acceso personal.                                                                                                             |
| <nobr>`--checkout-path`</nobr> |           | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo.                                                                                                      |
| `--no-upload`                    |           | Ninguno. Impide que el {% data variables.product.prodname_codeql_runner %} cargue los resultados a {% data variables.product.product_location %}.                                                        |
| `--output-dir`                   |           | Directorio en donde se almacenan los archivos SARIF de salida. El predeterminado está en el directorio de archivos temporales.                                                                             |
| `--temp-dir`                     |           | Directorio donde se almacenan los archivos temporales. El predeterminado es _./codeql-runner_.                                                                                                             |
| `--debug`                        |           | Ninguno. Imprime una salida más verbosa.                                                                                                                                                                   |
| `-h`, `--help`                   |           | Ninguno. Muestra la ayuda para el comando.                                                                                                                                                                 |

#### `cargar`

Carga los archivos SARIF a {% data variables.product.product_location %}.

| Marcador                         | Requerido | Valor de entrada                                                                                                                                                                                               |
| -------------------------------- |:---------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sarif-file`                   |     ✓     | El archivo SARIF a cargar, o un directorio que contiene varios archivos SARIF.                                                                                                                                 |
| `--repositorio`                  |     ✓     | Nombre del repositorio que se analizó.                                                                                                                                                                         |
| `--commit`                       |     ✓     | SHA de la confirmación que se analizó. En Git y en Azure DevOps, este corresponde al valor de `git rev-parse HEAD`. En Jenkins, este corresponde a `$GIT_COMMIT`.                                              |
| `--ref`                          |     ✓     | Nombre de la referencia que se analizó, por ejemplo `refs/heads/main`. En Git y en Jenkins, esto corresponde al valor de `git symbolic-ref HEAD`. En Azure DevOps, esto corresponde a `$(Build.SourceBranch)`. |
| `--github-url`                   |     ✓     | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio.                                                                                                           |
| `--github-auth`                  |     ✓     | Un token de {% data variables.product.prodname_github_apps %} o un token de acceso personal.                                                                                                                 |
| <nobr>`--checkout-path`</nobr> |           | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo.                                                                                                          |
| `--debug`                        |           | Ninguno. Imprime una salida más verbosa.                                                                                                                                                                       |
| `-h`, `--help`                   |           | Ninguno. Muestra la ayuda para el comando.                                                                                                                                                                     |
