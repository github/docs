---
title: Configurar el flujo de trabajo de CodeQL para los lenguajes compilados
shortTitle: Configurar para los lenguajes compilados
intro: 'Puedes configurar cómo {% data variables.product.prodname_dotcom %} utiliza el {% data variables.product.prodname_codeql_workflow %} para escanear el código escrito en los lenguajes compilados para las vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Si tienes permisos de escritura en un repositorio, puedes configurar el {% data variables.product.prodname_code_scanning %} para éste.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Acerca de {% data variables.product.prodname_codeql_workflow %} y los lenguajes compilados

You set up {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %}
Para obtener información general acerca de cómo configurar
el {% data variables.product.prodname_code_scanning %} y cómo editar archivos de flujo de trabajo, consulta las secciones "[Configurar el {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" y "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

### Acerca de autobuild para {% data variables.product.prodname_codeql %}

El escaneo de código funciona ejecutando consultas contra una o más bases de datos. Cada base de datos contiene una representación de todo el código de tu repositorio en un solo lenguaje. Para los lenguajes compilados de C/C++, C#, y Java, el proceso de poblar esta base de datos involucra compilar el código y extraer los datos. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Si tu flujo de trabajo utiliza una matriz de `language`, el `autobuild` intentará compilar cada uno de los lenguajes que se listen en ella. Sin una matriz, el `autobuild` intentará compilar el lenguaje compatible que tenga más archivos de origen en el repositorio. Con la excepción de Go, el análisis de otros lenguajes compilados en tu repositorio siempre fallará a menos de que proporciones comandos de compilación específicos.

{% note %}

**Nota**: Si utilizas los ejecutores auto-hospedados para {% data variables.product.prodname_actions %}, tal vez necesites instalar software adicional para utilizar el proceso de `autobuild`. Adicionalmente, si tu repositorio requiere de una versión específica de una herramienta de compilación, tal vez necesites instalarla manualmente. Para obtener más información, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

{% endnote %}

#### C/C++

| Tipo de sistema compatible | Nombre del sistema                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sistema operativo          | Windows, macOS, y Linux                                                                                                                                    |
| Sistema de compilación     | Windows: MSbuild y scripts de compilación<br/>Linux y macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild, y scripts de compilación |

El comportamiento del paso de `autobuild` varía de acuerdo con el sistema operativo en el que se ejecute la extracción. En Windows, el paso de `autobuild` intenta autodetectar un método de compilación adecuado para C/C++ utilizando el siguiente enfoque:

1. Invocar a`MSBuild.exe` en el archivo de la solución (`.sln`) o del proyecto (`.vcxproj`) que esté más cercano a la raíz. Si `autobuild` detecta soluciones o archivos de proyecto múltiples en la misma profundidad (la más corta) desde el directorio de nivel superior, entonces intentará compilarlos todos.
2. Invocar un script que se ve como un script de compilación—_build.bat_, _build.cmd_, _and build.exe_ (en ese órden).

En Linux y macOS, el paso de `autobuild` revisa los archivos presentes en el repositorio para determinar el sistema de compilación que se utilizó:

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

| Tipo de sistema compatible | Nombre del sistema                        |
| -------------------------- | ----------------------------------------- |
| Sistema operativo          | Windows, macOS, y Linux (sin restricción) |
| Sistema de compilación     | Gradle, Maven y Ant                       |

El proceso de `autobuild` intenta determinar el sistema de compilación para las bases de código de Java aplicando esta estrategia:

1. Busca un archivo de compilación en el directorio raíz. Busca a Gradle en Maven y luego Ant compila los archivos.
2. Ejecuta el primer archivo de compilación que encuentre. Si tanto los archivos de Gradle como los de Maven están presentes, se utiliza el archivo de Gradle.
3. De lo contrario, usca los archivos de compilación en los subidrectorios directos del directorio raíz. Si solo un subdirectorio contiene archivos de compilación, ejecuta el primer archivo identificado en este subdirectorio (utilizando la misma preferencia que para 1). Si más de un subdirectorio contiene archivos de compilación, reporta un error.

### Agregar pasos de compilación para un lenguaje compilado

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener más información sobre cómo editar el archivo de flujo de trabajo, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)".

Después de eliminar el paso de `autobuild`, quita el comentario del paso de `run` y agrega los comandos de compilación que son adecuados para tu repositorio. El paso de `run` en el flujo de trabajo ejecuta programas de línea de comandos que utiizan el shell del sistema operativo. Puedes modificar estos comandos y agregar más de ellos para personalizar el proceso de compilación.

``` yaml
- run: |
  make bootstrap
  make release
```

Para obtener más información acerca de la palabra clave `run`, consulta la sección "[Sintaxis de flujo de trabajo para  { site.data.variables.product.prodname_actions }}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Si tu repositorio contiene lenguajes compilados múltiples, puedes especificar los compandos de compilación específicos de estos lenguajes. Por ejemplo, si tu repositorio contiene C/C++, C# y Java, y el `autobuild` compila correctamente C/C++ y C#, pero falla con Java, puedes utilizar la siguiente configuración en tu flujo de trabajo, después del paso `init`. Esto especifica los pasos de compilación para Java mientras que aún utiliza el `autobuild` para C/C++ y C#:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: github/codeql-action/autobuild@v1

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Para obtener más información acerca del condicional `if`, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)".

Para obtener más tips e ides sobre por qué el `autobuild` no está compilando tu código, consulta la sección "[Solucionar errores en el flujo de trabajo de {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)".

Si agregas pasos de compilación manualmente para los lenguajes compilados y el {% data variables.product.prodname_code_scanning %} aún no funciona en tu repositorio, contacta a {% data variables.contact.contact_support %}.
