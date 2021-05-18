---
title: コードスキャンを設定する
intro: '{% data variables.product.prodname_dotcom %} がプロジェクトのコードをスキャンして脆弱性やエラーを検出する方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### {% data variables.product.prodname_code_scanning %} の設定について

{% data variables.product.prodname_actions %} を使用して、または {% data variables.product.prodname_codeql_runner %} を使用して継続的インテグレーション (CI) システムから {% data variables.product.prodname_code_scanning %} を {% data variables.product.product_name %} 上で実行できます。 {% data variables.product.prodname_actions %} に関する詳しい情報については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。 For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

この記事は、{% data variables.product.product_name %} 上で {% data variables.product.prodname_code_scanning %} を実行することについて説明しています。

リポジトリに {% data variables.product.prodname_code_scanning %} を設定する前に、リポジトリに {% data variables.product.prodname_actions %} ワークフローを追加して {% data variables.product.prodname_code_scanning %} をセットアップする必要があります。 詳しい情報については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} 解析は、{% data variables.product.prodname_dotcom %} で実行できる {% data variables.product.prodname_code_scanning %} のほんの一例に過ぎません。 {% data variables.product.prodname_dotcom_the_website %} 上の {% data variables.product.prodname_marketplace %} には、利用可能な別の {% data variables.product.prodname_code_scanning %} ワークフローもあります。 この記事で扱う具体例は、{% data variables.product.prodname_codeql_workflow %} ファイルに関するものです。

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} は、リポジトリの _.github/workflows_ ディレクトリにワークフローファイルを保存します。 ファイル名を検索して、追加済みのワークフローを見つけることができます。 For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイルビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %}をクリックしてワークフローエディタを開きます。 ![ワークフローファイルの編集ボタン](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. ファイルを編集したら、[**Start commit**] をクリックして、[Commit changes] フォームに入力します。 現在のブランチに直接コミットするか、新しいブランチを作成してプルリクエストを開始するかを選択できます。 ![codeql.yml ワークフローの更新をコミットする](/assets/images/help/repository/code-scanning-workflow-update.png)

ワークフローファイルの編集に関する詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

### 頻度を設定する

スケジュール設定されているときや、リポジトリで特定のイベントが発生したときに、コードをスキャンできます。

リポジトリへのプッシュごと、およびプルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーをもたらすことを防ぎます。 スケジュールに従ってコードをスキャンすると、開発者がリポジトリを積極的に維持していない場合でも、{% data variables.product.company_short %}、セキュリティ研究者、コミュニティが発見した最新の脆弱性とエラーが通知されます。

#### プッシュ時にスキャンする

デフォルトのワークフローを使用する場合、{% data variables.product.prodname_code_scanning %} は、イベントによってトリガーされるスキャンに加えて、リポジトリ内のコードを週に1回スキャンします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#on)」を参照してください。

#### プルリクエストをスキャンする

デフォルトの {% data variables.product.prodname_codeql_workflow %} は、`pull_request` イベントを使用して、デフォルトブランチに対するプルリクエストのコードスキャンをトリガーします。 プルリクエストをプライベートフォークからオープンした場合、`pull_request` イベントはトリガーされません。

`pull_request` イベントに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)」を参照してください。

#### プルリクエストの不要なスキャンを回避する

どのファイルが変更されたかに関わらず、デフォルトブランチに対する特定のプルリクエストにコードスキャンがトリガーされることを避けたい場合もあるでしょう。 これを設定するには、{% data variables.product.prodname_code_scanning %} ワークフローで `on:pull_request:paths-ignore` または `on:pull_request:paths` を指定します。 たとえば、プルリクエストにおける変更が、`.md` または `.txt` のファイル拡張子を持つファイルである場合、次の `paths-ignore` 配列を使用できます。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**注釈**

