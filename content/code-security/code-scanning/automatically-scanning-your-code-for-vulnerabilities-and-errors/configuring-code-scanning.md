---
title: Configuring code scanning
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans the code in your project for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About {% data variables.product.prodname_code_scanning %} configuration

You can run {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system. For more information, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" or 
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
"[About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)."
{%- else %}
"[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}

This article is about running {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %} using actions.

Before you can configure {% data variables.product.prodname_code_scanning %} for a repository, you must set up {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes > 2.21 %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% ifversion fpt %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

## Editing a {% data variables.product.prodname_code_scanning %} workflow

{% data variables.product.prodname_dotcom %} saves workflow files in the _.github/workflows_ directory of your repository. You can find a workflow you have added by searching for its file name. For example, by default, the workflow file for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} is called _codeql-analysis.yml_.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click {% octicon "pencil" aria-label="The edit icon" %}.
![Edit workflow file button](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request.
![Commit update to codeql.yml workflow](/assets/images/help/repository/code-scanning-workflow-update.png)

For more information about editing workflow files, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

## Configuring frequency

You can configure the {% data variables.product.prodname_codeql_workflow %} to scan code on a schedule or when specific events occur in a repository.

Scanning code when someone pushes a change, and whenever a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Scanning code on a schedule informs you about the latest vulnerabilities and errors that {% data variables.product.company_short %}, security researchers, and the community discover, even when developers aren't actively maintaining the repository.

### Scanning on push

By default, the {% data variables.product.prodname_codeql_workflow %} uses the `on.push` event to trigger a code scan on every push to the default branch of the repository and any protected branches. For {% data variables.product.prodname_code_scanning %} to be triggered on a specified branch, the workflow must exist in that branch. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)."

If you scan on push, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

{% note %}

**Note**: If you want {% data variables.product.prodname_code_scanning %} alerts to appear as pull request checks, you must use the `pull_request` event, described below.

{% endnote %}

### Scanning pull requests

The default {% data variables.product.prodname_codeql_workflow %} uses the `pull_request` event to trigger a code scan on pull requests targeted against the default branch. {% ifversion ghes > 2.21 %}The `pull_request` event is not triggered if the pull request was opened from a private fork.{% else %}If a pull request is from a private fork, the `pull_request` event will only be triggered if you've selected the "Run workflows from fork pull requests" option in the repository settings. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}

For more information about the `pull_request` event, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)."

If you scan pull requests, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### Defining the severities causing pull request check failure

By default, only alerts with the severity level of `Error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %} or security severity level of `Critical` or `High`{% endif %} will cause a pull request check failure, and a check will still succeed with alerts of lower severities. You can change the levels of alert severities{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %} and of security severities{% endif %} that will cause a pull request check failure in your repository settings. For more information about severity levels, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#about-alerts-details)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Under "Code scanning", to the right of "Check Failure", use the drop-down menu to select the level of severity you would like to cause a pull request check failure. 
{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}
![Check failure setting](/assets/images/help/repository/code-scanning-check-failure-setting.png)
{% else %}
![Check failure setting](/assets/images/help/repository/code-scanning-check-failure-setting-ghae.png)
{% endif %}
{% endif %}

### Avoiding unnecessary scans of pull requests

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

**Notes**

* `on:pull_request:paths-ignore` and `on:pull_request:paths` set conditions that determine whether the actions in the workflow will run on a pull request. They don't determine what files will be analyzed when the actions _are_ run. When a pull request contains any files that are not matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, the workflow runs the actions and scans all of the files changed in the pull request, including those matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, unless the files have been excluded. For information on how to exclude files from analysis, see "[Specifying directories to scan](#specifying-directories-to-scan)."
* For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} workflow files, don't use the `paths-ignore` or `paths` keywords with the `on:push` event as this is likely to cause missing analyses. For accurate results, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} needs to be able to compare new changes with the analysis of the previous commit.

{% endnote %}

For more information about using `on:pull_request:paths-ignore` and `on:pull_request:paths` to determine when a workflow will run for a pull request, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

### Scanning on a schedule

If you use the default {% data variables.product.prodname_codeql_workflow %}, the workflow will scan the code in your repository once a week, in addition to the scans triggered by events. To adjust this schedule, edit the `cron` value in the workflow. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)."

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} only runs scheduled jobs that are in workflows on the default branch. Changing the schedule in a workflow on any other branch has no effect until you merge the branch into the default branch.

{% endnote %}

### Example

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

## Specifying an operating system

If your code requires a specific operating system to compile, you can configure the operating system in your {% data variables.product.prodname_codeql_workflow %}. Edit the value of `jobs.analyze.runs-on` to specify the operating system for the machine that runs your {% data variables.product.prodname_code_scanning %} actions. {% ifversion ghes > 2.21 %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% else %}

If you choose to use a self-hosted runner for code scanning, you can specify an operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% ifversion fpt %}For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."{% endif %}

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} supports the latest versions of Ubuntu, Windows, and macOS. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% ifversion ghes > 2.21 %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

{% ifversion ghes > 2.21 %}You must ensure that Git is in the PATH variable on your self-hosted runners.{% else %}If you use a self-hosted runner, you must ensure that Git is in the PATH variable.{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## Specifying the location for {% data variables.product.prodname_codeql %} databases

In general, you do not need to worry about where the {% data variables.product.prodname_codeql_workflow %} places {% data variables.product.prodname_codeql %} databases since later steps will automatically find databases created by previous steps. However, if you are writing a custom workflow step that requires the {% data variables.product.prodname_codeql %} database to be in a specific disk location, for example to upload the database as a workflow artifact, you can specify that location using the `db-location` parameter under the `init` action.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    db-location: '${{ github.workspace }}/codeql_dbs'
```
{% endraw %}

