---
title: CI システムで CodeQL コードスキャンを設定する
shortTitle: CI での設定
intro: '{% data variables.product.prodname_codeql_runner %} がプロジェクトのコードをスキャンして、その結果を {% data variables.product.prodname_dotcom %} にアップロードする方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### CI システムにおける {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} の設定について

{% data variables.product.prodname_code_scanning %} をお使いの CI システムに統合するには、{% data variables.product.prodname_codeql_runner %} を使用できます。 詳しい情報については、「[CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)」を参照してください。

一般的に、{% data variables.product.prodname_codeql_runner %} は次のように呼び出します。

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` は、{% data variables.product.prodname_codeql_runner %} を CI のどこにダウンロードしたかによって異なります。 `codeql-runner-OS` は、お使いのオペレーティングシステムによって異なります。
{% data variables.product.prodname_codeql_runner %} には 3 つのバージョンがあり、`codeql-runner-linux`、`codeql-runner-macos`、`codeql-runner-win` がそれぞれ Linux、macOS、Windows のシステムに対応しています。

{% data variables.product.prodname_codeql_runner %} がコードをスキャンする方法をカスタマイズするには、`--languages` や `--queries` などのフラグを用いるか、別の設定ファイルでカスタム設定を指定します。

### プルリクエストをスキャンする

プルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーを持ち込むことを防げます。

プルリクエストをスキャンするには、 `analyze` コマンドを実行し、 `--ref` フラグを使用してプルリクエストを指定します。 リファレンスは `refs/pull/<PR-number>/head` または `refs/pull/<PR-number>/merge` で、プルリクエストブランチの HEAD コミットまたはベースブランチでマージコミットをチェックアウトしているかにより異なります。

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**注釈**: コードをサードパーティーのツールで解析し、その結果をプルリクエストのチェックで表示したい場合は、`upload` コマンドを実行し、`--ref` フラグでブランチではなくプルリクエストを指定する必要があります。 リファレンスは `refs/pull/<PR-number>/head` または `refs/pull/<PR-number>/merge` です。

{% endnote %}

### 自動言語検出をオーバーライドする

{% data variables.product.prodname_codeql_runner %} は、サポートされている言語で記述されたコードを自動的に検出してスキャンします。

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

自動言語検出をオーバーライドするには、`init` コマンドに `--languages` フラグを付け、その後に言語のキーワードリストをカンマ区切りで追加して、実行します。 The keywords for the supported languages are {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

### 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites %}

1 つ以上ののクエリを追加するには、`init` コマンドの `--queries` フラグに、カンマで区切ったパスのリストを渡します。 設定ファイルに、追加のクエリを指定することもできます。

カスタム設定にも設定ファイルを使用し、`--queries` フラグで追加のクエリも指定している場合、{% data variables.product.prodname_codeql_runner %} は、構成ファイルで指定されたものではなく、 <nobr>`--queries`</nobr> フラグで指定された追加クエリを使用します。 フラグで指定された追加クエリと、設定ファイルにある追加クエリを組み合わせて使用する場合、渡す値の前に <nobr>`--queries`</nobr> と `+` の記号をプレフィクスとして付けてください。 設定ファイルの例については、「[Example configuration files](#example-configuration-files)」を参照してください。

次の例では、{% data variables.product.prodname_codeql_runner %} が追加のクエリを、参照されている設定ファイルの中で指定されたあらゆるクエリと共に使用するよう、`+` の記号を用いています。

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### サードパーティのコードスキャンツールを使用する

{% data variables.product.prodname_codeql_runner %} コマンドに追加情報を渡すかわりに、別の設定ファイルでカスタム設定を指定できます。

設定ファイルの形式は YAML ファイルです。 YAML ファイルは、以下の例で示すように、{% data variables.product.prodname_actions %} のワークフロー構文と似た構文を使用します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。

`init` コマンドの `--config-file` フラグを使用して、設定ファイルを指定します。   <nobr>`--config-file`</nobr> の値は、使用する設定ファイルへのパスです。 この例では、設定ファイル _.github/codeql/codeql-config.yml_ を読み込みます。

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

#### 設定ファイルの例

{% data reusables.code-scanning.example-configuration-files %}

### コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

コンパイル言語の C/C++、C#、および Java では、{% data variables.product.prodname_codeql %} は解析前にコードをビルドします。 {% data reusables.code-scanning.analyze-go %}

多くの一般的なビルドシステムに対して、{% data variables.product.prodname_codeql_runner %} はコードを自動的にビルドできます。 コードの自動的なビルドを試行するには、`init` と `analyze` のステップの間で `autobuild` を実行します。 リポジトリに特定のバージョンのビルドツールが必要な場合は、まずそのビルドツールを手動でインストールする必要があることにご注意ください。

`autobuild` プロセスは、リポジトリに対して _1 つ_ のコンパイル型言語のみをビルドするよう試行します。 解析のために自動的に選択される言語は、使用されているファイル数が最も多い言語です。 言語を明示的に選択する場合は、`autobuild` コマンドの `--language` フラグを使用します。

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

`autobuild` コマンドがコードをビルドできない場合、`init` と`analyze` のステップの間にビルドのステップを手動で実行できます。 詳しい情報については、「[CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system#compiled-language-example)」を参照してください。

### {% data variables.product.prodname_code_scanning %} 用の設定ファイルを作成できます。

デフォルトでは、{% data variables.product.prodname_codeql_runner %} は `analyze` コマンドを実行した際の {% data variables.product.prodname_code_scanning %} による結果をアップロードします。 また、`upload` コマンドを使用して、SARIF ファイルを別にアップロードすることもできます。

データをアップロードすると、{% data variables.product.prodname_dotcom %} はリポジトリにアラートを表示します。
- `--ref refs/pull/42/merge` や `--ref refs/pull/42/head` などのようにプルリクエストにアップロードした場合、結果はプルリクエストのチェックでアラートとして表示されます。 詳しい情報については、「[プルリクエストでコードスキャンアラートをトリアージする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。
- `--ref refs/heads/my-branch` といったようにブランチにアップロードした場合、結果はリポジトリの [**Security**] タブに表示されます。 詳しい情報については、「[リポジトリの コードスキャンアラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

### {% data variables.product.prodname_codeql_runner %} コマンドのリファレンス

{% data variables.product.prodname_codeql_runner %} は、次のコマンドおよびフラグをサポートしています。

#### `init`

{% data variables.product.prodname_codeql_runner %} を初期化し、解析する各言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

| フラグ                              | 必須 | 入力値                                                                                                                                                |
| -------------------------------- |:--:| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                   | ✓  | 初期化するリポジトリの名前。                                                                                                                                     |
| `--github-url`                   | ✓  | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。                                                                                 |
| `--github-auth`                  | ✓  | {% data variables.product.prodname_github_apps %} トークンまたは個人アクセストークン。                                                                             |
| `--languages`                    |    | 解析対象言語のカンマ区切りリスト。 デフォルトでは、{% data variables.product.prodname_codeql_runner %} はリポジトリにあるサポートされている言語をすべて検出し、解析します。                                 |
| `--queries`                      |    | デフォルトのセキュリティクエリに加えて実行する、追加クエリのカンマ区切りリスト。                                                                                                           |
| `--config-file`                  |    | カスタム設定ファイルのパス。                                                                                                                                     |
| `--codeql-path`                  |    | 使用する {% data variables.product.prodname_codeql %} CLI 実行ファイルのコピーのパス。 デフォルトでは、{% data variables.product.prodname_codeql_runner %} はコピーをダウンロードします。 |
| `--temp-dir`                     |    | 一時ファイルが保存されるディレクトリ。 デフォルトは `./codeql-runner` です。                                                                                                   |
| `--tools-dir`                    |    | 実行間で {% data variables.product.prodname_codeql %} ツールやその他のファイルが保存されるディレクトリ。 デフォルトはホームディレクトリのサブディレクトリです。                                            |
| <nobr>`--checkout-path`</nobr> |    | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。                                                                                                         |
| `--debug`                        |    | なし. より詳細な出力を表示します。                                                                                                                                 |
| `-h`, `--help`                   |    | なし. コマンドのヘルプを表示します。                                                                                                                                |

#### `autobuild`

コンパイル型言語である C/C++、C#、および Java のコードのビルドを試行します。 これらの言語では、{% data variables.product.prodname_codeql %} は解析前にコードをビルドします。 `autobuild` を、`init` と `analyze` のステップの間に実行します。

| フラグ                         | 必須 | 入力値                                                                                                |
| --------------------------- |:--:| -------------------------------------------------------------------------------------------------- |
| `--language`                |    | ビルドする言語。 デフォルトでは、{% data variables.product.prodname_codeql_runner %} はファイル数が最も多いコンパイル型言語をビルドします。 |
| <nobr>`--temp-dir`</nobr> |    | 一時ファイルが保存されるディレクトリ。 デフォルトは `./codeql-runner` です。                                                   |
| `--debug`                   |    | なし. より詳細な出力を表示します。                                                                                 |
| `-h`, `--help`              |    | なし. コマンドのヘルプを表示します。                                                                                |

#### `analyze`

{% data variables.product.prodname_codeql %} データベースにあるコードを解析し、結果を {% data variables.product.product_name %} にアップロードします。

| フラグ                                | 必須 | 入力値                                                                                                                                                           |
| ---------------------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                     | ✓  | 解析するリポジトリの名前。                                                                                                                                                 |
| `--commit`                         | ✓  | 解析するコミットの SHA。 Git および Azure DevOps では、`git rev-parse HEAD` の値に相当します。 Jenkins では、`$GIT_COMMIT` に相当します。                                                        |
| `--ref`                            | ✓  | 解析するレファレンスの名前 (例: `refs/heads/main`、`refs/pull/42/merge`)。 Git や Jenkins では、`git symbolic-ref HEAD` の値に相当します。 Azure DevOps では、`$(Build.SourceBranch)` に相当します。 |
| `--github-url`                     | ✓  | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。                                                                                            |
| `--github-auth`                    | ✓  | {% data variables.product.prodname_github_apps %} トークンまたは個人アクセストークン。                                                                                        |
| <nobr>`--checkout-path`</nobr>   |    | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。                                                                                                                    |
| `--no-upload`                      |    | なし. {% data variables.product.prodname_codeql_runner %} が結果を {% data variables.product.product_name %} にアップロードすることを停止します。                                   |
| `--output-dir`                     |    | 出力される SARIF ファイルが保存されるディレクトリ。 デフォルトは一時ファイルのディレクトリです。                                                                                                          |
| `--ram`                            |    | クエリの実行時に使用するメモリの量。 デフォルトでは、使用できるすべてのメモリを使用します。                                                                                                                |
| <nobr>`--no-add-snippets`</nobr> |    | なし. SARIF 出力からコードスニペットを除外します。                                                                                                                                 |
| `--threads`                        |    | クエリの実行時に使用するスレッドの数。 デフォルトでは、使用できるすべてのコアを使用します。                                                                                                                |
| `--temp-dir`                       |    | 一時ファイルが保存されるディレクトリ。 デフォルトは `./codeql-runner` です。                                                                                                              |
| `--debug`                          |    | なし. より詳細な出力を表示します。                                                                                                                                            |
| `-h`, `--help`                     |    | なし. コマンドのヘルプを表示します。                                                                                                                                           |

#### `アップロード`

SARIF ファイルを {% data variables.product.product_name %} にアップロードします。

{% note %}

**注釈**: CodeQL ランナーでコードを解析する場合、`analyze` コマンドはデフォルトで SARIF の結果をアップロードします。 `upload` コマンドを使用して、他のツールで生成された SARIF の結果をアップロードできます。

{% endnote %}

| フラグ                              | 必須 | 入力値                                                                                                                                                           |
| -------------------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sarif-file`                   | ✓  | アップロードする SARIF ファイル、または複数の SARIF ファイルを含むディレクトリ。                                                                                                               |
| `--repository`                   | ✓  | 解析したリポジトリの名前。                                                                                                                                                 |
| `--commit`                       | ✓  | 解析したコミットの SHA。 Git および Azure DevOps では、`git rev-parse HEAD` の値に相当します。 Jenkins では、`$GIT_COMMIT` に相当します。                                                        |
| `--ref`                          | ✓  | 解析したレファレンスの名前 (例: `refs/heads/main`、`refs/pull/42/merge`)。 Git や Jenkins では、`git symbolic-ref HEAD` の値に相当します。 Azure DevOps では、`$(Build.SourceBranch)` に相当します。 |
| `--github-url`                   | ✓  | リポジトリがホストされる {% data variables.product.prodname_dotcom %} のインスタンス。                                                                                            |
| `--github-auth`                  | ✓  | {% data variables.product.prodname_github_apps %} トークンまたは個人アクセストークン。                                                                                        |
| <nobr>`--checkout-path`</nobr> |    | リポジトリをチェックアウトするパス。 デフォルトは現在のワーキングディレクトリです。                                                                                                                    |
| `--debug`                        |    | なし. より詳細な出力を表示します。                                                                                                                                            |
| `-h`, `--help`                   |    | なし. コマンドのヘルプを表示します。                                                                                                                                           |
