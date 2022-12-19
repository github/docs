---
title: Миграция из средства выполнения CodeQL в CodeQL CLI
shortTitle: Migrating from the CodeQL runner
intro: 'С помощью {% data variables.product.prodname_codeql_cli %} можно выполнять те же задачи, что и с {% data variables.code-scanning.codeql_runner %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161267'
---
# Переход с {% data variables.code-scanning.codeql_runner %} на {% data variables.product.prodname_codeql_cli %}

{% data variables.code-scanning.codeql_runner %} является устаревшим. Вместо него можно использовать {% data variables.product.prodname_codeql_cli %} версии 2.6.2 и более поздней.
В этом документе описывается перенос общих рабочих процессов из {% data variables.code-scanning.codeql_runner %} в {% data variables.product.prodname_codeql_cli %}.

## Установка

Загрузите **{% data variables.product.prodname_codeql %} bundle** из [репозитория `github/codeql-action`](https://github.com/github/codeql-action/releases). Этот пакет сдержит {% data variables.product.prodname_codeql_cli %} и стандартные запросы и библиотеки {% data variables.product.prodname_codeql %}.

Дополнительные сведения о настройке {% data variables.product.prodname_codeql_cli %} см. в разделе [Установка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

## Общие сведения об изменениях рабочего процесса

Типичный рабочий процесс, использующий {% data variables.code-scanning.codeql_runner %} для анализа базы кода, выполняет следующие действия.
- `codeql-runner-<platform> init` для запуска создания баз данных {% data variables.product.prodname_codeql %} и чтения конфигурации.
- Для компилируемых языков: задайте переменные среды, созданные на шаге `init`.
- Для компилируемых языков: выполните автоматическую сборку или шаги сборки вручную.
- `codeql-runner-<platform> analyze` для окончания создания баз данных {% data variables.product.prodname_codeql %}, выполните запросы для анализа каждой базы данных {% data variables.product.prodname_codeql %}, подведите итоги результатов в файле SARIF и отправьте результаты на {% data variables.product.prodname_dotcom %}.

Типичный рабочий процесс, использующий {% data variables.product.prodname_codeql_cli %} для анализа базы кода, состоит из следующих этапов.
- `codeql database create` для создания баз данных {% data variables.product.prodname_codeql %}.
  - Для компилируемых языков: при необходимости предоставьте команду сборки.
- `codeql database analyze` для выполнения запросов на анализ каждой базы данных {% data variables.product.prodname_codeql %} и сведения результатов в файле SARIF. Эта команда должна выполняться один раз для каждого языка или базы данных.
- `codeql github upload-results` для отправки результирующих файлов SARIF на {% data variables.product.prodname_dotcom %} для отображения в виде оповещений о сканировании кода. Эта команда должна выполняться один раз для каждого языка или файла SARIF.

{% data variables.code-scanning.codeql_runner %} по умолчанию имеет многопоточность. {% data variables.product.prodname_codeql_cli %} использует только один поток по умолчанию, но позволяет указать количество потоков, которые вы хотите использовать. Если вы хотите реплицировать поведение {% data variables.code-scanning.codeql_runner %} для использования всех потоков, доступных на компьютере при использовании {% data variables.product.prodname_codeql_cli %}, можно передать в `--threads 0` `codeql database analyze`.

Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

## Примеры распространенных применений для {% data variables.product.prodname_codeql_cli %}

### О примерах

В этих примерах предполагается, что исходный код извлечен в текущий рабочий каталог. Если вы используете другой каталог, измените аргумент `--source-root` и шаги сборки соответствующим образом.

В этих примерах также предполагается, что {% data variables.product.prodname_codeql_cli %} помещается в текущий PATH.

В этих примерах маркер {% data variables.product.prodname_dotcom %} с подходящими областями хранится в переменной среды `$TOKEN` и передается в примеры команд с помощью `stdin` или хранится в переменной среды `$GITHUB_TOKEN`.

Извлекаемые и анализируемые в этих примерах имя ссылки и SHA фиксации становятся известны во время рабочего процесса. Для ветви используйте `refs/heads/BRANCH-NAME` в качестве ссылки. Для головной фиксации запроса на вытягивание используйте `refs/pull/NUMBER/head`. Для фиксации запроса на вытягивание, созданной {% data variables.product.prodname_dotcom %}, используйте `refs/pull/NUMBER/merge`. Во всех следующих примерах используется `refs/heads/main`. При использовании другого имени ветви необходимо изменить пример кода.

### Один некомпилируемый язык (JavaScript)

Средство выполнения:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Интерфейс командной строки.
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

### Один некомпилируемый язык (JavaScript) с использованием другого набора запросов (безопасность и качество)

Аналогичный подход можно использовать для компилируемых языков или нескольких языков.

Средство выполнения:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Интерфейс командной строки.
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

### Один некомпилируемый язык (JavaScript) с использованием пользовательского файла конфигурации

Аналогичный подход можно использовать для компилируемых языков или нескольких языков.

Средство выполнения:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
Интерфейс командной строки.
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

### Один компилируемый язык с использованием автоматической сборки (Java)

Средство выполнения:
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
Интерфейс командной строки.
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

### Один компилируемый язык с использованием пользовательской команды сборки (Java)

Средство выполнения:
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
Интерфейс командной строки.
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

### Один компилируемый язык с использованием непрямой трассировки сборки (C# на Windows в Azure DevOps)

Непрямая трассировка сборки для компилируемого языка позволяет {% data variables.product.prodname_codeql %} обнаруживать все этапы сборки между этапами `init` и `analyze`, когда код невозможно собрать с помощью автоматического средства или явной командной строки сборки. Это полезно при использовании предварительно настроенных шагов сборки из системы CI, таких как задачи `VSBuild` и `MSBuild` в Azure DevOps.

Средство выполнения:
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

Интерфейс командной строки.
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

### Несколько языков с использованием автоматической сборки (C++, Python)

Этот пример не является строго возможным для {% data variables.code-scanning.codeql_runner %}.
Будет проанализирован только один язык (компилируемый язык с большинством файлов).

Средство выполнения:
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

Интерфейс командной строки.
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

### Несколько языков с помощью пользовательской команды сборки (C++, Python)

Средство выполнения:
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

Интерфейс командной строки.
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
