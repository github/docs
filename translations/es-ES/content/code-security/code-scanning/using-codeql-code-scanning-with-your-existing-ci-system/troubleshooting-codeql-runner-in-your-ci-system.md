---
title: Solucionar problemas del ejecutor de CodeQL en tu sistema de IC
shortTitle: Troubleshoot CodeQL runner
intro: 'Si estás teniendo problemas con el {% data variables.code-scanning.codeql_runner %}, puedes solucionarlos si utilizas estos tips.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161170'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## El comando `init` tarda demasiado

Antes de que el {% data variables.code-scanning.codeql_runner %} pueda compilar y analizar código, necesita tener acceso al paquete de {% data variables.product.prodname_codeql %}, el cual contiene la CLI de {% data variables.product.prodname_codeql %} y las bibliotecas de {% data variables.product.prodname_codeql %}.

Al usar {% data variables.code-scanning.codeql_runner %} por primera vez en la máquina, el comando `init` descarga el paquete {% data variables.product.prodname_codeql %}. Esta descarga puede demorar algunos minutos.
El paquete de {% data variables.product.prodname_codeql %} se guarda en el caché entre las ejecuciones, así que si utilizas el {% data variables.code-scanning.codeql_runner %} nuevamente en la misma máquina, no descargará el paquete de {% data variables.product.prodname_codeql %} nuevamente.

Para evitar esta descarga automática, puede descargar manualmente el paquete {% data variables.product.prodname_codeql %} en la máquina y especificar la ruta mediante la marca `--codeql-path` del comando `init`.

## No se encontró código durante la compilación

Si se produce un error `No source code was seen during the build` en el comando `analyze` para {% data variables.code-scanning.codeql_runner %}, esto indica que {% data variables.product.prodname_codeql %} no ha podido supervisar el código. Hay muchas razones que podrían explicar esta error.

1. La detección automática del lenguaje identificó un lenguaje compatible, pero no hay código analizable en dicho lenguaje dentro del repositorio. Un ejemplo típico es cuando nuestro servicio de detección de lenguaje encuentra un archivo asociado a un lenguaje de programación específico, como un archivo `.h` o `.gyp`, pero en el repositorio no existe el código ejecutable correspondiente. Para solucionar el problema, puede definir manualmente los lenguajes que quiere analizar mediante la marca `--languages` del comando `init`. Para más información, vea "[Configuración de {% data variables.code-scanning.codeql_runner %} en el sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)".

1. Va a analizar un lenguaje compilado sin usar el comando `autobuild` y ejecuta los pasos de compilación después del paso `init`. Para que funcione la compilación, debes configurar el ambiente para que el {% data variables.code-scanning.codeql_runner %} pueda monitorear el proceso de compilación. El comando `init` genera instrucciones sobre cómo exportar las variables de entorno necesarias, por lo que puedes copiar y ejecutar el script después de ejecutar el comando `init`.
   - En macOS y Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - En Windows, mediante el shell de comandos (`cmd`) o un archivo por lotes (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - En Windows, utilizando PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   Las variables de entorno también se almacenan en el archivo `codeql-runner/codeql-env.json`. Este archivo contiene solo un objeto de JSON que mapea las claves de variable de ambiente a valores. Si no puede ejecutar el script que ha generado el comando `init`, en su lugar puede usar los datos en formato JSON.

   {% note %}

   **Nota:** Si ha usado la marca `--temp-dir` del comando `init` a fin de especificar un directorio personalizado para los archivos temporales, la ruta a los archivos `codeql-env` podría ser diferente.

   {% endnote %}

1. Va a analizar un lenguaje compilado en macOS sin usar el comando `autobuild` y ejecuta los pasos de compilación después del paso `init`. Si está habilitada la SIP (Protección Integral del Sistema, por sus siglas en inglés), que es lo predeterminado en las versiones más recientes de OSX, el análisis podría fallar. Para corregirlo, use la variable de entorno `$CODEQL_RUNNER` como prefijo del comando de compilación. 
   Por ejemplo, si el comando de compilación es `cmd arg1 arg2`, debe ejecutar `$CODEQL_RUNNER cmd arg1 arg2`.

1. El código se compila en un contenedor o en una máquina independiente. Si utilizas una compilación que ya esté en un contenedor o si externalizas la compilación a otra máquina, asegúrate de ejecutar el {% data variables.code-scanning.codeql_runner %} en el contenedor o en la máquina en donde toma lugar tu tarea de compilación. Para más información, vea "[Ejecución del análisis de código de CodeQL en un contenedor](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
