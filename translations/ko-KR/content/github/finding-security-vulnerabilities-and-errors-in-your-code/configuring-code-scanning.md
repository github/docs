---
title: Configuring code scanning
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans the code in your project for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### About {% data variables.product.prodname_code_scanning %} configuration

You can run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_location %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)." For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."

This article is about running {% data variables.product.prodname_code_scanning %} within {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.prodname_dotcom %}{% endif %}.

Before you can configure {% data variables.product.prodname_code_scanning %} for a repository, you must enable {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. For more information, see "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a {% data variables.product.prodname_code_scanning %} workflow

{% data variables.product.prodname_dotcom %} saves workflow files in the _.github/workflows_ directory of your repository. You can find a workflow you have enabled by searching for its file name. For example, by default, the workflow file for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} is called _codeql-analysis.yml_.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click {% octicon "pencil" aria-label="The edit icon" %}. ![Edit workflow file button](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request. ![Commit update to codeql.yml workflow](/assets/images/help/repository/code-scanning-workflow-update.png)

For more information about editing workflow files, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### Configuring frequency

You can configure the {% data variables.product.prodname_codeql_workflow %} to scan code on a schedule or when specific events occur in a repository.

Scanning code when someone pushes a change, and whenever a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Scanning code on a schedule informs you about the latest vulnerabilities and errors that {% data variables.product.company_short %}, security researchers, and the community discover, even when developers aren't actively maintaining the repository.

#### Scanning on push

By default, the {% data variables.product.prodname_codeql_workflow %} uses the `on.push` event to trigger a code scan on every push to the default branch of the repository and any protected branches. For {% data variables.product.prodname_code_scanning %} to be triggered on a specified branch, the workflow must exist in that branch. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)."

#### Scanning pull requests

The default {% data variables.product.prodname_codeql_workflow %} uses the `pull_request` event to trigger a code scan on pull requests targeted against the default branch. {% if currentVersion ver_gt "enterprise-server@2.21" %}The `pull_request` event is not triggered if the pull request was opened from a private fork.{% else %}If a pull request is from a private fork, the `pull_request` event will only be triggered if you've selected the "Run workflows from fork pull requests" option in the repository settings. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}

For more information about the `pull_request` event, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)."

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

**참고**

* `on:pull_request:paths-ignore` and `on:pull_request:paths` set conditions that determine whether the actions in the workflow will run on a pull request. They don't determine what files will be analyzed when the actions _are_ run. When a pull request contains any files that are not matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, the workflow runs the actions and scans all of the files changed in the pull request, including those matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, unless the files have been excluded. For information on how to exclude files from analysis, see "[Specifying directories to scan](#specifying-directories-to-scan)."
* For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} workflow files, don't use the `paths-ignore` or `paths` keywords with the `on:push` event as this is likely to cause missing analyses. For accurate results, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} needs to be able to compare new changes with the analysis of the previous commit.

{% endnote %}

For more information about using `on:pull_request:paths-ignore` and `on:pull_request:paths` to determine when a workflow will run for a pull request, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

#### Scanning on a schedule

If you use the default {% data variables.product.prodname_codeql_workflow %}, the workflow will scan the code in your repository once a week, in addition to the scans triggered by events. To adjust this schedule, edit the `cron` value in the workflow. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)."

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} only runs scheduled jobs that are in workflows on the default branch. Changing the schedule in a workflow on any other branch has no effect until you merge the branch into the default branch.

{% endnote %}

#### 예시

