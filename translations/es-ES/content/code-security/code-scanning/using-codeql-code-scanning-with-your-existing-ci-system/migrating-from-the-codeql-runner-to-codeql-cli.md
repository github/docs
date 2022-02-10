---
title: Migrarse del ejecutor de CodeQL al CLI de CodeQL
shortTitle: Migrarse desde el ejecutor de CodeQL
intro: 'Puedes utilizar el {% data variables.product.prodname_codeql_cli %} para completar las mismas tareas que hacías con el {% data variables.product.prodname_codeql_runner %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

# Migrarse del {% data variables.product.prodname_codeql_runner %} al {% data variables.product.prodname_codeql_cli %}

El {% data variables.product.prodname_codeql_runner %} se va a obsoletizar. Puedes utilizar la versión 2.6.2 del {% data variables.product.prodname_codeql_cli %} y superiores. Este documento describe cómo migrar flujos de trabajo comunes desde el {% data variables.product.prodname_codeql_runner %} hacia el {% data variables.product.prodname_codeql_cli %}.

## Instalación

Descarga el **paquete de {% data variables.product.prodname_codeql %}** del [repositorio `github/codeql-action`](https://github.com/github/codeql-action/releases). Este paquete contiene al {% data variables.product.prodname_codeql_cli %} y las consultas estándar y librerías de {% data variables.product.prodname_codeql %}.

Para obtener más información sobre cómo configurar el {% data variables.product.prodname_codeql_cli %}, consulta la sección "[Instalar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

## Resumen de los cambios en los flujos de trabajo

Un flujo de trabajo habitual utiliza el {% data variables.product.prodname_codeql_runner %} para analizar una base de código tiene los siguientes pasos.
- `codeql-runner-<platform> init` para comenzar a crear las bases de datos de {% data variables.product.prodname_codeql %} y leer la configuración.
- Para los lenguajes compilados: configura las variables de ambiente que produce el paso `init`.
- Para los lenguajes compilados: ejecuta la autocompilación o los pasos de compilación manual.
- `codeql-runner-<platform> analyze` para terminar de crear las bases de datos de {% data variables.product.prodname_codeql %}, ejecutar consultas para analizar cada base de datos de {% data variables.product.prodname_codeql %}, resumir los resultados en un archivo SARIF, y cargar los resultados a {% data variables.product.prodname_dotcom %}.

Un flujo de trabajo habitual utiliza el {% data variables.product.prodname_codeql_cli %} para analizar una base de código tiene los siguientes pasos.
- `codeql database create` para crear bases de datos de {% data variables.product.prodname_codeql %}.
  - Para los lenguajes compilados: Proporciona un comando de compilación opcionalmente.
- `codeql database analyze` para ejecutar consultas para analizar cada base de datos de {% data variables.product.prodname_codeql %} y resumir los resultados en un archivo SARIF. Este comando debe ejecutarse una vez para cada lenguaje o base de datos.
- `codeql github upload-results` para cargar los archivos SARIF resultantes a {% data variables.product.prodname_dotcom %}, para que se muestre como alertas del escaneo de código. Este comando debe ejecutarse una vez para cada archivo SARIF o lenguaje.

El {% data variables.product.prodname_codeql_runner %} tiene capacidades de subprocesamiento múltiple predeterminadamente. El {% data variables.product.prodname_codeql_cli %} solo utiliza un subproceso predeterminadamente, pero te permite especificar la cantidad de subprocesos que quieres utilizar. Si quieres replicar el comportamiento del {% data variables.product.prodname_codeql_runner %} para utilizar todos los subprocesos disponibles en la máquina cuando utilizas el {% data variables.product.prodname_codeql_cli %}, puedes pasar `--threads 0` a `codeql database analyze`.

Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)".

## Ejemplos de usos comunes para el {% data variables.product.prodname_codeql_cli %}

### Acerca de los ejemplos

Estos ejemplos asumen que el código fuente se verificó en el directorio de trabajo actual. Si utilizas un directorio diferente, cambia el argumento `--source-root` y compila los pasos como sea correcto.

Estos ejemplos también asumen que el {% data variables.product.prodname_codeql_cli %} se coloca en la RUTA correcta.

In these examples, a {% data variables.product.prodname_dotcom %} token with suitable scopes is stored in the `$TOKEN` environment variable and passed to the example commands via `stdin`, or is stored in the `$GITHUB_TOKEN` environment variable.

