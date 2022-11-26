---
title: Configuración del flujo de trabajo de CodeQL para lenguajes compilados
shortTitle: Configure compiled languages
intro: 'Puedes configurar cómo {% data variables.product.prodname_dotcom %} utiliza el {% data variables.code-scanning.codeql_workflow %} para escanear el código escrito en los lenguajes compilados para las vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Actions
  - Repositories
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161203'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Acerca de {% data variables.code-scanning.codeql_workflow %} y los lenguajes compilados

Puedes configurar a {% data variables.product.prodname_dotcom %} para que ejecute el {% data variables.product.prodname_code_scanning %} en tu repositorio si agregas un flujo de trabajo de {% data variables.product.prodname_actions %} a este. Para {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, se agregan los datos {% data variables.code-scanning.codeql_workflow %}. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %} Para obtener información general sobre cómo configurar {% data variables.product.prodname_code_scanning %} y editar archivos de flujo de trabajo, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" y "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

##  Acerca de autobuild para {% data variables.product.prodname_codeql %}

El {% data variables.product.prodname_code_scanning_capc %} funciona ejecutando consultas en una o varias bases de datos. Cada base de datos contiene una representación de todo el código de tu repositorio en un solo lenguaje.   
En los lenguajes compilados C/C++, C#, {% ifversion codeql-go-autobuild %} Go,{% endif %} y Java, el proceso de poblar esta base de datos conlleva compilar el código y extraer los datos. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Si en el flujo de trabajo se usa una matriz `language`, `autobuild` intenta compilar cada uno de los lenguajes compilados enumerados en la matriz. Sin una matriz, `autobuild` intentará compilar el lenguaje compilado compatible que tenga más archivos de código fuente en el repositorio. Con la excepción de Go, el análisis de otros lenguajes compilados en tu repositorio siempre fallará a menos de que proporciones comandos de compilación específicos.

{% note %}

{% ifversion ghae %} **Nota**: {% data reusables.actions.self-hosted-runners-software %} {% else %} **Nota**: Si usa ejecutores autohospedados para {% data variables.product.prodname_actions %}, es posible que tenga que instalar software adicional para usar el proceso `autobuild`. Adicionalmente, si tu repositorio requiere de una versión específica de una herramienta de compilación, tal vez necesites instalarla manualmente. Para más información, vea "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

{% endnote %}

### C/C++

| Tipo de sistema compatible | Nombre del sistema |
|----|----|
| Sistema operativo | Windows, macOS y Linux. |
| Sistema de compilación | Windows: MSbuild y scripts de compilación<br/>Linux y macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild y scripts de compilación |

El comportamiento del paso `autobuild` varía en función del sistema operativo en el que se ejecute la extracción. En Windows, el paso `autobuild` intenta detectar de forma automática un método de compilación adecuado para C/C++ mediante el enfoque siguiente:

1. Se invoca `MSBuild.exe` en el archivo de solución (`.sln`) o proyecto (`.vcxproj`) más cercano a la raíz.
Si `autobuild` detecta varios archivos de solución o del proyecto en la misma profundidad (la más corta) con respecto al directorio de nivel superior, intentará compilarlos todos.
2. Invoque un script similar a un script de compilación:_build.bat_, _build.cmd_ _y build.exe_ (en ese orden).

En Linux y macOS, el paso `autobuild` revisa los archivos presentes en el repositorio para determinar el sistema de compilación que usar:

1. Busca un sistema de compilación en el directorio raíz.
2. Si no se encuentra ninguno, busca un directorio único en los subdirectorios, el cual cuente con un sistema de compilación para C/C++.
3. Ejecuta un comando adecuado para configurar el sistema. 

### C#

| Tipo de sistema compatible | Nombre del sistema |
|----|----|
| Sistema operativo | Windows y Linux |
| Sistema de compilación | .NET y MSbuild, así como los scripts de compilación |

El proceso `autobuild` intenta detectar de forma automática un método de compilación adecuado para C# mediante el enfoque siguiente:

