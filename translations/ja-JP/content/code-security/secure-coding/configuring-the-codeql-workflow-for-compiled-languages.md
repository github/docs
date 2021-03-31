---
title: Configuring the CodeQL workflow for compiled languages
shortTitle: コンパイルされた言語を設定する
intro: 'You can configure how {% data variables.product.prodname_dotcom %} uses the {% data variables.product.prodname_codeql_workflow %} to scan code written in compiled languages for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - セキュリティ
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### About the {% data variables.product.prodname_codeql_workflow %} and compiled languages

You set up {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %}
For general information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" and  "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### {% data variables.product.prodname_codeql %} の autobuild について

Code scanning works by running queries against one or more databases. Each database contains a representation of all of the code in a single language in your repository. For the compiled languages C/C++, C#, and Java, the process of populating this database involves building the code and extracting data. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

If your workflow uses a `language` matrix, `autobuild` attempts to build each of the compiled languages listed in the matrix. Without a matrix `autobuild` attempts to build the supported compiled language that has the most source files in the repository. With the exception of Go, analysis of other compiled languages in your repository will fail unless you supply explicit build commands.

{% note %}

{% if currentVersion == "github-ae@latest" %}**Note**: For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
**注釈**: {% data variables.product.prodname_actions %} にセルフホストランナーを使用する場合、`autobuild` プロセスを使用するために追加のソフトウェアをインストールする必要がある場合があります。 さらに、リポジトリに特定のバージョンのビルドツールが必要な場合は、手動でインストールする必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

{% endnote %}

#### C/C++

| サポートされているシステムの種類 | システム名                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| オペレーティングシステム     | Windows, macOS, and Linux                                                                                                                      |
| ビルドシステム          | Windows: MSbuild and build scripts<br/>Linux and macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild, and build scripts |

`autobuild` ステップの動作は、抽出を実行するオペレーティングシステムによって異なります。 On Windows, the `autobuild` step attempts to autodetect a suitable build method for C/C++ using the following approach:

1. Invoke `MSBuild.exe` on the solution (`.sln`) or project (`.vcxproj`) file closest to the root. `autobuild` が最上位ディレクトリから同じ（最短）深度で複数のソリューションまたはプロジェクトファイルを検出した場合、それらすべてをビルドしようとします。
2. Invoke a script that looks like a build script—_build.bat_, _build.cmd_, _and build.exe_ (in that order).

On Linux and macOS, the `autobuild` step reviews the files present in the repository to determine the build system used:

1. ルートディレクトリでビルドシステムを探します。
2. 何も見つからない場合は、C/C++ のビルドシステムで一意のディレクトリをサブディレクトリで検索します。
3. 適切なコマンドを実行してシステムを設定します。

#### C

| サポートされているシステムの種類 | システム名                      |
| ---------------- | -------------------------- |
| オペレーティングシステム     | Windows、Linux              |
| ビルドシステム          | .NET と MSbuild、およびビルドスクリプト |

`autobuild` プロセスは、次のアプローチを使用して C# に適したビルドメソッドを自動検出しようとします。

1. ルートに最も近いソリューション（`.sln`）またはプロジェクト（`.csproj`）ファイルで `dotnet build` を呼び出します。
2. ルートに最も近いソリューションまたはプロジェクトファイルで `MSbuild`（Linux）または `MSBuild.exe`（Windows）を呼び出します。 `autobuild` が最上位ディレクトリから同じ（最短）深度で複数のソリューションまたはプロジェクトファイルを検出した場合、それらすべてをビルドしようとします。
3. ビルドスクリプトのように見えるスクリプト、つまり _build_ と _build.sh_（Linux の場合、この順序で）または _build.bat_、_build.cmd_、および _build.exe_（Windows の場合、この順序で）を呼び出します。

#### Java

| サポートされているシステムの種類 | システム名                                      |
| ---------------- | ------------------------------------------ |
| オペレーティングシステム     | Windows, macOS, and Linux (no restriction) |
| ビルドシステム          | Gradle、Maven、Ant                           |

`autobuild` プロセスは、この戦略を適用して Java コードベースのビルドシステムを決定しようとします。

1. ルートディレクトリでビルドファイルを検索します。 Gradle、Maven、Ant の各ビルドファイルを確認します。
2. 最初に見つかったビルドファイルを実行します。 Gradle ファイルと Maven ファイルの両方が存在する場合は、Gradle ファイルが使用されます。
3. それ以外の場合は、ルートディレクトリの直接サブディレクトリ内でビルドファイルを検索します。 1 つのサブディレクトリにのみビルドファイルが含まれている場合は、そのサブディレクトリで識別された最初のファイルを実行します（1 と同じ環境設定を使用）。 複数のサブディレクトリにビルドファイルが含まれている場合は、エラーを報告します。

### コンパイル言語のビルドステップを追加する

{% data reusables.code-scanning.autobuild-add-build-steps %} For information on how to edit the workflow file, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)."

`autobuild` ステップを削除した後、`run` ステップのコメントを外して、リポジトリに適したビルドコマンドを追加します。 ワークフロー `run` ステップは、オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 これらのコマンドを変更し、さらにコマンドを追加して、ビルドプロセスをカスタマイズできます。

``` yaml
- run: |
  make bootstrap
  make release
```

`run` キーワードに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

If your repository contains multiple compiled languages, you can specify language-specific build commands. For example, if your repository contains C/C++, C# and Java, and `autobuild` correctly builds C/C++ and C# but fails to build Java, you could use the following configuration in your workflow, after the `init` step. This specifies build steps for Java while still using `autobuild` for C/C++ and C#:

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

For more information about the `if` conditional, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)."

For more tips and tricks about why `autobuild` won't build your code, see "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/code-security/secure-coding/troubleshooting-the-codeql-workflow)."

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.