El nombre de ref y el SHA de confirmación que se verifican y analizan en estos ejemplos se conocen durante el flujo de trabajo. En el caso de las ramas, utiliza `refs/heads/BRANCH-NAME` como el ref. En el caso de la confirmación de encabezado de una solicitud de cambios, utiliza `refs/pulls/NUMBER/head`. En el caso de una confirmación de fusión generada por {% data variables.product.prodname_dotcom %} para una solicitud de cambios, utiliza `refs/pulls/NUMBER/merge`. Todos los siguientes ejemplos utilizan `refs/heads/main`. Si utilizas un nombre de rama diferente, debes modificar el código de muestra.

### Lenguaje sencillo no compilado (JavaScript)

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root=.

# The default query suite is called `<language>-code-scanning.qls`.
codeql database analyze /codeql-dbs/example-repo \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Lenguaje sencillo no compilado (JavaScript) utilizando una suite de consultas (security-and-quality)

Se puede tomar un enfoque similar para los lenguajes compilados o los lenguajes múltiples.

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root=.

# Use `<language>-<suite name>.qls`
codeql database analyze /codeql-dbs/example-repo  \
    javascript-security-and-quality.qls --sarif-category=javascript
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Lenguaje sencillo no compilado (JavaScript) utilizando un archivo de configuración personalizado

Se puede tomar un enfoque similar para los lenguajes compilados o los lenguajes múltiples.

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Use `--codescanning-config` with the path to the YAML configuration file.
codeql database create /codeql-dbs/example-repo --language=javascript \
    --codescanning-config=.github/codeql/codeql-config.yml \
    --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    --sarif-category=javascript
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Lenguaje sencillo no compilado utilizando compilación automática (Java)

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages java \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run the autobuilder for the given language.
codeql-runner-linux autobuild --language java

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Run `codeql database create` without `--command`.
# This will run the autobuilder for the given language.
codeql database create /codeql-dbs/example-repo --language=java \
    --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=java
    --format=sarif-latest --output=/temp/example-repo-java.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-java.sarif --github-auth-stdin
```

### Lenguaje sencillo no copilado utilizando un comando de compilación personalizado (Java)

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages java \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run a custom build command.
mvn compile -DskipTests

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Provide an explicit build command using `--command`.
codeql database create /codeql-dbs/example-repo --language=java \
    --command="mvn compile -DskipTests" --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    java-code-scanning.qls --sarif-category=java
    --format=sarif-latest --output=/temp/example-repo-java.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-java.sarif --github-auth-stdin
```

### Lenguaje sencillo no compilado utilizando rastreo de compilación indirecto (C# sobre Windows dentro de Azure DevOps)

El rastreo de compilación indirecta para los lenguajes compilados habilita al {% data variables.product.prodname_codeql %} para que detecte los pasos de compilación entre los pasos de `init` y `analyze`, cuando el código no puede compilarse utilizando la compilación automática o una línea de comandos compilada explícita. Esto es útil cuando se utilizan pasos de compilación preconfigurados desde tu sistema de IC, tales como las tareas de `VSBuild` y `MSBuild` en Azure DevOps.

Ejecutor:
```yaml
- task: CmdLine@1
  displayName: CodeQL Initialization
  inputs:
  script: "%CodeQLRunner%\\codeql-runner-win.exe init --repository my-org/example-repo --languages csharp --github-url https://github.com --github-auth $(Token)"
# Set the generated environment variables so they are available for subsequent commands, in the format required by Azure Pipelines.
- task: PowerShell@1
  displayName: Set CodeQL Environment Variables
  inputs:
      targetType: inline
      script: >
          $json = Get-Content $(System.DefaultWorkingDirectory)/codeql-runner/codeql-env.json | ConvertFrom-Json
          $json.PSObject.Properties | ForEach-Object {
              $template = "##vso[task.setvariable variable="
              $template += $_.Name
              $template += "]"
              $template += $_.Value
              echo "$template"
          }

# Execute a clean build using the VSBuild task.
- task: VSBuild@1
  inputs:
      solution: '**/*.sln'
      msbuildArgs: '/p:OutDir=$(Build.ArtifactStagingDirectory) /p:UseSharedCompilation=false'
      platform: Any CPU
      configuration: Release
      clean: True
  displayName: Visual Studio Build

# Analyze the database created as part of the build, by running the selected queries against it, and upload results to GitHub.
- task: CmdLine@2
  displayName: CodeQL Analyze
  inputs:
      script: '%CodeQLRunner%\codeql-runner-win.exe analyze --repository my-org/example-repo --commit $(Build.SourceVersion) --ref $(Build.SourceBranch) --github-url https://github.com --github-auth $(Token)'
```

