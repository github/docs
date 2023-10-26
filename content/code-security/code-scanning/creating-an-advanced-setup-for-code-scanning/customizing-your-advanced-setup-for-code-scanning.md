---
title: Customizing {% ifversion code-scanning-without-workflow %}your advanced setup for {% endif %}code scanning
intro: 'You can customize how {% ifversion code-scanning-without-workflow %}your advanced setup {% else %}{% data variables.product.prodname_dotcom %} {% endif %}scans the code in your project for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can customize {% data variables.product.prodname_code_scanning %} for the repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Customize {% ifversion code-scanning-without-workflow %}advanced setup{% else %}code scanning{% endif %}
allowTitleToDifferFromFilename: true
---
<!--The CodeQL CLI man pages include a link to a section of the article. If you rename this article,
make sure that you also update the MS short link: https://aka.ms/code-scanning-docs/config-file.-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% data reusables.code-scanning.codeql-action-version-ghes %}

## About {% data variables.product.prodname_code_scanning %} configuration

You can run {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system. For more information, see "[AUTOTITLE](/actions/learn-github-actions)" or "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

{% ifversion code-scanning-without-workflow %}With advanced setup for {% data variables.product.prodname_code_scanning %}, you can customize a {% data variables.product.prodname_code_scanning %} workflow for granular control over your configuration. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."{% else %}This article is about running {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_name %} using actions.{% endif %}

{% ifversion code-scanning-without-workflow %}{% else %}Before you can customize {% data variables.product.prodname_code_scanning %} for a repository, you must configure {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

{% data reusables.code-scanning.edit-workflow %}

{% endif %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% ifversion fpt or ghec %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.code-scanning.codeql_workflow %} file.

## Editing a {% data variables.product.prodname_code_scanning %} workflow

{% data variables.product.prodname_dotcom %} saves workflow files in the _.github/workflows_ directory of your repository. You can find a workflow you have added by searching for its file name. For example, by default, the workflow file for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} is called _codeql-analysis.yml_.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click {% octicon "pencil" aria-label="Edit file" %}.
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request.

For more information about editing workflow files, see "[AUTOTITLE](/actions/learn-github-actions)."

## Configuring frequency

You can configure the {% data variables.code-scanning.codeql_workflow %} to scan code on a schedule or when specific events occur in a repository.

Scanning code when someone pushes a change, and whenever a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Scanning code on a schedule informs you about the latest vulnerabilities and errors that {% data variables.product.company_short %}, security researchers, and the community discover, even when developers aren't actively maintaining the repository.

### Scanning on push

By default, the {% data variables.code-scanning.codeql_workflow %} uses the `on.push` event to trigger a code scan on every push to the default branch of the repository and any protected branches. For {% data variables.product.prodname_code_scanning %} to be triggered on a specified branch, the workflow must exist in that branch. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#on)."

If you scan on push, then the results appear in the **Security** tab for your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

Additionally, when an `on:push` scan returns results that can be mapped to an open pull request, these alerts will automatically appear on the pull request in the same places as other pull request alerts. The alerts are identified by comparing the existing analysis of the head of the branch to the analysis for the target branch. For more information on {% data variables.product.prodname_code_scanning %} alerts in pull requests, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

### Scanning pull requests

The default {% data variables.code-scanning.codeql_workflow %} uses the `pull_request` event to trigger a code scan on pull requests targeted against the default branch. {% ifversion ghes %}The `pull_request` event is not triggered if the pull request was opened from a private fork.{% else %}If a pull request is from a private fork, the `pull_request` event will only be triggered if you've selected the "Run workflows from fork pull requests" option in the repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}

For more information about the `pull_request` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request)."

If you scan pull requests, then the results appear as alerts in a pull request check. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

Using the `pull_request` trigger, configured to scan the pull request's merge commit rather than the head commit, will produce more efficient and accurate results than scanning the head of the branch on each push. However, if you use a CI/CD system that cannot be configured to trigger on pull requests, you can still use the `on:push` trigger and {% data variables.product.prodname_code_scanning %} will map the results to open pull requests on the branch and add the alerts as annotations on the pull request. For more information, see "[Scanning on push](#scanning-on-push)."

{% ifversion fpt or ghec %}

{% note %}

