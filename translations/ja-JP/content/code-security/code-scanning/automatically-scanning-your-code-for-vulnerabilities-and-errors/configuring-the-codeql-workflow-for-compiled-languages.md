---
title: コンパイル型言語で用いる CodeQL のワークフローを設定する
shortTitle: コンパイル言語の設定
intro: '{% data variables.product.prodname_dotcom %} が {% data variables.product.prodname_codeql_workflow %} を使用してコンパイル型言語で記述されたコードの脆弱性やエラーをスキャンする方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - C/C++
  - C#
  - Java
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_codeql_workflow %} とコンパイル型言語について

{% data variables.product.prodname_dotcom %} がリポジトリに対して {% data variables.product.prodname_code_scanning %} を実行できるようにするには、{% data variables.product.prodname_actions %} ワークフローをリポジトリに追加します。 **Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools. 詳しい情報については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data reusables.code-scanning.edit-workflow %}
{% data variables.product.prodname_code_scanning %}の設定とワークフローファイルの編集に関する一般的な情報については、「[{% data variables.product.prodname_code_scanning %}の設定](/code-security/secure-coding/configuring-code-scanning)」及び「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」を参照してください。

## {% data variables.product.prodname_codeql %} の autobuild について

コードスキャンは、1 つ以上のデータベースに対してクエリを実行することにより機能します。 各データベースには、リポジトリにあるすべてのコードを 1 つの言語で表わしたものが含まれています。 コンパイル型言語の C/C++、C#、および Java では、このデータベースを生成するプロセスに、コードのビルドとデータの抽出が含まれています。 {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

ワークフローが `language` マトリクスを使用している場合、`autobuild` はマトリクスに列記された各コンパイル型言語のビルドを試行します。 マトリクスがない場合、`autobuild` はリポジトリ内でソースファイルの数が最も多い、サポートされているコンパイル型言語のビルドを試行します。 Go を除いて、明示的にビルドコマンドを使用しない限り、リポジトリにある他のコンパイル型言語の解析は失敗します。

{% note %}

{% ifversion ghae %}**ノート**: {% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。
{% else %}
**注釈**: {% data variables.product.prodname_actions %} にセルフホストランナーを使用する場合、`autobuild` プロセスを使用するために追加のソフトウェアをインストールする必要がある場合があります。 さらに、リポジトリに特定のバージョンのビルドツールが必要な場合は、手動でインストールする必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

{% endnote %}

### C/C++

| サポートされているシステムの種類 | システム名                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| オペレーティングシステム     | Windows、macOS、Linux                                                                                                         |
| ビルドシステム          | Windows: MSbuild およびビルドスクリプト<br/>Linux および macOS: Autoconf、Make、CMake、qmake、 Meson、Waf、SCons、Linux Kbuild、およびビルドスクリプト |

`autobuild` ステップの動作は、抽出を実行するオペレーティングシステムによって異なります。 Windowsでは、`autobuild`ステップは以下のアプローチを使ってC/C++のための適切なビルド方法を自動検出しようとします。

1. ルートに最も近いソリューション (`.sln`) またはプロジェクト (`.vcxproj`) ファイルで `MSBuild.exe` を呼び出します。 `autobuild` が最上位ディレクトリから同じ（最短）深度で複数のソリューションまたはプロジェクトファイルを検出した場合、それらすべてをビルドしようとします。
2. ビルドスクリプトのように見えるスクリプト、つまり _build.bat_、_build.cmd_、_および build.exe_ を、この順番で呼び出します。

LinuxとmacOSでは、`autobuild`ステップはリポジトリ中にあるファイルをレビューして、使用されているビルドシステムを判断します。

1. ルートディレクトリでビルドシステムを探します。
2. 何も見つからない場合は、C/C++ のビルドシステムで一意のディレクトリをサブディレクトリで検索します。
3. 適切なコマンドを実行してシステムを設定します。

### C

| サポートされているシステムの種類 | システム名                      |
| ---------------- | -------------------------- |
| オペレーティングシステム     | Windows、Linux              |
| ビルドシステム          | .NET と MSbuild、およびビルドスクリプト |

`autobuild` プロセスは、次のアプローチを使用して C# に適したビルドメソッドを自動検出しようとします。

1. ルートに最も近いソリューション（`.sln`）またはプロジェクト（`.csproj`）ファイルで `dotnet build` を呼び出します。
2. ルートに最も近いソリューションまたはプロジェクトファイルで `MSbuild`（Linux）または `MSBuild.exe`（Windows）を呼び出します。 `autobuild` が最上位ディレクトリから同じ（最短）深度で複数のソリューションまたはプロジェクトファイルを検出した場合、それらすべてをビルドしようとします。
3. ビルドスクリプトのように見えるスクリプト、つまり _build_ と _build.sh_（Linux の場合、この順序で）または _build.bat_、_build.cmd_、および _build.exe_（Windows の場合、この順序で）を呼び出します。

### Java

| サポートされているシステムの種類 | システム名                      |
| ---------------- | -------------------------- |
| オペレーティングシステム     | Windows、macOS、Linux (制限なし) |
| ビルドシステム          | Gradle、Maven、Ant           |

`autobuild` プロセスは、この戦略を適用して Java コードベースのビルドシステムを決定しようとします。

1. ルートディレクトリでビルドファイルを検索します。 Gradle、Maven、Ant の各ビルドファイルを確認します。
2. 最初に見つかったビルドファイルを実行します。 Gradle ファイルと Maven ファイルの両方が存在する場合は、Gradle ファイルが使用されます。
3. それ以外の場合は、ルートディレクトリの直接サブディレクトリ内でビルドファイルを検索します。 1 つのサブディレクトリにのみビルドファイルが含まれている場合は、そのサブディレクトリで識別された最初のファイルを実行します（1 と同じ環境設定を使用）。 複数のサブディレクトリにビルドファイルが含まれている場合は、エラーを報告します。

## コンパイル言語のビルドステップを追加する

{% data reusables.code-scanning.autobuild-add-build-steps %}ワークフローファイルの編集方法については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。

`autobuild` ステップを削除した後、`run` ステップのコメントを外して、リポジトリに適したビルドコマンドを追加します。 ワークフロー `run` ステップは、オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 これらのコマンドを変更し、さらにコマンドを追加して、ビルドプロセスをカスタマイズできます。

``` yaml
- run: |
  make bootstrap
  make release
```

`run` キーワードに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

複数のコンパイル言語を含むリポジトリでは、言語に固有のビルドコマンドを指定できます。 たとえば、リポジトリがC/C++、C#、Javaを含んでおり、`autobuild`が正しくC/C++をビルドするもののJavaのビルドには失敗するなら、`init`ステップ後にワークフロー中で以下の設定を利用できるでしょう。 これは、引き続きC/C++とC#に`autobuild`を使いながら、Javaにはビルドステップを指定します。

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

`if`条件演算子に関する詳しい情報については「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)」を参照してください。

`autobuild` がコードをビルドしない理由に関するヒントやビルドの方法については、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。

コンパイル言語にマニュアルのビルドステップを追加しても、リポジトリで依然として{% data variables.product.prodname_code_scanning %}が動作しない場合は、{% data variables.contact.contact_support %}にお問い合わせください。
