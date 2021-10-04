---
title: Instalar el CLI de CodeQL en tu sistema de IC
shortTitle: Instalar el CLI de CodeQL
intro: 'Puedes instalar el {% data variables.product.prodname_codeql_cli %} y utilizarlo para llevar a cabo el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de utilizar el {% data variables.product.prodname_codeql_cli %} para el {% data variables.product.prodname_code_scanning %}

Puedes utilizar el {% data variables.product.prodname_codeql_cli %} para ejecutar el {% data variables.product.prodname_code_scanning %} en el código que estás procesando en un sistema de integración continua (IC) de terceros. {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.what-is-codeql-cli %}

Como alternativa, puedes utilizar las {% data variables.product.prodname_actions %} en tu sistema de IC, o al {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para obtener más información sobre el {% data variables.product.prodname_code_scanning %} utilizando acciones, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)". Para encontrar un resumen de las opciones para los sistemas de IC, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %} de CodeQL en tu sistema de IC](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

## Descargar el {% data variables.product.prodname_codeql_cli %}

Debes descargar el paquete de {% data variables.product.prodname_codeql %} desde https://github.com/github/codeql-action/releases. Este paquete contiene:

- El producto de {% data variables.product.prodname_codeql_cli %}
- Una versión compatible de las consultas y bibliotecas de https://github.com/github/codeql
- Versiones precompiladas de todas las consultas que se incluyen en el paquete

Siempre debes utilizar Siempre debes utilizar el paquete de {% data variables.product.prodname_codeql %}, ya que este garantiza la compatibilidad y también te da un rendimiento mucho mejor que una descarga independiente del {% data variables.product.prodname_codeql_cli %} y una verificación de las consultas de {% data variables.product.prodname_codeql %}. Si solo ejecutarás el CLI en una plataforma específica, descarga el archivo `codeql-bundle-PLATFORM.tar.gz` adecuado. Como alternativa, puedes descargar el `codeql-bundle.tar.gz` que contiene el CLI para todas las plataformas.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC

Necesitas habilitar el contenido integral del paquete de {% data variables.product.prodname_codeql_cli %} para cada servidor de IC en el que quieras ejecutar el análiss del {% data variables.product.prodname_code_scanning %} de CodeQL. Por ejemplo, puedes configurar cada servidor para copiar el paquete desde una ubicación intera y centrar y extraerlo. Como alternativa, puedes utilizar la API de REST para obtener el paquete directamente desde {% data variables.product.prodname_dotcom %} para garantizar que te beneificarás de las últimas mejoras a las consultas. Las actualizaciones del {% data variables.product.prodname_codeql_cli %} se lanzan cada 2 o 3 semanas. Por ejemplo:

```shell
$ wget https://{% ifversion fpt %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

Después de que extraes el paquete del {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el ejecutable del `codeql` en el servidor:

- Al ejecutar `/<extraction-root>/codeql/codeql`, en donde `<extraction-root>` es la carpeta en donde extrajiste el paquete de {% data variables.product.prodname_codeql_cli %}.
- Si agregas `/<extraction-root>/codeql` a tu `PATH` para que puedas ejecutar los archivos ejecutables como `codeql` simplemente.

## Probar la configuración del {% data variables.product.prodname_codeql_cli %}

Después de que extraes el paquete de {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el siguiente comando para verificar que el CLI esté configurado correctamente para crear y analizar bases de datos.

- `codeql resolve qlpacks` if `/<extraction-root>/codeql` is on the `PATH`.
- `/<extraction-root>/codeql/codeql resolve qlpacks` otherwise.

**Extraer desde una salida exitosa:**
```
codeql-cpp (/<extraction-root>/codeql/qlpacks/codeql-cpp)
codeql-cpp-examples (/<extraction-root>/codeql/qlpacks/codeql-cpp-examples)
codeql-cpp-upgrades (/<extraction-root>/codeql/qlpacks/codeql-cpp-upgrades)
codeql-csharp (/<extraction-root>/codeql/qlpacks/codeql-csharp)
codeql-csharp-examples (/<extraction-root>/codeql/qlpacks/codeql-csharp-examples)
codeql-csharp-upgrades (/<extraction-root>/codeql/qlpacks/codeql-csharp-upgrades)
codeql-go (/<extraction-root>/codeql/qlpacks/codeql-go)
codeql-go-examples (/<extraction-root>/codeql/qlpacks/codeql-go-examples)
codeql-go-upgrades (/<extraction-root>/codeql/qlpacks/codeql-go-upgrades)
codeql-java (/<extraction-root>/codeql/qlpacks/codeql-java)
codeql-java-examples (/<extraction-root>/codeql/qlpacks/codeql-java-examples)
codeql-java-upgrades (/<extraction-root>/codeql/qlpacks/codeql-java-upgrades)
codeql-javascript (/<extraction-root>/codeql/qlpacks/codeql-javascript)
codeql-javascript-examples (/<extraction-root>/codeql/qlpacks/codeql-javascript-examples)
codeql-javascript-upgrades (/<extraction-root>/codeql/qlpacks/codeql-javascript-upgrades)
codeql-python (/<extraction-root>/codeql/qlpacks/codeql-python)
codeql-python-examples (/<extraction-root>/codeql/qlpacks/codeql-python-examples)
codeql-python-upgrades (/<extraction-root>/codeql/qlpacks/codeql-python-upgrades)
...
```

Debes verificar que la salida contenga los lenguajes esperados y también que la ubicación del directorio para el archivo de qlpack sea correcta. La ubicación debe estar dentro del paquete del {% data variables.product.prodname_codeql_cli %} que se extrajo, el cual se muestra anteriormente como `<extraction root>`, a menos de que hayas utilizado una verificación de `github/codeql`. Si el {% data variables.product.prodname_codeql_cli %} no es capaz de localizar los qlpacks para los lenguajes esperados, verifica que hayas descargado el paquete de {% data variables.product.prodname_codeql %} y no una copia independiente del {% data variables.product.prodname_codeql_cli %}.

## Generar un token para autenticarse con {% data variables.product.product_name %}

Cada servidor de IC necesita una {% data variables.product.prodname_github_app %} o un token de acceso personal para que utilice el {% data variables.product.prodname_codeql_cli %} para cargar los resultados a {% data variables.product.product_name %}. Debes utilizar un token de acceso o una {% data variables.product.prodname_github_app %} con el permiso de escritura `security_events`. Si los servidores de IC utilizan un token con este alcance para verificar los repositorios de {% data variables.product.product_name %}, podrías permitir potencialmente que {% data variables.product.prodname_codeql_cli %} utilice el mismo token. De lo contrario, debes crear un token nuevo con el permiso de escritura `security_events` y agregarlo al almacenamiento secreto del sistema de IC. Para obtener más información, consulta las secciones "[Crear {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" y "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

## Pasos siguientes

Ahora estás listo para configurar el sistema de IC para que ejecute el análisis de {% data variables.product.prodname_codeql %}, genere resultados y los cargue en {% data variables.product.product_name %} donde dichos resultados se empatarán con una rama o solicitud de cambios y se mostrarán como alertas del {% data variables.product.prodname_code_scanning %}. Para obtener información detallada, consulta la sección "[Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)".