The following example shows a {% data variables.product.prodname_codeql_workflow %} for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 15 * * 0'
```

This workflow scans:
* Every push to the default branch and the protected branch
* Every pull request to the default branch
* The default branch at 3 P.M. every Sunday

### Specifying an operating system

If your code requires a specific operating system to compile, you can configure the operating system in your {% data variables.product.prodname_codeql_workflow %}. Edit the value of `jobs.analyze.runs-on` to specify the operating system for the machine that runs your {% data variables.product.prodname_code_scanning %} actions. {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% else %}

If you choose to use a self-hosted runner for code scanning, you can specify an operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% if currentVersion == "free-pro-team@latest" %}For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."{% endif %}

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} supports the latest versions of Ubuntu, Windows, and macOS. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

{% if currentVersion ver_gt "enterprise-server@2.21" %}You must ensure that Git is in the PATH variable on your self-hosted runners.{% else %}If you use a self-hosted runner, you must ensure that Git is in the PATH variable.{% endif %}

### Changing the languages that are analyzed

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} automatically detects code written in the supported languages.

{% data reusables.code-scanning.supported-languages %}

The default {% data variables.product.prodname_codeql_workflow %} file contains a build matrix called `language` which lists the languages in your repository that are analyzed. {% data variables.product.prodname_codeql %} automatically populates this matrix when you add {% data variables.product.prodname_code_scanning %} to a repository. Using the `language` matrix optimizes {% data variables.product.prodname_codeql %} to run each analysis in parallel. We recommend that all workflows adopt this configuration due to the performance benefits of parallelizing builds. For more information about build matrices, see "[Managing complex workflows](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)."

{% data reusables.code-scanning.specify-language-to-analyze %}

If your workflow uses the `language` matrix then {% data variables.product.prodname_codeql %} is hardcoded to analyze only the languages in the matrix. To change the languages you want to analyze, edit the value of the matrix variable. You can remove a language to prevent it being analyzed or you can add a language that was not present in the repository when {% data variables.product.prodname_code_scanning %} was enabled. For example, if the repository initially only contained JavaScript when {% data variables.product.prodname_code_scanning %} was enabled, and you later added Python code, you will need to add `python` to the matrix.

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
### Analyzing Python dependencies

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

### Running additional queries

{% data reusables.code-scanning.run-additional-queries %}

To add one or more queries, add a `with: queries:` entry within the `uses: github/codeql-action/init@v1` section of the workflow.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
```

You can also specify query suites in the value of `queries`. Query suites are collections of queries, usually grouped by purpose or language.

{% data reusables.code-scanning.codeql-query-suites %}

If you are also using a configuration file for custom settings, any additional queries specified in your workflow are used instead of any specified in the configuration file. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)."

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Using a custom configuration file

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. This example loads the configuration file _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a remote, public repository. Using a remote, public repository allows you to specify configuration options for multiple repositories in a single place. When you reference a configuration file located in a remote repository, you can use the _OWNER/REPOSITORY/FILENAME@BRANCH_ syntax. For example, _monacorp/shared/codeql-config.yml@main_.

The settings in the file are written in YAML format.

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

#### Disabling the default queries

If you only want to run custom queries, you can disable the default security queries by using `disable-default-queries: true`.

#### Specifying directories to scan

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from analysis by adding a `paths-ignore` array.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Note**:

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."
* `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

{% endnote %}

For compiled languages, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. The commands you need to use to exclude a directory from the build will depend on your build system. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

You can quickly analyze small portions of a monorepo when you modify code in specific directories. You'll need to both exclude directories in your build steps and use the `paths-ignore` and `paths` keywords for [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) in your workflow.

#### Example configuration files

{% data reusables.code-scanning.example-configuration-files %}

### Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages)."

### Accessing private repositories

If your workflow for {% data variables.product.prodname_code_scanning %} accesses a private repository, other than the repository that contains the workflow, you'll need to configure Git to authenticate with a personal access token. Define the secret in the runner environment by using `jobs.<job_id>.steps[*].env` in your workflow before any {% data variables.product.prodname_codeql %} actions. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" and "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

For example, the following configuration has Git replace the full URLs to the `ghost/foo`, `ghost/bar`, and `ghost/baz` repositories on {% data variables.product.prodname_dotcom_the_website %} with URLs that include the personal access token that you store in the `ACCESS_TOKEN` environment variable.

{% raw %}
```yaml
steps:
- name: Configure access to private repositories
  env:
    TOKEN: ${{ secrets.ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/ghost/foo".insteadOf "https://github.com/ghost/foo"
    git config --global url."https://${TOKEN}@github.com/ghost/bar".insteadOf "https://github.com/ghost/bar"
    git config --global url."https://${TOKEN}@github.com/ghost/baz".insteadOf "https://github.com/ghost/baz"
```
{% endraw %}

### Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. You can upload code analysis data with the `upload-sarif` action. For more information, see "[Uploading a SARIF file to GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)."