* `on:pull_request:paths-ignore` と `on:pull_request:paths` は、ワークフローのアクションがプルリクエストで実行されるかどうかを決定する条件を設定します。 アクションが実行されたときにどのファイルが解析__されるかは決定しません。 プルリクエストに、`on:pull_request:paths-ignore` または `on:pull_request:paths` にマッチしないファイルが含まれている場合、ワークフローはそのアクションを実行し、`on:pull_request:paths-ignore` または `on:pull_request:paths` にマッチするものを含む、プルリクエストにおいて変更されたすべてのファイルをスキャンします。ただし、除外されているファイルは除きます。 ファイルを解析から除外する方法については、「[スキャンするディレクトリを指定する](#specifying-directories-to-scan)」を参照してください。
* For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} ワークフローファイルに対しては、`on:push` イベントで `paths-ignore` や `paths` といったキーワードは使用しないでください。解析に漏れが生じる恐れがあります。 正確な結果を得るには、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} が新しい変更を前回のコミットの解析と比較できる必要があります。

{% endnote %}

`on:pull_request:paths-ignore` と `on:pull_request:paths` を使用して、プルリクエストに対していつワークフローを実行するかを決定することに関する詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

#### スケジュールに従ってスキャンする

デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`pull_request` イベントを使用して、プルリクエストの `HEAD` コミットでコードスキャンをトリガーします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onschedule)」を参照してください。

{% note %}

**注釈**: {% data variables.product.prodname_dotcom %} は、デフォルトのブランチのワークフローにあるスケジュール設定されたジョブのみを実行します。 他のブランチのワークフローでスケジュールを変更しても、ブランチをデフォルトブランチにマージするまで影響はありません。

{% endnote %}

#### サンプル

以下の例は、デフォルトブランチの名前が `main` で、`protected` という保護されたブランチがある特定のリポジトリに対する {% data variables.product.prodname_codeql_workflow %} を示しています。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '40 7 * * 2'
```

このワークフローは、次をスキャンします。
* デフォルトブランチと保護されたブランチに対する全てのプッシュ
* デフォルトブランチに対する全てのプルリクエスト
* 毎週火曜日 7:40 (UTC) にデフォルトブランチ

### オペレーティングシステムを指定する

コードのコンパイルに特定のオペレーティングシステムが必要な場合は、そのオペレーティングシステムを {% data variables.product.prodname_codeql_workflow %} で設定できます。 `jobs.analyze.runs-on` の値を編集して、{% data variables.product.prodname_code_scanning %} のアクションを実行するマシンのオペレーティングシステムを指定します。 オペレーティングシステムの指定には、`self-hosted` の後に、2 つの要素がある配列の 2 番目の要素として、適切なラベルを使用します。

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_code_scanning_capc %} は、macOS、Ubuntu、Windows の最新バージョンをサポートしています。 Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. 詳しい情報については、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)」および「[セルフホストランナーでラベルを使用する](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」を参照してください。

セルフホストランナーの PATH 変数に Git が確実に含まれるようにしてください。

### 解析される言語を変更する

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} automatically detects code written in the supported languages.

{% data reusables.code-scanning.codeql-languages-bullets %}

The default {% data variables.product.prodname_codeql_workflow %} file contains a build matrix called `language` which lists the languages in your repository that are analyzed. {% data variables.product.prodname_codeql %} automatically populates this matrix when you add {% data variables.product.prodname_code_scanning %} to a repository. Using the `language` matrix optimizes {% data variables.product.prodname_codeql %} to run each analysis in parallel. We recommend that all workflows adopt this configuration due to the performance benefits of parallelizing builds. For more information about build matrices, see "[Managing complex workflows](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)."

{% data reusables.code-scanning.specify-language-to-analyze %}

If your workflow uses the `language` matrix then {% data variables.product.prodname_codeql %} is hardcoded to analyze only the languages in the matrix. To change the languages you want to analyze, edit the value of the matrix variable. You can remove a language to prevent it being analyzed or you can add a language that was not present in the repository when {% data variables.product.prodname_code_scanning %} was set up. For example, if the repository initially only contained JavaScript when {% data variables.product.prodname_code_scanning %} was set up, and you later added Python code, you will need to add `python` to the matrix.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

If your workflow does not contain a matrix called `language`, then {% data variables.product.prodname_codeql %} is configured to run analysis sequentially. If you don't specify languages in the workflow, {% data variables.product.prodname_codeql %} automatically detects, and attempts to analyze, any supported languages in the repository. If you want to choose which languages to analyze, without using a matrix, you can use the `languages` parameter under the `init` action.

```yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```
{% if currentVersion == "free-pro-team@latest" %}
### 追加のクエリを実行する

For GitHub-hosted runners that use Linux only, the {% data variables.product.prodname_codeql_workflow %} will try to auto-install Python dependencies to give more results for the CodeQL analysis. You can control this behavior by specifying the `setup-python-dependencies` parameter for the action called by the "Initialize CodeQL" step. By default, this parameter is set to `true`:

-  If the repository contains code written in Python, the "Initialize CodeQL" step installs the necessary dependencies on the GitHub-hosted runner. If the auto-install succeeds, the action also sets the environment variable `CODEQL_PYTHON` to the Python executable file that includes the dependencies.

- If the repository doesn't have any Python dependencies, or the dependencies are specified in an unexpected way, you'll get a warning and the action will continue with the remaining jobs. The action can run successfully even when there are problems interpreting dependencies, but the results may be incomplete.

Alternatively, you can install Python dependencies manually on any operating system. You will need to add `setup-python-dependencies` and set it to `false`, as well as set `CODEQL_PYTHON` to the Python executable that includes the dependencies, as shown in this workflow extract:

```yaml
jobs:
  CodeQL-Build:

    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v1
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

