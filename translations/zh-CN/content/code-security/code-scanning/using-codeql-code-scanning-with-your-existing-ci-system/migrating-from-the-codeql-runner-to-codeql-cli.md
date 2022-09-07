---
title: 从 CodeQL 运行器迁移到 CodeQL CLI
shortTitle: Migrating from the CodeQL runner
intro: '您可以使用 {% data variables.product.prodname_codeql_cli %} 完成与 {% data variables.product.prodname_codeql_runner %} 相同的任务。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098908'
---
# 从 {% data variables.product.prodname_codeql_runner %} 迁移到 {% data variables.product.prodname_codeql_cli %}

{% data variables.product.prodname_codeql_runner %} 将被弃用。 您可以改用 {% data variables.product.prodname_codeql_cli %} 版本 2.6.2 及更高版本。
本文档介绍如何将常见工作流程从 {% data variables.product.prodname_codeql_runner %} 迁移到 {% data variables.product.prodname_codeql_cli %}。

## 安装

从 [`github/codeql-action` 存储库](https://github.com/github/codeql-action/releases)下载 {% data variables.product.prodname_codeql %} 捆绑包。 此捆绑包中包含 {% data variables.product.prodname_codeql_cli %} 以及标准 {% data variables.product.prodname_codeql %} 查询和库。

有关设置 {% data variables.product.prodname_codeql_cli %} 的详细信息，请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

## 工作流程更改概述

使用 {% data variables.product.prodname_codeql_runner %} 分析代码库的典型工作流程具有以下步骤。
- 使用 `codeql-runner-<platform> init` 开始创建 {% data variables.product.prodname_codeql %} 数据库并读取配置。
- 对于编译的语言：设置 `init` 步骤生成的环境变量。
- 对于编译的语言：运行自动构建或手动构建步骤。
- 使用 `codeql-runner-<platform> analyze` 完成创建 {% data variables.product.prodname_codeql %} 数据库，运行查询以分析每个 {% data variables.product.prodname_codeql %} 数据库，将结果汇总到 SARIF 文件，并将结果上传到 {% data variables.product.prodname_dotcom %}。

使用 {% data variables.product.prodname_codeql_cli %} 分析代码库的典型工作流程具有以下步骤。
- 使用 `codeql database create` 创建 {% data variables.product.prodname_codeql %} 数据库。
  - 对于编译的语言：（可选）提供构建命令。
- 使用 `codeql database analyze` 运行查询以分析每个 {% data variables.product.prodname_codeql %} 数据库，并将结果汇总到 SARIF 文件中。 必须对每种语言或每个数据库运行一次此命令。
- 使用 `codeql github upload-results` 将生成的 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}，以显示为代码扫描警报。 必须对每种语言或每个 SARIF 文件运行一次此命令。

默认情况下，{% data variables.product.prodname_codeql_runner %} 是多线程的。 默认情况下，{% data variables.product.prodname_codeql_cli %} 仅使用单线程，但允许您指定希望它使用的线程数。 如果要复制 {% data variables.product.prodname_codeql_runner %} 的行为，以在使用 {% data variables.product.prodname_codeql_cli %} 时使用计算机上的所有可用线程，可以将 `--threads 0` 传递给 `codeql database analyze`。

有关详细信息，请参阅“[在 CI 系统中配置 {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)”。

## {% data variables.product.prodname_codeql_cli %} 的常见使用示例

### 关于示例

这些示例假定源代码已检出到当前工作目录。 如果使用其他目录，请相应地更改 `--source-root` 参数和生成步骤。

这些示例还假定 {% data variables.product.prodname_codeql_cli %} 位于当前 PATH 上。

在这些示例中，具有适当范围的 {% data variables.product.prodname_dotcom %} 令牌存储在 `$TOKEN` 环境变量中，并通过 `stdin` 传递给示例命令，或者存储在 `$GITHUB_TOKEN` 环境变量中。

在这些示例中检出和分析的引用名称和提交 SHA 在工作流程期间是已知的。 对于分支，请使用 `refs/heads/BRANCH-NAME` 作为引用。对于拉取请求的头提交，请使用 `refs/pull/NUMBER/head`。 对于 {% data variables.product.prodname_dotcom %} 生成的拉取请求合并提交，请使用 `refs/pull/NUMBER/merge`。 下面的示例均使用 `refs/heads/main`。 如果使用其他分支名称，则必须修改示例代码。

### 单一非编译语言 (JavaScript)

运行器：
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI：
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

### 使用不同查询套件 (security-and-quality) 的单个非编译语言 (JavaScript)

对于编译语言或多种语言，可以采用类似的方法。

运行器：
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI：
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

### 使用自定义配置文件的单个非编译语言 (JavaScript)

对于编译语言或多种语言，可以采用类似的方法。

运行器：
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI：
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

### 使用自动构建的单一编译语言 (Java)

运行器：
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
CLI：
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

### 使用自定义构建命令的单一编译语言 (Java)

运行器：
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
CLI：
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

### 使用间接构建跟踪的单一编译语言（Azure DevOps 中的 Windows 上的 C#）

当无法使用自动生成器或显式生成命令行生成代码时，已编译语言的间接生成跟踪可让 {% data variables.product.prodname_codeql %} 检测 `init` 与 `analyze` 步骤之间的所有生成步骤。 在使用 CI 系统中的预配置生成步骤（例如 Azure DevOps 中的 `VSBuild` 和 `MSBuild` 任务）时，这非常有用。

运行器：
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

CLI：
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

### 使用自动构建的多种语言（C++、Python）

此示例在 {% data variables.product.prodname_codeql_runner %} 中并非严格可行。
将仅分析一种语言（文件最多的编译语言）。

运行器：
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

CLI：
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

### 使用自定义构建命令的多种语言（C++、Python）

运行器：
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

CLI：
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
