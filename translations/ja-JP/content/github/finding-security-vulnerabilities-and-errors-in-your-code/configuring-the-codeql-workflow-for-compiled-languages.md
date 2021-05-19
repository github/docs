---
title: コンパイル型言語で用いる CodeQL のワークフローを設定する
shortTitle: コンパイルされた言語を設定する
intro: '{% data variables.product.prodname_dotcom %} が {% data variables.product.prodname_codeql_workflow %} を使用してコンパイル型言語で記述されたコードの脆弱性やエラーをスキャンする方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### {% data variables.product.prodname_codeql_workflow %} とコンパイル型言語について

{% data variables.product.prodname_dotcom %} がリポジトリに対して {% data variables.product.prodname_code_scanning %} を実行できるようにするには、{% data variables.product.prodname_actions %} ワークフローをリポジトリに追加します。 **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. 詳しい情報については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data reusables.code-scanning.edit-workflow %}
{% data variables.product.prodname_code_scanning %} の設定とワークフローファイルの編集に関する一般的な情報については、 「[{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning) を設定する」および「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

### {% data variables.product.prodname_codeql %} の autobuild について

コードスキャンは、1 つ以上のデータベースに対してクエリを実行することにより機能します。 各データベースには、リポジトリにあるすべてのコードを 1 つの言語で表わしたものが含まれています。 コンパイル型言語の C/C++、C#、および Java では、このデータベースを生成するプロセスに、コードのビルドとデータの抽出が含まれています。 {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

ワークフローが `language` マトリクスを使用している場合、`autobuild` はマトリクスに列記された各コンパイル型言語のビルドを試行します。 マトリクスがない場合、`autobuild` はリポジトリ内でソースファイルの数が最も多い、サポートされているコンパイル型言語のビルドを試行します。 Go を除いて、明示的にビルドコマンドを使用しない限り、リポジトリにある他のコンパイル型言語の解析は失敗します。

{% note %}

**注釈**: {% data variables.product.prodname_actions %} にセルフホストランナーを使用する場合、`autobuild` プロセスを使用するために追加のソフトウェアをインストールする必要がある場合があります。 さらに、リポジトリに特定のバージョンのビルドツールが必要な場合は、手動でインストールする必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。

{% endnote %}

#### C/C++

| サポートされているシステムの種類 | システム名                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| オペレーティングシステム     | Windows、macOS、Linux                                                                                                         |
| ビルドシステム          | Windows: MSbuild およびビルドスクリプト<br/>Linux および macOS: Autoconf、Make、CMake、qmake、 Meson、Waf、SCons、Linux Kbuild、およびビルドスクリプト |

`autobuild` ステップの動作は、抽出を実行するオペレーティングシステムによって異なります。 On Windows, the `autobuild` step attempts to autodetect a suitable build method for C/C++ using the following approach:

1. ルートに最も近いソリューション (`.sln`) またはプロジェクト (`.vcxproj`) ファイルで `MSBuild.exe` を呼び出します。 `autobuild` が最上位ディレクトリから同じ（最短）深度で複数のソリューションまたはプロジェクトファイルを検出した場合、それらすべてをビルドしようとします。
2. ビルドスクリプトのように見えるスクリプト、つまり _build.bat_、_build.cmd_、_および build.exe_ を、この順番で呼び出します。

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

| サポートされているシステムの種類 | システム名                      |
| ---------------- | -------------------------- |
| オペレーティングシステム     | Windows、macOS、Linux (制限なし) |
| ビルドシステム          | Gradle、Maven、Ant           |

`autobuild` プロセスは、この戦略を適用して Java コードベースのビルドシステムを決定しようとします。

1. ルートディレクトリでビルドファイルを検索します。 Gradle、Maven、Ant の各ビルドファイルを確認します。
2. 最初に見つかったビルドファイルを実行します。 Gradle ファイルと Maven ファイルの両方が存在する場合は、Gradle ファイルが使用されます。
3. それ以外の場合は、ルートディレクトリの直接サブディレクトリ内でビルドファイルを検索します。 1 つのサブディレクトリにのみビルドファイルが含まれている場合は、そのサブディレクトリで識別された最初のファイルを実行します（1 と同じ環境設定を使用）。 複数のサブディレクトリにビルドファイルが含まれている場合は、エラーを報告します。

### コンパイル言語のビルドステップを追加する

{% data reusables.code-scanning.autobuild-add-build-steps %}ワークフローファイルの編集方法については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。

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

`autobuild` がコードをビルドしない理由に関するヒントやビルドの方法については、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)」を参照してください。

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.