**Note:** If your repository is configured with a merge queue, you need to include the `merge_group` event as an additional trigger for {% data variables.product.prodname_code_scanning %}. This will ensure that pull requests are also scanned when they are added to a merge queue. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)."

{% endnote %}

{% endif %}

### Avoiding unnecessary scans of pull requests

You might want to avoid a code scan being triggered on specific pull requests targeted against the default branch, irrespective of which files have been changed. You can configure this by specifying `on:pull_request:paths-ignore` or `on:pull_request:paths` in the {% data variables.product.prodname_code_scanning %} workflow. For example, if the only changes in a pull request are to files with the file extensions `.md` or `.txt` you can use the following `paths-ignore` array.

``` yaml copy
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

- `on:pull_request:paths-ignore` and `on:pull_request:paths` set conditions that determine whether the actions in the workflow will run on a pull request. They don't determine what files will be analyzed when the actions _are_ run. When a pull request contains any files that are not matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, the workflow runs the actions and scans all of the files changed in the pull request, including those matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, unless the files have been excluded. For information on how to exclude files from analysis, see "[Specifying directories to scan](#specifying-directories-to-scan)."{% ifversion code-scanning-alerts-in-pr-diff %}{% else %}
- For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} workflow files, don't use the `paths-ignore` or `paths` keywords with the `on:push` event as this is likely to cause missing analyses. For accurate results, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} needs to be able to compare new changes with the analysis of the previous commit.
{% endif %}

{% endnote %}

For more information about using `on:pull_request:paths-ignore` and `on:pull_request:paths` to determine when a workflow will run for a pull request, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

### Scanning on a schedule

If you use the default {% data variables.code-scanning.codeql_workflow %}, the workflow will scan the code in your repository once a week, in addition to the scans triggered by events. To adjust this schedule, edit the `cron` value in the workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onschedule)."

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} only runs scheduled jobs that are in workflows on the default branch. Changing the schedule in a workflow on any other branch has no effect until you merge the branch into the default branch.

{% endnote %}

### Example

The following example shows a {% data variables.code-scanning.codeql_workflow %} for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml copy
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

This workflow scans:
- Every push to the default branch and the protected branch
- Every pull request to the default branch
- The default branch every Monday at 14:20 UTC

## Specifying an operating system

{% ifversion codeql-swift-beta %}
{% note %}

**Notes**:

- Code scanning of Swift code uses macOS runners by default. {% ifversion fpt or ghec %}{% data variables.product.company_short %}-hosted macOS runners are more expensive than Linux and Windows runners, so you should consider only scanning the build step. For more information about configuring code scanning for Swift, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#considerations-for-building-swift)." For more information about pricing for {% data variables.product.company_short %}-hosted runners, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."{% endif %}

- {% data reusables.code-scanning.default-setup-swift-self-hosted-runners %}

{% endnote %}

{% endif %}

If your code requires a specific operating system to compile, you can configure the operating system in your {% data variables.code-scanning.codeql_workflow %}. Edit the value of `jobs.analyze.runs-on` to specify the operating system for the machine that runs your {% data variables.product.prodname_code_scanning %} actions. {% ifversion ghes %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% else %}

``` yaml copy
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

If you choose to use a self-hosted runner for code scanning, you can specify an operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.{% endif %}

``` yaml copy
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} supports the latest versions of Ubuntu, Windows, and macOS. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)."

{% ifversion ghes %}You must ensure that Git is in the PATH variable on your self-hosted runners.{% else %}If you use a self-hosted runner, you must ensure that Git is in the PATH variable.{% endif %} For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

For recommended specifications (RAM, CPU cores, and disk) for running {% data variables.product.prodname_codeql %} analysis{% ifversion not ghes %} on self-hosted machines{% endif %}, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

## Specifying the location for {% data variables.product.prodname_codeql %} databases

In general, you do not need to worry about where the {% data variables.code-scanning.codeql_workflow %} places {% data variables.product.prodname_codeql %} databases since later steps will automatically find databases created by previous steps. However, if you are writing a custom workflow step that requires the {% data variables.product.prodname_codeql %} database to be in a specific disk location, for example to upload the database as a workflow artifact, you can specify that location using the `db-location` parameter under the `init` action.

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.runner_temp }}/my_location'{% endraw %}
```

