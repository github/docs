---
title: コードスキャンを設定する
intro: '{% data variables.product.prodname_dotcom %} がプロジェクトのコードをスキャンして脆弱性やエラーを検出する方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_code_scanning %} を設定できます。'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}


### {% data variables.product.prodname_code_scanning %} の設定について

You can run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_location %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. {% data variables.product.prodname_actions %} に関する詳しい情報については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。 For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

次のクエリスイートは {% data variables.product.prodname_code_scanning %} に組み込まれており、設定ファイルで使用できます。

リポジトリに {% data variables.product.prodname_code_scanning %} を設定する前に、リポジトリに {% data variables.product.prodname_actions %} ワークフローを追加して {% data variables.product.prodname_code_scanning %} を有効にする必要があります。 デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`on.push` イベントを使用して、ワークフローファイルを含むブランチへのプッシュごとにコードスキャンをトリガーします。

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} は、リポジトリの _.github/workflows_ ディレクトリにワークフローファイルを保存します。 You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイルビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %}をクリックしてワークフローエディタを開きます。 ![ワークフローファイルの編集ボタン](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. ファイルを編集したら、[**Start commit**] をクリックして、[Commit changes] フォームに入力します。 現在のブランチに直接コミットするか、新しいブランチを作成してプルリクエストを開始するかを選択できます。 ![codeql.yml ワークフローの更新をコミットする](/assets/images/help/repository/code-scanning-workflow-update.png)

ワークフローファイルの編集に関する詳細な情報については「[ワークフローの設定](/actions/configuring-and-managing-workflows/configuring-a-workflow)」を参照してください。

### 頻度を設定する

スケジュール設定されているときや、リポジトリで特定のイベントが発生したときに、コードをスキャンできます。

リポジトリへのプッシュごと、およびプルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーをもたらすことを防ぎます。 スケジュールに従ってコードをスキャンすると、開発者がリポジトリを積極的に維持していない場合でも、{% data variables.product.company_short %}、セキュリティ研究者、コミュニティが発見した最新の脆弱性とエラーが通知されます。

#### プッシュ時にスキャンする

デフォルトのワークフローを使用する場合、{% data variables.product.prodname_code_scanning %} は、イベントによってトリガーされるスキャンに加えて、リポジトリ内のコードを週に1回スキャンします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#on)」を参照してください。

#### プルリクエストをスキャンする

**注釈**: {% data variables.product.prodname_code_scanning %} 設定ファイルのコンテキストで使用される `paths` および `paths-ignore` キーワードを `on.<push|pull_request>.paths` で使用する場合、同じキーワードと混同しないでください。 ワークフローファイルの `on.<push|pull_request>` を変更するときに使用する場合、指定されたディレクトリのコードの変更時にアクションが実行されるかどうかを決定します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

`pull_request` イベントに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)」を参照してください。

#### スケジュールに従ってスキャンする

デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`pull_request` イベントを使用して、プルリクエストの `HEAD` コミットでコードスキャンをトリガーします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onschedule)」を参照してください。

{% note %}

**注釈**: {% data variables.product.prodname_dotcom %} は、デフォルトのブランチのワークフローにあるスケジュール設定されたジョブのみを実行します。 他のブランチのワークフローでスケジュールを変更しても、ブランチをデフォルトブランチにマージするまで影響はありません。

{% endnote %}

#### サンプル

The following example shows a {% data variables.product.prodname_codeql_workflow %} for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml
on:
  push:
  pull_request:
  schedule:
    - cron: '0 15 * * 0'
```

This workflow scans:
* Every push to the default branch and the protected branch
* Every pull request to the default branch
* The default branch at 3 P.M. every Sunday

### オペレーティングシステムを指定する

If your code requires a specific operating system to compile, you can configure the operating system in your {% data variables.product.prodname_codeql_workflow %}. `jobs.<job_id>.runs-on` の値を編集して、{% data variables.product.prodname_code_scanning %} のアクションを実行するマシンのオペレーティングシステムを指定します。 {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```
{% endif %}

{% data variables.product.prodname_code_scanning_capc %} は、macOS、Ubuntu、Windows の最新バージョンをサポートしています。 Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

### 自動言語検出をオーバーライドする

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring {% data variables.product.prodname_code_scanning %} for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages)."

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

