---
title: CIシステムでのCodeQL CLIの設定
shortTitle: CodeQL CLIの設定
intro: '継続的インテグレーションシステムを{% data variables.product.prodname_codeql_cli %}を実行するように設定し、{% data variables.product.prodname_codeql %}分析を行い、{% data variables.product.prodname_code_scanning %}アラートとして表示させるために結果を{% data variables.product.product_name %}にアップロードできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: next
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_codeql_cli %}でのCode scanningの結果の生成について

CIシステム内のサーバーで{% data variables.product.prodname_codeql_cli %}を利用できるようにして、確実に{% data variables.product.product_name %}で認証できるようにしたなら、データを生成する準備ができています。

結果を生成して{% data variables.product.product_name %}にアップロードするには、3つの異なるコマンドを使います。

{% ifversion fpt or ghes > 3.1 or ghae-next %}
<!--Option to analyze multiple languages with one call-->
1. `database create`で、リポジトリ中のサポートされている各プログラミング言語の階層構造を表す{% data variables.product.prodname_codeql %}データベースを作成してください。
2. `database analyze`でクエリを実行し、各{% data variables.product.prodname_codeql %}データベースを分析し、結果をSARIFファイルにまとめてください。
3. `github upload-results`で結果のSARIFファイルを{% data variables.product.product_name %}にアップロードしてください。そこで結果はブランチもしくはPull Requestとマッチさせられ、{% data variables.product.prodname_code_scanning %}アラートとして表示されます。
{% else %}
<!--Only one language can be analyzed-->
1. `database create`で、リポジトリ中のサポートされているプログラミング言語の階層構造を表す{% data variables.product.prodname_codeql %}データベースを作成してください。
2. `database analyze`でクエリを実行し、{% data variables.product.prodname_codeql %}データベースを分析し、結果をSARIFファイルにまとめてください。
3. `github upload-results`で結果のSARIFファイルを{% data variables.product.product_name %}にアップロードしてください。そこで結果はブランチもしくはPull Requestとマッチさせられ、{% data variables.product.prodname_code_scanning %}アラートとして表示されます。
{% endif %}

以下のオプションを使って、どのコマンドでもコマンドラインヘルプを表示できます。 <nobr>`--help`</nobr>

{% data reusables.code-scanning.upload-sarif-ghas %}

## 分析する{% data variables.product.prodname_codeql %}データベースの作成

1. 分析したいコードをチェックアウトしてください:
    - ブランチの場合は、分析したいブランチのheadをチェックアウトしてください。
    - Pull Requestの場合は、Pull Requestのheadコミットをチェックアウトするか、{% data variables.product.product_name %}が生成したPull Requestのマージコミットをチェックアウトしてください。
2. コードベースの環境をセットアップし、すべての依存関係が利用できるようにしてください。 詳しい情報については、{% data variables.product.prodname_codeql_cli %}のドキュメンテーション中の[非コンパイル言語のデータベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages)及び[コンパイル言語のデータベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)を参照してください。
3. コードベースのビルドコマンドがあれば、それを見つけてください。 通常これはCIシステムの設定ファイルにあります。
4. リポジトリのチェックアウトのルートから`codeql database create`を実行し、コードベースをビルドしてください。
  {% ifversion fpt or ghes > 3.1 or ghae-next %}
  ```shell
  # 単一のサポートされている言語 - 1つのCodeQLデータベースを作成
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt; 

  # 複数のサポートされている言語 - 言語ごとにCodeQLデータベースを作成
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt; 
  ```
  {% else %}
    ```shell
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;
  ```
  {% endif %}
  {% note %}

  **ノート:** コンテナ化されたビルドを使っているなら、ビルドのタスクが行われるコンテナ中で{% data variables.product.prodname_codeql_cli %}を実行しなければなりません。

  {% endnote %}

