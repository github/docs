---
title: CIシステムでのCodeQLランナーの設定
shortTitle: Configure CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %}でプロジェクトのコードをスキャンし、その結果を {% data variables.product.prodname_dotcom %} にアップロードする方法を構成できます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161071'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## CI システムにおける {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} の設定について

{% data variables.product.prodname_code_scanning %} をお使いの CI システムに統合するために、{% data variables.code-scanning.codeql_runner %}を使用できます。 詳しくは、「[CI システムでの {% data variables.code-scanning.codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」を参照してください。

一般的に、{% data variables.code-scanning.codeql_runner %}は次のように呼び出します。

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` は、{% data variables.code-scanning.codeql_runner %}をお使いの CI システムのどこにダウンロードしたかによって異なります。 `codeql-runner-OS` は、お使いのオペレーティング システムによって異なります。
{% data variables.code-scanning.codeql_runner %}には、Linux、macOS、Windows システム用に、それぞれ `codeql-runner-linux`、`codeql-runner-macos`、`codeql-runner-win` の 3 つのバージョンがあります。 

{% data variables.code-scanning.codeql_runner %}でコードをスキャンする方法をカスタマイズするには、フラグ (`--languages`、`--queries` など) を使用するか、別の構成ファイルでカスタム設定を指定できます。

## Pull Requestをスキャンする

プルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーを持ち込むことを防げます。

pull request をスキャンするには、`analyze` コマンドを実行し、`--ref` フラグを使用して pull request を指定します。 参照は、`refs/pull/<PR-number>/head` または `refs/pull/<PR-number>/merge` であり、pull request ブランチの HEAD コミットをチェックアウトしたかどうか、ベース ブランチとのマージ コミットをチェックアウトしたかどうかによって異なります。

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**注**: サード パーティ製ツールを使用してコードを分析し、結果を pull request チェックとして表示する場合は、`upload` コマンドを実行し、`--ref` フラグを使用してブランチの代わりに pull request を指定する必要があります。 参照は、`refs/pull/<PR-number>/head` または `refs/pull/<PR-number>/merge` です。

{% endnote %}

## 自動言語検出をオーバーライドする

{% data variables.code-scanning.codeql_runner %}により、サポートされている言語で記述されたコードが自動的に検出されてスキャンされます。

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

言語の自動検出をオーバーライドするには、`--languages` フラグを指定して `init` コマンドを実行し、続けて言語キーワードのコンマ区切りのリストを実行します。 サポートされている言語に対するキーワードは{% data reusables.code-scanning.codeql-languages-keywords %}です。

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

1 つ以上のクエリを追加するには、`init` コマンドの `--queries` フラグにパスのコンマ区切りのリストを渡します。 設定ファイルに、追加のクエリを指定することもできます。

また、カスタム設定にも構成ファイルを使用し、`--queries` フラグで追加のクエリも指定している場合、{% data variables.code-scanning.codeql_runner %}では、構成ファイルで指定されたものではなく、<nobr>`--queries`</nobr> フラグで指定された追加のクエリが使用されます。
フラグと構成ファイルで指定された追加クエリの組み合わせのセットを使用する場合、<nobr>`--queries`</nobr> に渡される値の前に `+` 記号を付けますます。
詳細については、「[カスタム構成ファイルの使用](#using-a-custom-configuration-file)」を参照してください。

次の例では、`+` 記号があるため、{% data variables.code-scanning.codeql_runner %}で追加のクエリが、参照されている構成ファイルで指定されている任意のクエリと共に確実に使用されます。

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## カスタム構成ファイルの使用

{% data variables.code-scanning.codeql_runner %} コマンドに追加情報を渡す代わりに、別の構成ファイルでカスタム設定を指定できます。

設定ファイルの形式は YAML ファイルです。 YAML ファイルは、以下の例で示すように、{% data variables.product.prodname_actions %} のワークフロー構文と似た構文を使用します。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)に関するページを参照してください。 

`init` コマンドの `--config-file` フラグを使用して、構成ファイルを指定します。 <nobr>`--config-file`</nobr> の値は、使用する構成ファイルへのパスです。 この例では、構成ファイル _.github/codeql/codeql-config.yml_ を読み込みます。

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### サンプル構成ファイル

{% data reusables.code-scanning.example-configuration-files %}

## コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

コンパイル言語の C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}Java では、{% data variables.product.prodname_codeql %} は解析前にコードをビルドします。 {% data reusables.code-scanning.analyze-go %}

多くの一般的なビルド システムに対して、{% data variables.code-scanning.codeql_runner %}ではコードを自動的にビルドできます。 コードを自動的にビルドするには、`init` 手順と `analyze` 手順の間で `autobuild` を実行します。 リポジトリに特定のバージョンのビルドツールが必要な場合は、まずそのビルドツールを手動でインストールする必要があることにご注意ください。 

`autobuild` プロセスにより、リポジトリに対してコンパイルされた言語を " _1 つ_" だけビルドすることが試みられます。 解析のために自動的に選択される言語は、使用されているファイル数が最も多い言語です。 言語を明示的に選択する場合は、`autobuild` コマンドの `--language` フラグを使用します。

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

`autobuild` コマンドでコードをビルドできない場合は、`init` ステップと `analyze` ステップの間でビルド ステップをご自分で実行できます。 詳しくは、「[CI システムでの {% data variables.code-scanning.codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example)」を参照してください。

## {% data variables.product.prodname_code_scanning %} データを {% data variables.product.prodname_dotcom %} にアップロードする

既定では、`analyze` コマンドを実行すると、{% data variables.code-scanning.codeql_runner %}により結果が {% data variables.product.prodname_code_scanning %} からアップロードされます。 また、`upload` コマンドを使用して、SARIF ファイルを個別にアップロードすることもできます。

データをアップロードすると、{% data variables.product.prodname_dotcom %} はリポジトリにアラートを表示します。 
- pull request (たとえば `--ref refs/pull/42/merge` と `--ref refs/pull/42/head`) にアップロードした場合、結果は pull request チェックのアラートとして表示されます。 詳細については、「[pull request での Code Scanning アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。
- ブランチ (たとえば `--ref refs/heads/my-branch`) にアップロードした場合、結果はリポジトリの **[セキュリティ]** タブに表示されます。 詳細については、「[リポジトリの Code Scanning アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

## {% data variables.code-scanning.codeql_runner %} コマンドのリファレンス

{% data variables.code-scanning.codeql_runner %}では、次のコマンドとフラグがサポートされています。

### `init`

{% data variables.code-scanning.codeql_runner %}を初期化し、分析する各言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

| フラグ | 必須 | 入力値 |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | 初期化するリポジトリの名前。 |
| `--github-url` | ✓ | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。 |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | {% data variables.product.prodname_github_apps %} トークンまたは {% data variables.product.pat_generic %} を標準入力から読み取ります。 |
| `--languages` | | 解析対象言語のカンマ区切りリスト。 既定では、{% data variables.code-scanning.codeql_runner %}により、リポジトリにあるサポートされている言語がすべて検出されて分析されます。 |
| `--queries` | | デフォルトのセキュリティクエリに加えて実行する、追加クエリのカンマ区切りリスト。 これにより、カスタム構成ファイルの `queries` 設定がオーバーライドされます。 |
| `--config-file` | | カスタム設定ファイルのパス。 |
| `--codeql-path` | | 使用する {% data variables.product.prodname_codeql %} CLI 実行ファイルのコピーのパス。 既定では、{% data variables.code-scanning.codeql_runner %}によってコピーがダウンロードされます。 |
| `--temp-dir` | | 一時ファイルが保存されるディレクトリ。 既定値は、`./codeql-runner` です。 |
| `--tools-dir` | | 実行間で {% data variables.product.prodname_codeql %} ツールやその他のファイルが保存されるディレクトリ。 デフォルトはホームディレクトリのサブディレクトリです。 |
| <nobr>`--checkout-path`</nobr> | | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。 | 
| `--debug` | | [なし] : より詳細な出力を表示します。 |
| <nobr>`--trace-process-name`</nobr> | | 高度でWindowsのみ。 このプロセスのWindows tracerが注入されたプロセスの名前。 |
| <nobr>`--trace-process-level`</nobr> | | 高度でWindowsのみ。 このプロセスのWindows tracerが注入された親プロセスまでのレベル数。 |
| `-h`, `--help` | | [なし] : コマンドのヘルプを表示します。 |

### `autobuild`

コンパイル型言語である C/C++、C#、および Java のコードのビルドを試行します。 これらの言語では、{% data variables.product.prodname_codeql %} は解析前にコードをビルドします。 `init` と `analyze` 手順の間で `autobuild` を実行します。

| フラグ | 必須 | 入力値 |
| ---- |:--------:| ----------- |
| `--language` | | ビルドする言語。 既定では、{% data variables.code-scanning.codeql_runner %}によって、ほとんどのファイルでコンパイル済み言語がビルドされます。 |
| <nobr>`--temp-dir`</nobr> | | 一時ファイルが保存されるディレクトリ。 既定値は、`./codeql-runner` です。 |
| `--debug` | | [なし] : より詳細な出力を表示します。 |
| <nobr> `-h`, `--help`</nobr> | | [なし] : コマンドのヘルプを表示します。 |

### `analyze`

{% data variables.product.prodname_codeql %} データベースにあるコードを解析し、結果を {% data variables.product.product_name %} にアップロードします。

| フラグ | 必須 | 入力値 |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | 解析するリポジトリの名前。 |
| `--commit` | ✓ | 解析するコミットの SHA。 Git と Azure DevOps では、これは `git rev-parse HEAD` の値に対応します。 Jenkins では、これは `$GIT_COMMIT` に対応します。 |
| `--ref` | ✓ | 分析する参照の名前、たとえば、`refs/heads/main` または `refs/pull/42/merge` です。 Git または Jenkins では、これは `git symbolic-ref HEAD` に対応します。 Azure DevOps では、これは `$(Build.SourceBranch)` に対応します。 |
| `--github-url` | ✓ | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。 |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | {% data variables.product.prodname_github_apps %} トークンまたは {% data variables.product.pat_generic %} を標準入力から読み取ります。 |
| <nobr>`--checkout-path`</nobr> | | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。  |
| `--no-upload` | | [なし] : {% data variables.code-scanning.codeql_runner %}によって結果が {% data variables.product.product_name %} にアップロードされないようにします。 |
| `--output-dir` | | 出力される SARIF ファイルが保存されるディレクトリ。 デフォルトは一時ファイルのディレクトリです。 |
| `--ram` | | クエリの実行時に使用するメモリの量。 デフォルトでは、使用できるすべてのメモリを使用します。 |
| <nobr>`--no-add-snippets`</nobr> | | [なし] : SARIF 出力からコードスニペットを除外します。 |
| <nobr>`--category`<nobr> | | この分析でSARIF結果ファイルに含めるカテゴリ。 カテゴリは、同じツールとコミットについて、ただし様々な言語やコードの様々な部分に対して行われる複数の分析を区別するために使うことができます。 この値は、SARIF v2.1.0 の `<run>.automationDetails.id` プロパティに表示されます。 |
| `--threads` | | クエリの実行時に使用するスレッドの数。 デフォルトでは、使用できるすべてのコアを使用します。 |
| `--temp-dir` | | 一時ファイルが保存されるディレクトリ。 既定値は、`./codeql-runner` です。 |
| `--debug` | | [なし] : より詳細な出力を表示します。 |
| `-h`, `--help` | | [なし] : コマンドのヘルプを表示します。 |

### `upload`

SARIF ファイルを {% data variables.product.product_name %} にアップロードします。

{% note %}

**注**: CodeQL ランナーを使用してコードを分析する場合、`analyze` コマンドは既定で SARIF の結果をアップロードします。 `upload` コマンドを使用して、他のツールで生成された SARIF の結果をアップロードできます。

{% endnote %}

| フラグ | 必須 | 入力値 |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | アップロードする SARIF ファイル、または複数の SARIF ファイルを含むディレクトリ。 |
| `--repository` | ✓ | 解析したリポジトリの名前。 |
| `--commit` | ✓ | 解析したコミットの SHA。 Git と Azure DevOps では、これは `git rev-parse HEAD` の値に対応します。 Jenkins では、これは `$GIT_COMMIT` に対応します。 |
| `--ref` | ✓ | 分析された参照の名前、たとえば `refs/heads/main` または `refs/pull/42/merge`です。 Git または Jenkins では、これは `git symbolic-ref HEAD` に対応します。 Azure DevOps では、これは `$(Build.SourceBranch)` に対応します。 |
| `--github-url` | ✓ | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。 |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | {% data variables.product.prodname_github_apps %} トークンまたは {% data variables.product.pat_generic %} を標準入力から読み取ります。 |
| <nobr>`--checkout-path`</nobr> | | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。  |
| `--debug` | | [なし] : より詳細な出力を表示します。 |
| `-h`, `--help` | | [なし] : コマンドのヘルプを表示します。 |
