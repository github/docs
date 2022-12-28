---
title: Configurar el ejecutor de CodeQL en tu sistema de IC
shortTitle: Configure CodeQL runner
intro: 'Puedes configurar la forma en la que {% data variables.code-scanning.codeql_runner %} escanea el código en tu proyecto y en la que carga los resultados a {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161074'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de configurar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC

Para integrar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC, puedes utilizar el {% data variables.code-scanning.codeql_runner %}. Para más información, vea "[Ejecución de {% data variables.code-scanning.codeql_runner %} en el sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

En general, se invoca el {% data variables.code-scanning.codeql_runner %} de la siguiente manera.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depende de si ha descargado el {% data variables.code-scanning.codeql_runner %} en el sistema de CI. `codeql-runner-OS` depende del sistema operativo que use.
Hay tres versiones de {% data variables.code-scanning.codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos` y `codeql-runner-win`, para Linux, macOS y Windows, respectivamente. 

Para personalizar la forma en que {% data variables.code-scanning.codeql_runner %} examina el código, puede usar marcas, como `--languages` y `--queries`, o bien puede especificar valores personalizados en un archivo de configuración independiente.

## Escanear las solicitudes de extracción

El escanear el código cada que se crea una solicitud de cambios previene que los desarrolladores introduzcan vulnerabilidades y errores nuevos a este.

Para examinar una solicitud de incorporación de cambios, ejecute el comando `analyze` y use la marca `--ref` para especificar la solicitud de incorporación de cambios. La referencia es `refs/pull/<PR-number>/head` o `refs/pull/<PR-number>/merge`, en función de si ha extraído del repositorio la confirmación HEAD de la rama de solicitud de incorporación de cambios o una confirmación de combinación con la rama base.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**Nota**: Si analiza código con una herramienta de terceros y quiere que los resultados aparezcan como comprobaciones de solicitudes de incorporación de cambios, debe ejecutar el comando `upload` y usar la marca `--ref` para especificar la solicitud de incorporación de cambios en lugar de la rama. La referencia es `refs/pull/<PR-number>/head` o `refs/pull/<PR-number>/merge`.

{% endnote %}

## Invalidar la detección automática de lenguaje

El {% data variables.code-scanning.codeql_runner %} detecta automáticamente y escanea el código que se ha escrito en los lenguajes compatibles.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para invalidar la detección automática del lenguaje, ejecute el comando `init` con la marca `--languages`, seguido de una lista separada por comas de palabras clave del lenguaje. Las palabras clave para los lenguajes compatibles son {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

Para agregar una o varias consultas, pase una lista separada por comas de rutas a la marca `--queries` del comando `init`. También puedes especificar consultas adicionales en un archivo de configuración.

Si también usa un archivo de configuración para los valores personalizados y además especifica consultas adicionales con la marca `--queries`, {% data variables.code-scanning.codeql_runner %} utilizará las consultas adicionales especificadas con la marca <nobr>`--queries`</nobr> en lugar de las del archivo de configuración.
Si quiere ejecutar el conjunto combinado de consultas adicionales especificadas con la marca y en el archivo de configuración, use el símbolo`+` como prefijo del valor que se pasa a <nobr>`--queries`</nobr>.
Para más información, vea "[Uso de un archivo de configuración personalizado](#using-a-custom-configuration-file)".

En el ejemplo siguiente, el símbolo `+` garantiza que el {% data variables.code-scanning.codeql_runner %} use las consultas adicionales junto con cualquier otra que se especifique en el archivo de configuración al que se hace referencia.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## Uso de un archivo de configuración personalizado

En vez de pasar información adicional a los comandos de {% data variables.code-scanning.codeql_runner %}, puedes especificar ajustes personalizados en un archivo de configuración por separado.

El archivo de configuración es un archivo de YAML. Utiliza una sintaxis similar a aquella del flujo de trabajo para {% data variables.product.prodname_actions %}, de acuerdo como se ilustra en los siguientes ejemplos. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)". 

Use la marca `--config-file` del comando `init`para especificar el archivo de configuración. El valor <nobr>`--config-file`</nobr> es la ruta al archivo de configuración que quiere usar. En este ejemplo se carga el archivo de configuración _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### Archivos de configuración de ejemplo

{% data reusables.code-scanning.example-configuration-files %}

## Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

En los lenguajes compilados C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} y Java, {% data variables.product.prodname_codeql %} compila el código antes de analizarlo. {% data reusables.code-scanning.analyze-go %}

Para varios sistemas de compilación comunes, el {% data variables.code-scanning.codeql_runner %} puede compilar el código automáticamente. Para intentar compilar el código automáticamente, ejecute `autobuild` entre los pasos `init` y `analyze`. Nota que, si tu repositorio necesita una versión específica de una herramienta de compilación, puede que necesites instalar dicha herramienta manualmente primero. 

El proceso `autobuild` solo intenta crear _un_ lenguaje compilado para un repositorio. El lenguaje que se selecciona automáticamente para su análisis es aquél presente en más archivos. Si quiere elegir un lenguaje de forma explícita, use la marca `--language` del comando `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Si el comando `autobuild` no puede compilar el código, puede ejecutar los pasos de compilación personalmente, entre los pasos `init` y `analyze`. Para más información, vea "[Ejecución de {% data variables.code-scanning.codeql_runner %} en el sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example)".

## Carga de datos de {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}

De manera predeterminada, {% data variables.code-scanning.codeql_runner %} carga los resultados de {% data variables.product.prodname_code_scanning %} al ejecutar el comando `analyze`. También puede cargar archivos SARIF por separado mediante el comando `upload`.

Una vez que hayas cargado los datos, {% data variables.product.prodname_dotcom %} mostrará las alertas en tu repositorio. 
- Si ha realizado la carga en una solicitud de incorporación de cambios, por ejemplo `--ref refs/pull/42/merge` o `--ref refs/pull/42/head`, los resultados aparecen como alertas en una comprobación de solicitud de incorporación de cambios. Para más información, vea "[Evaluación de prioridades de alertas de análisis de código en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Si ha realizado la carga en una rama, por ejemplo `--ref refs/heads/my-branch`, los resultados aparecen en la pestaña **Seguridad** del repositorio. Para más información, vea "[Administración de alertas de análisis de código para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Referencia de comando {% data variables.code-scanning.codeql_runner %}

El {% data variables.code-scanning.codeql_runner %} es compatible con los siguientes comandos y marcadores.

### `init`

Inicializa el {% data variables.code-scanning.codeql_runner %} y crea una base de datos de {% data variables.product.prodname_codeql %} para analizar cada lenguaje.

| Marca | Obligatorio | Valor de entrada |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nombre del repositorio a inicializar. |
| `--github-url` | ✓ | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lee el token de las {% data variables.product.prodname_github_apps %} o el {% data variables.product.pat_generic %} desde la entrada estándar. |
| `--languages` | | Lista separada por comas de los lenguajes a analizar. Predeterminadamente, el {% data variables.code-scanning.codeql_runner %} detecta y analiza todos los lenguajes compatibles en el repositorio. |
| `--queries` | | Lista separada por comas de las consultas adicionales a ejecutar, adicionalmente a la suite predeterminada de consultas de seguridad. Esto invalida el valor `queries` en el archivo de configuración personalizado. |
| `--config-file` | | Ruta al archivo de configuración personalizado. |
| `--codeql-path` | | Ruta a una copia del CLI ejecutable de {% data variables.product.prodname_codeql %} a utilizar. Predeterminadamente, el {% data variables.code-scanning.codeql_runner %} descarga una copia. |
| `--temp-dir` | | Directorio donde se almacenan los archivos temporales. El valor predeterminado es `./codeql-runner`. |
| `--tools-dir` | | Directorio donde las herramientas de {% data variables.product.prodname_codeql %} y otros archivos se almacenan entre ejecuciones. El predeterminado es un subdirectorio del directorio principal. |
| <nobr>`--checkout-path`</nobr> | | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo. | 
| `--debug` | | Ninguno. Imprime una salida más verbosa. |
| <nobr>`--trace-process-name`</nobr> | | Avanzado y solo para Windows. Nombre del proceso en donde se inyecta un rastreador de Windows para este proceso. |
| <nobr>`--trace-process-level`</nobr> | | Avanzado y solo para Windows. Cantidad de niveles ascendentes del proceso padre en donde se inyecta un rastreador de Windows para este proceso. |
| `-h`, `--help` | | Ninguno. Muestra la ayuda para el comando. |

### `autobuild`

Intenta compilar el código para los lenguajes compilados de C/C++, C#, y Java. Para estos lenguajes, {% data variables.product.prodname_codeql %} compila el código antes de analizarlo. Ejecute `autobuild` entre los pasos `init` y `analyze`.

| Marca | Obligatorio | Valor de entrada |
| ---- |:--------:| ----------- |
| `--language` | | El lenguaje a compilar. Predeterminadamente, el {% data variables.code-scanning.codeql_runner %} compila el lenguaje con más archivos. |
| <nobr>`--temp-dir`</nobr> | | Directorio donde se almacenan los archivos temporales. El valor predeterminado es `./codeql-runner`. |
| `--debug` | | Ninguno. Imprime una salida más verbosa. |
| <nobr> `-h`, `--help`</nobr> | | Ninguno. Muestra la ayuda para el comando. |

### `analyze`

Analiza el código en las bases de datos de {% data variables.product.prodname_codeql %} y carga los resultados a {% data variables.product.product_name %}.

| Marca | Obligatorio | Valor de entrada |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nombre del repositorio que se analizará. |
| `--commit` | ✓ | SHA de la confirmación que se analizará. En Git y en Azure DevOps, esto se corresponde al valor de `git rev-parse HEAD`. En Jenkins, esto se corresponde a `$GIT_COMMIT`. |
| `--ref` | ✓ | Nombre de la referencia que se va a analizar, por ejemplo `refs/heads/main` o `refs/pull/42/merge`. En Git o en Jenkins, esto se corresponde al valor de `git symbolic-ref HEAD`. En Azure DevOps, esto se corresponde a `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lee el token de las {% data variables.product.prodname_github_apps %} o el {% data variables.product.pat_generic %} desde la entrada estándar. |
| <nobr>`--checkout-path`</nobr> | | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo.  |
| `--no-upload` | | Ninguno. Impide que {% data variables.code-scanning.codeql_runner %} cargue los resultados a {% data variables.product.product_name %}. |
| `--output-dir` | | Directorio en donde se almacenan los archivos SARIF de salida. El predeterminado está en el directorio de archivos temporales. |
| `--ram` | | Cantidad de memoria a utilizar cuando ejecutes consultas. El valor predeterminado es utilizar toda la memoria disponible. |
| <nobr>`--no-add-snippets`</nobr> | | Ninguno. Excluye los fragmentos de código de la salida de SARIF. |
| <nobr>`--category`<nobr> | | Categoría para incluir el archivo de resultados SARIF para este análisis. La categoría puede utilizarse pra distinguir análisis múltiples de la misma herramienta y confirmación, pero que se llevan a cabo en lenguajes diferentes o en partes diferentes del código. Este valor aparecerá en la propiedad `<run>.automationDetails.id` de SARIF v2.1.0. |
| `--threads` | | Cantidad de hilos a utilizar cuando se ejecutan las consultas. El valor predeterminado es utilizar todos los núcleos disponibles. |
| `--temp-dir` | | Directorio donde se almacenan los archivos temporales. El valor predeterminado es `./codeql-runner`. |
| `--debug` | | Ninguno. Imprime una salida más verbosa. |
| `-h`, `--help` | | Ninguno. Muestra la ayuda para el comando. |

### `upload`

Carga los archivos SARIF a {% data variables.product.product_name %}.

{% note %}

**Nota**: Si analiza código con el ejecutor de CodeQL, el comando `analyze` carga los resultados de SARIF de forma predeterminada. Puede usar el comando `upload` para cargar los resultados SARIF que han generado otras herramientas.

{% endnote %}

| Marca | Obligatorio | Valor de entrada |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | El archivo SARIF a cargar, o un directorio que contiene varios archivos SARIF. |
| `--repository` | ✓ | Nombre del repositorio que se analizó. |
| `--commit` | ✓ | SHA de la confirmación que se analizó. En Git y en Azure DevOps, esto se corresponde al valor de `git rev-parse HEAD`. En Jenkins, esto se corresponde a `$GIT_COMMIT`. |
| `--ref` | ✓ | Nombre de la referencia que se ha analizado, por ejemplo `refs/heads/main` o `refs/pull/42/merge`. En Git o en Jenkins, esto se corresponde al valor de `git symbolic-ref HEAD`. En Azure DevOps, esto se corresponde a `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL de la instancia de {% data variables.product.prodname_dotcom %} donde se hospeda tu repositorio. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lee el token de las {% data variables.product.prodname_github_apps %} o el {% data variables.product.pat_generic %} desde la entrada estándar. |
| <nobr>`--checkout-path`</nobr> | | La ruta a la confirmación de salida de tu repositorio. El predeterminado es el directorio de trabajo.  |
| `--debug` | | Ninguno. Imprime una salida más verbosa. |
| `-h`, `--help` | | Ninguno. Muestra la ayuda para el comando. |