The {% data variables.code-scanning.codeql_workflow %} will expect the path provided in `db-location` to be writable, and either not exist, or be an empty directory. When using this parameter in a job running on a self-hosted runner or using a Docker container, it's the responsibility of the user to ensure that the chosen directory is cleared between runs, or that the databases are removed once they are no longer needed. {% ifversion fpt or ghec or ghes %} This is not necessary for jobs running on {% data variables.product.prodname_dotcom %}-hosted runners, which obtain a fresh instance and a clean filesystem each time they run. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."{% endif %}

If this parameter is not used, the {% data variables.code-scanning.codeql_workflow %} will create databases in a temporary location of its own choice. Currently the default value is {% raw %}`${{ github.runner_temp }}/codeql_databases`{% endraw %}.

## Changing the languages that are analyzed

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} automatically detects code written in the supported languages.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data variables.product.prodname_codeql %} uses the following language identifiers:

{% data reusables.code-scanning.codeql-language-identifiers-table %}

The default {% data variables.code-scanning.codeql_workflow %} file contains a matrix called `language` which lists the languages in your repository that are analyzed. {% data variables.product.prodname_codeql %} automatically populates this matrix when you add {% data variables.product.prodname_code_scanning %} to a repository. Using the `language` matrix optimizes {% data variables.product.prodname_codeql %} to run each analysis in parallel. We recommend that all workflows adopt this configuration due to the performance benefits of parallelizing builds. For more information about matrices, see "[AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs)."

{% data reusables.code-scanning.specify-language-to-analyze %}

If your workflow uses the `language` matrix then {% data variables.product.prodname_codeql %} is hardcoded to analyze only the languages in the matrix. To change the languages you want to analyze, edit the value of the matrix variable. You can remove a language to prevent it being analyzed or you can add a language that was not present in the repository when {% data variables.product.prodname_code_scanning %} was configured. For example, if the repository initially only contained JavaScript when {% data variables.product.prodname_code_scanning %} was configured, and you later added Python code, you will need to add `python` to the matrix.

```yaml copy
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: [{% ifversion codeql-language-identifiers-311 %}'javascript-typescript'{% else %}'javascript'{% endif %}, 'python']
```

If your workflow does not contain a matrix called `language`, then {% data variables.product.prodname_codeql %} is configured to run analysis sequentially. If you don't specify languages in the workflow, {% data variables.product.prodname_codeql %} automatically detects, and attempts to analyze, any supported languages in the repository. If you want to choose which languages to analyze, without using a matrix, you can use the `languages` parameter under the `init` action.

```yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: {% ifversion codeql-language-identifiers-311 %}c-cpp{% else %}cpp{% endif %}, csharp, python
```

{% ifversion codeql-python-no-auto-dependencies %}

## Analyzing Python dependencies

{% note %}

**Notes:**
- As of July 12, 2023, automatic dependency installation is disabled by default for new users of {% data variables.product.prodname_codeql %} for Python, with new users defined as those who have no prior Python projects set up for code scanning with {% data variables.product.prodname_codeql %} via advanced setup.
- Existing code scanning users that have already set up {% data variables.product.prodname_codeql %} to scan at least one Python project will not see any changes in behavior, even to newly configured repositories. However, for improved scan times, we encourage users to disable dependency installation by setting `setup-python-dependencies: false` in the "Initialize CodeQL" step of the workflow.
- Automatic installation of dependencies will be deprecated for all users by the end of 2023.

{% endnote %}

For GitHub-hosted runners that use Linux only, the {% data variables.code-scanning.codeql_workflow %} will try to auto-install Python dependencies to give more results for the {% data variables.product.prodname_codeql %} analysis. You can control this behavior by specifying the `setup-python-dependencies` parameter for the action called by the "Initialize CodeQL" step. By default, this parameter is set to `true`:

- If the repository contains code written in Python, the "Initialize CodeQL" step installs the necessary dependencies on the GitHub-hosted runner. If the auto-install succeeds, the action also sets the environment variable `CODEQL_PYTHON` to the Python executable file that includes the dependencies.

- If the repository doesn't have any Python dependencies, or the dependencies are specified in an unexpected way, you'll get a warning and the action will continue with the remaining jobs. The action can run successfully even when there are problems interpreting dependencies, but the results may be incomplete.

