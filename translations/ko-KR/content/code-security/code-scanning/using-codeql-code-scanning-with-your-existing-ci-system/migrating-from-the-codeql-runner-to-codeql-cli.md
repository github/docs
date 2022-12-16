---
title: CodeQL Runner에서 CodeQL CLI로 마이그레이션
shortTitle: Migrating from the CodeQL runner
intro: '{% data variables.product.prodname_codeql_cli %}을(를) 사용하여 {% data variables.code-scanning.codeql_runner %}와 동일한 작업을 완료할 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161266'
---
# {% data variables.code-scanning.codeql_runner %}에서 {% data variables.product.prodname_codeql_cli %}로 마이그레이션

{% data variables.code-scanning.codeql_runner %}은(는) 더 이상 사용되지 않습니다. 대신 {% data variables.product.prodname_codeql_cli %} 버전 2.6.2 이상을 사용할 수 있습니다.
이 문서에서는 공통 워크플로를 {% data variables.code-scanning.codeql_runner %}에서 {% data variables.product.prodname_codeql_cli %}로 마이그레이션하는 방법을 설명합니다.

## 설치

[`github/codeql-action` 리포지토리](https://github.com/github/codeql-action/releases)에서 **{% data variables.product.prodname_codeql %} 번들** 을 다운로드합니다. 이 번들에는 {% data variables.product.prodname_codeql_cli %} 및 표준 {% data variables.product.prodname_codeql %} 쿼리 및 라이브러리가 포함되어 있습니다.

{% data variables.product.prodname_codeql_cli %} 설정에 대한 자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 설치](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”를 참조하세요.

## 워크플로 변경 개요

{% data variables.code-scanning.codeql_runner %}를 사용하여 코드베이스를 분석하는 일반적인 워크플로에는 다음 단계가 있습니다.
- `codeql-runner-<platform> init`로 {% data variables.product.prodname_codeql %} 데이터베이스 만들기를 시작하고 구성을 읽습니다.
- 컴파일된 언어의 경우: `init` 단계에서 생성된 환경 변수를 설정합니다.
- 컴파일된 언어의 경우: 자동 빌드 또는 수동 빌드 단계를 실행합니다.
- `codeql-runner-<platform> analyze`로 {% data variables.product.prodname_codeql %} 데이터베이스 만들기를 완료하고, 쿼리를 실행하여 각 {% data variables.product.prodname_codeql %} 데이터베이스를 분석하고, 결과를 SARIF 파일로 요약하고, 결과를 {% data variables.product.prodname_dotcom %}에 업로드합니다.

{% data variables.product.prodname_codeql_cli %}를 사용하여 코드베이스를 분석하는 일반적인 워크플로에는 다음 단계가 있습니다.
- `codeql database create`로 {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다.
  - 컴파일된 언어의 경우: 필요에 따라 빌드 명령을 제공합니다.
- `codeql database analyze`로 쿼리를 실행하여 각 {% data variables.product.prodname_codeql %} 데이터베이스를 분석하고, 결과를 SARIF 파일로 요약합니다. 이 명령은 각 언어 또는 데이터베이스에 대해 한 번 실행해야 합니다.
- `codeql github upload-results`로 결과 SARIF 파일을 {% data variables.product.prodname_dotcom %}에 업로드하여 코드 검사 경고로 표시합니다. 이 명령은 각 언어 또는 SARIF 파일에 대해 한 번 실행해야 합니다.

{% data variables.code-scanning.codeql_runner %}는 기본적으로 다중 스레드됩니다. {% data variables.product.prodname_codeql_cli %}는 기본적으로 단일 스레드만 사용하지만 사용할 스레드의 양을 지정할 수 있습니다. {% data variables.product.prodname_codeql_cli %}을(를) 사용할 때 컴퓨터에서 사용할 수 있는 모든 스레드를 사용하도록 {% data variables.code-scanning.codeql_runner %}의 동작을 복제하려면 에 전달할 `--threads 0` `codeql database analyze`수 있습니다.

자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 구성](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)”을 참조하세요.

## {% data variables.product.prodname_codeql_cli %}에 대한 일반적인 사용 예제

### 예제 정보

이러한 예제에서는 소스 코드가 현재 작업 디렉터리로 체크 아웃되었다고 가정합니다. 다른 디렉터리를 사용하는 경우 `--source-root` 인수 및 빌드 단계를 적절하게 변경합니다.

또한 이 예제에서는 {% data variables.product.prodname_codeql_cli %}가 현재 PATH에 있다고 가정합니다.

이 예제에서는 적절한 범위가 있는 {% data variables.product.prodname_dotcom %} 토큰이 `$TOKEN` 환경 변수에 저장되고 `stdin`을 통해 예제 명령에 전달되거나 `$GITHUB_TOKEN` 환경 변수에 저장됩니다.

이러한 예제에서 체크 아웃되고 분석되는 ref 이름 및 커밋 SHA는 워크플로 중에 알려져 있습니다. 분기의 경우 `refs/heads/BRANCH-NAME`을 참조로 사용합니다. 끌어오기 요청의 헤드 커밋의 경우 `refs/pull/NUMBER/head`를 사용합니다. 끌어오기 요청의 {% data variables.product.prodname_dotcom %}에서 생성된 병합 커밋의 경우 `refs/pull/NUMBER/merge`를 사용합니다. 아래 예제는 모두 `refs/heads/main`을 사용합니다. 다른 분기 이름을 사용하는 경우 샘플 코드를 수정해야 합니다.

### 컴파일되지 않은 단일 언어(JavaScript)

실행기:
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

### 다른 쿼리 도구 모음을 사용하는 컴파일되지 않은 단일 언어(JavaScript) (보안 및 품질)

컴파일된 언어 또는 다중 언어에 대해 비슷한 방법을 사용할 수 있습니다.

실행기:
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

### 사용자 지정 구성 파일을 사용하는 컴파일되지 않은 단일 언어(JavaScript)

컴파일된 언어 또는 다중 언어에 대해 비슷한 방법을 사용할 수 있습니다.

실행기:
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

### 자동 빌드를 사용하여 컴파일된 단일 언어(Java)

실행기:
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

### 사용자 지정 빌드 명령을 사용하여 컴파일된 단일 언어(Java)

실행기:
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

### 간접 빌드 추적을 사용하여 컴파일된 단일 언어(Azure DevOps 내 Windows C#)

컴파일된 언어에 대한 간접 빌드 추적을 사용하면 {% data variables.product.prodname_codeql %}에서 자동 빌드 관리자 또는 명시적 빌드 명령줄을 사용하여 코드를 빌드할 수 없는 경우 `init` 및 `analyze` 단계 간 모든 빌드 단계를 검색할 수 있습니다. 이는 CI 시스템의 미리 구성된 빌드 단계(예: Azure DevOps의 `VSBuild` 및 `MSBuild` 작업)를 사용할 때 유용합니다.

실행기:
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

### 자동 빌드를 사용하는 다중 언어(C++, Python)

이 예제는 {% data variables.code-scanning.codeql_runner %}에서 엄격하게 수행할 수 없습니다.
하나의 언어(가장 많은 파일로 컴파일된 언어)만 분석됩니다.

실행기:
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

### 사용자 지정 빌드 명령을 사용하는 다중 언어(C++, Python)

실행기:
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