<table spaces-before="0">
  <tr>
    <th>
      Option
    </th>
    
    <th align="center">
      必須
    </th>
    
    <th>
      使い方
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      {% data variables.product.prodname_codeql %}データベースを作成するディレクトリの名前と場所を指定します。 既存のディレクトリを上書きしようとすると、コマンドは失敗します。 <code>--db-cluster</code>も指定した場合、これは親ディレクトリになり、分析する言語ごとにサブディレクトリが作られます。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--language`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      データベースを作成する言語の識別子を指定します。<code>{% data reusables.code-scanning.codeql-languages-keywords %}</code>のいずれかです（TypeScriptのコードを分析するときは<code>javascript</code>を使ってください）。
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae-next %} <nobr>`--db-cluster`とともに使われると、</nobr>このオプションはカンマ区切りのリストを取るか、複数回指定できます。{% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      推奨されます。 コードベースのビルドプロセスを呼び出すビルドコマンドもしくはスクリプトを指定するために使います。 コマンドは現在のフォルダ、もしくは定義されている場合は <nobr>`--source-root`</nobr>. Python及びJavaScript/TypeScriptの分析では不要です。
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae-next %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--db-cluster`とともに使われると、</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 複数言語のコードベースを使って、 <nobr>`--language`</nobr>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--no-run-unnecessary-builds`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      推奨されます。 {% data variables.product.prodname_codeql_cli %}がビルドをモニターする必要がない場合に、言語のビルドコマンドを抑制するために使います（たとえばPythonやJavaScript/TypeScript）。
    </td>
  </tr>
  
  <tr>
    <td>
      {% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 CLIをリポジトリのチェックアウトルート外で実行する場合に使います。 デフォルトでは、<code>database create</code>コマンドは現在のディレクトリがソースファイルのルートディレクトリであると推定します。別の場所を指定する場合はこのオプションを使ってください。
    </td>
  </tr>
</table>

詳しい情報については{% data variables.product.prodname_codeql_cli %}のドキュメンテーション中の[{% data variables.product.prodname_codeql %}データベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)を参照してください。

### {% ifversion fpt or ghes > 3.1 or ghae-next %}単一言語の例{% else %}基本の例{% endif %}

この例は、`/checkouts/example-repo`にチェックアウトされたリポジトリの{% data variables.product.prodname_codeql %}データベースを作成します。 これはJavaScript extractorを使い、リポジトリ中のJavaScriptとTypeScriptコードの階層表現を作成します。 結果のデータベースは`/codeql-dbs/example-repo`に保存されます。

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

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### 複数言語の例

この例は、`/checkouts/example-repo-multi`にチェックアウトされたリポジトリの2つの{% data variables.product.prodname_codeql %}データベースを作成します。 これは以下を使用します。

- `--db-cluster`で複数の言語の分析をリクエストします。
- `--language`でデータベースを作成する言語を指定します。
- `--command`でコードベースのビルドコマンドをツールに知らせます。ここでは`make`です。
- `--no-run-unnecessary-builds`で不要な場合に言語のビルドコマンドをスキップするようツールに伝えます（たとえばPython）。

結果のデータベースは、`/codeql-dbs/example-repo-multi`のサブディレクトリの`python`及び`cpp`に保存されます。

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
{% endif %}

## {% data variables.product.prodname_codeql %}データベースの分析

1. Create a {% data variables.product.prodname_codeql %} database (see above).{% if codeql-packs %}
2. Optional, run `codeql pack download` to download any {% data variables.product.prodname_codeql %} packs (beta) that you want to run during analysis. For more information, see "[Downloading and using {% data variables.product.prodname_codeql %} query packs](#downloading-and-using-codeql-query-packs)" below.
    ```shell
    codeql pack download &lt;packs&gt; 
    ```
    {% endif %}
3. Run `codeql database analyze` on the database and specify which {% if codeql-packs %}packs and/or {% endif %}queries to use.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% if codeql-packs %}&lt;packs,queries&gt;{% else %} &lt;queries&gt;{% endif %} 
  ```

{% ifversion fpt or ghes > 3.1 or ghae-next %}
{% note %}

**ノート:** 1つのコミットに対して複数の{% data variables.product.prodname_codeql %}データベースを分析する場合、このコマンドが生成するそれぞれの結果セットに対してSARIFカテゴリを指定しなければなりません。 結果を{% data variables.product.product_name %}にアップロードする際には、{% data variables.product.prodname_code_scanning %}はこのカテゴリを使ってそれぞれの言語に対する結果を別々に保存します。 これを忘れると、それぞれのアップロードが以前の結果を上書きしてしまいます。

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% if codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