Alternatively, you can install Python dependencies manually on any operating system. You will need to add `setup-python-dependencies` and set it to `false`, as well as set `CODEQL_PYTHON` to the Python executable that includes the dependencies, as shown in this workflow extract:

```yaml copy
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
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
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```

{% endif %}

## Defining the alert severities that give a check failure for a pull request

By default, only alerts with the severity level of `Error` or security severity level of `Critical` or `High` will cause a pull request check failure, and a check will still succeed with alerts of lower severities. You can change the levels of alert severities and of security severities that will cause a pull request check failure in your repository settings. For more information about severity levels, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-details)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghec %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", in the "Protection rules" section, use the drop-down menu to define which alerts should cause a check failure. Choose one level for alerts of type "Security" and one level for all other alerts.{% else %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", to the right of "Check Failure", use the drop-down menu to select the level of severity you would like to cause a pull request check failure.{% endif %}

## Configuring a category for the analysis

Use `category` to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. The category you specify in your workflow will be included in the SARIF results file.

This parameter is particularly useful if you work with monorepos and have multiple SARIF files for different components of the monorepo.

``` yaml copy
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

If you don't specify a `category` parameter in your workflow, {% data variables.product.product_name %} will generate a category name for you, based on the name of the workflow file triggering the action, the action name, and any matrix variables. For example:
- The `.github/workflows/codeql-analysis.yml` workflow and the `analyze` action will produce the category `.github/workflows/codeql.yml:analyze`.
- The `.github/workflows/codeql-analysis.yml` workflow, the `analyze` action, and the `{language: {% ifversion codeql-language-identifiers-311 %}javascript-typescript{% else %}javascript{% endif %}, os: linux}` matrix variables will produce the category `.github/workflows/codeql-analysis.yml:analyze/language:{% ifversion codeql-language-identifiers-311 %}javascript-typescript{% else %}javascript{% endif %}/os:linux`.

The `category` value will appear as the `<run>.automationDetails.id` property in SARIF v2.1.0. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)."

Your specified category will not overwrite the details of the `runAutomationDetails` object in the SARIF file, if included.

{% ifversion codeql-model-packs-java %}

## Extending {% data variables.product.prodname_codeql %} coverage with {% data variables.product.prodname_codeql %} model packs

If your codebase depends on a library or framework that is not recognized by the standard queries in {% data variables.product.prodname_codeql %}, you can extend the {% data variables.product.prodname_codeql %} coverage in your {% data variables.product.prodname_code_scanning %} workflow by specifying published {% data variables.product.prodname_codeql %} model packs. For more information about creating your own model packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-model-pack)."

{% data reusables.code-scanning.beta-model-packs %}

To add one or more published {% data variables.product.prodname_codeql %} model packs, specify them inside the `with: packs:` entry within the `uses: {% data reusables.actions.action-codeql-action-init %}` section of the workflow. Within `packs` you specify one or more packages to use and, optionally, which version to download. Where you don't specify a version, the latest version is downloaded. If you want to use packages that are not publicly available, you need to set the `GITHUB_TOKEN` environment variable to a secret that has access to the packages. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)" and "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: security-extended
    packs: my-company/my-java-queries@~7.8.9,my-repo/my-java-model-pack
```

In this example, the default queries will be run for Java, as well as the queries from a version greater than or equal to `7.8.9` and less than `7.9.0` of the query pack `my-company/my-java-queries`. The dependencies modeled in the latest version of the model pack `my-repo/my-java-model-pack` will be available to both the default queries and those in `my-company/my-java-queries`.

{% endif %}

## Running additional queries

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}

### Using query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

To add one or more {% data variables.product.prodname_codeql %} query packs (beta), add a `with: packs:` entry within the `uses: {% data reusables.actions.action-codeql-action-init %}` section of the workflow. Within `packs` you specify one or more packages to use and, optionally, which version to download. Where you don't specify a version, the latest version is downloaded. If you want to use packages that are not publicly available, you need to set the `GITHUB_TOKEN` environment variable to a secret that has access to the packages. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)" and "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

{% note %}

**Note:** For workflows that generate {% data variables.product.prodname_codeql %} databases for multiple languages, you must instead specify the {% data variables.product.prodname_codeql %} query packs in a configuration file. For more information, see "[Specifying {% data variables.product.prodname_codeql %} query packs](#specifying-codeql-query-packs)" below.