### 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

1つ以上のクエリスイートを追加するには、設定ファイルに `queries` セクションを追加します。 If the queries are in a private repository, use the `external-repository-token` parameter to specify a token that has access to the private repository.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access private repositories.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

設定ファイルでこれらを指定して、追加のクエリスイートを実行することもできます。 クエリスイートはクエリのコレクションであり、通常は目的または言語ごとにグループ化されています。

{% data reusables.code-scanning.codeql-query-suites %}

If you are also using a configuration file for custom settings, any additional queries specified in your workflow are used instead of any specified in the configuration file. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. 設定ファイルの例については、「[Example configuration files](#example-configuration-files)」を参照してください。

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

### サードパーティのコードスキャンツールを使用する

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. この例では、設定ファイル _./.github/codeql/codeql-config.yml_ を読み込みます。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

If the configuration file is located in an external private repository, use the `external-repository-token` parameter of the `init` action to specify a token that has access to the private repository.

{% raw %}
```yaml
uses: github/codeql-action/init@v1
with:
  external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

The settings in the configuration file are written in YAML format.

#### 追加のクエリを指定する

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below.

For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

#### デフォルトのクエリを無効にする

カスタムクエリのみを実行する場合は、構成ファイルに `disable-default-queries: true` を追加して、デフォルトのセキュリティクエリを無効にすることができます。

#### スキャンするディレクトリを指定する

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from analysis by adding a `paths-ignore` array.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**ノート**:

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。
* The filter pattern characters `?`, `+`, `[`, `]`, and `!` are not supported and will be matched literally.
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. たとえば、`foo/**`、`**/foo`、および `foo/**/bar` はすべて使用できる構文ですが、`**foo` は使用できません。 ただし、例に示すように、単一の * を他の文字と一緒に使用できます。 You'll need to quote anything that contains a `*` character.

{% endnote %}

For compiled languages, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. ビルドからディレクトリを除外するために使用するコマンドは、ビルドシステムによって異なります。 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

特定のディレクトリのコードを変更すると、monorepo の一部をすばやく分析できます。 ビルドステップでディレクトリを除外し、ワークフローファイルで [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) の`paths-ignore` および `paths` キーワードを使用する必要があります。

#### 設定ファイルの例

{% data reusables.code-scanning.example-configuration-files %}

### コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %}コンパイルされた言語で {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を設定する方法に関する詳しい情報については、「[コンパイルされた言語の {% data variables.product.prodname_codeql %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages)」を参照してください。

### {% data variables.product.prodname_code_scanning %} 用の設定ファイルを作成できます。

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. ワークフローに `upload-sarif` アクションを追加することで、{% data variables.product.prodname_dotcom %} のサードパーティツールからのコード分析を表示できます。 詳しい情報については、「[SARIF ファイルを GitHub にアップロードする](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)」を参照してください。