{% endif %}
<table spaces-before="0">
  <tr>
    <th>
      Option
    </th>
    
    <th align="center">
      必須
    </th>
    
    <th>
      使い方
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      分析する{% data variables.product.prodname_codeql %}データベースを含むディレクトリのパスを指定します。
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;queries&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      実行するクエリを指定します。 {% data variables.product.prodname_code_scanning %}で使われる標準のクエリを実行するには、<code>&lt;language&gt;-code-scanning.qls</code>を使ってください。ここで<code>&lt;language&gt;</code>はデータベースの言語の短いコードです。 {% data variables.product.prodname_codeql_cli %}バンドル内に含まれている他のクエリスイートを見るには、<code>/&lt;extraction-root&gt;/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>を見てください。 独自のクエリスイートの作成に関する情報については、{% data variables.product.prodname_codeql_cli %}のドキュメンテーション中の<a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">CodeQLクエリスイートの作成</a>を参照してください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--format`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      コマンドが生成する結果ファイルのフォーマットを指定します。 {% data variables.product.company_short %}へアップロードする場合、これは{% ifversion fpt or ghae %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}とすべきです。 詳しい情報については「<a href="/code-security/secure-coding/sarif-support-for-code-scanning">{% data variables.product.prodname_code_scanning %}の SARIF サポート</a>」を参照してください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--output`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      SARIF結果ファイルを保存する場所を指定します。{% ifversion fpt or ghes > 3.1 or ghae-next %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
      {% octicon "question" aria-label="Required with multiple results sets" %}
    </td>
    
    <td>
      単一データベース分析のオプション。 リポジトリ中の単一のコミットに対する複数のデータベースを分析する際に、言語を定義するために必要。 この分析でSARIF結果ファイルに含めるカテゴリを指定してください。 A category is used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.|{% endif %}{% if codeql-packs %}
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 Use if you have downloaded CodeQL query packs and want to run the default queries or query suites specified in the packs. For more information, see "<a href="#downloading-and-using-codeql-query-packs">Downloading and using {% data variables.product.prodname_codeql %} packs</a>."{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--threads`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 クエリを実行するのに複数のスレッドを使いたいときに使用します。 デフォルト値は<code>1</code>です。 クエリの実行を高速化するためにより多くのスレッドを指定できます。 スレッド数を論理プロセッサ数に設定するには<code>0</code>を指定してください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--verbose`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 分析のプロセス{% ifversion fpt or ghes > 3.1 or ghae-next %}とデータベース作成プロセスからの診断データ{% endif %}に関する詳細な情報を得るために使用します。
    </td>
  </tr>
</table>

詳しい情報については、{% data variables.product.prodname_codeql_cli %}のドキュメンテーション中の[{% data variables.product.prodname_codeql_cli %}でのデータベースの分析](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)を参照してください。

### 基本的な例