{% endnote %}

In the example below, `scope` is the organization or personal account that published the package. When the workflow runs, the four {% data variables.product.prodname_codeql %} query packs are downloaded from {% data variables.product.product_name %} and the default queries or query suite for each pack run:
- The latest version of `pack1` is downloaded and all default queries are run.
- Version 1.2.3 of `pack2` is downloaded and all default queries are run.
- The latest version of `pack3` that is compatible with version 3.2.1 is downloaded and all queries are run.
- Version 4.5.6 of `pack4` is downloaded and only the queries found in `path/to/queries` are run.

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

{% ifversion query-pack-compatibility %}
{% note %}

**Note:** If you specify a particular version of a query pack to use,
beware that the version you specify may eventually become too old to
be used efficiently by the default
{% data variables.product.prodname_codeql %} engine used by the
{% data variables.product.prodname_codeql %} action.
To ensure optimal performance, if you need to specify exact query pack versions, you should consider reviewing periodically whether the pinned version of the query pack needs to be moved forward.

For more information about pack compatibility, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#about-codeql-pack-compatibility)."

{% endnote %}
{% endif %}

### Downloading {% data variables.product.prodname_codeql %} packs from {% data variables.product.prodname_ghe_server %}

If your workflow uses packs that are published on a {% data variables.product.prodname_ghe_server %} installation, you need to tell your workflow where to find them. You can do this by using the `registries` input of the {% data reusables.actions.action-codeql-action-init %} action. This input accepts a list of `url`, `packages`, and `token` properties as shown below.

```yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

The package patterns in the registries list are examined in order, so you should generally place the most specific package patterns first. The values for `token` must be a {% data variables.product.pat_v1 %} generated by the GitHub instance you are downloading from with the `read:packages` permission.

Notice the `|` after the `registries` property name. This is important since  {% data variables.product.prodname_actions %} inputs can only accept strings. Using the `|` converts the subsequent text to a string, which is parsed later by the {% data reusables.actions.action-codeql-action-init %} action.

### Using queries in QL packs

{% endif %}
To add one or more queries, add a `with: queries:` entry within the `uses: {% data reusables.actions.action-codeql-action-init %}` section of the workflow. If the queries are in a private repository, use the `external-repository-token` parameter to specify a token that has access to checkout the private repository.

You can also specify query suites in the value of `queries`. Query suites are collections of queries, usually grouped by purpose or language.

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of queries / packs / suites to run.
    # This may include paths or a built in suite, for example:
    # security-extended or security-and-quality.
    queries: security-extended
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}

### Working with custom configuration files

{% endif %}

If you also use a configuration file for custom settings, any additional {% ifversion codeql-packs %}packs or {% endif %}queries specified in your workflow are used instead of those specified in the configuration file. If you want to run the combined set of additional {% ifversion codeql-packs %}packs or {% endif %}queries, prefix the value of {% ifversion codeql-packs %}`packs` or {% endif %}`queries` in the workflow with the `+` symbol. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)."

In the following example, the `+` symbol ensures that the specified additional {% ifversion codeql-packs %}packs and {% endif %}queries are used together with any specified in the referenced configuration file.

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```
<!-- Anchor to maintain the current CodeQL CLI manual pages link: https://aka.ms/code-scanning-docs/config-file -->
<a name="using-a-custom-configuration-file"></a>

<!-- Anchor to maintain the old CodeQL CLI manual pages link: https://aka.ms/docs-config-file -->
<a name="example-configuration-files"></a>

## Using a custom configuration file

A custom configuration file is an alternative way to specify additional {% ifversion codeql-packs %}packs and {% endif %}queries to run. You can also use the file to disable the default queries{% ifversion code-scanning-exclude-queries-from-analysis %}, exclude or include specific queries,{% endif %} and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. This example loads the configuration file _./.github/codeql/codeql-config.yml_.

``` yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

If the configuration file is located in an external private repository, use the `external-repository-token` parameter of the `init` action to specify a token that has access to the private repository.

```yaml copy
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

The settings in the configuration file are written in YAML format.

{% ifversion codeql-packs %}

### Specifying {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

You specify {% data variables.product.prodname_codeql %} query packs in an array. Note that the format is different from the format used by the workflow file.

{% raw %}

``` yaml copy
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```

