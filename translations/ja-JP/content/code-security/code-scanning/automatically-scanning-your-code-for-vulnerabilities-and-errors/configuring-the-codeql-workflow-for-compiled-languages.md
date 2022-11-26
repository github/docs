---
title: コンパイル済み言語の CodeQL ワークフローを構成する
shortTitle: Configure compiled languages
intro: '{% data variables.product.prodname_dotcom %} による {% data variables.code-scanning.codeql_workflow %}の使用方法を構成すると、コンパイル型言語で脆弱性とエラーが記述されているコードをスキャンできます。'
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
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161200'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.code-scanning.codeql_workflow %}とコンパイル型言語について

{% data variables.product.prodname_dotcom %} がリポジトリに対して {% data variables.product.prodname_code_scanning %} を実行できるようにするには、{% data variables.product.prodname_actions %} ワークフローをリポジトリに追加します。 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} では、{% data variables.code-scanning.codeql_workflow %}を追加できます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data reusables.code-scanning.edit-workflow %} {% data variables.product.prodname_code_scanning %} の構成とワークフロー ファイルの編集に関する一般的な情報については、「[{% data variables.product.prodname_code_scanning %} を構成する](/code-security/secure-coding/configuring-code-scanning)」および「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」をご覧ください。

##  {% data variables.product.prodname_codeql %} の autobuild について