The {% data variables.product.prodname_codeql_workflow %} will expect the path provided in `db-location` to be writable, and either not exist, or be an empty directory. When using this parameter in a job running on a self-hosted runner or using a Docker container, it's the responsibility of the user to ensure that the chosen directory is cleared between runs, or that the databases are removed once they are no longer needed. This is not necessary for jobs running on {% data variables.product.prodname_dotcom %}-hosted runners, which obtain a fresh instance and a clean filesystem each time they run. For more information, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)."

If this parameter is not used, the {% data variables.product.prodname_codeql_workflow %} will create databases in a temporary location of its own choice.
{% endif %}

## Changing the languages that are analyzed

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
{% ifversion fpt %}
## Analyzing Python dependencies

For GitHub-hosted runners that use Linux only, the {% data variables.product.prodname_codeql_workflow %} will try to auto-install Python dependencies to give more results for the CodeQL analysis. You can control this behavior by specifying the `setup-python-dependencies` parameter for the action called by the "Initialize CodeQL" step. By default, this parameter is set to `true`:

-  If the repository contains code written in Python, the "Initialize CodeQL" step installs the necessary dependencies on the GitHub-hosted runner. If the auto-install succeeds, the action also sets the environment variable `CODEQL_PYTHON` to the Python executable file that includes the dependencies.

- If the repository doesn't have any Python dependencies, or the dependencies are specified in an unexpected way, you'll get a warning and the action will continue with the remaining jobs. The action can run successfully even when there are problems interpreting dependencies, but the results may be incomplete.

Alternatively, you can install Python dependencies manually on any operating system. You will need to add `setup-python-dependencies` and set it to `false`, as well as set `CODEQL_PYTHON` to the Python executable that includes the dependencies, as shown in this workflow extract:

```yaml
jobs:
  CodeQL-Build:

    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
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

{% ifversion fpt %}
## Configuring a category for the analysis

Use `category` to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. The category you specify in your workflow will be included in the SARIF results file. 

This parameter is particularly useful if you work with monorepos and have multiple SARIF files for different components of the monorepo.

{% raw %}
``` yaml
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow, 
        # GitHub will generate a default category name for you
        category: "my_category"
```
{% endraw %}

If you don't specify a `category` parameter in your workflow, {% data variables.product.prodname_dotcom %} will generate a category name for you, based on the name of the workflow file triggering the action, the action name, and any matrix variables. For example:
- The `.github/workflows/codeql-analysis.yml` workflow and the `analyze` action will produce the category `.github/workflows/codeql.yml:analyze`.
- The `.github/workflows/codeql-analysis.yml` workflow, the `analyze` action, and the `{language: javascript, os: linux}` matrix variables will produce the category `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

The `category` value will appear as the `<run>.automationDetails.id` property in SARIF v2.1.0. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)." 

Your specified category will not overwrite the details of the `runAutomationDetails` object in the SARIF file, if included.

{% endif %}

## Running additional queries