自動言語検出をオーバーライドするには、ワークフローの `init` アクションに `with:languages:` を追加します。 サポートされている言語のキーワードは、`cpp`、`csharp`、`go`、`java`、`JavaScript`、および `python` です。

たとえば、次の設定では、{% data variables.product.prodname_code_scanning %} をC/C++、C#、および Python に制限しています。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```

### 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

1つ以上のクエリスイートを追加するには、設定ファイルに `queries` セクションを追加します。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - queries: COMMA-SEPARATED LIST OF PATHS
```

設定ファイルでこれらを指定して、追加のクエリスイートを実行することもできます。 クエリスイートはクエリのコレクションであり、通常は目的または言語ごとにグループ化されています。

{% data reusables.code-scanning.codeql-query-suites %}

If you are also using a configuration file for custom settings, any additional queries specified in your workflow are used instead of any specified in the configuration file. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. 設定ファイルの例については、「[Example configuration files](#example-configuration-files)」を参照してください。

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

``` yaml
queries:
  - name: DESCRIPTION OF YOUR CHOICE
    uses: PATH
```

### サードパーティのコードスキャンツールを使用する

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. この例では、設定ファイル _./.github/codeql/codeql-config.yml_ を読み込みます。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a public, remote repository. リモートリポジトリの場合は、_owner/repository/file.yml@branch_ 構文を使用できます。 The settings in the file are written in YAML format.

#### Specifying additional queries

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

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from scans by adding a `paths-ignore` array.

``` yaml
paths: 
  - src 
paths-ignore: 
  - node_modules
  - '**/*.test.js'
```

{% note %}

**ノート**:

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. たとえば、`foo/**`、`**/foo`、および `foo/**/bar` はすべて使用できる構文ですが、`**foo` は使用できません。 ただし、例に示すように、単一の * を他の文字と一緒に使用できます。 You'll need to quote anything that contains a `*` character.

{% endnote %}

C/C++、C#、および Java の場合、{% data variables.product.prodname_code_scanning %} をプロジェクトの特定のディレクトリに制限するには、ワークフローで適切なビルドステップを指定する必要があります。 ビルドからディレクトリを除外するために使用するコマンドは、ビルドシステムによって異なります。 For more information, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

特定のディレクトリのコードを変更すると、monorepo の一部をすばやく分析できます。 ビルドステップでディレクトリを除外し、ワークフローファイルで [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) の`paths-ignore` および `paths` キーワードを使用する必要があります。

#### 設定ファイルの例

{% data reusables.code-scanning.example-configuration-files %}

### コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages)."

### プライベートリポジトリにアクセスする

{% data variables.product.prodname_code_scanning %} のワークフローが {% data variables.product.prodname_dotcom %} のプライベートリポジトリにアクセスする場合は、個人アクセストークンを使用して認証するように Git を設定する必要があります。 {% data variables.product.prodname_codeql %} アクションの前にワークフローで `jobs.<job_id>.steps.env` を使用して、ランナー環境でシークレットを定義します。 詳しい情報については、「[コマンドライン用の個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)」および「[暗号化されたシークレットの作成と保存](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)」を参照してください。

たとえば、次の設定では、Git が {% data variables.product.prodname_dotcom_the_website %} の `github/foo`、`github/bar`、`github/baz` リポジトリへの完全な URL を、`ACCESS_TOKEN` 環境変数に保存した個人アクセストークンを含む URL に置き換えます。

{% raw %}
```yaml
steps:
- name: Configure access to private repository on GitHub.com
  env:
    TOKEN: ${{ secrets.ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/github/foo".insteadOf "https://github.com/github/foo"
    git config --global url."https://${TOKEN}@github.com/github/bar".insteadOf "https://github.com/github/bar"
    git config --global url."https://${TOKEN}@github.com/github/baz".insteadOf "https://github.com/github/baz"
```
{% endraw %}

### {% data variables.product.prodname_code_scanning %} 用の設定ファイルを作成できます。

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. ワークフローに `upload-sarif` アクションを追加することで、{% data variables.product.prodname_dotcom %} のサードパーティツールからのコード分析を表示できます。 詳しい情報については、「[SARIF ファイルを GitHub にアップロードする](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)」を参照してください。
