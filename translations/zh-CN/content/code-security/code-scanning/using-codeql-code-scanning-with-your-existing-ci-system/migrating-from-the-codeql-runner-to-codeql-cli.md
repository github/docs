---
title: 从 CodeQL 运行器迁移到 CodeQL CLI
shortTitle: 从 CodeQL 运行器迁移
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
---

# 从 {% data variables.product.prodname_codeql_runner %} 迁移到 {% data variables.product.prodname_codeql_cli %}

{% data variables.product.prodname_codeql_runner %} 将被弃用。 您可以改用 {% data variables.product.prodname_codeql_cli %} 版本 2.6.2 及更高版本。 本文档介绍如何将常见工作流程从 {% data variables.product.prodname_codeql_runner %} 迁移到 {% data variables.product.prodname_codeql_cli %}。

## 安装

从 [`github/codeql-action` 存储库](https://github.com/github/codeql-action/releases)下载 **{% data variables.product.prodname_codeql %} 捆绑包**。 此捆绑包中包含 {% data variables.product.prodname_codeql_cli %} 以及标准 {% data variables.product.prodname_codeql %} 查询和库。

有关设置 {% data variables.product.prodname_codeql_cli %} 的更多信息，请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

## 工作流程更改概述

使用 {% data variables.product.prodname_codeql_runner %} 分析代码库的典型工作流程具有以下步骤。
- `codeql-runner-<platform> init` 开始创建 {% data variables.product.prodname_codeql %} 数据库并读取配置。
- 对于编译的语言：设置由 `init` 步骤产生的环境变量。
- 对于编译的语言：运行自动构建或手动构建步骤。
- `codeql-runner-<platform> analyze` 以完成 {% data variables.product.prodname_codeql %} 数据库的创建，运行查询以分析每个 {% data variables.product.prodname_codeql %} 数据库，将结果汇总到 SARIF 文件中，并将结果上传到 {% data variables.product.prodname_dotcom %}。

使用 {% data variables.product.prodname_codeql_cli %} 分析代码库的典型工作流程具有以下步骤。
- `codeql database create` 以创建 {% data variables.product.prodname_codeql %} 数据库。
  - For compiled languages: Optionally provide a build command.
- `codeql database analyze` to run queries to analyze each {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file. This command must be run once for each language or database.
- `codeql github upload-results` to upload the resulting SARIF files to {% data variables.product.prodname_dotcom %}, to be displayed as code scanning alerts. This command must be run once for each language or SARIF file.

The {% data variables.product.prodname_codeql_runner %} is multithreaded by default. The {% data variables.product.prodname_codeql_cli %} only uses a single thread by default, but allows you to specify the amount of threads you want it to use. If you want to replicate the behavior of the {% data variables.product.prodname_codeql_runner %} to use all threads available on the machine when using the {% data variables.product.prodname_codeql_cli %}, you can pass `--threads 0` to `codeql database analyze`.

For more information, see "[Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)."

## Examples of common uses for the {% data variables.product.prodname_codeql_cli %}

### About the examples

These examples assume that the source code has been checked out to the current working directory. If you use a different directory, change the `--source-root` argument and the build steps accordingly.

These examples also assume that the {% data variables.product.prodname_codeql_cli %} is placed on the current PATH.

In these examples, a {% data variables.product.prodname_dotcom %} token with suitable scopes is stored in the `$TOKEN` environment variable and passed to the example commands via `stdin`, or is stored in the `$GITHUB_TOKEN` environment variable.

The ref name and commit SHA being checked out and analyzed in these examples are known during the workflow. For a branch, use `refs/heads/BRANCH-NAME` as the ref. For the head commit of a pull request, use `refs/pull/NUMBER/head`. For a {% data variables.product.prodname_dotcom %}-generated merge commit of a pull request, use `refs/pull/NUMBER/merge`. The examples below all use `refs/heads/main`. If you use a different branch name, you must modify the sample code.

### Single non-compiled language (JavaScript)

Runner:
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

### 使用不同查询套件 (security-and-quality) 的单个非编译语言 (JavaScript)

对于编译语言或多种语言，可以采用类似的方法。

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

### 使用自定义配置文件的单个非编译语言 (JavaScript)

对于编译语言或多种语言，可以采用类似的方法。

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

### 使用自动构建的单一编译语言 (Java)

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

### 使用自定义构建命令的单一编译语言 (Java)

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

### 使用间接构建跟踪的单一编译语言（Azure DevOps 中的 Windows 上的 C#）

当无法使用自动构建器或显式构建命令行构建代码时，已编译语言的间接构建跟踪可让 {% data variables.product.prodname_codeql %} 检测 `init` 与 `analyze` 之间的所有构建步骤。 这在使用 CI 系统中预配置的构建步骤（如 azure DevOps 中的 `VSBuild` 和 `MSBuild` 任务）时非常有用。

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

### 使用自动构建的多种语言（C++、Python）

此示例在 {% data variables.product.prodname_codeql_runner %} 中并非严格可行。 将仅分析一种语言（文件最多的编译语言）。

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

### 使用自定义构建命令的多种语言（C++、Python）

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
