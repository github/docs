---
title: コードスキャンを設定する
intro: '{% data variables.product.prodname_dotcom %} がプロジェクトのコードをスキャンして脆弱性やエラーを検出する方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_code_scanning %} を設定できます。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - セキュリティ
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### {% data variables.product.prodname_code_scanning %} の設定について

You can run {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. {% data variables.product.prodname_actions %} に関する詳しい情報については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。 For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system)."

This article is about running {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %}.

Before you can configure {% data variables.product.prodname_code_scanning %} for a repository, you must set up {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} は、リポジトリの _.github/workflows_ ディレクトリにワークフローファイルを保存します。 You can find a workflow you have added by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイルビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %}をクリックしてワークフローエディタを開きます。 ![ワークフローファイルの編集ボタン](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. ファイルを編集したら、[**Start commit**] をクリックして、[Commit changes] フォームに入力します。 現在のブランチに直接コミットするか、新しいブランチを作成してプルリクエストを開始するかを選択できます。 ![codeql.yml ワークフローの更新をコミットする](/assets/images/help/repository/code-scanning-workflow-update.png)

For more information about editing workflow files, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### 頻度を設定する

スケジュール設定されているときや、リポジトリで特定のイベントが発生したときに、コードをスキャンできます。

リポジトリへのプッシュごと、およびプルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーをもたらすことを防ぎます。 スケジュールに従ってコードをスキャンすると、開発者がリポジトリを積極的に維持していない場合でも、{% data variables.product.company_short %}、セキュリティ研究者、コミュニティが発見した最新の脆弱性とエラーが通知されます。

#### プッシュ時にスキャンする

デフォルトのワークフローを使用する場合、{% data variables.product.prodname_code_scanning %} は、イベントによってトリガーされるスキャンに加えて、リポジトリ内のコードを週に1回スキャンします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#on)」を参照してください。

If you scan on push, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

{% note %}

**Note**: If you want {% data variables.product.prodname_code_scanning %} alerts to appear as pull request checks, you must use the `pull_request` event, described below.

{% endnote %}

#### プルリクエストをスキャンする

The default {% data variables.product.prodname_codeql_workflow %} uses the `pull_request` event to trigger a code scan on pull requests targeted against the default branch. {% if currentVersion ver_gt "enterprise-server@2.21" %}The `pull_request` event is not triggered if the pull request was opened from a private fork.{% else %}If a pull request is from a private fork, the `pull_request` event will only be triggered if you've selected the "Run workflows from fork pull requests" option in the repository settings. 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

`pull_request` イベントに関する詳しい情報については、「"[{% data variables.product.prodname_actions %}のためのワークフローの構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)」を参照してください。

If you scan pull requests, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."

#### Avoiding unnecessary scans of pull requests

You might want to avoid a code scan being triggered on specific pull requests targeted against the default branch, irrespective of which files have been changed. You can configure this by specifying `on:pull_request:paths-ignore` or `on:pull_request:paths` in the {% data variables.product.prodname_code_scanning %} workflow. For example, if the only changes in a pull request are to files with the file extensions `.md` or `.txt` you can use the following `paths-ignore` array.

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

* `on:pull_request:paths-ignore` and `on:pull_request:paths` set conditions that determine whether the actions in the workflow will run on a pull request. They don't determine what files will be analyzed when the actions _are_ run. When a pull request contains any files that are not matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, the workflow runs the actions and scans all of the files changed in the pull request, including those matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, unless the files have been excluded. For information on how to exclude files from analysis, see "[Specifying directories to scan](#specifying-directories-to-scan)."
* For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} workflow files, don't use the `paths-ignore` or `paths` keywords with the `on:push` event as this is likely to cause missing analyses. For accurate results, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} needs to be able to compare new changes with the analysis of the previous commit.

{% endnote %}

For more information about using `on:pull_request:paths-ignore` and `on:pull_request:paths` to determine when a workflow will run for a pull request, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

#### スケジュールに従ってスキャンする

デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`pull_request` イベントを使用して、プルリクエストの `HEAD` コミットでコードスキャンをトリガーします。 このスケジュールを調整するには、ワークフローで `cron` 値を編集します。 詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onschedule)」を参照してください。

{% note %}

**注釈**: {% data variables.product.prodname_dotcom %} は、デフォルトのブランチのワークフローにあるスケジュール設定されたジョブのみを実行します。 他のブランチのワークフローでスケジュールを変更しても、ブランチをデフォルトブランチにマージするまで影響はありません。

{% endnote %}

#### サンプル

The following example shows a {% data variables.product.prodname_codeql_workflow %} for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

This workflow scans:
* Every push to the default branch and the protected branch
* Every pull request to the default branch
* The default branch every Monday at 14:20 UTC

### オペレーティングシステムを指定する

If your code requires a specific operating system to compile, you can configure the operating system in your {% data variables.product.prodname_codeql_workflow %}. Edit the value of `jobs.analyze.runs-on` to specify the operating system for the machine that runs your {% data variables.product.prodname_code_scanning %} actions. {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% else %}

If you choose to use a self-hosted runner for code scanning, you can specify an operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% if currentVersion == "free-pro-team@latest" %}For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."{% endif %}

{% data variables.product.prodname_code_scanning_capc %} は、macOS、Ubuntu、Windows の最新バージョンをサポートしています。 Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

{% if currentVersion ver_gt "enterprise-server@2.21" %}You must ensure that Git is in the PATH variable on your self-hosted runners.{% else %}If you use a self-hosted runner, you must ensure that Git is in the PATH variable.{% endif %}

### Changing the languages that are analyzed

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} automatically detects code written in the supported languages.

{% data reusables.code-scanning.supported-languages %}

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

    runs-on: ubuntu-latest

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
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. たとえば、`foo/**`、`**/foo`、および `foo/**/bar` はすべて使用できる構文ですが、`**foo` は使用できません。 ただし、例に示すように、単一の * を他の文字と一緒に使用できます。 You'll need to quote anything that contains a `*` character.

{% endnote %}

For compiled languages, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. ビルドからディレクトリを除外するために使用するコマンドは、ビルドシステムによって異なります。 For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

特定のディレクトリのコードを変更すると、monorepo の一部をすばやく分析できます。 ビルドステップでディレクトリを除外し、ワークフローファイルで [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) の`paths-ignore` および `paths` キーワードを使用する必要があります。

#### 設定ファイルの例

{% data reusables.code-scanning.example-configuration-files %}

### コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)."

### {% data variables.product.prodname_code_scanning %} 用の設定ファイルを作成できます。

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. ワークフローに `upload-sarif` アクションを追加することで、{% data variables.product.prodname_dotcom %} のサードパーティツールからのコード分析を表示できます。 詳しい情報については、「[SARIF ファイルを GitHub にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。