{% data variables.product.prodname_code_scanning_capc %} は、1 つ以上のデータベースに対してクエリを実行することにより機能します。 各データベースには、リポジトリにあるすべてのコードを 1 つの言語で表わしたものが含まれています。   
コンパイル型言語の C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}Java では、このデータベースを生成するプロセスに、コードのビルドとデータの抽出が含まれています。 {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

ワークフローで `language` マトリックスを使っている場合、`autobuild` はマトリックスに列記された各コンパイル型言語のビルドを試行します。 マトリックスがない場合、`autobuild` は、サポートされているコンパイル型言語で、リポジトリ内のソース ファイルの数が最も多いもののビルドを試みます。 Go を除いて、明示的にビルドコマンドを使用しない限り、リポジトリにある他のコンパイル型言語の解析は失敗します。

{% note %}

{% ifversion ghae %} **注**: {% data reusables.actions.self-hosted-runners-software %} {% else %} **注**: {% data variables.product.prodname_actions %} にセルフホステッド ランナーを使う場合は、`autobuild` プロセスを使うために追加のソフトウェアをインストールすることが必要になる場合があります。 さらに、リポジトリに特定のバージョンのビルドツールが必要な場合は、手動でインストールする必要があります。 詳しくは、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの概要](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」をご覧ください。
{% endif %}

{% endnote %}

### C/C++

| サポートされているシステムの種類 | システム名 |
|----|----|
| オペレーティング システム | Windows、macOS、Linux |
| ビルドシステム | Windows: MSbuild スクリプトと build スクリプト<br/>Linux と macOS: Autoconf、Make、CMake、qmake、 Meson、Waf、SCons、Linux Kbuild、build の各スクリプト |

`autobuild` ステップの動作は、抽出を実行するオペレーティング システムによって異なります。 Windows の `autobuild` ステップでは、以下の方法を使って C/C++ に適したビルド方法の自動検出が試みられます。

1. ルートに最も近いソリューション (`.sln`) またはプロジェクト (`.vcxproj`) ファイルで `MSBuild.exe` を呼び出します。
`autobuild` が最上位ディレクトリから同じ (最短) 深度で複数のソリューションまたはプロジェクト ファイルを検出した場合、それらすべてのビルドが試みられます。
2. ビルド スクリプトのように見えるスクリプト、つまり _build.bat_、_build.cmd_、_build.exe_ を、この順番で呼び出します。

Linux と macOS の `autobuild` ステップでは、リポジトリ内にあるファイルが確認されて、使われているビルド システムが特定されます。

1. ルートディレクトリでビルドシステムを探します。
2. 何も見つからない場合は、C/C++ のビルドシステムで一意のディレクトリをサブディレクトリで検索します。
3. 適切なコマンドを実行してシステムを設定します。 

### C#

| サポートされているシステムの種類 | システム名 |
|----|----|
| オペレーティング システム | Windows と Linux |
| ビルドシステム | .NET と MSbuild、およびビルドスクリプト |

`autobuild` プロセスは、次の方法を使って C# に適したビルド方法の自動検出を試みます。

1. ルートに最も近いソリューション (`.sln`) またはプロジェクト (`.csproj`) ファイルで `dotnet build` を呼び出します。
2. ルートに最も近いソリューションまたはプロジェクト ファイルで、`MSbuild` (Linux) または `MSBuild.exe` (Windows) を呼び出します。
`autobuild` が最上位ディレクトリから同じ (最短) 深度で複数のソリューションまたはプロジェクト ファイルを検出した場合、それらすべてのビルドが試みられます。
3. ビルド スクリプトのように見えるスクリプト、つまり _build_ と _build.sh_ (Linux の場合、この順序で) または _build.bat_、_build.cmd_、_and build.exe_ (Windows の場合、この順序で) を呼び出します。

{% ifversion codeql-go-autobuild %}

### Go

| サポートされているシステムの種類 | システム名 |
|----|----|
| オペレーティング システム | Windows、macOS、Linux |
| ビルドシステム | Go モジュール、`dep`、Glide、およびメイクファイルや Ninja スクリプトを含むビルド スクリプト |

`autobuild` プロセスは、すべての `.go` ファイルを抽出する前に、Go リポジトリで必要な依存関係をインストールする適切な方法の自動検出を試みます。

1. `make`、`ninja`、または `./build` を、これらのコマンドのいずれかが成功し、その後の `./build.sh` も成功して、必要な依存関係がインストールされたことを示すまで、(この順序で) 呼び出`go list ./...`します。
2. これらのコマンドがいずれも成功しなかった場合は、`go.mod`、`Gopkg.toml`、または `glide.yaml` を探し、それぞれの `go get` (ベンダーが使用していない場合)、`dep ensure -v`、または `glide install` を実行して、依存関係のインストールを試みます。
3. 最後に、これらの依存関係マネージャーの構成ファイルが見つからない場合は、`GOPATH` に追加するのに適したリポジトリ ディレクトリ構造に調整し直し、`go get` を使って依存関係をインストールします。 抽出が完了すると、ディレクトリ構造は通常に戻ります。
4. `go build ./...` を実行するのと同じようにして、リポジトリ内のすべての Go コードを抽出します。

{% endif %}

### Java

| サポートされているシステムの種類 | システム名 |
|----|----|
| オペレーティング システム | Windows、macOS、Linux (制限なし) |
| ビルドシステム | Gradle、Maven、Ant |

`autobuild` プロセスは、この戦略を適用して、Java コードベース用のビルド システムの特定を試みます。

1. ルートディレクトリでビルドファイルを検索します。 Gradle、Maven、Ant の各ビルドファイルを確認します。
2. 最初に見つかったビルドファイルを実行します。 Gradle ファイルと Maven ファイルの両方が存在する場合は、Gradle ファイルが使用されます。
3. それ以外の場合は、ルートディレクトリの直接サブディレクトリ内でビルドファイルを検索します。 1 つのサブディレクトリにのみビルドファイルが含まれている場合は、そのサブディレクトリで識別された最初のファイルを実行します（1 と同じ環境設定を使用）。 複数のサブディレクトリにビルドファイルが含まれている場合は、エラーを報告します。

## コンパイル言語のビルドステップを追加する

{% data reusables.code-scanning.autobuild-add-build-steps %}ワークフロー ファイルの編集方法については、「[{% data variables.product.prodname_code_scanning %} を構成する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」をご覧ください。

`autobuild` ステップを削除したら、`run` ステップをコメント解除して、リポジトリに適したビルド コマンドを追加します。 ワークフローの `run` ステップでは、オペレーティング システムのシェルを使ってコマンド ライン プログラムが実行されます。 これらのコマンドを変更し、別のコマンドを追加してビルド プロセスをカスタマイズできます。

``` yaml
- run: |
    make bootstrap
    make release
```

`run` キーワードについて詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」をご覧ください。

リポジトリに複数のコンパイル済み言語が含まれている場合は、言語固有のビルド コマンドを指定できます。 たとえば、リポジトリに C/C++、C#、Java が含まれていて、`autobuild` によって C/C++ と C# は正しくビルドされるが、Java のビルドは失敗する場合は、ワークフローの `init` ステップの後で次の構成を使用できます。 これにより、C/C++ と C# には `autobuild` をそのまま使用しつつ、Java のビルド ステップを指定します。

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

`if` 条件について詳しくは、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)」をご覧ください。

`autobuild` でコードがビルドされない理由に関するその他のヒントとテクニックについては、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」をご覧ください。

コンパイル言語にマニュアルのビルドステップを追加しても、リポジトリで依然として{% data variables.product.prodname_code_scanning %}が動作しない場合は、{% data variables.contact.contact_support %}にお問い合わせください。