1. Se invoca `dotnet build` en el archivo de solución (`.sln`) o proyecto (`.csproj`) más cercano a la raíz.
2. Se invoca `MSbuild` (Linux) o `MSBuild.exe` (Windows) en el archivo de solución o del proyecto más cercano a la raíz.
Si `autobuild` detecta varios archivos de solución o del proyecto en la misma profundidad (la más corta) con respecto al directorio de nivel superior, intentará compilarlos todos.
3. Se invoca un script similar a un script de compilación: _build_ y _build.sh_ (en ese orden, para Linux), o bien _build.bat_, _build.cmd_ _y build.exe_ (en ese orden, para Windows).

{% ifversion codeql-go-autobuild %}

### Go

| Tipo de sistema compatible | Nombre del sistema |
|----|----|
| Sistema operativo | Windows, macOS y Linux. |
| Sistema de compilación | Módulos de Go, `dep` y Glide, así como scripts de compilación, incluidos scripts de Makefiles y Ninja |

El proceso `autobuild` intenta detectar automáticamente una forma adecuada de instalar las dependencias necesarias para un repositorio de Go antes de extraer todos los archivos `.go`:

1. Invoca `make`, `ninja``./build` o `./build.sh` (en ese orden) hasta que uno de estos comandos se complete correctamente y otro comando `go list ./...` posterior también lo haga, lo que indica que las dependencias necesarias se han instalado.
2. Si ninguno de esos comandos se completa correctamente, busca `go.mod`, `Gopkg.toml` o `glide.yaml` y ejecuta `go get` (a menos que se use el traslado al directorio "vendor"), `dep ensure -v` o `glide install` respectivamente para intentar instalar las dependencias.
3. Por último, si no hay forma de encontrar los archivos de configuración de estos administradores de dependencias, reorganiza la estructura de directorios del repositorio adecuada para la adición a `GOPATH` y usa `go get` para instalar las dependencias. La estructura de directorios vuelve a su estado normal después de que se complete la extracción.
4. Extrae todo el código de Go en el repositorio, similar a ejecutar `go build ./...`.

{% endif %}

### Java

| Tipo de sistema compatible | Nombre del sistema |
|----|----|
| Sistema operativo | Windows, macOS, y Linux (sin restricción) |
| Sistema de compilación | Gradle, Maven y Ant |

El proceso `autobuild` intenta determinar el sistema de compilación para las bases de código de Java mediante la aplicación de esta estrategia:

1. Busca un archivo de compilación en el directorio raíz. Busca a Gradle en Maven y luego Ant compila los archivos.
2. Ejecuta el primer archivo de compilación que encuentre. Si tanto los archivos de Gradle como los de Maven están presentes, se utiliza el archivo de Gradle.
3. De lo contrario, usca los archivos de compilación en los subidrectorios directos del directorio raíz. Si solo un subdirectorio contiene archivos de compilación, ejecuta el primer archivo identificado en este subdirectorio (utilizando la misma preferencia que para 1). Si más de un subdirectorio contiene archivos de compilación, reporta un error.

## Agregar pasos de compilación para un lenguaje compilado

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener información sobre cómo editar el archivo de flujo de trabajo, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".

Después de quitar el paso `autobuild`, quite la marca de comentario del paso `run` y agregue comandos de compilación que sean adecuados para el repositorio. El paso `run` del flujo de trabajo ejecuta herramientas de línea de comandos mediante el shell del sistema operativo. Puede modificar estos comandos y agregar más comandos para personalizar el proceso de compilación.

``` yaml
- run: |
    make bootstrap
    make release
```

Para más información sobre la palabra clave `run`, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Si el repositorio contiene varios lenguajes compilados, puede especificar comandos de compilación específicos del lenguaje. Por ejemplo, si el repositorio contiene C/C++, C# y Java, y `autobuild` compila correctamente C/C++ y C# pero no puede compilar Java, podría usar la configuración siguiente en el flujo de trabajo, después del paso `init`. Esto especifica los pasos de compilación para Java mientras se sigue usando `autobuild` para C/C++ y C#:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Para más información sobre el condicional `if`, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)".

Para obtener más sugerencias y trucos sobre por qué `autobuild` no compilará el código, vea "[Solución de problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

Si agregas pasos de compilación manualmente para los lenguajes compilados y el {% data variables.product.prodname_code_scanning %} aún no funciona en tu repositorio, contacta a {% data variables.contact.contact_support %}.
