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

You can run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_location %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. Before you can configure {% data variables.product.prodname_code_scanning %} for a repository, you must enable {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

The following query suites are built into {% data variables.product.prodname_code_scanning %} and available for use in your configuration file.

Before you can configure {% data variables.product.prodname_code_scanning %} for a repository, you must enable {% data variables.product.prodname_code_scanning %} by adding a {% data variables.product.prodname_actions %} workflow to the repository. The default {% data variables.product.prodname_code_scanning %} workflow uses the `on.push` event to trigger a code scan on every push to any branch containing the workflow file.

{% data reusables.code-scanning.edit-workflow %}

You can write a configuration file for {% data variables.product.prodname_code_scanning %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} saves workflow files in the `.github/workflows` directory of your repository. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. Navigiere in Deinem Repository zu der Workflow-Datei, die Du bearbeiten möchtest.
1. Um den Workflow-Editor zu öffnen, klickst Du in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}. ![Schaltfläche zum Editieren der Workflow-Datei](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request. ![Commit update to codeql.yml workflow](/assets/images/help/repository/code-scanning-workflow-update.png)

For more information about editing workflow files, see "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### Configuring frequency

You can scan code on a schedule or when specific events occur in a repository.

Scanning code on every push to the repository, and every time a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Scanning code on a schedule informs you about the latest vulnerabilities and errors that {% data variables.product.company_short %}, security researchers, and the community discover, even when developers aren't actively maintaining the repository.

#### Scanning on push

If you use the default workflow, {% data variables.product.prodname_code_scanning %} will scan the code in your repository once a week, in addition to the scans triggered by events. To adjust this schedule, edit the `cron` value in the workflow. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)“.

#### Scanning pull requests

**Note**: The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths`. When they are used to modify `on.<push|pull_request>` in a workflow file, they determine whether the actions will be run when someone modifies code in the specified directories. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)“.

For more information about the `pull_request` event, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)."

#### Scanning on a schedule

The default {% data variables.product.prodname_code_scanning %} workflow uses the `pull_request` event to trigger a code scan on the `HEAD` commit of a pull request. To adjust this schedule, edit the `cron` value in the workflow. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)“.

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} only runs scheduled jobs that are in workflows on the default branch. Changing the schedule in a workflow on any other branch has no effect until you merge the branch into the default branch.

{% endnote %}

#### Beispiel

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

### Specifying an operating system

If your code requires a specific operating system to compile, you can configure this in your workflow. Edit the value of `jobs.<job_id>.runs-on` to specify the operating system for the machine that runs your {% data variables.product.prodname_code_scanning %} actions. {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```
{% endif %}

{% data variables.product.prodname_code_scanning_capc %} supports the latest versions of macOS, Ubuntu, and Windows. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

### Overriding automatic language detection

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring {% data variables.product.prodname_code_scanning %} for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages)."

{% data reusables.code-scanning.supported-languages %}

{% data variables.product.prodname_code_scanning_capc %} automatically detects and scans code written in the supported languages.

To override automatic language detection, add `with:languages:` to the `init` action in your workflow. The keywords for the supported languages are `cpp`, `csharp`, `go`, `java`, `javascript`, and `python`.

For example, the following configuration limits {% data variables.product.prodname_code_scanning %} to C/C++, C#, and Python.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```

### Running additional queries

{% data reusables.code-scanning.run-additional-queries %}

To add one or more query suites, add a `queries` section to your configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - queries: COMMA-SEPARATED LIST OF PATHS
```

You can also run additional query suites by specifying these in a configuration file. Query suites are collections of queries, usually grouped by purpose or language.

{% data reusables.code-scanning.codeql-query-suites %}

You can run additional queries by specifying these in a configuration file. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. For examples of configuration files, see "[Example configuration files](#example-configuration-files)."

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - config-file: ./.github/codeql/codeql-config.yml
    - queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Using a third-party code scanning tool

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. This example loads the configuration file _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a public, remote repository. For remote repositories, you can use the _owner/repository/file.yml@branch_ syntax. The settings in the file are written in YAML format.

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

If you only want to run custom queries, you can disable the default security queries by adding `disable-default-queries: true` to your configuration file.

#### Specifying directories to scan

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from scans by adding a `paths-ignore` array.

``` yaml
paths: 
  - src 
paths-ignore: 
  - node_modules
  - '**/*.test.js'
```

{% note %}

**Note**:

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)“.
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

{% endnote %}

For C/C++, C#, and Java, if you want to limit {% data variables.product.prodname_code_scanning %} to specific directories in your project, you must specify appropriate build steps in the workflow. The commands you need to use to exclude a directory from the build will depend on your build system. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

You can quickly analyze small portions of a monorepo when you modify code in specific directories. You'll need to both exclude directories in your build steps and use the `paths-ignore` and `paths` keywords for [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) in your workflow file.

#### Example configuration files

{% data reusables.code-scanning.example-configuration-files %}

### Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages)."

### Accessing private repositories

If your workflow for {% data variables.product.prodname_code_scanning %} accesses private repositories on {% data variables.product.prodname_dotcom %}, you'll need to configure Git to authenticate with a personal access token. Define the secret in the runner environment by using `jobs.<job_id>.steps.env` in your workflow before any {% data variables.product.prodname_codeql %} actions. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" and "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

For example, the following configuration has Git replace the full URLs to the `github/foo`, `github/bar`, and `github/baz` repositories on {% data variables.product.prodname_dotcom_the_website %} with URLs that include the personal access token that you store in the `ACCESS_TOKEN` environment variable.

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

### Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

You can display code analysis from a third-party tool in {% data variables.product.prodname_dotcom %} by adding the `upload-sarif` action to your workflow. You can upload code analysis data with the `upload-sarif` action. For more information, see "[Uploading a SARIF file to GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)."
