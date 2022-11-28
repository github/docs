---
title: Migrieren vom CodeQL-Runner zu CodeQL-CLI
shortTitle: Migrating from the CodeQL runner
intro: 'Du kannst die {% data variables.product.prodname_codeql_cli %} verwenden, um die gleichen Aufgaben wie mit dem {% data variables.code-scanning.codeql_runner %} auszuführen.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 10711111e3fa5c7226574ac9b70eb4bd4d5bff21
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161264'
---
# Migrieren vom {% data variables.code-scanning.codeql_runner %} zur {% data variables.product.prodname_codeql_cli %}

Der {% data variables.code-scanning.codeql_runner %} ist veraltet. Du kannst die {% data variables.product.prodname_codeql_cli %} Version 2.6.2 und höher verwenden.
In diesem Dokument wird beschrieben, wie allgemeine Workflows vom {% data variables.code-scanning.codeql_runner %} zur {% data variables.product.prodname_codeql_cli %} migriert werden.

## Installation

Lade das **{% data variables.product.prodname_codeql %}-Paket** aus dem [`github/codeql-action`Repository](https://github.com/github/codeql-action/releases) herunter. Dieses Paket enthält die {% data variables.product.prodname_codeql_cli %} und die Standarddaten {% data variables.product.prodname_codeql %}-Abfragen und -Bibliotheken.

Informationen zum Einrichten der {% data variables.product.prodname_codeql_cli %} findest du unter [Installieren von {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

## Übersicht über Workflowänderungen

Ein typischer Workflow, der den {% data variables.code-scanning.codeql_runner %} zum Analysieren einer Codebasis verwendet, umfasst die folgenden Schritte.
- `codeql-runner-<platform> init`: Mit diesem Befehl beginnst du mit dem Erstellen von {% data variables.product.prodname_codeql %}-Datenbanken und lesen die Konfiguration.
- Für kompilierte Sprachen: Festlegen von Umgebungsvariablen, die von Schritt `init` erstellt werden.
- Für kompilierte Sprachen: Führe Autobuild- oder manuelle Buildschritte aus.
- `codeql-runner-<platform> analyze`: Mit diesem Befehl schließt du das Erstellen von {% data variables.product.prodname_codeql %}-Datenbanken ab, führst Abfragen aus, um jede {% data variables.product.prodname_codeql %} zu analysieren, die Ergebnisse in einer SARIF-Datei zusammenzufassen und die Ergebnisse in {% data variables.product.prodname_dotcom %} hochzuladen.

Ein typischer Workflow, der die {% data variables.product.prodname_codeql_cli %} verwendet, um eine Codebase zu analysieren, weist die folgenden Schritte auf.
- `codeql database create`: Mit diesem Befehl erstellst du {% data variables.product.prodname_codeql %}-Datenbanken.
  - Für kompilierte Sprachen: Optional stellst du einen Buildbefehl bereit.
- `codeql database analyze`: Mit diesem Befehl führst du Abfragen aus, um jede {% data variables.product.prodname_codeql %}-Datenbank zu analysieren und die Ergebnisse in einer SARIF-Datei zusammenzufassen. Dieser Befehl muss für jede Sprache oder Datenbank einmal ausgeführt werden.
- `codeql github upload-results`: Mit diesem Befehl lädst du resultierenden SARIF-Dateien in {% data variables.product.prodname_dotcom %} hoch, damit sie als Codescanwarnungen angezeigt zu werden. Dieser Befehl muss für jede Sprache oder SARIF-Datei einmal ausgeführt werden.

Der {% data variables.code-scanning.codeql_runner %} unterstützt standardmäßig das Multithreading. Die {% data variables.product.prodname_codeql_cli %} verwendet standardmäßig nur einen einzelnen Thread, ermöglicht ihnen jedoch die Angabe der Anzahl von Threads, die du verwenden möchtest. Wenn du das Verhalten des {% data variables.code-scanning.codeql_runner %} replizieren möchtest, um bei Verwendung der {% data variables.product.prodname_codeql_cli %} alle für den Computer verfügbaren Threads zu verwenden, kannst Du `--threads 0` an `codeql database analyze` übergeben.

Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

## Beispiele für allgemeine Verwendungen für die {% data variables.product.prodname_codeql_cli %}

### Über die Beispiele

In diesen Beispielen wird davon ausgegangen, dass der Quellcode auf das aktuelle Arbeitsverzeichnis ausgecheckt wurde. Wenn du ein anderes Verzeichnis verwendest, ändere das Argument `--source-root` und die Buildschritte entsprechend.

In diesen Beispielen wird auch davon ausgegangen, dass die {% data variables.product.prodname_codeql_cli %} im aktuellen PFAD platziert werden.

In diesen Beispielen wird ein {% data variables.product.prodname_dotcom %} mit geeigneten Bereichen in der Umgebungsvariable `$TOKEN` gespeichert und über `stdin` an die Beispielbefehle übergeben oder in der Umgebungsvariable `$GITHUB_TOKEN` gespeichert.

Der Ref-Name und der Commit-SHA, die in diesen Beispielen ausgecheckt und analysiert werden, sind während des Workflows bekannt. Verwende für einen Branch `refs/heads/BRANCH-NAME` als Referenz. Für den Head-Commit einer Pull Request verwende `refs/pull/NUMBER/head`. Verwende `refs/pull/NUMBER/merge` für einen {% data variables.product.prodname_dotcom %}-generierten Merge-Commit einer Pull Request. Die folgenden Beispiele verwenden alle `refs/heads/main`. Wenn du einen anderen Branchnamen verwendest, musst du den Beispielcode ändern.

### Einzelne nicht kompilierte Sprache (JavaScript)

Runner:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Über die CLI:
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

### Einzelne nicht kompilierte Sprache (JavaScript) mit einer anderen Abfragensammlung (Sicherheit und Qualität)

Ein ähnlicher Ansatz kann für kompilierte Sprachen oder mehrere Sprachen verwendet werden.

Runner:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Über die CLI:
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

### Einzelne nicht kompilierte Sprache (JavaScript) mit einer benutzerdefinierten Konfigurationsdatei

Ein ähnlicher Ansatz kann für kompilierte Sprachen oder mehrere Sprachen verwendet werden.

Runner:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Über die CLI:
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

### Einzelne kompilierte Sprache mit von Autobuild (Java)

Runner:
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
Über die CLI:
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

### Einzelne kompilierte Sprache mit einem benutzerdefinierten Buildbefehl (Java)

Runner:
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
Über die CLI:
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

### Einzelne kompilierte Sprache mit indirekter Buildablaufverfolgung (C# auf Windows innerhalb Azure DevOps)

Die indirekte Buildablaufverfolgung für eine kompilierte Sprache ermöglicht es der {% data variables.product.prodname_codeql %}, alle Buildschritte zwischen den Schritten `init` und `analyze` zu erkennen, wenn der Code nicht mithilfe des Autobuilders oder einer expliziten Buildbefehlzeile erstellt werden kann. Dies ist nützlich, wenn du vordefinierte Buildschritte aus deinem CI-System verwendest, z. B. die Aufgaben `VSBuild` und `MSBuild` in Azure DevOps.

Runner:
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

Über die CLI:
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

### Mehrere Sprachen mit Autobuild (C++, Python)

Dieses Beispiel ist mit dem {% data variables.code-scanning.codeql_runner %} streng genommen nicht durchführbar.
Nur eine Sprache (die kompilierte Sprache mit den meisten Dateien) wird analysiert.

Runner:
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

Über die CLI:
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

### Mehrere Sprachen mit einem benutzerdefinierten Buildbefehl (C++, Python)

Runner:
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

Über die CLI:
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
