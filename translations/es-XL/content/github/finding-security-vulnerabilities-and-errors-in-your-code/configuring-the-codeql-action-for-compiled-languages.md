---
title: Configuring the CodeQL action for compiled languages
shortTitle: Configurar para los lenguajes compilados
intro: 'You can configure how {% data variables.product.prodname_dotcom %} uses the {% data variables.product.prodname_codeql_workflow %} to scan code written in compiled languages for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden configurar {% data variables.product.prodname_code_scanning %} para el mismo.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### About the {% data variables.product.prodname_codeql_workflow %} and compiled languages

You enable {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. El flujo de trabajo predeterminado de {% data variables.product.prodname_code_scanning %} utiliza el evento `on.push` para activar el escaneo de código cada vez que alguien carga información a cualquier rama que contenga el archivo de flujo de trabajo.

{% data reusables.code-scanning.edit-workflow %}
For general information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and  "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### Acerca de autobuild para {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% note %}

**Nota**: Si utilizas los ejecutores auto-hospedados para {% data variables.product.prodname_actions %}, tal vez necesites instalar software adicional para utilizar el proceso de `autobuild`. Adicionalmente, si tu repositorio requiere de una versión específica de una herramienta de compilación, tal vez necesites instalarla manualmente. Para obtener más información, consulta "[Software instalado en los ejecutores alojados por GitHub](/actions/reference/software-installed-on-github-hosted-runners)".

{% endnote %}

#### C/C++

| Tipo de sistema compatible | Nombre del sistema                                        |
| -------------------------- | --------------------------------------------------------- |
| Sistema operativo          | Windows y Linux                                           |
| Sistema de compilación     | Autoconf, CMake, qmake, Meson, Waf, SCons, y Linux Kbuild |

El comportamiento del paso de `autobuild` varía de acuerdo con el sistema operativo en el que se ejecute la extracción. Wn Windows, el paso no tiene acciones predeterminadas. En Linux, este paso revisa los archivos presentes en el repositorio para determinar el sistema de compilación que se utilizó:

1. Busca un sistema de compilación en el directorio raíz.
2. Si no se encuentra ninguno, busca un directorio único en los subdirectorios, el cual cuente con un sistema de compilación para C/C++.
3. Ejecuta un comando adecuado para configurar el sistema.

#### C

| Tipo de sistema compatible | Nombre del sistema                                  |
| -------------------------- | --------------------------------------------------- |
| Sistema operativo          | Windows y Linux                                     |
| Sistema de compilación     | .NET y MSbuild, así como los scripts de compilación |

El proceso de `autobuild` intenta autodetectar un método de compilación adecuado para C# utilizando el siguiente acercamiento:

1. Invoca a `dotnet build` en el archivo (`.sln`) de la solución o en el archivo (`.csproj`) del proyecto que esté más cercano a la raíz.
2. Invoca a `MSbuild` (Linux) o a `MSBuild.exe` (Windows) en el archivo de la solución o del proyecto más cercano a la raíz. Si `autobuild` detecta soluciones o archivos de proyecto múltiples en la misma profundidad (la más corta) desde el directorio de nivel superior, entonces intentará compilarlos todos.
3. Invoca un script que se parece a un script de compilación—_build_ y _build.sh_ (en ese orden, para Linux) o _build.bat_, _build.cmd_, _y build.exe_ (en ese orden, para Windows).

#### Java

| Tipo de sistema compatible | Nombre del sistema                       |
| -------------------------- | ---------------------------------------- |
| Sistema operativo          | Windows, macOS y Linux (sin restricción) |
| Sistema de compilación     | Gradle, Maven y Ant                      |

El proceso de `autobuild` intenta determinar el sistema de compilación para las bases de código de Java aplicando esta estrategia:

1. Busca un archivo de compilación en el directorio raíz. Busca a Gradle en Maven y luego Ant compila los archivos.
2. Ejecuta el primer archivo de compilación que encuentre. Si tanto los archivos de Gradle como los de Maven están presentes, se utiliza el archivo de Gradle.
3. De lo contrario, usca los archivos de compilación en los subidrectorios directos del directorio raíz. Si solo un subdirectorio contiene archivos de compilación, ejecuta el primer archivo identificado en este subdirectorio (utilizando la misma preferencia que para 1). Si más de un subdirectorio contiene archivos de compilación, reporta un error.

### Agregar pasos de compilación para un lenguaje compilado

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener información acerca de cómo editar el flujo de trabajo, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)".

Después de eliminar el paso de `autobuild`, quita el comentario del paso de `run` y agrega los comandos de compilación que son adecuados para tu repositorio. El paso de `run` en el flujo de trabajo ejecuta programas de línea de comandos que utiizan el shell del sistema operativo. Puedes modificar estos comandos y agregar más de ellos para personalizar el proceso de compilación.

``` yaml
- run: |
  make bootstrap
  make release
```

Para obtener más información acerca de la palabra clave `run`, consulta la sección "[Sintaxis de flujo de trabajo para  { site.data.variables.product.prodname_actions }}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

También puedes utilizar una matriz de compilación para actualizar el flujo de trabajo para que compile más de un lenguaje compilado, en caso de que éste es el acercamiento adecuado para tu sistema y no causa conflictos. Para obtener más información, consulta la sección "[Configurar una matriz de compilación](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)".


Por eejmplo, el siguiente flujo de trabajo ejecuta un job para análisis de C/C++ y otro para análisis de Java.

```yaml

name: "CodeQL"

on:
  push:
    branches: [main, ]
  pull_request:
    branches: [main]

jobs:
  CodeQL-Build:

    strategy:
      fail-fast: false
      matrix:
        language: ['cpp', 'java']

{% if currentVersion ver_gt "enterprise-server@2.21" %}    runs-on: self-hosted
{% else %}    # CodeQL runs on ubuntu-latest, windows-latest, and macos-latest
    runs-on: ubuntu-latest{% endif %}

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}

    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # If this step fails, then you should remove it and run the build manually.
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
```

Para encontrar más tips del porqué `autobuild` no compilará tu código, consulta la sección "[Solucionar problemas del {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)".

Si agregaste pasos de compilación manuales para los lenguajes compilados o si utilizaste una matriz de compilación y el {% data variables.product.prodname_code_scanning %} sigue sin funcionar en tu repositorio, contacta a {% data variables.contact.contact_support %}.
