---
title: Solucionar problemas del escaneo de código de CodeQL en tu sistema de IC
shortTitle: Solucionar problemas en tu IC
intro: 'Si estás teniendo problemas con el {% data variables.product.prodname_codeql_runner %}, puedes solucionarlos si utilizas estos tips.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### El comando `init` tarda demasiado

Antes de que el {% data variables.product.prodname_codeql_runner %} pueda compilar y analizar código, necesita tener acceso al paquete de {% data variables.product.prodname_codeql %}, el cual contiene el CLI y las bibliotecas de {% data variables.product.prodname_codeql %}.

Cuando utilizas el {% data variables.product.prodname_codeql_runner %} por primera vez en tu máquina, el comando `init` descargará el paquete de {% data variables.product.prodname_codeql %} a tu máquina. Esta descarga puede demorar algunos minutos. El paquete de {% data variables.product.prodname_codeql %} se guarda en el caché entre las ejecuciones, así que si utilizas el {% data variables.product.prodname_codeql_runner %} nuevamente en la misma máquina, no descargará el paquete de {% data variables.product.prodname_codeql %} nuevamente.

Para evitar esta descarga automática, puedes descargar manualmente el paquete de {% data variables.product.prodname_codeql %} a tu máquina ye specifica la ruta utilizando el marcador de `--codeql-path` del comando `init`.

### No se encontró código durante la compilación

Si el comando `analyze` para el {% data variables.product.prodname_codeql_runner %} falla con un error de `No source code was seen during the build`, esto indica que {% data variables.product.prodname_codeql %} no pudo monitorear tu código. Hay muchas razones que podrían explicar esta falla.

1. La detección automática del lenguaje identificó un lenguaje compatible, pero no hay código analizable en dicho lenguaje dentro del repositorio. Un ejemplo típico es cuando nuestro servicio de detección de lenguaje encuentra un archivo que se asocia con un lenguaje de programación específico como un archivo `.h`, o `.gyp`, pero no existe el código ejecutable correspondiente a dicho lenguaje en el repositorio. Para resolver el problema, puedes definir manualmente los lenguajes que quieres analizar si utilizas el marcador `--languages` del comando `init`. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system)".

1. Estás analizando un lenguaje compilado sin utilizar el comando `autobuild` y ejecutaste los pasos de compilación después del paso `init`. Para que la compilación funcione, debes configurar el ambiente para que el {% data variables.product.prodname_codeql_runner %} pueda monitorear el código. El comando `init` genera instrucciones de cómo exportar las variables de ambiente requeridas, así que puedes copiar y ejecutar el script después de que has ejecutado el comando `init`.
   - En macOS y Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - En Windows, utilizando el shell de comandos (`cmd`) o un archivo de lote (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - En Windows, utilizando PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   Las variables de ambiente también se almacenan en el archivo `codeql-runner/codeql-env.json`. Este archivo contiene solo un objeto de JSON que mapea las claves de variable de ambiente a valores. Si no puedes ejecutar el script que generó el comando `init`, entonces puedes utilizar los datos en formato JSON.

   {% note %}

   **Nota:** Si utilizaste el marcador `--temp-dir` flag del comando `init` para especificar un directorio personalizado para los archivos temporales, la ruta hacia los archivos de `codeql-env` podría ser diferente.

   {% endnote %}

1. Estás analizando un lenguaje compilado en macOS sin utilizar el comando `autobuild` y ejecutas los pasos de compilación tú mismo después del paso `init`. Si está habilitada la SIP (Protección Integral del Sistema, por sus siglas en inglés), que es lo predeterminado en las versiones más recientes de OSX, el análisis podría fallar. Para arreglar esto, usa un prefijo en el comando de la compilación con la variable de ambiente `$CODEQL_RUNNER`. Por ejemplo, si tu comando de compilación es `cmd arg1 arg2`, debes ejecutar `$CODEQL_RUNNER cmd arg1 arg2`.

1. El código se compila en un contenedor o en una máquina independiente. Si utilizas una compilación que ya esté en un contenedor o si terciarizas la compilación a otra máquina, asegúrate de ejecutar el {% data variables.product.prodname_codeql_runner %} en el contenedor o en la máquina en donde toma lugar tu tarea de compilación. Para obtener más información, consulta la sección "[Ejecutar el escaneo de código de CodeQL en un contenedor](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container)".
