---
title: Configuring the CodeQL action for compiled languages
shortTitle: コンパイルされた言語を設定する
intro: 'You can configure how {% data variables.product.prodname_dotcom %} uses the {% data variables.product.prodname_codeql_workflow %} to scan code written in compiled languages for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_code_scanning %} を設定できます。'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### About the {% data variables.product.prodname_codeql_workflow %} and compiled languages

You enable {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`on.push` イベントを使用して、ワークフローファイルを含むブランチへのプッシュごとにコードスキャンをトリガーします。

{% data reusables.code-scanning.edit-workflow %}
For general information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and  "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### {% data variables.product.prodname_codeql %} の autobuild について

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% note %}

**注釈**: {% data variables.product.prodname_actions %} にセルフホストランナーを使用する場合、`autobuild` プロセスを使用するために追加のソフトウェアをインストールする必要がある場合があります。 さらに、リポジトリに特定のバージョンのビルドツールが必要な場合は、手動でインストールする必要があります。 詳しい情報については「[GitHUbホストランナーにインストールされているソフトウェア](/actions/reference/software-installed-on-github-hosted-runners)」を参照してください。

{% endnote %}

#### C/C++

| サポートされているシステムの種類 | システム名                                             |
| ---------------- | ------------------------------------------------- |
| オペレーティングシステム     | Windows、Linux                                     |
| ビルドシステム          | Autoconf、CMake、qmake、Meson、Waf、SCons、Linux Kbuild |

`autobuild` ステップの動作は、抽出を実行するオペレーティングシステムによって異なります。 Windows では、ステップにデフォルトのアクションはありません。 Linux では、このステップでリポジトリにあるファイルを確認して、使用されているビルドシステムを判断します。

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

| サポートされているシステムの種類 | システム名                     |
| ---------------- | ------------------------- |
| オペレーティングシステム     | Windows、macOS、Linux（制限なし） |
| ビルドシステム          | Gradle、Maven、Ant          |

`autobuild` プロセスは、この戦略を適用して Java コードベースのビルドシステムを決定しようとします。

1. ルートディレクトリでビルドファイルを検索します。 Gradle、Maven、Ant の各ビルドファイルを確認します。
2. 最初に見つかったビルドファイルを実行します。 Gradle ファイルと Maven ファイルの両方が存在する場合は、Gradle ファイルが使用されます。
3. それ以外の場合は、ルートディレクトリの直接サブディレクトリ内でビルドファイルを検索します。 1 つのサブディレクトリにのみビルドファイルが含まれている場合は、そのサブディレクトリで識別された最初のファイルを実行します（1 と同じ環境設定を使用）。 複数のサブディレクトリにビルドファイルが含まれている場合は、エラーを報告します。

### コンパイル言語のビルドステップを追加する

{% data reusables.code-scanning.autobuild-add-build-steps %} ワークフローの編集については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。

`autobuild` ステップを削除した後、`run` ステップのコメントを外して、リポジトリに適したビルドコマンドを追加します。 ワークフロー `run` ステップは、オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 これらのコマンドを変更し、さらにコマンドを追加して、ビルドプロセスをカスタマイズできます。

``` yaml
- run: |
  make bootstrap
  make release
```

`run` キーワードに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

ビルドマトリックスを使用してワークフローを更新し、複数のコンパイルされた言語をビルドすることもできます（これがシステムに適切なアプローチであり、競合が発生しない場合）。 詳しい情報については、「[ビルドマトリックスを設定する](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)」を参照してください。


たとえば、以下のワークフローでは、C/C + 分析用のジョブと、Java 分析用の別のジョブを実行します。

```yaml

name: "Code Scanning - Action"

on:
  pull_request:
    branches: [master]
  push:
    branches: [master]

jobs:
  CodeQL-Build:

    strategy:
      fail-fast: false
      matrix:
        language: [ 'cpp', 'java']

    # CodeQL runs on ubuntu-latest, windows-latest, and macos-latest
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}

    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # このステップが失敗した場合は、それを削除して手動でビルドを実行する必要があります。
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
```

`autobuild` がコードをビルドしない理由に関するヒントと方法については、「[{% data variables.product.prodname_code_scanning %} のトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)」を参照してください。

コンパイルされた言語の手動ビルドステップを追加した場合、またはビルドマトリックスを使用しても、{% data variables.product.prodname_code_scanning %} がリポジトリで機能しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。
