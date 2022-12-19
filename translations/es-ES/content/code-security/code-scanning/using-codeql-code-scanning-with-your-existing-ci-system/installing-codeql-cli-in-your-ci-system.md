---
title: Instalar el CLI de CodeQL en tu sistema de IC
shortTitle: Install CodeQL CLI
intro: 'Puedes instalar el {% data variables.product.prodname_codeql_cli %} y utilizarlo para llevar a cabo el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: 3d7c7dc3451b844b33fe0b14fd07f9a18ec81b10
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884546'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de utilizar el {% data variables.product.prodname_codeql_cli %} para el {% data variables.product.prodname_code_scanning %}

Puedes usar la {% data variables.product.prodname_codeql_cli %} para ejecutar {% data variables.product.prodname_code_scanning %} en el código que estás procesando en un sistema de integración continua (CI) de terceros. {% data reusables.code-scanning.about-code-scanning %} Para obtener información, consulta "[Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)". Para obtener especificaciones recomendadas (RAM, núcleos de CPU y disco) para ejecutar el análisis de {% data variables.product.prodname_codeql %}, consulta "[Recursos de hardware recomendados para ejecutar {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)".

{% data reusables.code-scanning.what-is-codeql-cli %}

Como alternativa, puedes utilizar las {% data variables.product.prodname_actions %} en tu sistema de IC, o al {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para obtener información sobre {% data variables.product.prodname_code_scanning %} mediante acciones, consulta "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)". Para obtener información general sobre las opciones de los sistemas de CI, consulta "[Acerca del {% data variables.product.prodname_code_scanning %} de CodeQL en el sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

## Descarga de {% data variables.product.prodname_codeql_cli %}

Debes descargar el conjunto de {% data variables.product.prodname_codeql %} desde https://github.com/github/codeql-action/releases. La agrupación contiene lo siguiente:

- El producto de {% data variables.product.prodname_codeql_cli %}
- Una versión compatible de las consultas y bibliotecas de https://github.com/github/codeql
- Versiones precompiladas de todas las consultas incluidas en la agrupación

{% ifversion ghes or ghae %}

{% note %} Para {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }},{% endif %}, se recomienda la versión de {% data variables.product.prodname_codeql_cli %} {% data variables.product.codeql_cli_ghes_recommended_version %}.
{% endnote %}

{% endif %}

Siempre debes utilizar Siempre debes utilizar el paquete de {% data variables.product.prodname_codeql %}, ya que este garantiza la compatibilidad y también te da un rendimiento mucho mejor que una descarga independiente del {% data variables.product.prodname_codeql_cli %} y una verificación de las consultas de {% data variables.product.prodname_codeql %}. Si solo vas a ejecutar la CLI en una plataforma específica, descarga el archivo `codeql-bundle-PLATFORM.tar.gz` adecuado. Como alternativa, puedes descargar `codeql-bundle.tar.gz`, que contiene la CLI para todas las plataformas compatibles.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC

Necesitas habilitar el contenido integral del paquete de {% data variables.product.prodname_codeql_cli %} para cada servidor de IC en el que quieras ejecutar el análiss del {% data variables.product.prodname_code_scanning %} de CodeQL. Por ejemplo, puedes configurar cada servidor para copiar el paquete desde una ubicación intera y centrar y extraerlo. Como alternativa, puedes utilizar la API de REST para obtener el paquete directamente desde {% data variables.product.prodname_dotcom %} para garantizar que te beneificarás de las últimas mejoras a las consultas. Las actualizaciones del {% data variables.product.prodname_codeql_cli %} se lanzan cada 2 o 3 semanas. Por ejemplo:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

Después de extraer el paquete de {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el archivo ejecutable `codeql` en el servidor:

- Ejecutando `/<extraction-root>/codeql/codeql`, donde `<extraction-root>` es la carpeta donde has extraído el paquete {% data variables.product.prodname_codeql_cli %}.
- Agregando `/<extraction-root>/codeql` a `PATH`, para poder ejecutar el archivo ejecutable simplemente como `codeql`.

## Probar la configuración del {% data variables.product.prodname_codeql_cli %}

Después de que extraes el paquete de {% data variables.product.prodname_codeql_cli %}, puedes ejecutar el siguiente comando para verificar que el CLI esté configurado correctamente para crear y analizar bases de datos.

- `codeql resolve qlpacks` si `/<extraction-root>/codeql` está en `PATH`.
- En caso contrario, es `/<extraction-root>/codeql/codeql resolve qlpacks`.

**Extraer desde una salida satisfactoria:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

Debes verificar que la salida contenga los lenguajes esperados y también que la ubicación del directorio para el archivo de qlpack sea correcta. La ubicación debe ser dentro del paquete de {% data variables.product.prodname_codeql_cli %} extraído, que se muestra anteriormente como `<extraction root>`, a menos que estés utilizando una restauración de `github/codeql`. Si el {% data variables.product.prodname_codeql_cli %} no es capaz de localizar los qlpacks para los lenguajes esperados, verifica que hayas descargado el paquete de {% data variables.product.prodname_codeql %} y no una copia independiente del {% data variables.product.prodname_codeql_cli %}.

## Generar un token para autenticarse con {% data variables.product.product_name %}

Cada servidor de IC necesita una {% data variables.product.prodname_github_app %} o un token de acceso personal para que utilice el {% data variables.product.prodname_codeql_cli %} para cargar los resultados a {% data variables.product.product_name %}. Debes usar un token de acceso o {% data variables.product.prodname_github_app %} con el permiso de escritura `security_events`. Si los servidores de IC utilizan un token con este alcance para verificar los repositorios de {% data variables.product.product_name %}, podrías permitir potencialmente que {% data variables.product.prodname_codeql_cli %} utilice el mismo token. De lo contrario, crea un token nuevo con el permiso de escritura `security_events` y agrégalo al almacén de secretos del sistema de CI. Para obtener información, consulta "[Compilación de {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" y "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

## Pasos siguientes

Ahora estás listo para configurar el sistema de IC para que ejecute el análisis de {% data variables.product.prodname_codeql %}, genere resultados y los cargue en {% data variables.product.product_name %} donde dichos resultados se empatarán con una rama o solicitud de cambios y se mostrarán como alertas del {% data variables.product.prodname_code_scanning %}. Para obtener información detallada, consulta "[Configuración de {% data variables.product.prodname_codeql_cli %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)".
