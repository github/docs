---
title: CodeQL ランナーから CodeQL CLI への移行
shortTitle: Migrating from the CodeQL runner
intro: '{% data variables.product.prodname_codeql_cli %} を使用して、{% data variables.code-scanning.codeql_runner %} と同じタスクを完了できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161265'
---
# {% data variables.code-scanning.codeql_runner %} から {% data variables.product.prodname_codeql_cli %} への移行

{% data variables.code-scanning.codeql_runner %} は非推奨になっています。 代わりに {% data variables.product.prodname_codeql_cli %} バージョン 2.6.2 以降をお使いいただけます。
このドキュメントでは、一般的なワークフローを {% data variables.code-scanning.codeql_runner %} から {% data variables.product.prodname_codeql_cli %} に移行する方法について説明します。

## インストール

**{% data variables.product.prodname_codeql %} バンドルを** [`github/codeql-action` リポジトリ](https://github.com/github/codeql-action/releases)からダウンロードします。 このバンドルには、{% data variables.product.prodname_codeql_cli %} および、標準の {% data variables.product.prodname_codeql %} クエリとライブラリが含まれています。

{% data variables.product.prodname_codeql_cli %} の設定の詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} のインストール](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

## ワークフローの変更の概要

{% data variables.code-scanning.codeql_runner %} を使用してコードベースを分析する一般的なワークフローには、次の手順があります。
- `codeql-runner-<platform> init` により、{% data variables.product.prodname_codeql %} データベースの作成を開始して、構成を読み取ります。
- コンパイル済み言語の場合: `init` ステップによって生成される環境変数を設定します。
- コンパイル済み言語の場合: 自動ビルドまたは手動ビルド手順を実行します。
- `codeql-runner-<platform> analyze` により {% data variables.product.prodname_codeql %} データベースの作成を完了し、クエリを実行して各 {% data variables.product.prodname_codeql %} データベースを分析して、SARIF ファイルで結果を要約し、結果を {% data variables.product.prodname_dotcom %} にアップロードします。

{% data variables.product.prodname_codeql_cli %} を使用してコードベースを分析する一般的なワークフローには、次の手順があります。
- `codeql database create` によって、{% data variables.product.prodname_codeql %} データベースを作成します。
  - コンパイル済み言語の場合: 必要に応じてビルド コマンドを指定します。
- `codeql database analyze` では、クエリを実行して各 {% data variables.product.prodname_codeql %} データベースを分析し、結果を SARIF ファイルにまとめます。 このコマンドは、言語またはデータベースごとに 1 回実行する必要があります。
- `codeql github upload-results` により、結果の SARIF ファイルを {% data variables.product.prodname_dotcom %} にアップロードし、コード スキャン アラートとして表示します。 このコマンドは、言語または SARIF ファイルごとに 1 回実行する必要があります。

{% data variables.code-scanning.codeql_runner %} は、既定ではマルチスレッドです。 既定では、{% data variables.product.prodname_codeql_cli %} により単一のスレッドのみが使用されますが、使用するスレッドの数を指定できます。 {% data variables.code-scanning.codeql_runner %} の動作をレプリケートして、{% data variables.product.prodname_codeql_cli %} を使用するときにマシンで使用可能なすべてのスレッドを使用する場合は、`--threads 0` を `codeql database analyze` に渡します。

詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} の構成](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)」を参照してください。

## {% data variables.product.prodname_codeql_cli %} の一般的な使用例

### 例について

これらの例では、ソース コードが現在の作業ディレクトリにチェックアウトされていることを前提としています。 別のディレクトリを使用する場合は、それに応じて `--source-root` 引数とビルド手順を変更します。

また、これらの例では、{% data variables.product.prodname_codeql_cli %} が現在の PATH に配置されていることも前提としています。

これらの例では、適切なスコープを持つ {% data variables.product.prodname_dotcom %} トークンが `$TOKEN` 環境変数に格納され、`stdin` を介して、サンプル コマンドに渡されるか、`$GITHUB_TOKEN` 環境変数に格納されます。

これらの例でチェックアウトおよび分析されている ref 名とコミット SHA は、ワークフロー中に認識されます。 ブランチの場合は、ref として使用 `refs/heads/BRANCH-NAME` します。pull request のヘッド コミットには `refs/pull/NUMBER/head` を使用します。 pull request の {% data variables.product.prodname_dotcom %} で生成されたマージ コミットの場合は、`refs/pull/NUMBER/merge` を使用します。 下記の例では、`refs/heads/main` を使用しています。 別のブランチ名を使用する場合は、サンプル コードを変更する必要があります。

### 単一のコンパイルされていない言語 (JavaScript)

ランナー:
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

### 別のクエリ スイート (セキュリティと品質) を使用する単一のコンパイルされていない言語 (JavaScript)

コンパイル済みの言語や複数の言語に対しても、同様の方法を使用できます。

ランナー:
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

### カスタム構成ファイルを使用する単一のコンパイルされていない言語 (JavaScript)

コンパイル済みの言語や複数の言語に対しても、同様の方法を使用できます。

ランナー:
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

### 自動ビルドを使用する単一のコンパイル済みの言語 (Java)

ランナー:
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

### カスタム ビルド コマンドを使用する単一のコンパイル済みの言語 (Java)

ランナー:
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

### 間接ビルド トレースを使用する単一のコンパイル済み言語 (Azure DevOps 内のWindows 上の C#)

コンパイル済み言語の間接ビルド トレースを使用すると、{% data variables.product.prodname_codeql %} で、オートビルダーまたは明示的なビルド コマンド ラインを使用してコードをビルドできない場合に、`init` と `analyze` ステップの間のすべてのビルド ステップを検出できるようになります。 これは、CI システムから、Azure DevOps 内の `VSBuild` と `MSBuild` タスクなどの、構成済みのビルド ステップを使用する場合に便利です。

ランナー:
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

### 自動ビルドを使用する複数の言語 (C++、Python)

この例は、{% data variables.code-scanning.codeql_runner %} では厳密には可能ではありません。
分析されるのは、1 つの言語 (ほとんどのファイルを含むコンパイル済みの言語) だけです。

ランナー:
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

### カスタム ビルド コマンドを使用する複数の言語 (C++、Python)

ランナー:
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
