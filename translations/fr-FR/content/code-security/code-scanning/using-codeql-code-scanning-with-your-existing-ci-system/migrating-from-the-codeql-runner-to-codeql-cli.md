---
title: Migration depuis l’exécuteur CodeQL vers l’interface CLI de CodeQL
shortTitle: Migrating from the CodeQL runner
intro: 'Vous pouvez utiliser l’interface {% data variables.product.prodname_codeql_cli %} pour effectuer les mêmes tâches qu’avec l’{% data variables.product.prodname_codeql_runner %}.'
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
ms.openlocfilehash: c58dfe006a1f9189ece847559d5ecfafde1f7d81
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104626'
---
# Migration depuis l’{% data variables.product.prodname_codeql_runner %} vers l’{% data variables.product.prodname_codeql_cli %}

L’{% data variables.product.prodname_codeql_runner %} est déprécié. Vous pouvez, à la place, utiliser les versions 2.6.2 et supérieures de l’{% data variables.product.prodname_codeql_cli %}.
Ce document explique comment migrer des workflows courants depuis l’{% data variables.product.prodname_codeql_runner %} vers l’{% data variables.product.prodname_codeql_cli %}.

## Installation

Téléchargez le **bundle {% data variables.product.prodname_codeql %}** à partir du [dépôt `github/codeql-action`](https://github.com/github/codeql-action/releases). Ce bundle contient l’{% data variables.product.prodname_codeql_cli %} et les requêtes et bibliothèques {% data variables.product.prodname_codeql %} standard.

Pour plus d’informations sur la configuration de l’{% data variables.product.prodname_codeql_cli %}, consultez « [Installation de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) ».

## Vue d’ensemble des modifications de workflow

Un workflow classique qui utilise l’{% data variables.product.prodname_codeql_runner %} pour analyser un codebase comporte les étapes suivantes.
- `codeql-runner-<platform> init` pour démarrer la création de bases de données {% data variables.product.prodname_codeql %} et lire la configuration.
- Pour les langages compilés : définissez les variables d’environnement produites par l’étape `init`.
- Pour les langages compilés : exécutez les étapes de génération automatique ou manuelle.
- `codeql-runner-<platform> analyze` pour terminer la création des bases de données {% data variables.product.prodname_codeql %}, exécuter des requêtes pour analyser chaque base de données {% data variables.product.prodname_codeql %}, synthétiser les résultats dans un fichier SARIF et charger les résultats sur {% data variables.product.prodname_dotcom %}.

Un workflow classique qui utilise l’{% data variables.product.prodname_codeql_cli %} pour analyser un codebase comporte les étapes suivantes.
- `codeql database create` pour créer des bases de données {% data variables.product.prodname_codeql %}.
  - Pour les langages compilés : fournissez éventuellement une commande de génération.
- `codeql database analyze` pour exécuter des requêtes afin d’analyser chaque base de données {% data variables.product.prodname_codeql %} et de synthétiser les résultats dans un fichier SARIF. Cette commande doit être exécutée une fois pour chaque langage ou base de données.
- `codeql github upload-results` pour charger les fichiers SARIF résultants sur {% data variables.product.prodname_dotcom %}, en vue de leur affichage en tant qu’alertes d’analyse du code. Cette commande doit être exécutée une fois pour chaque langage ou fichier SARIF.

L’{% data variables.product.prodname_codeql_runner %} est multithread par défaut. L’{% data variables.product.prodname_codeql_cli %} utilise un seul thread par défaut, mais vous permet de spécifier la quantité de threads que vous souhaitez utiliser. Si vous souhaitez répliquer le comportement de l’{% data variables.product.prodname_codeql_runner %} pour utiliser tous les threads disponibles sur l’ordinateur lors de l’utilisation de l’{% data variables.product.prodname_codeql_cli %}, vous pouvez passer `--threads 0` à `codeql database analyze`.

Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system) ».

## Exemples d’utilisations courantes pour l’{% data variables.product.prodname_codeql_cli %}

### À propos des exemples

Ces exemples supposent que le code source a été extrait dans le répertoire de travail actuel. Si vous utilisez un autre répertoire, changez l’argument `--source-root` et les étapes de génération en conséquence.

Ces exemples supposent également que l’{% data variables.product.prodname_codeql_cli %} est placée sur le chemin (PATH) actuel.

Dans ces exemples, un jeton {% data variables.product.prodname_dotcom %} avec des étendues appropriées est stocké dans la variable d’environnement `$TOKEN` et transmis à l’exemple de commande via `stdin`, ou est stocké dans la variable d’environnement `$GITHUB_TOKEN`.

Le nom de référence et le SHA de commit extraits et analysés dans ces exemples sont connus pendant le workflow. Pour une branche, utilisez `refs/heads/BRANCH-NAME` comme référence. Pour le commit de tête d’une demande de tirage (pull request), utilisez `refs/pull/NUMBER/head`. Pour un commit de fusion généré par {% data variables.product.prodname_dotcom %} d’une demande de tirage, utilisez `refs/pull/NUMBER/merge`. Les exemples ci-dessous utilisent tous `refs/heads/main`. Si vous utilisez un autre nom de branche, vous devez modifier l’exemple de code.

### Langage non compilé unique (JavaScript)

Exécuteur :
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Interface CLI :
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

### Langage non compilé unique (JavaScript) avec une autre suite de requêtes (security-and-quality)

Une approche similaire peut être adoptée pour les langages compilées ou pour plusieurs langages.

Exécuteur :
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Interface CLI :
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

### Langage non compilé unique (JavaScript) avec un fichier de configuration personnalisé

Une approche similaire peut être adoptée pour les langages compilés ou pour plusieurs langages.

Exécuteur :
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Interface CLI :
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

### Langage compilé unique avec génération automatique (Java)

Exécuteur :
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
Interface CLI :
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

### Langage compilé unique avec une commande de génération personnalisée (Java)

Exécuteur :
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
Interface CLI :
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

### Langage compilé unique avec suivi de génération indirect (C# sur Windows dans Azure DevOps)

Le suivi de génération indirect pour un langage compilé permet à {% data variables.product.prodname_codeql %} de détecter toutes les étapes de génération entre les étapes `init` et `analyze`, quand le code ne peut pas être généré avec le générateur automatique ou une ligne de commande de génération explicite. Cela est utile lors de l’utilisation d’étapes de génération préconfigurées à partir de votre système CI, telles que les tâches `VSBuild` et `MSBuild` dans Azure DevOps.

Exécuteur :
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

Interface CLI :
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

### Plusieurs langages avec génération automatique (C++, Python)

Cet exemple n’est pas strictement possible avec l’{% data variables.product.prodname_codeql_runner %}.
Un seul langage (le langage compilé auquel est associé le plus grand nombre de fichiers) est analysé.

Exécuteur :
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

Interface CLI :
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

### Plusieurs langages avec une commande de génération personnalisée (C++, Python)

Exécuteur :
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

Interface CLI :
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