{% data reusables.code-scanning.run-additional-queries %}

{% if codeql-packs %}
### Using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-actions %}

To add one or more {% data variables.product.prodname_codeql %} query packs (beta), add a `with: packs:` entry within the `uses: github/codeql-action/init@v1` section of the workflow. Within `packs` you specify one or more packages to use and, optionally, which version to download. Where you don't specify a version, the latest version is downloaded. If you want to use packages that are not publicly available, you need to set the `GITHUB_TOKEN` environment variable to a secret that has access to the packages. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

{% note %}

**Note:** For workflows that generate {% data variables.product.prodname_codeql %} databases for multiple languages, you must instead specify the {% data variables.product.prodname_codeql %} query packs in a configuration file. For more information, see "[Specifying {% data variables.product.prodname_codeql %} query packs](#specifying-codeql-query-packs)" below.

{% endnote %}

In the example below, `scope` is the organization or personal account that published the package. When the workflow runs, the three {% data variables.product.prodname_codeql %} query packs are downloaded from {% data variables.product.product_name %} and the default queries or query suite for each pack run. The latest version of `pack1` is downloaded as no version is specified. Version 1.2.3 of `pack2` is downloaded, as well as the latest version of `pack3` that is compatible with version 1.2.3.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~1.2.3
```
{% endraw %}

### Using queries in QL packs
{% endif %}
To add one or more queries, add a `with: queries:` entry within the `uses: github/codeql-action/init@v1` section of the workflow. If the queries are in a private repository, use the `external-repository-token` parameter to specify a token that has access to checkout the private repository.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

You can also specify query suites in the value of `queries`. Query suites are collections of queries, usually grouped by purpose or language.

{% data reusables.code-scanning.codeql-query-suites %}

{% if codeql-packs %}
### Working with custom configuration files
{% endif %}

If you also use a configuration file for custom settings, any additional {% if codeql-packs %}packs or {% endif %}queries specified in your workflow are used instead of those specified in the configuration file. If you want to run the combined set of additional {% if codeql-packs %}packs or {% endif %}queries, prefix the value of {% if codeql-packs %}`packs` or {% endif %}`queries` in the workflow with the `+` symbol. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)."

In the following example, the `+` symbol ensures that the specified additional {% if codeql-packs %}packs and {% endif %}queries are used together with any specified in the referenced configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- if codeql-packs %}
    packs: +scope/pack1,scope/pack2@v1.2.3
    {% endif %}
```

## Using a custom configuration file

A custom configuration file is an alternative way to specify additional {% if codeql-packs %}packs and {% endif %}queries to run. You can also use the file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. This example loads the configuration file _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

If the configuration file is located in an external private repository, use the `external-repository-token` parameter of the `init` action to specify a token that has access to the private repository.

{% raw %}
```yaml
- uses: github/codeql-action/init@v1
  with:
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

The settings in the configuration file are written in YAML format.

{% if codeql-packs %}
### Specifying {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-actions %}

You specify {% data variables.product.prodname_codeql %} query packs in an array. Note that the format is different from the format used by the workflow file.

{% raw %}
``` yaml
packs: 
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1 
  # Use version 1.23 of 'pack2' 
  - scope/pack2@v1.2.3
  # Use the latest version of 'pack3' compatible with 1.23
  - scope/pack3@~1.2.3
```
{% endraw %}

If you have a workflow that generates more than one {% data variables.product.prodname_codeql %} database, you can specify any {% data variables.product.prodname_codeql %} query packs to run in a custom configuration file using a nested map of packs.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %}
{% endif %}

### Specifying additional queries

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below. For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

### Disabling the default queries

If you only want to run custom queries, you can disable the default security queries by using `disable-default-queries: true`.

### Specifying directories to scan

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
* The filter pattern characters `?`, `+`, `[`, `]`, and `!` are not supported and will be matched literally.
* `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

{% endnote %}

For compiled languages, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. The commands you need to use to exclude a directory from the build will depend on your build system. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

You can quickly analyze small portions of a monorepo when you modify code in specific directories. You'll need to both exclude directories in your build steps and use the `paths-ignore` and `paths` keywords for [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) in your workflow.

### Example configuration files

{% data reusables.code-scanning.example-configuration-files %}

## Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)."

## Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. You can upload code analysis data with the `upload-sarif` action. For more information, see "[Uploading a SARIF file to GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)."