この例は`/codeql-dbs/example-repo`に保存された{% data variables.product.prodname_codeql %}データベースを分析し、結果を`/temp/example-repo-js.sarif`というSARIFファイルに保存します。 {% ifversion fpt or ghes > 3.1 or ghae-next %}ここでは`--sarif-category`を使って結果をJavaScriptとして識別する追加情報をSARIFファイルに含めます。 これは、リポジトリ中の単一のコミットに対して分析する{% data variables.product.prodname_codeql %}データベースが複数ある場合に不可欠です。{% endif %}

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls {% ifversion fpt or ghes > 3.1 or ghae-next %}--sarif-category=javascript{% endif %}
    --format={% ifversion fpt or ghae %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

## {% data variables.product.product_name %}への結果のアップロード

{% data reusables.code-scanning.upload-sarif-alert-limit %}

結果を{% data variables.product.product_name %}にアップロードする前に、{% data variables.product.prodname_github_app %}もしくは以前に作成した個人アクセストークンを{% data variables.product.prodname_codeql_cli %}に渡す最善の方法を決めなければなりません（[CIシステムへの{% data variables.product.prodname_codeql_cli %}のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)参照）。 シークレットストアの安全な使用については、CIシステムのガイダンスを確認することをおすすめします。 {% data variables.product.prodname_codeql_cli %}は以下をサポートします。

- `--github-auth-stdin`オプションを使い、標準入力からCLIにトークンを渡す（推奨）。
- シークレットを環境変数`GITHUB_TOKEN` に保存し、`--github-auth-stdin`オプションを含めずにCLIを実行する。

使っているCIサーバーで最も安全で信頼できる方法を決めたなら、各SARIF結果ファイルに対して`codeql github upload-results`を実行し、環境変数の`GITHUB_TOKEN`でトークンが利用できないのであれば`--github-auth-stdin`を含めておいてください。

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes > 3.0 or ghae-next %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

<table spaces-before="0">
  <tr>
    <th>
      Option
    </th>
    
    <th align="center">
      必須
    </th>
    
    <th>
      使い方
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`--repository`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      データをアップロードするリポジトリの<em x-id="3">OWNER/NAME</em>を指定します。 {% ifversion fpt %}リポジトリがパブリックでなければ、{% endif %}オーナーは{% data variables.product.prodname_GH_advanced_security %}のライセンスを持つEnterprise内のOrganizationでなければならず、{% data variables.product.prodname_GH_advanced_security %}はリポジトリで有効化されていなければなりません。 詳しい情報については「<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">リポジトリのセキュリティ及び分析の設定の管理</a>」を参照してください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--ref`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      チェックアウトして分析した<code>ref</code>の名前を指定して、結果が正しいコードとマッチできるようにします。 ブランチでは<code>refs/heads/BRANCH-NAME</code>を、Pull Requestのheadコミットでは<code>refs/pulls/NUMBER/head</code>を、Pull Requestに対して{% data variables.product.product_name %}が生成したマージコミットでは<code>refs/pulls/NUMBER/merge</code>を使ってください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--commit`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      分析したコミットの完全なSHAを指定してください。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--sarif`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      ロードするSARIFファイルを指定してください。{% ifversion ghes > 3.0 or ghae-next %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-url`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      {% data variables.product.product_name %}のURLを指定してください。{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 {% data variables.product.prodname_github_app %}もしくは{% data variables.product.company_short %}のREST APIの認証のために作成された個人アクセストークンを標準入力経由でCLIに渡すために使います。 このトークンが設定された環境変数<code>GITHUB_TOKEN</code>にコマンドがアクセスできる場合、これは必要ありません。
    </td>
  </tr>
</table>

詳しい情報については、{% data variables.product.prodname_codeql_cli %}のドキュメンテーション中の[github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/)を参照してください。

### 基本的な例

この例は、`temp/example-repo-js.sarif`というSARIFファイルからの結果を`my-org/example-repo`というリポジトリにアップロードします。 {% data variables.product.prodname_code_scanning %} APIには、この結果が`main`ブランチのコミット`deb275d2d5fe9a522a0b7bd8b6b6a1c939552718`に対するものであることを伝えます。

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes > 3.0 or ghae-next %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

アップロードが失敗しなければ、このコマンドからの出力はありません。 コマンドプロンプトは、アップロードが完了してデータ処理が開始された時点で戻ってきます。 小さなコードベースでは、すぐ後に{% data variables.product.product_name %}中の{% data variables.product.prodname_code_scanning %}アラートを調べることができるでしょう。 チェックアウトしたコードによって、Pull Request中で直接、あるいはブランチの**Security（セキュリティ）**タブ上でアラートを見ることができます。 詳しい応報については「[Pull Requestの{% data variables.product.prodname_code_scanning %}アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」及び「[リポジトリの{% data variables.product.prodname_code_scanning %}アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

{% if codeql-packs %}
## Downloading and using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries. For more information, see "[About code scanning with CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

Before you can use a {% data variables.product.prodname_codeql %} pack to analyze a database, you must download any packages you require from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} by running `codeql pack download` and specifying the packages you want to download. If a package is not publicly available, you will need to use a {% data variables.product.prodname_github_app %} or personal access token to authenticate. For more information and an example, see "[Uploading results to {% data variables.product.product_name %}](#uploading-results-to-github)" above.

```shell
codeql pack download &lt;scope/name@version&gt;,... 
```

<table spaces-before="0">
  <tr>
    <th>
      Option
    </th>
    
    <th align="center">
      必須
    </th>
    
    <th>
      使い方
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`<scope>`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Specify the scope and name of one or more CodeQL query packs to download using a comma-separated list. Optionally, include the version to download and unzip. By default the latest version of this pack is downloaded.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      オプション。 Pass the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API to the CLI via standard input. このトークンが設定された環境変数<code>GITHUB_TOKEN</code>にコマンドがアクセスできる場合、これは必要ありません。
    </td>
  </tr>
</table>

### 基本的な例

This example runs two commands to download the latest version of the `octo-org/security-queries` pack and then analyze the database `/codeql-dbs/example-repo`.

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download octo-org/security-queries

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0

$ codeql database analyze /codeql-dbs/example-repo  octo-org/security-queries \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/1] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> [1/1 eval 394ms] Evaluation done; writing results to docto-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## {% data variables.product.prodname_codeql %}分析のためのCIの設定例

これは、2つのサポートされている言語を持つコードベースを分析し、結果を{% data variables.product.product_name %}にアップロードするために使うことができる一連のコマンドの例です。

```shell
# 'codeql-dbs'ディレクトリ中のJava及びPythonのためのCodeQLデータベースを急く性
# コードベースのための通常のビルドスクリプトの 'myBuildScript'を呼ぶ

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# JavaのためのCodeQLデータベース'codeql-dbs/java'を分析
# データに'java'の結果としてタグ付けし、'java-results.sarif'に保存

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# PythonのためのCodeQLデータベース'codeql-dbs/python'を分析
# データに'python'の結果としてタグ付けし、'python-results.sarif'に保存

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Javaの結果付きのSARIF ファイル'java-results.sarif'をアップロード
echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Pythonの結果付きのSARIFファイル'python-results.sarif'をアップロード

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## CIシステムでの{% data variables.product.prodname_codeql_cli %}のトラブルシューティング

### ログと診断情報を見る

{% data variables.product.prodname_code_scanning %}クエリスイートを使って{% data variables.product.prodname_codeql %}データベースを分析する際には、アラートに関する詳細情報を生成するのに加えて、CLIはデータベース生成ステップからの診断情報とサマリメトリクスを報告します。 アラートが少ないリポジトリでは、実際にコード中の問題が少ないのか、あるいは{% data variables.product.prodname_codeql %}データベースの生成時にエラーがあったのかを判断するのにこの情報が役立つかもしれません。 `codeql database analyze`から詳細な出力を得るには、`--verbose`オプションを使ってください。

利用できる診断情報の種類に関する詳しい情報については「[{% data variables.product.prodname_code_scanning %}ログを見る](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)」を参照してください。

### {% data variables.product.prodname_code_scanning_capc %}は、分析された言語の1つからの分析結果だけを表示します。

デフォルトでは、{% data variables.product.prodname_code_scanning %}はリポジトリの分析ごとに1つのSARIF結果ファイルを期待します。 したがって、コミットから2つめのSARIF結果ファイルをアップロードすると、それはデータのオリジナルのセットの置き換えとして扱われます。

リポジトリ中の1つのコミットについての結果を{% data variables.product.prodname_code_scanning %} APIに複数アップロードしたい場合は、それぞれの結果をユニークなセットとして特定しなければなりません。 コミットごとに分析する{% data variables.product.prodname_codeql %}データセットを複数作成するリポジトリでは、`--sarif-category`オプションを使い、そのリポジトリで生成する それぞれの SARIFファイルに言語もしくは他のユニークなカテゴリを指定してください。

### CIシステムが{% data variables.product.prodname_codeql_cli %}をトリガーできない場合の代替方法

{% ifversion fpt or ghes > 3.2 or ghae-next %}

If your CI system cannot trigger the {% data variables.product.prodname_codeql_cli %} autobuild and you cannot specify a command line for the build, you can use indirect build tracing to create {% data variables.product.prodname_codeql %} databases for compiled languages. For more information, see [Using indirect build tracing](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#using-indirect-build-tracing) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

{% endif %}

{% ifversion ghes < 3.3 %}

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

## 参考リンク

- [CodeQLデータベースの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [CodeQL CLIでのデータベースの分析](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
