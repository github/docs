---
title: CIシステムでのCodeQL CLIの設定
shortTitle: Configure CodeQL CLI
intro: '継続的インテグレーションシステムを{% data variables.product.prodname_codeql_cli %}を実行するように設定し、{% data variables.product.prodname_codeql %}分析を行い、{% data variables.product.prodname_code_scanning %}アラートとして表示させるために結果を{% data variables.product.product_name %}にアップロードできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182299'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**注:** この記事では、{% data variables.product.product_name %} のリリース時に使用可能なバージョンの {% data variables.product.prodname_codeql_cli %}に存在する機能について説明します。 Enterprise でより新しいバージョンの {% data variables.product.prodname_codeql_cli %} を使用している場合は、代わりに [{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)を参照してください。

{% endnote %} {% endif %}

## {% data variables.product.prodname_codeql_cli %}でのCode scanningの結果の生成について

CIシステム内のサーバーで{% data variables.product.prodname_codeql_cli %}を利用できるようにして、確実に{% data variables.product.product_name %}で認証できるようにしたなら、データを生成する準備ができています。

結果を生成して{% data variables.product.product_name %}にアップロードするには、3つの異なるコマンドを使います。

<!--Option to analyze multiple languages with one call-->
1. `database create` では、リポジトリのサポートされている各プログラミング言語の階層構造を表すために {% data variables.product.prodname_codeql %} データベースを作成します。
2. ` database analyze` では、クエリを実行して各 {% data variables.product.prodname_codeql %} データベースを分析し、結果を SARIF ファイルにまとめます。
3. `github upload-results` では、結果の SARIF ファイルを {% data variables.product.product_name %} にアップロードします。そこで結果はブランチまたは pull request と照合され、{% data variables.product.prodname_code_scanning %} アラートとして表示されます。

<nobr>`--help`</nobr> オプションを使用して、任意のコマンドのコマンドライン ヘルプを表示できます。

{% data reusables.code-scanning.upload-sarif-ghas %}

## 分析する{% data variables.product.prodname_codeql %}データベースの作成

1. 分析するコードをチェックアウトします。
    - ブランチの場合は、分析するブランチのヘッドをチェックアウトします。
    - pull request の場合は、pull request のヘッド コミットをチェックアウトするか、{% data variables.product.prodname_dotcom %} で生成された pull request のマージ コミットをチェックアウトします。
2. コードベースの環境を設定し、依存関係が使用可能であることを確認します。 詳細については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[コンパイルされていない言語のデータベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages)」および [「コンパイル済み言語のデータベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)」を参照してください。
3. コードベースのビルド コマンドを見つけます (ある場合)。 通常、これは CI システムの構成ファイルで使用できます。
4. リポジトリのチェックアウト ルートから `codeql database create` を実行し、コードベースをビルドします。

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **注:** コンテナー化されたビルドを使用する場合は、ビルド タスクが行われるコンテナーで {% data variables.product.prodname_codeql_cli %} を実行する必要があります。

  {% endnote %}

| オプション | 必須 | 使用法 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | {% data variables.product.prodname_codeql %}データベースを作成するディレクトリの名前と場所を指定します。 既存のディレクトリを上書きしようとすると、コマンドは失敗します。 また `--db-cluster` を指定した場合は、これが親ディレクトリであり、分析される言語ごとにサブディレクトリが作成されます。|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | データベースを作成する言語の識別子 (`{% data reusables.code-scanning.codeql-languages-keywords %}` のいずれか) を指定します (TypeScript コードを分析するには `javascript`{% ifversion codeql-kotlin-beta %}、Kotlin コードを分析するには `java`{% endif %} を使用します)。 <nobr>`--db-cluster`</nobr> と一緒に使用する場合は、オプションでコンマ区切りリストが受け入れられるか、複数指定できます。
| <nobr>`--command`</nobr> | | 推奨。 コードベースのビルド プロセスを呼び出すビルド コマンドまたはスクリプトを指定するために使用します。 コマンドは現在のフォルダーから、または定義されている場合は <nobr>`--source-root`</nobr> から実行されます。 Python および JavaScript または TypeScript の分析には不要です。 |
| <nobr>`--db-cluster`</nobr> | | 省略可能。 <nobr>`--language`</nobr> によって指定された言語ごとに 1 つのデータベースを生成するには、複数言語コードベースを使用します。
| <nobr>`--no-run-unnecessary-builds`</nobr> | | 推奨。 {% data variables.product.prodname_codeql_cli %}がビルドをモニターする必要がない場合に、言語のビルドコマンドを抑制するために使います（たとえばPythonやJavaScript/TypeScript）。
| <nobr>`--source-root`</nobr> | | 省略可能。 リポジトリのチェックアウト ルートの外部で CLI を実行する場合に使用します。 既定では、`database create` コマンドで現在のディレクトリがソース ファイルのルート ディレクトリであると見なされます。別の場所を指定するためにこのオプションを使用します。 |
| <nobr>`--codescanning-config`</nobr> | | 省略可能 (詳細) {% data variables.product.prodname_codeql %} データベースの作成方法と、後の手順で実行するクエリを指定する構成ファイルがある場合に使用します。 詳しくは、「[カスタム構成ファイルの使用](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)」および「[database create](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config)」を参照してください。 |

詳細については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[{% data variables.product.prodname_codeql %} データベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)」を参照してください。

### 単一言語の例

この例では、`/checkouts/example-repo` でチェックアウトされたリポジトリの {% data variables.product.prodname_codeql %} データベースを作成します。 JavaScript 抽出機能を使用して、リポジトリに JavaScript および TypeScript コードの階層表現を作成します。 結果のデータベースは `/codeql-dbs/example-repo` に格納されます。

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### 複数言語の例

この例では、`/checkouts/example-repo-multi` でチェックアウトされたリポジトリの {% data variables.product.prodname_codeql %} データベースを 2 つ作成します。 イベント プロセッサで使用されるものは次のとおりです。

- `--db-cluster`: 複数の言語の分析を要求します。
- `--language`: データベースを作成する言語を指定します。
- `--command`: コードベースのビルド コマンド (ここでは `make`) をツールに伝えます。
- `--no-run-unnecessary-builds`: 必要のない言語 (Python など) のビルド コマンドをスキップするようにツールに伝えます。

結果のデータベースは、`/codeql-dbs/example-repo-multi` の `python` および `cpp` サブディレクトリに格納されます。

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## {% data variables.product.prodname_codeql %}データベースの分析

1. {% data variables.product.prodname_codeql %}データベースを作成してください（上記参照）。
2. データベースに対して `codeql database analyze` を実行し、使用する{% ifversion codeql-packs %}パックまたは{% endif %}クエリを指定します。
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**注:** 1 つのコミットに対して複数の {% data variables.product.prodname_codeql %} データベースを分析する場合、このコマンドによって生成されるそれぞれの結果セットに対して SARIF カテゴリを指定する必要があります。 結果を{% data variables.product.product_name %}にアップロードする際には、{% data variables.product.prodname_code_scanning %}はこのカテゴリを使ってそれぞれの言語に対する結果を別々に保存します。 この操作を忘れた場合は、各アップロードで前の結果が上書きされます。

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| オプション | 必須 | 使用法 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | 分析する{% data variables.product.prodname_codeql %}データベースを含むディレクトリのパスを指定します。 |
| `<packs,queries>` | | 実行する {% data variables.product.prodname_codeql %} パックまたはクエリを指定します。 {% data variables.product.prodname_code_scanning %} に使用される標準クエリを実行するには、このパラメーターを省略します。 {% data variables.product.prodname_codeql_cli %} バンドルに含まれている他のクエリ スイートを確認する場合は、`/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites` を参照してください。 独自のクエリ スイートの作成については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[CodeQL クエリ スイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | コマンドによって生成される結果ファイルの形式を指定します。 {% data variables.product.company_short %} へのアップロードの場合、これは {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %} である必要があります。 詳細については、「[{% data variables.product.prodname_code_scanning %} の SARIF サポート](/code-security/secure-coding/sarif-support-for-code-scanning)」を参照してください。
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | SARIF 結果ファイルを保存する場所を指定します。
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | 単一データベースの分析の場合は省略可能です。 リポジトリ内の単一コミットに対して複数のデータベースを分析する場合に言語を定義するために必要です。 この分析の SARIF 結果ファイルに含めるカテゴリを指定します。 カテゴリは、同じツールとコミットに対する複数の分析を区別するために使用されますが、異なる言語またはコードの異なる部分で実行されます。|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | 省略可能。 分析で使用されるカスタム クエリに対して使用可能なマークダウン レンダリング クエリ ヘルプを含める場合に使用します。 関連するクエリによってアラートが生成された場合は、SARIF 出力に含まれるカスタム クエリのクエリ ヘルプがすべてコード スキャン UI に表示されます。 詳細については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[{% data variables.product.prodname_codeql_cli %} でのデータベースの分析](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files)」を参照してください。{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | 省略可能。 CodeQL クエリ パックを分析に含めたい場合に使います。 詳細については、「[{% data variables.product.prodname_codeql %} パックのダウンロードと使用](#downloading-and-using-codeql-query-packs)」を参照してください。
| <nobr>`--download`</nobr> | | 省略可能。 CodeQL クエリ パックの一部がまだディスク上になく、クエリを実行する前にダウンロードする必要がある場合に使います。{% endif %}
| <nobr>`--threads`</nobr> | | 任意。 複数のスレッドを使用してクエリを実行する場合に使用します。 既定値は `1` です。 クエリの実行を高速化するために、より多くのスレッドを指定できます。 スレッドの数を論理プロセッサの数に設定するには、`0` を指定します。
| <nobr>`--verbose`</nobr> | | 省略可能。 データベース作成プロセスから分析プロセスと診断データに関する詳細情報を取得するために使用します。

詳細については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[{% data variables.product.prodname_codeql_cli %} でのデータベースの分析](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)」を参照してください。

### 基本的な例

この例では、`/codeql-dbs/example-repo` で格納されている {% data variables.product.prodname_codeql %} データベースを分析し、結果を SARIF ファイル (`/temp/example-repo-js.sarif`) として保存します。 `--sarif-category` を使用して、結果を JavaScript として識別する追加の情報を SARIF ファイルに含めます。 これは、リポジトリ中の単一のコミットに対して分析する{% data variables.product.prodname_codeql %}データベースが複数ある場合に不可欠です。

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## {% data variables.product.product_name %}への結果のアップロード

{% data reusables.code-scanning.upload-sarif-alert-limit %}

結果を {% data variables.product.product_name %} にアップロードする前に、以前に作成した {% data variables.product.prodname_github_app %}または {% data variables.product.pat_generic %} を {% data variables.product.prodname_codeql_cli %} に渡す最善の方法を決める必要があります (「[CI システムでの {% data variables.product.prodname_codeql_cli %} のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)」を参照)。 シークレット ストアの安全な使用に関する CI システムのガイダンスを確認することをお勧めします。 {% data variables.product.prodname_codeql_cli %}は以下をサポートします。

- `--github-auth-stdin` オプションを使用し、標準入力を介して CLI にトークンを渡す (推奨)。
- 環境変数 `GITHUB_TOKEN` にシークレットを保存し、`--github-auth-stdin` オプションを含めずに CLI を実行する。

CI サーバーの最も安全で信頼性の高い方法を決定した場合は、各 SARIF 結果ファイルで `codeql github upload-results` を実行し、トークンが環境変数 `GITHUB_TOKEN` で使用可能でない限り、`--github-auth-stdin` を含めます。

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| オプション | 必須 | 使用法 |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | データのアップロード先となるリポジトリの *OWNER/NAME* を指定します。 {% ifversion fpt or ghec %}リポジトリがパブリックでなければ、{% endif %}オーナーは {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Enterprise 内の Organization でなければならず、{% data variables.product.prodname_GH_advanced_security %} はリポジトリで有効化されていなければなりません。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | チェックアウトして分析した `ref` の名前を指定して、結果を正しいコードと照合できるようにします。 ブランチで `refs/heads/BRANCH-NAME` を使用するか、pull request のヘッド コミットで `refs/pull/NUMBER/head` を使用するか、pull request の {% data variables.product.prodname_dotcom %} で生成されたマージ コミットで `refs/pull/NUMBER/merge` を使用します。
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 分析したコミットの完全な SHA を指定します。
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 読み込む SARIF ファイルを指定します。{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | {% data variables.product.product_name %}のURLを指定してください。{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | 任意。 {% data variables.product.company_short %} の REST API での認証用に作成された {% data variables.product.prodname_github_app %} または {% data variables.product.pat_generic %} を標準入力で CLI に渡すために使います。 このトークンを使用して設定された `GITHUB_TOKEN` 環境変数にコマンドがアクセスできる場合、これは必要ありません。

詳細については、{% data variables.product.prodname_codeql_cli %} のドキュメントの「[github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/)」を参照してください。

### 基本的な例

この例では、SARIF ファイル `temp/example-repo-js.sarif` からリポジトリ `my-org/example-repo` に結果をアップロードします。 結果が `main` ブランチのコミット `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` に対するものであることを {% data variables.product.prodname_code_scanning %} API に伝えます。

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

アップロードが失敗しなければ、このコマンドからの出力はありません。 コマンドプロンプトは、アップロードが完了してデータ処理が開始された時点で戻ってきます。 小さなコードベースでは、すぐ後に{% data variables.product.product_name %}中の{% data variables.product.prodname_code_scanning %}アラートを調べることができるでしょう。 チェックアウトしたコードに応じて、アラートを直接 pull request に、またはブランチの **[セキュリティ]** タブで表示できます。詳細については、「[pull request での{% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」および「[リポジトリの{% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

{% ifversion codeql-packs %}
## {% data variables.product.prodname_codeql %} クエリ パックのダウンロードと使用

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{% data variables.product.prodname_codeql_cli %} バンドルには、{% data variables.product.company_short %} の専門家、セキュリティ研究者、コミュニティの共同作成者によって管理されるクエリが含まれます。 他の Organization によって開発されたクエリを実行する場合、{% data variables.product.prodname_codeql %} クエリ パックを使用すると、クエリを効率的かつ信頼性の高い方法でダウンロードして実行できます。 詳細については、「[CodeQL によるコード スキャンについて](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)」を参照してください。

{% data variables.product.prodname_codeql %} パックを使ってデータベースを分析する前に、{% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} から必要なパッケージをすべてダウンロードする必要があります。 これは、`codeql database analyze` コマンドの一部として `--download` フラグを使うことによって行うことができます。 パッケージが一般公開されていない場合は、認証に {% data variables.product.prodname_github_app %} または {% data variables.product.pat_generic %} を使う必要があります。 詳細と例については、上記の「[{% data variables.product.product_name %} への結果のアップロード](#uploading-results-to-github)」を参照してください。

| オプション | 必須 | 使用法 |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | コンマ区切りリストを使用して、ダウンロードする 1 つまたは複数の CodeQL クエリ パックのスコープと名前を指定します。 必要に応じて、ダウンロードして解凍するバージョンを含めます。 既定では、このパックの最新バージョンがダウンロードされます。 必要に応じて、実行するクエリ、ディレクトリ、またはクエリ スイートへのパスを含めます。 パスが含まれていない場合、このパックの既定のクエリを実行します。 |
| <nobr>`--github-auth-stdin`</nobr> | | 任意。 {% data variables.product.company_short %} の REST API での認証用に作成された {% data variables.product.prodname_github_app %} または {% data variables.product.pat_generic %} を標準入力で CLI に渡します。 このトークンを使用して設定された `GITHUB_TOKEN` 環境変数にコマンドがアクセスできる場合、これは必要ありません。

### 基本的な例

この例では、`codeql database analyze` コマンドに `--download` オプションを付けて実行しています。

1. 最新バージョンの `octo-org/security-queries` パックをダウンロードします。
2. バージョン 1.0.1 と`octo-org/optional-security-queries`互換性のある *バージョンの* パックをダウンロードします (この場合はバージョン 1.0.2 です)。 semver の互換性については、[npm のセマンティック バージョンの範囲に関するドキュメント](https://github.com/npm/node-semver#ranges)を参照してください。
3. `octo-org/security-queries` の既定のクエリをすべて実行します。
4. `octo-org/optional-security-queries` のクエリ `queries/csrf.ql` だけを実行します

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### {% data variables.product.prodname_codeql %} パックの直接ダウンロード

{% data variables.product.prodname_codeql %} パックをダウンロードしてすぐに実行しない場合、`codeql pack download` コマンドを使用できます。 これは、{% data variables.product.prodname_codeql %} クエリを実行するとき、インターネットへのアクセスをしないようにする場合、便利です。 {% data variables.product.prodname_codeql %} 分析を実行するとき、前の例と同じ方法でパック、バージョン、パスを指定できます。

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### 複数の {% data variables.product.company_short %} コンテナー レジストリから {% data variables.product.prodname_codeql %} パックをダウンロードする

{% data variables.product.prodname_codeql %} パックが複数のコンテナー レジストリに存在する場合は、各パックを検索する場所を {% data variables.product.prodname_codeql_cli %} に示す必要があります。 詳細については、「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server)」を参照してください。
{% endif %}

## {% data variables.product.prodname_codeql %}分析のためのCIの設定例

これは、2つのサポートされている言語を持つコードベースを分析し、結果を{% data variables.product.product_name %}にアップロードするために使うことができる一連のコマンドの例です。

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## CIシステムでの{% data variables.product.prodname_codeql_cli %}のトラブルシューティング

### ログと診断情報を見る

{% data variables.product.prodname_code_scanning %}クエリスイートを使って{% data variables.product.prodname_codeql %}データベースを分析する際には、アラートに関する詳細情報を生成するのに加えて、CLIはデータベース生成ステップからの診断情報とサマリメトリクスを報告します。 アラートが少ないリポジトリでは、実際にコード中の問題が少ないのか、あるいは{% data variables.product.prodname_codeql %}データベースの生成時にエラーがあったのかを判断するのにこの情報が役立つかもしれません。 `codeql database analyze` からさらに詳しい出力を得るには、`--verbose` オプションを使用します。

使用可能な診断情報の種類について詳しくは、「[{% data variables.product.prodname_code_scanning %} ログの表示](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)」を参照してください。

### {% data variables.product.prodname_code_scanning_capc %}は、分析された言語の1つからの分析結果だけを表示します。

デフォルトでは、{% data variables.product.prodname_code_scanning %}はリポジトリの分析ごとに1つのSARIF結果ファイルを期待します。 したがって、コミットから2つめのSARIF結果ファイルをアップロードすると、それはデータのオリジナルのセットの置き換えとして扱われます。

リポジトリ中の1つのコミットについての結果を{% data variables.product.prodname_code_scanning %} APIに複数アップロードしたい場合は、それぞれの結果をユニークなセットとして特定しなければなりません。 コミットごとに分析する {% data variables.product.prodname_codeql %} データセットを複数作成するリポジトリでは、`--sarif-category` オプションを使用して、そのリポジトリで生成するそれぞれの SARIF ファイルに言語または他の一意のカテゴリを指定します。

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Python の抽出に関する問題

{% data variables.product.prodname_codeql_cli %} に対する Python 2 のサポートは非推奨になっています (具体的には、CodeQL データベース生成フェーズ (コード抽出))。

Python で記述されたコードで {% data variables.product.prodname_codeql_cli %} を使って {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行する場合は、CI システムに Python 3 がインストールされていることを確認する必要があります。

{% endif %}

## 参考資料

- [CodeQL データベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [CodeQL CLI でのデータベースの分析](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [CodeQL パックを発行して使用する](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