{% endraw %}

The full format for specifying a query pack is `scope/name[@version][:path]`. Both `version` and `path` are optional. `version` is semver version range. If it is missing, the latest version is used. For more information about semver ranges, see the [semver docs on npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

If you have a workflow that generates more than one {% data variables.product.prodname_codeql %} database, you can specify any {% data variables.product.prodname_codeql %} query packs to run in a custom configuration file using a nested map of packs.

{% raw %}

``` yaml copy
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```

{% endraw %}
{% endif %}

### Specifying additional queries

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml copy
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below. For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

### Disabling the default queries

If you only want to run custom queries, you can disable the default security queries by using `disable-default-queries: true`.

{% ifversion code-scanning-exclude-queries-from-analysis %}

### Excluding specific queries from analysis

You can add `exclude` and `include` filters to your custom configuration file, to specify the queries you want to exclude or include in the analysis.

This is useful if you want to exclude, for example:
- Specific queries from the default suites (`security`, `security-extended` and `security-and-quality`).
- Specific queries whose results do not interest you.
- All the queries that generate warnings and recommendations.

You can use `exclude` filters similar to those in the configuration file below to exclude queries that you want to remove from the default analysis. In the example of configuration file below, both the `js/redundant-assignment` and the `js/useless-assignment-to-local` queries are excluded from analysis.

```yaml copy
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```

To find the id of a query, you can click the alert in the list of alerts in the **Security** tab. This opens the alert details page. The `Rule ID` field contains the query id. For more information about the alert details page, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-details)."

{% tip %}

**Tips:**
- The order of the filters is important. The first filter instruction that appears after the instructions about the queries and query packs determines whether the queries are included or excluded by default.
- Subsequent instructions are executed in order and the instructions that appear later in the file take precedence over the earlier instructions.

{% endtip %}

You can find another example illustrating the use of these filters in the "[Example configuration files](#example-configuration-files)" section.

For more information about using `exclude` and `include` filters in your custom configuration file, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites#filtering-the-queries-in-a-query-suite)." For information on the query metadata you can filter on, see "[Metadata for CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)."

{% endif %}

### Specifying directories to scan

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python, Ruby, and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from analysis by adding a `paths-ignore` array.

``` yaml copy
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Note**:

- The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."
- The filter pattern characters `?`, `+`, `[`, `]`, and `!` are not supported and will be matched literally.
- `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

{% endnote %}

For compiled languages, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. The commands you need to use to exclude a directory from the build will depend on your build system. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

You can quickly analyze small portions of a monorepo when you modify code in specific directories. You'll need to both exclude directories in your build steps and use the `paths-ignore` and `paths` keywords for [`on.<push|pull_request>`](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) in your workflow.

### Example configuration files

{% data reusables.code-scanning.example-configuration-files %}

{% ifversion code-scanning-config-input %}

## Specifying configuration details using the `config` input

If you'd prefer to specify additional configuration details in the workflow file, you can use the `config` input of the `init` command of the {% data variables.product.prodname_codeql %} action. The value of this input must be a YAML string that follows the configuration file format documented at "[Using a custom configuration file](#using-a-custom-configuration-file)" above.

### Example configuration

This step in a {% data variables.product.prodname_actions %} workflow file uses a `config` input to disable the default queries, add the `security-extended` query suite, and exclude queries that are tagged with `cwe-020`.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: {% raw %}${{ matrix.language }}{% endraw %}
    config: |
      disable-default-queries: true
      queries:
        - uses: security-extended
      query-filters:
        - exclude:
          tags: /cwe-020/
```

You can use the same approach to specify any valid configuration options in the workflow file.

{% tip %}

**Tip:**

You can share one configuration across multiple repositories using  {% data variables.product.prodname_actions %} variables. One benefit of this approach is that you can update the configuration in a single place without editing the workflow file.

In the following example, `vars.CODEQL_CONF` is a {% data variables.product.prodname_actions %} variable. Its value can be the contents of any valid configuration file. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-configuration-variables-for-multiple-workflows)."

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: {% raw %}${{ matrix.language }}{% endraw %}
    config: {% raw %}${{ vars.CODEQL_CONF }}{% endraw %}
```

{% endtip %}
{% endif %}

## Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages)."

## Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. You can upload code analysis data with the `upload-sarif` action. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."