CLI:
```yaml
# Run any pre-build tasks, for example, restore NuGet dependencies...

# Initialize the CodeQL database using `codeql database init --begin tracing`.
- task: CmdLine@1
  displayName: Initialize CodeQL database
  inputs:
      # Assumes the source code is checked out to the current working directory.
      # Creates a database at `/codeql-dbs/example-repo`.
      # Running on Windows, so specifies a trace process level.
      script: "codeql database init --language csharp --trace-process-name Agent.Worker.exe --source-root . --begin-tracing /codeql-dbs/example-repo"

# For CodeQL to trace future build steps without knowing the explicit build commands,
# it requires certain environment variables to be set during the build.
# Read these generated environment variables and values, and set them so they are available for subsequent commands
# in the build pipeline. This is done in PowerShell in this example.
- task: PowerShell@1
  displayName: Set CodeQL environment variables
  inputs:
      targetType: inline
      script: >
         $json = Get-Content /codeql-dbs/example-repo/temp/tracingEnvironment/start-tracing.json | ConvertFrom-Json
         $json.PSObject.Properties | ForEach-Object {
             $template = "##vso[task.setvariable variable="
             $template += $_.Name
             $template += "]"
             $template += $_.Value
             echo "$template"
         }

# Execute the pre-defined build step. Note the `msbuildArgs` variable.
- task: VSBuild@1
    inputs:
      solution: '**/*.sln'
      # Disable MSBuild shared compilation for C# builds.
      msbuildArgs: /p:OutDir=$(Build.ArtifactStagingDirectory) /p:UseSharedCompilation=false
      platform: Any CPU
      configuration: Release
      # Execute a clean build, in order to remove any existing build artifacts prior to the build.
      clean: True
   displayName: Visual Studio Build

# Read and set the generated environment variables to end build tracing. This is done in PowerShell in this example.
- task: PowerShell@1
   displayName: Clear CodeQL environment variables
   inputs:
      targetType: inline
      script: >
         $json = Get-Content $(System.DefaultWorkingDirectory)/db/temp/tracingEnvironment/end-tracing.json | ConvertFrom-Json
         $json.PSObject.Properties | ForEach-Object {
             $template = "##vso[task.setvariable variable="
             $template += $_.Name
             $template += "]"
             $template += $_.Value
             echo "$template"
         }

# Use `codeql database finalize` to complete database creation after the build is done.
- task: CmdLine@2
   displayName: Finalize CodeQL database
   inputs:
      script: 'codeql database finalize /codeql-dbs/example-repo'


# Analyze the database and upload the results.
- task: CmdLine@2
   displayName: Analyze CodeQL database
   inputs:
      script: 'codeql database analyze /codeql-dbs/example-repo csharp-code-scanning.qls --sarif-category=csharp --format=sarif-latest --output=/temp/example-repo-csharp.sarif'

- task: CmdLine@2
   displayName: Upload CodeQL results
   inputs:
      script: 'echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-csharp.sarif --github-auth-stdin'

```

### Lenguajes múltiples utilizando compilación automática (C++, Python)

Este ejemplo no es estrictamente posible dentro del {% data variables.product.prodname_codeql_runner %}. Solo se analizará un lenguaje (el lenguaje compilado que tenga la mayoría de los archivos).

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages cpp,python \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run the autobuilder for the language with the most files.
codeql-runner-linux autobuild

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```

CLI:
```bash
# Create multiple databases using `--db-cluster`.
# Run autobuild by omitting `--command`.
codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language cpp,python \
    --no-run-unnecessary-builds \
    --source-root .

# Analyze each database in turn and upload the results.
for language in cpp python; do
  codeql database analyze "/codeql-dbs/example-repo-multi/$language"  \
      "$language-code-scanning.qls" --sarif-category="$language"
      --format=sarif-latest --output="/temp/example-repo-$language.sarif"

  echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
      --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
      --sarif="/temp/example-repo-$language.sarif" --github-auth-stdin
done
```

### Lenguajes múltiples utilizando un comando de compilación personalizado (C++, Python)

Ejecutor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages cpp,python \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run a custom build command.
make

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```

CLI:
```bash
# Create multiple databases using `--db-cluster`.
codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language cpp,python \
    --command make --no-run-unnecessary-builds \
    --source-root .

# Analyze each database in turn and upload the results.
for language in cpp python; do
  codeql database analyze "/codeql-dbs/example-repo-multi/$language"  \
      "$language-code-scanning.qls" --sarif-category="$language"
      --format=sarif-latest --output="/temp/example-repo-$language.sarif"

  echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
      --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
      --sarif="/temp/example-repo-$language.sarif" --github-auth-stdin
done
```
